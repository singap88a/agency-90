import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Quote, Star, Sparkles } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const AboutTestimonials = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.dir() === 'rtl';

    const testimonials = t('about.testimonials.items', { returnObjects: true }) || [];

    // Custom CSS for Swiper bars pagination — dynamic 4 bullets max
    const swiperStyles = `
        .testimonial-swiper .swiper-pagination {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
        }
        .testimonial-swiper .swiper-pagination-bullet {
            width: 30px !important;
            height: 4px !important;
            border-radius: 2px !important;
            background: #fbbf24 !important;
            opacity: 0.2 !important;
            transition: all 0.3s ease !important;
            margin: 0 !important;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
            opacity: 1 !important;
            width: 50px !important;
        }
        .testimonial-swiper .swiper-pagination-bullet-active-main {
            opacity: 1 !important;
            width: 50px !important;
        }
        .testimonial-swiper .swiper-pagination-bullet-active-prev,
        .testimonial-swiper .swiper-pagination-bullet-active-next {
            opacity: 0.5 !important;
            width: 35px !important;
        }
        .testimonial-swiper .swiper-pagination-bullet-active-prev-prev,
        .testimonial-swiper .swiper-pagination-bullet-active-next-next {
            opacity: 0.2 !important;
            width: 20px !important;
        }
    `;

    return (
        <section className="relative py-5 md:py-10  bg-white overflow-hidden">
            <style>{swiperStyles}</style>
            
            <div className="container mx-auto px-6 lg:px-24 relative">
                {/* Elite Header */}
                <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-brand-primary/20 shadow-sm mb-10"
                    >
                        <Sparkles className="w-4 h-4 text-brand-primary animate-pulse" />
                        <span className="text-sm font-bold tracking-widest text-brand-primary">
                            {t('about.testimonials.subtitle')}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tighter"
                    >
                        {isRtl ? (
                            <>
                                ماذا <span className="bg-gradient-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent">قالوا عنا؟</span>
                            </>
                        ) : (
                            <>
                                What <span className="bg-gradient-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent">Clients Say</span>
                            </>
                        )}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        {t('about.testimonials.description')}
                    </motion.p>
                </div>

                <div className="w-full">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 5000 }}
                        pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 3 }}
                        loop={true}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1280: { slidesPerView: 3 }
                        }}
                        className="testimonial-swiper !pb-20"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index} className="!h-auto">
                                <div className="relative bg-gray-50/30 rounded-[2.5rem] p-10 border-2 border-brand-primary/30 hover:border-brand-primary hover:bg-white hover:shadow-2xl transition-all duration-500 group h-full flex flex-col">
                                    {/* Quote Icon - Enhanced Size */}
                                    <Quote 
                                        className={`absolute top-8 ${isRtl ? 'left-8' : 'right-8'} w-14 h-14 text-brand-primary/10 group-hover:text-brand-primary/20 transition-all duration-500`} 
                                        strokeWidth={1}
                                    />

                                    {/* Top Section: Identity & Rating */}
                                    <div className="flex items-center gap-5 mb-8 relative z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-primary/5 flex items-center justify-center shrink-0 border border-brand-primary/10 shadow-sm transition-transform duration-500 group-hover:scale-110">
                                            <span className="text-brand-primary font-bold text-2xl">
                                                {item.name?.charAt(0)}
                                            </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <h4 className="text-xl font-bold text-gray-900 tracking-tighter mb-1">
                                                {item.name}
                                            </h4>
                                            <p className="text-brand-primary font-bold tracking-wider text-[10px]">
                                                {item.role}
                                            </p>
                                            
                                            {/* Stars */}
                                            <div className="flex gap-1 mt-2">
                                                {[...Array(item.rating || 5)].map((_, i) => (
                                                    <Star key={i} className="w-3.5 h-3.5 fill-brand-primary text-brand-primary" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Section: Description */}
                                    <div className="flex-grow relative z-10">
                                        <p className="text-gray-600 text-lg leading-relaxed font-medium tracking-tight italic">
                                            "{item.text}"
                                        </p>
                                    </div>

                                    {/* Decorative subtle pulse mark */}
                                    <div className="mt-8 flex items-center gap-4 relative z-10">
                                        <div className="w-12 h-[1.5px] bg-brand-primary/30 group-hover:w-20 group-hover:bg-brand-primary/60 transition-all duration-700" />
                                        <div className="w-2 h-2 rounded-full bg-brand-primary/40 group-hover:bg-brand-primary animate-pulse" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default AboutTestimonials;