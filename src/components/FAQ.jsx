import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles, MessageCircleCode } from 'lucide-react';

const FAQ = () => {
  const { t, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);
  const isRtl = i18n.dir() === 'rtl';

  const faqs = isRtl ? [
    { q: "ما هي الخدمات الرئيسية التي تقدمها براند أب؟", a: "نحن نقدم حلولاً متكاملة تشمل التسويق الرقمي الاستراتيجي، الإنتاج السينمائي، تصميم الهوية النخبوية، وتطوير الأنظمة الرقمية المتقدمة." },
    { q: "كيف تضمنون جودة النتائج؟", a: "نعتمد على منهجية دقيقة تجمع بين البيانات والروح الإبداعية، مع متابعة دقيقة لكل تفاصيل المشروع لضمان تجاوز التوقعات." },
    { q: "هل تعملون مع عملاء دوليين؟", a: "بكل تأكيد، نحن نخدم قاعدة عملاء عالمية ونفهم تماماً متطلبات الأسواق الدولية بمختلف لغاتها وثقافاتها." },
    { q: "ما الذي يميزكم عن باقي الوكالات؟", a: "نحن نمزج الفن بالذكاء التقني، مع التركيز على خلق تجربة بصرية وسينمائية فريدة تلبي طموحات عملائنا النخبوية." },
    { q: "كيف يتم تحديد ميزانية المشروع؟", a: "كل مشروع له ميزانية مخصصة بناءً على المتطلبات الفنية والأهداف المرجوة، نحن نقدم حلولاً مرنة تناسب طموحاتكم." },
    { q: "هل هناك دعم فني بعد التسليم؟", a: "بالطبع، نحن نقدم دعماً فنياً مستمراً لضمان عمل كافة الحلول الرقمية بكفاءة عالية وتطويرها عند الحاجة." }
  ] : [
    { q: "What core excellence does BrandUp deliver?", a: "We provide integrated solutions encompassing strategic digital marketing, cinematic production, elite visual identity, and advanced digital systems." },
    { q: "How do you guarantee project quality?", a: "We employ a precise methodology blending raw data with creative spirit, ensuring every detail exceeds industry standards." },
    { q: "Do you serve international clients?", a: "Absolutely. We manage a global portfolio and deeply understand the nuances of international markets and cultures." },
    { q: "What makes BrandUp different from others?", a: "We merge artistic vision with technical intelligence, focusing on unique cinematic experiences for elite requirements." },
    { q: "How are project investments determined?", a: "Each project is bespoke, with investments calculated based on technical scope and intended objectives." },
    { q: "Is post-launch support available?", a: "Yes, we provide ongoing intelligence support to ensure all digital assets operate at peak efficiency." }
  ];

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6 border border-[#D4AF37]/20"
          >
            <MessageCircleCode className="w-8 h-8 text-[#D4AF37]" />
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 italic">F.A.Q</h2>
          <p className="text-[#F2F0E4]/30 font-bold uppercase tracking-[0.4em] text-xs">Curated Intelligence Area</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden group hover:border-[#D4AF37]/30 transition-all duration-500 rounded-3xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 text-right focus:outline-none hover:bg-white/5 transition-colors"
              >
                <span className="text-xl font-black tracking-tighter max-w-[80%] leading-tight">{faq.q}</span>
                <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${openIndex === idx ? 'bg-[#D4AF37] border-[#D4AF37]' : ''}`}>
                   <ChevronDown className={`w-5 h-5 transform transition-transform duration-500 ${openIndex === idx ? 'rotate-180 text-[#011614]' : 'text-white'}`} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 text-lg text-[#F2F0E4]/40 leading-relaxed font-medium border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
