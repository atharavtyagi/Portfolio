import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings2, X, Palette, Zap, Droplet, Flame, Moon } from 'lucide-react';

const themes = [
  { name: 'Cyberpunk', hue: 0, icon: <Zap size={16} />, color: '#00f0ff' },
  { name: 'Deep Ocean', hue: 50, icon: <Droplet size={16} />, color: '#006aff' },
  { name: 'Crimson Alert', hue: 150, icon: <Flame size={16} />, color: '#ff3333' },
  { name: 'Amethyst', hue: -140, icon: <Moon size={16} />, color: '#ff00ff' },
  { name: 'Emerald Matrix', hue: -90, icon: <Palette size={16} />, color: '#00ff66' },
];

const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHue, setActiveHue] = useState(0);

  useEffect(() => {
    // Set global hue CSS variable
    document.documentElement.style.setProperty('--global-hue', `${activeHue}deg`);
  }, [activeHue]);

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 rounded-full bg-[#02040A]/80 backdrop-blur-md border border-[#00f0ff]/50 text-[#00f0ff] flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:bg-[#00f0ff]/20 hover:scale-110 transition-all cursor-crosshair group"
      >
        <Settings2 size={24} className="group-hover:rotate-90 transition-transform duration-500" />
      </motion.button>

      {/* Control Panel Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            className="fixed bottom-28 right-8 z-[100] w-72 glass-panel border border-slate-700/80 p-6 flex flex-col gap-6"
            style={{ 
               // Need to inverse rotate the panel so it stays mostly standard, 
               // but letting it hue-shift is actually cooler. Let's let it hue shift!
               // Alternatively we force it to ignore hue rotation by wrapping it but it's physically in the rotated DOM.
            }}
          >
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <h3 className="code-font text-[#00f0ff] uppercase tracking-widest text-sm font-bold flex items-center gap-2">
                <Palette size={16} /> Color Protocol
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => setActiveHue(theme.hue)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all text-sm font-bold tracking-wider display-font uppercase ${
                    activeHue === theme.hue
                      ? 'border-[#00f0ff] bg-[#00f0ff]/10 text-white shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                      : 'border-slate-800 bg-black/40 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  <span style={{ color: activeHue === theme.hue ? theme.color : '' }} className="transition-colors">
                    {theme.icon}
                  </span>
                  {theme.name}
                  {activeHue === theme.hue && (
                     <div className="ml-auto w-2 h-2 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]" />
                  )}
                </button>
              ))}
            </div>
            
            <div className="pt-4 border-t border-slate-800">
               <label className="text-xs code-font text-slate-500 uppercase tracking-widest block mb-3">Fine Tune Spectrum</label>
               <input 
                 type="range" 
                 min="-180" 
                 max="180" 
                 value={activeHue} 
                 onChange={(e) => setActiveHue(Number(e.target.value))}
                 className="w-full accent-[#00f0ff] cursor-pointer"
               />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeCustomizer;
