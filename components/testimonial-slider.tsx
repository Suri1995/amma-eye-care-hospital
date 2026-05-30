"use client"

import { useState, useCallback, useEffect, useRef } from "react"

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Cataract Surgery Patient",
    text: "The entire cataract surgery process was seamless and professionally managed. Thanks to the expert care at Amma Eye Care Hospital, my vision is clearer than ever."
  },
  {
    name: "Sneha Reddy",
    role: "LASIK Patient",
    text: "The doctors explained every step of the LASIK procedure and made me feel comfortable throughout. The results have been life-changing."
  },
  {
    name: "Anil Sharma",
    role: "Retina Care Patient",
    text: "I received exceptional treatment for my retinal condition. The medical team was knowledgeable, caring, and highly responsive during every visit."
  },
  {
    name: "Priya Nair",
    role: "Pediatric Eye Care Parent",
    text: "The doctors were wonderful with my child and conducted a detailed eye examination. We felt reassured and well-informed throughout the consultation."
  },
  {
    name: "Vikram Mehta",
    role: "Comprehensive Eye Check-up Patient",
    text: "From appointment booking to consultation, the experience was smooth and efficient. The staff and doctors demonstrated genuine care and professionalism."
  },
]

const GAP = 20

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="#FFDF00" aria-hidden="true">
      <path d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10.1l-3.6 1.9.7-4L2 5.2l4-.6z" />
    </svg>
  )
}

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [cols, setCols] = useState(3)
  const viewportRef = useRef<HTMLDivElement>(null)
  const [slideW, setSlideW] = useState(0)
  const touchStartX = useRef(0)

  const maxIndex = testimonials.length - cols

  // Measure exact pixel width — eliminates % rounding gaps
  const measure = useCallback(() => {
    const c = window.innerWidth <= 540 ? 1 : 3
    setCols(c)
    if (viewportRef.current) {
      const vpW = viewportRef.current.offsetWidth
      setSlideW((vpW - GAP * (c - 1)) / c)
    }
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [measure])

  // Reset to 0 when cols change
  useEffect(() => { setCurrent(0) }, [cols])

  const go = useCallback((idx: number) => {
    setCurrent(Math.max(0, Math.min(idx, maxIndex)))
  }, [maxIndex])

  const offset = current * (slideW + GAP)

  return (
    <div style={{ background: "#1b1f5d", borderRadius: 20, padding: "36px 28px 32px", fontFamily: "'Sora', sans-serif", overflow: "hidden" }}>

      {/* Nav */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginBottom: 28 }}>
        {[
          { dir: -1, style: { background: "rgba(255,255,255,0.1)" }, label: "Previous" },
          { dir: 1, style: { background: "#e8341c" }, label: "Next" },
        ].map(({ dir, style, label }) => {
          const disabled = dir === -1 ? current === 0 : current >= maxIndex
          return (
            <button
              key={dir}
              onClick={() => go(current + dir)}
              disabled={disabled}
              aria-label={`${label} testimonial`}
              style={{
                width: 44, height: 44, borderRadius: "50%", border: "none",
                cursor: disabled ? "not-allowed" : "pointer",
                color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                opacity: disabled ? 0.35 : 1, transition: "background .18s, opacity .18s",
                ...style,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d={dir === -1 ? "M11 13L7 9L11 5" : "M7 5L11 9L7 13"}
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </button>
          )
        })}
      </div>

      {/* Viewport — overflow hidden, exact width */}
      <div ref={viewportRef} style={{ overflow: "hidden", width: "100%" }}>
        <div
          style={{
            display: "flex",
            gap: GAP,
            transition: "transform .42s cubic-bezier(.4,0,.2,1)",
            transform: `translateX(-${offset}px)`,
          }}
          aria-live="polite"
          onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
          onTouchEnd={e => {
            const dx = e.changedTouches[0].clientX - touchStartX.current
            if (Math.abs(dx) > 44) go(current + (dx < 0 ? 1 : -1))
          }}
        >
          {testimonials.map((t, i) => (
            <article
              key={i}
              aria-label={`Testimonial from ${t.name}`}
              style={{
                flexShrink: 0,
                width: slideW || `calc((100% - ${GAP * (cols - 1)}px) / ${cols})`,
                background: "#1e2340",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "24px 22px 22px",
                display: "flex", flexDirection: "column", gap: 18,
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <span style={{ fontSize: 52, lineHeight: 0.75, color: "#dc2626", fontWeight: 700, userSelect: "none" }} aria-hidden="true">"</span>
                <div style={{ display: "flex", gap: 3, paddingTop: 2 }} aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, j) => <StarIcon key={j} />)}
                </div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: "#c5cae8", flex: 1 }}>"{t.text}"</p>
              <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>{t.name}</div>
                <div style={{ fontSize: 12.5, color: "#8b92b8", marginTop: 3 }}>{t.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Dots — one per scrollable position */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }} role="tablist" aria-label="Testimonials navigation">
        {Array.from({ length: maxIndex + 1 }, (_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Testimonial ${i + 1}`}
            onClick={() => go(i)}
            style={{
              height: 8,
              width: i === current ? 26 : 8,
              borderRadius: 4, border: "none", cursor: "pointer", padding: 0,
              background: i === current ? "#e8341c" : "rgba(255,255,255,0.2)",
              transition: "width .25s, background .25s",
            }}
          />
        ))}
      </div>
    </div>
  )
}