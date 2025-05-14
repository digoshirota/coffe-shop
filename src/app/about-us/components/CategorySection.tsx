// components/CategorySection.tsx
import Image from "next/image";

const categories = [
  {
    image: "/images/quality-chees.png",
    title: "QUALITY CHEES",
    description:
      "Consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus",
  },
  {
    image: "/images/crunchi-french-fry.png",
    title: "CRUNCHI FRENCH FRY",
    description:
      "Consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus",
  },
  {
    image: "/images/halal-meat.png",
    title: "100% HALAL MEAT",
    description:
      "Consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus",
  },
];

export default function CategorySection() {
  return (
    <section className="py-20 bg-white text-center max-w-7xl mx-auto px-4">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-12">
          <span className="inline-block bg-[#e94f1d] text-white text-xs font-bold px-3 py-1 rounded">
            MAKE RESERVATION
          </span>
          <h2 className="text-3xl font-extrabold mt-4 mb-2 text-black">DISCOVER OUR CATEGORY</h2>
          <div className="h-1 w-5 mx-auto bg-[#e94f1d] relative before:content-[''] before:absolute before:-left-3 before:w-1.5 before:h-1.5 before:bg-[#e94f1d] before:rounded-full after:content-[''] after:absolute after:-right-3 after:w-1.5 after:h-1.5 after:bg-[#e94f1d] after:rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {categories.map((item, i) => (
            <div key={i} className="flex flex-col items-center space-y-4">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="w-full h-auto object-cover"
              />
              <h3 className="font-bold uppercase text-sm tracking-wide text-black">{item.title}</h3>
              <p className="text-zinc-500 text-sm max-w-xs mx-auto">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
