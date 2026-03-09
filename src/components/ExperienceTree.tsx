import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Code, Lightbulb } from 'lucide-react';

const experienceData = [
  {
    role: 'Asst Digital Marketing & IT Officer',
    company: 'Mayfair Wellness Clinic',
    period: 'Sept 2024 — Oct 2025',
    details: 'Managing cross-platform performance marketing and IT infrastructure audit.',
    icon: <Briefcase size={24} />,
    color: '#3B82F6'
  },
  {
    role: 'Executive Digital Marketing',
    company: 'SinodTech',
    period: 'Oct 2025 — Present',
    details: 'Directing Meta & Google ad campaigns for high-conversion retail brands.',
    icon: <TrendingUp size={24} />,
    color: '#10B981'
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2020 — Present',
    details: 'Custom WordPress development and site deployment for diverse clients.',
    icon: <Code size={24} />,
    color: '#8B5CF6'
  },
];

export default function ExperienceTree() {
  return (
    <section id="experience" className="py-24 px-6 relative bg-white/[0.01]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-r-4 border-black pr-6 text-right"
        >
          <h2 className="text-4xl font-black mb-2 uppercase">Work <span className="text-black/40">Experience</span></h2>
          <p className="text-slate-600 font-mono text-sm tracking-widest uppercase">// Career milestones & professional growth</p>
        </motion.div>

        <div className="relative space-y-12">
          {/* Vertical Connecting Line (Right aligned for aesthetic variety) */}
          <div className="absolute right-[31px] top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500/20 to-transparent hidden md:block" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 50, skewX: 5 }}
              whileInView={{ opacity: 1, y: 0, skewX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              className="relative flex flex-col md:flex-row-reverse items-start md:items-center gap-8 pr-0 md:pr-2"
            >
              {/* 3D Animated Node */}
              <div className="relative z-10 shrink-0 hidden md:block">
                <motion.div
                  animate={{ rotateY: -360, rotateX: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 glass-card flex items-center justify-center cubic-3d"
                  style={{ borderTop: `4px solid ${exp.color}` }}
                >
                  <div className="text-black transform translate-z-10 bg-white/40 backdrop-blur-md p-3 rounded-lg border border-black/5 shadow-xl">
                    {exp.icon}
                  </div>
                </motion.div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full blur-sm opacity-10" />
              </div>

              {/* Card Content */}
              <div className="glass-card p-6 flex-1 w-full hover:border-black/30 transition-all text-left md:text-right shadow-xl">
                <div className="flex justify-between items-start md:flex-row-reverse mb-4">
                  <span className="text-xs font-black text-white bg-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                    {exp.period}
                  </span>
                  <div className="md:hidden p-2 glass-card border-black/5">
                    {exp.icon}
                  </div>
                </div>
                <h3 className="text-xl font-black mb-1 uppercase text-slate-900">{exp.role}</h3>
                <p className="text-slate-600 font-bold mb-3 uppercase tracking-tight">{exp.company}</p>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  {exp.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
