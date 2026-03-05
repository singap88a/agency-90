import React from 'react';
import { useTranslation } from 'react-i18next';
import { Figma, Megaphone, BarChart3, Video, Laptop } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Services = () => {
  const { t, i18n } = useTranslation();
  
  const services = [
    { key: 'design', icon: Figma },
    { key: 'marketing', icon: Megaphone },
    { key: 'development', icon: Laptop },
    { key: 'management', icon: BarChart3 },
    { key: 'photography', icon: Video },
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 lg:px-6">
        {/* Elite Header */}
        <div className="max-w-4xl mb-12">
          <div
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-6">
              <span className="h-[3px] w-16 bg-brand-primary rounded-full" />
              <span className="text-brand-primary font-bold tracking-widest block text-xs lg:text-sm">
                {t('services.tag')}
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-brand-secondary leading-none">
              {i18n.language === 'ar' ? (
                <>حلول رقمية <span className="text-brand-primary">مبتكرة</span></>
              ) : (
                <>Innovative <span className="text-brand-primary">Digital</span> Solutions</>
              )}
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-500 max-w-3xl font-medium leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>
        </div>

        {/* Elite Service Cards using Swiper */}
        <div className="w-full relative">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
            dir={i18n.dir() === 'rtl' ? 'rtl' : 'ltr'}
            key={i18n.dir() === 'rtl' ? 'rtl' : 'ltr'}
            className="services-swiper !pb-8"
          >
            {services.map((service, idx) => (
              <SwiperSlide key={service.key} className="!h-auto pb-4">
                <div
                  className="group h-full flex flex-col relative bg-white/95 lg:bg-white/90 backdrop-blur-md lg:backdrop-blur-3xl rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-8 border border-brand-primary/20 lg:border-brand-primary/30 shadow-lg lg:shadow-[0_20px_40px_-10px_rgba(var(--brand-primary-rgb),0.15)] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl lg:hover:shadow-[0_25px_50px_-12px_rgba(var(--brand-primary-rgb),0.25)] overflow-hidden transform-gpu"
                >
                  {/* Premium Background Mesh Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/[0.02] lg:from-brand-primary/[0.04] via-transparent to-brand-primary/[0.03] lg:to-brand-primary/[0.06] transition-opacity duration-500" />
                  <div className={`absolute -top-20 ${i18n.language === 'ar' ? '-left-20' : '-right-20'} w-48 h-48 bg-brand-primary/10 lg:bg-brand-primary/20 blur-[40px] lg:blur-[60px] rounded-full transition-all duration-700 pointer-events-none`} />
                  
                  <div className="relative z-10 flex flex-col flex-grow will-change-transform">
                    {/* Icon Container - Refined Glassmorphism */}
                    <div className="mb-8 lg:mb-10 relative flex">
                      <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-brand-primary shadow-lg lg:shadow-[0_20px_40px_rgba(var(--brand-primary-rgb),0.3)] flex items-center justify-center text-white transition-all duration-500 relative z-10">
                        <service.icon className="w-7 h-7 lg:w-8 lg:h-8" />
                      </div>
                      <div className="absolute -inset-4 bg-brand-primary/10 lg:bg-brand-primary/20 blur-xl lg:blur-2xl rounded-full opacity-60 transition-opacity duration-500" />
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold mb-8 lg:mb-10 tracking-tighter leading-tight text-brand-primary transition-colors duration-500">
                      {t(`services.${service.key}`)}
                    </h3>

                    <ul className="space-y-4 lg:space-y-6 flex-grow">
                      {Array.isArray(t(`services.items_${service.key}`, { returnObjects: true })) && 
                        t(`services.items_${service.key}`, { returnObjects: true }).map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-brand-dark transition-colors duration-500">
                          <span className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
                          <span className="text-xs lg:text-sm font-bold tracking-wide">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Professional Background Number - Direction Aware */}
                  <span 
                    className={`absolute top-6 lg:top-8 ${i18n.language === 'ar' ? 'left-6 lg:left-8' : 'right-6 lg:right-8'} text-[50px] lg:text-[60px] font-black pointer-events-none select-none z-0 transition-all duration-700 transform scale-110 leading-none opacity-20 lg:opacity-100`}
                    style={{
                      WebkitTextStroke: '2px rgba(var(--brand-primary-rgb), 0.15)',
                      color: 'transparent'
                    }}
                  >
                    0{idx + 1}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
