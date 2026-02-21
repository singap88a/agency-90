import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Eye, Target, Heart, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';

const AboutVision = () => {
    const { t } = useTranslation();

    const visionItems = [
        {
            number: '01',
            icon: Eye,
            title: t('about.vision_section.v.title'),
            desc: t('about.vision_section.v.desc'),
            accentColor: 'text-brand-accent',
            bgGlow: 'from-brand-accent/20',
            iconBg: 'bg-brand-accent/10',
            borderGlow: 'group-hover:border-brand-accent/30'
        },
        {
            number: '02',
            icon: Target,
            title: t('about.vision_section.m.title'),
            desc: t('about.vision_section.m.desc'),
            accentColor: 'text-brand-primary',
            bgGlow: 'from-brand-primary/20',
            iconBg: 'bg-brand-primary/10',
            borderGlow: 'group-hover:border-brand-primary/30'
        },
        {
            number: '03',
            icon: Heart,
            title: t('about.vision_section.values.title'),
            desc: t('about.vision_section.values.desc'),
            accentColor: 'text-brand-dark',
            bgGlow: 'from-brand-dark/10',
            iconBg: 'bg-brand-dark/5',
            borderGlow: 'group-hover:border-brand-dark/30'
        }
    ];

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute top-1/2 -right-24 w-64 h-64 bg-brand-accent/5 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-1/4 w-[800px] h-[400px] bg-gradient-to-t from-black/[0.02] to-transparent opacity-50" />
            </div>
            
            <div className="container mx-auto px-6 lg:px-24 relative z-10">
                <div className="text-center mb-32 max-w-4xl mx-auto flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-6 px-6 py-2 rounded-full bg-brand-primary/5 border border-brand-primary/10 inline-flex items-center gap-2 group"
                    >
                        <Sparkles className="w-4 h-4 text-brand-primary" />
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-primary leading-none">
                            {t('about.vision_section.subtitle')}
                        </span>
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl lg:text-8xl font-black text-brand-dark tracking-tighter leading-[0.85] mb-8"
                    >
                        {t('about.vision_section.title').split(' ').map((word, i) => (
                            <span key={i} className={i === 1 ? 'text-brand-primary' : ''}>
                                {word}{' '}
                            </span>
                        ))}
                    </motion.h2>
                    
                    <div className="w-24 h-2 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full opacity-30" />
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {visionItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                delay: index * 0.15,
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className={cn(
                                "relative group p-10 lg:p-12 h-full flex flex-col",
                                "bg-white/40 backdrop-blur-md rounded-[3rem] border border-black/[0.04]",
                                "hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-700",
                                item.borderGlow
                            )}
                        >
                            {/* Inner Gradient Glow */}
                            <div className={cn(
                                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem] z-0",
                                item.bgGlow, "to-transparent"
                            )} />

                            {/* Background Numbering */}
                            <span className="absolute top-10 right-10 text-8xl font-black text-black/[0.02] group-hover:text-black/[0.04] transition-colors duration-500 italic pointer-events-none">
                                {item.number}
                            </span>

                            <div className="relative z-10 flex flex-col h-full">
                                <motion.div 
                                    whileHover={{ rotate: 5, scale: 1.05 }}
                                    className={cn(
                                        "w-20 h-20 rounded-3xl flex items-center justify-center mb-10 shadow-sm",
                                        item.iconBg
                                    )}
                                >
                                    <item.icon className={cn("w-10 h-10", item.accentColor)} />
                                </motion.div>

                                <h3 className="text-3xl font-black text-brand-dark mb-6 tracking-tighter">
                                    {item.title}
                                </h3>

                                <p className="text-lg lg:text-xl text-brand-dark/60 font-medium leading-relaxed mb-auto">
                                    {item.desc}
                                </p>

                                <div className="mt-10 flex items-center gap-3">
                                    <div className={cn("w-12 h-1 rounded-full opacity-20", item.accentColor.replace('text-', 'bg-'))} />
                                    <Sparkles className={cn("w-4 h-4", item.accentColor)} />
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
