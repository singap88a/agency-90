// Contact.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Instagram, Mail, Send, User, AtSign, Briefcase, MessageSquareText, ChevronDown, MapPin, Clock, MessagesSquare, PenLine, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const Contact = ({ isPage = false }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const contactInfo = [
    { 
      icon: Phone, 
      label: t('contact.phoneLabel', 'رقم الهاتف'), 
      value: t('contact.phoneValue'), 
      link: `tel:${t('contact.phoneValue').replace(/\s/g, '')}` 
    },
    { 
      icon: Instagram, 
      label: t('contact.instagram', 'انستغرام'), 
      value: "@the90agecy", 
      link: "https://instagram.com/the90agecy" 
    },
    { 
      icon: Mail, 
      label: t('contact.emailLabel', 'البريد الإلكتروني'), 
      value: t('contact.emailValue'), 
      link: `mailto:${t('contact.emailValue')}` 
    },
    { 
      icon: MapPin, 
      label: t('contact.addressLabel', 'الموقع'), 
      value: t('contact.address', 'Waterkers 55, 1689PJ, Zwaag Hoorn'), 
      link: "#" 
    }
  ];

  const services = [
    { value: 'branding', label: t('services.branding', 'تصميم الهوية التجارية') },
    { value: 'content', label: t('services.content', 'المحتوى الاستراتيجي') },
    { value: 'ads', label: t('services.ads', 'الإعلانات الممولة') },
    { value: 'production', label: t('services.production', 'الإنتاج السينمائي') }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedService = services.find(s => s.value === formData.service)?.label || formData.service;
    const timestamp = new Date().toLocaleString('en-GB', { 
      day: '2-digit', month: '2-digit', year: 'numeric', 
      hour: '2-digit', minute: '2-digit' 
    });
    
    const whatsappNumber = "962788040051";
    const message = 
      `◈═════════════════════◈\n` +
      `🏆 *تقرير عميل جديد | LEAD REPORT* \n` +
      `◈═════════════════════◈\n\n` +
      `📅 *التاريخ:* ${timestamp}\n` +
      `📍 *المصدر:* agency 90 Elite Platform\n\n` +
      `👤 *بـيـانـات الـعـمـيـل:*\n` +
      `┃ ◈ *الاسم:* ${formData.name}\n` +
      `┃ ◈ *البريد:* ${formData.email}\n\n` +
      `🎯 *الخدمة المحددة:*\n` +
      `┃ ◈ ${selectedService}\n\n` +
      ` *نص الرسالة:*\n` +
      `┃ ${formData.message}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n` +
      `🔗 *تـم الإرسـال عـبـر:* https://agency90.nl\n` +
      `✨ *agency 90 | Quality Above Expectations*`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className={cn(
      "relative overflow-hidden section-padding font-['Cairo']",
      isPage ? "py-24" : "py-32"
    )}>
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-brand-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-brand-secondary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start mb-20"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-brand-primary" />
              <span className="text-brand-primary font-bold tracking-[0.2em] text-xs uppercase">
                {t('contact.subtitle', 'ارتقِ بتجارتك الآن')}
              </span>
            </div>
            <h2 className="text-4xl lg:text-7xl font-black text-brand-secondary tracking-tighter leading-tight">
              {i18n.language === 'ar' ? (
                <>دعنا نصنع <span className="text-brand-primary italic">التميز</span><br />معاً اليوم.</>
              ) : (
                <>Let's Create <span className="text-brand-primary italic">Excellence</span><br />Together Today.</>
              )}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Content: Info & Narrative */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-12"
            >
              <div className="space-y-6">
                <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-md">
                  {t('contact.description', 'نحن نؤمن بأن كل علامة تجارية لها قصة فريدة تستحق أن تروى بأفضل طريقة ممكنة. فريقنا جاهز لتحويل رؤيتك إلى واقع ملموس.')}
                </p>
              </div>

              {/* Enhanced Interactive Contact Cards */}
              <div className="grid gap-4">
                {contactInfo.map((info, idx) => (
                  <motion.a
                    key={idx}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative flex items-center gap-6 p-6 rounded-3xl bg-white/40 border border-white/60 backdrop-blur-md transition-all duration-500 hover:bg-white hover:border-brand-primary/30 hover:shadow-[0_20px_50px_rgba(var(--brand-primary-rgb),0.1)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                    <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center bg-brand-secondary/5 text-brand-secondary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div className="relative">
                      <div className="text-[10px] font-black tracking-widest text-brand-primary/40 uppercase mb-1 group-hover:text-brand-primary/60 transition-colors">{info.label}</div>
                      <div className="text-lg font-bold text-brand-secondary tracking-tight">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Working Hours / Trust Indicator */}
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-brand-secondary/[0.03] border border-brand-secondary/5">
                <div className="w-12 h-12 rounded-full border-2 border-brand-primary/20 flex items-center justify-center animate-pulse">
                  <Clock className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-secondary opacity-80">{t('contact.hoursTitle', 'ساعات العمل')}</div>
                  <div className="text-xs text-gray-500 font-medium mt-1">{t('contact.hours', 'السبت الى الجمعة: 9 صباحاً - 5 مساءً')}</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content: Premium Glass Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="relative p-1 md:p-2 rounded-[3rem] bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-brand-primary/5">
                <div className="bg-white/90 backdrop-blur-2xl p-10 md:p-14 rounded-[2.8rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-white">
                  
                  <div className="mb-12">
                    <h3 className="text-3xl font-black text-brand-secondary tracking-tighter mb-2">
                      {t('contact.formTitle', 'ابدأ مشروعك الآن')}
                    </h3>
                    <p className="text-gray-400 text-sm font-bold tracking-wide uppercase">
                      {t('contact.formSubtitle', 'املأ البيانات وسنتواصل معك فوراً')}
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Name Field */}
                      <div className="group space-y-3">
                        <label className="text-[11px] font-black text-brand-secondary/40 tracking-[0.2em] uppercase ml-1">
                          {t('contact.name', 'الاسم بالكامل')}
                        </label>
                        <div className="relative">
                          <User className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-primary opacity-0 -translate-x-4 transition-all group-focus-within:opacity-100 group-focus-within:translate-x-0" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b-2 border-gray-100 py-4 focus:outline-none focus:border-brand-primary transition-all text-brand-secondary font-bold text-lg placeholder:text-gray-200 group-focus-within:pl-10 px-0"
                            placeholder={t('contact.namePlaceholder', 'من فضلك أدخل اسمك')}
                            required
                          />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="group space-y-3">
                        <label className="text-[11px] font-black text-brand-secondary/40 tracking-[0.2em] uppercase ml-1">
                          {t('contact.emailLabel', 'البريد الإلكتروني')}
                        </label>
                        <div className="relative">
                          <AtSign className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-primary opacity-0 -translate-x-4 transition-all group-focus-within:opacity-100 group-focus-within:translate-x-0" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b-2 border-gray-100 py-4 focus:outline-none focus:border-brand-primary transition-all text-brand-secondary font-bold text-lg placeholder:text-gray-200 group-focus-within:pl-10 px-0"
                            placeholder="hello@example.com"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="group space-y-3">
                      <label className="text-[11px] font-black text-brand-secondary/40 tracking-[0.2em] uppercase ml-1">
                        {t('contact.service', 'الخدمة المطلوبة')}
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-primary opacity-0 -translate-x-4 transition-all group-focus-within:opacity-100 group-focus-within:translate-x-0" />
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b-2 border-gray-100 py-4 focus:outline-none focus:border-brand-primary transition-all text-brand-secondary font-bold text-lg appearance-none cursor-pointer group-focus-within:pl-10 px-0"
                          required
                        >
                          <option value="" disabled>{t('contact.selectService', 'اختر نوع الخدمة')}</option>
                          {services.map(s => (
                            <option key={s.value} value={s.value} className="text-brand-secondary py-4">{s.label}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 pointer-events-none group-focus-within:text-brand-primary" />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="group space-y-3">
                      <label className="text-[11px] font-black text-brand-secondary/40 tracking-[0.2em] uppercase ml-1">
                        {t('contact.message', 'تفاصيل مشروعك')}
                      </label>
                      <div className="relative">
                        <PenLine className="absolute left-0 top-6 w-5 h-5 text-brand-primary opacity-0 -translate-x-4 transition-all group-focus-within:opacity-100 group-focus-within:translate-x-0" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="w-full bg-transparent border-b-2 border-gray-100 py-4 focus:outline-none focus:border-brand-primary transition-all text-brand-secondary font-bold text-lg placeholder:text-gray-200 resize-none group-focus-within:pl-10 px-0"
                          placeholder={t('contact.messagePlaceholder', 'أخبرنا عن أهدافك وطموحاتك...')}
                          required
                        />
                      </div>
                    </div>

                    <div className="pt-6">
                      <button
                        type="submit"
                        className="group relative w-full h-[70px] bg-brand-primary rounded-[1.5rem] flex items-center justify-center gap-4 transition-all duration-500 overflow-hidden hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_rgba(var(--brand-primary-rgb),0.3)] hover:shadow-[0_25px_60px_rgba(var(--brand-primary-rgb),0.5)]"
                      >
                        <div className="absolute inset-0 bg-brand-secondary -translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                        <span className="relative text-white font-black text-xl tracking-tight">
                          {t('contact.send', 'إرسال واستشارة مجانية')}
                        </span>
                        <Send className={cn(
                          "relative w-6 h-6 text-white transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-1",
                          isRtl && "rotate-180 group-hover:-translate-x-4"
                        )} />
                      </button>
                    </div>

                    <p className="text-center text-[10px] font-bold text-gray-300 tracking-[0.1em] uppercase">
                      {t('contact.bottomNote', 'سيتم الرد عليك في أقل من 12 ساعة • منصة آمنة تماماً')}
                    </p>

                  </form>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
