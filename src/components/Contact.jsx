// Contact.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Instagram, Mail, Send, User, AtSign, Briefcase, MessageSquareText, ChevronDown, MapPin, Clock, MessagesSquare, PenLine, Sparkles, Globe, ArrowUpRight } from 'lucide-react';
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

  // 🌟 تجميع بيانات التواصل
  const contactMethods = [
    { 
      id: 'phone',
      icon: Phone, 
      label: t('contact.phoneLabel', 'رقم الهاتف'), 
      value: t('contact.phoneValue', '+31 6 12345678'), 
      link: `tel:${t('contact.phoneValue', '+31 6 12345678').replace(/\s/g, '')}`,
    },
    { 
      id: 'email',
      icon: Mail, 
      label: t('contact.emailLabel', 'البريد الإلكتروني'), 
      value: t('contact.emailValue', 'hello@agency90.nl'), 
      link: `mailto:${t('contact.emailValue', 'hello@agency90.nl')}`,
    },
    { 
      id: 'social',
      icon: Instagram, 
      label: t('contact.social', 'انستجرام'), 
      value: "@saeed.sinan2002",
      link: "https://www.instagram.com/saeed.sinan2002?igsh=MTJyMDRvdzV2eW10dg%3D%3D&utm_source=qr",
    },
    { 
      id: 'address',
      icon: MapPin, 
      label: t('contact.addressLabel', 'موقعنا'), 
      value: "Zwaag Hoorn, Netherlands", 
      link: "https://maps.google.com/?q=52.498047,4.884512",
    }
  ];

  const services = [
    { value: 'websites', label: t('services.websites', 'مواقع إلكترونية') },
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
      `📝 *نص الرسالة:*\n` +
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
      "relative overflow-hidden font-['Cairo'] bg-brand-surface",
      isPage ? "py-4 md:py-12" : "py-8 md:py-32"
    )}>
      {/* 🌬️ Minimalist Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary/5 to-transparent" />
        <div className="absolute bottom-40 left-[-5%] w-[300px] h-[300px] bg-brand-primary/5 blur-[80px] rounded-full" />
        <div className="absolute top-60 right-[-5%] w-[300px] h-[300px] bg-brand-secondary/5 blur-[80px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-24">
        <div className="max-w-6xl mx-auto">
          
          {/* 🏷️ Header Section */}
          <div className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 text-brand-primary border border-brand-primary/10"
            >
              <MessagesSquare className="w-4 h-4" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">{t('contact.formTitle', 'تواصل معنا')}</span>
            </div>
            
            <h2 
              className="text-3xl md:text-5xl font-black text-brand-secondary tracking-tight leading-tight"
            >
              {i18n.language === 'ar' ? (
                <>يسرنا دائماً <span className="text-brand-primary">سماع صوتك</span></>
              ) : (
                <>We're Always Happy to <span className="text-brand-primary">Hear From You</span></>
              )}
            </h2>
            <p 
              className="text-gray-400 text-sm md:text-base font-medium max-w-2xl mx-auto px-4"
            >
              {t('contact.description', 'سواء كان لديك استفسار أو ترغب في بدء مشروع جديد، فريقنا جاهز لمساعدتك في أي وقت.')}
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-16 items-start">
            
            {/* 💬 قسم تواصل معنا - خلفية بيضاء وطرق التواصل تحت بعض */}
            <div
              className="relative max-w-md mx-auto lg:max-w-none w-full"
            >
              {/* البطاقة البيضاء */}
              <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-xl border border-slate-100 overflow-hidden relative h-full flex flex-col">
                {/* خلفية ناعمة جداً */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
                
                <div className="relative z-10 flex-1 flex flex-col">
                  {/* عنوان البطاقة */}
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 tracking-tight flex items-center gap-2 text-brand-secondary">
                      <MessagesSquare className="w-5 md:w-6 h-5 md:h-6 text-brand-primary" />
                      {t('contact.infoTitle')}
                    </h3>
                    {/* خط احترافي */}
                    <div className="w-20 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-brand-primary via-brand-primary to-transparent rounded-full"></div>
                  </div>

                  {/* طرق التواصل */}
                  <div className="space-y-3 flex-1">
                    {contactMethods.map((item) => (
                      <a
                        key={item.id}
                        href={item.link}
                        target={item.id === 'social' || item.id === 'address' ? "_blank" : undefined}
                        rel={item.id === 'social' || item.id === 'address' ? "noopener noreferrer" : undefined}
                        className="group block w-full transition-all duration-300 hover:translate-x-1"
                      >
                        <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-slate-50/80 hover:bg-slate-100 border border-slate-100 hover:border-brand-primary/20 transition-all duration-300">
                          <div className="shrink-0">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                              <item.icon className="w-4 md:w-5 h-4 md:h-5" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[9px] md:text-xs font-black text-slate-400 uppercase tracking-wider mb-0.5 md:mb-1">
                              {item.label}
                            </p>
                            <p className="text-base md:text-lg font-bold text-brand-secondary group-hover:text-brand-primary transition-colors truncate">
                              {item.value}
                            </p>
                          </div>
                          <ArrowUpRight className="w-4 md:w-5 h-4 md:h-5 text-slate-300 group-hover:text-brand-primary transition-colors" />
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* ساعات العمل */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-brand-secondary/5 flex items-center justify-center">
                        <Clock className="w-4 md:w-5 h-4 md:h-5 text-brand-secondary" />
                      </div>
                      <div>
                        <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">
                          {t('contact.hoursTitle', 'ساعات العمل')}
                        </p>
                        <p className="text-brand-secondary font-bold text-base md:text-lg">
                          {t('contact.hours', 'السبت - الجمعة: ٩ صباحاً - ٥ مساءً')}
                        </p>
                        <p className="text-xs md:text-sm text-slate-500 mt-1 flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                          {t('contact.hoursNote', 'فريقنا متاح على مدار الساعة عبر الواتساب')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 📝 Form Section */}
            <div
              className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-xl relative overflow-hidden h-full max-w-md mx-auto lg:max-w-none w-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />
              
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative z-10">
                {/* حقل الاسم */}
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 mb-1 justify-start">
                    <User className="w-3 md:w-3.5 h-3 md:h-3.5 text-brand-primary" />
                    <label className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-wider">
                      {t('contact.name', 'الاسم بالكامل')}
                    </label>
                  </div>
                  <div className="relative group/field">
                    <User className={cn(
                      "absolute top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within/field:text-brand-primary transition-colors pointer-events-none",
                      isRtl ? "right-4" : "left-4"
                    )} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={cn(
                        "w-full bg-slate-50/50 rounded-xl py-3.5 md:py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 border border-slate-100 focus:border-brand-primary/50 focus:bg-white transition-all font-bold text-brand-secondary text-sm md:text-base",
                        isRtl ? "pr-12 pl-5 text-right" : "pl-12 pr-5 text-left"
                      )}
                      placeholder={t('contact.namePlaceholder', 'سعيد سنان')}
                      required
                    />
                  </div>
                </div>

                {/* حقل البريد */}
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 mb-1 justify-start">
                    <Mail className="w-3 md:w-3.5 h-3 md:h-3.5 text-brand-primary" />
                    <label className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-wider">
                      {t('contact.emailLabel', 'البريد الإلكتروني')}
                    </label>
                  </div>
                  <div className="relative group/field">
                    <AtSign className={cn(
                      "absolute top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within/field:text-brand-primary transition-colors pointer-events-none",
                      isRtl ? "right-4" : "left-4"
                    )} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(
                        "w-full bg-slate-50/50 rounded-xl py-3.5 md:py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 border border-slate-100 focus:border-brand-primary/50 focus:bg-white transition-all font-bold text-brand-secondary text-sm md:text-base",
                        isRtl ? "pr-12 pl-5 text-right" : "pl-12 pr-5 text-left"
                      )}
                      placeholder="hello@90.agency"
                      required
                    />
                  </div>
                </div>

                {/* الخدمة المطلوبة */}
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 mb-1 justify-start">
                    <Briefcase className="w-3 md:w-3.5 h-3 md:h-3.5 text-brand-primary" />
                    <label className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-wider">
                      {t('contact.service', 'الخدمة المطلوبة')}
                    </label>
                  </div>
                  <div className="relative group/field">
                    <Briefcase className={cn(
                      "absolute top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within/field:text-brand-primary transition-colors pointer-events-none",
                      isRtl ? "right-4" : "left-4"
                    )} />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={cn(
                        "w-full bg-slate-50/50 rounded-xl py-3.5 md:py-4 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-primary/20 border border-slate-100 focus:border-brand-primary/50 focus:bg-white transition-all font-bold text-brand-secondary cursor-pointer text-sm md:text-base",
                        isRtl ? "pr-12 pl-10 text-right" : "pl-12 pr-10 text-left"
                      )}
                      required
                    >
                      <option value="" disabled>{t('contact.selectService', 'اختر نوع الخدمة')}</option>
                      {services.map(s => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                    <ChevronDown className={cn(
                      "absolute top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none transition-transform group-focus-within/field:rotate-180",
                      isRtl ? "left-5" : "right-5"
                    )} />
                  </div>
                </div>

                {/* الرسالة */}
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 mb-1 justify-start">
                    <PenLine className="w-3 md:w-3.5 h-3 md:h-3.5 text-brand-primary" />
                    <label className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-wider">
                      {t('contact.message', 'تفاصيل مشروعك')}
                    </label>
                  </div>
                  <div className="relative group/field">
                    <MessageSquareText className={cn(
                      "absolute top-6 w-4 h-4 text-slate-300 group-focus-within/field:text-brand-primary transition-colors pointer-events-none",
                      isRtl ? "right-4" : "left-4"
                    )} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      className={cn(
                        "w-full bg-slate-50/50 rounded-xl py-3.5 md:py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 border border-slate-100 focus:border-brand-primary/50 focus:bg-white transition-all font-bold text-brand-secondary resize-none text-sm md:text-base",
                        isRtl ? "pr-12 pl-5 text-right" : "pl-12 pr-5 text-left"
                      )}
                      placeholder={t('contact.messagePlaceholder', 'أخبرنا عن أهدافك وطموحاتك...')}
                      required
                    />
                  </div>
                </div>

                {/* زر الإرسال */}
                <button
                  type="submit"
                  className="w-full h-16 md:h-20 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl md:rounded-2xl font-black text-lg md:text-xl transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-3 md:gap-4 shadow-xl shadow-brand-primary/20 group overflow-hidden relative"
                >
                  <span className="relative z-10">{t('contact.send', 'إرسال الرسالة')}</span>
                  <Send className={cn(
                    "relative z-10 w-5 md:w-6 h-5 md:h-6 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1",
                    isRtl && "rotate-180 group-hover:-translate-x-1"
                  )} />
                </button>
              </form>
            </div>
          </div>

          {/* 🗺️ Full Width Map */}
          <div
            className="mt-16 md:mt-24 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 relative group"
          >
            <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2428.9553964012166!2d4.886700684193353!3d52.498046979810034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTLCsDI5JzUzLjAiTiA0wrA1MycwNC4yIkU!5e0!3m2!1sar!2seg!4v1772575771416!5m2!1sar!2seg" 
              width="100%" 
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Agency 90 Location"
              className="hover:opacity-90 transition-opacity duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;