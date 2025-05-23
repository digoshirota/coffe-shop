// components/SectionHighlight.tsx
import Image from "next/image";
import Link from 'next/link';

export default function SectionHighlight() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        {/* Left side: Text */}
        <div className="md:w-1/2 space-y-6">
          <span className="inline-block bg-[#e94f1d] text-white text-xs font-semibold px-3 py-1 rounded">
            CRISPY, EVERY BITE TASTE
          </span>

          <h2 className="text-4xl font-extrabold text-black leading-snug">
            DELICIOUS FOOD FOR <br /> HEALTHY LIFE
          </h2>

          {/* Features */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <div>
                <Image src="/images/quality-food.png" alt="quality" width={32} height={32} />
              </div>
              <div>
                <h4 className="font-bold text-black">QUALITY FOOD</h4>
                <p className="text-sm text-zinc-500">
                  The wise man therefore always holds Indies matters this principle information
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <div>
                <Image src="/images/supply-chain.png" alt="supply" width={32} height={32} />
              </div>
              <div>
                <h4 className="font-bold text-black">SUPPLY CHAIN MAINTAIN</h4>
                <p className="text-sm text-zinc-500">
                  The wise man therefore always holds Indies matters this principle information
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href={`/book-table`}
            className=""
          >
            <button className="mt-4 px-6 py-3 border border-black text-black font-semibold hover:bg-black hover:text-white transition">
              BOOK A TABLE
            </button>
          </Link>

        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2">
          <Image src="/images/quality-food (2).png" alt="Delicious food" width={500} height={320} className="shadow-lg border-8 border-white" />
        </div>
      </div>
    </section>
  );
}
