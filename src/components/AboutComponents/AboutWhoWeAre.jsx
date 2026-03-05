import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';

const AboutWhoWeAre = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.dir() === 'rtl';

    return (
        <section className="py-16 md:py-32 bg-brand-surface overflow-hidden relative">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    {/* Text content - Now Order-1 in LTR (Left) and Order-2 in RTL (Right) */}
                    <div 
                        className={cn("flex flex-col gap-10", isRtl ? "lg:order-2" : "lg:order-1")}
                    >
                        <div className="flex flex-col gap-4">
                            <span className="text-brand-secondary font-bold tracking-widest text-xs">
                                {t('about.who.title')}
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-secondary tracking-tighter leading-[1.1] max-w-2xl">
                                {i18n.language === 'ar' ? (
                                    <>رحلة من <span className="text-brand-primary">الإبداع والابتكار</span></>
                                ) : (
                                    <>A Journey of <span className="text-brand-primary">Creativity & Innovation</span></>
                                )}
                            </h2>
                        </div>
                        
                        <div className="space-y-8">
                            <p className="text-xl text-brand-dark/70 leading-relaxed font-medium">
                                {t('about.who.desc1')}
                            </p>
                            <p className="text-lg text-brand-dark/50 leading-relaxed italic border-l-4 rtl:border-l-0 rtl:border-r-4 border-brand-secondary pl-8 rtl:pr-8 py-2">
                                {t('about.who.desc2')}
                            </p>
                        </div>
                    </div>

                    {/* Image content - Now Order-2 in LTR (Right) and Order-1 in RTL (Left) */}
                    <div 
                        className={cn("relative", isRtl ? "lg:order-1" : "lg:order-2")}
                    >
                        <div className="absolute -inset-8 bg-brand-secondary/5 rounded-[4rem] -rotate-3 z-0" />
                        <div className="absolute -inset-8 border-2 border-brand-primary rounded-[4rem] rotate-3 z-0" />
                        
                        <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-brand-primary z-10 group">
                            <img 
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" 
                                alt="Innovation Journey" 
                                className="w-full h-full object-cover min-h-[500px] transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/40 to-transparent opacity-60" />
                            
                            {/* Floating Since 2014 Card */}
                            <div 
                                className={cn(
                                    "absolute bottom-8 z-20 bg-white/95 backdrop-blur-xl p-4 md:p-5 rounded-2xl shadow-2xl border border-white/50 animate-float",
                                    isRtl ? "left-8" : "right-8"
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-brand-secondary rounded-xl flex items-center justify-center text-white font-bold text-lg">
                                        B
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-brand-dark leading-none">agency 90</span>
                                        <span className="text-[9px] font-bold tracking-wider italic text-brand-dark/40 mt-0.5">Since 2014</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutWhoWeAre;
