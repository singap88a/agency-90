import React from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

const GalleryModal = ({ isOpen, onClose, images, initialSlide = 0 }) => {
  if (!images || images.length === 0) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/95 backdrop-blur-3xl px-4 md:px-20 py-20"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-[10000] w-12 h-12 rounded-full bg-black/10 border border-black/5 flex items-center justify-center text-brand-dark hover:bg-brand-accent hover:text-white transition-all shadow-sm"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Main Slider */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full h-full max-w-5xl max-h-[80vh] relative flex items-center justify-center"
          >
            <Swiper
              modules={[Navigation, Pagination, Zoom]}
              navigation={{
                nextEl: '.gallery-next',
                prevEl: '.gallery-prev',
              }}
              pagination={{ 
                type: 'fraction',
                className: '!text-brand-dark/40 !font-black !tracking-[0.5em] !text-xs !bottom-[-40px]' 
              }}
              zoom={true}
              initialSlide={initialSlide}
              className="w-full h-full"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center overflow-hidden">
                  <div className="swiper-zoom-container">
                    <img
                      src={img}
                      alt={`Gallery view ${index + 1}`}
                      className="max-w-full max-h-full object-contain rounded-[2rem] shadow-2xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            {images.length > 1 && (
              <>
                <button className="gallery-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full md:-translate-x-20 z-[10000] w-16 h-16 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center text-brand-dark hover:bg-brand-accent hover:text-white transition-all group hidden md:flex">
                  <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button className="gallery-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-full md:translate-x-20 z-[10000] w-16 h-16 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center text-brand-dark hover:bg-brand-accent hover:text-white transition-all group hidden md:flex">
                  <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default GalleryModal;
