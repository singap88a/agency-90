import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Instagram, MessagesSquare, Mail } from 'lucide-react';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  return (
    <footer className="relative z-20 py-16 px-6 lg:px-24 border-t border-slate-100 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-primary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-right" dir={isRtl ? 'rtl' : 'ltr'}>
          
          {/* 1. Brand Info (Right in RTL) */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3 group">
              <Link to="/" className="relative overflow-hidden rounded-xl">
                <img src="/logo.png" alt="agency 90" className="h-10 w-20 md:h-12 md:w-20 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-700" />
              </Link>
       
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[280px] text-center md:text-start">
              {t('nav.description')}
            </p>
          </div>

          {/* 2. Credits (Center) */}
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-slate-400 text-[10px] md:text-xs font-semibold tracking-widest mb-3 opacity-60">
              © {new Date().getFullYear()} agency 90
            </p>
            <div className={`flex items-center gap-2 text-sm md:text-base font-bold text-slate-700 ${isRtl ? 'flex-row' : 'flex-row'}`}>
               <span className="opacity-40 font-medium whitespace-nowrap">
                 {t('nav.developed_by')}
               </span>
               <a 
                 href="https://ahmedsingap.com/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-brand-primary hover:border-b-2 hover:border-brand-primary transition-all duration-300 pb-0.5 whitespace-nowrap"
               >
                  {t('nav.developer_name')}
               </a>
            </div>
          </div>

          {/* 3. Legal & Socials (Left in RTL) */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className={`flex gap-8 text-xs md:text-sm font-bold text-slate-500 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
              <Link to="/privacy" className="hover:text-brand-primary transition-all hover:scale-105 transform">{t('nav.privacy')}</Link>
              <Link to="/terms" className="hover:text-brand-primary transition-all hover:scale-105 transform">{t('nav.terms')}</Link>
            </div>
            
            <div className="flex gap-4">
              {[
                { 
                  icon: <Instagram className="w-5 h-5" />, 
                  label: 'Instagram', 
                  link: 'https://www.instagram.com/saeed.sinan2002?igsh=MTJyMDRvdzV2eW10dg%3D%3D&utm_source=qr' 
                },
                { 
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  ), 
                  label: 'WhatsApp', 
                  link: 'https://wa.me/962788040051' 
                },
                { 
                  icon: <Mail className="w-5 h-5" />, 
                  label: 'Email', 
                  link: `mailto:${t('contact.emailValue')}` 
                }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-slate-100 text-slate-400 hover:bg-brand-primary hover:text-white hover:border-brand-primary hover:-translate-y-1 transition-all duration-500 shadow-sm"
                >
                  {social.icon}
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
