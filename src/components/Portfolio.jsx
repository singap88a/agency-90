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

import { projectsData } from '../data/projectsData';

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const isRtl = i18n.dir() === 'rtl';

  // Show only featured projects (e.g., first 6)
  const featuredProjects = projectsData.slice(0, 8);

  const handleProjectClick = (project) => {
    if (project.type === 'video') {
      setSelectedVideo(project.videoUrl);
    } else {
      setSelectedGallery(project.images);
    }
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
               <div className="flex flex-col mb-10">
                 <span className="text-brand-accent font-black tracking-[0.4em] uppercase text-xs mb-4">
                   {isRtl ? 'الأعمال المتميزة' : 'Selected Projects'}
                 </span>
                 <h2 className="text-4xl lg:text-6xl font-black tracking-tighter text-brand-dark uppercase leading-none">
                   {isRtl ? 'رؤية فنية متميزة' : 'Artistic Excellence'}
                 </h2>
               </div>
               <p className="text-lg lg:text-xl text-brand-dark/50 font-medium leading-relaxed max-w-xl">
                 {isRtl 
                   ? 'نبتكر حلولاً بصرية متكاملة تعكس قوة علامتك التجارية في كل تفصيل.' 
                   : 'Crafting elite visual solutions that reflect your brand\'s power in every single detail.'}
               </p>
            </motion.div>

            <Link 
             to="/projects"
             className="group flex items-center gap-6 px-10 py-5 bg-brand-accent rounded-2xl hover:scale-[1.05] hover:shadow-[0_20px_40px_rgba(245,176,2,0.3)] transition-all duration-500 mb-4"
            >
               <span className="text-white font-black text-sm uppercase tracking-widest">
                 {isRtl ? 'عرض كل المشاريع' : 'View all projects'}
               </span>
               <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-500">
                 <ArrowUpRight className="w-5 h-5" />
               </div>
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
            loop={featuredProjects.length > 3}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full"
          >
            {featuredProjects.map((project, idx) => (
              <SwiperSlide key={project.id}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="group cursor-pointer" 
                  onClick={() => handleProjectClick(project)}
                >
                  <div className={`relative aspect-[3/4] rounded-2xl overflow-hidden border-2 ${project.type === 'video' ? 'border-brand-accent shadow-[0_0_20px_rgba(245,176,2,0.1)]' : 'border-brand-primary/20 hover:border-brand-primary'} shadow-xl transition-all duration-500 group-hover:shadow-2xl`}>
                    <img 
                      src={project.type === 'video' ? project.thumbnail : project.images[0]} 
                      alt={i18n.language === 'ar' ? project.title_ar : project.title_en} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      loading="lazy"
                    />

                    {/* Minimalist Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px] z-30">
                      <div className="px-8 py-4 rounded-full bg-white text-brand-dark font-black text-[10px] uppercase tracking-widest shadow-2xl flex items-center gap-3 hover:bg-brand-accent transition-colors">
                        {project.type === 'video' ? <Play className="w-4 h-4 fill-current" /> : <ImageIcon className="w-4 h-4" />}
                        {isRtl ? (project.type === 'video' ? 'تشغيل الفيديو' : 'عرض المزيد') : (project.type === 'video' ? 'Play Video' : 'Show More')}
                      </div>
                    </div>

                    {/* Video Indicator */}
                    {project.type === 'video' && (
                      <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-xl bg-brand-accent text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current" />
                      </div>
                    )}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo}
      />

      <GalleryModal
        isOpen={!!selectedGallery}
        onClose={() => setSelectedGallery(null)}
        images={selectedGallery}
      />
    </section>
  );
};

export default Portfolio;
