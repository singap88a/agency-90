import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Target, 
  Crown, 
  TrendingUp, 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Gauge,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Pricing = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const ArrowIcon = isRtl ? ChevronLeft : ChevronRight;

  const modules = [
    {
      icon: Rocket,
      key: 'strategic',
      color: 'from-blue-600/20 to-cyan-400/20',
      iconColor: 'text-blue-600',
      features: ['Market Analysis', 'Campaign Strategy']
    },
    {
      icon: Target,
      key: 'growth',
      color: 'from-purple-600/20 to-pink-400/20',
      iconColor: 'text-purple-600',
      features: ['Lead Gen', 'Conversion Optimization']
    },
    {
      icon: Crown,
      key: 'premium',
      color: 'from-amber-600/20 to-orange-400/20',
      iconColor: 'text-amber-600',
      features: ['Visual Identity', 'Brand Guidelines']
    },
    {
      icon: TrendingUp,
      key: 'data',
      color: 'from-amber-400/20 to-yellow-300/20',
      iconColor: 'text-amber-600',
      features: ['Real-time Reports', 'ROI Tracking']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Silk-like background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-white pointer-events-none" />
      
      {/* Decorative subtle aura */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none opacity-40" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Elite Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-brand-accent/20 shadow-sm mb-10"
          >
            <Sparkles className="w-4 h-4 text-brand-accent animate-pulse" />
            <span className="text-sm font-bold tracking-widest text-brand-accent">
              {isRtl ? 'استثمار ذكي نخبوي' : 'Elite Smart Investment'}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight"
          >
            {isRtl ? 'نحو' : 'Towards'}{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-brand-accent to-brand-accent/60 bg-clip-text text-transparent">
                {isRtl ? 'تميز استثنائي' : 'Exceptional Excellence'}
              </span>
     
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            {isRtl 
              ? 'نحن لا نقدم مجرد خدمات، بل نصمم تجارب نجاح استراتيجية تليق بطموح علامتكم التجارية وتضمن لكم صدارة دائمة.'
              : 'We don\'t just offer services; we design strategic success experiences that match your brand\'s ambition and ensure lasting dominance.'}
          </motion.p>
        </div>

        {/* Global Grid System */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch max-w-7xl mx-auto">
          {/* Elite Invitation Card */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group flex flex-col h-full"
          >
            <div className="absolute inset-x-0 inset-y-0 bg-brand-accent/[0.02] rounded-[2.5rem] -m-1 pointer-events-none transition-all duration-500 group-hover:bg-brand-accent/[0.04]" />
            
            <div className="relative h-full bg-white rounded-[2.5rem] border border-gray-100 p-10 md:p-14 shadow-2xl shadow-gray-200/50 flex flex-col justify-between overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-xl text-xs font-bold tracking-widest mb-10 shadow-lg shadow-gray-900/10">
                  <Crown className="w-3.5 h-3.5" />
                  {t('pricing.most_popular')}
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {t('pricing.bespoke_title')}
                </h3>
                
                <p className="text-gray-500 text-lg mb-10 leading-relaxed font-medium">
                  {t('pricing.bespoke_desc')}
                </p>

                <div className="space-y-6 mb-12">
                  {[
                    isRtl ? 'استراتيجيات نمو مخصصة' : 'Custom Growth Strategies',
                    isRtl ? 'وحدة إنتاج سينمائي متكاملة' : 'Integrated Cinema Unit',
                    isRtl ? 'دعم تنفيذي فائق الجودة' : 'Ultra-Premium Exec Support',
                    isRtl ? 'ابتكار تكنولوجي مستمر' : 'Continuous Tech Innovation'
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover/item:bg-brand-accent group-hover/item:text-white transition-all duration-300">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-gray-700 font-bold text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative z-10 w-full bg-gray-900 text-white py-6 px-10 rounded-2xl font-bold text-xl hover:bg-black transition-all duration-500 flex items-center justify-center gap-3 group/btn shadow-xl shadow-gray-900/20"
              >
                <span>{t('pricing.request_consultation')}</span>
                <ArrowIcon className={`w-6 h-6 ${isRtl ? 'group-hover/btn:-translate-x-1' : 'group-hover/btn:translate-x-1'} transition-transform`} />
              </motion.button>

              {/* Decorative faint background text */}
              <div className="absolute -bottom-10 -right-10 text-[120px] font-bold text-gray-50/50 select-none pointer-events-none leading-none -rotate-12">
                EXPERT
              </div>
            </div>
          </motion.div>

          {/* Boutique Service Blocks */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6 h-full"
          >
            {modules.map((m, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative h-full"
              >
                <div className="relative h-full bg-white border border-gray-100 rounded-[2rem] p-8 hover:shadow-xl transition-all duration-500 hover:border-brand-accent/20 flex flex-col justify-between">
                  <div>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm`}>
                      <m.icon className={`w-8 h-8 ${m.iconColor}`} />
                    </div>

                    <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-accent transition-colors">
                      {t(`pricing.${m.key}.title`)}
                    </h4>

                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                      {t(`pricing.${m.key}.desc`)}
                    </p>

                    <div className="space-y-3 mb-8">
                      {m.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs text-gray-400 font-bold tracking-wide">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/40" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="text-sm font-bold text-gray-900 hover:text-brand-accent transition-colors flex items-center gap-2 group/link tracking-widest mt-auto">
                    <span>{t('pricing.learn_more')}</span>
                    <ArrowIcon className={`w-4 h-4 ${isRtl ? 'group-hover/link:-translate-x-1' : 'group-hover/link:translate-x-1'} transition-transform`} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

 
      </div>
    </section>
  );
};

// Internal Star icon since it wasn't in the original Pricing imports but useful for metrics
const Star = ({ className }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default Pricing;
