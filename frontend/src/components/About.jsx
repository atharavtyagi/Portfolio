import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Blocks } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10 w-full min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-b border-slate-800 pb-6 flex items-center justify-between"
        >
          <h2 className="text-4xl md:text-6xl font-black display-font text-white uppercase tracking-tighter text-glow">
            About Me
          </h2>
          <span className="text-slate-500 code-font hidden md:block text-sm">&lt;about &gt;</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 glass-panel p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#00f0ff]/5 to-transparent pointer-events-none" />
            <Terminal className="text-[#00f0ff] mb-6 opacity-80" size={32} />
            <h3 className="text-2xl md:text-4xl font-black display-font mb-6 text-slate-200 uppercase">
              Background
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed font-sans mb-6">
              Currently compiling knowledge as a Computer Science undergrad at Lovely Professional University. I specialize in developing complete robust applications utilizing the MERN stack alongside PHP/MySQL legacy integration when required.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed font-sans">
              I reject basic templates in favor of deeply engaging, heavily animated user interfaces powered by React and Framer Motion, paired with highly secure, rapid REST APIs on the backend.
            </p>
          </motion.div>

          <div className="md:col-span-4 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-8 flex-1 holographic-border flex items-center justify-center text-center flex-col"
            >
              <Cpu size={40} className="text-[#8A2BE2] mb-4 group-hover:animate-pulse" />
              <h4 className="text-xl font-bold display-font text-white uppercase tracking-wider">Frontend GPU</h4>
              <p className="text-sm text-slate-500 mt-2 font-mono">React / Motion / Webgl</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-8 flex-1 holographic-border flex items-center justify-center text-center flex-col"
            >
              <Database size={40} className="text-[#00f0ff] mb-4 group-hover:animate-bounce" />
              <h4 className="text-xl font-bold display-font text-white uppercase tracking-wider">Backend Memory</h4>
              <p className="text-sm text-slate-500 mt-2 font-mono">Node / Express / Mongo</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
