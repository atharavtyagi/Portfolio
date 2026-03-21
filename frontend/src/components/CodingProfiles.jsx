import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "tyagiatharav9999",
      solved: "50+",
      link: "https://leetcode.com/u/tyagiatharav9999/",
      metric: "Problems",
      color: "from-[#00f0ff] to-transparent",
      accent: "text-[#00f0ff]"
    },
    {
      platform: "HackerRank",
      username: "/tyagiatharav9999",
      solved: "5 Star",
      link: "https://www.hackerrank.com/profile/tyagiatharav9999",
      metric: "Rank",
      color: "from-[#8A2BE2] to-transparent",
      accent: "text-[#8A2BE2]"
    },
    {
      platform: "Kaggle",
      username: "atharav_t",
      solved: "Active",
      link: "#",
      metric: "Status",
      color: "from-slate-400 to-transparent",
      accent: "text-slate-300"
    }
  ];

  return (
    <section id="coding" className="py-24 relative z-10 w-full min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-b border-slate-800 pb-6 flex items-center justify-between"
        >
          <h2 className="text-4xl md:text-6xl font-black display-font text-white uppercase tracking-tighter text-glow">
            Coding Profiles
          </h2>
          <span className="text-slate-500 code-font hidden md:block text-sm">&lt;profiles /&gt;</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile, idx) => (
            <motion.a
              href={profile.link}
              target="_blank"
              rel="noreferrer"
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 relative overflow-hidden group flex flex-col justify-between h-64 border-t-2 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,240,255,0.3)]"
              style={{ borderTopColor: 'rgba(255,255,255,0.1)' }}
            >
              {/* Top Gradient Glow */}
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${profile.color} opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`} />

              <div className="flex justify-between items-start z-10 relative">
                <Terminal size={24} className={profile.accent} />
                <span className="code-font text-xs text-slate-400 border border-slate-700 px-2 py-1 bg-black/40 group-hover:text-white transition-colors">
                  @{profile.username}
                </span>
              </div>

              <div className="z-10 relative mt-auto">
                <h3 className="text-2xl font-black display-font text-white mb-2 uppercase tracking-wide group-hover:text-glow transition-all">{profile.platform}</h3>
                <div className="flex items-baseline gap-3">
                  <span className={`text-4xl font-black display-font tracking-tighter ${profile.accent} drop-shadow-lg`}>
                    {profile.solved}
                  </span>
                  <span className="code-font text-xs uppercase tracking-widest text-slate-500">{profile.metric}</span>
                </div>
              </div>

              {/* Holographic scanning line */}
              <div className="absolute left-0 w-full h-px bg-white/20 -top-full group-hover:animate-[scan_2s_linear_infinite] pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
