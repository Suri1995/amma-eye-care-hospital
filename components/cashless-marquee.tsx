"use client"

import { ShieldCheck } from "lucide-react"

export function CashlessMarquee() {
  const items = [
    "Cashless Facility Available with Major Insurances",
    "Cashless Facility Available with Major Insurances",
    "Cashless Facility Available with Major Insurances",
  ]

  return (
    <div
      className="relative w-full bg-[#0f5c3f] text-white py-2 overflow-hidden"
      aria-label="Cashless facility announcement"
      aria-live="polite"
    >
      {/* Gradient fade edges (premium look) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0f5c3f] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0f5c3f] to-transparent z-10" />

      <div className="flex w-max animate-marquee">

        {/* GROUP 1 */}
        <div className="flex items-center gap-8 pr-12 shrink-0">
          {items.map((text, i) => (
            <div key={`g1-${i}`} className="flex items-center gap-2 whitespace-nowrap">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              <span className="font-medium">{text}</span>
            </div>
          ))}
        </div>

        {/* GROUP 2 (duplicate) */}
        <div className="flex items-center gap-8 pr-12 shrink-0">
          {items.map((text, i) => (
            <div key={`g2-${i}`} className="flex items-center gap-2 whitespace-nowrap">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              <span className="font-medium">{text}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}