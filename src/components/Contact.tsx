import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, User, AtSign, MessageSquare, Type, AtSign as EmailIcon } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
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
        setFormData({ name: '', email: '', subject: '', message: '' });
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
    'w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-electric/50 focus:ring-4 focus:ring-electric/10 transition-all duration-300';

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Hire Me Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Let's build <br />
              <span className="gradient-heading">something great.</span>
            </h2>
            
            <p className="text-lg text-slate-400 max-w-md leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 glass-card group">
                <div className="p-4 bg-electric/10 rounded-2xl text-electric-glow group-hover:scale-110 transition-transform">
                  <EmailIcon size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Direct Email</p>
                  <a href="mailto:rjkawsar151@gmail.com" className="text-xl font-bold hover:text-electric-glow transition-colors">
                    rjkawsar151@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 glass-card group">
                <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-400 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Available for</p>
                  <p className="text-xl font-bold">Freelance & Full-time</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 relative"
          >
            <div className="absolute top-0 right-10 -translate-y-1/2 p-4 glass-card border-none bg-electric shadow-xl shadow-blue-500/20">
              <Send size={24} className="text-white" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 flex items-center gap-2">
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
                <label className="text-xs font-mono text-slate-400 flex items-center gap-2">
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
                <label className="text-xs font-mono text-slate-400 flex items-center gap-2">
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
                className="w-full py-4 bg-electric hover:bg-electric-dark text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 flex items-center justify-center gap-3 active:scale-95"
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
