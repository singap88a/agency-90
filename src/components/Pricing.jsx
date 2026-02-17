import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Diamond, Zap, Layers, BarChart3, ChevronRight, ChevronLeft } from 'lucide-react';

const Pricing = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const modules = [
    { icon: Layers, key: 'strategic', color: 'text-[#D4AF37]' },
    { icon: Zap, key: 'growth', color: 'text-[#00f5d4]' },
    { icon: Diamond, key: 'premium', color: 'text-white' },
    { icon: BarChart3, key: 'data', color: 'text-[#00f5d4]' },
  ];

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#002B26]/20 rounded-full blur-[150px]" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] font-black tracking-[0.5em] uppercase text-xs mb-6"
          >
            Investment & Value
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter"
          >
            {t('nav.investment')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl text-[#F2F0E4]/40 max-w-2xl mx-auto font-medium"
          >
            {isRtl ? 'نحن لا نقدم مجرد خدمات، بل نستثمر في نجاح علامتك التجارية من خلال حلول مخصصة تعكس قيمتكم الحقيقية.' : 'We don\'t just offer services; we invest in your brand\'s success through tailored solutions that reflect your true value.'}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-16 flex flex-col items-start bg-gradient-to-br from-[#D4AF37]/10 to-transparent border-[#D4AF37]/20"
          >
             <h3 className="text-5xl font-black mb-8 tracking-tighter">
                {isRtl ? 'حلول مخصصة (On-Demand)' : 'Bespoke Solutions'}
             </h3>
             <p className="text-xl text-[#F2F0E4]/60 mb-12 leading-relaxed">
                {isRtl ? 'تم تصميم كل مشروع من الصفر ليناسب احتياجاتك الفريدة. نحن نركز على الجودة العالية والنتائج الملموسة.' : 'Every project is crafted from scratch to fit your unique needs. We focus on peak quality and tangible results.'}
             </p>
             <ul className="space-y-6 mb-16">
                {['Custom Strategies', 'Dedicated Media Squad', 'Executive Support', 'Rapid Innovation'].map((item, i) => (
                  <li key={i} className="flex items-center gap-6 text-xl font-bold">
                    <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
                    {item}
                  </li>
                ))}
             </ul>
             <button className="btn-premium group flex items-center gap-4 !px-12 !py-6 text-xl">
                {isRtl ? 'اطلب استشارة خاصة' : 'Request Consultation'}
                {isRtl ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
             </button>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-12 hover:bg-white/5 transition-all group"
              >
                <m.icon className={`w-12 h-12 ${m.color} mb-8 group-hover:scale-125 transition-transform duration-500`} />
                <h4 className="text-2xl font-black mb-4 tracking-tighter">
                   {t(`pricing.${m.key}.title`)}
                </h4>
                <div className="text-[#F2F0E4]/40 font-medium leading-relaxed">
                   {t(`pricing.${m.key}.desc`)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
