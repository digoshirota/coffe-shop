// components/Header.tsx
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'


const navItems = [
  { name: 'HOME', href: '/', dropdown: false },
  {
    name: 'PAGES',
    dropdown: true,
    items: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Our Chefs', href: '/our-chefs' },
      { name: 'Chefs', href: '/chefs' },
      { name: 'Gallery', href: '/food-gallery-posts' },
    ],
  },
  {
    name: 'SHOP',
    dropdown: true,
    items: [
      { name: 'Menu', href: '/menu' },
      { name: 'Shop List', href: '/shop' },
    ],
  },
  {
    name: 'BLOG',
    dropdown: true,
    items: [
      { name: 'Latest Posts', href: '/latest-news' },
    ],
  },
  { name: 'CONTACT', href: '/contact-us', dropdown: false },
]

export default function Header() {
  return (
    <header className="bg-black text-white text-sm border-b border-zinc-800">
      <div className="container mx-auto">
        {/* Top bar */}
        <div className="flex justify-between items-center mx-4 py-2 border-b border-zinc-800 hidden lg:flex">
          <div className="flex gap-4 items-center">
            <span>Mon-Wed: 11a-9p</span>
            <span className="w-2 h-2 bg-zinc-500 rotate-45" />
            <span>Thurs-Sat: 11a-10p</span>
          </div>
          <div className="flex gap-4 items-center text-xs">
            <span>reservations@delish.com</span>
            <span className="w-2 h-2 bg-zinc-500 rotate-45" />
            <span>123 456 7899</span>
            <span className="w-2 h-2 bg-zinc-500 rotate-45" />
            <span>296 Ridao Avenue Mor Berlin 251584</span>
          </div>
        </div>

        {/* Main nav */}
        <div className="flex justify-between items-center mx-4 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-lg">
            <Image src="/logo.png" alt="TASTELY" width={45} height={50} />
            TASTELY
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 items-center relative">
            {navItems.map((item, index) => (
              <div key={index} className={`relative group h-8 top-[6px]`}>
                {!item.dropdown ? (
                  <Link
                    href={item.href || '#'}
                    className="hover:text-red-500 transition"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-red-500 transition">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className="absolute  left-0 mt-2 hidden group-hover:block bg-white text-black rounded shadow-md z-50 min-w-[160px] top-[18px]">
                      {item.items?.map((subitem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subitem.href}
                          className="block px-4 py-2 hover:bg-zinc-100"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <Link href="/book-table">
            <Button
              variant="outline"
              className="custom-border text-white hover:custom-bg rounded-none bg-black"
            >
              BOOK A TABLE
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
