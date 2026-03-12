export default function Contact() {
  return (
    // HIER: 'mt-24' (margin-top) toegevoegd om de tekst naar beneden te duwen
    <div className="mt-24 flex flex-col items-center gap-4 text-sm md:text-base font-light tracking-wide animate-[fadeIn_0.5s_ease-out]">
      <a href="mailto:maud2003@live.be" className="hover:text-gray-400 transition-colors">maud2003@live.be</a>
      <p className="hover:text-gray-400 transition-colors">+32 472 56 02 18</p>
    </div>
  )
}