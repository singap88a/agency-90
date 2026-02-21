import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const ContactPage = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Use a professional gradient/overlay if image generation is unavailable or for extra "elite" look
  const bannerBg = "/contact_banner_bg_v2.png"; // Placeholder for the generated image

  return (
    <div className="pt-24 min-h-screen">
      {/* Elite Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/80 via-brand-secondary/40 to-brand-secondary z-10" />
          <div className="absolute inset-0 bg-brand-dark/5 z-0" />
          {/* Faint background image with filter */}
          <div 
            className="absolute inset-0 bg-center bg-cover scale-110 blur-sm"
            style={{ 
              backgroundImage: `url(${bannerBg})`,
              filter: 'grayscale(100%) opacity(0.15)'
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent font-black tracking-[0.5em] uppercase text-xs mb-4 block">
              {t('nav.stay_connected')}
            </span>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-brand-dark mb-6">
              {t('nav.contact')}
            </h1>
            <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <div className="-mt-16 relative z-30 pb-24">
        <Contact isPage={true} />
      </div>
    </div>
  );
};

export default ContactPage;
