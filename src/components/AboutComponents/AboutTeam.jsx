import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Twitter } from 'lucide-react';

const AboutTeam = () => {
    const { t } = useTranslation();

    const team = [
        {
            name: "Ahmed Singap",
            role: t('about.team.roles.ceo'),
            desc: "الرؤية والقيادة وراء كل قصة نجاح، متخصص في بناء الأنظمة الإبداعية وتطوير استراتيجيات النمو المبتكرة.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
        },
        {
            name: "Sarah Johnson",
            role: t('about.team.roles.creative'),
            desc: "مبدعة في صناعة المحتوى المرئي والسينمائي، تجعل من كل علامة تجارية لوحة فنية نابضة بالحياة.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
        },
        {
            name: "Michael Chen",
            role: t('about.team.roles.tech'),
            desc: "المهندس البارع في تطوير الحلول التقنية والذكاء الاصطناعي، يضمن الدقة والكفاءة في كل سطر برمجيا.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
        },
        {
            name: "Elena Rodriguez",
            role: t('about.team.roles.marketing'),
            desc: "خبيرة في تحليل البيانات واستهداف الجمهور، تحقق أعلى عائد استثمار لعملائنا من خلال حملات ذكية.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
        }
    ];

    return (
        <section className="py-32 bg-brand-secondary relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-24 text-center">
                <div className="mb-20 max-w-2xl mx-auto">
                    <span className="text-brand-accent font-black tracking-[0.4em] uppercase text-xs mb-4 block">
                        {t('about.team.title')}
                    </span>
                    <h2 className="text-4xl lg:text-6xl font-black text-brand-dark tracking-tighter leading-tight">
                        {t('about.team.subtitle')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
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
                                    <div className="transition-all duration-700 transform group-hover:-translate-y-48">
                                        <h3 className="text-white text-2xl lg:text-3xl font-black mb-2 tracking-tighter">{member.name}</h3>
                                        <p className="text-brand-accent font-black text-[10px] uppercase tracking-[0.3em]">{member.role}</p>
                                    </div>

                                    {/* Hover Detailed Content: Description and Socials */}
                                    <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-10 group-hover:translate-y-0 pb-12">
                                        <div className="mb-10 pt-10 border-t border-white/10 px-4">
                                            <p className="text-white/70 text-base font-medium leading-relaxed italic line-clamp-4">
                                                {member.desc}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-center gap-6">
                                            <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-3xl rounded-2xl flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark hover:scale-110 hover:-rotate-12 transition-all">
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-3xl rounded-2xl flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark hover:scale-110 hover:-rotate-12 transition-all">
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-3xl rounded-2xl flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark hover:scale-110 hover:-rotate-12 transition-all">
                                                <Github className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;
