import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';

const AboutBanner = () => {
    const { t } = useTranslation();
    return (
        <section className="relative h-[25vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://static.vecteezy.com/system/resources/previews/023/649/106/non_2x/about-us-button-web-banner-templates-illustration-free-vector.jpg" 
                    alt="About Us Banner" 
                    className="w-full h-full object-cover object-center"
                />
            </div>
            
            {/* <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
                >
                    <Sparkles className="w-4 h-4 text-brand-primary" />
                    <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">{t('cta.tag')}</span>
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]"
                >
                    {t('about.banner.title')}
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl lg:text-2xl text-white/60 font-medium max-w-2xl mx-auto italic"
                >
                    {t('about.banner.subtitle')}
                </motion.p>
            </div> */}
        </section>
    );
};

export default AboutBanner;
