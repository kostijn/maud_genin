import { useState, useEffect } from "react";

export default function ArchiveGallery({ onBack }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  // Hardcoded paths for all 33 images across your 3 folders
  const allImages = [
    ...Array.from(
      { length: 3 },
      (_, i) => `./images/andere maquette/${i + 1}.webp`,
    ),
    // BA3 Folder (11 images)
    ...Array.from(
      { length: 11 },
      (_, i) => `./images/ba3/maquette/${i + 1}.webp`,
    ),
    // Bachproef Folder (14 images)
    ...Array.from(
      { length: 14 },
      (_, i) => `./images/bachproef/maquette/${i + 1}.webp`,
    ),
    // Grieving Folder (8 images)
    ...Array.from(
      { length: 8 },
      (_, i) => `./images/grieving/maquette/${i + 1}.webp`,
    ),
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white py-32 px-6 md:px-12 animate-[fadeIn_0.8s_ease-out]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="relative mb-16">
          <div className="flex justify-between items-end pb-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-2">
                Archive
              </span>
              <h1 className="text-3xl md:text-5xl font-light text-black tracking-tight">
                Models
              </h1>
            </div>

            <button
              onClick={onBack}
              className="text-[10px] uppercase tracking-[0.3em] text-gray-500 hover:text-black transition-all duration-300 border-b border-transparent hover:border-black pb-1"
            >
              Back to Archive
            </button>
          </div>

          <div className="w-full h-[0.5px] bg-black/20"></div>
        </div>

        {/* Horizontal Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allImages.map((imgSrc, index) => (
            <div
              key={index}
              className="group cursor-zoom-in relative aspect-[4/5] overflow-hidden bg-gray-50"
              onClick={() => setLightboxImage(imgSrc)}
            >
              <img
                src={imgSrc}
                alt={`Model detail ${index + 1}`}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                loading="lazy"
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
          <button className="absolute top-12 right-12 text-xl font-light tracking-widest uppercase">
            Close
          </button>
          <img
            src={lightboxImage}
            className="max-w-full max-h-[85vh] object-contain shadow-2xl"
            alt="Enlarged view"
          />
        </div>
      )}
    </div>
  );
}
