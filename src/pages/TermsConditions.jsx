import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-40 pb-20 px-6 max-w-5xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-12 lg:p-20"
      >
        <h1 className="text-5xl lg:text-7xl font-black mb-12 tracking-tighter text-[#D4AF37]">{t('nav.terms')}</h1>
        <div className="space-y-12 text-xl lg:text-2xl text-[#F2F0E4]/60 leading-relaxed font-medium">
          {t('legal.termsContent', { returnObjects: true }).map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-3xl font-black text-white">{section.title}</h2>
              <p>{section.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TermsConditions;
