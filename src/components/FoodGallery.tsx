// components/FoodGallery.tsx
import Link from "next/link";

const images = [
  { value: 'Classic Caesar Salad', image: "/images/caesar.png",postName:"latest-news/caesar"},
  { value: 'Braised Short Ribs', image: "/images/Ribs.png",postName:"latest-news/Ribs" },
  { value: 'Chicken Masala', image: "/images/Masala.png",postName:"latest-news/Masala" },
  { value: 'Chicken Alfredo Pasta', image: "/images/alfredo.png",postName:"latest-news/alfredo" },
  { value: 'Chocolate Lava Cake', image: "/images/chocolate.png",postName:"latest-news/chocolate" },
  { value: 'Vegan Buddha Bowl', image: "/images/vegan.png",postName:"latest-news/vegan" },
]

export default function FoodGallery() {
  return (
    <section className="bg-[#f9f9f9] py-20 relative">
      <div className=" mx-auto px-4 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#e94f1d] text-white text-xs font-bold px-3 py-1 rounded">
            FOOD GALLERY
          </span>
          <h2 className="text-3xl font-extrabold mt-4 mb-2 text-black">FOOD GALLERY POSTS</h2>
          <div className="h-1 w-5 mx-auto bg-[#e94f1d] relative before:content-[''] before:absolute before:-left-3 before:w-1.5 before:h-1.5 before:bg-[#e94f1d] before:rounded-full after:content-[''] after:absolute after:-right-3 after:w-1.5 after:h-1.5 after:bg-[#e94f1d] after:rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, i) => (
            <Link href={`/${image.postName}`} className="underline hover:text-white"   key={i}>
              <div
                className="relative aspect-square bg-gray-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#e94f1d] bg-cover bg-center  transition duration-300 flex items-center justify-center"
                  style={{
                    backgroundImage: `url('${image.image}')`,
                  }}
                >
                </div>
                <div className="absolute inset-0 bg-[#e94f1d] opacity-0 group-hover:opacity-80 transition duration-300 flex items-center justify-center"

                >
                  <p className="text-sm uppercase tracking-wide mt-2">{image.value}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
