import Image from "next/image"
import Link from "next/link"

const topServices = [
  { icon: "👁️", title: "Cataract Surgery", description: "Advanced phacoemulsification with premium IOLs. Restore your vision with our bladeless, painless procedure." },
  { icon: "👓", title: "LASIK Surgery", description: "Blade-free LASIK for permanent vision correction. Say goodbye to glasses and contacts." },
  { icon: "🔍", title: "Glaucoma Treatment", description: "Early detection and advanced treatment to prevent vision loss from glaucoma." },
  { icon: "👶", title: "Children's Eye Care", description: "Specialized pediatric ophthalmology with child-friendly approach and facilities." },
  { icon: "📊", title: "Diabetic Retinopathy", description: "Regular screening and treatment to protect your vision if you have diabetes." },
  { icon: "💻", title: "Digital Eye Strain", description: "Relief from computer vision syndrome with specialized treatment and blue light solutions." },
]

export function ServicesSection() {
  return (
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
  )
}