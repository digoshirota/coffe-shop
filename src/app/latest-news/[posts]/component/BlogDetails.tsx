

import { Calendar, User } from "lucide-react"
import Sidebar from "../../fragment/Sidebar";
import Image from "next/image";

export default function BlogDetails(params: any) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
      <article className="lg:col-span-2 space-y-8">
        {/* Image */}
        <div className="w-full h-100 relative">
          <Image
            src={`/images/ceo.png`}
            alt="ceo"
            fill
            className="object-cover"
          />
        </div>

        {/* Meta & Title */}
        <div className="space-y-2">
          <div className="flex gap-4 text-sm text-gray-500 items-center">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> 24 Feb, 2024
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" /> by admin
            </div>
          </div>
          <h1 className="text-2xl font-bold uppercase">
            The World of Food and Wine Matching
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
          <p>
            Global issues contribute plus a critical role in driving thought leadership and knowledge exchange on a global scale. Through industry reports, white papers, and conferences, these forums spark new trends and practices...
          </p>
          <p>
            Global forums serve not only as a strategic enabler and trusted advisor to organizations navigating the complexities of international commerce. By offering a comprehensive suite of services, deep industry expertise, and a global...
          </p>
        </div>

        {/* Quote Box */}
        <div className="bg-gray-100 p-6 border-l-4 border-red-600 relative">
          <div className="absolute left-[-24px] top-6 bg-[#e94f1d] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
            99
          </div>
          <blockquote className="italic text-gray-800 font-medium text-lg pl-10">
            “We offer competitive pricing and deliver exceptional value for your investment. Our goal is to help you achieve the highest”
          </blockquote>
          <div className="mt-4 text-sm">
            <span className="text-red-600 font-semibold">William Benjamin</span><br />
            <span className="text-gray-500">Top Author</span>
          </div>
        </div>

        {/* More Content */}
        <div className="space-y-4 text-sm text-gray-700">
          <p>
            Professionally pursue cutting-edge web-readiness vis-a-vis just in time infrastructure. Conveniently target differentiated systems through scalable sources...
          </p>
        </div>

        {/* Image Row */}
        <div className="grid grid-cols-3 gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-gray-300 aspect-video" />
          ))}
        </div>

        {/* Final Paragraph */}
        <p className="text-sm text-gray-700">
          Collaboratively revolutionize focused opportunities for interactive deliverables. Assertively initiate client-based functionalities...
        </p>

        {/* Footer: Tags + Social + Navigation */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-t pt-6 gap-4">
          {/* Tags */}
          <div className="text-sm">
            <strong className="mr-2">Tags:</strong>
            <span className="text-gray-600">Business Solution, Growth, Search</span>
          </div>

          {/* Social */}
          <div className="text-sm text-gray-500">
            Social Icon / → (adicionar componente de ícones se necessário)
          </div>

          {/* Navigation */}
          <div className="flex justify-between w-full sm:w-auto gap-4 text-sm text-gray-700">
            <button className="px-3 py-1 border border-gray-200">← Previous Post</button>
            <button className="px-3 py-1 border border-gray-200">Next Post →</button>
          </div>
        </div>
      </article>
      {/* Sidebar */}
      <Sidebar />
    </section>

  )
}
