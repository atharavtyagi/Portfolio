import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'} px-6 pointer-events-none`}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between pointer-events-auto transition-all ${scrolled ? 'glass-panel px-6 py-3 rounded-full' : 'px-0'}`}>
        
        <button onClick={() => scrollTo('home')} className="text-xl font-black text-white hover:text-glow transition-all uppercase display-font flex items-center gap-2 group">
          <span className="text-[#00f0ff] animate-pulse">&gt;_</span>
          ATHARAV
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href.substring(1))}
              className="text-sm font-bold text-slate-400 hover:text-[#00f0ff] transition-all uppercase tracking-widest relative group py-2 font-sans"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#00f0ff] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          ))}
          <button 
            onClick={() => scrollTo('contact')} 
            className="ml-4 px-6 py-2 rounded-full border border-[#00f0ff]/50 text-[#00f0ff] text-xs font-black uppercase tracking-widest hover:bg-[#00f0ff]/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all display-font"
          >
            CONTACT
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-[#00f0ff]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-6 right-6 mt-4 glass-panel overflow-hidden md:hidden z-40 pointer-events-auto"
          >
            <div className="flex flex-col items-center py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href.substring(1))}
                  className="w-full text-center py-3 text-lg font-bold text-slate-300 hover:text-[#00f0ff] hover:bg-white/5 uppercase display-font tracking-widest transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-2 w-full px-6">
                <button 
                  onClick={() => scrollTo('contact')} 
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00f0ff]/20 to-[#8A2BE2]/20 border border-[#00f0ff]/50 text-[#00f0ff] font-bold uppercase tracking-widest text-glow"
                >
                  Initiate Uplink
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
