import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Archive({ onCategorySelect }) {

  const categories = [
    { 
      id: 'models', 
      title: 'Models', 
      images: ['./images/grieving/maquette/1.webp', './images/bachproef/maquette/2.webp', './images/ba3/maquette/3.webp','./images/grieving/maquette/8.webp',  './images/bachproef/maquette/5.webp', './images/andere maquette/2.webp', './images/ba3/maquette/7.webp', './images/ba3/maquette/1.webp']
    },
    { 
      id: 'drawings', 
      title: 'Drawings', 
     images: ['./images/drawings/1.png', './images/drawings/2.png', './images/drawings/3.png', './images/drawings/4.png', './images/drawings/5.png', './images/drawings/6.png']
    },
    { 
      id: 'autocad', 
      title: 'AutoCAD', 
      images: ['./images/Maquette_ex.jpg', './images/Maquette_ex.jpg', './images/Maquette_ex.jpg']
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-16 py-10">
      {categories.map((cat) => (
        <section key={cat.id} className="relative px-12 group">
          
          {/* Sectie Header */}
          <div className="flex justify-between items-baseline mb-4 border-b border-gray-100 pb-2">
            <h2 className="text-lg md:text-xl uppercase tracking-[0.2em] font-light text-black">
              {cat.title}
            </h2>
            <button 
              onClick={() => onCategorySelect(cat)}
              className="text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors"
            >
              View all →
            </button>
          </div>

          {/* Carousel */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={1.5} // Mobiel: 1.5 afbeeldingen zichtbaar
            navigation={{
              nextEl: `.archive-next-${cat.id}`,
              prevEl: `.archive-prev-${cat.id}`,
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2.5 },
              1024: { slidesPerView: 4.5 }, // Desktop: 4.5 kleine afbeeldingen zichtbaar
            }}
            className="archive-swiper"
          >
            {cat.images.map((img, index) => (
              <SwiperSlide key={index}>
                <div 
                  onClick={() => onCategorySelect(cat)}
                  className="overflow-hidden aspect-[4/3] bg-gray-50"
                >
                  <img 
                    src={img} 
                    alt={`${cat.title} ${index}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Arrows */}
          <button className={`archive-prev-${cat.id} absolute left-0 top-[60%] -translate-y-1/2 text-2xl font-light text-gray-300 hover:text-black transition-colors z-10`}>←</button>
          <button className={`archive-next-${cat.id} absolute right-0 top-[60%] -translate-y-1/2 text-2xl font-light text-gray-300 hover:text-black transition-colors z-10`}>→</button>
        </section>
      ))}

      {/* Custom CSS for hiding default arrows */}
      <style dangerouslySetInnerHTML={{ __html: `
        .archive-swiper .swiper-button-next, 
        .archive-swiper .swiper-button-prev {
          display: none;
        }
      `}} />
    </div>
  );
}