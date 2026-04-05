// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function MaudHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const childVariants = {
    hidden: { y: "100%" },
    visible: { 
      y: 0, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="relative w-full h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-white px-6">
      
      {/* Achtergrond detail: een heel dun verticaal lijntje dat de 'as' aangeeft */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-black/20 to-transparent"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Deel 1: Studio Portfolio */}
        <div className="overflow-hidden mb-2">
          <motion.span 
            variants={childVariants}
            className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-gray-400 font-['Space_Grotesk']"
          >
            Studio Portfolio
          </motion.span>
        </div>

        {/* Deel 2: De Hoofdtitel */}
        <div className="overflow-hidden">
          <motion.h1 
            variants={childVariants}
            className="text-4xl md:text-7xl lg:text-8xl font-['Playfair_Display'] italic text-black leading-tight text-center"
          >
            Fragments of <span className="font-['Space_Grotesk'] not-italic font-light">Maud</span>
          </motion.h1>
        </div>

        {/* Deel 3: De architecturale lijn die zich uitbreidt */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "180px", opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="h-[0.5px] bg-black mt-10"
        />
      </motion.div>

      {/* Onderaan een klein detail dat naar de About pagina wijst */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[8px] uppercase tracking-[0.4em] text-gray-300">Scroll to explore</span>
        <div className="w-[1px] h-8 bg-gray-100"></div>
      </motion.div>
    </div>
  );
}