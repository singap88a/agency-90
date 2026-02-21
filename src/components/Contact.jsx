// Contact.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Instagram, Mail, Send, User, AtSign, Briefcase, MessageSquareText, ChevronDown, MapPin, Clock } from 'lucide-react';

const Contact = ({ isPage = false }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  // اللون الأساسي (الأصفر من البراند) - Brand Primary
  const primaryColor = '#fbbf24';
  
  const contactInfo = [
    { icon: Phone, label: t('contact.phone', 'رقم الهاتف'), value: t('contact.phoneValue', "+31 6 42786606"), link: `tel:${t('contact.phoneValue', "+31 6 42786606").replace(/\s/g, '')}` },
    { icon: Instagram, label: t('contact.instagram', 'انستغرام'), value: "@brandup.agency", link: "https://instagram.com/brandup.agency" },
    { icon: Mail, label: t('contact.emailLabel', 'البريد الإلكتروني'), value: t('contact.emailValue', "Saeedsinan180@gmail.com"), link: `mailto:${t('contact.emailValue', "Saeedsinan180@gmail.com")}` },
    { icon: Briefcase, label: t('contact.taxNumber', 'الرقم الضريبي'), value: t('contact.taxValue', "12786594"), link: "#" }
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
    
    // الحصول على اسم الخدمة بشكل مقروء
    const selectedService = services.find(s => s.value === formData.service)?.label || formData.service;
    const timestamp = new Date().toLocaleString('en-GB', { 
      day: '2-digit', month: '2-digit', year: 'numeric', 
      hour: '2-digit', minute: '2-digit' 
    });
    
    // إرسال للوتساب - تنسيق فائق الاحترافية (تقرير عميل)
    const whatsappNumber = "201001351667"; // صاحب الموقع
    const message = 
      `◈═════════════════════◈\n` +
      `🏆 *تقرير عميل جديد | LEAD REPORT* \n` +
      `◈═════════════════════◈\n\n` +
      `📅 *التاريخ:* ${timestamp}\n` +
      `📍 *المصدر:* BrandUp Elite Platform\n\n` +
      `👤 *بـيـانـات الـعـمـيـل:*\n` +
      `┃ ◈ *الاسم:* ${formData.name}\n` +
      `┃ ◈ *البريد:* ${formData.email}\n\n` +
      `🎯 *الخدمة المحددة:*\n` +
      `┃ ◈ ${selectedService}\n\n` +
      `� *نص الرسالة:*\n` +
      `┃ ${formData.message}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n` +
      `🔗 *تـم الإرسـال عـبـر:* https://brandup.agency\n` +
      `✨ *BrandUp | Quality Above Expectations*`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className={`${isPage ? 'py-16 md:py-24' : 'section-padding'}`} style={{ backgroundColor: '#FDFDFD' }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {!isPage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center mb-16"
            >
              <span className="font-semibold tracking-widest text-xs mb-4" style={{ color: primaryColor }}>
                {t('contact.subtitle', 'تواصل معنا')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2D2D2D]">
                {t('contact.title', 'اتصل بنا')}
              </h2>
              <div className="w-16 h-0.5" style={{ backgroundColor: `${primaryColor}30` }} />
            </motion.div>
          )}

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Contact Details - Left Side - تصميم أنيق بخطوط واضحة */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-4"
            >
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-[#2D2D2D] mb-3">
                  {t('contact.getInTouch', 'تواصل معنا')}
                </h3>
                <p className="text-[#4A4A4A] text-base leading-relaxed font-medium">
                  {t('contact.description', 'نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق رؤيتك')}
                </p>
              </div>

              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-5 p-5 rounded-xl transition-all duration-300 group"
                  style={{ 
                    backgroundColor: '#F5F5F5',
                    border: '1px solid transparent',
                  }}
                  whileHover={{ 
                    backgroundColor: '#FFFFFF',
                    borderColor: `${primaryColor}40`,
                    boxShadow: '0 10px 30px -15px rgba(0,0,0,0.1)'
                  }}
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ 
                      backgroundColor: `${primaryColor}15`,
                      color: primaryColor
                    }}
                  >
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold mb-1 tracking-wide" style={{ color: `${primaryColor}` }}>{info.label}</div>
                    <div className="text-base font-bold text-[#2D2D2D]">{info.value}</div>
                  </div>
                </motion.a>
              ))}

              {/* Additional Info */}
              <div className="mt-8 pt-8" style={{ borderTop: '1px solid #E8E8E8' }}>
                <div className="flex items-start gap-4 text-base font-medium text-[#4A4A4A]">
                  <MapPin className="w-5 h-5 mt-0.5" style={{ color: primaryColor }} />
                  <span>{t('contact.address', 'Waterkers 55, 1689PJ, Zwaag Hoorn')}</span>
                </div>
                <div className="flex items-start gap-4 mt-4 text-base font-medium text-[#4A4A4A]">
                  <Clock className="w-5 h-5 mt-0.5" style={{ color: primaryColor }} />
                  <span>{t('contact.hours', 'السبت الى الجمعة من 9:00 الى 5:00')}</span>
                </div>
              </div>

            </motion.div>

            {/* Contact Form - Right Side - تصميم فاخر جداً */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-8"
            >
              <div 
                className="p-8 md:p-10 rounded-3xl"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 20px 40px -20px rgba(0,0,0,0.15), 0 0 0 1px rgba(184,138,94,0.1)'
                }}
              >
                <h3 className="text-3xl font-bold text-[#2D2D2D] mb-8">
                  {t('contact.sendMessage', 'أرسل لنا رسالة')}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#2D2D2D] tracking-wide">
                        {t('contact.name', 'الاسم الكامل')}
                      </label>
                      <div className="relative group">
                        <User 
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300" 
                          style={{ color: `${primaryColor}80` }}
                        />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full border rounded-xl pl-12 pr-5 py-4 text-[#2D2D2D] placeholder:text-[#9A9A9A] focus:outline-none transition-all duration-300 text-base font-medium"
                          style={{ 
                            backgroundColor: '#F8F8F8',
                            borderColor: '#E8E8E8',
                          }}
                          onFocus={(e) => {
                            e.target.style.backgroundColor = '#FFFFFF';
                            e.target.style.borderColor = primaryColor;
                            e.target.style.boxShadow = `0 0 0 4px ${primaryColor}15`;
                          }}
                          onBlur={(e) => {
                            e.target.style.backgroundColor = '#F8F8F8';
                            e.target.style.borderColor = '#E8E8E8';
                            e.target.style.boxShadow = 'none';
                          }}
                          placeholder={t('contact.namePlaceholder', 'أدخل اسمك')}
                          required
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#2D2D2D] tracking-wide">
                        {t('contact.emailLabel', 'البريد الإلكتروني')}
                      </label>
                      <div className="relative group">
                        <AtSign 
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300" 
                          style={{ color: `${primaryColor}80` }}
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border rounded-xl pl-12 pr-5 py-4 text-[#2D2D2D] placeholder:text-[#9A9A9A] focus:outline-none transition-all duration-300 text-base font-medium"
                          style={{ 
                            backgroundColor: '#F8F8F8',
                            borderColor: '#E8E8E8',
                          }}
                          onFocus={(e) => {
                            e.target.style.backgroundColor = '#FFFFFF';
                            e.target.style.borderColor = primaryColor;
                            e.target.style.boxShadow = `0 0 0 4px ${primaryColor}15`;
                          }}
                          onBlur={(e) => {
                            e.target.style.backgroundColor = '#F8F8F8';
                            e.target.style.borderColor = '#E8E8E8';
                            e.target.style.boxShadow = 'none';
                          }}
                          placeholder="email@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Field */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#2D2D2D] tracking-wide">
                      {t('contact.service', 'الخدمة المطلوبة')}
                    </label>
                    <div className="relative group">
                      <Briefcase 
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 z-10" 
                        style={{ color: `${primaryColor}80` }}
                      />
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full border rounded-xl pl-12 pr-12 py-4 text-[#2D2D2D] focus:outline-none transition-all duration-300 text-base font-medium appearance-none cursor-pointer"
                        style={{ 
                          backgroundColor: '#F8F8F8',
                          borderColor: '#E8E8E8',
                        }}
                        onFocus={(e) => {
                          e.target.style.backgroundColor = '#FFFFFF';
                          e.target.style.borderColor = primaryColor;
                          e.target.style.boxShadow = `0 0 0 4px ${primaryColor}15`;
                        }}
                        onBlur={(e) => {
                          e.target.style.backgroundColor = '#F8F8F8';
                          e.target.style.borderColor = '#E8E8E8';
                          e.target.style.boxShadow = 'none';
                        }}
                        required
                      >
                        <option value="" disabled className="font-medium">
                          {t('contact.selectService', 'اختر الخدمة')}
                        </option>
                        {services.map(service => (
                          <option key={service.value} value={service.value} className="font-medium py-2">
                            {service.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown 
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none transition-colors duration-300"
                        style={{ color: `${primaryColor}80` }}
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#2D2D2D] tracking-wide">
                      {t('contact.message', 'الرسالة')}
                    </label>
                    <div className="relative group">
                      <MessageSquareText 
                        className="absolute left-4 top-5 w-5 h-5 transition-colors duration-300" 
                        style={{ color: `${primaryColor}80` }}
                      />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full border rounded-xl pl-12 pr-5 py-4 text-[#2D2D2D] placeholder:text-[#9A9A9A] focus:outline-none transition-all duration-300 text-base font-medium resize-none"
                        style={{ 
                          backgroundColor: '#F8F8F8',
                          borderColor: '#E8E8E8',
                        }}
                        onFocus={(e) => {
                          e.target.style.backgroundColor = '#FFFFFF';
                          e.target.style.borderColor = primaryColor;
                          e.target.style.boxShadow = `0 0 0 4px ${primaryColor}15`;
                        }}
                        onBlur={(e) => {
                          e.target.style.backgroundColor = '#F8F8F8';
                          e.target.style.borderColor = '#E8E8E8';
                          e.target.style.boxShadow = 'none';
                        }}
                        placeholder={t('contact.messagePlaceholder', 'اكتب رسالتك هنا...')}
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button - بلون برايمري */}
                  <button
                    type="submit"
                    className="w-full rounded-xl py-5 text-base font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-3 group"
                    style={{ 
                      backgroundColor: primaryColor,
                      color: '#FFFFFF',
                      boxShadow: `0 10px 20px -8px ${primaryColor}80`
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#d97706'; // Darker yellow/amber
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = `0 15px 25px -10px ${primaryColor}`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = primaryColor;
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = `0 10px 20px -8px ${primaryColor}80`;
                    }}
                  >
                    <span className="text-lg">{t('contact.send', 'إرسال الرسالة')}</span>
                    <Send className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
                  </button>

                  <p className="text-sm text-[#9A9A9A] text-center mt-6 font-medium">
                    {t('contact.privacy', 'نحن نحترم خصوصيتك ولن نشارك بياناتك مع أي طرف ثالث')}
                  </p>

                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;