import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, Play, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const containerRef = useRef(null);
  const isRtl = i18n.dir() === 'rtl';


  return (
    <section
      ref={containerRef}
      dir={isRtl ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-surface"
    >
      {/* Background Image - Full Natural Display */}
      <div
        className="absolute inset-0 z-0 bg-brand-dark"
      >
        <img
          src={i18n.language === 'ar' ? '/hero-ar.png' : '/hero-en.png'}
          alt="Professional Background"
          className="w-full h-full object-cover" 
          fetchpriority="high"
          loading="eager"
        />
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
          <div
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-brand-primary text-xs font-bold tracking-widest shadow-2xl ring-1 ring-white/10"
          >
            <Sparkles className="w-4 h-4" />
            <span>agency 90 — {isRtl ? 'وكالة إبداعية' : 'Creative Agency'}</span>
          </div>
 
          {/* Title */}
          <h1
            className={cn(
              "text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.3] text-white",
              isRtl ? "text-right" : "text-left"
            )}
          >
            {t('hero.title').split(' ').map((word, i) => {
              const highlights = isRtl ? [2, 3] : [2, 3];
              const isHighlight = highlights.includes(i % 5);
              return (
                <span key={i} className={cn(
                  "inline-block mx-[0.05em]",
                  isHighlight ? "text-brand-primary italic drop-shadow-[0_10px_30px_rgba(var(--brand-primary-rgb),0.4)]" : ""
                )}>
                  {word}{' '}
                </span>
              )
            })}
          </h1>
 
          {/* Subtext */}
          <p
            className={cn(
              "text-base md:text-lg text-white/90 max-w-xl leading-relaxed font-semibold drop-shadow-sm",
              isRtl ? "text-right" : "text-left"
            )}
          >
            {t('hero.subtext')}
          </p>
 
          {/* Buttons */}
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 mt-4",
              isRtl ? "items-start" : "items-start"
            )}
          >
            <Link to="/contact" className="relative group px-10 h-14 rounded-2xl bg-brand-primary text-white font-bold text-base overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(var(--brand-primary-rgb),0.35)] hover:scale-[1.02] flex items-center justify-center gap-3">
              <span className="relative z-10 flex items-center gap-3 whitespace-nowrap">
                {t('hero.cta')}
                <div>
                  {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                </div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </Link>
 
            <Link to="/projects" className="group relative px-10 h-14 flex items-center justify-center gap-3 rounded-2xl bg-white/8 backdrop-blur-3xl border border-white/15 text-white font-semibold text-base hover:bg-white/15 hover:border-white/25 transition-all duration-300">
              <span className="flex items-center gap-3 whitespace-nowrap">
                <div className="w-9 h-9 rounded-lg bg-brand-primary/20 flex items-center justify-center text-brand-primary shadow-sm group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                {t('hero.projects')}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
