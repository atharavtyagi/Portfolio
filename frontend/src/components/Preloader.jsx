import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500); // Wait half a sec before hiding
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';
    
    return () => {
      clearInterval(timer);
      document.body.style.overflow = 'auto';
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="relative z-10 w-full px-12 md:px-24 flex flex-col md:flex-row justify-between items-end gap-10">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-8xl font-black display-font text-white uppercase tracking-tighter"
          >
            Atharav <br/> Tyagi
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            className="h-1 bg-[#00f0ff] mt-6"
          />
        </div>

        <div className="text-right">
          <span className="text-6xl md:text-[120px] font-black display-font leading-none text-transparent text-stroke transition-none" style={{ WebkitTextStroke: '2px white' }}>
            {Math.min(Math.round(progress), 100)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
