export default function Work({ onProjectClick }) {
  // Een lijst van haar projecten
  const projects = [
    { id: 1, year: '2025', title: 'Master Thesis', img: '../../../public/images/Maquette_ex.jpg' },
    { id: 2, year: '2025', title: 'MA2', img: '../../../public/images/Maquette_ex.jpg' },
    { id: 3, year: '2022', title: 'Bachelor Thesis', img: '../../../public/images/Maquette_ex.jpg'  },
  ]

  return (
    <div className="w-full max-w-6xl animate-[fadeIn_0.5s_ease-out]">
      {/* CSS Grid: 1 kolom op mobiel, 3 kolommen op desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group relative cursor-pointer overflow-hidden aspect-square"
            onClick={() => onProjectClick(project)}
          >
            {/* De foto zelf */}
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* De donkere overlay + tekst (wordt pas zichtbaar bij hover) */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center px-8">
              <span className="text-white font-medium text-lg md:text-xl mb-1">{project.year}</span>
              <h2 className="text-white font-bold text-3xl md:text-4xl">{project.title}</h2>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}