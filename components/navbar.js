"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { name: "Home", href: "/" },
    { name: "Components", href: "/components" },
    // { name: "Installation", href: "/installation" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-black border-b shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">
          <Link href="/">SCAFFOLD</Link>
        </h1>
        <div className="flex gap-6">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/" // only match exact home
                : pathname.startsWith(link.href) // match subroutes for others

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors px-2 py-1 rounded-md 
                  ${isActive 
                    ? "text-white font-semibold border-b-2 border-blue-500" 
                    : "text-gray-300 hover:text-white hover:bg-gray-800"}`
                }
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
