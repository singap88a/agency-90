import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Eye, Target, Heart, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';

const AboutVision = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.dir() === 'rtl';

    const visionItems = [
        {
            number: '01',
            icon: Eye,
            title: t('about.vision_section.v.title'),
            desc: t('about.vision_section.v.desc'),
            accentColor: 'text-brand-primary',
            bgGlow: 'from-brand-primary/20',
        },
        {
            number: '02',
            icon: Target,
            title: t('about.vision_section.m.title'),
            desc: t('about.vision_section.m.desc'),
            accentColor: 'text-brand-primary',
            bgGlow: 'from-brand-primary/20',
        },
        {
            number: '03',
            icon: Heart,
            title: t('about.vision_section.values.title'),
            desc: t('about.vision_section.values.desc'),
            accentColor: 'text-brand-primary',
            bgGlow: 'from-brand-primary/20',
        }
    ];

    return (
        <section className="relative py-10  bg-white overflow-hidden">
            {/* Silk-like background gradient */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-white pointer-events-none" /> */}
            
            {/* Decorative subtle aura */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none opacity-60" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none opacity-40" />

            <div className="container mx-auto px-6 lg:px-24 relative z-10">
                {/* Elite Header */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-brand-primary/20 shadow-sm mb-10"
                    >
                        <Sparkles className="w-4 h-4 text-brand-primary animate-pulse" />
                        <span className="text-sm font-bold tracking-widest uppercase text-brand-primary">
                            {t('about.vision_section.subtitle')}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter"
                    >
                        <span className="bg-gradient-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent">
                            {t('about.vision_section.title')}
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-4xl mx-auto font-medium"
                    >
                        {t('about.description')}
                    </motion.p>
                </div>

                {/* Grid of Vision Cards */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {visionItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            <div className="relative h-full bg-white/70 backdrop-blur-md border border-gray-100 rounded-[2.5rem] p-8 hover:shadow-2xl transition-all duration-500 hover:border-brand-primary/20 flex flex-col overflow-hidden">
                                {/* Watermark Number */}
                                <span className={`absolute top-4 ${isRtl ? 'left-6' : 'right-6'} text-8xl font-black text-black/[0.03] group-hover:text-black/[0.05] transition-colors duration-500 pointer-events-none italic`}>
                                    {item.number}
                                </span>

                                <div className="relative z-10">
                                    {/* Icon & Title Row */}
                                    <div className="flex items-center gap-5 mb-8">
                                        <div className={`w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm shrink-0`}>
                                            <item.icon className="w-7 h-7 text-brand-primary" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-2xl font-black text-gray-900 tracking-tighter group-hover:text-brand-primary transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-500 text-lg leading-relaxed mb-6 font-medium">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Decorative bottom indicator */}
                                <div className="mt-auto flex items-center gap-3">
                                    <div className="w-10 h-1 rounded-full bg-brand-primary/20 transition-all duration-500 group-hover:w-20 group-hover:bg-brand-primary/40" />
                                    <Sparkles className="w-4 h-4 text-brand-primary/30 group-hover:text-brand-primary transition-colors duration-500" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default AboutVision;