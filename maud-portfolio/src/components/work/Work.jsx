import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Work({ onProjectClick }) {
  const projects = [
    {
      id: 1,
      year: '3rd Bachelor Year 2024',
      title: 'BA3',
      img: './images/ba3/facade_front.png',
    },
    {
      id: 2,
      year: '3rd Bachelor Year 2025',
      title: 'Bachelor Thesis',
      img: './images/bachproef/snede.png',
    },
    {
      id: 3,
      year: '2022',
      title: 'Bachelor Thesis',
      img: './images/bachproef2022/model_study.png',
    },
    {
      id: 4,
      year: '2021',
      title: 'Urban Intervention',
      img: './images/urban/intervention_study.png',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between gap-4 md:gap-12">
        
        {/* Linker Pijl */}
        <button className="prev-arrow hidden md:block text-2xl font-light text-gray-300 hover:text-black transition-colors p-4">
          <span className="sr-only">Vorige</span>
          <svg width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 55L5 30L25 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </button>

        {/* De Carousel (Het Midden) */}
        <div className="flex-1 min-w-0">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.next-arrow',
              prevEl: '.prev-arrow',
            }}
            pagination={{ 
              clickable: true, 
              el: '.custom-pagination',
              bulletClass: 'swiper-pagination-bullet !bg-black' 
            }}
            className="w-full"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div 
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => onProjectClick(project)}
                >
                  {/* Afbeelding Container */}
                  <div className="w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-gray-50 mb-6">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-105"
                    />
                  </div>

                  {/* Tekst onder de afbeelding */}
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

        {/* Rechter Pijl */}
        <button className="next-arrow hidden md:block text-2xl font-light text-gray-300 hover:text-black transition-colors p-4">
          <span className="sr-only">Volgende</span>
          <svg width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5L25 30L5 55" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Navigatie Puntjes (gecentreerd onder de tekst) */}
      <div className="custom-pagination flex justify-center mt-8 gap-2"></div>
      
      {/* Mobiele Swipe Instructie */}
      <p className="md:hidden text-center text-[10px] uppercase tracking-widest text-gray-400 mt-6">
        Swipe to explore projects
      </p>
    </div>
  );
}