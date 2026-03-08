const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['POST'],
}));
app.use(express.json());

// Rate limiting (simple in-memory)
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX = 3;

function checkRateLimit(ip) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, [now]);
    return true;
  }

  const timestamps = rateLimit.get(ip).filter(t => t > windowStart);
  timestamps.push(now);
  rateLimit.set(ip, timestamps);

  return timestamps.length <= RATE_LIMIT_MAX;
}

// SMTP Transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Verify transporter on startup
transporter.verify((error) => {
  if (error) {
    console.error('⚠️  SMTP connection failed:', error.message);
    console.log('📧 Server will still start, but emails won\'t be sent until SMTP is configured.');
  } else {
    console.log('✅ SMTP server is ready to send emails');
  }
});

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  const clientIp = req.ip || req.connection.remoteAddress;

  // Rate limit check
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0F172A; color: #E2E8F0; padding: 32px; border-radius: 12px;">
          <h2 style="color: #3B82F6; margin-bottom: 24px;">📬 New Portfolio Contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748B; font-size: 14px;"><strong>Name:</strong></td>
              <td style="padding: 8px 0; color: #E2E8F0; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748B; font-size: 14px;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #E2E8F0; font-size: 14px;"><a href="mailto:${email}" style="color: #3B82F6;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748B; font-size: 14px;"><strong>Subject:</strong></td>
              <td style="padding: 8px 0; color: #E2E8F0; font-size: 14px;">${subject || 'N/A'}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #334155; margin: 20px 0;" />
          <div style="padding: 16px; background: #1E293B; border-radius: 8px; margin-top: 12px;">
            <p style="color: #64748B; font-size: 12px; margin-bottom: 8px;">Message:</p>
            <p style="color: #E2E8F0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 11px; color: #475569;">Sent from Kawsar Hosen's Portfolio — Secured via TLS/587</p>
        </div>
      `,
    });

    res.json({ success: true, message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`\n🚀 Contact API server running on port ${PORT}`);
  console.log(`📧 SMTP Host: ${process.env.EMAIL_HOST || 'Not configured'}`);
  console.log(`📬 Emails will be sent to: ${process.env.EMAIL_TO || 'Not configured'}\n`);
});
