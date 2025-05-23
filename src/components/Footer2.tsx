// components/Footer.tsx
import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Send,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top CTA */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
          <div>
            <p className="text-xs uppercase text-gray-500 mb-1">
              Book a table for your and family members
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Need a table on coffee house
            </h2>
          </div>
          <Link
            href={`/book-table`}
            className=""
          >
            <button className="border border-black text-black px-6 py-2 hover:bg-black hover:text-white transition">
              BOOK A TABLE
            </button>
          </Link>

        </div>
      </div>


      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold mb-2">TASTELY</h3>
          <p className="text-gray-400">
            1234, Restaurant St, South City<br />
            New York 0124
          </p>
          <div className="flex gap-3 mt-4">
            <Facebook className="w-5 h-5 bg-[#e94f1d] p-1 rounded-full" />
            <Instagram className="w-5 h-5 bg-zinc-700 p-1 rounded-full" />
            <Twitter className="w-5 h-5 bg-zinc-700 p-1 rounded-full" />
            <Linkedin className="w-5 h-5 bg-zinc-700 p-1 rounded-full" />
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold mb-3">LINKS</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link
            href={`/about-us`}
            className=""
             >About Us</Link>
            </li>
            <li><Link
            href={`/our-chefs`}
            className=""
          >Meet our team</Link></li>
            <li><Link
            href={`/latest-news`}
            className=""
          >Latest News</Link></li>
            <li><Link
            href={`/contact-us`}
            className=""
          >Contact</Link></li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h4 className="font-bold mb-3">OTHER LINK</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link
            href={`/#`}
            className=""
          >Careers</Link></li>
            <li><Link
            href={`/#`}
            className=""
          >Creative Agency</Link></li>
            <li><Link
            href={`/#`}
            className=""
          >Digital Agency</Link></li>
            <li><Link
            href={`/#`}
            className=""
          >Marketing</Link></li>
            <li><Link
            href={`/#`}
            className=""
          >Digital Services</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-3">NEWSLETTER</h4>
          <p className="text-gray-400 mb-4">
            Subscribe us & receive our offers and updates your inbox directly
          </p>
          <div className="flex bg-zinc-800 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent flex-grow px-3 py-2 outline-none text-white placeholder:text-zinc-400"
            />
            <button className="text-red-500 px-3 flex items-center justify-center">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800 py-4 text-sm flex flex-col md:flex-row justify-between items-center px-6 gap-2">
        <p className="text-gray-500">All rights received 2024. TASTELY Restaurant</p>
        <div className="flex gap-4 text-gray-500">
          <span>Terms Of Use</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
