"use client"

import { useState } from "react"
import Link from "next/link"

const INSURANCE_PARTNERS = [
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
  "Family Health Plan Insurance TPA Limited (FHPL)",
  "Future Generali India Insurance Company",
  "Galaxy Health Ins Company Ltd",
  "Generali Central Insurance Company Limited",
  "Genins India Insurance TPA Ltd",
  "Good Health Insurance TPA (GHPL)",
  "HDFC ERGO General Insurance Company Limited.",
  "Health Insurance TPA of India Ltd (hitpa)",
  "HEALTHINDIA Insurance TPA Services Pvt. Ltd.",
  "Heritage Health Insurance TPA",
  "ICICI Lombard General Insurance Company Limited",
  "IFFCO TOKIO GENERAL INSURANCE",
  "L&T General Insurance",
  "Liberty General Insurance",
  "Link-K Insurance TPA Pvt Ltd",
  "Magma General Insurance Ltd",
  "ManipalCigna Health Insurance Company Ltd",
  "Max Bupa Health Insurance Company Ltd",
  "MDIndia Healthcare Services (TPA) Pvt. Ltd.",
  "Medi Assist Insurance TPA Pvt Ltd",
  "Medsave Health Insurance TPA Ltd",
  "Medvantage Insurance TPA PVT LTD",
  "National Insurance Company Limited",
  "NAVI GENERAL INSURANCE",
  "New India Assurance Company Limited",
  "Niva Bupa Health Insurance Company Limited",
  "Oriental Insurance Company Ltd.",
  "Paramount Health Services & Insurance TPA Pvt. Ltd.",
  "Park Mediclaim insurance TPA Pvt Ltd.",
  "Raheja QBE",
  "Raksha Health Insurance TPA",
  "RELIANCE GENERAL INS",
  "Religare Health Ins Comp. Ltd",
  "Royal Sundaram Gen. Ins",
  "Safeway Insurance TPA Pvt Ltd",
  "SBI General Insurance Company Limited",
  "Star Health and Allied Insurance Co Ltd",
  "TATA AIG GIC",
  "United India Insurance Company Limited",
  "UnitedHealth Care Parekh Insurance TPA (PVT) Ltd",
  "Universal Sompo General Insurance Co Ltd",
  "Vidal health insurance TPA",
  "Vipul Medcorp Insurance TPA Private Limited",
  "Volo Health Insurance TPA Pvt. Ltd.",
  "Zuno General Insurance Ltd",
  "Zurich Kotak General Insurance Company Limited"
]

export default function InsurancesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredInsurances = INSURANCE_PARTNERS.filter(insurance =>
    insurance.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main id="main-content">
      {/* Hero Section */}
      <section 
        className="py-14 md:py-[70px] text-white overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(103.66% 89.9% at 67.34% 75.46%, #008089 0, #004855 50.99%, #002f3c 100%)"
        }}
      >
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="text-3xl md:text-[44px] font-extrabold leading-tight tracking-tight text-center">
            Cashless Insurance Partners
          </h1>
          <p className="mt-3 max-w-[780px] text-base leading-relaxed opacity-90 font-medium text-center">
            Cashless facility available with major insurance companies and TPA partners listed below.
          </p>
        </div>
      </section>

      {/* Insurance Grid Section */}
      <section 
        className="py-14 md:py-[70px]"
        style={{
          background: "linear-gradient(180deg, #e6fbff 0%, #f4fbff 100%)"
        }}
        aria-labelledby="insurance-heading"
      >
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6 flex-wrap">
            <div>
              <h2 
                id="insurance-heading"
                className="text-2xl md:text-[28px] font-extrabold text-[#1e3a8a]"
              >
                Supported Insurances / TPA
              </h2>
            </div>

            <div className="w-full md:w-auto md:ml-auto">
              <div className="relative w-full md:w-[320px]">
                <label htmlFor="insuranceSearch" className="sr-only">
                  Search insurance
                </label>
                <input
                  id="insuranceSearch"
                  type="text"
                  placeholder="Search insurance..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-11 rounded-xl border border-slate-900/10 bg-white px-3.5 pr-11 text-sm font-semibold outline-none transition-all duration-200 focus:border-[#1e3a8a]/35 focus:shadow-lg"
                />
                <span 
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#0f2b5b]/65 pointer-events-none"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                    <path d="M10.5 18.5a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {filteredInsurances.length === 0 && (
            <p className="text-center text-[#526B8C] font-bold my-4" role="status" aria-live="polite">
              No matching insurance found.
            </p>
          )}

          <ul 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            role="list"
            aria-label="Insurance partners list"
          >
            {filteredInsurances.map((insurance, index) => (
              <li 
                key={index}
                className="bg-white rounded-[14px] px-5 py-4 flex items-center gap-3.5 shadow-md border border-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:border-[#1e3a8a]/[0.18] hover:bg-[#f3fbff]"
              >
                <span 
                  className="w-10 h-10 rounded-full bg-[#e9f9ff] flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="w-[22px] h-[22px] rounded-full bg-[#14b8a6] text-white font-black text-sm flex items-center justify-center">
                    ✓
                  </span>
                </span>
                <span className="text-[15px] font-bold text-[#0f2b5b] leading-snug">
                  {insurance}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#f8fafc]" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-2xl md:text-3xl font-extrabold text-[#1e3a8a] mb-4">
            Have Questions About Insurance?
          </h2>
          <p className="text-[#526B8C] mb-6 max-w-2xl mx-auto">
            Our team can help you understand your coverage and guide you through the cashless claim process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-xl bg-[#b8860b] text-white hover:bg-[#d99a00] transition-colors"
            >
              Book Appointment
            </Link>
            <a
                 href="https://wa.me/919246446244"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Start a video consultation via WhatsApp with Amma Eye Care Hospital"
  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#3B2E8C]/20 bg-white/80 px-8 py-3.5 text-sm font-bold text-[#3B2E8C] backdrop-blur-sm transition-all hover:border-primary/60 hover:bg-gray-100 hover:text-[#25D366] hover:-translate-y-0.5 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B2E8C]"
>
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
  Video Consultation
</a>
          </div>
        </div>
      </section>
    </main>
  )
}
