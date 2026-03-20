import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Leavify",
      subtitle: "Employee Leave Management System",
      duration: "Feb 2026 - Present",
      description: "Enabled employees to digitally submit leave applications, reimbursement claims, and monitor balances through a centralized portal. Implemented secure Role-Based Access Control (RBAC), real-time notifications, live chat, and an AI-powered HR assistant with analytics dashboards.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Socket.IO", "Multer"],
      github: "https://github.com/atharavtyagi/leavify",
      live: "https://leavifyy.vercel.app",
      image: "/leavify-full.png"
    },
    {
      title: "Fuel Sync",
      subtitle: "Loyalty Operations Interface",
      duration: "Oct 2025 - Dec 2025",
      description: "A comprehensive digital ecosystem allowing station owners to fully automate fuel sales loyalty tracking. Replaces manual ledger systems with precise point calculation algorithms and real-time oversight.",
      tech: ["React", "Express.js", "MongoDB", "Node"],
      github: "https://github.com/atharavtyagi/fuelsync",
      live: "https://fuelsync.netlify.app",
      image: "/fuelsync-full.png"
    },
    {
      title: "Petrofy",
      subtitle: "Intelligent Invoicing",
      duration: "Feb 2025 - Apr 2025",
      description: "A robust billing and reporting manager that auto-generates exact digital invoices. Features advanced synchronized logic to manage complex transaction pools and deliver PDFs instantly.",
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      github: "https://github.com/atharavtyagi/Petrofy",
      live: "https://petrofy.netlify.app"
    },
    {
      title: "Poll Sys",
      subtitle: "Real-time Telemetry",
      duration: "Nov 2024 – Dec 2024",
      description: "A highly responsive, state-driven polling application offering instant aggregated feedback. Engineered utilizing rapid bundling to serve dynamic client experiences backed by a node framework.",
      tech: ["React", "Vite", "Node.js", "Tailwind"],
      github: "https://github.com/atharavtyagi/poll",
      live: "https://polll.netlify.app"
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10 w-full min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 border-b border-slate-800 pb-6 flex items-center justify-between"
        >
          <h2 className="text-4xl md:text-6xl font-black display-font text-white uppercase tracking-tighter text-glow">
            Projects
          </h2>
          <span className="text-slate-500 code-font hidden md:block text-sm">&lt;projects /&gt;</span>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, type: "spring" }}
              className="glass-panel p-8 md:p-12 relative overflow-hidden group flex flex-col lg:flex-row gap-8 lg:gap-16 items-center"
            >
              {/* Cyberpunk accent lines */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00f0ff]/20 to-transparent blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#8A2BE2]/20 to-transparent blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-700 pointer-events-none" />

              <div className="flex-1 w-full z-10">
                <div className="flex items-center gap-4 mb-6 opacity-60">
                  <Database size={16} className="text-[#00f0ff]" />
                  <span className="code-font text-xs tracking-widest uppercase text-[#00f0ff]">Status: Active</span>
                  <span className="code-font text-xs text-slate-400 border border-slate-700 px-2 py-0.5 rounded">{project.duration}</span>
                </div>

                <h3 className="text-4xl md:text-5xl font-black display-font text-white uppercase tracking-tighter hover:text-glow transition-all duration-300 mb-2">
                  {project.title}
                </h3>
                <h4 className="text-xl text-[#8A2BE2] font-bold display-font tracking-widest uppercase mb-6 drop-shadow-lg">
                  {project.subtitle}
                </h4>

                <p className="text-slate-300 font-sans leading-relaxed text-lg mb-8 max-w-2xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="code-font text-xs bg-black/40 border border-slate-700 text-[#00f0ff] px-3 py-1.5 shadow-inner">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-[#00f0ff] text-black font-bold uppercase tracking-widest text-sm rounded hover:bg-white transition-colors duration-300 display-font shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-none w-full sm:w-auto">
                    Live Output <ExternalLink size={16} />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 border border-[#8A2BE2]/50 text-white font-bold uppercase tracking-widest text-sm rounded hover:bg-[#8A2BE2]/20 transition-colors duration-300 display-font w-full sm:w-auto">
                    Source <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Right side Wireframe/Graphic */}
              <div className="flex-1 w-full relative hidden lg:flex items-center justify-center pointer-events-none">
                <div className="w-full h-80 border-2 border-slate-800 rounded-2xl relative overflow-hidden group-hover:border-[#00f0ff]/30 transition-colors duration-700 bg-[#02040A]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ imageRendering: 'high-quality', WebkitBackfaceVisibility: 'hidden', perspective: 1000 }}
                      className="w-full h-auto absolute top-0 left-0 transition-all ease-linear duration-[6s] object-top opacity-50 group-hover:opacity-100 transform transform-gpu will-change-transform group-hover:-translate-y-[calc(100%-20rem)]"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(0,240,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.2) 1px, transparent 1px)', backgroundSize: '30px 30px', transform: 'perspective(500px) rotateX(45deg)' }} />
                      <div className="absolute inset-0 items-center justify-center flex">
                        <Globe size={120} className="text-slate-700 opacity-30 group-hover:text-[#00f0ff] group-hover:opacity-100 transition-all duration-700" strokeWidth={1} />
                      </div>
                    </>
                  )}
                  {/* Holographic scanning effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/10 to-transparent h-[10px] w-full animate-[scan_3s_linear_infinite] z-20 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
