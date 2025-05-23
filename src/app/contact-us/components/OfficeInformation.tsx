import { Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image"

export default function OfficeInformation() {
  return (
    <section className="bg-gray-100 relative bg-white min-h-screen flex items-center justify-center px-4 md:px-16 py-16 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl w-full justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-bold mb-2">OFFICE INFORMATION</h2>
          <p className="text-sm text-gray-600 mb-6">
            Completely recapitalize 24/7 communities via standards compliant metrics whereas.
          </p>

          {/* Phone Section */}
          <div className="flex items-start gap-4 border-t border-b py-4">
            <div className="bg-red-100 p-2 rounded">
              <Phone className="text-red-600" size={20} />
            </div>
            <div>
              <h4 className="font-semibold">Phone Number & Email</h4>
              <p className="text-sm text-gray-600">+(310) xxxx xxxxxxx</p>
              <p className="text-sm text-gray-600">xptoh@xxxpto.com</p>
            </div>
          </div>

          {/* Address Section */}
          <div className="flex items-start gap-4 border-b py-4">
            <div className="bg-red-100 p-2 rounded">
              <MapPin className="text-red-600" size={20} />
            </div>
            <div>
              <h4 className="font-semibold">Our Office Address</h4>
              <p className="text-sm text-gray-600">
                258 Dancing Street, Miland Line,<br />
                HUY1 21563, NewYork
              </p>
            </div>
          </div>



          {/* Hours Section */}
          <div className="flex items-start gap-4 pt-4">
            <div className="bg-red-100 p-2 rounded">
              <Clock className="text-red-600" size={20} />
            </div>
            <div>
              <h4 className="font-semibold">Official Work Time</h4>
              <p className="text-sm text-gray-600">
                7:00am - 6:00pm ( Mon - Fri )<br />
                Sat, Sun & <span className="text-red-500 font-medium">Holiday Closed</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-110 h-110 relative">
            <Image
              src={`/images/map.png`}
              alt="food-blog"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
