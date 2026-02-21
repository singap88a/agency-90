import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Instagram, Mail, Send, User, AtSign, Briefcase, MessageSquareText, ChevronDown } from 'lucide-react';

const Contact = ({ isPage = false }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "0788 040 051", link: "tel:0788040051" },
    { icon: Instagram, label: "Instagram", value: "@botyads_jo", link: "https://instagram.com/botyads_jo" },
    { icon: Mail, label: "Email", value: "info@brandup.jo", link: "mailto:info@brandup.jo" },
    { icon: Briefcase, label: t('common.taxNumber'), value: "12786594", link: "#" }
  ];

  return (
    <section id="contact" className={`${isPage ? 'py-12' : 'section-padding'} relative overflow-hidden`}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {!isPage && (
            <div className="flex flex-col items-center text-center mb-20">
              <span className="text-brand-accent font-black tracking-[0.4em] uppercase text-xs mb-4 block">
                Connect & Inquire
              </span>
              <h2 className="text-5xl lg:text-6xl font-black tracking-tighter mb-6 text-brand-dark">
                {t('nav.contact')}
              </h2>
              <div className="w-20 h-1 bg-brand-accent rounded-full opacity-20" />
            </div>
          )}

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-4"
            >
              {contactInfo.map((info, idx) => (
                <a 
                  key={idx} 
                  href={info.link}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-black/5 hover:border-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/5 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-dark flex items-center justify-center text-white group-hover:bg-brand-accent transition-colors duration-500">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-dark/30 mb-0.5">{info.label}</div>
                    <div className="text-xl font-bold tracking-tight text-brand-dark">{info.value}</div>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Contact Form - Elite Redesign */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-8 bg-white border border-black/5 p-10 lg:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[100px] -mr-32 -mt-32" />
              
              <form className="relative z-10 space-y-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 px-2">
                       {isRtl ? 'الاسم بالكامل' : 'Full Identity'}
                    </label>
                    <div className="relative group">
                      <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dark/20 group-focus-within:text-brand-accent transition-colors" />
                      <input type="text" className="w-full bg-brand-secondary/50 border border-black/5 rounded-2xl pl-14 pr-8 py-5 focus:outline-none focus:border-brand-accent/50 focus:bg-white transition-all font-bold text-lg placeholder:text-brand-dark/10" placeholder="John Doe" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 px-2">
                      {isRtl ? 'الإيميل الرقمي' : 'Digital Mail'}
                    </label>
                    <div className="relative group">
                      <AtSign className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dark/20 group-focus-within:text-brand-accent transition-colors" />
                      <input type="email" className="w-full bg-brand-secondary/50 border border-black/5 rounded-2xl pl-14 pr-8 py-5 focus:outline-none focus:border-brand-accent/50 focus:bg-white transition-all font-bold text-lg placeholder:text-brand-dark/10" placeholder="contact@example.com" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 px-2">
                    {isRtl ? 'القطاع الاستراتيجي' : 'Strategic Area'}
                  </label>
                  <div className="relative group">
                    <Briefcase className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dark/20 group-focus-within:text-brand-accent transition-colors" />
                    <select className="w-full bg-brand-secondary/50 border border-black/5 rounded-2xl pl-14 pr-12 py-5 focus:outline-none focus:border-brand-accent/50 focus:bg-white transition-all font-bold text-lg appearance-none cursor-pointer">
                      <option className="bg-white">Brand Identity Design</option>
                      <option className="bg-white">Strategic Content</option>
                      <option className="bg-white">Elite Social Ads</option>
                      <option className="bg-white">Cinematic Production</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dark/20 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 px-2">
                    {isRtl ? 'تفاصيل الرؤية' : 'Objective Details'}
                  </label>
                  <div className="relative group">
                    <MessageSquareText className="absolute left-6 top-8 w-5 h-5 text-brand-dark/20 group-focus-within:text-brand-accent transition-colors" />
                    <textarea rows="4" className="w-full bg-brand-secondary/50 border border-black/5 rounded-2xl pl-14 pr-8 py-5 focus:outline-none focus:border-brand-accent/50 focus:bg-white transition-all font-bold text-lg resize-none placeholder:text-brand-dark/10" placeholder="Describe your vision..."></textarea>
                  </div>
                </div>

                <button type="submit" className="w-full bg-brand-dark text-white rounded-2xl py-6 text-lg font-black tracking-widest uppercase flex items-center justify-center gap-4 hover:bg-brand-primary transition-all duration-500 shadow-2xl shadow-brand-dark/20 group">
                  {isRtl ? 'إرسال واستدعاء' : 'Initalize Transmission'}
                  <Send className={`w-6 h-6 group-hover:translate-x-3 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
