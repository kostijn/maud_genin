// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start px-4 mt-20"
    >
      {/* LINKER KOLOM: De Foto */}
      <motion.div variants={itemVariants} className="md:col-span-5 flex flex-col gap-6 w-full">
        <div className="relative overflow-hidden shadow-sm rounded-sm h-[320px] md:h-[520px] w-full">
          <img 
            src="./images/DSC_3912.JPG" 
            alt="Maud Genin" 
            className="w-full h-full object-cover grayscale contrast-[1.1] block"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-10 h-[0.5px] bg-black/20"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-light font-['Space_Grotesk']">
            First Master Architecture Student
          </span>
        </div>
      </motion.div>

      {/* RECHTER KOLOM: De Titel in jouw stijl + Bio */}
      <motion.div variants={itemVariants} className="md:col-span-7 space-y-12 w-full">
        
        <div className="space-y-0 max-w-2xl mx-auto md:mx-0">
          <p className="text-[12px] md:text-[14px] uppercase tracking-[0.35em] text-gray-400 font-semibold mb-4 font-['Space_Grotesk']">
            Studio Portfolio
          </p>
          <h2 className="text-[clamp(2.4rem,4vw,3.6rem)] font-extralight uppercase tracking-[-0.03em] leading-[0.98] text-black max-w-xl">
            Fragments of Maud
          </h2>
        </div>

        {/* Biografie & Links */}
        <div className="space-y-8 max-w-xl">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-900 tracking-tight font-['Space_Grotesk']">
            Master of Architecture (KU Leuven), working at the intersection of space, material, and art.
          </p>
          
          <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
            With a focus on model-making and detail-oriented design, my work investigates 
            the tactile relationship between architectural scale and human experience.
          </p>

          <div className="flex gap-10 pt-4">
             <a href="#contact" className="group text-[10px] uppercase tracking-[0.4em] font-bold border-b border-black/10 pb-1 hover:border-black transition-all">
               Contact
             </a>
             <a href="https://www.linkedin.com/in/maud-genin-737aa8306/" target="_blank" className="group text-[10px] uppercase tracking-[0.4em] font-bold border-b border-black/10 pb-1 hover:border-black transition-all">
               Linkedin
             </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}