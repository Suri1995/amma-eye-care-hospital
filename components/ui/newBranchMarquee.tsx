"use client"

export function NewBranchMarquee() {
  const announcementItems = [
    "New Amma Eye Care Hospital is now at Kokapet",
    "New Amma Eye Care Hospital is now at Kokapet",
    "New Amma Eye Care Hospital is now at Kokapet",
  ]

  return (
    <div className="w-full">
      {/* Top Marquee - New Branch Announcement (Left to Right) */}
      <div
        className="relative w-full bg-[#b8860b] text-white py-2.5 overflow-hidden border-b border-white/10"
        aria-label="New branch announcement"
        aria-live="polite"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#b8860b] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#b8860b] to-transparent z-10" />

        <div className="flex w-max animate-marquee-left">
          {/* GROUP 1 */}
          <div className="flex items-center gap-8 pr-12 shrink-0">
            {announcementItems.map((text, i) => (
              <div key={`announce-g1-${i}`} className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-lg" aria-hidden="true">🏥</span>
                <span className="font-semibold tracking-wide">{text}</span>
              </div>
            ))}
          </div>

          {/* GROUP 2 (duplicate) */}
          <div className="flex items-center gap-8 pr-12 shrink-0">
            {announcementItems.map((text, i) => (
              <div key={`announce-g2-${i}`} className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-lg" aria-hidden="true">🏥</span>
                <span className="font-semibold tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-marquee-left {
          animation: marquee-left 20s linear infinite;
        }
      `}</style>
    </div>
  )
}