import { Input } from "@/components/ui/input"
import { ArrowRight, Search, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link";

const images = [
  { value: 'Classic Caesar Salad', image: "/images/caesar.png", postName: "latest-news/caesar" },
  { value: 'Braised Short Ribs', image: "/images/Ribs.png", postName: "latest-news/Ribs" },
  { value: 'Chicken Masala', image: "/images/Masala.png", postName: "latest-news/Masala" },
  { value: 'Chicken Alfredo Pasta', image: "/images/alfredo.png", postName: "latest-news/alfredo" },
  { value: 'Chocolate Lava Cake', image: "/images/chocolate.png", postName: "latest-news/chocolate" },
  { value: 'Vegan Buddha Bowl', image: "/images/vegan.png", postName: "latest-news/vegan" },
]

export default function Sidebar() {
  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="bg-white shadow p-4">
        <div className="flex">
          <Input placeholder="Enter Keyword" className="rounded-none" />
          <button className="bg-[#e94f1d] px-3 flex items-center justify-center text-white">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white shadow p-5">
        <h3 className="text-lg font-bold uppercase mb-4">Recent Posts</h3>
        <ul className="space-y-4">
          {[
            "Craftsmanship of Artisanal Foods in Restaurants",
            "Restaurants Are Adapting to Changing Dietary Trends",
            "Passion and Perseverance from Renowned Chefs",
          ].map((title, idx) => (

            <li key={idx} className="flex gap-3">
              <Link href={`/latest-news/name-post`} className="flex gap-3">
                <div className="w-15 h-15 relative">
                  <Image
                    src={`/images/food-blog.png`}
                    alt="food-blog"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-sm text-gray-800 w-70">
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <User className="w-3 h-3" />
                    by David Smith
                  </div>
                  <p className="font-medium leading-tight">{title}</p>
                </div>

              </Link>
            </li>

          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="bg-white shadow p-5">
        <h3 className="text-lg font-bold uppercase mb-4">Categories</h3>
        <ul className="divide-y border border-gray-200">
          {[
            "Soups and Salads",
            "Pasta and Noodles",
            "Vegetarian and Vegan",
            "Pizza and Flatbreads",
          ].map((cat, i) => (
            <li
              key={i}
              className="flex justify-between items-center px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer"
            >
              {cat}
              <ArrowRight className="w-4 h-4 text-red-600" />
            </li>
          ))}
        </ul>
      </div>

      {/* Gallery */}
      <div className="bg-white shadow p-5">
        <h3 className="text-lg font-bold uppercase mb-4">Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, i) => (
            <Link href={`/${image.postName}`} className="underline hover:text-white">
              <div
                key={i}
                className="relative aspect-square bg-gray-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#e94f1d] bg-cover bg-center  transition duration-300 flex items-center justify-center"
                  style={{
                    backgroundImage: `url('${image.image}')`,
                  }}
                >
                </div>
                <div className="absolute inset-0 bg-[#e94f1d] opacity-0 group-hover:opacity-80 transition duration-300 flex items-center justify-center p-5"

                >
                  <p className="text-sm uppercase tracking-wide mt-2">{image.value}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Popular Tags */}
      <div className="bg-white shadow p-5">
        <h3 className="text-lg font-bold uppercase mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {[
            { tag: "ADVICE", active: true },
            { tag: "AUTHOR" },
            { tag: "CONSULTING" },
            { tag: "DELISH" },
            { tag: "FAMILY" },
            { tag: "HEALTH" },
            { tag: "TIP" },
            { tag: "JUDGE" },
            { tag: "SOLUTION" },
          ].map(({ tag, active }) => (
            <span
              key={tag}
              className={`text-sm px-3 py-1 font-medium border ${active
                ? "bg-[#e94f1d] text-white border-red-600"
                : "bg-white text-black"
                }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  )
}
