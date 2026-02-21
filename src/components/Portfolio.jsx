import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Play, ImageIcon, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import VideoModal from './VideoModal';
import GalleryModal from './GalleryModal';
import { cn } from '../lib/utils';
import { projectsData } from '../data/projectsData';

// Same dynamic pagination style as AboutTestimonials
const swiperStyles = `
  .portfolio-swiper .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
  .portfolio-swiper .swiper-pagination-bullet {
    width: 30px !important;
    height: 4px !important;
    border-radius: 2px !important;
    background: #fbbf24 !important;
    opacity: 0.2 !important;
    transition: all 0.3s ease !important;
    margin: 0 !important;
  }
  .portfolio-swiper .swiper-pagination-bullet-active {
    opacity: 1 !important;
    width: 50px !important;
  }
  .portfolio-swiper .swiper-pagination-bullet-active-main {
    opacity: 1 !important;
    width: 50px !important;
  }
  .portfolio-swiper .swiper-pagination-bullet-active-prev,
  .portfolio-swiper .swiper-pagination-bullet-active-next {
    opacity: 0.5 !important;
    width: 35px !important;
  }
  .portfolio-swiper .swiper-pagination-bullet-active-prev-prev,
  .portfolio-swiper .swiper-pagination-bullet-active-next-next {
    opacity: 0.2 !important;
    width: 20px !important;
  }
`;

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const isRtl = i18n.dir() === 'rtl';

  const featuredProjects = projectsData.slice(0, 9);

  const handleProjectClick = (project) => {
    if (project.type === 'video') {
      setSelectedVideo(project.videoUrl);
    } else {
      setSelectedGallery(project.images);
    }
  };

  return (
    <section id="portfolio" className="relative py-12 md:py-16 overflow-hidden">
      <style>{swiperStyles}</style>

      <div className="container mx-auto px-6 lg:px-24 relative">

        {/*
          ── Split Header ──
          Button is the FIRST child → appears at the "start" edge.
          Text block is the SECOND child → appears at the "end" edge.
          RTL: start = right, end = left.
          LTR: start = left, end = right.
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between gap-8 mb-16"
        >
                   {/* ── Text block (end side) ── */}
          <div className={cn("flex flex-col gap-3", isRtl ? "text-start items-start" : "text-left items-start")}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-primary/20 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-primary animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-brand-primary">
                {isRtl ? 'الأعمال المتميزة' : 'Selected Projects'}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tighter">
              {isRtl ? (
                <>
                  أعمالنا{' '}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent">
                    الإبداعية
                  </span>
                </>
              ) : (
                <>
                  Our{' '}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent">
                    Creative Work
                  </span>
                </>
              )}
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 text-sm md:text-base font-medium max-w-sm leading-relaxed">
              {isRtl
                ? 'نبتكر حلولاً بصرية تعكس قوة علامتك التجارية في كل تفصيل'
                : "Crafting elite visual solutions that reflect your brand's power in every detail"}
            </p>
          </div>
          {/* ── Button (start side) ── */}
          <div className="shrink-0">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-brand-primary text-white rounded-2xl hover:bg-brand-primary/90 transition-all duration-300 font-bold text-sm shadow-lg shadow-brand-primary/20"
            >
              <span>{isRtl ? 'كل المشاريع' : 'All Projects'}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>

 
        </motion.div>

        {/* ── Swiper: pure image cards, no overlay, thinner border ── */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 3 }}
            loop={featuredProjects.length > 3}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            dir={isRtl ? 'rtl' : 'ltr'}
            key={isRtl ? 'rtl' : 'ltr'}
            className="portfolio-swiper !pb-16"
          >
            {featuredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <div
                  onClick={() => handleProjectClick(project)}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group border border-brand-primary/60 shadow-sm hover:shadow-lg hover:border-brand-primary transition-all duration-500"
                >
                  {/* Image */}
                  <img
                    src={project.type === 'video' ? project.thumbnail : project.images[0]}
                    alt={i18n.language === 'ar' ? project.title_ar : project.title_en}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Subtle bottom gradient filter */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none z-10" />

                  {/* Video badge */}
                  {project.type === 'video' && (
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-xl bg-brand-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-20">
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </div>
                  )}

                  {/* Hover overlay with action text */}
                  <div className="absolute inset-0 bg-brand-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 backdrop-blur-[1px]">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        {project.type === 'video'
                          ? <Play className="w-5 h-5 text-brand-primary fill-current" />
                          : <ImageIcon className="w-5 h-5 text-brand-primary" />}
                      </div>
                      <span className="text-white font-bold text-xs tracking-widest">
                        {project.type === 'video'
                          ? (isRtl ? 'تشغيل الفيديو' : 'Play Video')
                          : (isRtl ? 'عرض الصور' : 'View Photos')}
                      </span>
                    </div>
                  </div>
                </div>
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
