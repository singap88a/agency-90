import React from 'react';
import { useTranslation } from 'react-i18next';
import { Quote, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const AboutTestimonials = () => {
    const { t, i18n } = useTranslation();

    const testimonials = [
        {
            name: "Omar Zayed",
            company: "Zayed Tech",
            text: "التعامل مع براند أب كان نقلة نوعية في عملنا. احترافية عالية ونتائج مبهرة وخدمة عملاء استثنائية.",
            rating: 5
        },
        {
            name: "Laila Mansour",
            company: "Creative Hub",
            text: "أفضل وكالة إبداعية تعاملت معها على الإطلاق. تصاميمهم خارج التوقعات وتلمس روح العلامة التجارية.",
            rating: 5
        },
        {
            name: "John Miller",
            company: "Miller Co",
            text: "Exceptional service and world-class vision. They transformed our brand completely and reached global markets.",
            rating: 5
        },
        {
            name: "Yassine Bakri",
            company: "Bakri Logistics",
            text: "فريق عمل محترف جداً، التزام بالمواعيد وإبداع في التنفيذ يفوق الوصف بكل المعايير التقنية.",
            rating: 5
        }
    ];

    const sectionTitle = i18n.language === 'ar' ? 'آراء العملاء' : 'Client Testimonials';
    const sectionSubtitle = i18n.language === 'ar' ? 'شركاء النجاح يعبرون عن تجربتهم معنا' : 'Success partners share their experience with us';

    return (
        <section className="py-32 bg-white overflow-hidden relative">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="text-center mb-24">
                    <h2 className="text-5xl lg:text-7xl font-black text-brand-dark mb-6 tracking-tighter leading-[0.9]">
                        {sectionTitle}
                    </h2>
                    <p className="text-brand-dark/30 uppercase tracking-[0.4em] text-xs font-black">
                        {sectionSubtitle}
                    </p>
                </div>

                <div className="w-full">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 5000 }}
                        pagination={{ clickable: true }}
                        loop={true}
                        spaceBetween={30}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="testimonial-swiper !pb-24"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="h-full bg-brand-secondary/40 p-10 rounded-[2.5rem] border border-black/[0.03] hover:border-brand-accent/30 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group">
                                    <div className="flex justify-center gap-1 mb-8">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                                        ))}
                                    </div>
                                    <Quote className="w-10 h-10 text-brand-accent/5 mb-8 group-hover:text-brand-accent/20 transition-colors" />
                                    <p className="text-xl text-brand-dark/70 font-medium leading-relaxed italic mb-10 flex-grow tracking-tight">
                                        "{item.text}"
                                    </p>
                                    <div className="flex flex-col mt-auto pt-8 border-t border-black/5 w-full">
                                        <span className="text-xl font-black text-brand-dark tracking-tighter">{item.name}</span>
                                        <span className="text-brand-accent font-black uppercase tracking-widest text-[9px] mt-2">{item.company}</span>
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
