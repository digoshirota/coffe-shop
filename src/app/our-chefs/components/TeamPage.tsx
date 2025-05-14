import { Card, CardContent } from "@/components/ui/card";

export const dynamic = "force-dynamic"; // Garante SSR mesmo em ambientes Vercel

interface TeamMember {
  name: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  { name: "KUMAN TUNMAN", role: "WAITER" },
  { name: "BENJAMIN KENNETH", role: "WAITER" },
  { name: "MATTHEW NATHANIEL", role: "WAITER" },
  { name: "GEORGE JAMES", role: "WAITER" },
  { name: "EDWARD MAY", role: "WAITER" },
  { name: "PATRICK ROBERT", role: "WAITER" },
];

export default async function TeamPage() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="flex flex-col items-center p-4 shadow-sm">
              <div className="w-full h-56 bg-gray-200 mb-4" />
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
