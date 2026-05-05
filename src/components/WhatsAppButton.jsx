import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { cn } from '../lib/utils';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/962788040051', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "fixed bottom-10 left-8 z-[999] p-3 bg-green-500 text-white rounded-full shadow-2xl shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-pulse"
      )}
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;