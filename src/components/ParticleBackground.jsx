import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParticleBackground = () => {
  const { scrollY } = useScroll();
  
  // Subtle parallax for the main blobs
  const y1 = useTransform(scrollY, [0, 2000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -300]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-brand-surface">
      {/* Dynamic RGB Fluid Blobs */}
      <motion.div 
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(5,150,105,0.08)_0%,transparent_70%)] blur-[160px]" 
      />
      <motion.div 
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] -right-[10%] w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(var(--brand-primary-rgb),0.06)_0%,transparent_70%)] blur-[140px]" 
      />
      <motion.div 
        animate={{
          x: [0, 30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] left-[10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(var(--brand-secondary-rgb),0.05)_0%,transparent_70%)] blur-[160px]" 
      />

      {/* Subtle Noise Texture instead of patterns */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

      {/* Floating Particles (Refined) */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-brand-primary/30 rounded-full"
          animate={{
            y: [0, -120, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 12,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
