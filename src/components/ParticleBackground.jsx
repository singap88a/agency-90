import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParticleBackground = () => {
  const { scrollY } = useScroll();
  
  // Subtle parallax for the main blobs
  const y1 = useTransform(scrollY, [0, 2000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -300]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#011614]">
      {/* 3D Immersive Gradients */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1)_0%,transparent_60%)] blur-[120px]" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[20%] right-[0%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_50%_50%,rgba(0,245,212,0.08)_0%,transparent_60%)] blur-[100px]" 
      />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05)_0%,transparent_60%)] blur-[120px]" />

      {/* Textured Layers */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-[0.03] mix-blend-overlay" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)]" />

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[1px] h-[1px] bg-[#D4AF37]/20 rounded-full blur-[0.5px]"
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.4, 0],
            scale: [1, 2, 1]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
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
