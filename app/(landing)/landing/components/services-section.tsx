"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Button } from "./ui/button"
import {
  ArrowRight,
  Eye,
  Scan,
  Activity,
  Glasses,
  Zap,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const services = [
  {
    icon: Eye,
    title: "Cataract Surgery",
    description:
      "Get clear vision restored with advanced phacoemulsification and premium IOL implants.",
    highlight: "Painless & Quick Recovery",
    iconBg: "bg-[#F22233]",
    barColor: "bg-[#F22233]",
  },
  {
    icon: Scan,
    title: "LASIK Surgery",
    description:
      "Blade-free laser vision correction for freedom from glasses and contacts.",
    highlight: "20/20 Vision Results",
    iconBg: "bg-gradient-to-br from-[#3B2E8C] to-[#1F5AA6]",
    barColor: "bg-[#3B2E8C]",
  },
  {
    icon: Activity,
    title: "Glaucoma Treatment",
    description:
      "Early detection and advanced treatment to protect your vision from silent damage.",
    highlight: "Preserve Your Sight",
    iconBg: "bg-[#1F5AA6]",
    barColor: "bg-[#1F5AA6]",
  },
  {
    icon: Glasses,
    title: "Pediatric Eye Care",
    description:
      "Specialized care for children including vision screening and squint correction.",
    highlight: "Child-Friendly Environment",
    iconBg: "bg-[#F2B035]",
    barColor: "bg-[#F2B035]",
  },
  {
    icon: Zap,
    title: "Retina Services",
    description:
      "Expert treatment for diabetic retinopathy, macular degeneration, and retinal issues.",
    highlight: "Advanced Diagnostics",
    iconBg: "bg-gradient-to-br from-[#F22233] to-[#3B2E8C]",
    barColor: "bg-[#F22233]",
  },
  {
    icon: Sparkles,
    title: "Dry Eye Treatment",
    description:
      "Comprehensive solutions for chronic dry eye with personalized care plans.",
    highlight: "Long-lasting Relief",
    iconBg: "bg-gradient-to-br from-[#3B2E8C] to-[#F22233]",
    barColor: "bg-[#3B2E8C]",
  },
]

const GAP = 16 // px between cards

export function ServicesSection() {
  const [current, setCurrent] = useState(0)
  const [perView, setPerView] = useState(3)
  const [cardWidth, setCardWidth] = useState(0)
  const wrapRef = useRef<HTMLDivElement>(null)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const pausedRef = useRef(false)
  const touchStartX = useRef(0)

  const total = services.length
  const maxIndex = Math.max(0, total - perView)

  // Measure wrapper and compute exact card width
  const measure = useCallback(() => {
    if (!wrapRef.current) return
    const wrapW = wrapRef.current.offsetWidth
    const isMobile = window.innerWidth < 768
    const pv = isMobile ? 1 : 3
    setPerView(pv)
    setCardWidth((wrapW - GAP * (pv - 1)) / pv)
  }, [])

  useEffect(() => {
    measure()
    const ro = new ResizeObserver(measure)
    if (wrapRef.current) ro.observe(wrapRef.current)
    return () => ro.disconnect()
  }, [measure])

  // Clamp current on resize
  useEffect(() => {
    setCurrent((c) => Math.min(c, Math.max(0, total - perView)))
  }, [perView, total])

  const go = useCallback(
    (idx: number) => setCurrent(Math.max(0, Math.min(idx, Math.max(0, total - perView)))),
    [total, perView]
  )

  // Auto-play
  useEffect(() => {
    if (autoRef.current) clearInterval(autoRef.current)
    autoRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent((c) => {
          const max = Math.max(0, total - perView)
          return c >= max ? 0 : c + 1
        })
      }
    }, 4000)
    return () => { if (autoRef.current) clearInterval(autoRef.current) }
  }, [total, perView])

  const translateX = cardWidth > 0 ? current * (cardWidth + GAP) : 0

  return (
    <section
      id="services"
      className="bg-white py-7 sm:py-20"
      aria-label="Eye care services"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mx-auto mb-10 sm:mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 mb-3 sm:mb-4 px-4 py-1.5 rounded-full bg-[#F22233]/10 text-[#F22233] text-xs sm:text-sm font-semibold border border-[#F22233]/20">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F22233] animate-pulse" />
            Our Services
          </span>
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Complete Eye Care for a Healthy,{" "}
            <span className="text-[#F22233]">Clear Vision</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            Advanced treatments with experienced specialists and affordable pricing for all your eye care needs.
          </p>
        </div>

        {/* ── Carousel ── */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Our services"
          onMouseEnter={() => { pausedRef.current = true }}
          onMouseLeave={() => { pausedRef.current = false }}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
          onTouchEnd={(e) => {
            const dx = touchStartX.current - e.changedTouches[0].clientX
            if (Math.abs(dx) > 40) go(dx > 0 ? current + 1 : current - 1)
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") go(current - 1)
            if (e.key === "ArrowRight") go(current + 1)
          }}
        >
          {/* Overflow clip */}
          <div ref={wrapRef} className="overflow-hidden">
            <div
              className="flex"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(-${translateX}px)`,
                transition: "transform 0.42s cubic-bezier(0.4, 0, 0.2, 1)",
                willChange: "transform",
              }}
              aria-live="polite"
              aria-atomic="false"
            >
              {services.map((service, i) => {
                const Icon = service.icon
                const isVisible = i >= current && i < current + perView
                return (
                  <article
                    key={service.title}
                    aria-label={service.title}
                    aria-hidden={!isVisible}
                    tabIndex={isVisible ? 0 : -1}
                    style={{
                      width: `${cardWidth}px`,
                      minWidth: `${cardWidth}px`,
                    }}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5AA6] focus-visible:ring-offset-2 transition-all duration-300 cursor-pointer"
                  >
                    {/* Animated bottom accent bar */}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.75 ${service.barColor} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-350`}
                      aria-hidden="true"
                    />

                    <div className="flex flex-col flex-1 p-5 sm:p-6">
                      {/* Icon */}
                      <div
                        className={`mb-4 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${service.iconBg} text-white shadow-md group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}
                        aria-hidden="true"
                      >
                        <Icon className="h-7 w-7" strokeWidth={1.75} />
                      </div>

                      {/* Title */}
                      <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-[#F22233] transition-colors duration-200 leading-snug">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="mb-5 text-sm text-gray-500 leading-relaxed flex-1">
                        {service.description}
                      </p>

                      {/* Footer row */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-[#3B2E8C] border border-gray-100 shrink-0">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#F22233] animate-pulse" aria-hidden="true" />
                          {service.highlight}
                        </div>
                        <div
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-50 border border-gray-100 group-hover:bg-[#F22233] group-hover:border-[#F22233] group-hover:translate-x-0.5 transition-all duration-300"
                          aria-hidden="true"
                        >
                          <ChevronRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          {/* ── Nav row ── */}
          <div
            className="mt-8 flex items-center justify-center gap-3"
            role="group"
            aria-label="Carousel navigation"
          >
            <button
              onClick={() => go(current - 1)}
              disabled={current === 0}
              aria-label="Previous slide"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5AA6] focus-visible:ring-offset-2"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-1.5" role="group" aria-label="Slide indicators">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-pressed={i === current}
                  className={`rounded-full border-0 p-0 cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5AA6] focus-visible:ring-offset-2 ${
                    i === current
                      ? "w-5 h-2 bg-[#F22233]"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(current + 1)}
              disabled={current >= maxIndex}
              aria-label="Next slide"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5AA6] focus-visible:ring-offset-2"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-10 sm:mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-[#3B2E8C] text-[#3B2E8C] hover:bg-[#3B2E8C] hover:text-white px-8 h-12 sm:h-14 text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#1F5AA6] focus-visible:ring-offset-2"
            asChild
          >
            <a href="#contact">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  )
}