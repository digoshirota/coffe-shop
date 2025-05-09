// components/FoodItemCard.tsx
interface FoodItemCardProps {
    title: string
    price: string
    rating?: number
  }
  
  export function FoodItemCard({ title, price, rating }: FoodItemCardProps) {
    return (
      <div className="bg-white border rounded shadow-sm p-4 text-center">
        <div className="h-32 bg-gray-200 rounded mb-3" />
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
  