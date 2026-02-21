import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  return (
    <footer className="relative z-20 py-16 px-6 lg:px-24 border-t border-slate-100 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-primary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-right" dir={isRtl ? 'rtl' : 'ltr'}>
          
          {/* 1. Brand Info (Right in RTL) */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3 group">
              <Link to="/" className="relative overflow-hidden rounded-xl">
                <img src="/logo.jpeg" alt="BrandUp" className="h-10 w-10 md:h-12 md:w-12 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-700" />
              </Link>
              <span className="text-xl md:text-2xl font-heading font-black tracking-tighter text-brand-dark">
                Brand<span className="text-brand-accent ml-1">Up</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[280px] text-center md:text-start">
              {t('nav.description')}
            </p>
          </div>

          {/* 2. Credits (Center) */}
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-slate-400 text-[10px] md:text-xs font-semibold tracking-widest mb-3 opacity-60">
              © {new Date().getFullYear()} BrandUp Agency
            </p>
            <div className={`flex items-center gap-2 text-sm md:text-base font-bold text-slate-700 ${isRtl ? 'flex-row' : 'flex-row'}`}>
               <span className="opacity-40 font-medium whitespace-nowrap">
                 {t('nav.developed_by')}
               </span>
               <a 
                 href="https://ahmedsingap.com/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-brand-accent hover:border-b-2 hover:border-brand-accent transition-all duration-300 pb-0.5 whitespace-nowrap"
               >
                  {t('nav.developer_name')}
               </a>
            </div>
          </div>

          {/* 3. Legal & Socials (Left in RTL) */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className={`flex gap-8 text-xs md:text-sm font-bold text-slate-500 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
              <Link to="/privacy" className="hover:text-brand-accent transition-all hover:scale-105 transform">{t('nav.privacy')}</Link>
              <Link to="/terms" className="hover:text-brand-accent transition-all hover:scale-105 transform">{t('nav.terms')}</Link>
            </div>
            
            <div className="flex gap-3">
              {[
                { icon: 'fab fa-instagram', label: 'Instagram' },
                { icon: 'fab fa-tiktok', label: 'TikTok' },
                { icon: 'fab fa-linkedin', label: 'LinkedIn' }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-accent/5 border border-brand-accent/30 text-brand-accent hover:bg-brand-accent hover:text-white transition-all duration-500 transform group"
                >
                  <i className={`${social.icon} text-base group-hover:scale-110 transition-transform`}></i>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
