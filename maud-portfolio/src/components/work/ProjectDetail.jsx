export default function ProjectDetail({ project, onBack }) {
  return (
    <div className="w-full max-w-4xl animate-[fadeIn_0.5s_ease-out]">
      
      <button 
        onClick={onBack}
        className="cursor-pointer mb-8 text-gray-400 hover:text-black text-sm uppercase tracking-wider transition-colors"
      >
        ← Back
      </button>

      {/* Project Info */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-1/2">
          <img src={project.img} alt={project.title} className="w-full h-auto object-cover" />
        </div>
        
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="text-lg text-gray-500 mb-2 font-light">{project.year}</p>
          <h2 className="text-3xl md:text-4xl font-light mb-6">{project.title}</h2>
          
          <p className="text-gray-700 font-light leading-relaxed">
            Hier komt de beschrijving van het project. Dit kun je later uitbreiden 
            of meer foto's toevoegen.
          </p>
        </div>
      </div>

    </div>
  )
}