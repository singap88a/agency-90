import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Target, Users, Award, Sparkles } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { cn } from '../lib/utils';

const About = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  return (
    <section
      id="about"
      className="relative py-10   overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
        <svg
          className="absolute -left-20 top-20 w-[40%] h-[40%] text-brand-primary fill-current"
          viewBox="0 0 200 200"
        >
          <path d="M40,-50.7C53.3,-46.5,66.5,-38.3,73.5,-26.2C80.5,-14,81.4,2.1,76.4,15.6C71.3,29.1,60.4,39.9,48,48.2C35.7,56.4,21.8,62.2,7.3,64.4C-7.2,66.6,-22.3,65.2,-36.5,59C-50.7,52.8,-63.9,41.7,-69.1,28.2C-74.4,14.7,-71.7,-1.2,-65.7,-14.8C-59.7,-28.4,-50.4,-39.7,-39.3,-44.6C-28.1,-49.5,-15.1,-48,0.3,-48.3C15.7,-48.7,40.7,-50.7,40,-50.7Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">

          {/* Lottie Side */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={cn(
              "relative flex items-center justify-center lg:order-2"
            )}
          >
            <div className="absolute inset-0 bg-brand-primary/5 rounded-[40px] transform rotate-3 scale-105" />
            <div className="absolute inset-0 bg-brand-secondary/5 rounded-[40px] transform -rotate-3 scale-105" />
            
            <div className="w-full   h-[450px] lg:h-[650px] relative z-10">
              <DotLottieReact
                src="https://lottie.host/671f0184-01df-47a6-b14f-9baa8dc212e1/6KjeDoLP2H.lottie"
                loop
                autoplay
                // style={{ width: '100%', height: '100%' }}
              />
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-2 lg:-top-6 lg:-right-6 z-20 flex items-center gap-3 px-6 py-4 bg-white border border-brand-primary/10 rounded-2xl shadow-2xl shadow-brand-primary/10"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-orange-400 text-white flex items-center justify-center shadow-lg shadow-brand-primary/20">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-tighter">Premium</span>
                <span className="text-sm font-black text-brand-secondary leading-none">
                  Elite Quality
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 left-2 lg:-bottom-6 lg:-left-6 z-20 flex items-center gap-3 px-6 py-4 bg-white border border-brand-secondary/10 rounded-2xl shadow-2xl shadow-brand-secondary/10"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-secondary to-indigo-400 text-white flex items-center justify-center shadow-lg shadow-brand-secondary/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-brand-secondary uppercase tracking-tighter">Trust</span>
                <span className="text-sm font-black text-brand-secondary leading-none">
                  Global Standards
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div
            className={cn(
              "flex flex-col justify-center lg:order-1"
            )}
          >
            {/* Badge */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-primary/20 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-primary animate-pulse" />
                <span className="text-xs font-bold tracking-widest text-brand-primary">
                  {t('about.tag')}
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className={cn(
              "font-black tracking-tight text-brand-secondary leading-[1.2] mb-6 max-w-none",
              i18n.language === 'ar' 
                ? "text-3xl lg:text-4xl xl:text-5xl" 
                : "text-3xl lg:text-5xl xl:text-6xl"
            )}>
              {i18n.language === 'ar' ? (
                <>
                  <span className="block lg:whitespace-nowrap">نبني مستقبلك بأعلى معايير</span>
                  <span className="text-brand-primary italic block">
                    الإبداع والاحترافية
                  </span>
                </>
              ) : (
                <>
                  Building Future with Elite{" "}
                  <span className="text-brand-primary italic">
                    Creative Logic
                  </span>
                </>
              )}
            </h2>

            {/* Description */}
            <div
              className={cn(
                "relative pl-8 pr-4 mb-10",
                isRtl ? "border-r-4 border-l-0" : "border-l-4 border-r-0",
                "border-brand-primary"
              )}
            >
              <p className="text-base lg:text-lg text-gray-500 font-medium leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            {/* Stats - رجعنا التصميم الأصلي */}
            <div className="grid grid-cols-3 gap-6 lg:gap-10 pt-6">
              
              <div className="flex flex-col gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary text-white flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 shadow-lg shadow-brand-primary/20">
                  <Target className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-brand-secondary tracking-tighter">98%</span>
                  <span className="text-[10px] tracking-[0.2em] font-black text-brand-dark/30 uppercase mt-1">Success Rate</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-secondary text-white flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 shadow-lg shadow-brand-secondary/20">
                  <Users className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-brand-secondary tracking-tighter">150+</span>
                  <span className="text-[10px] tracking-[0.2em] font-black text-brand-dark/30 uppercase mt-1">Elite Partners</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary text-white flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 shadow-lg shadow-brand-primary/20">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-brand-secondary tracking-tighter">10Y</span>
                  <span className="text-[10px] tracking-[0.2em] font-black text-brand-dark/30 uppercase mt-1">Excellence</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;