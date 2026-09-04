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
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" }
]

const TOP_BAR_HREFS = ["/about", "/blogs"]

const topBarLinks = navLinks.filter((link) => TOP_BAR_HREFS.includes(link.href))
const mainNavLinks = navLinks.filter((link) => !TOP_BAR_HREFS.includes(link.href))

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

  const isLinkActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href))

  return (
    <header
      className={`sticky top-0 z-1000 w-full transition-all duration-200 ${
        isScrolled ? "bg-white shadow-md" : "bg-white border-b border-border"
      }`}
      role="banner"
    >
      {/* Utility bar — Blog & About, lg (1024px) and up only */}
      <div className="hidden lg:block border-b border-border bg-secondary/50">
        <div className="container max-w-7xl">
          <ul className="flex h-9 items-center justify-end gap-6" role="menubar" aria-label="Secondary navigation">
            {topBarLinks.map((link) => {
              const isActive = isLinkActive(link.href)
              return (
                <li key={link.href} role="none">
                  <Link
                    href={link.href}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                    className={`text-xs font-medium tracking-wide transition-colors ${
                      isActive
                        ? "text-[#1e3a8a]"
                        : "text-muted-foreground hover:text-[#1e3a8a]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <nav className="container max-w-7xl" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
            aria-label="Amma Eye Care Hospital - Home"
          >
            <Image
              src="/amma-eye-care-logo.webp"
              alt="Amma Eye Care Hospital"
              width={180}
              height={50}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-1" role="menubar">
            {mainNavLinks.map((link) => {
              const isActive = isLinkActive(link.href)
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
              href="/bookings"
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
      </nav>

      {/* Mobile menu — full-screen fixed overlay, rendered above floating widgets */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-[60] bg-white transition-opacity duration-200 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="menu"
        aria-orientation="vertical"
      >
        <div className="flex h-full flex-col">
          {/* Header row inside the overlay: logo + close button */}
          <div className="flex h-16 items-center justify-between px-4 border-b border-border flex-shrink-0">
            <Link href="/" aria-label="Amma Eye Care Hospital - Home">
              <Image
                src="/amma-eye-care-logo.webp"
                alt="Amma Eye Care Hospital"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Scrollable link list */}
          <div className="flex-1 overflow-y-auto py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                  className={`block px-4 py-3 mx-2 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? "text-[#1e3a8a] bg-[#1e3a8a]/10"
                      : "text-foreground hover:text-[#1e3a8a] hover:bg-[#1e3a8a]/5"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-4 px-4">
              <Link
                href="/bookings"
                className="inline-flex items-center justify-center rounded-lg bg-[#1e3a8a] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1e3a8a]/90 w-full text-center"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}