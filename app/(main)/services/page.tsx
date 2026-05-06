import type { Metadata } from "next"
import { Breadcrumb } from "./components/breadCrumb"
import { ServicesHero } from "./components/servicesHero"
import { ServicesGrid } from "./components/servicesGrid"
import { InsuranceNotice } from "./components/insuranceNotice"
import { ServicesCTA } from "./components/serviceCTA"

export const metadata: Metadata = {
  title: "Our Services | Amma Eye Care Hospital",
  description:
    "Comprehensive eye care services including cataract surgery, LASIK, glaucoma treatment, pediatric eye care, and more at Amma Eye Care Hospital, Guntur.",
  openGraph: {
    title: "Our Services | Amma Eye Care Hospital",
    description:
      "Comprehensive eye care services including cataract surgery, LASIK, glaucoma treatment, pediatric eye care, and more.",
    type: "website",
  },
}

export default function ServicesPage() {
  return (
    <main id="main-content">
      <Breadcrumb />
      <ServicesHero />
      <ServicesGrid />
      <InsuranceNotice />
      <ServicesCTA />
      <div className="h-20 md:hidden" aria-hidden="true" />
    </main>
  )
}