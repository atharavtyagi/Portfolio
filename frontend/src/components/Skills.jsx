import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    { title: "Languages", icon: "01", skills: ["Python", "C++", "JavaScript", "TypeScript", "PHP", "Java"] },
    { title: "Frontend", icon: "02", skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Zustand"] },
    { title: "Backend", icon: "03", skills: ["Node.js", "Express", "REST APIs", "GraphQL"] },
    { title: "Database", icon: "04", skills: ["MongoDB", "MySQL", "Docker", "AWS", "Git"] }
  ];

  return (
    <section id="skills" className="py-24 relative z-10 w-full min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-b border-slate-800 pb-6 flex items-center justify-between"
        >
          <h2 className="text-4xl md:text-6xl font-black display-font text-white uppercase tracking-tighter violet-glow">
            Skills
          </h2>
          <span className="text-slate-500 code-font hidden md:block text-sm">&lt;skills /&gt;</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 holographic-border group flex flex-col items-center text-center relative"
            >
              <div className="absolute top-4 left-4 text-slate-700 code-font text-xs font-bold transition-colors group-hover:text-[#00f0ff]">
                [{cat.icon}]
              </div>

              <h3 className="text-xl font-bold display-font mb-8 text-white uppercase tracking-widest mt-6">
                {cat.title}
              </h3>

              <div className="flex flex-col gap-3 w-full">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="w-full py-2 bg-slate-900/50 border border-slate-700 text-sm font-medium text-slate-300 group-hover:border-[#8A2BE2]/50 hover:bg-[#8A2BE2]/20 hover:text-white transition-all cursor-crosshair rounded-md shadow-inner"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
