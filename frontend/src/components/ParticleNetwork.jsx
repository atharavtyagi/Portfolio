import React, { useRef, useEffect } from 'react';

const ParticleNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: false }); // Optimize by disabling alpha on canvas itself
    let animationFrameId;
    let particlesList = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    let mouse = {
      x: null,
      y: null,
      radius: 100 // Reduced mouse interaction radius for performance
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseout', handleMouseOut, { passive: true });

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        // Removed heavy ctx.shadowBlur for massive performance gain.
      }
      
      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Collision detection with mouse
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
              this.x += 1; // Slower push for smoother interaction
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
              this.x -= 1;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
              this.y += 1;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
              this.y -= 1;
            }
          }
        }
        
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const init = () => {
      particlesList = [];
      // Drastically reduced particle count (from /9000 to /20000)
      let numberOfParticles = Math.floor((canvas.height * canvas.width) / 20000); 
      // Cap maximum particles to ensure mobile/low-end device smoothness
      if (numberOfParticles > 80) numberOfParticles = 80;

      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 1) - 0.5; // Slower movement
        let directionY = (Math.random() * 1) - 0.5;
        let color = Math.random() > 0.5 ? '#00f0ff' : '#8A2BE2';

        particlesList.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      // Cheaper clear operation with solid color fill
      ctx.fillStyle = '#02040A';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < particlesList.length; i++) {
        particlesList[i].update();
      }
      connect();
    };

    const connect = () => {
      let opacityValue = 1;
      // Pre-calculate threshold and square it to avoid Math.sqrt in the hot loop
      const connectionDistance = (canvas.width / 10) * (canvas.height / 10);
      
      for (let a = 0; a < particlesList.length; a++) {
        for (let b = a + 1; b < particlesList.length; b++) { // start from a + 1
          let dx = particlesList[a].x - particlesList[b].x;
          let dy = particlesList[a].y - particlesList[b].y;
          let distanceSq = (dx * dx) + (dy * dy);
          
          if (distanceSq < connectionDistance) {
            opacityValue = 1 - (distanceSq / connectionDistance);
            
            // Create a gradient line between the two particles
            let grad = ctx.createLinearGradient(
              particlesList[a].x, particlesList[a].y, 
              particlesList[b].x, particlesList[b].y
            );
            
            // Convert hex to rgba for gradient stops
            const hexToRgb = (hex) => {
              const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
              return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0,240,255';
            };
            
            const colorA = hexToRgb(particlesList[a].color);
            const colorB = hexToRgb(particlesList[b].color);

            grad.addColorStop(0, `rgba(${colorA}, ${opacityValue * 0.25})`);
            grad.addColorStop(1, `rgba(${colorB}, ${opacityValue * 0.25})`);

            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.5; // Thinner lines render faster
            ctx.beginPath();
            ctx.moveTo(particlesList[a].x, particlesList[a].y);
            ctx.lineTo(particlesList[b].x, particlesList[b].y);
            ctx.stroke();
          }
        }
      }
    };

    handleResize();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-[-1] pointer-events-auto"
      // Added style to force hardware acceleration and avoid reflows
      style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
    />
  );
};

export default ParticleNetwork;
