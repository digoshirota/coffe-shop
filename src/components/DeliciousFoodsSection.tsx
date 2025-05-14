import { Button } from "@/components/ui/button"
import { FoodItemCard } from "@/components/fragment/FoodItemCard"
import { FoodListItem } from "@/components/fragment/FoodListItem"
import Image from 'next/image';

export default function DeliciousFoodsSection() {
  return (
    <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <Button variant="default" className="bg-[#e94f1d] text-white text-xs px-4 py-1 rounded">
                        FOOD MENU
                    </Button>
                    <h2 className="text-3xl md:text-4xl font-extrabold mt-4">OUR DELICIOUS FOODS</h2>
                </div>

                <div className="flex gap-4 mt-6 md:mt-0">
                    {["All Food", "Breakfast", "Lunch", "Dinner"].map((cat, i) => (
                        <Button
                            key={i}
                            variant={i === 0 ? "default" : "outline"}
                            className={i === 0 ? "bg-[#e94f1d] border-[#e94f1d]" : ""}
                        >
                            {cat.toUpperCase()}
                        </Button>
                    ))}
                </div>
            </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Left column */}
        <div className="bg-white border rounded shadow p-4">
          <div className="relative w-full h-64">
            <Image
                src="/images/menu.png"
                alt="menu"
                fill
                className="object-cover"
              />
          </div>
          <FoodListItem title="Braised Short Ribs" description="Non nisi est sit amet facilisis magna" price="$15.00" />
          <FoodListItem title="Roasted Vegetable Platter" description="Non nisi est sit amet facilisis magna" price="$15.00" />
          <FoodListItem title="Classic Caesar Salad" description="Non nisi est sit amet facilisis magna" price="$15.00" />
          <FoodListItem title="Szechuan Beef Stir-Fry" description="Non nisi est sit amet facilisis magna" price="$15.00" />
          <FoodListItem title="Vegan Buddha Bowl" description="Non nisi est sit amet facilisis magna" price="$15.00" />
        </div>

        {/* Right grid */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FoodItemCard title="Classic Caesar Salad" price="$15.00" rating={5} image="/images/caesar.png" />
          <FoodItemCard title="Braised Short Ribs" price="$15.00" rating={5} image="/images/Ribs.png" />
          <FoodItemCard title="Chicken Masala" price="$15.00" rating={5} image="/images/Masala.png"/>
          <FoodItemCard title="Chicken Alfredo Pasta" price="$15.00" rating={5} image="/images/alfredo.png"/>
          <FoodItemCard title="Vegan Buddha Bowl" price="$15.00" rating={5} image="/images/vegan.png"/>
          <FoodItemCard title="Chocolate Lava Cake" price="$15.00" rating={5} image="/images/chocolate.png"/>
        </div>
      </div>
    </section>
  )
}
