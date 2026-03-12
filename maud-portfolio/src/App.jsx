import { useState } from 'react'

import About from './components/About'
import Work from './components/work/Work'
import Archive from './components/archive/Archive'
import Contact from './components/Contact'
import ProjectDetail from './components/work/ProjectDetail'

function App() {
  const [activePage, setActivePage] = useState('about')
  const [selectedProject, setSelectedProject] = useState(null)
  
  // NIEUW: Een kleine teller om de Archive pagina te 'resetten'
  const [archiveReset, setArchiveReset] = useState(0)

  // Aangepaste functie voor het klikken op de navigatie
  const handleNavClick = (page) => {
    setActivePage(page)
    setSelectedProject(null)
    
    // Als we op 'archive' klikken in het menu, verhogen we de teller
    if (page === 'archive') {
      setArchiveReset(prev => prev + 1)
    }
  }

  const navClass = (page) => 
    `cursor-pointer text-xs md:text-sm uppercase tracking-[0.1em] transition-colors duration-300 ${
      activePage === page && !selectedProject ? 'text-black font-semibold' : 'text-gray-400 hover:text-black'
    }`

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-16 md:pt-24 font-sans text-gray-900">
      
      <h1 
        className="font-logo text-4xl md:text-5xl uppercase tracking-[0.10em] mb-8 cursor-pointer"
        onClick={() => handleNavClick('about')}
      >
        Maud Genin
      </h1>

      <nav className="mb-16 md:mb-24">
        <ul className="flex gap-6 md:gap-10">
          <li><a className={navClass('about')} onClick={() => handleNavClick('about')}>About</a></li>
          <li><a className={navClass('work')} onClick={() => handleNavClick('work')}>Work</a></li>
          <li><a className={navClass('archive')} onClick={() => handleNavClick('archive')}>Archive</a></li>
          <li><a className={navClass('contact')} onClick={() => handleNavClick('contact')}>Contact</a></li>
        </ul>
      </nav>

      <main className="w-full flex flex-col items-center px-6 pb-20">
        {selectedProject ? (
           <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />
        ) : (
          <>
            {activePage === 'about' && <About />}
            {activePage === 'work' && <Work onProjectClick={setSelectedProject} />}
            
            {/* OPGELOST: De 'key' zorgt ervoor dat de pagina reset als de teller verandert */}
            {activePage === 'archive' && <Archive key={archiveReset} />}
            
            {activePage === 'contact' && <Contact />}
          </>
        )}
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  )
}

export default App