import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BachelorThesis2025Detail({ project, onBack }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const textImages = [
    { id: 'snede', src: './images/bachproef/snede.png', title: 'Snede', description: 'Placeholder description for Snede.' },
    { id: 'charbon', src: './images/bachproef/charbon.png', title: 'Charbon', description: 'Placeholder description for Charbon.' },
    { id: 'schets_upper', src: './images/bachproef/schets_upper.png', title: 'Schets Upper', description: 'Placeholder description for Schets Upper.' },
  ];

  const soloWithoutDesc = [
    { id: 'schets_lower', src: './images/bachproef/schets_lower.png', title: 'Schets Lower'},
  ];

  const pairedImages = [
    { id: 'before', src: './images/bachproef/before.png', title: 'Before Changes' },
    { id: 'after', src: './images/bachproef/after.png', title: 'After Changes' },
  ];

  const axoWithDesc = [
    { id: 'axo', src: './images/bachproef/axo.png', title: 'Axo', description: 'Placeholder description for Axo.' },
  ];

  const zoomWithoutDesc = [
    { id: 'zoom', src: './images/bachproef/zoom.png', title: 'Zoom' },
  ];

  const miniImages = [
    { id: 'mini', src: './images/bachproef/mini.png', title: 'Mini' },
    { id: 'mini2', src: './images/bachproef/mini2.png', title: 'Mini 2' },
  ];

  const flowerImage = [
    { id: 'flower', src: './images/bachproef/flower.png', title: 'Flower' },
  ];

  return (
    <div className="w-full min-h-screen bg-white py-24 md:py-32 px-6 md:px-12 animate-[fadeIn_0.8s_ease-out] font-['Space_Grotesk']">
      <div className="max-w-5xl mx-auto text-center">

        <div className="flex justify-center">
          <button
            onClick={onBack}
            className="group mb-16 mt-16 text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-black transition-all flex items-center gap-2"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span> Back
          </button>
        </div>

        <header className="mb-24 flex flex-col items-center">
          <span className="text-[12px] uppercase tracking-[0.5em] text-gray-400 block mb-4">
            {project.year}
          </span>
          <h1 className="text-4xl md:text-7xl font-['Playfair_Display'] italic text-black leading-tight max-w-4xl">
            A Brussels Utopia
          </h1>
          <div className="w-24 h-[0.5px] bg-black/20 mt-12"></div>
        </header>

        <div className="space-y-24 mb-24">
          {textImages.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-4">
              <div
                className="cursor-zoom-in overflow-hidden bg-gray-50 w-full max-w-4xl mx-auto"
                onClick={() => setLightboxImage(item.src)}
              >
                <img src={item.src} alt={item.title} className="w-full h-auto hover:scale-[1.01] transition-transform duration-700" />
              </div>
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-sm uppercase tracking-[0.3em] font-bold mb-6">{item.title}</h3>
                <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-48 mb-24">
          {soloWithoutDesc.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-6">
              <div
                className="cursor-zoom-in overflow-hidden bg-gray-50 w-full max-w-4xl mx-auto"
                onClick={() => setLightboxImage(item.src)}
              >
                <img src={item.src} alt={item.title} className="w-full h-auto hover:scale-[1.01] transition-transform duration-700" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gray-300 text-center">{item.title}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-black/5 pt-24 mb-24 max-w-4xl mx-auto">
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

        <div className="space-y-24 mb-24">
          {axoWithDesc.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-4">
              <div
                className="cursor-zoom-in overflow-hidden bg-gray-50 w-full max-w-4xl mx-auto"
                onClick={() => setLightboxImage(item.src)}
              >
                <img src={item.src} alt={item.title} className="w-full h-auto hover:scale-[1.01] transition-transform duration-700" />
              </div>
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-sm uppercase tracking-[0.3em] font-bold mb-6">{item.title}</h3>
                <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-24 mb-24">
          {zoomWithoutDesc.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-4">
              <div
                className="cursor-zoom-in overflow-hidden w-full max-w-4xl mx-auto"
                onClick={() => setLightboxImage(item.src)}
              >
                <img src={item.src} alt={item.title} className="w-full h-auto hover:scale-[1.01] transition-transform duration-700" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gray-300 text-center">{item.title}</span>
            </div>
          ))}
        </div>

        <div className="space-y-24 mb-24">
          {miniImages.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-6">
              <div
                className="cursor-zoom-in overflow-hidden bg-gray-50 w-full max-w-4xl mx-auto"
                onClick={() => setLightboxImage(item.src)}
              >
                <img src={item.src} alt={item.title} className="w-full h-auto hover:scale-[1.01] transition-transform duration-700" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gray-300 text-center">{item.title}</span>
            </div>
          ))}
        </div>

        <div className="space-y-24 mb-48">
          {flowerImage.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-6">
              <div
                className="cursor-zoom-in overflow-hidden bg-gray-50 w-full max-w-4xl mx-auto"
                onClick={() => setLightboxImage(item.src)}
              >
                <img src={item.src} alt={item.title} className="w-full h-auto hover:scale-[1.01] transition-transform duration-700" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gray-300 text-center">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

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