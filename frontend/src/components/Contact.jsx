import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radio } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('https://formspree.io/f/xwvrzqrz', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 w-full min-h-screen flex items-center bg-[#02040A]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-b border-slate-800 pb-6 flex items-center justify-between"
        >
          <h2 className="text-4xl md:text-6xl font-black display-font text-white uppercase tracking-tighter text-glow">
            Contact Me
          </h2>
          <span className="text-slate-500 code-font hidden md:block text-sm">&lt;contact /&gt;</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-8 px-4 py-2 bg-[#00f0ff]/10 border border-[#00f0ff]/30 w-fit">
                <Radio size={16} className="text-[#00f0ff] animate-pulse" />
                <span className="code-font text-xs uppercase text-[#00f0ff] tracking-widest font-bold">Open To Work</span>
              </div>
              <p className="text-lg text-slate-400 font-sans leading-relaxed mb-12">
                I am actively looking for new opportunities as a software engineer. Feel free to reach out via the form below to connect.
              </p>
            </div>

            <div className="glass-panel p-8 holographic-border space-y-6">
              <div>
                <span className="code-font text-xs text-slate-500 uppercase tracking-widest block mb-1">Email:</span>
                <a href="mailto:tyagiatharav9999@gmail.com" className="text-xl md:text-2xl text-white font-bold hover:text-glow transition-all display-font">
                  tyagiatharav9999@gmail.com
                </a>
              </div>
              <div>
                <span className="code-font text-xs text-slate-500 uppercase tracking-widest block mb-1">Phone:</span>
                <a href="tel:+918171498090" className="text-xl md:text-2xl text-[#8A2BE2] font-bold hover:text-white transition-all display-font violet-glow">
                  +91 81714 98090
                </a>
              </div>
            </div>
          </motion.div>

          {/* Terminal Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel p-8 md:p-12 relative overflow-hidden"
          >
            {/* Terminal Top Bar */}
            <div className="absolute top-0 left-0 w-full h-8 bg-black/40 border-b border-slate-800 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 opacity-50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-50" />
              <div className="w-3 h-3 rounded-full bg-green-500 opacity-50" />
              <span className="code-font text-[10px] text-slate-500 ml-4">atharav@portfolio:~</span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8 mt-8 relative z-10">
              <div className="flex flex-col gap-2 group">
                <label className="code-font text-xs font-bold tracking-[0.2em] text-[#00f0ff] uppercase">&gt; Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-slate-700 py-3 text-white font-sans focus:outline-none focus:border-[#00f0ff] transition-colors placeholder-slate-800"
                  placeholder="Enter your name..."
                />
              </div>

              <div className="flex flex-col gap-2 group">
                <label className="code-font text-xs font-bold tracking-[0.2em] text-[#8A2BE2] uppercase">&gt; Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-slate-700 py-3 text-white font-sans focus:outline-none focus:border-[#8A2BE2] transition-colors placeholder-slate-800"
                  placeholder="Enter your email..."
                />
              </div>

              <div className="flex flex-col gap-2 group">
                <label className="code-font text-xs font-bold tracking-[0.2em] text-white uppercase">&gt; Message</label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border border-slate-800 mt-2 p-4 text-slate-300 font-sans focus:outline-none focus:border-white transition-colors placeholder-slate-800 resize-none hover:bg-white/5"
                  placeholder="Write your message here..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                <div className="code-font text-xs uppercase tracking-widest flex-1">
                  {status === 'success' && <span className="text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1 border border-[#00f0ff]/30">Message Sent Successfully.</span>}
                  {status === 'error' && <span className="text-red-500 bg-red-500/10 px-3 py-1 border border-red-500/30">Failed to send message.</span>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto px-8 py-3 bg-[#00f0ff]/10 border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black transition-all font-bold code-font uppercase tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
