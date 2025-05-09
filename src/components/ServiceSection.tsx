// app/page.tsx ou dentro de alguma Section

import { ServiceCard } from "@/components/fragment/ServiceCard"

export default function ServicesSection() {
  return (
    <section className="bg-[#fef6f1] py-20">
      <div className="text-center mb-12">
        <span className="bg-[#e94f1d] text-white px-3 py-1 text-xs font-semibold rounded">
          OUR SERVICES
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-4">OUR RESTAURANT SERVICE</h2>
        <div className="w-1 h-6 bg-[#e94f1d] mx-auto my-2" />
        <div className="flex justify-center space-x-1">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="w-2 h-2 bg-[#e94f1d] rounded-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title="WEDDING SERVICE"
          description="The chocolate fondant which did not disappoint. It was rich and indulgent, with a gooey center."
          image="/images/weeding.jpg"
        />
        <ServiceCard
          title="BUFFET SERVICE"
          description="Assertively myocardinate robust e-tailers for extensible human capital."
          image="/images/weeding.jpg"
        />
        <ServiceCard
          title="PARTY SERVICE"
          description="Assertively myocardinate robust e-tailers for extensible human capital."
          image="/images/weeding.jpg"
        />
      </div>
    </section>
  )
}
