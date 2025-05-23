import Link from 'next/link';
import Image from 'next/image';


const dishes = [
  { name: 'Beef Bourguignon', slug: 'beef-bourguignon', price: 15, rating: 5, img: "/images/beef-bourguignon.png" },
  { name: 'Spicy Tuna Tartare', slug: 'spicy-tuna-tartare', price: 15, rating: 5, img: "/images/spicy-tuna-tartare.png" },
  { name: 'Margherita Pizza', slug: 'margherita-pizza', price: 15, rating: 5, img: "/images/margherita-pizza.png" },
  { name: 'Braised Short Ribs', slug: 'braised-short-ribs', price: 15, rating: 5, img: "/images/Ribs.png" },
  { name: 'Vegan Buddha Bowl', slug: 'vegan-buddha-bowl', price: 15, rating: 5, img: "/images/vegan.png" },
  { name: 'Chicken Alfredo Pasta', slug: 'chicken-alfredo-pasta', price: 15, rating: 5, img: "/images/alfredo.png" },
  { name: 'Classic Caesar Salad', slug: 'classic-caesar-salad', price: 15, rating: 5, img: "/images/caesar.png" },
  { name: 'Roasted Vegetable Platter', slug: 'roasted-vegetable-platter', price: 15, rating: 5, img: "/images/roasted-vegetable-platter.png" },
  { name: 'Pulled Pork Sandwich', slug: 'pulled-pork-sandwich', price: 15, rating: 5, img: "/images/pulled-pork-sandwich.png" },
  { name: 'Ahi Poke Bowl', slug: 'ahi-poke-bowl', price: 15, rating: 5, img: "/images/ahi-poke-bowl.png" },
  { name: 'Chocolate Lava Cake', slug: 'chocolate-lava-cake', price: 15, rating: 5, img: "/images/chocolate.png" },
  { name: 'Lobster Bisque', slug: 'lobster-bisque', price: 15, rating: 5, img: "/images/lobster-bisque.png" },
];

export default function MenuGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto py-10">
      {dishes.map((dish) => (
        <Link
          key={dish.slug}
          href={`/shop/${dish.slug}`}
          className="bg-white shadow hover:shadow-md transition rounded overflow-hidden"
        >

          <div className="w-full h-40 relative">
            <Image
              src={`${dish.img}`}
              alt="ceo"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-3 text-center">
            <div className="text-red-600 text-sm flex justify-center gap-1 mb-1">
              {Array.from({ length: dish.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <h3 className="font-medium">{dish.name}</h3>
            <p className="text-red-600 text-sm mt-1">${dish.price.toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
