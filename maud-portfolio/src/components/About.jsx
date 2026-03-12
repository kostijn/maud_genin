export default function About() {
  return (
    <div className="flex flex-col items-center animate-[fadeIn_0.5s_ease-out]">
      <img 
        src="../../public/images/DSC_3912.JPG" 
        alt="Maud Genin" 
        className="w-36 md:w-44 h-auto grayscale object-cover mb-10"
      />
      <p className="text-center text-[0.85rem] md:text-sm font-light leading-relaxed md:leading-loose text-gray-700 max-w-[600px]">
        Maud Genin, Master of Architecture (KU Leuven, 2025),<br className="hidden md:block" />
        works at the intersection of architecture, design, and art, with<br className="hidden md:block" />
        a strong affinity for model-making and detail-oriented<br className="hidden md:block" />
        design.
      </p>
    </div>
  )
}