import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      title: "Binary Blitz Hackathon",
      rank: "2ND",
      desc: "Demonstrated hands-on exposure to core cybersecurity concepts, encryption, threat analysis, and real-world attacks globally."
    },
    {
      title: "Infosys Hackathon",
      rank: "3RD",
      desc: "Achieved out of 100+ participants. Showcased robust problem-solving and full-stack implementation skills under pressure."
    }
  ];

  return (
    <section id="achievements" className="py-24 relative z-10 w-full min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-b border-slate-800 pb-6 flex items-center justify-between"
        >
          <h2 className="text-4xl md:text-6xl font-black display-font text-white uppercase tracking-tighter violet-glow">
            Achievements
          </h2>
          <span className="text-slate-500 code-font hidden md:block text-sm">&lt;achievements /&gt;</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel p-10 md:p-14 relative overflow-hidden group border border-[#8A2BE2]/20 hover:border-[#8A2BE2]/80 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8A2BE2]/10 blur-[60px] rounded-full group-hover:bg-[#8A2BE2]/30 transition-all duration-700 pointer-events-none" />

              <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative z-10">
                <div className="flex-1">
                  <div className="code-font text-[#00f0ff] mb-4 text-sm font-bold tracking-widest uppercase">
                    Execution Rank
                  </div>
                  <h3 className="text-3xl font-black display-font text-white mb-4 uppercase">{item.title}</h3>
                  <p className="text-slate-400 font-sans leading-relaxed text-lg max-w-sm">
                    {item.desc}
                  </p>
                </div>

                <div className="w-full md:w-auto text-left md:text-right border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-8">
                  <span className="text-7xl font-black display-font tracking-tighter text-[#8A2BE2] drop-shadow-[0_0_15px_rgba(138,43,226,0.6)] group-hover:text-glow group-hover:text-[#00f0ff] transition-all">
                    {item.rank}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
