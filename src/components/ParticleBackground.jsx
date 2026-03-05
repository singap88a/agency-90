import React from 'react';

const ParticleBackground = () => {

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-brand-surface">
      {/* Dynamic RGB Fluid Blobs */}
      <div 
        className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(5,150,105,0.08)_0%,transparent_70%)] blur-[160px]" 
      />
      <div 
        className="absolute top-[10%] -right-[10%] w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(var(--brand-primary-rgb),0.06)_0%,transparent_70%)] blur-[140px]" 
      />
      <div 
        className="absolute bottom-[-20%] left-[10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(var(--brand-secondary-rgb),0.05)_0%,transparent_70%)] blur-[160px]" 
      />

      {/* Subtle Noise Texture instead of patterns */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />


    </div>
  );
};

export default ParticleBackground;
