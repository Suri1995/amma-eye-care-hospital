"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, ArrowUp, Heart, ChevronDown } from "lucide-react"
import { Button } from "./ui/button"

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Doctor", href: "#doctor" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

const services = [
  { name: "Cataract Surgery", href: "#services" },
  { name: "LASIK Surgery", href: "#services" },
  { name: "Glaucoma Treatment", href: "#services" },
  { name: "Retina Services", href: "#services" },
  { name: "Pediatric Eye Care", href: "#services" },
  { name: "Dry Eye Treatment", href: "#services" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
]

interface FooterDropdownProps {
  title: string
  children: React.ReactNode
}

function FooterDropdown({ title, children }: FooterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/10 last:border-b-0 md:border-none">
      {/* Mobile Only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 md:hidden"
        aria-expanded={isOpen}
      >
        <h3 className="text-base font-bold text-primary relative">
          {title}
          <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#F22233]" />
        </h3>
        <ChevronDown 
          className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </div>

      {/* Desktop Only */}
      <h3 className="hidden md:inline-block mb-6 text-lg font-bold text-primary relative">
        {title}
        <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#F22233]" />
      </h3>
      <div className="hidden md:block">
        {children}
      </div>
    </div>
  )
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-300">
      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#F22233] hover:bg-[#d91e2c] shadow-lg shadow-[#F22233]/30 p-0"
      >
        <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:pt-20 pb-8">
        <div className="grid gap-0 md:gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column - always visible, no dropdown */}
          <div className="md:col-span-2 lg:col-span-1 pb-6 md:pb-0 border-b border-white/10 md:border-none">
            <a href="#" className="mb-5 sm:mb-6 flex items-center gap-2 sm:gap-3 group inline-flex">
              <Image
                            src="/amma-eye-care-logo.png"
                            alt="Amma Eye Care"
                            width={200}
                            height={50}
                            priority
                            className="h-10 w-auto object-contain transition-opacity duration-200 group-hover:opacity-85"
                          />
            </a>
            <p className="mb-5 sm:mb-6 text-gray-700 text-sm leading-relaxed max-w-xs">
              Providing exceptional eye care services since 1998. Your vision is our mission. 
              Experience world-class treatment with compassionate care.
            </p>

            {/* Social links */}
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-white transition-all duration-300 ${social.color} hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" fill="#ffffff" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links - dropdown on mobile */}
          <FooterDropdown title="Quick Links">
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-secondary transition-all duration-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-secondary" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </FooterDropdown>

          {/* Services - dropdown on mobile */}
          <FooterDropdown title="Our Services">
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-sm text-secondary transition-all duration-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-secondary" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </FooterDropdown>

          {/* Contact - dropdown on mobile */}
          <FooterDropdown title="Contact Info">
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F22233]/10">
                  <MapPin className="h-4 w-4 text-[#F22233]" />
                </div>
                <span className="text-sm text-secondary leading-relaxed">
                  Amma Eye Care Hospital, Opp. General Hospital, Main Road, Medical District - 500001
                </span>
              </li>
              <li>
                <a href="tel:+911234567890" className="flex items-center gap-3 group">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F22233]/10 group-hover:bg-[#F22233] transition-colors">
                    <Phone className="h-4 w-4 text-[#F22233] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm text-secondary group-hover:text-white transition-colors">
                    +91 1234 567 890
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:info@ammaeyecare.com" className="flex items-center gap-3 group">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F22233]/10 group-hover:bg-[#F22233] transition-colors">
                    <Mail className="h-4 w-4 text-[#F22233] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm text-secondary group-hover:text-white transition-colors">
                    info@ammaeyecare.com
                  </span>
                </a>
              </li>
            </ul>
          </FooterDropdown>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:py-6 text-xs sm:text-sm text-gray-500 sm:flex-row">
          <p className="flex items-center gap-1 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Amma Eye Care Hospital. Made with 
            <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-[#F22233] fill-[#F22233] mx-0.5" />
            for better vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
