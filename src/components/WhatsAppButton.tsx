import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // Replace this with your actual WhatsApp number (include country code without + or spaces)
  const whatsappNumber = "+255759007977"; // Example: Nigeria number for BMHH
  const message = "welcome to BMHH Oil and Gas Logistics! How can we assist you today?";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <MessageCircle className="h-6 w-6" />
        
        {/* Small notification dot with pulse animation */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;