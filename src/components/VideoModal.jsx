import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  // Ensure YouTube URL is in embed format
  const getEmbedUrl = (url) => {
    if (!url) return "";
    let videoId = "";
    if (url.includes("shorts/")) {
      videoId = url.split("shorts/")[1]?.split("?")[0];
    } else if (url.includes("v=")) {
      videoId = url.split("v=")[1]?.split("&")[0];
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0];
    } else if (url.includes("embed/")) {
      return url;
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] flex items-center justify-center pt-20 bg-white/95 backdrop-blur-3xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-5xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - Outside the overflow-hidden container */}
          <button
            onClick={onClose}
            className="absolute -top-14 -right-2 md:top-4 md:-right-16 z-[110] w-12 h-12 rounded-2xl bg-brand-accent border border-white/20 flex items-center justify-center text-white hover:bg-brand-dark hover:scale-110 transition-all shadow-xl shadow-brand-accent/20"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl border border-black/5 flex items-center justify-center">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/40 font-black uppercase tracking-widest text-xs">
                Invalid Video URL
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;
