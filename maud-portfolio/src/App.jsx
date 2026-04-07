/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'

// --- Component Imports ---
import About from './components/About'
import Work from './components/work/Work'
import Archive from './components/archive/Archive'
import ArchiveModels from './components/archive/ArchiveModels'
import ArchiveDrawings from './components/archive/ArchiveDrawings'
import Contact from './components/Contact'

// Detail pagina's
import BA3Detail from './components/work/BA3Detail'
import BachelorThesis2025Detail from './components/work/BachelorThesis2025Detail'
import Grieving from './components/work/Grieving'

// --- 1. CENTRALE DATA ---
const PROJECTS = [
  { id: 1, year: '3rd Bachelor Year 2024', title: 'BA3', img: './images/ba3/facade_front.png', component: BA3Detail },
  { id: 2, year: '3rd Bachelor Year 2025', title: 'Bachelor Thesis', img: './images/bachproef/snede.png', component: BachelorThesis2025Detail },
  { id: 3, year: '1st Master Year 2025', title: 'MA1', img: './images/grieving/facade_trimmed.jpeg', component: Grieving },
];

const ARCHIVE_CATEGORIES = [
  { 
    id: 'models', 
    title: 'Models', 
    images: ['./images/grieving/maquette/1.webp', './images/bachproef/maquette/2.webp', './images/ba3/maquette/3.webp','./images/grieving/maquette/3.webp', './images/bachproef/maquette/3.webp', './images/andere maquette/2.webp', './images/ba3/maquette/7.webp', './images/bachproef/maquette/9.webp','./images/ba3/maquette/6.webp']
  },
  { 
    id: 'drawings', 
    title: 'Details', 
    images: ['./images/drawings/1.webp', './images/drawings/2.webp', './images/drawings/4.webp', './images/drawings/7.webp', './images/drawings/3.webp', './images/drawings/5.webp']
  },
];

// --- 2. WRAPPERS ---

function ProjectWrapper() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === parseInt(projectId));

  if (!project) return null;

  const DetailComponent = project.component;
  return (
    <DetailComponent
      project={project}
      onBack={() => navigate('/', { state: { scrollTo: 'work' } })}
    />
  );
}

function ArchiveWrapper() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = ARCHIVE_CATEGORIES.find(c => c.id === categoryId);

  if (!category) return null;

  const backAction = () => navigate('/', { state: { scrollTo: 'archive' } });

  if (category.id === 'models') return <ArchiveModels onBack={backAction} />;
  if (category.id === 'drawings') return <ArchiveDrawings onBack={backAction} />;
  return null;
}

// --- 3. MAIN COMPONENTS ---

function Home() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="bg-white font-['Space_Grotesk'] text-gray-900">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black origin-left z-[70]" style={{ scaleX }} />

      <main>
        <Section id="about"><About /></Section>

        <Section id="work" className="bg-gray-50/50">
          <Work
            projects={PROJECTS}
            onProjectClick={(project) => navigate(`/project/${project.id}`)}
          />
        </Section>

        <Section id="archive">
          <Archive
            categories={ARCHIVE_CATEGORIES}
            onCategorySelect={(cat) => navigate(`/archive/${cat.id}`)}
          />
        </Section>

        <Section id="contact" className="bg-black text-white"><Contact /></Section>
      </main>
    </div>
  );
}

function AppLayout() {
  const [isOverContact, setIsOverContact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const waitForElement = (id, retries = 20) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (retries > 0) {
      setTimeout(() => waitForElement(id, retries - 1), 100);
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      window.history.replaceState({}, document.title);
      waitForElement(targetId);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (!contactSection) { setIsOverContact(false); return; }
      const rect = contactSection.getBoundingClientRect();
      setIsOverContact(rect.top < window.innerHeight * 0.3 && rect.bottom > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to handle navigation and close menu
  const handleNav = (target) => {
    setIsMenuOpen(false);
    navigate('/', { state: { scrollTo: target } });
  };

  const navClass = isOverContact
    ? "cursor-pointer text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-300 hover:text-white transition-all duration-300 font-medium bg-transparent border-none"
    : "cursor-pointer text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-all duration-300 font-medium bg-transparent border-none";

  const mobileNavClass = "text-2xl uppercase tracking-[0.3em] font-light text-black hover:opacity-50 transition-all duration-300";

  return (
    <div className={isMenuOpen ? "overflow-hidden h-screen" : ""}>
      <header className={`fixed top-0 w-full z-[100] px-6 md:px-12 py-8 flex justify-between items-center border-b transition-all duration-300 ${
        isOverContact ? 'bg-black/60 border-white/10 backdrop-blur-md' : 'bg-white/60 border-black/5 backdrop-blur-md'
      }`}>
        <h1
          className={`text-xl md:text-2xl uppercase tracking-[0.3em] cursor-pointer transition-colors duration-300 z-[110] ${
            (isOverContact && !isMenuOpen) ? 'text-white' : 'text-black'
          }`}
          onClick={() => { 
            setIsMenuOpen(false); 
            navigate('/'); 
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 10); 
          }}
        >
          Maud Genin
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-12 list-none m-0 p-0">
            <li><button onClick={() => handleNav('about')} className={navClass}>About</button></li>
            <li><button onClick={() => handleNav('work')} className={navClass}>Work</button></li>
            <li><button onClick={() => handleNav('archive')} className={navClass}>Archive</button></li>
            <li><button onClick={() => handleNav('contact')} className={navClass}>Contact</button></li>
          </ul>
        </nav>

        {/* Hamburger Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-[110] md:hidden flex flex-col justify-center items-center w-8 h-8 bg-transparent border-none outline-none group"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ease-out ${
            isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
          } ${isOverContact && !isMenuOpen ? 'bg-white' : 'bg-black'}`}></span>
          <span className={`block w-6 h-0.5 my-0.5 transition-all duration-300 ease-out ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          } ${isOverContact && !isMenuOpen ? 'bg-white' : 'bg-black'}`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-300 ease-out ${
            isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
          } ${isOverContact && !isMenuOpen ? 'bg-white' : 'bg-black'}`}></span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] bg-white flex flex-col items-center justify-center gap-10"
          >
            <button onClick={() => handleNav('about')} className={mobileNavClass}>About</button>
            <button onClick={() => handleNav('work')} className={mobileNavClass}>Work</button>
            <button onClick={() => handleNav('archive')} className={mobileNavClass}>Archive</button>
            <button onClick={() => handleNav('contact')} className={mobileNavClass}>Contact</button>
          </motion.div>
        )}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectWrapper />} />
        <Route path="/archive/:categoryId" element={<ArchiveWrapper />} />
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
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 ${className}`}
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