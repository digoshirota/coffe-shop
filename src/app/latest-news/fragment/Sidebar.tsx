import { Input } from "@/components/ui/input"
import { ArrowRight, Search, User } from "lucide-react"
import Image from "next/image"

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
              <div className="bg-gray-300 w-10 h-10" />
              <div className="text-sm text-gray-800">
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <User className="w-3 h-3" />
                  by David Smith
                </div>
                <p className="font-medium leading-tight">{title}</p>
              </div>
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
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-gray-300 aspect-square" />
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
                className={`text-sm px-3 py-1 font-medium border ${
                    active
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
