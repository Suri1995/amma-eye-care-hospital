import Link from "next/link"
import { Check } from "lucide-react"

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

export function InsurancePartners() {
  return (
    <section className="py-16 md:py-20 bg-white" aria-labelledby="insurance-heading">
      <div className="container">
        <h2 id="insurance-heading" className="text-3xl md:text-4xl font-bold text-center text-[#1e3a8a] mb-2">
          Cashless Insurance Partners
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Cashless facility available with the following major insurances
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {insurancePartners.map((partner, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-border">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-green-600" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium text-foreground">{partner}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link
            href="/insurances"
            className="inline-flex items-center justify-center rounded-lg bg-[#b8860b] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-[#c99700]"
          >
            View All Insurances
          </Link>
        </div>
      </div>
    </section>
  )
}