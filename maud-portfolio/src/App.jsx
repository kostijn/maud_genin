import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'

// Importeer je componenten
import About from './components/About'
import Work from './components/work/Work'
import Archive from './components/archive/Archive'
import Contact from './components/Contact'
import BA3Detail from './components/work/BA3Detail'
import BachelorThesis2025Detail from './components/work/BachelorThesis2025Detail'
import BachelorThesis2022Detail from './components/work/BachelorThesis2022Detail'
import UrbanInterventionDetail from './components/work/UrbanInterventionDetail'

function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-white font-['Space_Grotesk'] text-gray-900 selection:bg-black selection:text-white">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-black origin-left z-[70]" 
        style={{ scaleX }} 
      />

      <main>
        <Section id="about">
          <About />
        </Section>

        <Section id="work" className="bg-gray-50/50">
          <Work onProjectClick={(project) => {
            window.location.hash = `/project/${project.id}`;
          }} />
        </Section>

        <Section id="archive">
          <Archive onCategorySelect={(category) => {
            window.location.hash = `/archive/${category}`;
          }} />
        </Section>

        <Section id="contact" className="bg-black text-white">
          <Contact />
        </Section>
      </main>

      <footer className="py-12 flex flex-col items-center justify-center border-t border-gray-100">
        <p className="text-[10px] uppercase tracking-widest text-gray-400">
          © {new Date().getFullYear()} Maud Genin — Architecture & Design
        </p>
      </footer>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function ProjectWrapper({ projectId, DetailComponent }) {
  const navigate = useNavigate();
  
  const projects = [
    { id: 1, year: '3rd Bachelor Year 2024', title: 'BA3' },
    { id: 2, year: '3rd Bachelor Year 2025', title: 'Bachelor Thesis' },
    { id: 3, year: '2022', title: 'Bachelor Thesis' },
    { id: 4, year: '2021', title: 'Urban Intervention' },
  ];
  
  const project = projects.find(p => p.id === parseInt(projectId));
  
  return <DetailComponent project={project} onBack={() => navigate('/')} />;
}

function AppLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOverContact, setIsOverContact] = useState(false)
  const navigate = useNavigate()
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (!contactSection) {
        setIsOverContact(false);
        return;
      }
      
      const rect = contactSection.getBoundingClientRect();
      const isOver = rect.top < window.innerHeight * 0.3 && rect.bottom > 0;
      setIsOverContact(isOver);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); 
  };

  const navClass = isOverContact 
    ? "cursor-pointer text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-300 hover:text-white transition-all duration-300 font-medium"
    : "cursor-pointer text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-all duration-300 font-medium";
  const mobileNavClass = "text-2xl uppercase tracking-[0.3em] font-light text-gray-800 hover:text-black transition-colors";

  return (
    <div>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-black origin-left z-[70]" 
        style={{ scaleX }} 
      />

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center border-b transition-all duration-300 ${
        isOverContact 
          ? 'bg-black/60 border-white/10 backdrop-blur-md' 
          : 'bg-white/60 border-black/5 backdrop-blur-md'
      }`}>
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl md:text-2xl uppercase tracking-[0.3em] cursor-pointer transition-colors duration-300 ${
            isOverContact ? 'text-white' : 'text-black'
          }`}
          onClick={() => navigate('/')}
        >
          Maud Genin
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <motion.ul 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-6 md:gap-12"
          >
            <li><button onClick={() => { navigate('/'); scrollToSection('about'); }} className={navClass}>About</button></li>
            <li><button onClick={() => { navigate('/'); scrollToSection('work'); }} className={navClass}>Work</button></li>
            <li><button onClick={() => { navigate('/'); scrollToSection('archive'); }} className={navClass}>Archive</button></li>
            <li><button onClick={() => { navigate('/'); scrollToSection('contact'); }} className={navClass}>Contact</button></li>
          </motion.ul>
        </nav>

        {/* Hamburger Button */}
        <button 
          className="md:hidden z-[60] flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.span 
            animate={isMenuOpen ? { rotate: 45, y: 8.5 } : { rotate: 0, y: 0 }}
            className={`w-full h-[1px] block transition-colors duration-300 ${isOverContact ? 'bg-white' : 'bg-black'}`}
          />
          <motion.span 
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`w-full h-[1px] block transition-colors duration-300 ${isOverContact ? 'bg-white' : 'bg-black'}`}
          />
          <motion.span 
            animate={isMenuOpen ? { rotate: -45, y: -8.5 } : { rotate: 0, y: 0 }}
            className={`w-full h-[1px] block transition-colors duration-300 ${isOverContact ? 'bg-white' : 'bg-black'}`}
          />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[55] flex flex-col items-center justify-center space-y-10 md:hidden"
          >
            {/* Extra Sluit-tekst rechtsboven in de sidebar */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-10 right-6 text-[10px] uppercase tracking-[0.3em] text-gray-400 flex items-center gap-2"
            >
              <span className="text-xl font-light">X</span>
            </button>

            <button onClick={() => { navigate('/'); scrollToSection('about'); setIsMenuOpen(false); }} className={mobileNavClass}>About</button>
            <button onClick={() => { navigate('/'); scrollToSection('work'); setIsMenuOpen(false); }} className={mobileNavClass}>Work</button>
            <button onClick={() => { navigate('/'); scrollToSection('archive'); setIsMenuOpen(false); }} className={mobileNavClass}>Archive</button>
            <button onClick={() => { navigate('/'); scrollToSection('contact'); setIsMenuOpen(false); }} className={mobileNavClass}>Contact</button>
          </motion.div>
        )}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/1" element={<ProjectWrapper projectId="1" DetailComponent={BA3Detail} />} />
        <Route path="/project/2" element={<ProjectWrapper projectId="2" DetailComponent={BachelorThesis2025Detail} />} />
        <Route path="/project/3" element={<ProjectWrapper projectId="3" DetailComponent={BachelorThesis2022Detail} />} />
        <Route path="/project/4" element={<ProjectWrapper projectId="4" DetailComponent={UrbanInterventionDetail} />} />
      </Routes>
    </div>
  );
}

function Section({ children, id, className = "" }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`min-h-[calc(100vh-7rem)] w-full flex flex-col items-center justify-center px-6 py-20 md:py-24 ${className}`}
    >
      {children}
    </motion.section>
  )
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}