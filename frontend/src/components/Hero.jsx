import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/image.jpeg';

const TypewriterText = ({ texts, speed = 100, pause = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIdx, setTextIdx] = useState(0);

  useEffect(() => {
    let timer;
    const currentText = texts[textIdx];

    if (isDeleting) {
      if (index > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, index - 1));
          setIndex(index - 1);
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setTextIdx((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (index < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, index + 1));
          setIndex(index + 1);
        }, speed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      }
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, speed, pause, textIdx, texts]);

  return (
    <span className="text-[#00f0ff] code-font">
      {displayText}
      <span className="animate-pulse ml-1">_</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 px-6 z-10">

      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-16 md:gap-24 relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex-1 w-full text-center md:text-left"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/10 text-xs font-bold uppercase tracking-widest text-[#00f0ff] mb-8 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] inline-block mr-2 animate-ping" />
            System Online
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black display-font text-white leading-none tracking-tight mb-4">
            Atharav <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#8A2BE2] text-glow">Tyagi</span>
          </h1>

          <div className="text-xl md:text-3xl font-medium text-slate-400 mb-8 h-10">
            <span className="text-slate-500 mr-2">&gt;</span>
            <TypewriterText
              texts={["Software Architect", "Full Stack Developer", "UI/UX Engineer"]}
              speed={80}
              pause={2500}
            />
          </div>

          <p className="text-lg text-slate-400 max-w-lg mb-12 font-sans leading-relaxed mx-auto md:mx-0">
            Forging highly scalable architectures and immersive user interfaces. I engineer solutions that don't just exist—they perform, scale, and captivate.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <button
              onClick={() => { const el = document.getElementById('projects'); if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' }); }}
              className="px-10 py-5 bg-gradient-to-r from-[#00f0ff] to-[#8A2BE2] text-white font-black display-font uppercase tracking-widest rounded-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              View Projects
            </button>
            <button
              onClick={() => window.open('https://portfolio-u7xw.onrender.com/api/resume/download', '_blank')}
              className="px-10 py-5 bg-transparent border-2 border-slate-700 text-slate-300 font-bold display-font uppercase tracking-widest rounded-xl hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all hover:bg-[#00f0ff]/10 w-full sm:w-auto text-center"
            >
              Download CV
            </button>
          </div>
        </motion.div>

        {/* Right 3D Element Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 hidden lg:flex justify-center relative pointer-events-none"
        >
          {/* Abstract glowing globe / rings representing neural network / planet */}
          <div className="relative w-96 h-96">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-[#00f0ff]/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 rounded-full border-t-4 border-[#8A2BE2]/50 shadow-[0_0_20px_rgba(138,43,226,0.3)]"
            />
            <div className="absolute inset-12 bg-gradient-to-br from-[#00f0ff]/20 to-[#8A2BE2]/20 rounded-full blur-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <img src={profileImg} alt="Atharav Tyagi" className="w-56 h-56 object-cover object-top rounded-full border-4 border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,240,255,0.4)] pointer-events-auto hover:scale-105 transition-transform duration-500" /> */}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
