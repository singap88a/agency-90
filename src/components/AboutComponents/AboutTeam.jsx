import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Twitter, Sparkles, Instagram, Mail } from 'lucide-react';

const AboutTeam = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.dir() === 'rtl';

    const team = [
        {
            name: t('about.team.members.saeed.name'),
            role: t('about.team.roles.ceo'),
            desc: t('about.team.members.saeed.desc'),
            image: "/teem_img/saeed.jpeg",
            instagram: "https://www.instagram.com/saeed.sinan2002?igsh=MTJyMDRvdzV2eW10dg%3D%3D&utm_source=qr",
            email: "Saeedsinan180@gmail.com"
        },
        {
            name: t('about.team.members.mostafa.name'),
            role: t('about.team.roles.social'),
            desc: t('about.team.members.mostafa.desc'),
            image: "/teem_img/mostafa.jpeg",
            instagram: "https://www.instagram.com/mostafa.sinan_?igsh=NnM0NndnOW12MDBp",
            email: "Mostafa.alsamarrae@gmail.com"
        },
        {
            name: t('about.team.members.yusef.name'),
            role: t('about.team.roles.designer'),
            desc: t('about.team.members.yusef.desc'),
            image: "/teem_img/Yusef.jpeg",
            instagram: "https://www.instagram.com/srt8.sport?igsh=ZHl2cXpiNng1bWhh",
            email: "yosefyyy64@gmail.com"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-brand-surface relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-24">
                {/* Elite Side-Aligned Header */}
                <div className={`mb-16 md:mb-20 max-w-4xl ${isRtl ? 'text-right' : 'text-left'}`}>
                    <div
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-brand-primary/20 shadow-sm mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-brand-primary animate-pulse" />
                        <span className="text-sm font-bold tracking-widest text-brand-primary">
                            {t('about.team.title')}
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-6xl font-bold text-brand-secondary mb-8 tracking-tighter leading-tight"
                    >
                        {isRtl ? (
                            <>
                                {t('about.team.subtitle').split(' ').slice(0, 1).join(' ')} <span className="bg-brand-primary to-brand-primary/60 bg-clip-text text-transparent">{t('about.team.subtitle').split(' ').slice(1).join(' ')}</span>
                            </>
                        ) : (
                            <>
                                {t('about.team.subtitle').split(' ').slice(0, 1).join(' ')} <span className="bg-brand-primary to-brand-primary/60 bg-clip-text text-transparent">{t('about.team.subtitle').split(' ').slice(1).join(' ')}</span>
                            </>
                        )}
                    </h2>

                    <p
                        className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed font-medium"
                    >
                        {t('about.team.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center items-center justify-center">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group relative h-[450px]" 
                        >
                            <div className="relative h-full overflow-hidden rounded-[3rem] shadow-2xl bg-brand-dark border border-black/[0.05]">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:opacity-30"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                                
                                {/* Content Area */}
                                <div className="absolute inset-x-8 bottom-12 flex flex-col items-center text-center h-full justify-end pb-0">
                                    {/* Initial Content: Name and Role */}
                                    <div className="transition-all duration-700 transform group-hover:-translate-y-72">
                                        <h3 className="text-white text-2xl lg:text-3xl font-bold mb-2 tracking-tighter">{member.name}</h3>
                                        <p className="text-brand-primary font-bold text-[10px] tracking-widest">{member.role}</p>
                                    </div>

                                    {/* Hover Detailed Content: Description and Socials */}
                                    <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-10 group-hover:translate-y-0 pb-12">
                                        <div className="mb-10 pt-10 border-t border-white/10 px-4">
                                            <p className="text-white/70 text-base font-medium leading-relaxed italic line-clamp-4">
                                                {member.desc}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-center gap-6">
                                            <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-3xl rounded-2xl flex items-center justify-center text-white hover:bg-brand-primary hover:text-brand-dark hover:scale-110 hover:-rotate-12 transition-all">
                                                <Instagram className="w-5 h-5" />
                                            </a>
                                            <a href={`mailto:${member.email}`} className="w-12 h-12 bg-white/10 backdrop-blur-3xl rounded-2xl flex items-center justify-center text-white hover:bg-brand-primary hover:text-brand-dark hover:scale-110 hover:-rotate-12 transition-all">
                                                <Mail className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;
