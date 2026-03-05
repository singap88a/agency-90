import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const FAQ = () => {
  const { t, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);
  const isRtl = i18n.dir() === 'rtl';

  const faqs = t('faq.items', { returnObjects: true }) || [];

  const displayFaqs = faqs.length > 0 ? faqs : (isRtl ? [
    { q: "ما هي الخدمات الرئيسية التي تقدمها agency 90؟", a: "نقدم حلولاً متكاملة تشمل التسويق الرقمي الاستراتيجي، الإنتاج السينمائي، تصميم الهوية النخبوية، وتطوير الأنظمة الرقمية المتقدمة." },
    { q: "كيف تضمنون جودة النتائج؟", a: "نعتمد على منهجية دقيقة تجمع بين تحليل البيانات والروح الإبداعية. نتابع كل تفاصيل المشروع بدقة." },
    { q: "هل تعملون مع عملاء دوليين؟", a: "بكل تأكيد، نحن نخدم قاعدة عملاء عالمية ونفهم تماماً متطلبات الأسواق الدولية." },
    { q: "ما الذي يميزكم عن باقي الوكالات؟", a: "نحن نمزج الفن بالذكاء التقني، مع التركيز على خلق تجربة بصرية وسينمائية فريدة وتأثير لا يُنسى." },
    { q: "كيف يتم تحديد تكلفة المشروع؟", a: "كل مشروع فريد بطبيعته، لذلك نقدم عروضاً مخصصة بناءً على متطلباتك وميزانيتك." },
    { q: "هل تقدمون دعماً بعد التسليم؟", a: "نعم، نقدم دعماً فنياً مستمراً لمدة 6 أشهر بعد التسليم مع إمكانية التمديد." },
  ] : [
    { q: "What services does agency 90 provide?", a: "We offer integrated solutions including strategic digital marketing, cinematic production, elite visual identity, and advanced digital systems." },
    { q: "How do you ensure quality?", a: "We employ a precise methodology blending data analysis with creative spirit. Every project detail is carefully monitored." },
    { q: "Do you work with international clients?", a: "Absolutely. We serve a global clientele and deeply understand international market requirements." },
    { q: "What makes agency 90 different?", a: "We merge artistic vision with technical intelligence, focusing on creating unique visual and cinematic experiences." },
    { q: "How is project cost determined?", a: "Each project is unique, so we provide customized quotes based on your requirements and budget." },
    { q: "Do you offer post-delivery support?", a: "Yes, we provide ongoing technical support for 6 months after delivery." },
  ]);

  const leftColumnFaqs = displayFaqs.slice(0, 3);
  const rightColumnFaqs = displayFaqs.slice(3, 6);

  const QuestionCard = ({ faq, index, columnOffset }) => {
    const actualIndex = columnOffset + index;
    const isOpen = openIndex === actualIndex;

    return (
      <div
        className="group"
      >
        <div className={cn(
          "relative bg-white/70 backdrop-blur-sm rounded-2xl border transition-[border-color,box-shadow,background] duration-500",
          isOpen
            ? "border-brand-primary shadow-xl shadow-brand-primary/10 bg-white"
            : "border-white/80 hover:border-brand-primary/30 shadow-md hover:shadow-lg"
        )}>
          {/* Active top bar */}
          <div className={cn(
            "absolute top-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-brand-primary to-transparent transition-all duration-700",
            isOpen ? "w-3/4 opacity-100" : "w-0 opacity-0"
          )} />

          <button
            onClick={() => setOpenIndex(isOpen ? null : actualIndex)}
            className={cn("w-full px-6 py-5 flex items-center justify-between gap-4", isRtl ? "text-right flex-row-reverse" : "text-left")}
          >
            {/* Question — heavier weight, bigger */}
            <span className={cn(
              "text-lg font-extrabold tracking-tight transition-colors duration-300",
              isOpen ? "text-brand-primary" : " text-brand-secondary"
            )}>
              {faq.q}
            </span>
            <div
              className={cn(
                "flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300",
                isOpen ? "bg-brand-primary text-white shadow-lg rotate-180" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 border-2 border2"
              )}
            >
              <ChevronDown className="w-4 h-4" />
            </div>
          </button>

          {isOpen && (
            <div
              className="overflow-hidden"
            >
              <div className={cn("px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 text-sm font-medium", isRtl ? "text-right" : "text-left")}>
                {faq.a}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-10  overflow-hidden">

      <div className="container mx-auto px-6 lg:px-24 relative">

        {/* ── Header ── */}
        <div className="text-center max-w-4xl mx-auto mb-10  ">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-brand-primary/20 shadow-sm mb-10"
          >
            <Sparkles className="w-4 h-4 text-brand-primary animate-pulse" />
            <span className="text-sm font-bold tracking-widest text-brand-primary">
              {t('faq.badge', isRtl ? 'الأسئلة الشائعة' : 'FAQ')}
            </span>
          </div>

          {/* Title — ONE LINE */}
          <h2
            className="text-4xl md:text-6xl font-bold text-brand-secondary mb-8 tracking-tighter"
          >
            {isRtl ? (
              <>
                الأسئلة{' '}
                <span className="bg-brand-primary to-brand-primary/60 bg-clip-text text-transparent">
                  الشائعة
                </span>
              </>
            ) : (
              <>
                Frequently{' '}
                <span className="bg-brand-primary to-brand-primary/60 bg-clip-text text-transparent">
                  Asked Questions
                </span>
              </>
            )}
          </h2>

          <p
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            {t('faq.description', isRtl
              ? 'كل ما تحتاج لمعرفته عن خدماتنا وكيف نساعدك في تحقيق رؤيتك'
              : 'Everything you need to know about our services and how we help bring your vision to life.'
            )}
          </p>
        </div>

        {/* Two-column FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-5 max-w-6xl mx-auto">
          <div className="space-y-5">
            {leftColumnFaqs.map((faq, idx) => (
              <QuestionCard key={idx} faq={faq} index={idx} columnOffset={0} />
            ))}
          </div>
          <div className="space-y-5">
            {rightColumnFaqs.map((faq, idx) => (
              <QuestionCard key={idx + 3} faq={faq} index={idx} columnOffset={3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;