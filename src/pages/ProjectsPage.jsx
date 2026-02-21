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

const ProjectsPage = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const isRtl = i18n.dir() === 'rtl';

  const categories = [
    { id: 'all', icon: LayoutGrid, label: isRtl ? 'الكل' : 'All' },
    { id: 'design', icon: Box, label: t('services.design') },
    { id: 'marketing', icon: Share2, label: t('services.marketing') },
    { id: 'videos', icon: Play, label: t('services.videos') }
  ];

  const projects = [
    { 
      id: 1, 
      category: 'design', 
      type: 'image', 
      title: isRtl ? 'هوية فخمة' : 'Luxury Identity', 
      images: [
        'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1572044162444-ad60f128bde3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'
      ]
    },
    { 
      id: 2, 
      category: 'marketing', 
      type: 'image', 
      title: isRtl ? 'نمو رقمي' : 'Digital Growth', 
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1454165833767-131438959539?auto=format&fit=crop&w=800&q=80'
      ]
    },
    { 
      id: 3, 
      category: 'videos', 
      type: 'video', 
      title: isRtl ? 'قصة منتج' : 'Product Story', 
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      images: [
        'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80'
      ] 
    },
    { 
      id: 6, 
      category: 'videos', 
      type: 'video', 
      title: isRtl ? 'فعالية سينمائية' : 'Cinematic Event', 
      videoUrl: 'https://player.vimeo.com/video/146022717',
      images: [
        'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
      ] 
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

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
            className="text-brand-accent font-black tracking-[0.5em] uppercase text-xs mb-6"
          >
            Showcase
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-12 tracking-tighter text-brand-dark"
          >
            {t('nav.portfolio')}
          </motion.h1>
          
          {/* Enhanced Filter Visibility */}
          <div className="flex flex-wrap justify-center gap-4 bg-white/70 backdrop-blur-xl p-3 rounded-[2rem] border border-black/5 max-w-2xl mx-auto shadow-xl sticky top-24 z-50">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-8 py-4 rounded-2xl transition-all text-xs font-black tracking-[0.1em] uppercase flex items-center gap-3
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
                {/* Project Image Slider - Reduced roundness */}
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] shadow-2xl">
                  {project.type === 'video' ? (
                     <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                  ) : (
                    <Swiper
                      modules={[Autoplay]}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      className="w-full h-full pointer-events-none"
                      loop={project.images.length > 1}
                    >
                      {project.images.map((img, i) => (
                        <SwiperSlide key={i}>
                          <img src={img} alt={project.title} className="w-full h-full object-cover" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                  
                  {/* Minimalist Show More Button on Hover */}
                  <div className="absolute inset-0 z-20 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="px-8 py-4 rounded-2xl bg-brand-accent text-white font-black text-xs uppercase tracking-widest shadow-2xl flex items-center gap-3">
                      {project.type === 'video' ? <Play className="w-4 h-4 fill-current" /> : <ImageIcon className="w-4 h-4" />}
                      {project.type === 'video' ? (isRtl ? 'مشاهدة الفيديو' : 'Watch Video') : (isRtl ? 'عرض المزيد' : 'Show More')}
                    </div>
                  </div>

                  {project.type === 'video' && (
                    <div className="absolute top-6 right-6 z-20 w-12 h-12 rounded-xl bg-black/10 backdrop-blur-xl border border-black/5 flex items-center justify-center text-white group-hover:opacity-0 transition-opacity">
                      <Play className="w-5 h-5 fill-current" />
                    </div>
                  )}
                </div>
                
                {/* Info Below Image */}
                <div className="px-2 pb-2 text-center md:text-start">
                   <h3 className="text-2xl font-black text-brand-dark tracking-tight group-hover:text-brand-accent transition-colors uppercase">
                      {project.title}
                   </h3>
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
