import { ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-black text-white text-sm border-b border-zinc-800">
      {/* Top bar */}
      <div className="container mx-auto">
        <div className="flex justify-between items-center mx-4 py-2 border-b border-zinc-800">
          <div className="flex gap-4 items-center">
            <span>Mon-Wed: 11a-9p</span>
            <span className="square-custom bg-gray-token rotate-45"></span>
            <span>Thurs-Sat: 11a-10p</span>
          </div>
          <div className="flex gap-4 items-center">
            <span>reservations@delish.com</span>
            <span className="square-custom bg-gray-token rotate-45"></span>
            <span>123 456 7899</span>
            <span className="square-custom bg-gray-token rotate-45"></span>
            <span>296 Ridao Avenue Mor Berlin 251584</span>
          </div>
        </div>

        {/* Main nav */}
        <div className="flex justify-between items-center mx-4 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-lg">
            <Image src="/logo.png"   
              alt="TASTELY"
              width={45}
              height={50}/>
            TASTELY 
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            {[
              { name: "HOME", dropdown: false },
              { name: "PAGES", dropdown: true },
              { name: "PAGES", dropdown: true },
              { name: "SHOP", dropdown: true },
              { name: "BLOG", dropdown: true },
              { name: "CONTACT", dropdown: false },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-1 cursor-pointer hover:text-red-500 transition"
              >
                <span>{item.name}</span>
                {item.dropdown && <ChevronDown className="w-4 h-4" />}
              </div>
            ))}
          </nav>

          {/* Call to action */}
          <Button variant="outline" className="custom-border text-white hover:custom-bg rounded-none bg-black">
            BOOK A TABLE
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
