import { CashlessMarquee } from "@/components/cashless-marquee"
import { HeroSection } from "@/components/heroSection"
// import { TrustIndicators } from "@/components/trustIndicators"
import { ServicesSection } from "@/components/serviceSection"
import { InsurancePartners } from "@/components/insurancePartners"
import { TestimonialsSection } from "@/components/testimonialsSection"
import MainDoctorsPortfolio from "@/components/mainDoctorsPortfolio"
import { NewBranchMarquee } from "@/components/ui/newBranchMarquee"
import PostersSection from "@/components/postersSection"

export default function HomePage() {
  return (
    <>
    {/* <NewBranchMarquee/> */}
      <CashlessMarquee />
      <HeroSection />
      {/* <TrustIndicators /> */}
      <MainDoctorsPortfolio />
      <InsurancePartners />
      <ServicesSection />

      <TestimonialsSection />
      {/* <PostersSection/> */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  )
}
