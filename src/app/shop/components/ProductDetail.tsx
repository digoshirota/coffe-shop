'use client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs';

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
        <div className="w-full h-[400px] relative">
          <Image
            src={`/images/roasted-vegetable-platter.png`}
            alt="ceo"
            fill
            className="object-cover"
          />
        </div>
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
      <div className="col-span-1 md:col-span-2 mt-10 border-t pt-6">
        <Tabs defaultValue="description" className="w-full mt-10 tabs-custom">
          <TabsList className="flex gap-6 border-b p-0 bg-transparent shadow-none">
            <TabsTrigger
              value="description"
              className="text-sm font-medium text-muted-foreground data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-[#e94f1d] rounded-none px-0 py-2"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="info"
              className="text-sm font-medium text-muted-foreground data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-[#e94f1d] rounded-none px-0 py-2"
            >
              Additional Information
            </TabsTrigger>
            <TabsTrigger
              value="review"
              className="text-sm font-medium text-muted-foreground data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-[#e94f1d] rounded-none px-0 py-2"
            >
              Review (03)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6 text-sm text-gray-700">
            {dish.fullDescription}
          </TabsContent>
          <TabsContent value="info" className="mt-6 text-sm text-gray-700">
            info
          </TabsContent>
          <TabsContent value="review" className="mt-6 text-sm text-gray-700">
            reviews.
          </TabsContent>
        </Tabs>

      </div>




    </div >
  );
}
