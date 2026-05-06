import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function ContactSuccess({
  appointmentId,
  onReset,
}: {
  appointmentId: string
  onReset: () => void
}) {
  return (
    <div className="flex min-h-[60vh] flex-1 items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <div className="overflow-hidden rounded-2xl border border-[#e6edf6] bg-white shadow-sm">
          {/* Top accent bar */}
          <div
            className="h-1.5 w-full"
            style={{
              background: "linear-gradient(90deg, #185fa5 0%, #1d9e75 100%)",
            }}
            aria-hidden="true"
          />

          <div className="px-8 py-10 text-center">
            {/* Success icon */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#e1f5ee]">
              <CheckCircle
                className="h-8 w-8 text-[#0f6e56]"
                aria-hidden="true"
              />
            </div>

            <h2 className="mb-2 text-2xl font-bold text-[#0c2a5e]">
              Message Received!
            </h2>

            {appointmentId && (
              <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-[#e6f1fb] px-4 py-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#185fa5]">
                  Appointment ID
                </span>
                <span className="font-mono text-[13px] font-bold text-[#0c447c]">
                  {appointmentId}
                </span>
              </div>
            )}

            <p className="mx-auto mb-8 max-w-sm text-sm leading-relaxed text-[#526b8c]">
              Thank you for contacting Amma Eye Care. We&apos;ll respond to your
              inquiry within 24 hours.
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#1e3a8a] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#185fa5] hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a8a]"
              >
                <svg
                  width="15" height="15"
                  viewBox="0 0 15 15" fill="none"
                  aria-hidden="true"
                >
                  <path d="M1.5 7.5l6-6 6 6M3 6v7.5h3.5V10h2v3.5H12V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Return to Home
              </Link>

              <button
                onClick={onReset}
                className="flex w-full items-center justify-center gap-2 rounded-[10px] border border-[#d4dff0] bg-transparent px-6 py-3 text-sm font-semibold text-[#526b8c] transition-all hover:bg-[#f4f8fd] hover:-translate-y-px active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#185fa5]"
              >
                <svg
                  width="15" height="15"
                  viewBox="0 0 15 15" fill="none"
                  aria-hidden="true"
                >
                  <path d="M2 7.5a5.5 5.5 0 1011 0 5.5 5.5 0 00-11 0zM2 7.5L.5 6M2 7.5L.5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Send Another Message
              </button>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-5 text-center text-xs text-[#8b9cb8]">
          Questions?{" "}
          <a href="tel:+919246446244" className="text-[#185fa5] hover:underline">
            Call us at +91 92464 46244
          </a>
        </p>
      </div>
    </div>
  )
}