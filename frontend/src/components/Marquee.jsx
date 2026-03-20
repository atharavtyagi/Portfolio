import React from 'react';

const Marquee = () => {
  return (
    <div className="py-10 bg-[#ccff00] text-black overflow-hidden relative rotate-[-2deg] scale-105 z-20 shadow-2xl">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* Repeat enough times to fill screen without jumping */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-4xl md:text-6xl font-black display-font uppercase px-8">Full-Stack Architecture</span>
            <span className="text-2xl">&bull;</span>
            <span className="text-4xl md:text-6xl font-black display-font uppercase px-8">UI/UX Engineering</span>
            <span className="text-2xl">&bull;</span>
            <span className="text-4xl md:text-6xl font-black display-font uppercase px-8">Scalable Backend Systems</span>
            <span className="text-2xl">&bull;</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
