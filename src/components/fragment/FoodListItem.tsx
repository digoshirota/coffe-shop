// components/FoodListItem.tsx
interface FoodListItemProps {
    title: string
    description: string
    price: string
  }
  
  export function FoodListItem({ title, description, price }: FoodListItemProps) {
    return (
      <div className="flex justify-between border-b py-3">
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        <p className="text-[#e94f1d] font-semibold">{price}</p>
      </div>
    )
  }
  