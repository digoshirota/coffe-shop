import Link from 'next/link';

const dishes = [
  { name: 'Beef Bourguignon', slug: 'beef-bourguignon', price: 15, rating: 5 },
  { name: 'Spicy Tuna Tartare', slug: 'spicy-tuna-tartare', price: 15, rating: 5 },
  { name: 'Margherita Pizza', slug: 'margherita-pizza', price: 15, rating: 5 },
  { name: 'Braised Short Ribs', slug: 'braised-short-ribs', price: 15, rating: 5 },
  { name: 'Vegan Buddha Bowl', slug: 'vegan-buddha-bowl', price: 15, rating: 5 },
  { name: 'Chicken Alfredo Pasta', slug: 'chicken-alfredo-pasta', price: 15, rating: 5 },
  { name: 'Classic Caesar Salad', slug: 'classic-caesar-salad', price: 15, rating: 5 },
  { name: 'Roasted Vegetable Platter', slug: 'roasted-vegetable-platter', price: 15, rating: 5 },
  { name: 'Pulled Pork Sandwich', slug: 'pulled-pork-sandwich', price: 15, rating: 5 },
  { name: 'Ahi Poke Bowl', slug: 'ahi-poke-bowl', price: 15, rating: 5 },
  { name: 'Chocolate Lava Cake', slug: 'chocolate-lava-cake', price: 15, rating: 5 },
  { name: 'Lobster Bisque', slug: 'lobster-bisque', price: 15, rating: 5 },
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
          <div className="h-40 bg-gray-200" />
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
