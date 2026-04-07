import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Archive({ onCategorySelect, categories }) {
  // De 'const categories' is hier verwijderd omdat deze via props binnenkomt uit App.js

  return (
    <div className="w-full max-w-7xl mx-auto space-y-16 py-10">
      {categories && categories.map((cat) => (
        <section key={cat.id} className="relative px-12 group">
          
          {/* Sectie Header */}
          <div className="flex justify-between items-baseline mb-4 border-b border-gray-100 pb-2">
            <h2 className="text-lg md:text-xl uppercase tracking-[0.2em] font-light text-black">
              {cat.title}
            </h2>
            <button 
              onClick={() => onCategorySelect(cat)}
              className="text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors bg-transparent border-none cursor-pointer"
            >
              View all →
            </button>
          </div>

          {/* Carousel */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={1.5}
            navigation={{
              nextEl: `.archive-next-${cat.id}`,
              prevEl: `.archive-prev-${cat.id}`,
            }}
            loop={cat.images.length > 4}
            breakpoints={{
              640: { slidesPerView: 2.5 },
              1024: { slidesPerView: 4.5 },
            }}
            className="archive-swiper"
          >
            {cat.images.map((img, index) => (
              <SwiperSlide key={index}>
                <div 
                  onClick={() => onCategorySelect(cat)}
                  className="overflow-hidden aspect-[4/3] bg-gray-50 cursor-pointer"
                >
                  <img 
                    src={img} 
                    alt={`${cat.title} ${index}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <button className={`archive-prev-${cat.id} absolute left-0 top-[60%] -translate-y-1/2 text-2xl font-light text-gray-300 hover:text-black transition-colors z-10 bg-transparent border-none cursor-pointer`}>←</button>
          <button className={`archive-next-${cat.id} absolute right-0 top-[60%] -translate-y-1/2 text-2xl font-light text-gray-300 hover:text-black transition-colors z-10 bg-transparent border-none cursor-pointer`}>→</button>
        </section>
      ))}

      {/* Custom CSS voor Swiper arrows */}
      <style dangerouslySetInnerHTML={{ __html: `
        .archive-swiper .swiper-button-next, 
        .archive-swiper .swiper-button-prev {
          display: none;
        }
      `}} />
    </div>
  );
}