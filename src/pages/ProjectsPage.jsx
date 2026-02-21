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
            className="text-brand-accent font-bold tracking-widest text-xs mb-6"
          >
            Showcase
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold mb-12 tracking-tighter text-brand-dark"
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
                  ${filter === cat.id ? 'bg-brand-accent text-white shadow-[0_10px_30px_rgba(217,119,6,0.2)] scale-105' : 'text-brand-dark/40 hover:text-brand-dark hover:bg-black/5'}`}
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
                <div className={`relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-2 ${project.type === 'video' ? 'border-brand-accent shadow-[0_0_20px_rgba(245,176,2,0.1)]' : 'border-brand-primary/20 hover:border-brand-primary'} shadow-2xl transition-all duration-500 group-hover:shadow-brand-accent/20`}>
                  <img 
                    src={project.type === 'video' ? project.thumbnail : project.images[0]} 
                    alt={i18n.language === 'ar' ? project.title_ar : project.title_en} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-0 z-20 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="px-8 py-4 rounded-2xl bg-brand-accent text-white font-bold text-xs tracking-widest shadow-2xl flex items-center gap-3">
                      {project.type === 'video' ? <Play className="w-4 h-4 fill-current" /> : <ImageIcon className="w-4 h-4" />}
                      {project.type === 'video' ? (isRtl ? 'تشغيل الفيديو' : 'Watch Video') : (isRtl ? 'عرض المشـروع' : 'View Project')}
                    </div>
                  </div>

                  {project.type === 'video' ? (
                    <div className="absolute top-6 right-6 z-20 w-14 h-14 rounded-2xl bg-brand-accent flex items-center justify-center text-white shadow-xl transition-all duration-500 group-hover:scale-110">
                      <Play className="w-6 h-6 fill-current" />
                    </div>
                  ) : (
                    <div className="absolute top-6 right-6 z-20 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                  )}
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
