import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BA3Detail({ project, onBack }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const textImages = [
    { id: 'facade', src: './images/ba3/facade.png', title: 'Facade Study', description: 'Placeholder description for the facade study.' },
    { id: 'grand', src: './images/ba3/Grand dessin.png', title: 'Grand Dessin', description: 'Placeholder description for the grand dessin.' },
  ];
  const soloBigImages = [
    { id: 'plan2', src: './images/ba3/nouveau plan 2 tweede versie.png', title: 'Nouveau Plan 2' },
    { id: 'plan3', src: './images/ba3/ontwerpen_3.png', title: 'Ontwerpen 3 Plan 3' },
    { id: 'snede', src: './images/ba3/rauwers snede.png', title: 'Rauwers Snede' },
    { id: 'deuxiem', src: './images/ba3/Deuxiem dessin.png', title: 'Deuxieme Dessin' },
  ];

  const pairedImages = [
    { id: 'premier', src: './images/ba3/Premier dessin.png', title: 'Premier Dessin' },
    { id: 'third', src: './images/ba3/Third.png', title: 'Third' },
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
            Renovation of the Rauwers Building
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

        <div className="space-y-24 mb-24">
          {soloBigImages.map((item) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-24 mb-24 max-w-4xl mx-auto">
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