import Image from "next/image";

const chefs = [
  {
    name: "Kuman Tunman",
    role: "Waiter",
    image: "/images/waiter.png", // coloque sua imagem real aqui
  },
  {
    name: "Kuman Tunman",
    role: "Waiter",
    image: "/images/waiter1.png",
  },
  {
    name: "Kuman Tunman",
    role: "Waiter",
    image: "/images/chef.png",
  },
];

export default function ChefsSection() {
  return (
    <section className="bg-[#0d0d0d] text-white py-20">
      <div className="text-center mb-10">
        <button className="bg-[#e94f1d] text-xs px-4 py-1 rounded-full uppercase mb-3">
          Make Reservation
        </button>
        <h2 className="text-3xl font-bold">MEET THE EXPERT CHEF</h2>
        <div className="w-1 h-6 bg-red-500 mx-auto my-2"></div>
        <div className="flex justify-center gap-1 text-red-500">
          <span>•</span><span>•</span><span>•</span><span>•</span>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-6 px-4">
        {chefs.map((chef, index) => (
          <div key={index} className="w-[260px] bg-white text-black">
            <div className="w-full h-72 relative">
              <Image
                src={chef.image}
                alt={chef.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-black text-white text-center py-4">
              <p className="font-bold">{chef.name}</p>
              <p className="text-xs">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
