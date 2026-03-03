import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, LayoutGrid, Share2, Play, Image as ImageIcon, Box, ChevronRight, ChevronLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import VideoModal from '../components/VideoModal';
import GalleryModal from '../components/GalleryModal';

import { projectsData } from '../data/projectsData';

const ProjectsPage = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const isRtl = i18n.dir() === 'rtl';

  const categories = [
    { id: 'all', icon: LayoutGrid, label: isRtl ? 'الكل' : 'All' },
    { id: 'design', icon: Box, label: isRtl ? 'تصاميم إبداعية' : 'Creative Design' },
    { id: 'marketing', icon: Share2, label: isRtl ? 'سوشيال ميديا' : 'Social Media' },
    { id: 'videos', icon: Play, label: isRtl ? 'فيديوهات تسويقية' : 'Marketing Videos' }
  ];

  const filteredProjects = filter === 'all' ? projectsData : projectsData.filter(p => p.category === filter);

  const handleProjectClick = (project) => {
    if (project.type === 'video') {
      setSelectedVideo(project.videoUrl);
    } else {
      setSelectedGallery(project.images);
    }
  };

  return (
    <div className="pt-40 pb-24 min-h-screen">
      {/* Container spacing fixed to match Navbar/Footer */}
      <div className="max-w-7xl mx-auto px-6  ">
        <div className="text-center mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-primary font-bold tracking-widest text-xs mb-6"
          >
            Showcase
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold mb-12 tracking-tighter text-brand-primary"
          >
            {t('nav.portfolio')}
          </motion.h1>
          
          {/* Enhanced Filter Visibility */}
          <div className="flex flex-wrap justify-center gap-4 bg-white/70 backdrop-blur-xl p-3 rounded-[2rem] border border-black/5 max-w-3xl mx-auto shadow-xl sticky top-24 z-50">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 md:px-8 py-3 md:py-4 rounded-2xl transition-all text-[10px] md:text-xs font-bold tracking-widest flex items-center gap-3
                  ${filter === cat.id ? 'bg-brand-primary text-white shadow-[0_10px_30px_rgba(var(--brand-primary-rgb),0.2)] scale-105' : 'text-brand-dark/40 hover:text-brand-dark hover:bg-black/5'}`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
                className="flex flex-col gap-6 group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className={`relative aspect-[4/5] rounded-[2.5rem] overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl hover:shadow-brand-primary/20 transition-all duration-700 border-2 ${project.type === 'video' ? 'border-brand-primary/50' : 'border-brand-primary/10 hover:border-brand-primary/50'}`}>
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
                  <div className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} z-20 flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl shadow-lg group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-500 group-hover:scale-110`}>
                    {project.type === 'video' ? (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    ) : (
                      <ImageIcon className="w-5 h-5" />
                    )}
                  </div>

                  {/* Bottom Content Overlay - Title & Description */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-8 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 will-change-transform">
                    {/* Category Label */}
                    <motion.div 
                      className="flex items-center gap-2 mb-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                      <span className="text-xs font-bold tracking-[0.2em] text-brand-primary uppercase">
                        {t(`services.${project.category}`)}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-white text-2xl lg:text-3xl font-bold tracking-tight leading-tight mb-3 drop-shadow-lg">
                      {i18n.language === 'ar' ? project.title_ar : project.title_en}
                    </h3>
                    
                    {/* Subtle line separator */}
                    <div className="w-10 h-[2px] bg-brand-primary/50 mb-4 group-hover:w-20 group-hover:bg-brand-primary transition-all duration-500" />

                    {/* Description Details (Revealed on Hover) */}
                    <div className="overflow-hidden">
                      <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 line-clamp-2">
                        {isRtl 
                          ? 'استكشف تفاصيل هذا المشروع الإبداعي وتأثيراته البصرية الرائعة التي تعكس رؤية النخبة.'
                          : 'Explore the details of this creative project showcasing elite visual impact.'}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
    </div>
  );
};

export default ProjectsPage;
