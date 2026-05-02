"use client"

import { ShieldCheck } from "lucide-react"

export function CashlessMarquee() {
  return (
    <div 
      className="w-full bg-[#b8860b] text-white py-2 overflow-hidden"
      role="marquee"
      aria-label="Cashless facility announcement"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-2 mx-8">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span className="font-medium">Cashless Facility Available with Major Insurances</span>
          </div>
        ))}
      </div>
    </div>
  )
}
