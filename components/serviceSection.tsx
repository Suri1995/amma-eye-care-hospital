import Image from "next/image"
import Link from "next/link"
import { Eye, Glasses, Activity, Baby, BarChart2, Monitor } from "lucide-react"

const topServices = [
  {
    icon: Eye,
    color: "#3B2E8C",
    bg: "#ede9ff",
    title: "Cataract Surgery",
    description: "Advanced phacoemulsification with premium IOLs. Restore your vision with our bladeless, painless procedure.",
  },
  {
    icon: Glasses,
    color: "#0e7490",
    bg: "#e0f7fa",
    title: "LASIK Surgery",
    description: "Blade-free LASIK for permanent vision correction. Say goodbye to glasses and contacts.",
  },
  {
    icon: Activity,
    color: "#b45309",
    bg: "#fef3c7",
    title: "Glaucoma Treatment",
    description: "Early detection and advanced treatment to prevent vision loss from glaucoma.",
  },
  {
    icon: Baby,
    color: "#be185d",
    bg: "#fce7f3",
    title: "Children's Eye Care",
    description: "Specialized pediatric ophthalmology with child-friendly approach and facilities.",
  },
  {
    icon: BarChart2,
    color: "#065f46",
    bg: "#d1fae5",
    title: "Diabetic Retinopathy",
    description: "Regular screening and treatment to protect your vision if you have diabetes.",
  },
  {
    icon: Monitor,
    color: "#1e3a8a",
    bg: "#dbeafe",
    title: "Digital Eye Strain",
    description: "Relief from computer vision syndrome with specialized treatment and blue light solutions.",
  },
]

export function ServicesSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#f4f3ff] py-7 md:py-20"
      aria-labelledby="services-heading"
    >
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#3B2E8C]/06 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full bg-[#F22233]/05 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-white/50 blur-[80px]" />
      </div>

      {/* Right vector */}
      <Image
        src="/right-vector-image.webp"
        alt=""
        width={330}
        height={200}
        className="absolute right-0 top-0 hidden lg:block opacity-40"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#3B2E8C]/20 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#3B2E8C] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F22233] animate-pulse" aria-hidden="true" />
            What We Offer
          </div>
          <h2
            id="services-heading"
            className="text-3xl font-black tracking-tight text-primary sm:text-4xl lg:text-5xl"
          >
            Our Top Services
          </h2>
          <p className="mt-3 max-w-md text-base text-slate-500">
            Comprehensive eye care solutions for every need
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topServices.map((service, index) => {
            const Icon = service.icon

            return (
              <Link
                key={index}
                href="/services"
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/80 bg-white p-7 shadow-sm ring-1 ring-black/[0.04] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B2E8C]
                
                ${index > 2 ? "hidden sm:flex" : ""}
                `}
                aria-label={`Learn more about ${service.title}`}
              >
                {/* Hover accent bar */}
                <div
                  className="absolute left-0 top-0 h-1 w-0 rounded-t-2xl transition-all duration-300 group-hover:w-full"
                  style={{ background: service.color }}
                  aria-hidden="true"
                />

                {/* Soft bg circle */}
                <div
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-30 transition-all duration-300 group-hover:opacity-60 group-hover:scale-110"
                  style={{ background: service.bg }}
                  aria-hidden="true"
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-110"
                    style={{ background: service.bg }}
                    aria-hidden="true"
                  >
                    <Icon
                      className="h-7 w-7"
                      style={{ color: service.color }}
                      strokeWidth={1.75}
                    />
                  </div>

                  {/* Text */}
                  <h3 className="mb-2.5 text-lg font-black text-slate-900 transition-colors duration-200 group-hover:text-[#3B2E8C]">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {service.description}
                  </p>
                </div>

              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1e3a8a] px-9 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1e3a8a]/25 transition-all hover:bg-[#162d6e] hover:-translate-y-0.5 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a8a]"
          >
            View All Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}