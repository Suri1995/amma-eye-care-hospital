"use client"

import Link from "next/link"
import { Calendar, Video } from "lucide-react"

export function MobileCTA() {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="flex">
        <Link
          href="/appointment"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#1e3a8a] text-white font-semibold text-sm transition-colors hover:bg-[#1e3a8a]/90"
        >
          <Calendar className="w-4 h-4" aria-hidden="true" />
          <span>Book Appointment</span>
        </Link>
        <Link
          href="/video-consultation"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#dc2626] text-white font-semibold text-sm transition-colors hover:bg-[#dc2626]/90"
        >
          <Video className="w-4 h-4" aria-hidden="true" />
          <span>Video Consult</span>
        </Link>
      </div>
    </div>
  )
}
