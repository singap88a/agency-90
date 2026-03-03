import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      className="relative py-16 px-6 lg:px-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 px-10 lg:px-16 py-12 bg-gradient-to-br from-white via-slate-50 to-white shadow-lg"
        >

          {/* ✨ Background (بدون مثلث) */}
          <div className="absolute inset-0 pointer-events-none">

            {/* Grid خفيف */}
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(0,0,0,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.3)_1px,transparent_1px)] bg-[size:70px_70px]" />

            {/* Soft glow يمين */}
            <div className="absolute -top-32 right-0 w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-[120px]" />

            {/* Soft glow شمال */}
            <div className="absolute -bottom-32 left-0 w-[350px] h-[350px] bg-brand-primary/10 rounded-full blur-[120px]" />

          </div>

          {/* Layout */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* 📝 النص - يبدأ من أقصى اليمين */}
            <div className={`flex-1 w-full ${isRtl ? 'text-right' : 'text-left'}`}>

              <h2 className="text-3xl md:text-5xl font-black text-brand-secondary leading-tight mb-4">
                {t('cta.title_start')}{' '}
                <span className="text-brand-primary">
                  {t('cta.title_highlight')}
                </span>
              </h2>

              <p className="text-lg lg:text-xl text-gray-500 max-w-3xl font-medium leading-relaxed">
                {t('cta.subtitle')}
              </p>
            </div>

            {/* 🚀 الزرار على الشمال خالص */}
            <div className="shrink-0">

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-brand-primary text-white px-10 lg:px-12 py-5 rounded-2xl text-lg font-bold flex items-center gap-4 shadow-xl hover:shadow-[0_20px_40px_rgba(var(--brand-primary-rgb),0.25)] transition-all"
                >
                  <span className="text-white">
                    {t('cta.button')}
                  </span>

                  {isRtl ? (
                    <ArrowLeft className="w-5 h-5 text-white" />
                  ) : (
                    <ArrowRight className="w-5 h-5 text-white" />
                  )}
                </Link>
              </motion.div>

            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTA;