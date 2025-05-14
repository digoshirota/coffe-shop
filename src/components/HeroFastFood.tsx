import Link from "next/link";
export default function HeroFastFood() {
    return (
      <section className="bg-[#2f2f2f] text-white text-center py-32 relative">
        <div className="mb-4">
          <button className="bg-[#e94f1d] text-xs px-4 py-1 rounded-full uppercase tracking-wider">
            Crispy, every bite taste
          </button>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          LOOKING FOR POPULAR <br />
          FAST FOOD
          <span className="inline-block relative -top-3 -left-2">
            <span className="text-yellow-400 text-3xl">︶</span>
          </span>
        </h1>
        <Link href={`/latest-news`} className="">
               <button className="mt-4 border border-white px-6 py-2 uppercase text-sm tracking-wide hover:bg-white hover:text-black transition-all">
                  Read More →
                </button>
        </Link>
        
      </section>
    );
  }
  