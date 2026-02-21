import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Figma, Megaphone, BarChart3, Video } from 'lucide-react';

const Services = () => {
  const { t, i18n } = useTranslation();
  
  const services = [
    { key: 'design', icon: Figma },
    { key: 'marketing', icon: Megaphone },
    { key: 'management', icon: BarChart3 },
    { key: 'photography', icon: Video },
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Elite Header */}
        <div className="max-w-4xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-6">
              <span className="h-[3px] w-16 bg-brand-accent rounded-full" />
              <span className="text-brand-accent font-bold tracking-widest block text-xs lg:text-sm">
                {t('services.tag')}
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-brand-dark leading-none">
              {i18n.language === 'ar' ? (
                <>حلول رقمية <span className="text-brand-accent">مبتكرة</span></>
              ) : (
                <>Innovative <span className="text-brand-accent">Digital</span> Solutions</>
              )}
            </h2>
            
            <p className="text-lg lg:text-xl text-brand-dark/40 max-w-3xl font-medium leading-relaxed">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Elite Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white/60 backdrop-blur-xl rounded-[3.5rem] p-10 border border-brand-accent/20 transition-all duration-700 hover:-translate-y-4 hover:border-brand-accent/50 hover:bg-white/80 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/[0.02] to-transparent rounded-[3.5rem]" />
              
              <div className="relative z-10">
                {/* Icon Container - Permanent Yellow State with Lighter Shadow */}
                <div className="mb-10 relative flex">
                  <div className="w-16 h-16 rounded-3xl bg-brand-accent shadow-[0_15px_40px_rgba(245,176,2,0.35)] flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <service.icon className="w-9 h-9" />
                  </div>
                  <div className="absolute -inset-4 bg-brand-accent/20 blur-2xl rounded-full" />
                </div>

                <h3 className="text-2xl lg:text-2xl font-bold mb-10 tracking-tighter leading-tight whitespace-nowrap overflow-hidden text-ellipsis text-brand-dark group-hover:text-brand-accent transition-colors duration-500">
                  {t(`services.${service.key}`)}
                </h3>

                <ul className="space-y-6">
                  {Array.isArray(t(`services.items_${service.key}`, { returnObjects: true })) && 
                    t(`services.items_${service.key}`, { returnObjects: true }).map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-brand-dark/70 group-hover:text-brand-dark transition-colors duration-500">
                      <span className="w-2 h-2 rounded-full bg-brand-accent" />
                      <span className="text-xs lg:text-sm font-bold tracking-wide">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Number */}
              <span className="absolute top-12 left-3 text-7xl font-black text-brand-accent/[0.08] pointer-events-none">
                0{idx + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
