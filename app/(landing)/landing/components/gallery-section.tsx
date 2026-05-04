"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn, Eye, Sparkles } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    title: "Modern Reception",
    description: "Welcoming and comfortable reception area with warm ambiance",
    color: "from-[#3B2E8C] to-[#1F5AA6]",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    features: ["Spacious lobby", "Comfortable seating", "Soothing music"],
    alt: "Modern reception area of Amma Eye Care Hospital with comfortable seating and warm lighting",
  },
  {
    id: 2,
    title: "Diagnostic Center",
    description: "State-of-the-art eye examination equipment for accurate diagnosis",
    color: "from-[#1F5AA6] to-[#3B2E8C]",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    features: ["Digital imaging", "Auto-refractometer", "Visual field analyzer"],
    alt: "Advanced diagnostic center with modern eye examination equipment",
  },
  {
    id: 3,
    title: "Advanced Equipment",
    description: "Latest laser and imaging technology for precision treatments",
    color: "from-[#F22233] to-[#3B2E8C]",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    features: ["Femto laser", "Zeiss equipment", "Precision optics"],
    alt: "State-of-the-art laser and imaging technology for eye treatments",
  },
  {
    id: 4,
    title: "Operation Theatre",
    description: "Ultra-modern sterile surgery suite with laminar airflow",
    color: "from-[#3B2E8C] to-[#F22233]",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    features: ["Laminar flow", "Microscopic surgery", "24/7 emergency"],
    alt: "Sterile operation theatre with advanced surgical equipment",
  },
  {
    id: 5,
    title: "Patient Lounge",
    description: "Comfortable waiting area with modern amenities",
    color: "from-[#F2B035] to-[#F22233]",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    features: ["Refreshments", "Wi-Fi enabled", "Entertainment"],
    alt: "Comfortable patient lounge area with modern amenities",
  },
  {
    id: 6,
    title: "Consultation Room",
    description: "Private and comfortable consultation spaces",
    color: "from-[#1F5AA6] to-[#F2B035]",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    features: ["Private rooms", "Family seating", "Digital records"],
    alt: "Private consultation room with comfortable seating",
  },
]

// ─── GalleryItem ─────────────────────────────────────────────────────────────
const GalleryItem = ({
  image,
  index,
  onClick,
}: {
  image: (typeof galleryImages)[0]
  index: number
  onClick: () => void
}) => {
  const isFeatured = index === 0 || index === 3

  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      role="button"
      tabIndex={0}
      aria-label={`View ${image.title} — ${image.description}`}
      className="group relative w-full h-full cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2E8C] focus-visible:ring-offset-2 hover:shadow-xl active:scale-[0.98]"
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-linear-to-br ${image.color}`} aria-hidden="true" />

      {/* Dot-pattern overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Centre icon */}
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105">
          <svg
            className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white drop-shadow-md"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={image.icon} />
          </svg>
        </div>
      </div>

      {/* Hover dark scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 pointer-events-none"
      />

      {/* Title card — slides up on hover/focus */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-transform duration-200"
      >
        <div className="rounded-lg sm:rounded-xl bg-white/95 backdrop-blur-sm p-2.5 sm:p-3 shadow-lg">
          <p className="font-bold text-gray-900 text-xs sm:text-sm truncate">{image.title}</p>
          <p className="text-[10px] sm:text-xs text-gray-600 line-clamp-1">{image.description}</p>
        </div>
      </div>

      {/* Zoom icon */}
      <div
        aria-hidden="true"
        className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 pointer-events-none"
      >
        <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
          <ZoomIn className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-700" />
        </div>
      </div>

      {/* Featured badge */}
      {isFeatured && (
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
          <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-medium">
            Featured
          </span>
        </div>
      )}
    </div>
  )
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
const Lightbox = ({
  selectedIndex,
  onClose,
  onNext,
  onPrev,
}: {
  selectedIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}) => {
  const image = galleryImages[selectedIndex]
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
  }, [])

  const goTo = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation()
    const diff = idx - selectedIndex
    if (diff === 0) return
    if (diff > 0) for (let i = 0; i < diff; i++) onNext()
    else for (let i = 0; i > diff; i--) onPrev()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.95)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${image.title}`}
    >
      {/* Close */}
      <button
        ref={closeRef}
        className="absolute top-4 right-4 z-10 rounded-full bg-white/10 hover:bg-white/20 p-2.5 sm:p-3 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
        onClick={onClose}
        aria-label="Close gallery"
      >
        <X className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
      </button>

      {/* Prev */}
      <button
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 hover:bg-white/20 p-2.5 sm:p-3 md:p-4 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" aria-hidden="true" />
      </button>

      {/* Next */}
      <button
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 hover:bg-white/20 p-2.5 sm:p-3 md:p-4 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" aria-hidden="true" />
      </button>

      {/* Counter */}
      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs sm:text-sm font-medium"
        aria-live="polite"
        aria-atomic="true"
      >
        {selectedIndex + 1} / {galleryImages.length}
      </div>

      {/* Main content panel */}
      <div
        className="max-w-5xl w-[90%] md:w-[80%] aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="img"
        aria-label={image.alt}
      >
        <div className={`w-full h-full bg-linear-to-br ${image.color} flex items-center justify-center relative`}>
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative hidden md:block z-10" aria-hidden="true">
            <div className=" md:h-40 md:w-40 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl">
              <svg
                className=" md:h-16 md:w-16 text-white drop-shadow-lg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={image.icon} />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/60 to-transparent p-5 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">{image.title}</h2>
            <p className="text-white/80 text-sm sm:text-base md:text-lg mb-3 max-w-2xl">{image.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {image.features.map((feature, idx) => (
                <span key={idx} className="px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-xs sm:text-sm">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dot / pill nav */}
      <div
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3"
        role="tablist"
        aria-label="Gallery navigation"
      >
        {galleryImages.map((img, idx) => (
          <button
            key={img.id}
            role="tab"
            aria-selected={idx === selectedIndex}
            aria-label={`Go to ${img.title}`}
            onClick={(e) => goTo(e, idx)}
            className={`transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-full ${
              idx === selectedIndex ? "scale-110" : "hover:scale-105"
            }`}
          >
            <span
              className={`block rounded-full transition-all ${
                idx === selectedIndex
                  ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-white"
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── GallerySection ───────────────────────────────────────────────────────────
export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const nextImage = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null))
  }, [])

  const prevImage = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    )
  }, [])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "Escape") setSelectedIndex(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [selectedIndex, prevImage, nextImage])

  // Scroll lock when lightbox is open
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [selectedIndex])

  // ── Skeleton (pre-mount / SSR) ──────────────────────────────────────────────
  if (!mounted) {
    return (
      <section className="bg-white py-16 sm:py-20 md:py-28" aria-busy="true" aria-label="Gallery loading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-pulse">
          <div className="h-8 w-32 mx-auto bg-gray-200 rounded-full mb-4" />
          <div className="h-12 w-64 mx-auto bg-gray-200 rounded-lg mb-4" />
          <div className="h-6 w-96 mx-auto bg-gray-200 rounded-lg mb-12" />
          {/* Mobile skeleton */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:hidden">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-xl" />
            ))}
          </div>
          {/* Desktop skeleton matching exact layout */}
          <div
            className="hidden lg:grid gap-5"
            style={{ gridTemplateColumns: "repeat(4,1fr)", gridTemplateRows: "repeat(2,240px)" }}
          >
            <div style={{ gridColumn: "1", gridRow: "1/3" }} className="bg-gray-200 rounded-2xl" />
            <div style={{ gridColumn: "2", gridRow: "1" }} className="bg-gray-200 rounded-2xl" />
            <div style={{ gridColumn: "3", gridRow: "1" }} className="bg-gray-200 rounded-2xl" />
            <div style={{ gridColumn: "4", gridRow: "1/3" }} className="bg-gray-200 rounded-2xl" />
            <div style={{ gridColumn: "2", gridRow: "2" }} className="bg-gray-200 rounded-2xl" />
            <div style={{ gridColumn: "3", gridRow: "2" }} className="bg-gray-200 rounded-2xl" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="gallery"
      className="bg-white py-7 md:py-20"
      aria-label="Clinic gallery"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="mx-auto mb-12 sm:mb-16 md:mb-20 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-5 px-4 py-1.5 rounded-full bg-linear-to-r from-[#1F5AA6]/10 to-[#3B2E8C]/10 border border-[#1F5AA6]/20">
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#1F5AA6]" aria-hidden="true" />
            <span className="text-[#1F5AA6] text-xs sm:text-sm font-semibold tracking-wide">Our Facility</span>
          </div>

          <h1 className="mb-4 sm:mb-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-gray-900">Clinic </span>
            <span className="relative inline-block">
              <span className="relative z-10 text-[#F22233]">Gallery</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 3.5 Q50 1 100 3.5 Q150 6 195 3.5"
                  stroke="#F22233"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our advanced, hygienic, and patient-friendly facility designed for your comfort and care.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            MOBILE & TABLET  (below lg breakpoint)
            Simple 2-col → 3-col auto-flow grid, all cards square, natural order
        ══════════════════════════════════════════════════════════════════════ */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:hidden"
          role="list"
          aria-label="Gallery items"
        >
          {galleryImages.map((image, index) => (
            <div key={image.id} role="listitem" className="aspect-square">
              <GalleryItem
                image={image}
                index={index}
                onClick={() => setSelectedIndex(index)}
              />
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            DESKTOP  (lg and above)
            Explicit 4-column × 2-row CSS grid using inline styles for placement.
            Tailwind alone cannot express arbitrary grid-column/row start values
            reliably without a custom safelist, so we use inline style here — this
            is intentional and the correct, performant approach.

            Visual layout:
              Col →   1            2            3            4
              Row 1 │ Reception  │ Diagnostic │ Equipment  │ Operation │
              Row 2 │ Reception  │ Pt Lounge  │ Consult.   │ Operation │
                      (spans r1-2)                           (spans r1-2)
        ══════════════════════════════════════════════════════════════════════ */}
        <div
          className="hidden lg:grid gap-5"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(2, 240px)",
          }}
          role="list"
          aria-label="Gallery items"
        >
          {/* [0] Modern Reception — col 1, spans both rows */}
          <div role="listitem" style={{ gridColumn: "1", gridRow: "1 / 3" }}>
            <GalleryItem
              image={galleryImages[0]}
              index={0}
              onClick={() => setSelectedIndex(0)}
            />
          </div>

          {/* [1] Diagnostic Center — col 2, row 1 */}
          <div role="listitem" style={{ gridColumn: "2", gridRow: "1" }}>
            <GalleryItem
              image={galleryImages[1]}
              index={1}
              onClick={() => setSelectedIndex(1)}
            />
          </div>

          {/* [2] Advanced Equipment — col 3, row 1 */}
          <div role="listitem" style={{ gridColumn: "3", gridRow: "1" }}>
            <GalleryItem
              image={galleryImages[2]}
              index={2}
              onClick={() => setSelectedIndex(2)}
            />
          </div>

          {/* [3] Operation Theatre — col 4, spans both rows */}
          <div role="listitem" style={{ gridColumn: "4", gridRow: "1 / 3" }}>
            <GalleryItem
              image={galleryImages[3]}
              index={3}
              onClick={() => setSelectedIndex(3)}
            />
          </div>

          {/* [4] Patient Lounge — col 2, row 2  ← fills the vacant gap */}
          <div role="listitem" style={{ gridColumn: "2", gridRow: "2" }}>
            <GalleryItem
              image={galleryImages[4]}
              index={4}
              onClick={() => setSelectedIndex(4)}
            />
          </div>

          {/* [5] Consultation Room — col 3, row 2  ← fills the vacant gap */}
          <div role="listitem" style={{ gridColumn: "3", gridRow: "2" }}>
            <GalleryItem
              image={galleryImages[5]}
              index={5}
              onClick={() => setSelectedIndex(5)}
            />
          </div>
        </div>

        {/* ── Explore CTA ── */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <button
            onClick={() => setSelectedIndex(0)}
            className="group flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-linear-to-r from-[#3B2E8C] to-[#1F5AA6] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2E8C] focus-visible:ring-offset-2 active:scale-[0.98]"
            aria-label="Open full gallery slideshow"
          >
            <Eye className="h-4 w-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
            <span>Explore Full Gallery</span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {selectedIndex !== null && (
        <Lightbox
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  )
}