import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Sparkles, HelpCircle, MessageSquare, Star, ArrowRight } from 'lucide-react';

const FAQ = () => {
  const { t, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);
  const isRtl = i18n.dir() === 'rtl';

  const faqs = isRtl ? [
    {
      q: "ما هي الخدمات الرئيسية التي تقدمها براند أب؟",
      a: "نقدم حلولاً متكاملة تشمل التسويق الرقمي الاستراتيجي، الإنتاج السينمائي، تصميم الهوية النخبوية، وتطوير الأنظمة الرقمية المتقدمة. كل خدمة نصممها بعناية لتتناسب مع رؤية عملائنا الطموحة."
    },
    {
      q: "كيف تضمنون جودة النتائج؟",
      a: "نعتمد على منهجية دقيقة تجمع بين تحليل البيانات والروح الإبداعية. نتابع كل تفاصيل المشروع بدقة، ونطبّق أعلى معايير الجودة العالمية في كل مرحلة من مراحل العمل."
    },
    {
      q: "هل تعملون مع عملاء دوليين؟",
      a: "بكل تأكيد، نحن نخدم قاعدة عملاء عالمية ونفهم تماماً متطلبات الأسواق الدولية. فريقنا متعدد الثقافات يتعامل باحترافية مع مختلف اللغات والتوجهات الثقافية."
    },
    {
      q: "ما الذي يميزكم عن باقي الوكالات؟",
      a: "نحن نمزج الفن بالذكاء التقني، مع التركيز على خلق تجربة بصرية وسينمائية فريدة. نؤمن بأن الإبداع الحقيقي يكمن في التفاصيل الدقيقة التي تصنع الفارق."
    },
    {
      q: "كيف يتم تحديد تكلفة المشروع؟",
      a: "كل مشروع فريد بطبيعته، لذلك نقدم عروضاً مخصصة بناءً على متطلباتك وميزانيتك. نؤمن بالشفافية الكاملة في التسعير ولا يوجد أي رسوم خفية."
    },
    {
      q: "هل تقدمون دعماً بعد التسليم؟",
      a: "نعم، نقدم دعماً فنياً مستمراً لمدة 6 أشهر بعد التسليم، مع إمكانية تمديد فترة الدعم حسب رغبتك. فريقنا متاح دائماً للإجابة على استفساراتك."
    }
  ] : [
    {
      q: "What services does BrandUp provide?",
      a: "We offer integrated solutions including strategic digital marketing, cinematic production, elite visual identity, and advanced digital systems. Each service is meticulously crafted to align with our clients' ambitious vision."
    },
    {
      q: "How do you ensure quality?",
      a: "We employ a precise methodology blending data analysis with creative spirit. Every project detail is carefully monitored, applying the highest international quality standards throughout all work phases."
    },
    {
      q: "Do you work with international clients?",
      a: "Absolutely. We serve a global clientele and deeply understand international market requirements. Our multicultural team handles various languages and cultural nuances with expertise."
    },
    {
      q: "What makes BrandUp different?",
      a: "We merge artistic vision with technical intelligence, focusing on creating unique visual and cinematic experiences. We believe true creativity lies in the fine details that make the difference."
    },
    {
      q: "How is project cost determined?",
      a: "Each project is unique, so we provide customized quotes based on your requirements and budget. We believe in complete pricing transparency with no hidden fees."
    },
    {
      q: "Do you offer post-delivery support?",
      a: "Yes, we provide ongoing technical support for 6 months after delivery, with the option to extend the support period. Our team is always available to answer your questions."
    }
  ];

  // Create pairs for 2-column layout
  const leftColumnFaqs = faqs.slice(0, 3);
  const rightColumnFaqs = faqs.slice(3, 6);

  const QuestionCard = ({ faq, index, columnOffset }) => {
    const actualIndex = columnOffset + index;
    const isOpen = openIndex === actualIndex;
    
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group"
      >
        <div
          className={`relative bg-white rounded-2xl border transition-[border-color,box-shadow] duration-500 ${
            isOpen 
              ? 'border-brand-accent shadow-xl shadow-brand-accent/10' 
              : 'border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-xl'
          }`}
        >
          {/* Decorative professional highlight line */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-brand-accent to-transparent transition-all duration-700 ease-out ${
            isOpen ? 'w-3/4 opacity-100' : 'w-0 opacity-0'
          }`} />
          
          
          <button
            onClick={() => setOpenIndex(isOpen ? null : actualIndex)}
            className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
          >
            <span className={`text-lg font-semibold transition-colors duration-300 ${
              isOpen ? 'text-brand-accent' : 'text-gray-900'
            }`}>
              {faq.q}
            </span>
            
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
              className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isOpen 
                  ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/25' 
                  : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
              }`}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />
        
        {/* Animated dots pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-2 h-2 bg-brand-accent/20 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-brand-accent/20 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-brand-accent/20 rounded-full animate-pulse delay-700" />
          <div className="absolute bottom-40 right-1/4 w-4 h-4 bg-brand-accent/20 rounded-full animate-pulse delay-1000" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Creative Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          {/* Floating badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-brand-accent/10 to-brand-accent/5 rounded-full text-sm font-medium text-brand-accent border border-brand-accent/20 inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              {t('faq.badge', 'Get Answers')}
            </span>
            
            <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 border border-gray-200 inline-flex items-center gap-2 shadow-sm">
              <MessageSquare className="w-4 h-4" />
              {t('faq.support', '24/7 Support')}
            </span>
            
            <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 border border-gray-200 inline-flex items-center gap-2 shadow-sm">
              <Star className="w-4 h-4" />
              {t('faq.expert', 'Expert Help')}
            </span>
          </motion.div>

          {/* Main title with creative layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                {t('faq.title1', 'Frequently')}
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="bg-gradient-to-r from-brand-accent to-brand-accent/70 bg-clip-text text-transparent">
                  {t('faq.title2', 'Asked Questions')}
                </span>
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </h2>

            {/* Decorative question mark */}
            <motion.div 
              className="absolute -top-10 -right-10 text-8xl font-bold text-brand-accent/5 select-none"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1.1, 1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ?
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            {t('faq.description', 'Everything you need to know about our services and how we can help bring your vision to life.')}
          </motion.p>
        </div>

        {/* Two-column FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumnFaqs.map((faq, idx) => (
              <QuestionCard 
                key={idx} 
                faq={faq} 
                index={idx} 
                columnOffset={0}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumnFaqs.map((faq, idx) => (
              <QuestionCard 
                key={idx + 3} 
                faq={faq} 
                index={idx} 
                columnOffset={3}
              />
            ))}
          </div>
        </div>

 
      </div>
    </section>
  );
};

export default FAQ;