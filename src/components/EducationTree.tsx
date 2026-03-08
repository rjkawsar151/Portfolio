import { motion } from 'framer-motion';
import { GraduationCap, Book, Award } from 'lucide-react';

const educationData = [
  {
    institution: 'Canadian University of Bangladesh',
    degree: 'BSc in CSE',
    period: '2025 — 2029',
    details: 'Computer Science and Engineering.',
    icon: <GraduationCap size={24} />,
    color: '#3B82F6'
  },
  {
    institution: 'CCN Polytechnic Institute',
    degree: 'CST',
    period: '2020 — 2024',
    details: 'Computer Science and Technology.',
    icon: <Book size={24} />,
    color: '#10B981'
  },
  {
    institution: 'Khosbash High School',
    degree: 'SSC',
    period: 'Completed',
    details: 'Secondary school education.',
    icon: <Award size={24} />,
    color: '#F59E0B'
  }
];

export default function EducationTree() {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-4 border-electric pl-6"
        >
          <h2 className="text-4xl font-bold mb-2">Education <span className="text-electric">Tree</span></h2>
          <p className="text-slate-400 code-text">// Academic history & certifications</p>
        </motion.div>

        <div className="relative space-y-12">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[31px] top-0 bottom-0 w-1 bg-gradient-to-b from-electric via-blue-500/20 to-transparent hidden md:block" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col md:flex-row items-start md:items-center gap-8 pl-0 md:pl-2"
            >
              {/* 3D Animated Node */}
              <div className="relative z-10 shrink-0 hidden md:block">
                <motion.div
                  animate={{ rotateY: 360, rotateX: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 glass-card flex items-center justify-center cubic-3d"
                  style={{ borderTop: `4px solid ${edu.color}50` }}
                >
                  <div className="text-white transform translate-z-10 bg-midnight/80 p-3 rounded-lg border border-white/5 shadow-xl">
                    {edu.icon}
                  </div>
                </motion.div>
                {/* Visual Connector Dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-sm opacity-20" />
              </div>

              {/* Card Content */}
              <div className="glass-card p-6 flex-1 w-full hover:border-electric/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-electric-glow bg-electric/10 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                  <div className="md:hidden p-2 glass-card border-white/5">
                    {edu.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{edu.institution}</h3>
                <p className="text-electric-glow font-medium mb-3">{edu.degree}</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
