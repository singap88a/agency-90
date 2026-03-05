import React from 'react';
import ReactDOM from 'react-dom';
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
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-white/95 backdrop-blur-3xl px-4 md:px-10 py-24"
        >
          {/* Main Slider */}
          <div
            className="w-full h-full max-w-7xl max-h-[90vh] relative flex flex-col items-center justify-center"
          >
            {/* Close Button - Positioned Outside Card Content */}
            <button
              onClick={onClose}
              className="absolute top-5 -right-4 md:-right-12 z-[100] w-12 h-12 rounded-2xl bg-brand-primary border border-white/20 flex items-center justify-center text-white hover:bg-brand-dark hover:scale-110 transition-all shadow-[0_15px_40px_rgba(var(--brand-primary-rgb),0.2)]"
            >
              <X className="w-6 h-6" />
            </button>
            <Swiper
              modules={[Navigation, Pagination, Zoom]}
              navigation={{
                nextEl: '.gallery-next',
                prevEl: '.gallery-prev',
              }}
              pagination={{ 
                type: 'fraction',
                renderFraction: (currentClass, totalClass) => {
                  return `<span class="px-6 py-2 rounded-full bg-brand-primary text-white font-black text-xs tracking-[0.2em] shadow-lg inline-flex items-center gap-2">
                    <span class="${currentClass}"></span> / <span class="${totalClass}"></span>
                  </span>`;
                },
                className: '!relative !mt-12 !bottom-0 !flex !justify-center !w-auto' 
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
                      className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-black/5"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            {images.length > 1 && (
              <>
                <button className="gallery-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full md:-translate-x-12 z-[100] w-14 h-14 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white transition-all group hidden md:flex backdrop-blur-md">
                  <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button className="gallery-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-full md:translate-x-12 z-[100] w-14 h-14 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white transition-all group hidden md:flex backdrop-blur-md">
                  <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export default GalleryModal;
