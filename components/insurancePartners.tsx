import Link from "next/link"

const insurancePartners = [
  "ACKO General Insurance Company",
  "Aditya Birla Health Insurance Co. Ltd.",
  "AKNA Health Insurance TPA Pvt. Ltd.",
  "Anmol Medicare Insurance (TPA) Ltd.",
  "Bajaj General Insurance Ltd.",
  "Care Health Insurance Ltd",
  "Chola MS General Insurance",
  "DHFL General Insurance Ltd",
  "Digit Insurance",
  "East West Assist Insurance TPA Pvt. Ltd.",
  "Edelweiss General Insurance Co Ltd",
  "ERICSON INSURANCE TPA PVT LTD",
]

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path d="M2 8L8 2M8 2H4M8 2V6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export function InsurancePartners() {
  return (
    <section
      className="relative overflow-hidden py-7 md:py-20 bg-white"
      aria-labelledby="insurance-heading"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -left-16 w-80 h-80 rounded-full bg-blue-50 opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 w-96 h-96 rounded-full bg-emerald-50 opacity-50" aria-hidden="true" />

      <div className="container relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700 mb-4">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Cashless facility available
          </div>
          <h2
            id="insurance-heading"
            className="font-serif text-[clamp(1.9rem,4vw,2.8rem)] font-normal leading-tight text-[#0c447c] mb-3"
          >
            Cashless Insurance <em className="italic text-[#185fa5]">Partners</em>
          </h2>
          <p className="mx-auto max-w-md text-sm text-muted-foreground leading-relaxed">
            Seamless cashless treatment with the following major insurance providers
          </p>
        </div>

        {/* Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 mb-10"
          role="list"
        >
          {insurancePartners.map((partner, index) => (
            <li
              key={index}
              className={`group flex items-center gap-3 rounded-[10px] border border-border/50 bg-white p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400
              
              ${index > 5 ? "hidden sm:flex" : ""}
              `}
            >
              <div
                className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full border-[1.5px] border-emerald-200 bg-emerald-50 text-emerald-600 transition-all duration-200 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                aria-hidden="true"
              >
                <CheckIcon />
              </div>
              <span className="text-[12.5px] font-medium leading-snug text-foreground">
                {partner}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/insurances"
            className="inline-flex items-center gap-2.5 rounded-[10px] bg-[#1e3a8a] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#b8860b] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a8a]"
            aria-label="View all insurance partners"
          >
            View All Insurances
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}