import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, LayoutGrid, ChevronRight, Play, ChevronLeft, Image as ImageIcon, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import VideoModal from './VideoModal';
import GalleryModal from './GalleryModal';

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const [selectedGallery, setSelectedGallery] = useState(null);
  const isRtl = i18n.dir() === 'rtl';

  const projects = [
    { 
      id: 1, 
      category: 'design', 
      title: 'Luxury Identity', 
      images: [
        'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1572044162444-ad60f128bde3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80'
      ]
    },
    { 
      id: 2, 
      category: 'marketing', 
      title: 'Digital Growth', 
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1454165833767-131438959539?auto=format&fit=crop&w=800&q=80'
      ]
    },
    { 
      id: 3, 
      category: 'design', 
      title: 'Minimalist Vision', 
      images: [
        'https://images.unsplash.com/photo-1572044162444-ad60f128bde3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
      ]
    },
    { 
      id: 4, 
      category: 'marketing', 
      title: 'Viral Strategy', 
      images: [
        'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
      ] 
    },
    { 
      id: 5, 
      category: 'design', 
      title: 'Brand Elevation', 
      images: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
      ] 
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedGallery(project.images);
  };

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-12">
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
           >
              <div className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-[10px] mb-6 flex items-center gap-4">
                <div className="w-10 h-px bg-[#D4AF37]" />
                {isRtl ? 'الأعمال المتميزة' : 'Selected Projects'}
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6 uppercase">
                {isRtl ? 'رؤية فنية ' : 'Artistic '}
                <span className="text-[#D4AF37]">{isRtl ? 'متميزة' : 'Excellence'}</span>
              </h2>
              <p className="text-white/40 text-base md:text-lg font-medium leading-relaxed max-w-xl">
                {isRtl 
                  ? 'نبتكر حلولاً بصرية متكاملة تعكس قوة علامتك التجارية في كل تفصيل.' 
                  : 'Crafting elite visual solutions that reflect your brand\'s power in every single detail.'}
              </p>
           </motion.div>

           <Link 
            to="/projects"
            className="group flex items-center gap-4 px-8 py-5 bg-white/5 border border-white/10 rounded-2xl hover:border-[#D4AF37] transition-all duration-500 shadow-2xl mb-4"
           >
              <span className="text-white font-black text-sm uppercase tracking-widest">
                {isRtl ? 'عرض كل المشاريع' : 'View all projects'}
              </span>
              <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[#D4AF37] transition-colors" />
           </Link>
        </div>

        {/* Portfolio Slider */}
        <div className="relative overflow-hidden group/container">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={projects.length > 3}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full"
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={project.id}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="group cursor-pointer" 
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] shadow-2xl">
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />

                    {/* Minimalist Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px] z-30">
                      <div className="px-8 py-4 rounded-full bg-white text-[#011614] font-black text-[10px] uppercase tracking-widest shadow-2xl flex items-center gap-3 hover:bg-[#D4AF37] transition-colors">
                        <ImageIcon className="w-4 h-4" />
                        {isRtl ? 'عرض المزيد' : 'Show More'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <GalleryModal
        isOpen={!!selectedGallery}
        onClose={() => setSelectedGallery(null)}
        images={selectedGallery}
      />
    </section>
  );
};

export default Portfolio;
