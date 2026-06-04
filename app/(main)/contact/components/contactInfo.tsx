import Link from "next/link"

const INFO_ITEMS = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="1.5" y="3" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M1.5 5.5l6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    iconBg: "bg-[#faeeda]",
    iconColor: "text-[#854f0b]",
    label: "LB Nagar",
    email: "ammaeyecarehospital@gmail.com",
    whatsappNumber: "9246446244", // Format: 92464 46244 without space
    content: (
      <>
        <a
          href="mailto:ammaeyecarehospital@gmail.com"
          className="block break-all text-[#185fa5] transition-colors hover:text-[#0c447c] hover:underline"
        >
          ammaeyecarehospital@gmail.com
        </a>
        <a
          href="https://wa.me/919246446244"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center gap-1.5 text-[#25D366] transition-colors hover:text-[#128C7E]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.032 2.002c-5.514 0-10 4.486-10 10 0 1.79.475 3.553 1.375 5.094l-1.459 5.326 5.459-1.427c1.483.818 3.158 1.25 4.875 1.25 5.514 0 10-4.486 10-10s-4.486-10-10-10zm0 18.5c-1.482 0-2.94-.365-4.24-1.057l-.305-.181-3.24.846.864-3.157-.196-.318C4.125 15.08 3.782 13.557 3.782 12c0-4.554 3.696-8.25 8.25-8.25s8.25 3.696 8.25 8.25-3.696 8.25-8.25 8.25z"/>
            <path d="M16.234 14.598c-.238-.119-1.406-.693-1.624-.772-.218-.08-.376-.119-.535.119-.159.238-.619.773-.759.931-.14.16-.28.18-.518.06-.238-.119-1.005-.37-1.914-1.18-.707-.63-1.184-1.408-1.323-1.646-.14-.238-.015-.367.105-.486.108-.108.24-.282.36-.422.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.535-1.29-.734-1.766-.193-.462-.39-.4-.535-.408-.14-.008-.3-.008-.46-.008-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.02.4 1.37.51.58.19 1.11.16 1.53.1.47-.06 1.45-.59 1.66-1.16.21-.57.21-1.06.15-1.16-.06-.1-.22-.16-.46-.26z"/>
          </svg>
          <span>WhatsApp</span>
        </a>
      </>
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
    label: "Kokapet",
    email: "ammaeyecarekokapet@gmail.com",
    whatsappNumber: "9000246244",
    content: (
      <>
        <a
          href="mailto:ammaeyecarekokapet@gmail.com"
          className="block break-all text-[#185fa5] transition-colors hover:text-[#0c447c] hover:underline"
        >
          ammaeyecarekokapet@gmail.com
        </a>
        <a
          href="https://wa.me/919000246244"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center gap-1.5 text-[#25D366] transition-colors hover:text-[#128C7E]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.032 2.002c-5.514 0-10 4.486-10 10 0 1.79.475 3.553 1.375 5.094l-1.459 5.326 5.459-1.427c1.483.818 3.158 1.25 4.875 1.25 5.514 0 10-4.486 10-10s-4.486-10-10-10zm0 18.5c-1.482 0-2.94-.365-4.24-1.057l-.305-.181-3.24.846.864-3.157-.196-.318C4.125 15.08 3.782 13.557 3.782 12c0-4.554 3.696-8.25 8.25-8.25s8.25 3.696 8.25 8.25-3.696 8.25-8.25 8.25z"/>
            <path d="M16.234 14.598c-.238-.119-1.406-.693-1.624-.772-.218-.08-.376-.119-.535.119-.159.238-.619.773-.759.931-.14.16-.28.18-.518.06-.238-.119-1.005-.37-1.914-1.18-.707-.63-1.184-1.408-1.323-1.646-.14-.238-.015-.367.105-.486.108-.108.24-.282.36-.422.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.535-1.29-.734-1.766-.193-.462-.39-.4-.535-.408-.14-.008-.3-.008-.46-.008-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.02.4 1.37.51.58.19 1.11.16 1.53.1.47-.06 1.45-.59 1.66-1.16.21-.57.21-1.06.15-1.16-.06-.1-.22-.16-.46-.26z"/>
          </svg>
          <span>WhatsApp</span>
        </a>
      </>
    ),
  }
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
              <div className="text-[13px] leading-[1.6] text-[#2a3f6f]">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}