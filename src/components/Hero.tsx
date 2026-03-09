import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profileImg from '../assets/profile.png';
import { useState, useEffect } from 'react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  const line1 = [
    'SEO, Content &',
    'Digital Marketing &',
    'Wordpress &',
    'Video edit &',
    'Creatives &'
  ];

  const line2 = [
    'Meta, Google ads',
    'analysis',
    'Vibe Code',
    'Motion Graphics',
    'Graphics'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % line1.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-6 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full flex flex-col items-center relative z-10"
      >

        {/* Intro Text */}
        <motion.div variants={itemVariants} className="mb-2 text-center">
          <p className="text-xl font-bold text-slate-800 uppercase tracking-widest">
            my name is <span className="font-black text-black underline decoration-black/20 decoration-4">Kawsar</span> and I am a freelance
          </p>
        </motion.div>

        {/* Dynamic Typography Section - Background Text with Balanced Animations */}
        <div className="relative w-full flex flex-col items-center justify-center py-4 mt-4">
          <div className="flex flex-col items-center justify-center select-none pointer-events-none opacity-90 text-center relative h-[250px] md:h-[350px] w-full">
            
            {/* First Line: Fade and Blur */}
            <div className="text-[12vw] md:text-[10vw] leading-[0.8] font-black text-slate-900 tracking-tighter uppercase whitespace-nowrap relative h-[1em] w-full flex justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, filter: 'blur(15px)', y: 10 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(15px)', y: -10 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute"
                >
                  {line1[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Second Line: Typewriter (as it is) */}
            <div className="text-[12vw] md:text-[10vw] leading-[0.8] font-black text-outline tracking-tighter uppercase whitespace-nowrap mt-2">
              <TypeAnimation
                key={currentIndex}
                sequence={[line2[currentIndex], 1500]}
                repeat={0}
                cursor={false}
              />
            </div>
          </div>
        </div>

        {/* Profile Image - Positioned to overlap bottom half of text */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any, delay: 0.4 }}
          className="w-[320px] md:w-[620px] z-20 pointer-events-none -mt-32 md:-mt-52"
        >
          <div className="mask-fade-bottom">
            <img
              src={profileImg}
              alt="Md. Kawsar Hosen"
              className="w-full h-auto object-cover"
              style={{ filter: 'grayscale(100%) brightness(1.2) contrast(1.1)' }}
            />
          </div>
        </motion.div>

        {/* Action Buttons - Positioned right after image */}
        <motion.div
          variants={itemVariants}
          className="-mt-12 md:-mt-20 flex flex-wrap justify-center gap-4 relative z-30"
        >
          <a href="#projects" className="px-10 py-5 bg-black text-white text-lg font-black uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all shadow-2xl shadow-black/30 hover:scale-105 active:scale-95">
            You need a developer
          </a>
          <a href="#contact" className="px-10 py-5 border-4 border-black text-black text-lg font-black uppercase tracking-widest rounded-xl hover:bg-black hover:text-white transition-all hover:scale-105 active:scale-95">
            Let's talk business
          </a>
        </motion.div>

        {/* Bottom Info Section - Spacing tightened */}
        <motion.div
          variants={itemVariants}
          className="mt-12 w-full flex flex-col md:flex-row items-center justify-between gap-6 px-4"
        >
          <p className="text-xl font-black text-slate-900 uppercase tracking-tighter">
            based in Dhaka, Bangladesh.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 border-2 border-white rounded-full bg-slate-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="client" />
                </div>
              ))}
            </div>
            <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest opacity-60">Trusted by 100+ clients</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Mini Logos Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-0 right-0 overflow-hidden grayscale pointer-events-none"
      >
        <div className="flex justify-center gap-10 items-center px-10">
          <span className="text-lg font-bold italic text-slate-900">audible</span>
          <span className="text-lg font-serif text-slate-900">Ballantine's</span>
          <span className="text-lg font-black uppercase tracking-widest text-slate-900">OLYMPIA</span>
          <span className="text-lg font-mono text-slate-900">Veuve Clicquot</span>
        </div>
      </motion.div>
    </section>
  );
}
