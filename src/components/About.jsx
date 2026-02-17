import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Lightbulb, ShieldCheck, Zap } from 'lucide-react';

const About = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const features = [
    { icon: Zap, title: "Speed", value: "99%" },
    { icon: ShieldCheck, title: "Security", value: "100%" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-sm mb-6 flex items-center gap-4">
              <div className="w-12 h-px bg-[#D4AF37]" />
              {t('about.tag')}
            </div>
            <h2 className="text-5xl lg:text-8xl font-black mb-12 leading-[0.9] tracking-tighter">
              {t('about.title')}
            </h2>
            <p className="text-2xl text-[#F2F0E4]/60 leading-relaxed mb-16 font-medium">
              {t('about.description')}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-12 border-t border-white/5">
               <div>
                  <div className="text-5xl font-black text-[#D4AF37] mb-2 tracking-tighter">100+</div>
                  <div className="text-xs uppercase tracking-[0.2em] font-black opacity-30">Projects</div>
               </div>
               <div>
                  <div className="text-5xl font-black text-white mb-2 tracking-tighter">8+</div>
                  <div className="text-xs uppercase tracking-[0.2em] font-black opacity-30">Success Years</div>
               </div>
               <div className="hidden md:block">
                  <div className="text-5xl font-black text-[#00f5d4] mb-2 tracking-tighter">24/7</div>
                  <div className="text-xs uppercase tracking-[0.2em] font-black opacity-30">Elite Support</div>
               </div>
            </div>
          </motion.div>

          <div className="grid gap-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 group cursor-pointer hover:border-[#D4AF37]/50 transition-all duration-700"
            >
              <div className="flex items-center gap-6 mb-8">
                <Target className="w-16 h-16 text-[#D4AF37] group-hover:rotate-[360deg] transition-transform duration-1000" />
                <h3 className="text-4xl font-black tracking-tighter">{t('about.mission.title')}</h3>
              </div>
              <p className="text-xl text-[#F2F0E4]/60 leading-relaxed font-medium">{t('about.mission.desc')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-12 group cursor-pointer hover:border-[#00f5d4]/50 transition-all duration-700 bg-[#00f5d4]/5"
            >
              <div className="flex items-center gap-6 mb-8">
                <Lightbulb className="w-16 h-16 text-[#00f5d4] group-hover:rotate-[360deg] transition-transform duration-1000" />
                <h3 className="text-4xl font-black tracking-tighter">{t('about.vision.title')}</h3>
              </div>
              <p className="text-xl text-[#F2F0E4]/60 leading-relaxed font-medium">{t('about.vision.desc')}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
