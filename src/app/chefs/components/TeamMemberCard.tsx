import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MailIcon, PhoneIcon, PrinterIcon , BriefcaseIcon } from "lucide-react"

export default function TeamMemberCard() {
  return (
    <div className="bg-[#f8f8f8] p-8 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-2xl font-bold text-black">Richard John</h2>
        <p className="text-sm text-red-600 font-semibold mt-1">Founder & CEO</p>
        <p className="text-sm text-gray-600 mt-4">
          Sem consequat mauris conubia inceptos nostra rutrum morbi sagittis pulvinar,
          commodo curabitur maecenas fermentum magna tempus nisi ullamcorper, ante auctor
          magnis pretium eu lectus euismod platea. Congue sociosqu nostra est urna
          pellentesque placerat euismod bibendum.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6 border-t pt-6">
          <Card>
            <CardContent className="flex items-center gap-2 p-4">
              <BriefcaseIcon className="w-4 h-4 text-red-600" />
              <div>
                <p className="text-xs text-gray-500">Experience</p>
                <p className="text-sm font-semibold">More Than 10 Years</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-2 p-4">
              <MailIcon className="w-4 h-4 text-red-600" />
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm font-semibold">info@agency.com</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-2 p-4">
              <PhoneIcon className="w-4 h-4 text-red-600" />
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-sm font-semibold">+(256) 58621-69581</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-2 p-4">
              <PrinterIcon className="w-4 h-4 text-red-600" />
              <div>
                <p className="text-xs text-gray-500">Fax</p>
                <p className="text-sm font-semibold">+2568145632</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Button className="mt-6 bg-[#e94f1d] hover:bg-red-700 text-white">
          Contact Me
        </Button>
      </div>

      <div className="w-full h-80 bg-gray-300 rounded-lg"></div> {/* Placeholder para imagem */}
    </div>
  )
}
