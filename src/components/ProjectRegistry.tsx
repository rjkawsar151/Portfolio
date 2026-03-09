import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, ShoppingCart, Newspaper, Stethoscope, Sparkles, Package, Activity } from 'lucide-react';

const projects = [
  {
    id: 'premium',
    name: 'Premium Ecommerce',
    description: 'High-performance PHP/Tailwind store optimized for Core Web Vitals.',
    tech: ['PHP', 'Tailwind', 'MySQL'],
    url: 'https://eesomebd.store',
    icon: <ShoppingCart size={24} />,
    color: '#3B82F6'
  },
  {
    id: 'infobangla',
    name: 'InfoBangla',
    description: 'SEO-driven Bengali news portal with massive organic reach.',
    tech: ['WordPress', 'SEO', 'Analytics'],
    url: 'https://infobangla.news',
    icon: <Newspaper size={24} />,
    color: '#F59E0B'
  },
  {
    id: 'mayfair',
    name: 'Mayfair Wellness clinic',
    description: 'Professional medical services site with patient-centric UX.',
    tech: ['WordPress', 'PHP', 'SSL'],
    url: 'https://mayfair.com.bd',
    icon: <Stethoscope size={24} />,
    color: '#10B981'
  },
  {
    id: 'adonia',
    name: 'Adonia Beauty',
    description: 'Elegant ecommerce solution for a premier beauty brand.',
    tech: ['WordPress', 'WooCommerce', 'CSS3'],
    url: 'https://adonia.com.bd',
    icon: <Sparkles size={24} />,
    color: '#EC4899'
  },
  {
    id: 'hush',
    name: 'Hush the Fast',
    description: 'High-precision internet speed test software with minimalist design.',
    tech: ['React', 'Framer Motion', 'API'],
    url: 'http://hush-gilt.vercel.app/',
    icon: <Activity size={24} />,
    color: '#3B82F6'
  },
  {
    id: 'erp',
    name: 'Distributor ERP',
    description: 'Custom enterprise resource planning for complex distribution logic.',
    tech: ['Custom Logic', 'MySQL', 'REST API'],
    url: 'https://dist-erp.com',
    icon: <Package size={24} />,
    color: '#8B5CF6'
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), { stiffness: 300, damping: 30 });

  function handleMouseMove(event: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      <div className="glass-card p-8 h-full flex flex-col justify-between border-b-4 shadow-xl" style={{ borderColor: project.color }}>
        <div style={{ transform: 'translateZ(50px)' }} className="space-y-6">
          <div className="flex justify-between items-start">
            <div className="p-4 bg-black/5 rounded-2xl shadow-inner text-black group-hover:bg-black/10 transition-colors">
              {project.icon}
            </div>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-black transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-3 uppercase text-slate-900">{project.name}</h3>
            <p className="text-slate-700 font-medium text-sm leading-relaxed mb-6">
              {project.description}
            </p>
          </div>
        </div>

        <div style={{ transform: 'translateZ(30px)' }} className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="text-[10px] font-black px-2 py-1 rounded-md bg-black/5 border border-black/10 text-slate-800 uppercase tracking-widest">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectRegistry() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-4 border-black pl-6"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase">Project <span className="text-black/40">Registry</span></h2>
          <p className="text-slate-600 font-mono text-sm tracking-widest uppercase">// Interactive 3D portfolio of high-impact deployments</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
