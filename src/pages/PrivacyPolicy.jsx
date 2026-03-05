import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-40 pb-20 px-6 max-w-5xl mx-auto min-h-screen">
      <div
        className="glass-card p-12 lg:p-20"
      >
        <h1 className="text-5xl lg:text-7xl font-black mb-12 tracking-tighter text-brand-primary">{t('nav.privacy')}</h1>
        <div className="space-y-12 text-xl lg:text-2xl text-brand-dark/60 leading-relaxed font-medium">
          {t('legal.privacyContent', { returnObjects: true }).map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-3xl font-black text-brand-dark">{section.title}</h2>
              <p>{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
