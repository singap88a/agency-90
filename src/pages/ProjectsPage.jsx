import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, LayoutGrid, Share2, Play, Image as ImageIcon, Box, ChevronRight, ChevronLeft, Globe } from 'lucide-react';
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
    { id: 'websites', icon: Globe, label: isRtl ? 'مواقع إلكترونية' : 'Websites' },
    { id: 'design', icon: Box, label: isRtl ? 'تصاميم إبداعية' : 'Creative Design' },
    { id: 'marketing', icon: Share2, label: isRtl ? 'سوشيال ميديا' : 'Social Media' },
    { id: 'videos', icon: Play, label: isRtl ? 'فيديوهات تسويقية' : 'Marketing Videos' }
  ];

  const INITIAL_COUNT = 9;
  const LOAD_MORE = 9;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const filteredProjects = filter === 'all' ? projectsData : projectsData.filter(p => p.category === filter);
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleFilterChange = (id) => {
    setFilter(id);
    setVisibleCount(INITIAL_COUNT);
  };

  const handleProjectClick = (project) => {
    if (project.type === 'video') {
      setSelectedVideo(project.videoUrl);
    } else if (project.type === 'website') {
      window.open(project.url, '_blank');
    } else {
      setSelectedGallery(project.images);
    }
  };

  return (
    <div className="pt-40 pb-24 min-h-screen">
      {/* Container spacing fixed to match Navbar/Footer */}
      <div className="max-w-7xl mx-auto px-6  ">
        <div className="text-center mb-20 relative z-10">
          <div
            className="text-brand-primary font-bold tracking-widest text-xs mb-6"
          >
            Showcase
          </div>
          <h1 
            className="text-6xl md:text-8xl font-bold mb-12 tracking-tighter text-brand-primary"
          >
            {t('nav.portfolio')}
          </h1>
          
          {/* Professional Pill Dashboard Filter */}
          <div className="flex flex-nowrap overflow-x-auto hide-scrollbar justify-start md:justify-center gap-1.5 md:gap-2 bg-white/95 backdrop-blur-2xl p-1.5 rounded-full border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-fit max-w-[95%] md:max-w-5xl mx-auto sticky top-28 z-50">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilterChange(cat.id)}
                className={`px-5 md:px-6 py-2.5 rounded-full transition-all duration-300 text-[11px] md:text-[12px] font-bold tracking-wide flex items-center gap-2 whitespace-nowrap select-none flex-shrink-0
                  ${filter === cat.id 
                    ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/20' 
                    : 'text-slate-500 hover:text-brand-dark hover:bg-slate-50'}`}
              >
                <cat.icon className={`w-4 h-4 transition-colors ${filter === cat.id ? 'text-white' : 'text-slate-400'}`} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filteredProjects.length === 0 ? (
            <div className="col-span-3 text-center text-gray-400 py-20 text-lg">No projects found.</div>
          ) : visibleProjects.map((project, idx) => (
              <div
                key={project.id}
                className="flex flex-col gap-6 group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className={`relative aspect-[4/5] rounded-[2.5rem] overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl hover:shadow-brand-primary/30 transition-all duration-500 border-2 ${project.type === 'video' ? 'border-brand-primary' : 'border-transparent hover:border-brand-primary'}`}>
                  {/* Image */}
                  <img 
                    src={project.type === 'video' ? project.thumbnail : project.images[0]} 
                    alt={i18n.language === 'ar' ? project.title_ar : project.title_en} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                    loading="lazy"
                  />
                  
                  {/* Professional Bottom Gradient Filter */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none h-3/4 bg-gradient-to-t from-[#7652A4]/90 via-[#7652A4]/50 to-transparent" />

                  {/* Top Right/Left Floating Action Badge */}
                  <div className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} z-20 flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 text-brand-primary rounded-2xl shadow-lg group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-500 group-hover:scale-110`}>
                    {project.type === 'video' ? (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    ) : project.type === 'website' ? (
                      <Globe className="w-5 h-5" />
                    ) : (
                      <ImageIcon className="w-5 h-5" />
                    )}
                  </div>

                  {/* Bottom Content Overlay - Title & Description */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-8 flex flex-col justify-end transition-transform duration-500 will-change-transform">
                    {/* Category Label */}
                    <div 
                      className="flex items-center gap-2 mb-3 transition-opacity duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                      <span className="text-xs font-bold tracking-[0.2em] text-brand-primary uppercase">
                        {t(`services.${project.category}`)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white group-hover:text-brand-primary text-2xl lg:text-3xl font-bold tracking-tight leading-tight mb-3 drop-shadow-lg transition-colors duration-300">
                      {i18n.language === 'ar' ? project.title_ar : project.title_en}
                    </h3>
                    
                    {/* Subtle line separator */}
                    <div className="w-20 h-[2px] bg-brand-primary mb-4 transition-all duration-500" />

                    {/* Description Details */}
                    <div className="overflow-hidden">
                      <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed transition-all duration-500 line-clamp-2">
                        {isRtl ? project.desc_ar : project.desc_en}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Show More / Show Less Buttons */}
        <div className="relative z-30 flex justify-center gap-6 mt-20 mb-10">
          {hasMore && (
            <button
              onClick={() => setVisibleCount(prev => prev + LOAD_MORE)}
              className="px-12 py-5 rounded-2xl bg-[#F09238] text-white font-extrabold text-sm uppercase tracking-widest shadow-[0_15px_30px_rgba(240,146,56,0.3)] hover:shadow-[0_20px_40px_rgba(240,146,56,0.5)] transition-all duration-300 pointer-events-auto"
            >
              {isRtl ? 'عرض المزيد من الأعمال' : 'Show More Projects'}
            </button>
          )}
          {visibleCount > INITIAL_COUNT && (
            <button
              onClick={() => setVisibleCount(INITIAL_COUNT)}
              className="px-12 py-5 rounded-2xl border-2 border-[#F09238] text-[#F09238] font-extrabold text-sm uppercase tracking-widest hover:bg-[#F09238] hover:text-white transition-all duration-300"
            >
              {isRtl ? 'عرض أقل' : 'Show Less'}
            </button>
          )}
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
    </div>
  );
};

export default ProjectsPage;
