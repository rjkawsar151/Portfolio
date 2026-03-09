import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, User, AtSign, MessageSquare, Type, AtSign as EmailIcon, Phone } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        const data = await res.json();
        setStatus('error');
        setErrorMsg(data.error || 'Failed to send message.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  const inputClass =
    'w-full bg-black/5 border border-black/10 rounded-2xl px-5 py-4 text-black placeholder-slate-400 focus:outline-none focus:border-black/50 focus:ring-4 focus:ring-black/5 transition-all duration-300';

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Hire Me Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 border-l-4 border-black pl-8"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-slate-900">
              Let's build <br />
              <span className="text-slate-400">something great.</span>
            </h2>
            
            <p className="text-lg text-slate-700 font-medium max-w-md leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 glass-card group shadow-xl">
                <div className="p-4 bg-black/10 rounded-2xl text-black group-hover:scale-110 transition-transform">
                  <EmailIcon size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Direct Email</p>
                  <a href="mailto:rjkawsar151@gmail.com" className="text-xl font-black text-slate-900 hover:text-black transition-colors uppercase tracking-tight">
                    rjkawsar151@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 glass-card group shadow-xl">
                <div className="p-4 bg-black/10 rounded-2xl text-black group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Available for</p>
                  <p className="text-xl font-black text-slate-900 uppercase tracking-tight">Freelance & Full-time</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="glass-card p-10 relative shadow-2xl"
          >
            <div className="absolute top-0 right-10 -translate-y-1/2 p-4 bg-black rounded-2xl shadow-xl">
              <Send size={24} className="text-white" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <User size={14} /> Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className={inputClass}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <AtSign size={14} /> Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. john@example.com"
                  className={inputClass}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Phone size={14} /> WhatsApp Number <span className="text-slate-400 font-normal italic">(Optional)</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +880 1712-345678"
                  className={inputClass}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <MessageSquare size={14} /> Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={4}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === 'success' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm flex items-center gap-2">
                  <CheckCircle2 size={18} /> Message sent successfully!
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-center gap-2">
                  <AlertCircle size={18} /> {errorMsg}
                </motion.div>
              )}

               <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-5 bg-black text-white text-lg font-black uppercase tracking-widest rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-black/20 disabled:opacity-50 flex items-center justify-center gap-3 active:scale-95"
              >
                {status === 'sending' ? (
                  <><Loader2 className="animate-spin" size={20} /> Sending...</>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
