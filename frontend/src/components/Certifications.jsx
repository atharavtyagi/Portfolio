import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certs = [
    { title: "Privacy & Security in Online Social Media", issuer: "NPTEL", date: " 2025", hash: "0x8F9A", link: "https://drive.google.com/file/d/1HnGcIVg41-USoXcET3BD5tEsntUXRIHo/view?usp=drivesdk" },
    { title: "Placement Ace: Java Bootcamp", issuer: "LPU-CPE", date: "2025", hash: "0x2B4C", link: "https://drive.google.com/file/d/1-sEG-XDRWCh-lcFKWqMvO_gQQX1ixhOq/view" },
    { title: "Frontend Web Development", issuer: "AWS", date: "2023", hash: "0x9E1D", link: "https://drive.google.com/file/d/17ivFQL-Gtc88ARdW4yVgCWHnIETlTz6h/view" },
    { title: "Backend Web Development", issuer: "GDSC KIIT", date: "2023", hash: "0x4A6F", link: "https://drive.google.com/file/d/1Mz8wKq_RAYfHwnWiw-vy6soqSNU-AyfP/view" }
  ];

  return (
    <section id="certifications" className="py-24 relative z-10 w-full min-h-screen flex items-center bg-[#02040A]/50">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-b border-slate-800 pb-6 flex items-center justify-between"
        >
          <h2 className="text-4xl md:text-6xl font-black display-font text-white uppercase tracking-tighter text-glow">
            Certifications
          </h2>
          <span className="text-slate-500 code-font hidden md:block text-sm">&lt;certifications /&gt;</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert, idx) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 holographic-border group flex items-start gap-6 cursor-pointer hover:shadow-[0_0_20px_rgba(138,43,226,0.3)] transition-all relative"
            >
              <div className="w-12 h-12 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center shrink-0 group-hover:bg-[#00f0ff] group-hover:text-black transition-colors text-[#00f0ff]">
                <Fingerprint size={24} />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold display-font text-white leading-tight uppercase tracking-wider group-hover:text-glow transition-all">
                  {cert.title}
                </h3>
                <p className="text-[#00f0ff] code-font text-xs mt-3 uppercase tracking-widest">
                  Issuer: {cert.issuer}
                </p>
              </div>

              <div className="absolute top-8 right-8 text-[#8A2BE2] code-font text-xs font-bold tracking-widest group-hover:text-[#00f0ff] transition-colors">
                {cert.date}
              </div>

              <div className="absolute bottom-6 right-8 text-slate-600 group-hover:text-[#00f0ff] transition-colors opacity-0 group-hover:opacity-100">
                <ExternalLink size={20} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
