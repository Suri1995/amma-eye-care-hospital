import Link from "next/link"
import Image from "next/image"
import { services } from "@/lib/services-data"

export function ServicesGrid() {
  return (
    <section className="py-12 md:py-16" aria-label="Eye care services">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group bg-card rounded-xl border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <Link
                href={`/services/${service.slug}`}
                className="flex flex-col flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
                aria-label={`Learn more about ${service.name}`}
              >
                {/* Image — fixed aspect, never shrinks */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Body — flex-1 so it fills remaining card height, justify-between pushes link to bottom */}
                <div className="p-4 bg-primary/10 flex flex-col flex-1 justify-between min-h-[130px]">
                  <div>
                    <h2 className="font-semibold text-[15.5px] leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {service.name}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {service.overview.substring(0, 100)}...
                    </p>
                  </div>

                  {/* Always pinned to bottom regardless of title/desc height */}
                  <div className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3 flex-shrink-0">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15" height="15"
                      viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.2"
                      strokeLinecap="round" strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}