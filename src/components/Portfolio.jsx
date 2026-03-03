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
    <section id="portfolio" className="relative py-12 overflow-hidden md:py-16">
      <style>{swiperStyles}</style>

      <div className="container relative px-6 mx-auto lg:px-24">

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
            <h2 className="text-3xl font-bold tracking-tighter text-brand-secondary md:text-5xl">
              {isRtl ? (
                <>
                  أعمالنا{' '}
                  <span className="text-brand-primary to-brand-primary/60 bg-clip-text">
                    الإبداعية
                  </span>
                </>
              ) : (
                <>
                  Our{' '}
                  <span className="text-brand-primary to-brand-primary/60 bg-clip-text">
                    Creative Work
                  </span>
                </>
              )}
            </h2>

            {/* Subtitle */}
            <p className="max-w-sm text-sm font-medium leading-relaxed text-gray-500 md:text-base">
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
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-12" />
            </Link>
          </div>

 
        </motion.div>

        {/* ── Swiper: pure image cards with highly professional bottom overlay ── */}
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
                  className="relative aspect-[3/4] rounded-[2rem] overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl hover:shadow-brand-primary/20 transition-all duration-700 border border-brand-primary/10 hover:border-brand-primary/50"
                >
                  {/* Image */}
                  <img
                    src={project.type === 'video' ? project.thumbnail : project.images[0]}
                    alt={i18n.language === 'ar' ? project.title_ar : project.title_en}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Professional Bottom Gradient Filter */}
                  <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top Right/Left Floating Action Badge */}
                  <div className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} z-20 flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full shadow-lg group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-500 group-hover:scale-110`}>
                    {project.type === 'video' ? (
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    ) : (
                      <ImageIcon className="w-4 h-4" />
                    )}
                  </div>

                  {/* Bottom Content Overlay - Title & Description */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 will-change-transform">
                    {/* Category Label */}
                    <motion.div 
                      className="flex items-center gap-2 mb-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                      <span className="text-[11px] font-bold tracking-[0.2em] text-brand-primary uppercase">
                        {t(`services.${project.category}`)}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-white text-2xl font-bold tracking-tight leading-tight mb-2 drop-shadow-lg">
                      {i18n.language === 'ar' ? project.title_ar : project.title_en}
                    </h3>
                    
                    {/* Subtle line separator */}
                    <div className="w-8 h-[2px] bg-brand-primary/50 mb-3 group-hover:w-16 group-hover:bg-brand-primary transition-all duration-500" />

                    {/* Description Details (Revealed on Hover) */}
                    <div className="overflow-hidden">
                      <p className="text-gray-300 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 line-clamp-2">
                        {isRtl 
                          ? 'استكشف تفاصيل هذا المشروع الإبداعي وتأثيراته البصرية الرائعة التي تعكس رؤية النخبة.'
                          : 'Explore the details of this creative project showcasing elite visual impact.'}
                      </p>
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
