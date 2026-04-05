import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectDetail({ project, onBack }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { year, title, detailHeading, detailSections = {} } = project;
  const textImages = detailSections.text || [];
  const soloBigImages = detailSections.soloBig || [];
  const pairedImages = detailSections.paired || [];
  const displayTextImages = textImages.length > 0 ? textImages : [
    { id: 'overview', src: project.img, title: project.title, description: 'Placeholder overview description.' },
  ];

  return (
    <div className="w-full min-h-screen bg-white py-24 md:py-32 px-6 md:px-12 animate-[fadeIn_0.8s_ease-out] font-['Space_Grotesk']">
      {/* Container gecentreerd met mx-auto en tekst gecentreerd */}
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Navigatie gecentreerd */}
        <div className="flex justify-center">
          <button 
            onClick={onBack}
            className="group mb-16 text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-black transition-all flex items-center gap-2"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span> Back
          </button>
        </div>

        {/* Titel gecentreerd */}
        <header className="mb-24 flex flex-col items-center">
          <span className="text-[12px] uppercase tracking-[0.5em] text-gray-400 block mb-4">
            {year}
          </span>
          <h1 className="text-4xl md:text-7xl font-['Playfair_Display'] italic text-black leading-tight max-w-4xl">
            {detailHeading || title}
          </h1>
          <div className="w-24 h-[0.5px] bg-black/20 mt-12"></div>
        </header>

        {/* SECTIE 1: Beelden met tekst eronder gecentreerd */}
        <div className="space-y-48 mb-24">
          {displayTextImages.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-12">
              <div 
                className="cursor-zoom-in overflow-hidden bg-gray-50 w-full max-w-3xl mx-auto"
                onClick={() => setLightboxImage(item.src)}
              >
                <img src={item.src} alt={item.title} className="w-full h-auto hover:scale-[1.01] transition-transform duration-700" />
              </div>
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-sm uppercase tracking-[0.3em] font-bold mb-6">{item.title}</h3>
                {item.description ? (
                  <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* SECTIE 2: Andere grote beelden gecentreerd */}
        <div className="space-y-48 mb-48">
          {soloBigImages.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-6">
              <div 
                className="cursor-zoom-in overflow-hidden bg-gray-50 w-full max-w-3xl mx-auto"
                onClick={() => setLightboxImage(item.src)}
              >
                <img src={item.src} alt={item.title} className="w-full h-auto hover:scale-[1.01] transition-transform duration-700" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gray-300 text-center">{item.title}</span>
            </div>
          ))}
        </div>

        {/* SECTIE 3: De twee kleine beelden naast elkaar gecentreerd */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-black/5 pt-24 mb-32 max-w-4xl mx-auto">
          {pairedImages.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-4">
              <div 
                className="cursor-zoom-in overflow-hidden bg-gray-50 w-full"
                onClick={() => setLightboxImage(item.src)}
              >
                <img src={item.src} alt={item.title} className="w-full h-auto hover:scale-[1.02] transition-transform duration-700" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 text-center">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-[100] bg-white/98 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
          >
            <button className="absolute top-8 right-8 text-[10px] uppercase tracking-widest">Close ×</button>
            <motion.img 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={lightboxImage} 
              className="max-w-full max-h-[90vh] object-contain" 
              alt="Enlarged view"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}