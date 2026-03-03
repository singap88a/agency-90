import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2, Users2, Trophy, Star } from 'lucide-react';

const Stats = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const icons = [
    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />,
    <Users2 className="w-5 h-5 md:w-6 md:h-6" />,
    <Trophy className="w-5 h-5 md:w-6 md:h-6" />,
    <Star className="w-5 h-5 md:w-6 md:h-6" />
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const statsData = t('hero.stats', { returnObjects: true });

  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-[2.5rem] lg:rounded-[3.5rem] p-6 lg:p-12 border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white shadow-xl overflow-hidden"
        >
          {/* ✨ CTA-Style Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Soft Glows */}
            <div className="absolute -top-32 right-0 w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-32 left-0 w-[350px] h-[350px] bg-brand-primary/10 rounded-full blur-[120px]" />
            
            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.3)_1px,transparent_1px)] bg-[size:70px_70px]" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative z-10">
            {statsData.map((stat, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="relative flex flex-col items-center lg:items-start px-4 lg:px-10 group"
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 w-full">
                  {/* Icon Container with Spacing */}
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-500">
                    {icons[i]}
                  </div>

                  {/* Text Section - Primary Color for Value */}
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-right">
                    <span className="text-4xl lg:text-5xl font-black text-brand-primary tracking-tighter mb-1 transition-transform duration-500 group-hover:scale-105">
                      {stat.value}
                    </span>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-brand-secondary whitespace-nowrap group-hover:text-brand-dark transition-colors duration-300">
                      {stat.label}
                    </span>
                  </div>
                </div>

                {/* Vertical Divider (Desktop: between all, Mobile: between pairs) */}
                {i % 2 === 0 && (
                  <div className="lg:hidden absolute -right-[1px] top-1/2 -translate-y-1/2 w-[1px] h-10 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
                )}
                {i < statsData.length - 1 && (
                  <div className="hidden lg:block absolute -right-[1px] top-1/2 -translate-y-1/2 w-[1px] h-14 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
                )}

                {/* Horizontal Divider (Mobile: Between rows) */}
                {i < 2 && (
                  <div className="lg:hidden absolute -bottom-4 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
