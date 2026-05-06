import Link from "next/link"

const INFO_ITEMS = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 1C5.79 1 4 2.9 4 5.2c0 3.2 4 8.8 4 8.8s4-5.6 4-8.8C12 2.9 10.21 1 8 1z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8" cy="5.2" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
    iconBg: "bg-[#e6f1fb]",
    iconColor: "text-[#185fa5]",
    label: "Visit us",
    content: (
      <>
        Amma Eye Care Hospital<br />
        Hyderabad, Telangana<br />
        India
      </>
    ),
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3 3h2.5l1 3-1.75 1.5a8.5 8.5 0 004.75 4.75L11 10.5l3 1V14a1 1 0 01-1 1C6.163 15 1 9.837 1 3a1 1 0 011-1h1z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconBg: "bg-[#e1f5ee]",
    iconColor: "text-[#0f6e56]",
    label: "Call us",
    content: (
      <a
        href="tel:+919246446244"
        className="text-[#185fa5] transition-colors hover:text-[#0c447c] hover:underline"
      >
        +91 92464 46244
      </a>
    ),
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="1.5" y="3" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M1.5 5.5l6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    iconBg: "bg-[#faeeda]",
    iconColor: "text-[#854f0b]",
    label: "Email us",
    content: (
      <a
        href="mailto:ammaeyecarehospital@gmail.com"
        className="break-all text-[#185fa5] transition-colors hover:text-[#0c447c] hover:underline"
      >
        ammaeyecarehospital@gmail.com
      </a>
    ),
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M8 4.5v4l2.5 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    iconBg: "bg-[#eeedfe]",
    iconColor: "text-[#534ab7]",
    label: "Working hours",
    content: (
      <>
        Monday – Saturday<br />
        9:00 AM – 6:00 PM<br />
        <span className="mt-0.5 inline-block text-[11.5px] text-[#8b92b8]">
          Sunday: Closed
        </span>
      </>
    ),
  },
]

export default function ContactInfo() {
  return (
    <div className="lg:col-span-1">
      <div className="flex flex-col gap-4">
        {/* Info cards */}
        {INFO_ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-start gap-3.5 rounded-2xl border border-[#e6edf6] bg-white p-4 shadow-sm"
          >
            <div
              className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] ${item.iconBg} ${item.iconColor}`}
            >
              {item.icon}
            </div>
            <div className="min-w-0">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.07em] text-[#7a93b3]">
                {item.label}
              </p>
              <p className="text-[13px] leading-[1.6] text-[#2a3f6f]">
                {item.content}
              </p>
            </div>
          </div>
        ))}

        {/* Quick actions card */}
        <div
          className="rounded-2xl p-5"
          style={{
            background: "linear-gradient(135deg, #042c53 0%, #0c447c 60%, #185fa5 100%)",
          }}
          role="group"
          aria-label="Quick actions"
        >
          <p className="mb-4 text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#85b7eb]">
            Quick actions
          </p>

          <div className="flex flex-col gap-3">

            <a
              href="https://wa.me/919246446244"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start a video consultation via WhatsApp with Amma Eye Care Hospital"
              className="flex w-full items-center justify-center gap-2.5 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white transition-all hover:-translate-y-px active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "0.5px solid rgba(255,255,255,0.2)",
              }}
            >
              {/* Live dot */}
              <span
                className="h-2 w-2 flex-shrink-0 rounded-full bg-[#22c55e]"
                style={{ boxShadow: "0 0 0 3px rgba(34,197,94,0.25)" }}
                aria-hidden="true"
              />
              {/* WhatsApp icon */}
              <svg
                width="15" height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Video Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}