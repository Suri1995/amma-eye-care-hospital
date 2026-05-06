import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { services, getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data"
import { IndianRupee } from "lucide-react"

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return { title: "Service Not Found" }
  }

  return {
    title: `${service.name} | Amma Eye Care Hospital`,
    description: service.overview.substring(0, 160),
    openGraph: {
      title: `${service.name} | Amma Eye Care Hospital`,
      description: service.overview.substring(0, 160),
      type: "website",
      images: [{ url: service.image }],
    },
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  // Find related services (same category or random)
  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 4)

  return (
    <main id="main-content">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-muted/30 py-3">
        <div className="container">
          <ol
            className="flex items-center gap-2 text-sm flex-wrap"
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
              <Link
                href="/services"
                itemProp="item"
                className="text-muted-foreground hover:text-primary"
              >
                <span itemProp="name">Services</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <li className="text-muted-foreground" aria-hidden="true">
              /
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-foreground font-medium" aria-current="page">
                {service.name}
              </span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="page-header" aria-labelledby="service-title">
        <div className="container">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
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
              aria-hidden="true"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back to Services
          </Link>
          <h1 id="service-title" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {service.name}
          </h1>
        </div>
      </section>

      <div className="container py-8 md:py-12 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{service.overview}</p>
              </CardContent>
            </Card>

            {/* Who Needs This */}
            <Card>
              <CardHeader>
                <CardTitle>Who Needs This Service?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3" role="list">
                  {service.whoNeeds.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary mt-0.5 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Diagnosis */}
            <Card>
              <CardHeader>
                <CardTitle>Diagnosis & Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-3" role="list">
                  {service.diagnosis.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
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
                        className="text-accent mt-0.5 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Treatment */}
            <Card>
              <CardHeader>
                <CardTitle>Treatment & Procedure</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3" role="list">
                  {service.treatment.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary mt-0.5 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* FAQs */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {service.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
      <div className="sticky top-24 space-y-5">

        {/* CTA Card */}
        <Card className="bg-primary text-primary-foreground shadow-xl rounded-2xl border-0">
          <CardContent className="p-6">
            <h2 className="font-semibold text-xl mb-2">
              Ready to Get Started?
            </h2>

            <p className="text-sm mb-6 opacity-90">
              Schedule your appointment or consult with our specialists online.
            </p>

            <div className="space-y-3">

              {/* Book Appointment */}
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white text-primary px-6 py-3 font-semibold transition-all duration-200 hover:bg-white/90 hover:-translate-y-0.5 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
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
                  aria-hidden="true"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                Book Appointment
              </Link>

              {/* Video Consultation */}
              <a
                href="https://wa.me/919246446244"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Start a video consultation via WhatsApp with Amma Eye Care Hospital"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-[#25D366] hover:text-[#25D366] hover:bg-[#25D366]/10 hover:-translate-y-0.5 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
                Video Consultation
              </a>

            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <Card>
          <CardContent className="p-6 space-y-4">

            {/* Expert Care */}
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Expert Care</h3>
                <p className="text-xs text-muted-foreground">
                  Experienced ophthalmologists
                </p>
              </div>
            </div>

            {/* Insurance */}
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Insurance Accepted</h3>
                <p className="text-xs text-muted-foreground">
                  Cashless facility available
                </p>
              </div>
            </div>

            {/* Quick Appointments */}
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Quick Appointments</h3>
                <p className="text-xs text-muted-foreground">
                  Same-day slots available
                </p>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Contact Card */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3">Have Questions?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Call us or schedule a consultation to learn more.
            </p>

            <a
              href="tel:+919246446244"
              className="text-lg font-bold text-primary hover:underline block mb-4"
            >
              +91 92464 46244
            </a>

            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center rounded-lg border px-6 py-2.5 font-medium hover:bg-muted transition-colors"
            >
              Contact Us
            </Link>
          </CardContent>
        </Card>

        {/* Insurance Notice */}
        <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 flex items-start gap-3">
          <div className="relative w-5 h-5 mt-1 flex-shrink-0">
            <IndianRupee className="w-5 h-5 text-green-700 opacity-70" />
            <span className="absolute left-[7px] top-[-2px] w-[2px] h-7 bg-green-700 rotate-45 rounded-full" />
          </div>

          <p className="text-sm font-semibold text-green-700">
            Cashless facility available with major insurance providers
          </p>
        </div>

      </div>
    </aside>
        </div>
      </div>

      {/* Related Services */}
      <section className="py-12 bg-muted/30" aria-labelledby="related-services">
        <div className="container max-w-7xl">
          <h2 id="related-services" className="text-2xl font-bold mb-8">
            Other Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((relatedService) => (
              <Link
                key={relatedService.slug}
                href={`/services/${relatedService.slug}`}
                className="group bg-card rounded-xl border shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={relatedService.image}
                    alt={relatedService.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {relatedService.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom spacing for mobile CTA */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </main>
  )
}
