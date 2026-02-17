import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Instagram, Mail, Send, User, AtSign, Briefcase, MessageSquareText } from 'lucide-react';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "0788 040 051", link: "tel:0788040051" },
    { icon: Instagram, label: "Instagram", value: "@botyads_jo", link: "https://instagram.com/botyads_jo" },
    { icon: Mail, label: "Email", value: "info@brandup.jo", link: "mailto:info@brandup.jo" },
    { icon: Briefcase, label: t('common.taxNumber'), value: "12786594", link: "#" }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-[10px] mb-6 flex items-center gap-4">
                 <div className="w-10 h-px bg-[#D4AF37]" />
                 Connect
              </div>
              <h2 className="text-5xl lg:text-7xl font-black mb-10 tracking-tighter leading-tight">{t('nav.contact')}</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <a 
                    key={idx} 
                    href={info.link}
                    className="flex items-center gap-6 p-7 rounded-[2rem] glass-card hover:bg-white/5 transition-all group border-white/5 shadow-xl"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#011614] group-hover:rotate-12 transition-all duration-500">
                      <info.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] font-black opacity-30 mb-1">{info.label}</div>
                      <div className="text-2xl font-black tracking-tight">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form - Refined with Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 glass-card p-12 lg:p-16 border-white/10 rounded-[3rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl" />
              
              <form className="grid gap-12 relative z-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-[#D4AF37]">
                      <User className="w-4 h-4" />
                      {isRtl ? 'الاسم بالكامل' : 'Full Identity'}
                    </label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-[#D4AF37] transition-all font-bold text-lg placeholder:opacity-20" placeholder="John Doe" />
                  </div>
                  <div className="space-y-4">
                    <label className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-[#D4AF37]">
                      <AtSign className="w-4 h-4" />
                      {isRtl ? 'الإيميل' : 'Digital Mail'}
                    </label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-[#D4AF37] transition-all font-bold text-lg placeholder:opacity-20" placeholder="contact@example.com" />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-[#D4AF37]">
                    <Briefcase className="w-4 h-4" />
                    {isRtl ? 'الخدمة المطلوبة' : 'Strategic Area'}
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-[#D4AF37] transition-all font-bold text-lg appearance-none cursor-pointer">
                    <option className="bg-[#011614]">Brand Identity Design</option>
                    <option className="bg-[#011614]">Strategic Content</option>
                    <option className="bg-[#011614]">Elite Social Ads</option>
                    <option className="bg-[#011614]">Cinematic Production</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-[#D4AF37]">
                    <MessageSquareText className="w-4 h-4" />
                    {isRtl ? 'رسالتك' : 'Objective Details'}
                  </label>
                  <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-[#D4AF37] transition-all font-bold text-lg resize-none placeholder:opacity-20" placeholder="Describe your vision..."></textarea>
                </div>

                <button type="submit" className="btn-premium group flex items-center justify-center gap-5 py-6 text-xl shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:scale-[1.02]">
                  {isRtl ? 'إرسال المعلومات' : 'ENCRYPT & INITIALIZE'}
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
