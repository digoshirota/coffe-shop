// components/ServiceCard.tsx
import { Button } from "@/components/ui/button"
import Image from 'next/image';

interface ServiceCardProps {
  title: string
  description: string
  image: string
}

export function ServiceCard({ title, description,image }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 shadow rounded-md ">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt="Descrição"
          fill
          className="object-cover"
        />
      </div>
      <h3 className="font-bold text-sm mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <Button variant="outline" className="text-[#e94f1d] border-[#e94f1d] hover:bg-[#e94f1d]/10">
        READ MORE →
      </Button>
    </div>
  )
}
