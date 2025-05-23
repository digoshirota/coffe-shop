import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

export const dynamic = "force-dynamic"; // Garante SSR mesmo em ambientes Vercel

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: "KUMAN TUNMAN", role: "WAITER", image: "/images/waiter.png" },
  { name: "BENJAMIN KENNETH", role: "WAITER", image: "/images/waiter1.png" },
  { name: "MATTHEW NATHANIEL", role: "WAITER", image: "/images/waiter2.png" },
  { name: "GEORGE JAMES", role: "Chef", image: "/images/chef.png" },
  { name: "EDWARD MAY", role: "Chef", image: "/images/chef1.png" },
  { name: "PATRICK ROBERT", role: "Chef", image: "/images/chef2.png" },
];

export default async function TeamPage() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="flex flex-col items-center p-4 shadow-sm">
              <div className="w-full h-100 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="text-center">
                <h3 className="text-lg font-semibold uppercase">{member.name}</h3>
                <p className="text-sm text-muted-foreground uppercase">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
