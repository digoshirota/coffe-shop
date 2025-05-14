import { notFound } from 'next/navigation';

const fakeMenu = {
    name: 'Grilled Lemon Herb Chicken',
    priceRange: [260, 360],
    rating: 5,
    reviews: 1,
    sku: '17',
    categories: ['Light Bulb', 'Table'],
    tags: ['Illuminate', 'Textured'],
    description: `Eget taciti odio cum habitant egestas conubia turpis phasellus.`,
    fullDescription: `
      Credibly negotiate emerging materials... (continue long text).
    `
};

export default function ProductDetail() {
  const dish = fakeMenu;
  if (!dish) return notFound();

  return (
    <div className="max-w-6xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Image Placeholder */}
      <div className="bg-gray-100 h-96 flex items-center justify-center relative">
        <span className="absolute top-2 left-2 bg-[#e94f1d] text-white px-2 py-1 text-xs rounded">SALE</span>
        <span className="text-gray-400">Image here</span>
      </div>

      {/* Info */}
      <div>
        <h1 className="text-3xl font-bold">{dish.name}</h1>
        <p className="text-red-500 mt-2">
          {'★'.repeat(dish.rating)} ({dish.reviews} customer review)
        </p>
        <p className="text-xl font-semibold mt-4">
          ${dish.priceRange[0].toFixed(2)} - ${dish.priceRange[1].toFixed(2)}
        </p>
        <p className="text-gray-500 mt-2">{dish.description}</p>

        {/* Add to cart */}
        <div className="mt-6 flex gap-4 items-center">
          <input
            type="number"
            min={1}
            defaultValue={1}
            className="w-16 border px-2 py-1 rounded text-center"
          />
          <button className="bg-[#e94f1d] text-white px-6 py-2 rounded hover:bg-red-700 transition">
            ADD TO CART
          </button>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <p><strong>SKU:</strong> {dish.sku}</p>
          <p><strong>Categories:</strong> {dish.categories.join(', ')}</p>
          <p><strong>Tags:</strong> {dish.tags.join(', ')}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="col-span-1 md:col-span-2 mt-10 border-t pt-6">
        <div className="flex gap-6 border-b pb-2">
          <button className="font-semibold text-black border-b-2 border-red-600">Description</button>
          <button className="text-gray-500">Additional Information</button>
          <button className="text-gray-500">Review (03)</button>
        </div>
        <p className="mt-6 text-sm text-gray-700">{dish.fullDescription}</p>
      </div>
    </div>
  );
}
