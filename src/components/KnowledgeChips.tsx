import { motion } from 'framer-motion';
import { Sparkles, Globe, Database, Megaphone, Layout } from 'lucide-react';

const knowledgeData = [
  {
    title: 'Vibe Coding',
    description: 'Bridging logic and aesthetics for immersive user experiences.',
    icon: <Sparkles className="text-yellow-400" />,
    color: 'border-yellow-500/30'
  },
  {
    title: 'Site Deployment',
    description: 'Expertise in Vercel, Netlify, and high-performance hosting.',
    icon: <Globe className="text-blue-400" />,
    color: 'border-blue-500/30'
  },
  {
    title: 'Database Config',
    description: 'Optimized MySQL and NoSQL database management.',
    icon: <Database className="text-green-400" />,
    color: 'border-green-500/30'
  },
  {
    title: 'Ads Mastery',
    description: 'Strategic Meta and Google Ads for maximum ROI.',
    icon: <Megaphone className="text-red-400" />,
    color: 'border-red-500/30'
  },
  {
    title: 'Wordpress Dev',
    description: 'Custom themes and high-performance CMS solutions.',
    icon: <Layout className="text-indigo-400" />,
    color: 'border-indigo-500/30'
  }
];

export default function KnowledgeChips() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase">Highlighted <span className="text-slate-400">Knowledge</span></h2>
          <p className="text-slate-800 font-mono text-sm tracking-widest uppercase">// Expertise in development and growth</p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {knowledgeData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`glass-card p-6 border-t-4 ${item.color} flex flex-col items-center text-center space-y-4 shadow-xl`}
            >
              <div className="p-3 bg-black/5 rounded-2xl shadow-inner group">
                {item.icon}
              </div>
              <h3 className="font-black text-lg text-slate-900 uppercase">{item.title}</h3>
              <p className="text-xs text-slate-800 font-bold leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
