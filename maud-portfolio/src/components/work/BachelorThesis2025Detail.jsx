import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function BachelorThesis2025Detail({ project, onBack }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const textImages = [
    {
      id: "snede",
      src: "./images/bachproef/new.webp",
      title: "Snede",
      description:
        "The Elevated Park in Brussels, near Portes de Ninove, transforms a previously paved area into a raised green space with panoramic views. It provides much-needed access to nature and leisure in a neighborhood that previously lacked parks.",
    },
    { id: "charbon", src: "./images/bachproef/charbon.webp", title: "Charbon" },
  ];

  const soloWithoutDesc = [
    {
      id: "schets_upper",
      src: "./images/bachproef/schets_upper.png",
      title: "Schets Upper",
      description:
        "The whole is made up of several layers woven together, creating a play of tension and disorientation where visitors can lose themselves.",
    },
    {
      id: "schets_lower",
      src: "./images/bachproef/schets_lower.png",
      title: "Schets Lower",
      description:
        "Are you on the roof, the walls, or the floor? Moving up or down? At times, it can feel like you lose your sense of orientation, giving the park a feeling of infinity and discovery.",
    },
  ];

  const pairedImages = [
    {
      id: "before",
      src: "./images/bachproef/before.webp",
      title: "Before Changes",
    },
    {
      id: "after",
      src: "./images/bachproef/after.webp",
      title: "After Changes",
    },
  ];

  const axoWithDesc = [
    {
      id: "axo",
      src: "./images/bachproef/axo.webp",
      title: "Housing axonometry",
      description:
        "The housing is spread across the structure, creating unique spaces that serve as shelters, similar to a bird building its nest in a tree. Some spaces have walls so thick that you feel like a butterfly in a cocoon, enveloped in safety, where only your heartbeat can be heard. The design also includes areas for greenery, and by varying wall thicknesses and how light enters each space, the sheltered zones develop distinct microclimates, creating a variety of atmospheres where visitors can feel diƯerent moods, from cool and shaded to warm and sunlit.",
    },
  ];

  const zoomWithoutDesc = [
    {
      id: "zoom",
      src: "./images/bachproef/zoom.webp",
      title: "Plan of a housing",
    },
  ];

  const miniImages = [
    { id: "mini", src: "./images/bachproef/mini.webp", title: "Mini" },
  ];

  const miniImages2 = [
    { id: "mini2", src: "./images/bachproef/mini2.webp", title: "Mini 2" },
  ];

  const flowerImage = [
    { id: "flower", src: "./images/bachproef/flower.webp", title: "Flower" },
  ];

  const modelsTriple = [
    { id: "1", src: "./images/bachproef/maquette/1.webp", title: "Model 1" },
    { id: "2", src: "./images/bachproef/maquette/2.webp", title: "Model 2" },
    { id: "3", src: "./images/bachproef/maquette/3.webp", title: "Model 3" },
    { id: "4", src: "./images/bachproef/maquette/4.webp", title: "Model 4" },
    { id: "5", src: "./images/bachproef/maquette/5.webp", title: "Model 5" },
    { id: "6", src: "./images/bachproef/maquette/6.webp", title: "Model 6" },
    { id: "7", src: "./images/bachproef/maquette/7.webp", title: "Model 4" },
    { id: "8", src: "./images/bachproef/maquette/8.webp", title: "Model 5" },
    { id: "9", src: "./images/bachproef/maquette/9.webp", title: "Model 6" },
        {
      id: "10",
      src: "./images/bachproef/maquette/10.webp",
      title: "Model Detail 1",
    },
    {
      id: "11",
      src: "./images/bachproef/maquette/11.webp",
      title: "Model Detail 2",
    },
    {
      id: "12",
      src: "./images/bachproef/maquette/12.webp",
      title: "Model Detail 2",
    },
  ];

  const modelsDouble = [

    {
      id: "13",
      src: "./images/bachproef/maquette/13.webp",
      title: "Model Detail 1",
    },
    {
      id: "14",
      src: "./images/bachproef/maquette/14.webp",
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
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto hover:scale-[1.01] transition-transform duration-700"
                />
              </div>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          {/* 2. THE GRID OF 3 IMAGES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-black/5 pt-24 mb-8 max-w-4xl mx-auto">
            {pairedImages.map((item) => (
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
                <span className="text-[10px] uppercase tracking-widest text-gray-300 text-center">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* 3. SINGLE DESCRIPTION UNDERNEATH */}
          <div className="max-w-4xl mt-8 mx-auto text-center mb-12">
            <p className="text-lg md:text-2xl text-gray-700 font-light leading-relaxed">
              The structure functions as a walkway: a smooth, continuous path
              that connects three diƯerent streets.
            </p>
          </div>
        </div>

        <div className="space-y-48 mb-16">
          {soloWithoutDesc.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center space-y-6 mb-8"
            >
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
                <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
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
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto hover:scale-[1.01] transition-transform duration-700"
                />
              </div>
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-[10px] uppercase tracking-widest text-gray-300 text-center">
                  {item.title}
                </span>
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
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto hover:scale-[1.01] transition-transform duration-700"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gray-300 text-center">
                {item.title}
              </span>
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
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto hover:scale-[1.01] transition-transform duration-700"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gray-300 text-center">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-24 mb-2">
          {miniImages2.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-6">
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
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto hover:scale-[1.01] transition-transform duration-700"
                />
              </div>
            </div>
          ))}
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
