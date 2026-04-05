import { useState, useEffect } from 'react';

export default function ArchiveGallery({ category, onBack }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // Added py-32 to push it down from the top and min-h-screen to ensure it feels substantial
    <div className="w-full min-h-screen bg-white py-32 px-6 md:px-12 animate-[fadeIn_0.8s_ease-out]">
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="relative mb-16">
          <div className="flex justify-between items-end pb-4">
            
            {/* Top Left: Title using a more elegant font */}
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-2">Category</span>
              <h1 className="text-3xl md:text-5xl text-black">
                {category.title}
              </h1>
            </div>

            {/* Top Right: Back Button */}
            <button 
              onClick={onBack}
              className="text-[10px] uppercase tracking-[0.3em] text-gray-500 hover:text-black transition-all duration-300 border-b border-transparent hover:border-black pb-1"
            >
              Back to Archive
            </button>
          </div>

          {/* Thin, elegant architectural line */}
          <div className="w-full h-[0.5px] bg-black/20"></div>
        </div>

        {/* Image Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {category.images.map((imgSrc, index) => (
            <div 
              key={index} 
              className="break-inside-avoid group cursor-zoom-in relative"
              onClick={() => setLightboxImage(imgSrc)}
            >
              <img 
                src={imgSrc} 
                alt={`${category.title} ${index + 1}`}
                className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-1000 ease-in-out"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-white/98 backdrop-blur-md flex items-center justify-center p-6 md:p-20 cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <button className="absolute top-12 right-12 text-xl font-light tracking-widest uppercase">Close</button>
          <img 
            src={lightboxImage} 
            className="max-w-full max-h-[85vh] object-contain shadow-2xl" 
            alt="Enlarged" 
          />
        </div>
      )}
    </div>
  );
}