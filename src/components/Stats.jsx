import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2, Users2, Trophy, Star } from 'lucide-react';

const Stats = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const icons = [
    <CheckCircle2 className="w-6 h-6" />,
    <Users2 className="w-6 h-6" />,
    <Trophy className="w-6 h-6" />,
    <Star className="w-6 h-6" />
  ];

  return (
    <section className="relative py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Single Professional Container (Rectangle) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto p-6 lg:p-4 rounded-3xl bg-white border border-black/[0.1] shadow-[0_20px_80px_rgba(0,0,0,0.04)] overflow-hidden"
        >
          {/* Subtle Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/[0.02] via-transparent to-brand-primary/[0.02] pointer-events-none" />

          {t('hero.stats', { returnObjects: true }).map((stat, i) => (
            <div key={i} className="flex-1 w-full lg:w-auto relative group">
              <div className="flex items-center gap-6 p-8 lg:p-10">
                {/* Icon Side-Aligned */}
                <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-accent/5 text-brand-accent flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 shadow-sm">
                  {icons[i]}
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <div className="text-3xl lg:text-5xl font-black text-brand-accent tracking-tighter transition-transform group-hover:scale-105 duration-500">
                    {stat.value}
                  </div>
                  <div className="text-xs lg:text-sm font-black uppercase tracking-[0.25em] text-brand-dark/60 group-hover:text-brand-dark transition-colors duration-500">
                    {stat.label}
                  </div>
                </div>
              </div>

              {/* Refined Vertical Divider (Except last item) */}
              {i < 3 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-black/[0.08]" />
              )}
              {/* Horizontal Divider for Mobile */}
              {i < 3 && (
                <div className="lg:hidden w-[80%] mx-auto h-[1px] bg-black/[0.05]" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
