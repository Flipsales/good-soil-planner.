"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Leaf, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/testimonials", label: "Stories" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-amber-400" />
            <span className="text-xl font-bold">Good Soil</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-amber-400 transition-colors ${pathname === item.href ? "text-amber-400" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex space-x-4">
            <Link href="/login">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              >
                Login
              </Button>
            </Link>
            <Link href="/get-started">
              <Button className="bg-amber-400 text-slate-900 hover:bg-amber-500">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-amber-400 transition-colors ${pathname === item.href ? "text-amber-400" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-slate-700">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/get-started" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-amber-400 text-slate-900 hover:bg-amber-500">Get Started</Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
