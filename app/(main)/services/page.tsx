import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { services } from "@/lib/services-data"

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
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-muted/30 py-3">
        <div className="container">
          <ol
            className="flex items-center gap-2 text-sm"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" itemProp="item" className="text-muted-foreground hover:text-primary">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-muted-foreground" aria-hidden="true">
              /
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-foreground font-medium" aria-current="page">
                Services
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="page-header" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title">Our Services</h1>
          <p>Comprehensive eye care services for all your vision needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16" aria-label="Eye care services">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <article
                key={service.slug}
                className="group bg-card rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
                  aria-label={`Learn more about ${service.name}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {service.name}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {service.overview.substring(0, 100)}...
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-3">
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Notice */}
      <section className="py-12 bg-primary/5" aria-labelledby="insurance-heading">
        <div className="container">
          <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 shrink-0"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 id="insurance-heading" className="font-bold text-xl mb-2">
                  Cashless Facility Available
                </h2>
                <p className="text-muted-foreground">
                  We accept all major insurance providers. Most treatments and procedures are covered
                  under cashless facility for your convenience. Check our{" "}
                  <Link href="/insurances" className="text-primary hover:underline font-medium">
                    accepted insurances
                  </Link>
                  .
                </p>
              </div>
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors shrink-0"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16" aria-labelledby="cta-heading">
        <div className="container">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold mb-4">
              Need Help Choosing a Service?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Our specialists can guide you to the right treatment. Book an appointment or start a
              video consultation with our expert ophthalmologists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center rounded-lg bg-white text-primary px-8 py-3 font-semibold hover:bg-white/90 transition-colors"
              >
                Book Appointment
              </Link>
              <Link
                href="/video-consultation"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-3 font-semibold hover:bg-white/10 transition-colors"
              >
                Video Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacing for mobile CTA */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </main>
  )
}
