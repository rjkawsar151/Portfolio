import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import KnowledgeChips from './components/KnowledgeChips';
import EducationTree from './components/EducationTree';
import ExperienceTree from './components/ExperienceTree';
import ProjectRegistry from './components/ProjectRegistry';
import OtherWorks from './components/OtherWorks';
import MediaGallery from './components/MediaGallery';
import Contact from './components/Contact';
import { Menu, X, Rocket, Github, Linkedin, Facebook, Instagram } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Meet Kawsar', href: '#hero' },
    { name: 'History', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Creative', href: '#media' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="relative min-h-screen bg-dotted">
      {/* Background Layer */}
      <div className="fixed inset-0 bg-gradient-light pointer-events-none -z-10" />

      {/* Modern Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 ${
          isScrolled ? 'py-4' : 'py-8'
        }`}
      >
        <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md px-6 py-3 border-black/5 bg-white/50' : ''
        }`}>
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-lg shadow-black/10 group-hover:rotate-12 transition-transform">
              <Rocket className="text-white" size={20} />
            </div>
            <span className="text-xl font-black tracking-tighter text-black uppercase hidden sm:block">Kawsar.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-bold text-slate-600 hover:text-black transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 text-black/60">
              <a href="https://www.linkedin.com/in/kawsar202/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors"><Linkedin size={18} /></a>
              <a href="https://www.facebook.com/Rj.kawsar202" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/rj.kawsar202/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors"><Instagram size={18} /></a>
            </div>
            <a href="#contact" className="ml-4 px-6 py-2 bg-black text-white text-sm font-bold rounded-lg hover:scale-105 transition-transform hidden lg:block">
              hello@kawsar.dev
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-24 left-6 right-6 glass-panel p-8 md:hidden shadow-3xl bg-white/95 backdrop-blur-xl border-black/5"
            >
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-2xl font-black text-black uppercase tracking-tighter"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.name}
                  </a>
                ))}
                 <div className="flex gap-4 pt-6 border-t border-black/10">
                  <a href="https://www.linkedin.com/in/kawsar202/" target="_blank" rel="noopener noreferrer" className="text-slate-800"><Linkedin size={24} /></a>
                  <a href="https://www.facebook.com/Rj.kawsar202" target="_blank" rel="noopener noreferrer" className="text-slate-800"><Facebook size={24} /></a>
                  <a href="https://www.instagram.com/rj.kawsar202/" target="_blank" rel="noopener noreferrer" className="text-slate-800"><Instagram size={24} /></a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Content Layers */}
      <main className="relative pt-10">
        <Hero />
        <KnowledgeChips />
        <div className="py-12 flex justify-center opacity-30">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-electric to-transparent" />
        </div>
        <EducationTree />
        <ExperienceTree />
        <ProjectRegistry />
        <OtherWorks />
        <MediaGallery />
        <Contact />
      </main>

      <footer className="py-12 border-t border-black/5 bg-black/[0.01]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <Rocket className="text-black" size={24} />
            <span className="text-slate-500 text-sm font-medium">© 2026 Md. Kawsar Hosen. All rights reserved.</span>
          </div>
           <div className="flex items-center gap-6">
            <a href="#hero" className="text-slate-500 hover:text-black transition-colors text-xs uppercase font-bold tracking-widest" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Back to Top</a>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/kawsar202/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Linkedin size={16} /></a>
              <a href="https://www.facebook.com/Rj.kawsar202" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Facebook size={16} /></a>
              <a href="https://www.instagram.com/rj.kawsar202/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Instagram size={16} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
