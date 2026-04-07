/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
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
import UrbanInterventionDetail from './components/work/UrbanInterventionDetail'

// --- 1. CENTRALE DATA ---
const PROJECTS = [
  { id: 1, year: '3rd Bachelor Year 2024', title: 'BA3', img: './images/ba3/facade_front.png', component: BA3Detail },
  { id: 2, year: '3rd Bachelor Year 2025', title: 'Bachelor Thesis', img: './images/bachproef/snede.png', component: BachelorThesis2025Detail },
  { id: 3, year: '1st Master Year 2025', title: 'MA1', img: './images/grieving/facade.jpeg', component: Grieving },
  { id: 4, year: '2021', title: 'Urban Intervention', img: './images/urban/intervention_study.png', component: UrbanInterventionDetail },
];

const ARCHIVE_CATEGORIES = [
  { id: 'models', title: 'Models' },
  { id: 'drawings', title: 'Drawings' },
  { id: 'autocad', title: 'AutoCAD' }
];

// --- 2. WRAPPERS VOOR ROUTES ---

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

  if (category.id === 'models') {
    return (
      <ArchiveModels
        onBack={() => navigate('/', { state: { scrollTo: 'archive' } })}
      />
    );
  }
  if (category.id === 'drawings') {
    return (
      <ArchiveDrawings
        onBack={() => navigate('/', { state: { scrollTo: 'archive' } })}
      />
    );
  }
  if (category.id === 'autocad') {
    return (
      <ArchiveAutocad
        onBack={() => navigate('/', { state: { scrollTo: 'archive' } })}
      />
    );
  }
}

// --- 3. MAIN COMPONENTS ---

function Home() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="bg-white font-['Space_Grotesk'] text-gray-900 selection:bg-black selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black origin-left z-[70]" style={{ scaleX }} />

      <main>
        <Section id="about">
          <About />
        </Section>

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

function AppLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverContact, setIsOverContact] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Poll until the section element exists in the DOM, then scroll
  const waitForElement = (id, retries = 20) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (retries > 0) {
      setTimeout(() => waitForElement(id, retries - 1), 100);
    }
  };

  // Handle scroll-to on return to Home from another route
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      window.history.replaceState({}, document.title);
      waitForElement(targetId);
    }
  }, [location]);

  // Scroll detection for black header over contact section
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navClass = isOverContact
    ? "cursor-pointer text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-300 hover:text-white transition-all duration-300 font-medium"
    : "cursor-pointer text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-all duration-300 font-medium";

  return (
    <div>
      <header className={`fixed top-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center border-b transition-all duration-300 ${
        isOverContact ? 'bg-black/60 border-white/10 backdrop-blur-md' : 'bg-white/60 border-black/5 backdrop-blur-md'
      }`}>
        <h1
          className={`text-xl md:text-2xl uppercase tracking-[0.3em] cursor-pointer ${isOverContact ? 'text-white' : 'text-black'}`}
          onClick={() => { navigate('/'); setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 10); }}
        >
          Maud Genin
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-12">
            <li><button onClick={() => navigate('/', { state: { scrollTo: 'about' } })} className={navClass}>About</button></li>
            <li><button onClick={() => navigate('/', { state: { scrollTo: 'work' } })} className={navClass}>Work</button></li>
            <li><button onClick={() => navigate('/', { state: { scrollTo: 'archive' } })} className={navClass}>Archive</button></li>
            <li><button onClick={() => navigate('/', { state: { scrollTo: 'contact' } })} className={navClass}>Contact</button></li>
          </ul>
        </nav>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden z-[60] flex flex-col items-center justify-center w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <span className="text-2xl leading-none text-black">✕</span>
          ) : (
            <div className="flex flex-col space-y-1.5">
              <span className={`w-8 h-[1px] transition-colors ${isOverContact ? 'bg-white' : 'bg-black'}`} />
              <span className={`w-8 h-[1px] transition-colors ${isOverContact ? 'bg-white' : 'bg-black'}`} />
            </div>
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white md:hidden"
          >
            <ul className="flex flex-col items-center gap-10">
              {['about', 'work', 'archive', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate('/', { state: { scrollTo: section } });
                    }}
                    className="text-2xl uppercase tracking-[0.3em] text-gray-500 hover:text-black transition-colors duration-200"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
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