import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const containerRef = useRef(null);
  const isRtl = i18n.dir() === 'rtl';

  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section
      ref={containerRef}
      dir={isRtl ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-surface"
    >
      {/* Background Image - Full Natural Display */}
      <motion.div
        style={{ y: yHero }}
        className="absolute inset-0 z-0"
      >
        <img
          src={i18n.language === 'ar' ? '/hero_ar.png' : '/hero_en.png'}
          alt="Professional Background"
          className="w-full h-full object-cover" 
        />
      </motion.div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
            className="absolute rounded-3xl bg-white/5 backdrop-blur-3xl border border-white/10"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              rotate: `${15 + i * 15}deg`
            }}
          />
        ))}
      </div>

      {/* Sophisticated Dark Overlay */}
      <div className={cn(
        "absolute inset-0 z-[1] pointer-events-none transition-all duration-1000",
        isRtl 
          ? "bg-gradient-to-l from-brand-dark via-brand-dark/60 to-transparent" 
          : "bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent"
      )} />

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-24 relative z-10 py-32">
        <div
          className={cn(
            "max-w-3xl flex flex-col gap-10 w-full relative",
            isRtl ? "items-start text-right ml-auto" : "items-start text-left mr-auto"
          )}
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-brand-primary text-xs font-bold tracking-widest shadow-2xl ring-1 ring-white/10"
          >
            <Sparkles className="w-4 h-4" />
            <span>agency 90 — {isRtl ? 'وكالة إبداعية' : 'Creative Agency'}</span>
          </motion.div>
 
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={cn(
              "text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-white",
              isRtl ? "text-right" : "text-left"
            )}
          >
            {t('hero.title').split(' ').map((word, i) => {
              const highlights = isRtl ? [2, 3] : [2, 3];
              const isHighlight = highlights.includes(i % 5);
              return (
                <span key={i} className={cn(
                  "inline-block",
                  isHighlight ? "text-brand-primary italic drop-shadow-[0_10px_30px_rgba(var(--brand-primary-rgb),0.4)]" : ""
                )}>
                  {word}{' '}
                </span>
              )
            })}
          </motion.h1>
 
          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className={cn(
              "text-base md:text-lg text-white/55 max-w-xl leading-relaxed font-light",
              isRtl ? "text-right" : "text-left"
            )}
          >
            {t('hero.subtext')}
          </motion.p>
 
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={cn(
              "flex flex-col sm:flex-row gap-4 mt-4",
              isRtl ? "items-start" : "items-start"
            )}
          >
            <button className="relative group w-full sm:w-64 h-14 rounded-2xl bg-brand-primary text-white font-bold text-base overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(var(--brand-primary-rgb),0.35)] hover:scale-[1.02] flex items-center justify-center gap-3">
              <span className="relative z-10 flex items-center gap-3">
                {t('hero.cta')}
                <motion.div
                  animate={{ x: isRtl ? [0, -5, 0] : [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                </motion.div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </button>
 
            <button className="group relative w-full sm:w-64 h-14 flex items-center justify-center gap-3 rounded-2xl bg-white/8 backdrop-blur-3xl border border-white/15 text-white font-semibold text-base hover:bg-white/15 hover:border-white/25 transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-brand-primary/20 flex items-center justify-center text-brand-primary shadow-sm group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500">
                <Play className="w-4 h-4 fill-current" />
              </div>
              <span>{t('hero.projects')}</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
