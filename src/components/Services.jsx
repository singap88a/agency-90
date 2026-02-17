import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Palette, Share2, Layout, Camera } from 'lucide-react';

const Services = () => {
  const { t, i18n } = useTranslation();
  
  const services = [
    { key: 'design', icon: Palette, color: 'text-[#D4AF37]', bg: 'bg-[#D4AF37]/5' },
    { key: 'marketing', icon: Share2, color: 'text-[#00f5d4]', bg: 'bg-[#00f5d4]/5' },
    { key: 'management', icon: Layout, color: 'text-white', bg: 'bg-white/5' },
    { key: 'photography', icon: Camera, color: 'text-[#D4AF37]', bg: 'bg-[#D4AF37]/5' },
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="text-[#00f5d4] font-black tracking-[0.4em] uppercase text-sm mb-6">Expertise Focus</div>
            <h2 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">{t('services.title')}</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl text-[#F2F0E4]/40 max-w-sm font-medium italic"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="relative p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm group hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="mb-10 inline-flex p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#D4AF37]/40 transition-colors">
                  <service.icon className={`w-10 h-10 ${service.color} group-hover:scale-110 transition-transform duration-500`} />
                </div>
                
                <h3 className="text-2xl font-black mb-10 tracking-tight text-white group-hover:text-[#D4AF37] transition-all">
                  {t(`services.${service.key}`)}
                </h3>
                
                <ul className="space-y-4">
                  {t(`services.items_${service.key}`, { returnObjects: true }).map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg font-medium text-[#F2F0E4]/30 group-hover:text-[#F2F0E4]/60 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-current opacity-20" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
