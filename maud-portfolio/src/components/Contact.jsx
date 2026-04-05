export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-24 md:py-32 animate-[fadeIn_0.5s_ease-out]">
      <div className="w-full max-w-2xl flex flex-col items-center gap-8 md:gap-12">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl md:text-5xl uppercase tracking-[0.2em] font-light">Contact</h2>
          <div className="w-12 h-[1px] bg-black"></div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-6 md:gap-8 w-full">
          {/* Email */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium">Email</p>
            <a 
              href="mailto:maud2003@live.be" 
              className="text-base md:text-lg font-light tracking-wide hover:text-gray-400 transition-colors duration-300"
            >
              maud2003@live.be
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium">LinkedIn</p>
            <a 
              href="https://linkedin.com/in/maud-genin" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg font-light tracking-wide hover:text-gray-400 transition-colors duration-300"
            >
              linkedin.com/in/maud-genin
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}