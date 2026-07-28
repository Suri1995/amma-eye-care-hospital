import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Thank You | Amma Eye Care Hospital",
  description:
    "Thank you for your appointment request. We will review your details and confirm shortly.",
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#f0f4f9]">
      {/* Header */}
      <div className="bg-white border-b border-[#e0e8f0] py-6 mb-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-start gap-4">
            <div className="bg-[#1e3a8a] text-white rounded-lg p-3 flex-shrink-0">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 2C7.89543 2 7 2.89543 7 4V20C7 21.1046 7.89543 22 9 22H15C16.1046 22 17 21.1046 17 20V4C17 2.89543 16.1046 2 15 2H9ZM9 4H15V20H9V4Z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0c2a5e]">Book Appointment</h2>
              <p className="text-[#526b8c]">Fill in your details and we&apos;ll confirm shortly</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <div className="flex items-center justify-between">
          {/* Personal */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-12 h-12 rounded-full bg-[#1d9e75] flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[#1d9e75] font-semibold text-sm">Personal</span>
          </div>
          <div className="flex-1 h-1 bg-[#1d9e75] mx-2 mb-8" />

          {/* Schedule */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-12 h-12 rounded-full bg-[#1d9e75] flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[#1d9e75] font-semibold text-sm">Schedule</span>
          </div>
          <div className="flex-1 h-1 bg-[#1d9e75] mx-2 mb-8" />

          {/* Message */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-12 h-12 rounded-full bg-[#1d9e75] flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[#1d9e75] font-semibold text-sm">Message</span>
          </div>
        </div>
      </div>

      {/* Success Message */}
      <div className="max-w-2xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-3xl border border-[#dce6f2] p-8 md:p-12 text-center shadow-sm relative">
          {/* Decorative checkmark */}
          <div className="absolute top-8 right-8 text-[#1d9e75] opacity-20">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </div>

          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-[#d4f8e9] flex items-center justify-center">
              <svg className="w-10 h-10 text-[#1d9e75]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
          </div>

          {/* Thank You Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#0c2a5e] mb-4">Thank you!</h1>

          {/* Description */}
          <p className="text-lg text-[#526b8c] mb-8">
            Your appointment request has been submitted successfully.<br />
            We&apos;ll review the details and confirm shortly.
          </p>

          {/* What Happens Next */}
          <div className="bg-[#f8fbff] rounded-2xl border border-[#dce6f2] p-6 text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#7a93b3] mb-4">
              What happens next
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#1d9e75] flex-shrink-0 mt-2" />
                <span className="text-[#2a3f6f]">We will contact you using your submitted email or phone number.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#1d9e75] flex-shrink-0 mt-2" />
                <span className="text-[#2a3f6f]">Your selected time slot has been recorded for review.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#1d9e75] flex-shrink-0 mt-2" />
                <span className="text-[#2a3f6f]">Please keep your phone available for confirmation.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="max-w-2xl mx-auto px-4 mb-12 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1e3a8a] text-white rounded-lg font-semibold hover:bg-[#1a2e6b] transition-colors"
        >
          Back to Home
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/bookings"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#1e3a8a] text-[#1e3a8a] rounded-lg font-semibold hover:bg-[#f0f4f9] transition-colors"
        >
          Book Another Appointment
        </Link>
      </div>
    </div>
  )
}
