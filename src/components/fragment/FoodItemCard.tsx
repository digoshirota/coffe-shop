// components/FoodItemCard.tsx
import Image from 'next/image';
interface FoodItemCardProps {
    title: string
    price: string
    rating?: number
    image: string
  }

  
  
  export function FoodItemCard({ title, price, rating,image }: FoodItemCardProps) {
    return (
      <div className="bg-white border rounded shadow-sm p-4 text-center">
        <div className="relative w-full h-64">
          <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
        </div>
        {rating && (
          <div className="text-[#e94f1d] text-sm mb-1">
            {"★".repeat(rating)}{"☆".repeat(5 - rating)}
          </div>
        )}
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-[#e94f1d] font-semibold mt-1">{price}</p>
      </div>
    )
  }
  