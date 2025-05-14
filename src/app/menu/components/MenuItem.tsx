type MenuItemProps = {
    name: string;
    description: string;
    price: string;
  };
  
  export default function MenuItem({ name, description, price }: MenuItemProps) {
    return (
      <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gray-300" />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
        <div className="text-red-600 font-semibold text-sm border-dotted border-t border-red-400 pt-1">
          {price}
        </div>
      </div>
    );
  }
  