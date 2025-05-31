// app/components/Footer.tsx
import Link from "next/link";
import Image from 'next/image';

import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12">
      {/* Top Reservation Banner */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-4 md:px-8 lg:px-20 py-8 border-b border-white/10 container mx-auto">

        <div className="flex items-center gap-4 mb-4 md:mb-0">
          {/* 3 Circles */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-white/70" />
            <div className="w-3 h-3 rounded-full bg-white/40" />
            <div className="w-3 h-3 rounded-full bg-white/40" />
          </div>
          <p className="text-sm md:text-base">
            Are You Want To Make A Reservation,{" "}
            <Link href={`/book-table`} className="underline hover:text-white">
              Get Your Table
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Phone size={18} className="text-orange-500" />
          <span className="text-orange-500 font-bold">FREE</span>
          <span>+92 (8800)-9850</span>
        </div>
      </div>

      {/* Main Footer */}
      <div className="grid md:grid-cols-4 gap-10 sm:px-8 md:px-4 lg:px-20 px-12 py-12 container mx-auto">
        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
          <p className="flex items-center gap-2 text-sm mb-2">
            <MapPin size={16} /> Silk St, Barbican, London E2Y, UK
          </p>
          <p className="flex items-center gap-2 text-sm mb-2">
            <Phone size={16} /> +39-055-123456
          </p>
          <p className="flex items-center gap-2 text-sm mb-4">
            <Mail size={16} /> booking@example.com
          </p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Facebook className="text-[#e94f1d]" size={18} />
            </Button>
            <Button variant="ghost" size="icon">
              <Image
                src="/images/x.png"
                alt="menu"
                width={58}
                height={58}

              />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="text-[#e94f1d]" size={18} />
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="text-[#e94f1d]" size={18} />
            </Button>
          </div>
        </div>

        {/* Food Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-4">FOOD MENU</h3>
          <ul className="space-y-2 text-sm">
            <li>→ White Castle</li>
            <li>→ Beef Sandwich</li>
            <li>→ Cherry Limeade</li>
            <li>→ Wendy’s Frosty</li>
            <li>→ Pumpkin Spice</li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4">WORKING HOURS</h3>
          <ul className="text-sm space-y-2">
            <li>Monday - Friday 09:00 - 22:00</li>
            <li>Saturday 11:00 - 00:00</li>
            <li>Sunday 11:00 - 23:00</li>
            <li>* Happy hour 17:00 - 21:00</li>
          </ul>
        </div>

        {/* Instagram */}
        <div>
          <h3 className="text-lg font-semibold mb-4">INSTAGRAM</h3>
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white/10 h-20 rounded-md" />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 px-6 md:px-20 py-6 flex flex-col md:flex-row items-center justify-between text-sm container mx-auto">
        <p>© Copyright Tastly. All Rights Reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Terms Of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
