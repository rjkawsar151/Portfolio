import { motion } from 'framer-motion';
import { Settings, Shield, Zap, Search, LifeBuoy } from 'lucide-react';

const otherWorks = [
  {
    title: 'SMTP Infrastructure',
    description: 'Custom mail server configuration with high deliverability and TLS 1.3.',
    icon: <Zap className="text-blue-400" />
  },
  {
    title: 'SEO Strategy',
    description: 'Data-driven search engine optimization for Bengali and English keywords.',
    icon: <Search className="text-yellow-400" />
  },
  {
    title: 'IT Support',
    description: 'Enterprise-level technical support and network infrastructure management.',
    icon: <LifeBuoy className="text-red-400" />
  },
  {
    title: 'Server Audit',
    description: 'Security hardening and performance tuning for high-traffic Linux environments.',
    icon: <Shield className="text-green-400" />
  }
];

export default function OtherWorks() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex items-center gap-4 border-l-4 border-black pl-6"
        >
          <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900">Other <span className="text-slate-400">Works</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {otherWorks.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card p-8 group hover:bg-black/[0.03] shadow-xl border-t-4 border-black/5"
            >
              <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform w-fit p-4 bg-black/5 rounded-2xl">
                {work.icon}
              </div>
              <h3 className="text-xl font-black mb-3 uppercase text-slate-900 tracking-tight">{work.title}</h3>
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                {work.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
