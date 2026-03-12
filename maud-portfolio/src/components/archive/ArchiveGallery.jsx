import { useState } from 'react';

export default function ArchiveGallery({ category, onBack }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  if (lightboxImage) {
    return (
      <div 
        className="fixed inset-0 z-50 bg-white/95 flex items-center justify-center p-4 cursor-zoom-out animate-[fadeIn_0.2s_ease-out]"
        onClick={() => setLightboxImage(null)}
      >
        <button 
          className="absolute top-6 right-8 text-3xl font-light text-gray-500 hover:text-black transition-colors cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          ×
        </button>
        <img 
          src={lightboxImage} 
          alt="Enlarged view" 
          className="max-w-full max-h-[90vh] object-contain shadow-2xl" 
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl animate-[fadeIn_0.5s_ease-out]">
      
      {/* Header van de galerij */}
      <div className="flex justify-between items-center mb-10">
        <button 
          onClick={onBack}
          className="cursor-pointer text-gray-400 hover:text-black text-xs uppercase tracking-widest transition-colors"
        >
          ← Back
        </button>
      </div>
      
      {/* OPGELOST: CSS Grid in plaats van Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.images.map((imgSrc, index) => (
          <div key={index} className="flex justify-center">
            <img 
              src={imgSrc} 
              alt={`${category.title} ${index + 1}`}
              className="cursor-zoom-in w-full h-auto object-cover cursor-pointer hover:opacity-80 transition-opacity duration-300"
              onClick={() => setLightboxImage(imgSrc)} 
            />
          </div>
        ))}
      </div>
      
    </div>
  );
}