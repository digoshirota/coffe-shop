import { Quote } from "lucide-react"

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Amanda Martin",
      role: "Food Reviewer",
      avatar: "", // aqui você pode colocar o src do avatar se quiser
      message:
        "The only minor downside was the noise level, which made conversation a bit challenging at times. However, this did not significantly detract from the overall experience. The Culinary Corner excels in delivering delicious food and exceptional service.",
    },
    {
      name: "Amanda Martin",
      role: "Food Reviewer",
      avatar: "",
      message:
        "The only minor downside was the noise level, which made conversation a bit challenging at times. However, this did not significantly detract from the overall experience. The Culinary Corner excels in delivering delicious food and exceptional service.",
    },
  ]

  return (
    <section className="py-20 bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Cabeçalho */}
        <div className="flex flex-col items-center mb-10">
          <span className="text-xs text-white bg-[#e94f1d] px-3 py-1 rounded uppercase">
            Client Testimonial
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4">
            OUR CUSTOMER FEEDBACKS
          </h2>
          <div className="w-10 border-t-2 border-black mt-4 relative">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1">
              <span className="w-1 h-1 bg-[#e94f1d] rounded-full"></span>
              <span className="w-1 h-1 bg-[#e94f1d] rounded-full"></span>
              <span className="w-1 h-1 bg-[#e94f1d] rounded-full"></span>
              <span className="w-1 h-1 bg-[#e94f1d] rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Cards de depoimento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#f5f5f5] border border-[#f2d7d2] p-6 text-left relative"
            >
              <p className="text-sm leading-relaxed mb-6">{testimonial.message}</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              {/* Aspas no canto inferior direito */}
              <Quote className="absolute bottom-4 right-4 text-[#f2d7d2] w-10 h-10 rotate-180" />
              <Quote className="absolute bottom-4 right-12 text-[#f2d7d2] w-10 h-10 rotate-180" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
