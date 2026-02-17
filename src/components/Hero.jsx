import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play, Sparkles, Box, Compass } from 'lucide-react';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const containerRef = useRef(null);
  const isRtl = i18n.dir() === 'rtl';

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotateHero = useTransform(scrollY, [0, 500], [0, 5]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 perspective-1000">
      {/* Hero Specific Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated 3D Objects */}
        <motion.div 
          animate={{ rotate: 360, y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[10%] opacity-20 hidden lg:block"
        >
          <Box className="w-24 h-24 text-[#D4AF37]" strokeWidth={0.5} />
        </motion.div>

        <motion.div 
          animate={{ rotate: -360, x: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[15%] opacity-15 hidden lg:block"
        >
          <Compass className="w-32 h-32 text-[#00f5d4]" strokeWidth={0.5} />
        </motion.div>
      </div>

      <motion.div 
        style={{ rotateX: rotateHero }}
        className="container mx-auto px-6 relative z-10 pt-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-xl border border-white/10 bg-white/5 text-[#D4AF37] text-[11px] font-black tracking-[0.5em] uppercase mb-12 shadow-2xl backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
            {t('hero.tag')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, z: -100, rotateX: 20 }}
            animate={{ opacity: 1, z: 0, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-6xl   lg:text-[90px] font-heading font-black mb-8 leading-[1.2] tracking-[ -0.05em] text-white"
          >
            {t('hero.title').split(' ').map((word, i) => (
              <span key={i} className={i % 3 === 2 ? "text-[#D4AF37] drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]" : ""}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-[#F2F0E4]/60 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            {t('hero.subtext')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <button className="btn-premium !py-5 !px-14 text-xl group flex items-center gap-4 transition-all hover:shadow-[0_0_50px_rgba(212,175,55,0.4)]">
              {t('hero.cta')}
              {isRtl ? <ArrowLeft className="w-6 h-6 group-hover:-translate-x-3 transition-transform" /> : <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />}
            </button>
            
            <button className="flex items-center gap-5 text-lg font-black tracking-[0.2em] uppercase text-white/40 hover:text-[#D4AF37] transition-all group">
              <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37] transition-all">
                <Play className="w-6 h-6 fill-transparent group-hover:fill-[#D4AF37]" />
              </div>
              {t('hero.projects')}
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* 3D Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              y: [-20, 20],
              x: [-20, 20],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full blur-[1px]"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%` 
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
