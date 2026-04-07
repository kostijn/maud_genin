import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Work({ onProjectClick }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const projects = [
    {
      id: 1,
      year: '3rd Bachelor Year 2024',
      title: 'Rauwers Site',
      img: './images/ba3/facade_front.webp',
    },
    {
      id: 2,
      year: '3rd Bachelor Year 2025',
      title: 'A Brussels Utopia',
      img: './images/bachproef/new.webp',
    },
    {
      id: 3,
      year: '1st Master Year 2025',
      title: 'The Grieving Border',
      img: './images/grieving/facade_trimmed.jpeg',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between gap-4 md:gap-12">

        {/* Left Arrow */}
        <button className="prev-arrow hidden md:block text-2xl font-light text-gray-300 hover:text-black transition-colors p-4">
          <span className="sr-only">Vorige</span>
          <svg width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 55L5 30L25 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </button>

        {/* Carousel */}
        <div className="flex-1 min-w-0">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.next-arrow',
              prevEl: '.prev-arrow',
            }}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => onProjectClick(project)}
                >
                  <div className="w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-gray-50 mb-6">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-105"
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-400 mb-2">
                      {project.year}
                    </p>
                    <h3 className="text-xl md:text-2xl uppercase tracking-widest font-light">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Arrow */}
        <button className="next-arrow hidden md:block text-2xl font-light text-gray-300 hover:text-black transition-colors p-4">
          <span className="sr-only">Volgende</span>
          <svg width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5L25 30L5 55" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center mt-8 gap-3">
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => swiperInstance?.slideToLoop(index)}
            className={`relative overflow-hidden transition-all duration-300 ${
              activeIndex === index
                ? 'w-24 h-14 opacity-100 ring-1 ring-black ring-offset-2'
                : 'w-20 h-12 opacity-40 hover:opacity-70'
            }`}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Mobile swipe hint */}
      <p className="md:hidden text-center text-[10px] uppercase tracking-widest text-gray-400 mt-6">
        Swipe to explore projects
      </p>
    </div>
  );
}