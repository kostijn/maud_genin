import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export default function BA3Detail({ project, onBack }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const textImages = [
    { id: 'facade', src: './images/ba3/facade.webp', title: 'Facade Study', description: 'The site is the Rauwers Building on Stephenson Street, currently an industrial garage with a large empty plot of land.This area lies between two railway tracks, and beyond the tracks is Stephenson Park.' },
    { id: 'grand', src: './images/ba3/Grand dessin.webp', title: 'Grand Dessin', description: 'In my design, the diagonal view plays a central role. By creating stairs that slope diagonally and placing trees strategically, a strong visual line is formed that links d’Anethan Street with Stephenson Park.' },
  ];

  const plan = [
    { id: 'plan2', src: './images/ba3/nouveau plan 2 tweede versie.webp', title: 'Plan of the site', description: 'In the Rauwers Building, I lowered the ground to create space for a basketball court, which is directly connected to a newly designed café. The structure of the garage was preserved, with new columns added to accommodate the building’s new function. At the front of the building, I created a fitness room with a view of the basketball court. The building was also widened with a large, imposing façade to mark the new entrance, while providing space for administration, locker rooms, and a waiting area. In addition, a new building was added with the function of a theater, featuring another large, imposing entrance.' },
  ];
  const pairedPlans = [
    { id: 'p1', src: './images/ba3/plan 1.webp', title: 'Plan ground floor' },
    { id: 'p2', src: './images/ba3/plan 2.webp', title: 'Plan first floor' },
  ];
  const snede = [
    { id: 'snede', src: './images/ba3/rauwers snede.webp', title: 'Rauwers Snede' },
  ];
  const second = [
    { id: 'deuxiem', src: './images/ba3/Deuxiem dessin.webp', title: 'View from the fitness area' },
  ];

  const pairedImages = [
    { id: 'premier', src: './images/ba3/Premier dessin.webp', title: 'Premier Dessin' },
    { id: 'third', src: './images/ba3/Third.webp', title: 'Third' },
  ];

  const modelsTriple = [
    { id: "1", src: "./images/ba3/maquette/1.webp", title: "Model 1" },
    { id: "2", src: "./images/ba3/maquette/2.webp", title: "Model 2" },
    { id: "3", src: "./images/ba3/maquette/3.webp", title: "Model 3" },
    { id: "4", src: "./images/ba3/maquette/4.webp", title: "Model 4" },
    { id: "5", src: "./images/ba3/maquette/5.webp", title: "Model 5" },
    { id: "6", src: "./images/ba3/maquette/6.webp", title: "Model 6" },
    { id: "7", src: "./images/ba3/maquette/7.webp", title: "Model 4" },
    { id: "8", src: "./images/ba3/maquette/8.webp", title: "Model 5" },
    { id: "9", src: "./images/ba3/maquette/9.webp", title: "Model 6" },
  ];

  const modelsDouble = [
    { id: "10", src: "./images/ba3/maquette/10.webp", title: "Model Detail 1" },
    { id: "11", src: "./images/ba3/maquette/11.webp", title: "Model Detail 2" },
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
            Renovation
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
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-24 mb-24">
          {plan.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-4">
              <div
                className="cursor-zoom-in overflow-hidden bg-gray-50 w-full max-w-4xl mx-auto"
                onClick={() => setLightboxImage(item.src)}
              >
                <img src={item.src} alt={item.title} className="w-full h-auto hover:scale-[1.01] transition-transform duration-700" />
              </div>
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 text-center">
                  {item.title}
                </span>
                <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-24 mb-24 max-w-4xl mx-auto">
          {pairedPlans.map((item) => (
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
          {snede.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-6">
              <div
                className="cursor-zoom-in overflow-hidden bg-gray-50 w-full max-w-4xl mx-auto"
                onClick={() => setLightboxImage(item.src)}
              >
                <img src={item.src} alt={item.title} className="w-full h-auto hover:scale-[1.01] transition-transform duration-700" />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-24 mb-24">
          {second.map((item) => (
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
            </div>
          ))}
          <div className="md:col-span-2 max-w-4xl mx-auto text-center mb-12">
            <span className="text-[10px] uppercase tracking-widest text-gray-400">
              View from the café
            </span>
          </div>
        </div>


      </div>

      {/* --- MODELS SECTION --- */}
        <section className="pt-32 mb-32">
          <header className="mb-24 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] italic text-black mb-12">
              Models
            </h2>
            <div className="w-16 h-[0.5px] bg-black/20"></div>
          </header>

          {/* Row 1 & 2: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            {modelsTriple.map((item) => (
              <div key={item.id} className="flex flex-col items-center space-y-3">
                <div
                  className="cursor-zoom-in overflow-hidden bg-gray-50 w-full aspect-square md:aspect-[4/5]"
                  onClick={() => setLightboxImage(item.src)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {modelsDouble.map((item) => (
              <div key={item.id} className="flex flex-col items-center space-y-3">
                <div
                  className="cursor-zoom-in overflow-hidden bg-gray-50 w-full aspect-square md:aspect-[3/2]"
                  onClick={() => setLightboxImage(item.src)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

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