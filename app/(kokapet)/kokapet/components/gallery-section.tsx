"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn, Eye, Sparkles } from "lucide-react"

/**
 * IMAGE FILES
 * Save your uploaded photos into: public/kokapet-photos/
 * using exactly these filenames (rename them from your WhatsApp exports):
 *
 *   reception-entrance.jpg            → the "Amma Eye Care" glass-door entrance shot
 *   slit-lamp-examination.jpg         → close-up of doctor examining patient at slit lamp
 *   diagnostic-consultation-room.jpg  → wide shot of exam room with dual monitors
 *   retina-imaging-consultation.jpg   → second exam-room angle, imaging screen visible
 *   eyewear-optical-boutique.jpg      → staff + eyewear display shelf shot
 *   patient-waiting-lounge.jpg        → waiting area with seated patients
 *
 * Recommended source size: at least 1600px on the long edge, landscape orientation
 * (crop patient-waiting-lounge.jpg and retina-imaging-consultation.jpg to landscape
 * if you're using the portrait WhatsApp exports, so the grid stays even).
 */

const galleryImages = [
  {
    id: 1,
    title: "Reception & Welcome",
    description: "A calm, modern entrance that sets the tone for every visit",
    src: "/kokapet-photos/reception-entrance.webp",
    features: ["Warm welcome", "Marble reception desk", "Optical boutique in view"],
    alt: "Amma Eye Care reception entrance with glass doors and marble desk",
  },
  {
    id: 2,
    title: "Slit-Lamp Examination",
    description: "Precision diagnostics performed with dedicated care",
    src: "/kokapet-photos/slit-lamp-examination.webp",
    features: ["Detailed anterior exam", "Experienced clinicians", "Patient-first pace"],
    alt: "Ophthalmologist performing a slit-lamp eye examination on a patient",
  },
  {
    id: 3,
    title: "Diagnostic Consultation Suite",
    description: "Dual-monitor imaging lets you see exactly what your doctor sees",
    src: "/kokapet-photos/diagnostic-consultation-room.webp",
    features: ["Live imaging display", "Digital records", "Comfortable exam chair"],
    alt: "Diagnostic consultation room with slit lamp and dual imaging monitors",
  },
  {
    id: 4,
    title: "Retina Imaging",
    description: "Advanced imaging technology for a clear view of ocular health",
    src: "/kokapet-photos/retina-imaging-consultation.webp",
    features: ["High-resolution imaging", "Real-time review", "Specialist consultation"],
    alt: "Consultation room with retina imaging equipment and monitor display",
  },
  {
    id: 5,
    title: "Optical Boutique",
    description: "Wall-to-wall curated frames, from classic to contemporary",
    src: "/kokapet-photos/eyewear-optical-boutique.webp",
    features: ["200+ frame styles", "Dedicated fitting counter", "On-site fitting"],
    alt: "Optical boutique with floor-to-ceiling eyewear display shelves and fitting counter",
  },
  {
    id: 6,
    title: "Patient Lounge",
    description: "Unhurried, comfortable seating for you and your family",
    src: "/kokapet-photos/patient-waiting-lounge.webp",
    features: ["Spacious seating", "Family-friendly", "Calm atmosphere"],
    alt: "Patients seated in the comfortable waiting lounge",
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
      className="group relative w-full h-full cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5AA6] focus-visible:ring-offset-2 hover:shadow-2xl active:scale-[0.98]"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        priority={index < 2}
      />

      {/* Base gradient for legibility even without hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"
      />

      {/* Deepened scrim on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Zoom affordance */}
      <div
        aria-hidden="true"
        className="absolute top-2.5 sm:top-3.5 right-2.5 sm:right-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
          <ZoomIn className="h-4 w-4 text-[#1C1B29]" />
        </div>
      </div>

      {/* Featured badge */}
      {isFeatured && (
        <div className="absolute top-2.5 sm:top-3.5 left-2.5 sm:left-3.5">
          <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-[10px] font-medium tracking-wide uppercase">
            Featured
          </span>
        </div>
      )}

      {/* Caption panel — always partly visible, rises fully on hover */}
      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 md:p-5">
        <p className="font-serif italic text-white text-sm sm:text-base md:text-lg leading-snug drop-shadow-sm">
          {image.title}
        </p>
        <p className="text-white/75 text-[11px] sm:text-xs mt-0.5 max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
          {image.description}
        </p>
        <span className="block mt-1.5 h-px w-8 bg-[#F2B035] opacity-70" aria-hidden="true" />
      </div>
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
      style={{ background: "rgba(10,9,20,0.96)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${image.title}`}
    >
      <button
        ref={closeRef}
        className="absolute top-4 right-4 z-10 rounded-full bg-white/10 hover:bg-white/20 p-2.5 sm:p-3 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
        onClick={onClose}
        aria-label="Close gallery"
      >
        <X className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 hover:bg-white/20 p-2.5 sm:p-3 md:p-4 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
      </button>

      <button
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 hover:bg-white/20 p-2.5 sm:p-3 md:p-4 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
      </button>

      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs sm:text-sm font-medium tracking-wide"
        aria-live="polite"
        aria-atomic="true"
      >
        {selectedIndex + 1} / {galleryImages.length}
      </div>

      <div
        className="relative max-w-5xl w-[90%] md:w-[80%] aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="90vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8">
          <h2 className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-white mb-2 drop-shadow-sm">
            {image.title}
          </h2>
          <p className="text-white/80 text-sm sm:text-base md:text-lg mb-3 max-w-2xl">
            {image.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {image.features.map((feature, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-xs sm:text-sm"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

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
            className="transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-full"
          >
            <span
              className={`block rounded-full transition-all ${
                idx === selectedIndex
                  ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-[#F2B035]"
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

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [selectedIndex])

  if (!mounted) {
    return (
      <section className="bg-[#FBFAF8] py-16 sm:py-20 md:py-28" aria-busy="true" aria-label="Gallery loading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-pulse">
          <div className="h-8 w-32 mx-auto bg-gray-200 rounded-full mb-4" />
          <div className="h-12 w-64 mx-auto bg-gray-200 rounded-lg mb-4" />
          <div className="h-6 w-96 mx-auto bg-gray-200 rounded-lg mb-12" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:hidden">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-xl" />
            ))}
          </div>
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
    <section id="gallery" className="bg-[#FBFAF8] py-14 md:py-24" aria-label="Clinic gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="mx-auto mb-12 sm:mb-16 md:mb-20 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-5 px-4 py-1.5 rounded-full bg-linear-to-r from-[#1F5AA6]/10 to-[#3B2E8C]/10 border border-[#1F5AA6]/20">
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#1F5AA6]" />
            <span className="text-[#1F5AA6] text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Inside Amma Eye Care
            </span>
          </div>

          <h1 className="mb-4 sm:mb-5 font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1C1B29]">
            A closer look at our{" "}
            <span className="relative inline-block italic text-[#3B2E8C]">
              Kokapet clinic
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                aria-hidden="true"
              >
                <path d="M5 3.5 Q50 1 100 3.5 Q150 6 195 3.5" stroke="#F2B035" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From the moment you walk in to the moment you leave, every space is
            built around precision, hygiene, and your comfort.
          </p>
        </div>

        {/* Mobile / tablet grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:hidden" role="list" aria-label="Gallery items">
          {galleryImages.map((image, index) => (
            <div key={image.id} role="listitem" className="aspect-square">
              <GalleryItem image={image} index={index} onClick={() => setSelectedIndex(index)} />
            </div>
          ))}
        </div>

        {/* Desktop bento grid */}
        <div
          className="hidden lg:grid gap-5"
          style={{ gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "repeat(2, 260px)" }}
          role="list"
          aria-label="Gallery items"
        >
          <div role="listitem" style={{ gridColumn: "1", gridRow: "1 / 3" }}>
            <GalleryItem image={galleryImages[0]} index={0} onClick={() => setSelectedIndex(0)} />
          </div>
          <div role="listitem" style={{ gridColumn: "2", gridRow: "1" }}>
            <GalleryItem image={galleryImages[1]} index={1} onClick={() => setSelectedIndex(1)} />
          </div>
          <div role="listitem" style={{ gridColumn: "3", gridRow: "1" }}>
            <GalleryItem image={galleryImages[2]} index={2} onClick={() => setSelectedIndex(2)} />
          </div>
          <div role="listitem" style={{ gridColumn: "4", gridRow: "1 / 3" }}>
            <GalleryItem image={galleryImages[3]} index={3} onClick={() => setSelectedIndex(3)} />
          </div>
          <div role="listitem" style={{ gridColumn: "2", gridRow: "2" }}>
            <GalleryItem image={galleryImages[4]} index={4} onClick={() => setSelectedIndex(4)} />
          </div>
          <div role="listitem" style={{ gridColumn: "3", gridRow: "2" }}>
            <GalleryItem image={galleryImages[5]} index={5} onClick={() => setSelectedIndex(5)} />
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <button
            onClick={() => setSelectedIndex(0)}
            className="group flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-linear-to-r from-[#3B2E8C] to-[#1F5AA6] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2E8C] focus-visible:ring-offset-2 active:scale-[0.98]"
            aria-label="Open full gallery slideshow"
          >
            <Eye className="h-4 w-4 group-hover:scale-110 transition-transform" />
            <span>Explore Full Gallery</span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

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