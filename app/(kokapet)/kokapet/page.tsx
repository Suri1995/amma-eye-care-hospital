import { Header } from "./components/header"
import { HeroSection } from "./components/hero-section"
import { ServicesSection } from "./components/services-section"
import { DoctorsSection } from "./components/doctors-section"
import { GallerySection } from "./components/gallery-section"
import { WhyUsSection } from "./components/why-us-section"
import { TestimonialsSection } from "./components/testimonials-section"
import { FAQSection } from "./components/faq-section"
import { AppointmentSection } from "./components/appointment-section"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <DoctorsSection />
      <GallerySection />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <AppointmentSection />
      <Footer />
    </main>
  )
}
