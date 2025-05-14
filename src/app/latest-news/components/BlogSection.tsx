import { Calendar, User, Search } from "lucide-react";
import Sidebar from "../fragment/Sidebar";
import Link from "next/link";

const posts = [
  {
    title: "ICONIC ESTABLISHMENTS ARE REINVENTING",
    date: "10 Jul, 2024",
    author: "Admin",
    category: "Foodies",
    slug:"o-nome-do-post"
  },
  {
    title: "EXPLORING THE WORLD OF FOOD AND WINE",
    date: "21 Jul, 2024",
    author: "Admin",
    category: "Foodies",
    slug:"outro-post"
  },
  {
    title: "WHAT IT TAKES TO ACHIEVE EXCELLENCE",
    date: "25 Jul, 2024",
    author: "Admin",
    category: "Foodies",
  },
  {
    title: "AFFORDABLE GOURMET EXPERIENCES",
    date: "28 Jul, 2024",
    author: "Admin",
    category: "Foodies",
  },
];

export default function BlogSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Posts */}
      <div className="lg:col-span-2 space-y-8">
        {posts.map((post, i) => (
          <div key={i} className="border bg-white shadow-sm overflow-hidden">
            {/* Imagem simulada + Categoria */}
            <div className="relative bg-gray-300 h-64 w-full">
              <div className="absolute top-3 left-3 bg-[#e94f1d] text-white text-[10px] font-semibold px-2 py-0.5 uppercase">
                {post.category}
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-6 space-y-3">
              <div className="flex items-center text-xs text-gray-500 gap-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-red-600" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3 text-red-600" />
                  <span>by {post.author}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold uppercase text-black">
                {post.title}
              </h3>

              <p className="text-sm text-gray-600">
                Efficiently reinvent installed base opportunities after team driven quality vectors. Dramatically for value added partnerships. Holistically reintermediate client based materials...
              </p>

              <Link href={`/latest-news/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-red-600 hover:underline">
                READ DETAILS <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        ))}


        {/* Pagination */}
        <div className="flex gap-2">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={`text-sm w-8 h-8 border ${
                n === 1 ? "bg-[#e94f1d] text-white" : "hover:bg-gray-200"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      {/* Sidebar */}
     <Sidebar/>
    </section>
  );
}
