import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Achievements from '../components/Achievements';
import CodingProfiles from '../components/CodingProfiles';
import Contact from '../components/Contact';
import ScrollProgress from '../components/ui/ScrollProgress';
import ParticleNetwork from '../components/ParticleNetwork';
import ThemeCustomizer from '../components/ThemeCustomizer';

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <ScrollProgress />
      <ThemeCustomizer />

      {/* Global Interactive Canvas Background */}
      <ParticleNetwork />

      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
      <CodingProfiles />
      <Contact />

      <footer className="w-full py-8 text-center text-sm text-indigo-200 border-t border-white/5 relative z-10 bg-black/50 backdrop-blur-md">
        <p>© {new Date().getFullYear()} Atharav Tyagi. Crafted with ❤️ and Coffee.</p>
      </footer>
    </div>
  );
};

export default Home;
