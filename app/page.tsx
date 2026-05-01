import Image from "next/image"
import Link from "next/link"
import { Eye, ShieldCheck, Check } from "lucide-react"
import { CashlessMarquee } from "@/components/cashless-marquee"
import { TestimonialSlider } from "@/components/testimonial-slider"

const trustIndicators = [
  {
    icon: "/specialized-services-icon.jpg",
    title: "25+ Specialized Services",
    description: "Comprehensive eye care solutions",
  },
  {
    icon: "/advanced-technology-icon.png",
    title: "Advanced Technology",
    description: "Latest diagnostic & surgical equipment",
  },
  {
    icon: "/insurance-accepted-icon.jpg",
    title: "Insurance Accepted",
    description: "Most major insurance plans covered",
  },
  {
    icon: "/expert-ophthalmologists-icon.png",
    title: "Expert Ophthalmologists",
    description: "Experienced & caring specialists",
  },
]

const topServices = [
  { icon: "👁️", title: "Cataract Surgery", description: "Advanced phacoemulsification with premium IOLs. Restore your vision with our bladeless, painless procedure." },
  { icon: "👓", title: "LASIK Surgery", description: "Blade-free LASIK for permanent vision correction. Say goodbye to glasses and contacts." },
  { icon: "🔍", title: "Glaucoma Treatment", description: "Early detection and advanced treatment to prevent vision loss from glaucoma." },
  { icon: "👶", title: "Children's Eye Care", description: "Specialized pediatric ophthalmology with child-friendly approach and facilities." },
  { icon: "📊", title: "Diabetic Retinopathy", description: "Regular screening and treatment to protect your vision if you have diabetes." },
  { icon: "💻", title: "Digital Eye Strain", description: "Relief from computer vision syndrome with specialized treatment and blue light solutions." },
]

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

export default function HomePage() {
  return (
    <>
      <CashlessMarquee />

      {/* Hero Section */}
      <section className="w-full overflow-hidden bg-[#E4E4FF] py-12 sm:py-24">
        <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight text-balance">
              <span className="text-[#3B2E8C]">Advanced</span>{" "}
              <span className="text-[#F22233]">Eye Care</span>
              <br />
              <span className="text-[#0D0D0D]">for All Ages</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-slate-700">
              From routine check-ups to advanced surgeries, experience world-class eye care with our expert team of ophthalmologists.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center rounded-md bg-[#3B2E8C] px-8 py-3 text-sm font-medium text-white transition-all hover:opacity-90 active:scale-95"
              >
                Book Appointment
              </Link>
              <Link
                href="/video-consultation"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-8 py-3 text-sm font-medium text-[#0D0D0D] transition-all hover:bg-slate-50 active:scale-95"
              >
                Video Consultation
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/60">
                  <Eye className="h-5 w-5 text-[#3B2E8C]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#0D0D0D]">20k+</p>
                  <p className="text-sm text-slate-600">Happy Patients</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/60">
                  <ShieldCheck className="h-5 w-5 text-[#3B2E8C]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#0D0D0D]">500+</p>
                  <p className="text-sm text-slate-600">Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Images */}
          <div className="relative h-[400px] w-full sm:h-[500px]" aria-hidden="true">
            <div className="animate-float absolute -top-4 left-1/4 h-16 w-16 rounded-full bg-blue-200/40" />
            <div className="animate-float absolute bottom-0 right-1/4 h-12 w-12 rounded-lg bg-indigo-200/40" style={{ animationDelay: "1s" }} />
            
            <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-2xl bg-white p-2 shadow-2xl sm:h-64 sm:w-64 overflow-hidden">
              <Image
                src="/clinic.png"
                alt="Amma Eye Care Hospital clinic facility"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 640px) 192px, 256px"
                priority
              />
            </div>

            <div className="absolute right-0 top-1/4 h-40 w-40 rounded-2xl bg-white p-2 shadow-2xl sm:h-56 sm:w-56 overflow-hidden">
              <Image
                src="/exam.png"
                alt="Eye examination at Amma Eye Care"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 640px) 160px, 224px"
              />
            </div>

            <div className="absolute bottom-4 left-0 h-32 w-32 rounded-2xl bg-white p-2 shadow-2xl sm:h-48 sm:w-48 overflow-hidden">
              <Image
                src="/spectacular.png"
                alt="Spectacles and eyewear"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 640px) 128px, 192px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white" aria-labelledby="trust-heading">
        <h2 id="trust-heading" className="sr-only">Why Choose Us</h2>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                <Image
                  src={item.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-[#f8f9fa] relative" aria-labelledby="services-heading">
        <Image 
          src="/right-vector-image.png" 
          alt="" 
          width={330} 
          height={200}
          className="absolute right-0 top-0 hidden lg:block"
          aria-hidden="true"
        />
        <div className="container">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-center text-[#6a1818] mb-2">
            Our Top Services
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Comprehensive eye care solutions for every need
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topServices.map((service, index) => (
              <Link
                key={index}
                href="/services"
                className="group flex flex-col justify-between h-[310px] p-6 bg-white rounded-xl border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="text-4xl mb-4" role="img" aria-label={service.title}>{service.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#1e3a8a] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg bg-[#1e3a8a] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1e3a8a]/90"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance Partners Section */}
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
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-border"
              >
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

      {/* Testimonials Section */}
      <section 
        className="py-16 md:py-20"
        style={{ backgroundImage: "linear-gradient(90deg, #dcf5ff, rgba(220, 245, 255, 0.8))" }}
        aria-labelledby="testimonials-heading"
      >
        <div className="container">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-10">
            Client Testimonials
          </h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* Bottom spacing for mobile CTA */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  )
}
