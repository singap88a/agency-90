// ContactPage.jsx
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Contact from '../components/Contact';

const ContactPage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen md:pt-20 pt-10 bg-brand-surface" >
      {/* Banner - خلفية نفس لون الصفحة */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-brand-surface">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/contact_us.jpg"
            alt="Contact Banner"
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* Contact Content */}
      <div className="relative z-30">
        <Contact isPage={true} />
      </div>
    </div>
  );
};

export default ContactPage;