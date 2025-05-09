import { Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FoodGallerySection() {
  const stats = [
    { value: 15, label: "New Cool Projects" },
    { value: 15, label: "Total Awards Win" },
    { value: 20, label: "Unique Food Specialities" },
    { value: 69, label: "Hard Team Members" },
  ]

  return (
    <section className="bg-[#0f0f0f] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Métricas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl font-extrabold">{stat.value}</h3>
              <p className="text-sm uppercase tracking-wide mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Botão + Título alinhados à esquerda */}
        <div className="flex flex-col items-start gap-2 mb-8">
          <Button className="bg-[#e94f1d] text-white text-xs px-4 py-1 rounded w-max">
            View Our Projects
          </Button>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            OUR FOOD GALLERY
          </h2>
        </div>

        {/* Grid de imagens com efeito hover */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="relative aspect-square bg-gray-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#e94f1d] opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <Eye className="text-white w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
