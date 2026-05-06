"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/insurances", label: "Insurances" },
  { href: "/doctors", label: "Doctors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-white shadow-md" : "bg-white border-b border-border"
      }`}
      role="banner"
    >
      <nav className="container max-w-7xl" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
            aria-label="Amma Eye Care Hospital - Home"
          >
            <Image
              src="/logo-5b1-5damma.png"
              alt="Amma Eye Care Hospital"
              width={180}
              height={50}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-1" role="menubar">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || 
                (link.href !== "/" && pathname.startsWith(link.href))
              return (
                <li key={link.href} role="none">
                  <Link
                    href={link.href}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? "text-[#1e3a8a] bg-[#1e3a8a]/10"
                        : "text-foreground hover:text-[#1e3a8a] hover:bg-[#1e3a8a]/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[#1e3a8a] bg-transparent px-4 py-2 text-sm font-semibold text-[#1e3a8a] transition-all hover:bg-[#1e3a8a] hover:text-white"
            >
              Book Appointment
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`lg:hidden ${isOpen ? "block" : "hidden"}`}
          role="menu"
          aria-orientation="vertical"
        >
          <div className="border-t border-border py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || 
                (link.href !== "/" && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? "text-[#1e3a8a] bg-[#1e3a8a]/10"
                      : "text-foreground hover:text-[#1e3a8a] hover:bg-[#1e3a8a]/5"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-4 px-4 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#1e3a8a] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1e3a8a]/90 w-full text-center"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
