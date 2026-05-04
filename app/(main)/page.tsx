import { CashlessMarquee } from "@/components/cashless-marquee"
import { HeroSection } from "@/components/heroSection"
import { TrustIndicators } from "@/components/trustIndicators"
import { ServicesSection } from "@/components/serviceSection"
import { InsurancePartners } from "@/components/insurancePartners"
import { TestimonialsSection } from "@/components/testimonialsSection"
import PostersSection from "@/components/postersSection"

export default function HomePage() {
  return (
    <>
      <CashlessMarquee />
      <HeroSection />
      <TrustIndicators />
      <PostersSection/>
      <ServicesSection />
      <InsurancePartners />
      <TestimonialsSection />
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  )
}