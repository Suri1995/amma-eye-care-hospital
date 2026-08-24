"use client"

import { useState, useCallback, useEffect, useRef } from "react"

type Testimonial = {
  name: string
  surgeryType: string
  type: "text" | "video"
  text?: string
  videoUrl?: string
  poster?: string
}

// NOTE: the 4 video testimonials don't have confirmed patient names/surgery
// types attached yet — swap in the real details once you have them.
const testimonials: Testimonial[] = [
  {
    name: "Murthy Maddirala",
    surgeryType: "Excellent Surgery Experience",
    type: "text",
    text: "Dr. Rohini madam is known to us for more than 20 years. She has treated the eyes for our parents, in-laws and now for our family. Her expertise in surgery and post operative care is the base foe confidence built in us over a generation. She is kind in listening and attending the eye issues succssfully. The team she has also kind and receive and attend the patients with love."
  },
  {
    name: "Patient Testimonial",
    surgeryType: "Video",
    type: "video",
    videoUrl: "/testimonial-1.mp4",
    poster: "/testimonial-1-poster.jpg",
  },
  {
    name: "Rajender Kasala",
    surgeryType: "Excellent Cataract Surgery Experience",
    type: "text",
    text: "I had a very positive experience with my cataract surgery. Dr. Rohini Pothireddy was highly professional, caring, and took the time to explain the procedure clearly and answer all my questions. I felt comfortable and confident throughout the entire process.\nThe staff were also very friendly, helpful, and supportive. They were patient, courteous, and made sure everything went smoothly before and after the surgery.\nI am very happy with the care I received and the results of my cataract surgery. I sincerely appreciate the doctor and the entire team for their excellent service. I would definitely recommend this eye doctor and the staff to anyone looking for quality eye care."
  },
  {
    name: "Patient Testimonial",
    surgeryType: "Video",
    type: "video",
    videoUrl: "/testimonial-2.mp4",
    poster: "/testimonial-2-poster.jpg",
  },
  {
    name: "Geetha Reddy Maddi",
    surgeryType: "LASIK Surgery",
    type: "text",
    text: "I have gone through LASIK and extremely satisfied with the treatment.\nI would recommend Amma Eye Care Hospital to everyone who really seeks clear vision.\nIt is equipped with advanced machinery, experienced doctors, excellent service and utmost care to patients, which makes the hospital trustworthy.\nThank you Dr. Prasad Reddy, Dr. Keerthi and the entire team of Amma for your service."
  },
  {
    name: "Patient Testimonial",
    surgeryType: "Video",
    type: "video",
    videoUrl: "/testimonial-3.mp4",
    poster: "/testimonial-3-poster.jpg",
  },
  {
    name: "Paruchuri Chaya Lakshmi",
    surgeryType: "Cataract Surgery",
    type: "text",
    text: "Visited Amma Eye Care Hospital as my father-in-law had eyesight problems because of diabetes. After conducting the tests, Dr. Prasad Reddy, Dr. Keerthi and Dr. Vishnu Preethi clearly explained the situation and recommended cataract surgery.\nDoctors and staff took utmost care of my father-in-law throughout the entire process, as a result of which he now has better eye vision.\nI sincerely thank Prasad Reddy garu, Keerthi garu and Vishnu Preethi garu for the great work."
  },
  {
    name: "Patient Testimonial",
    surgeryType: "Video",
    type: "video",
    videoUrl: "/testimonial-4.mp4",
    poster: "/testimonial-4-poster.jpg",
  },
  {
    name: "Sai Teja Annala",
    surgeryType: "ICL Surgery",
    type: "text",
    text: "I approached Amma eye care hospital for correction of my eye vision and it turned out to be one of the best decisions I made.\nAfter intensive diagnosis, I was suggested ICL surgery and they explained the surgery procedure in detail. The hospital staff took very good care with patience. Having eye surgery creates panic and doubt but the doctors assurance and authenticity gave me the required confidence.\nThe hospital is hygienic and the surgery was done by experienced surgeon. It was quick and painless. I started to see the results from the day of the surgery.\nI am extremely happy and I thank the doctors and staff for providing me great hospitality and most important of all bringing back my eye vision. Thank you :)\nMy mother (87 years) got operated cataract successfully and now she is watching TV, reading books without strain. Excellent medical care was taken by the Doctors and very good service was given by the staff. Thanks alot to Doctors and staff of Amma eye care hospital, LB nagar, vanasthalipuram, Hyderabad."
  },
]

const GAP = 22
const ACCENT = "#e8341c"
const NAVY = "#1b1f5d"

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M7.5 4.5v13l11-6.5z" fill={NAVY} />
    </svg>
  )
}

function VideoIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h8A2.5 2.5 0 0 1 16 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 3 17.5z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 10.2 20.2 7a.8.8 0 0 1 1.3.6v8.8a.8.8 0 0 1-1.3.6L16 13.8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

function QuoteIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9.5 6C6 6.9 3.6 9.9 3.6 13.6c0 2.8 1.9 4.7 4.2 4.7 2 0 3.6-1.6 3.6-3.6 0-1.9-1.4-3.4-3.2-3.5.3-1.7 1.9-3.3 3.7-3.8L9.5 6zm10 0c-3.5.9-5.9 3.9-5.9 7.6 0 2.8 1.9 4.7 4.2 4.7 2 0 3.6-1.6 3.6-3.6 0-1.9-1.4-3.4-3.2-3.5.3-1.7 1.9-3.3 3.7-3.8L19.5 6z" />
    </svg>
  )
}

// Comment box — fills the full box; if the text is longer than the box,
// it scrolls internally instead of truncating.
function CommentBox({ text }: { text: string }) {
  return (
    <div className="aec-comment-scroll" style={{ height: "100%", padding: "36px 20px 20px" }}>
      <p style={{ fontSize: 14.5, lineHeight: 1.75, color: "#3b3f66", marginTop: 10, fontWeight: 400, whiteSpace: "pre-line" }}>
        {text}
      </p>
    </div>
  )
}

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [cols, setCols] = useState(3)
  const viewportRef = useRef<HTMLDivElement>(null)
  const [slideW, setSlideW] = useState(0)
  const touchStartX = useRef(0)
  const [playingIdx, setPlayingIdx] = useState<number | null>(null)

  const maxIndex = testimonials.length - cols

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

  useEffect(() => { setCurrent(0) }, [cols])

  const go = useCallback((idx: number) => {
    setPlayingIdx(null)
    setCurrent(Math.max(0, Math.min(idx, maxIndex)))
  }, [maxIndex])

  const offset = current * (slideW + GAP)

  return (
    <div
      style={{
        position: "relative",
        borderRadius: 24,
        overflow: "hidden",
        background: "#eceef2",
        fontFamily: "'Sora', sans-serif",
      }}
    >
      {/* Ambient glow blobs — soft tints the glass panel can pick up */}
      <div aria-hidden="true" style={{ position: "absolute", top: -120, left: -80, width: 320, height: 320, borderRadius: "50%", background: ACCENT, opacity: 0.12, filter: "blur(90px)", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", bottom: -140, right: -60, width: 360, height: 360, borderRadius: "50%", background: "#5b6cff", opacity: 0.10, filter: "blur(100px)", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: "35%", right: "20%", width: 220, height: 220, borderRadius: "50%", background: "#8b5cf6", opacity: 0.08, filter: "blur(90px)", pointerEvents: "none" }} />

      {/* Glass panel — soft gray backdrop, frosted white glass on top */}
      <div
        style={{
          position: "relative",
          background: "rgba(255,255,255,0.45)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          borderRadius: 22,
          padding: "34px 30px 34px",
          boxShadow: "0 30px 60px -30px rgba(27,31,93,0.18), inset 0 1px 0 rgba(255,255,255,0.8)",
        }}
      >
        <style>{`
          .aec-card { transition: transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s, border-color .35s; }
          .aec-card:hover { transform: translateY(-6px); border-color: rgba(27,31,93,0.18) !important; box-shadow: 0 22px 40px -20px rgba(27,31,93,0.22); }
          .aec-play:hover { transform: translate(-50%,-50%) scale(1.08); box-shadow: 0 0 0 10px rgba(232,52,28,0.14), 0 8px 22px rgba(0,0,0,0.3) !important; }
          .aec-nav { transition: background .28s ease, color .28s ease, box-shadow .28s ease, transform .2s ease, border-color .28s ease; }
          .aec-nav:hover:not(:disabled) {
            background: linear-gradient(135deg, ${ACCENT}, #ff7a5c) !important;
            border-color: transparent !important;
            color: #fff !important;
            box-shadow: 0 10px 24px -6px rgba(232,52,28,0.45);
            transform: translateY(-2px);
          }
          .aec-nav:active:not(:disabled) { transform: translateY(0); }
          .aec-dot:hover { background: rgba(27,31,93,0.35); }

          /* object-fit:cover carries into native fullscreen and crops the
             video — force it to fit properly whenever the video itself is
             the fullscreen element. */
          .aec-video:fullscreen { object-fit: contain !important; background: #000 !important; width: 100% !important; height: 100% !important; }
          .aec-video:-webkit-full-screen { object-fit: contain !important; background: #000 !important; width: 100% !important; height: 100% !important; }
          .aec-video:-moz-full-screen { object-fit: contain !important; background: #000 !important; width: 100% !important; height: 100% !important; }
          .aec-video:-ms-fullscreen { object-fit: contain !important; background: #000 !important; width: 100% !important; height: 100% !important; }

          .aec-comment-scroll {
            overflow-y: auto;
            scrollbar-width: thin;
            scrollbar-color: rgba(27,31,93,0.25) transparent;
          }
          .aec-comment-scroll::-webkit-scrollbar { width: 6px; }
          .aec-comment-scroll::-webkit-scrollbar-track { background: transparent; }
          .aec-comment-scroll::-webkit-scrollbar-thumb {
            background: rgba(27,31,93,0.25);
            border-radius: 10px;
          }
          .aec-comment-scroll::-webkit-scrollbar-thumb:hover { background: rgba(27,31,93,0.4); }
        `}</style>

        {/* Viewport */}
        <div ref={viewportRef} style={{ overflow: "hidden", width: "100%" }}>
          <div
            style={{
              display: "flex",
              gap: GAP,
              transition: "transform .45s cubic-bezier(.4,0,.2,1)",
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
                className="aec-card"
                aria-label={`Testimonial from ${t.name}`}
                style={{
                  flexShrink: 0,
                  width: slideW || `calc((100% - ${GAP * (cols - 1)}px) / ${cols})`,
                  background: "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.8)",
                  padding: 16,
                  display: "flex", flexDirection: "column", gap: 16,
                  boxShadow: "0 14px 30px -18px rgba(27,31,93,0.16)",
                }}
              >
                {/* Content box — Video (2:3) or Comment */}
                <div
                  style={{
                    position: "relative",
                    borderRadius: 14,
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                    background: t.type === "text"
                      ? "linear-gradient(160deg, rgba(255,255,255,0.9), rgba(255,255,255,0.5))"
                      : "#0f1230",
                    border: "1px solid rgba(27,31,93,0.08)",
                  }}
                >
                  <div style={{
                    display: "flex", alignItems: "center", gap: 6,
                    position: "absolute", top: 14, left: 14, zIndex: 2,
                    color: t.type === "video" ? "#fff" : ACCENT,
                    background: t.type === "video" ? "rgba(15,18,48,0.55)" : "rgba(232,52,28,0.08)",
                    backdropFilter: "blur(6px)",
                    padding: "5px 10px",
                    borderRadius: 20,
                  }}>
                    {t.type === "video" ? <VideoIcon /> : <QuoteIcon />}
                    <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase" }}>
                      {t.type === "video" ? "Video" : "Comment"}
                    </span>
                  </div>

                  {t.type === "video" ? (
                    playingIdx === i ? (
                      <video
                        className="aec-video"
                        src={t.videoUrl}
                        controls
                        autoPlay
                        playsInline
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    ) : (
                      <button
                        onClick={() => setPlayingIdx(i)}
                        aria-label={`Play video testimonial from ${t.name}`}
                        style={{ all: "unset", cursor: "pointer", position: "relative", display: "block", width: "100%", height: "100%" }}
                      >
                        {t.poster && (
                          <img
                            src={t.poster}
                            alt=""
                            aria-hidden="true"
                            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                          />
                        )}
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,18,48,0.05) 40%, rgba(15,18,48,0.6) 100%)" }} />
                        <span
                          className="aec-play"
                          style={{
                            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                            width: 50, height: 50, borderRadius: "50%",
                            background: "rgba(255,255,255,0.95)",
                            backdropFilter: "blur(6px)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
                            transition: "transform .25s, box-shadow .25s",
                          }}
                        >
                          <PlayIcon />
                        </span>
                      </button>
                    )
                  ) : (
                    <CommentBox text={t.text || ""} />
                  )}
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: "linear-gradient(90deg, rgba(27,31,93,0.12), rgba(27,31,93,0))" }} />

                {/* Caption */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 2 }}>
                  <div
                    aria-hidden="true"
                    style={{
                      width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
                      background: `linear-gradient(135deg, ${ACCENT}, #ff7a5c)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff", fontSize: 14, fontWeight: 700,
                    }}
                  >
                    {t.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, letterSpacing: -0.1 }}>{t.name}</div>
                    <div style={{ fontSize: 12.5, color: "#6b7099", marginTop: 2 }}>{t.surgeryType}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Controls — arrows + dots, centered below the cards */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, marginTop: 30 }}>
          <button
            className="aec-nav"
            onClick={() => go(current - 1)}
            disabled={current === 0}
            aria-label="Previous testimonial"
            style={{
              width: 44, height: 44, borderRadius: "50%",
              border: "1px solid rgba(232,52,28,0.28)",
              cursor: current === 0 ? "not-allowed" : "pointer",
              background: "rgba(232,52,28,0.1)",
              backdropFilter: "blur(10px)",
              color: ACCENT,
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: current === 0 ? 0.35 : 1,
              flexShrink: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 13L7 9L11 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div style={{ display: "flex", gap: 8 }} role="tablist" aria-label="Testimonials navigation">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                className="aec-dot"
                role="tab"
                aria-selected={i === current}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => go(i)}
                style={{
                  height: 8,
                  width: i === current ? 28 : 8,
                  borderRadius: 4, border: "none", cursor: "pointer", padding: 0,
                  background: i === current ? `linear-gradient(90deg, ${ACCENT}, #ff7a5c)` : "rgba(27,31,93,0.15)",
                  transition: "width .25s, background .25s",
                }}
              />
            ))}
          </div>

          <button
            className="aec-nav"
            onClick={() => go(current + 1)}
            disabled={current >= maxIndex}
            aria-label="Next testimonial"
            style={{
              width: 44, height: 44, borderRadius: "50%",
              border: "1px solid rgba(232,52,28,0.28)",
              cursor: current >= maxIndex ? "not-allowed" : "pointer",
              background: "rgba(232,52,28,0.1)",
              backdropFilter: "blur(10px)",
              color: ACCENT,
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: current >= maxIndex ? 0.35 : 1,
              flexShrink: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 5L11 9L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}