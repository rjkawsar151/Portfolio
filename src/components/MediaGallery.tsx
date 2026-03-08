import { motion } from 'framer-motion';
import graphics1 from '../assets/graphics1.png';
import video1 from '../assets/video1.png';
import { Palette, Video, Eye } from 'lucide-react';

const mediaWorks = [
  {
    title: 'Graphic Design Showcase',
    category: 'Graphics',
    description: 'Modern poster and branding layouts with focus on typography and composition.',
    image: graphics1,
    icon: <Palette size={18} />
  },
  {
    title: 'Cinematic Video Editing',
    category: 'Video',
    description: 'High-end post-production, color grading, and motion graphics workflows.',
    image: video1,
    icon: <Video size={18} />
  }
];

export default function MediaGallery() {
  return (
    <section id="media" className="py-24 px-6 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Creative <span className="text-purple-400">Media</span></h2>
          <p className="text-slate-400 code-text">// Visual design and video post-production results</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {mediaWorks.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl glass-panel aspect-video">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Information Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                      {work.icon}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-purple-300">
                      {work.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{work.title}</h3>
                  <p className="text-sm text-slate-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {work.description}
                  </p>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 w-fit flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-sm font-bold backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity delay-100"
                  >
                    <Eye size={16} />
                    View Details
                  </motion.button>
                </div>
              </div>
              
              {/* Outer Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
