import Link from "next/link";

export default function Hero() {
    return (
      <section
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('/images/hero3.webp')`,
        }}
      >
        {/* 🔲 Overlay preto translúcido */}
        <div className="absolute inset-0 bg-black/50 z-0" />
  
        {/* Conteúdo sobre o overlay */}
        <div className="w-[95%] h-[80%] absolute border border-white opacity-10"></div>
        <div className="relative z-10 text-center px-4">
          <p className="uppercase tracking-widest text-sm mb-2">The Great</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Flavored Food</h1>
          <p className="uppercase text-xl tracking-wide mb-6">Part of Us</p>
  
          <div className="flex gap-6 text-sm font-medium justify-center">
            <Link href={`/book-table`} className="">
                <button className="border-t border-white pt-2 hover:text-red-500 transition-colors duration-200">Book a Table</button>
            </Link>
            <Link href={`/menu`} className="">
                <button className="border-t border-white pt-2 hover:text-red-500 transition-colors duration-200">View Menu</button>
            </Link>
            
            
          </div>
        </div>
  
        {/* Textos rotacionados nas laterais */}
        <div className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 rotate-[-90deg] text-[10px] tracking-wide hidden lg:block">
          OPENING HOURS: 18:00 - 02:00
        </div>
        <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 rotate-90 text-[10px] tracking-wide hidden lg:block">
          OPENING HOURS: 18:00 - 02:00
        </div>
     
      </section>
    );
  }
  