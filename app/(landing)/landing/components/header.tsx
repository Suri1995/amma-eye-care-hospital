"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Menu, Phone, MapPin, Clock, X, ChevronRight } from "lucide-react"

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Doctor", href: "#doctor" },
  { name: "Gallery", href: "#gallery" },
  { name: "Why Us", href: "#why-us" },
  { name: "Faqs", href: "#faqs"},
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = [...navigation.map(n => n.href.replace("#", "")).filter(Boolean)].reverse()
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${isScrolled ? "shadow-xl shadow-black/5" : ""}`}>

      {/* Top info bar */}
      <div className="bg-linear-to-r from-[#3B2E8C] via-[#3B2E8C] to-[#1F5AA6] text-white overflow-hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:py-2.5">
          <div className="flex items-center gap-2 overflow-hidden md:pl-2">
            <span className="shrink-0 rounded-full bg-[#F22233] px-2.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wide animate-pulse">
              Open Today
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-xs sm:text-sm text-white/90">
              <Clock className="h-3.5 w-3.5" />
              Mon-Sat: 10:30 AM - 8:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+919000196244"
              className="flex items-center gap-1.5 text-xs sm:text-sm hover:text-[#F2B035] transition-colors"
            >
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">+91 1234 567 890</span>
              <span className="xs:hidden">Call</span>
            </a>
            <a
              href="#contact"
              className="hidden md:flex items-center gap-1.5 text-sm hover:text-[#F2B035] transition-colors"
            >
              <MapPin className="h-4 w-4" />
              <span>Location</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className={`bg-white/95 backdrop-blur-lg border-b border-gray-100 transition-all duration-500 ${isScrolled ? "py-2" : "py-3 sm:py-4"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">

          {/* Logo */}
          <a href="#" className="flex items-center group">
            <Image
              src="/amma-eye-care-logo.webp"
              alt="Amma Eye Care"
              width={200}
              height={50}
              priority
              className="h-10 w-auto object-contain transition-opacity duration-200 group-hover:opacity-85"
            />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive =
                activeSection === item.href.replace("#", "") ||
                (item.href === "#" && activeSection === "")
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-[#F22233] bg-[#F22233]/5"
                      : "text-gray-600 hover:text-[#3B2E8C] hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#F22233]" />
                  )}
                </a>
              )
            })}
          </nav>

          {/* CTA button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild className="bg-[#F22233] text-white hover:bg-[#d91e2c] shadow-lg shadow-[#F22233]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#F22233]/30 hover:scale-105 btn-shine">
              <a href="#contact">
                Book Appointment
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button asChild size="sm" className="bg-[#F22233] text-white hover:bg-[#d91e2c] shadow-md text-xs sm:text-sm">
              <a href="tel:+911234567890">
                <Phone className="h-3.5 w-3.5 sm:mr-1.5" />
                <span className="hidden sm:inline">Call Now</span>
              </a>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#3B2E8C] hover:bg-[#3B2E8C]/5">
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-75 sm:w-87.5 p-0 border-l-0">
                <div className="flex h-full flex-col bg-linear-to-b from-white to-gray-50">

                  {/* Mobile header */}
                  <div className="flex items-center justify-between border-b border-gray-100 p-4 sm:p-5 bg-white">
                    <a href="#" onClick={() => setIsOpen(false)}>
                      <Image
                        src="/amma-eye-care-logo.webp"
                        alt="Amma Eye Care"
                        width={140}
                        height={35}
                        className="h-8 w-auto object-contain"
                      />
                    </a>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-5 w-5 text-gray-500" />
                    </Button>
                  </div>

                  {/* Mobile nav */}
                  <nav className="flex flex-col gap-1 p-4 flex-1">
                    {navigation.map((item, index) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 transition-all hover:bg-[#F22233]/5 hover:text-[#F22233] hover:translate-x-1"
                      >
                        {item.name}
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </a>
                    ))}
                  </nav>

                  {/* Footer */}
                  <div className="border-t border-gray-100 p-4 sm:p-5 bg-white space-y-3">
                    <Button className="w-full h-12 bg-[#F22233] text-white hover:bg-[#d91e2c] shadow-lg text-base" asChild>
                      <a href="#contact">
                        Book Appointment
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>

                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  )
}