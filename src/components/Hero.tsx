import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profileImg from '../assets/profile.png';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Profile Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass-panel p-2 transform transition duration-500 hover:scale-[1.02] cubic-3d hover:rotate-y-12">
            <img
              src={profileImg}
              alt="Md. Kawsar Hosen"
              className="rounded-xl w-full aspect-square object-cover shadow-2xl"
            />
            {/* Overlay Info Card */}
            <div className="absolute -bottom-6 -right-6 glass-card p-4 border-electric/30 animate-float">
              <p className="text-xs font-mono text-electric-glow">ONLINE</p>
              <h4 className="text-sm font-bold">Dhaka, BD</h4>
            </div>
          </div>
        </motion.div>

        {/* Text Column */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-electric font-mono text-lg mb-2">Hello, there!</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
              Meet <span className="gradient-heading">Md. Kawsar Hosen</span>
            </h1>
            <div className="h-12 text-2xl md:text-3xl font-medium text-slate-300">
              <TypeAnimation
                sequence={[
                  'WordPress Developer',
                  2000,
                  'IT & Systems Specialist',
                  2000,
                  'Performance Marketer',
                  2000,
                  'Vibe Coder',
                  2000,
                  'Digital Marketing',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-400 leading-relaxed max-w-xl"
          >
            I specialize in bridging the gap between cutting-edge technology and business growth.
            From managing complex IT infrastructures to driving thousands of leads through
            performance marketing, I deliver results that matter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="px-8 py-4 bg-electric hover:bg-electric-dark text-white rounded-full font-bold shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95">
              Hire Me
            </a>
            <a href="#projects" className="px-8 py-4 glass-card hover:bg-white/10 rounded-full font-bold transition-all hover:scale-105 active:scale-95">
              View Projects
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 opacity-50"
      >
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-slate-500 rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}
