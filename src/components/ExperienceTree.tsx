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
          className="mb-16 border-r-4 border-indigo-500 pr-6 text-right"
        >
          <h2 className="text-4xl font-bold mb-2">Work <span className="text-indigo-400">Experience</span></h2>
          <p className="text-slate-400 code-text">// Career milestones & professional growth</p>
        </motion.div>

        <div className="relative space-y-12">
          {/* Vertical Connecting Line (Right aligned for aesthetic variety) */}
          <div className="absolute right-[31px] top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500/20 to-transparent hidden md:block" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col md:flex-row-reverse items-start md:items-center gap-8 pr-0 md:pr-2"
            >
              {/* 3D Animated Node */}
              <div className="relative z-10 shrink-0 hidden md:block">
                <motion.div
                  animate={{ rotateY: -360, rotateX: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 glass-card flex items-center justify-center cubic-3d"
                  style={{ borderTop: `4px solid ${exp.color}50` }}
                >
                  <div className="text-white transform translate-z-10 bg-midnight/80 p-3 rounded-lg border border-white/5 shadow-xl">
                    {exp.icon}
                  </div>
                </motion.div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-sm opacity-20" />
              </div>

              {/* Card Content */}
              <div className="glass-card p-6 flex-1 w-full hover:border-indigo-500/30 transition-all text-left md:text-right">
                <div className="flex justify-between items-start md:flex-row-reverse mb-4">
                  <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                  <div className="md:hidden p-2 glass-card border-white/5">
                    {exp.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                <p className="text-indigo-400 font-medium mb-3">{exp.company}</p>
                <p className="text-sm text-slate-400 leading-relaxed">
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
