import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech Computer Science",
      duration: "2023 // Present",
      // grade: "CGPA: 6.5",
    },
    {
      institution: "SD Public School",
      degree: "Intermediate",
      duration: "2022 // 2023",
      // grade: "73%",
    },
    {
      institution: "SD Public School",
      degree: "Matriculation",
      duration: "2020 // 2021",
      // grade: "93%",
    }
  ];

  return (
    <section id="education" className="py-24 relative z-10 w-full min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-b border-slate-800 pb-6 flex items-center justify-between"
        >
          <h2 className="text-4xl md:text-6xl font-black display-font text-white uppercase tracking-tighter violet-glow">
            Education
          </h2>
          <span className="text-slate-500 code-font hidden md:block text-sm">&lt;education /&gt;</span>
        </motion.div>

        <div className="relative border-l border-[#00f0ff]/30 pl-8 md:pl-12 ml-4">
          {/* Glowing dot on top of line */}
          <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-ping" />
          <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 relative group"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[41px] md:-left-[57px] top-2 w-4 h-4 rounded-full bg-[#02040A] border-2 border-[#8A2BE2] group-hover:border-[#00f0ff] group-hover:bg-[#00f0ff] transition-colors shadow-[0_0_15px_rgba(138,43,226,0.6)] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.8)] z-10" />
              {/* Connecting horizontal line */}
              <div className="absolute -left-8 md:-left-12 top-4 w-6 md:w-10 h-px bg-slate-800 group-hover:bg-[#00f0ff]/50 transition-colors" />

              <div className="glass-panel p-8 holographic-border ml-2 group-hover:translate-x-2 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <div className="code-font text-[#00f0ff] text-xs font-bold tracking-widest uppercase mb-3 drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">
                      [ {edu.duration} ]
                    </div>
                    <h3 className="text-2xl font-black display-font text-white uppercase tracking-wider mb-2 group-hover:text-glow transition-all">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-400 font-sans text-lg">{edu.institution}</p>
                  </div>

                  <div>
                    <span className="code-font text-[#8A2BE2] bg-[#8A2BE2]/10 border border-[#8A2BE2]/30 px-4 py-2 text-sm font-bold shadow-[0_0_10px_rgba(138,43,226,0.2)] block">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
