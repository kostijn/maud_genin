import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function BachelorThesis2022Detail({ project, onBack }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const soloBigImage = [
    {
      id: "model_study",
      src: "./images/grieving/facade_trimmed.jpeg",
      description:
        "The Grieving Border is a project that redefines the boundary between the Cemetery ofLaeken and the city.",
    },
  ];

  const pairedImages = [
    {
      id: "info",
      src: "./images/grieving/info.webp",
      title: "Context of the site",
    },
    {
      id: "info2",
      src: "./images/grieving/info2.webp",
      title: "Types of borders",
    },
  ];
  const soloBigImage2 = [
    {
      id: "schets",
      src: "./images/grieving/Schets.webp",
      title: "Cemetery",
      description:
        "I wanted to change the negative connotation of the cemetery by adding a touch of softness, creating a meditative path around it. A path where people can take time to grieve, reflect, or even make it part of a daily ritual. This is possible by opening up the back part of the cemetery, which is unused and lies in an ambiguous space between the cemetery and people’s gardens, or rather, between life and death. ",
    },
  ];
  const big = [
    {
      id: "big",
      src: "./images/grieving/big.webp",
      title: "Plan of the cemetery of Laeken 1:4000 ",
    },
  ];
  const tripledImages = [
    {
      id: "axo",
      src: "./images/grieving/axo.jpeg",
      title: "Axo",
    },
    {
      id: "perspectief",
      src: "./images/grieving/perspectief.jpeg",
      title: "Perspective",
    },
    {
      id: "mini",
      src: "./images/grieving/mini.jpeg",
      title: "Mini",
    },
  ];
  const bg = [
    {
      id: "bg",
      src: "./images/grieving/beaugosse.webp",
      title: "View from Rue des Artistes",
    },
  ];
  const axo2 = [
    {
      id: "axo2",
      src: "./images/grieving/axo2.webp",
      title: "Reference Palazzo San Felice",
      description:
        "I was inspired by the Palazzo San Felice, where multiple staircases let you choose your own route depending on whether you want to meet others or be alone a concept Iwanted to bring into my tower design.",
    },
  ];

  const paired2 = [
    {
      id: "path",
      src: "./images/grieving/path.webp",
      title: "Path",
    },
    {
      id: "built",
      src: "./images/grieving/built.webp",
      title: "Built environment",
    },
  ];

  const modelsTriple = [
    { id: "1", src: "./images/grieving/maquette/1.webp", title: "Model 1" },
    { id: "2", src: "./images/grieving/maquette/2.webp", title: "Model 2" },
    { id: "3", src: "./images/grieving/maquette/3.webp", title: "Model 3" },
    { id: "4", src: "./images/grieving/maquette/4.webp", title: "Model 4" },
    { id: "5", src: "./images/grieving/maquette/5.webp", title: "Model 5" },
    { id: "6", src: "./images/grieving/maquette/6.webp", title: "Model 6" },
  ];

  const modelsDouble = [
    {
      id: "7",
      src: "./images/grieving/maquette/7.webp",
      title: "Model Detail 1",
    },
    {
      id: "8",
      src: "./images/grieving/maquette/8.webp",
      title: "Model Detail 2",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white py-24 md:py-32 px-6 md:px-12 animate-[fadeIn_0.8s_ease-out] font-['Space_Grotesk']">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center">
          <button
            onClick={onBack}
            className="group mb-16 mt-16 text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-black transition-all flex items-center gap-2"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>{" "}
            Back
          </button>
        </div>

        <header className="mb-24 flex flex-col items-center">
          <span className="text-[12px] uppercase tracking-[0.5em] text-gray-400 block mb-4">
            {project.year}
          </span>
          <h1 className="text-4xl md:text-7xl font-['Playfair_Display'] italic text-black leading-tight max-w-4xl">
            The Grieving Border
          </h1>
          <div className="w-24 h-[0.5px] bg-black/20 mt-12"></div>
        </header>

        <div className="space-y-24 mb-24">
          {soloBigImage.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-4">
              <div
                className="cursor-zoom-in overflow-hidden bg-gray-50 w-full max-w-4xl mx-auto"
                onClick={() => setLightboxImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto hover:scale-[1.01] transition-transform duration-700"
                />
              </div>
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-sm uppercase tracking-[0.3em] font-bold mb-6">
                  {item.title}
                </h3>
                <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
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
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 text-center">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-24 mb-24">
          {soloBigImage2.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-4">
              <div
                className="cursor-zoom-in overflow-hidden bg-gray-50 w-full max-w-4xl mx-auto"
                onClick={() => setLightboxImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto hover:scale-[1.01] transition-transform duration-700"
                />
              </div>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg md:text-2xl text-gray-700 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-24 mb-24">
          {big.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-4">
              <div
                className="cursor-zoom-in overflow-hidden bg-gray-50 w-full max-w-4xl mx-auto"
                onClick={() => setLightboxImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto hover:scale-[1.01] transition-transform duration-700"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 text-center">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        <div className="mb-24">
          {/* 1. SINGLE DESCRIPTION ABOVE */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
              Wanting to give a new place to the urns at the back of the
              cemetery, which felt like forgotten objects, I placed them in a
              tower along the meditative path.
            </p>
          </div>

          {/* 2. THE GRID OF 3 IMAGES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {tripledImages.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center space-y-4"
              >
                <div
                  className="cursor-zoom-in overflow-hidden bg-gray-50 w-full"
                  onClick={() => setLightboxImage(item.src)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 3. SINGLE DESCRIPTION UNDERNEATH */}
          <div className="max-w-4xl mt-8 mx-auto text-center mb-12">
            <p className="text-lg md:text-2xl text-gray-700 font-light leading-relaxed">
              An 18-meter tower for urn placement connects street and cemetery,
              remaining accessible beyond opening hours, and is conceived as a
              vertical sequence of diverse rooms that accommodate diƯerent forms
              of grieving. These spaces allow visitors to mourn in ways that
              suit their personal needs whether in solitude, quiet
              contemplation, or shared remembrance
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-24 mb-24">
        {bg.map((item) => (
          <div key={item.id} className="flex flex-col items-center space-y-4">
            <div
              className="cursor-zoom-in overflow-hidden bg-gray-50 w-full max-w-4xl mx-auto"
              onClick={() => setLightboxImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto hover:scale-[1.01] transition-transform duration-700"
              />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 text-center">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-24 mb-24">
        {axo2.map((item) => (
          <div key={item.id} className="flex flex-col items-center space-y-4">
            <div
              className="cursor-zoom-in overflow-hidden bg-gray-50 w-full max-w-4xl mx-auto"
              onClick={() => setLightboxImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto hover:scale-[1.01] transition-transform duration-700"
              />
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

      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-black/5 pt-24 mb-24 max-w-4xl mx-auto">
          {paired2.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-4">
              <div
                className="cursor-zoom-in overflow-hidden bg-gray-50 w-full"
                onClick={() => setLightboxImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mt-8 mx-auto text-center mb-12">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 text-center">
            Reuse of cemetery elements
          </span>
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
            <button className="absolute top-8 right-8 text-[10px] uppercase tracking-widest">
              Close ×
            </button>
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
