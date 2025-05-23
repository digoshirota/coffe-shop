import Image from 'next/image';
type MenuItemProps = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export default function MenuItem({ name, description, price, image }: MenuItemProps) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm">
      <div className="flex items-center space-x-4" >
        <div className="relative w-20 h-20 rounded-full overflow-hidden">
          <Image
            src={`${image}`}
            alt="name"
            fill
            className="object-cover"
          />
        </div>

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
