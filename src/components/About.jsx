import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const About = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Enhanced Background Decorative Graphics */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] overflow-hidden">
        <svg className="absolute -left-20 top-20 w-[45%] h-[45%] text-brand-primary fill-current" viewBox="0 0 200 200">
          <path d="M40,-50.7C53.3,-46.5,66.5,-38.3,73.5,-26.2C80.5,-14,81.4,2.1,76.4,15.6C71.3,29.1,60.4,39.9,48,48.2C35.7,56.4,21.8,62.2,7.3,64.4C-7.2,66.6,-22.3,65.2,-36.5,59C-50.7,52.8,-63.9,41.7,-69.1,28.2C-74.4,14.7,-71.7,-1.2,-65.7,-14.8C-59.7,-28.4,-50.4,-39.7,-39.3,-44.6C-28.1,-49.5,-15.1,-48,0.3,-48.3C15.7,-48.7,40.7,-50.7,40,-50.7Z" transform="translate(100 100)" />
        </svg>
        <div className="absolute right-[-10%] top-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(0,0,0,0.05)_0%,transparent_70%)] blur-[120px]" />
        {/* Subtle Line Graphics */}
        <div className="absolute left-[10%] bottom-[15%] w-64 h-64 border border-brand-secondary/20 rounded-full animate-pulse" />
        <div className="absolute left-[12%] bottom-[17%] w-48 h-48 border border-brand-dark/10 rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-24">
        {/* Layout V3: Height Alignment using items-stretch */}
        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          
          {/* Section 1: Image & Visuals - Aligned Height */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className={cn("relative flex flex-col justify-center", isRtl ? "lg:order-2" : "lg:order-1")}
          >
            {/* Background Shape under Image - More Visible */}
            <div className="absolute -inset-6 bg-brand-secondary/10 rounded-[4rem] -rotate-3 z-0" />
            
            <div className="relative z-10 w-full h-full rounded-[3.5rem] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.15)] border border-black/[0.05]">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" 
                alt="Creative Collaboration" 
                className="w-full h-full object-cover min-h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/20 to-transparent" />
            </div>

            {/* Premium Floating Cards with Enhanced Text & Borders */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 flex items-center gap-4 px-8 py-5 bg-white backdrop-blur-3xl border-2 border-brand-secondary/20 rounded-2xl shadow-2xl"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center shadow-lg">
                <Zap className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-brand-dark tracking-wide">Elite</span>
                <span className="text-[8px] font-bold opacity-30 tracking-widest">Excellence</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 z-20 flex items-center gap-4 px-8 py-5 bg-white backdrop-blur-3xl border-2 border-brand-secondary/20 rounded-2xl shadow-2xl"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-white flex items-center justify-center shadow-lg">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-brand-dark tracking-wide">World</span>
                <span className="text-[8px] font-bold opacity-30 tracking-widest">Standards</span>
              </div>
            </motion.div>

            {/* Graphics under the image - High Visibility */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-brand-secondary/10 rounded-full blur-[100px]" />
          </motion.div>

          {/* Section 2: Content - Aligned Height */}
          <div className={cn("relative flex flex-col justify-center py-10", isRtl ? "lg:order-1" : "lg:order-2")}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col mb-6"
            >
              <span className="text-brand-primary font-bold tracking-widest text-sm mb-6">
                {t('about.tag')}
              </span>
              {/* Extra Spaced, Two-Line High-Impact Title */}
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-8 text-brand-secondary leading-[1.3] whitespace-pre-line">
                {i18n.language === 'ar' ? (
                  <>نبني مستقبلك بأعلى معايير<br /><span className="bg-brand-primary to-brand-secondary bg-clip-text text-transparent">الإبداع والاحترافية</span></>
                ) : (
                  <>Building Your Future with Elite<br /><span className="bg-brand-primary to-brand-secondary bg-clip-text text-transparent">Creative Logic</span></>
                )}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg lg:text-xl text-gray-500 max-w-3xl font-medium leading-relaxed">
                {t('about.description')}
              </p>
              
              {/* V2 Stats Grid - Uniform Brand Accent Yellow */}
              <div className="grid grid-cols-3 gap-6 pt-12 border-t border-black/[0.08]">
                <div className="flex flex-col gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand-primary rounded-full transition-transform group-hover:scale-y-125" />
                    <span className="text-4xl font-bold text-brand-primary tracking-tighter">98%</span>
                  </div>
                  <span className="text-[10px] tracking-widest font-bold text-brand-dark/30 group-hover:text-brand-primary transition-colors">Success</span>
                </div>
                <div className="flex flex-col gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand-primary rounded-full transition-transform group-hover:scale-y-125" />
                    <span className="text-4xl font-bold text-brand-primary tracking-tighter">150+</span>
                  </div>
                  <span className="text-[10px] tracking-widest font-bold text-brand-dark/30 group-hover:text-brand-primary transition-colors">Partners</span>
                </div>
                <div className="flex flex-col gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand-primary rounded-full transition-transform group-hover:scale-y-125" />
                    <span className="text-4xl font-bold text-brand-primary tracking-tighter">10Y</span>
                  </div>
                  <span className="text-[10px] tracking-widest font-bold text-brand-dark/30 group-hover:text-brand-primary transition-colors">Experience</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
