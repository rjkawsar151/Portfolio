import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

interface SkillCategory {
  name: string;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Marketing',
    color: '#F59E0B',
    skills: [
      'Google Ads',
      'Meta Ads',
      'SEO / SEM',
      'Google Analytics',
      'Tag Manager',
      'Content Strategy',
      'Email Marketing',
      'Conversion Optimization',
      'Social Media Marketing',
      'Performance Marketing',
    ],
  },
  {
    name: 'Engineering',
    color: '#3B82F6',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'PHP',
      'Python',
      'Node.js',
      'MySQL',
      'REST APIs',
      'Git / GitHub',
      'Tailwind CSS',
    ],
  },
  {
    name: 'Creative',
    color: '#EC4899',
    skills: [
      'Figma',
      'Adobe Photoshop',
      'Canva',
      'UI/UX Design',
      'Video Editing',
      'Brand Identity',
      'Typography',
      'Motion Graphics',
    ],
  },
  {
    name: 'IT Administration',
    color: '#10B981',
    skills: [
      'Linux Server Admin',
      'SMTP / TLS Setup',
      'DNS Management',
      'cPanel / WHM',
      'SSL Certificates',
      'Network Security',
      'Cloud Hosting',
      'Backup & Recovery',
      'WordPress Admin',
      'Domain Management',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function SkillMatrix() {
  return (
    <section id="skills" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-2">
          <Cpu size={20} className="text-electric" />
          <h2 className="text-2xl font-bold text-white">
            skill<span className="text-electric">.matrix</span>
          </h2>
        </div>
        <p className="text-slate-accent text-sm code-text">
          // {skillCategories.reduce((acc, c) => acc + c.skills.length, 0)}+ skills across {skillCategories.length} domains
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="grid md:grid-cols-2 gap-6"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.name}
            variants={categoryVariants}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: category.color }}
              />
              <h3 className="text-sm font-semibold code-text" style={{ color: category.color }}>
                {category.name}
              </h3>
              <span className="text-[10px] text-slate-accent code-text ml-auto">
                [{category.skills.length}]
              </span>
            </div>

            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-2"
            >
              {category.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={badgeVariants}
                  transition={{ delay: index * 0.03 }}
                  className="skill-badge"
                  style={{
                    borderColor: `${category.color}20`,
                  }}
                  whileHover={{
                    borderColor: `${category.color}50`,
                    background: `${category.color}10`,
                    color: category.color,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
