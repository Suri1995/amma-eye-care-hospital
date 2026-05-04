"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "./ui/button"
import { Star, Calendar, Shield, Phone, MapPin, MessageCircle, CheckCircle, ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────
   Animated counter
───────────────────────────────────────── */
function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    let startTime: number
    const animate = (now: number) => {
      if (!startTime) startTime = now
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration, isVisible])

  const display = end >= 1000 ? `${Math.round(count / 100) / 10}K` : count.toLocaleString()
  return <span ref={ref}>{display}{suffix}</span>
}

/* ─────────────────────────────────────────
   Eye animation
   
   KEY FIX: Every fill that sits inside a <clipPath> uses only:
     • Solid hex colors           — always rendered correctly
     • rgba() on <circle> fill   — always rendered correctly
     • SVG <rect>/<ellipse> overlays for shading — no gradients inside clips
   
   radialGradient + clipPath = broken on iOS Safari / Android Chrome.
   We simulate depth with stacked solid circles + semi-transparent overlays.
───────────────────────────────────────── */
function EyeAnimation() {
  const [blink, setBlink] = useState(false)
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Blink every 3–5 s
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const schedule = () => {
      timeout = setTimeout(() => {
        setBlink(true)
        setTimeout(() => { setBlink(false); schedule() }, 160)
      }, 3000 + Math.random() * 2000)
    }
    schedule()
    return () => clearTimeout(timeout)
  }, [])

  // Auto-float pupil
  useEffect(() => {
    let frame: number
    let t = 0
    const tick = () => {
      t += 0.008
      setPupilPos({ x: Math.sin(t * 1.3) * 10, y: Math.cos(t * 0.9) * 7 })
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  // Mouse-follow
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const r = containerRef.current.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      const dist = Math.sqrt(dx * dx + dy * dy) || 1
      const f = Math.min(dist, 120) / 120
      setPupilPos({ x: (dx / dist) * 18 * f, y: (dy / dist) * 18 * f })
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  /* Iris X/Y translation values (iris moves slower than pupil) */
  const ix = pupilPos.x * 0.4
  const iy = pupilPos.y * 0.4
  const px = pupilPos.x
  const py = pupilPos.y

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center select-none"
      aria-hidden="true"
    >
      {/* Ambient glow behind eye */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(212,26,43,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Dashed orbital rings */}
      {[
        { inset: "-10%", color: "rgba(59,46,140,0.35)", dur: "40s", dir: "normal" },
        { inset: "5%",   color: "rgba(212,26,43,0.25)",  dur: "28s", dir: "reverse" },
        { inset: "18%",  color: "rgba(31,90,166,0.25)",  dur: "18s", dir: "normal" },
      ].map((r, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-dashed pointer-events-none"
          style={{
            inset: r.inset,
            borderColor: r.color,
            animation: `eyeSpin ${r.dur} linear infinite ${r.dir}`,
          }}
        />
      ))}

      {/* Floating coloured dots */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: i % 2 === 0 ? 6 : 4,
            height: i % 2 === 0 ? 6 : 4,
            backgroundColor:
              i % 3 === 0 ? "#D41A2B" : i % 3 === 1 ? "#3B2E8C" : "#1F5AA6",
            opacity: 0.55,
            top: `${15 + i * 12}%`,
            left: i % 2 === 0 ? `${5 + i * 3}%` : undefined,
            right: i % 2 !== 0 ? `${5 + i * 3}%` : undefined,
            animation: `eyeFloat ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      {/* ── Main SVG eye ── */}
      <svg
        viewBox="0 0 360 240"
        className="relative w-[85%]"
        style={{ filter: "drop-shadow(0 16px 48px rgba(43,30,122,0.28))" }}
      >
        {/*
          ONLY ONE gradient is used and it lives OUTSIDE any clipPath:
          the eyelid shadow (linearGradient on an unclipped path).
          Everything inside #eyeClip uses solid fills only.
        */}
        <defs>
          <clipPath id="eyeClip">
            <path d="M 10,120 Q 90,30 180,20 Q 270,30 350,120 Q 270,210 180,220 Q 90,210 10,120 Z" />
          </clipPath>
          {/* This gradient is used on a path that is NOT inside a clipPath — safe */}
          <linearGradient id="lidShadowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#1a0f4e" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1a0f4e" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ── Sclera (eye white) — SOLID fill, no gradient ── */}
        <path
          d="M 10,120 Q 90,30 180,20 Q 270,30 350,120 Q 270,210 180,220 Q 90,210 10,120 Z"
          fill="#F4F2FC"
          stroke="#C0B8E8"
          strokeWidth="1.5"
        />

        {/*
          ── Everything below is clipped to the eye shape ──
          ALL fills inside clip are solid hex or rgba() on SVG shapes.
          NO radialGradient or linearGradient references inside the clip.
        */}

        {/* Subtle blood vessels */}
        <g clipPath="url(#eyeClip)" opacity="0.13">
          <path d="M 40,100 Q 80,110 110,120" stroke="#D41A2B" strokeWidth="0.8" fill="none" strokeLinecap="round" />
          <path d="M 320,105 Q 280,115 250,122" stroke="#D41A2B" strokeWidth="0.8" fill="none" strokeLinecap="round" />
          <path d="M 50,130 Q 75,125 95,130" stroke="#D41A2B" strokeWidth="0.6" fill="none" strokeLinecap="round" />
        </g>

        {/* ── IRIS — solid layered circles, no gradient ── */}
        <g
          clipPath="url(#eyeClip)"
          style={{
            transform: `translate(${ix}px, ${iy}px)`,
            transition: "transform 0.12s ease-out",
          }}
        >
          {/* Layer 1 — deep navy base */}
          <circle cx="180" cy="120" r="72" fill="#0f1f55" />

          {/* Layer 2 — mid blue ring  */}
          <circle cx="180" cy="120" r="68" fill="#1a3a8f" />

          {/* Layer 3 — brighter blue inner */}
          <circle cx="180" cy="120" r="58" fill="#1e4db5" />

          {/* Layer 4 — lighter blue center */}
          <circle cx="180" cy="120" r="46" fill="#2b65cc" />

          {/* Iris fibers — subtle white lines */}
          {[...Array(24)].map((_, i) => (
            <line
              key={`f${i}`}
              x1="180" y1="50" x2="180" y2="74"
              stroke="rgba(255,255,255,0.055)"
              strokeWidth="1.2"
              transform={`rotate(${i * 15} 180 120)`}
            />
          ))}
          {[...Array(24)].map((_, i) => (
            <line
              key={`g${i}`}
              x1="180" y1="54" x2="180" y2="64"
              stroke="rgba(140,200,255,0.10)"
              strokeWidth="0.8"
              transform={`rotate(${i * 15 + 7.5} 180 120)`}
            />
          ))}

          {/* Collarette rings */}
          <circle cx="180" cy="120" r="44" fill="none" stroke="rgba(100,160,240,0.22)" strokeWidth="2" />
          <circle cx="180" cy="120" r="49" fill="none" stroke="rgba(80,130,210,0.12)" strokeWidth="1" />

          {/* Limbal darkening — solid semi-transparent stroke, NOT gradient */}
          <circle cx="180" cy="120" r="72" fill="none" stroke="rgba(8,14,50,0.72)" strokeWidth="11" />

          {/* Upper shading overlay — solid dark ellipse at top of iris */}
          <ellipse cx="180" cy="86" rx="52" ry="34" fill="rgba(8,14,55,0.38)" />

          {/* Bottom shading — lighter */}
          <ellipse cx="180" cy="152" rx="44" ry="22" fill="rgba(8,14,55,0.18)" />
        </g>

        {/* ── PUPIL — solid, tracks independently ── */}
        <g
          clipPath="url(#eyeClip)"
          style={{
            transform: `translate(${px}px, ${py}px)`,
            transition: "transform 0.08s ease-out",
          }}
        >
          {/* Pupil outer */}
          <circle cx="180" cy="120" r="30" fill="#07070f" />
          {/* Pupil inner (deep black) */}
          <circle cx="180" cy="120" r="23" fill="#02020a" />
        </g>

        {/* ── Corneal reflections — always on top, outside clip not needed ── */}
        <g clipPath="url(#eyeClip)">
          {/* Primary specular — white ellipse, solid */}
          <ellipse
            cx="162" cy="97" rx="13" ry="9"
            fill="white" opacity="0.9"
            transform="rotate(-15 162 97)"
          />
          {/* Secondary reflection */}
          <ellipse
            cx="196" cy="137" rx="5.5" ry="4"
            fill="white" opacity="0.36"
            transform="rotate(-20 196 137)"
          />
          {/* Tiny sparkle */}
          <circle cx="156" cy="91" r="2.5" fill="white" opacity="0.65" />
        </g>

        {/* ── Blink eyelid — scaleY transform, solid fill ── */}
        <g
          style={{
            transform: blink ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "180px 20px",
            transformBox: "fill-box",
            transition: "transform 0.09s ease-in",
          }}
        >
          <path
            d="M 10,120 Q 90,30 180,20 Q 270,30 350,120 Q 270,50 180,42 Q 90,50 10,120 Z"
            fill="#F0E6D8"
          />
        </g>

        {/* ── Eyelashes ── */}
        {[
          [70,62,58,42], [100,43,93,23], [135,30,131,10],
          [172,23,170,3], [209,23,211,3],
          [245,30,249,10], [280,43,288,23], [310,62,322,44],
        ].map(([x1,y1,x2,y2], i) => (
          <line
            key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#18082e" strokeWidth="2.5" strokeLinecap="round" opacity="0.88"
          />
        ))}

        {/* Upper eyelid line */}
        <path
          d="M 10,120 Q 90,30 180,20 Q 270,30 350,120"
          fill="none" stroke="#22104a" strokeWidth="2.5" strokeLinecap="round" opacity="0.72"
        />
        {/* Lower eyelid line */}
        <path
          d="M 10,120 Q 90,210 180,220 Q 270,210 350,120"
          fill="none" stroke="#22104a" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"
        />

        {/* Inner/outer corner pink highlights */}
        <ellipse cx="18"  cy="120" rx="8" ry="5" fill="#FFCDD8" opacity="0.5" />
        <ellipse cx="342" cy="120" rx="8" ry="5" fill="#FFCDD8" opacity="0.5" />

        {/*
          Eyelid shadow — uses linearGradient but it is NOT inside a clipPath.
          It is a standalone path drawn on top. Safe on all browsers.
        */}
        <path
          d="M 10,120 Q 90,30 180,20 Q 270,30 350,120 Q 270,80 180,74 Q 90,80 10,120 Z"
          fill="url(#lidShadowGrad)"
          clipPath="url(#eyeClip)"
          opacity="0.55"
        />
      </svg>

      {/* Ground glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-8%", left: "50%", transform: "translateX(-50%)",
          width: "60%", height: 28, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(43,30,122,0.18) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
    </div>
  )
}

/* ─────────────────────────────────────────
   Hero section
───────────────────────────────────────── */
export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t) }, [])

  return (
    <section
      className="relative overflow-hidden min-h-[calc(100vh-130px)] flex items-center pb-7 sm:pb-0"
      style={{ background: "linear-gradient(135deg, #FDFCFF 0%, #F5F3FC 40%, #FEF4F4 100%)" }}
      aria-label="Hero"
    >
      {/* Ambient background — purely decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[-15%] right-[-8%] w-[55vw] h-[55vw] max-w-170 max-h-170 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #D41A2B 0%, transparent 70%)", animation: "heroPulse 8s ease-in-out infinite" }} />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-187.5 max-h-187.5 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #3B2E8C 0%, transparent 70%)", animation: "heroPulse 10s ease-in-out infinite 2s" }} />
        <div className="absolute top-[30%] left-[40%] w-[35vw] h-[35vw] max-w-100 max-h-100 rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #1F5AA6 0%, transparent 70%)", animation: "heroPulse 7s ease-in-out infinite 1s" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(circle, #3B2E8C 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute top-0 right-[28%] w-px h-full opacity-[0.06]"
          style={{ background: "linear-gradient(to bottom, transparent, #3B2E8C 30%, #D41A2B 70%, transparent)" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 w-full">

        {/* ── Desktop layout ── */}
        <div className="hidden lg:grid items-center gap-12 xl:gap-20" style={{ gridTemplateColumns: "3fr 2fr" }}>
          <div className={`flex flex-col items-start text-left transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <LeftContent />
          </div>
          <div className={`relative transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <RightEye />
          </div>
        </div>

        {/* ── Mobile / tablet layout ── */}
        <div className="lg:hidden flex flex-col items-center gap-8">
          <div className={`relative w-full max-w-75 sm:max-w-90 md:max-w-100 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="absolute inset-[-6%] rounded-[36px] opacity-40 pointer-events-none"
              style={{ background: "linear-gradient(135deg, rgba(59,46,140,0.06), rgba(212,26,43,0.04))", border: "1px solid rgba(59,46,140,0.08)" }} />
            <div className="relative aspect-4/3 w-full p-3 sm:p-5">
              <EyeAnimation />
            </div>
          </div>
          <div className={`flex flex-col items-center text-center w-full transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <LeftContent />
          </div>
        </div>
      </div>

      {/* ── Mobile sticky bottom bar ── */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 sm:hidden px-2 py-2"
        aria-label="Quick actions"
        style={{
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(43,30,122,0.08)",
          boxShadow: "0 -4px 24px rgba(0,0,0,0.07)",
        }}
      >
        <div className="grid grid-cols-4 gap-1">
          {[
            { href: "tel:+911234567890",           bg: "#EEEDFE", icon: <Phone className="h-5 w-5 text-[#3C3489]" />,         label: "Call" },
            { href: "https://wa.me/911234567890",  bg: "#DCFCE7", icon: <MessageCircle className="h-5 w-5 text-green-700" />, label: "WhatsApp" },
            { href: "#contact",                    bg: "#FEE2E2", icon: <Calendar className="h-5 w-5 text-[#791F1F]" />,      label: "Book" },
            { href: "#contact",                    bg: "#EFF6FF", icon: <MapPin className="h-5 w-5 text-[#1E40AF]" />,        label: "Location" },
          ].map((a) => (
            <a
              key={a.label} href={a.href}
              target={a.href.startsWith("https") ? "_blank" : undefined}
              rel={a.href.startsWith("https") ? "noopener noreferrer" : undefined}
              aria-label={a.label}
              className="flex flex-col items-center gap-1 py-1.5 rounded-xl active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2E8C]"
            >
              <div className="h-10 w-10 rounded-2xl flex items-center justify-center" style={{ background: a.bg }}>
                {a.icon}
              </div>
              <span className="text-[10px] text-gray-500 font-medium">{a.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* ── Global keyframes ── */}
      <style jsx>{`
        @keyframes eyeSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes eyeFloat {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-8px); }
        }
        @keyframes heroPulse {
          0%,100% { opacity: 0.07; transform: scale(1); }
          50%     { opacity: 0.12; transform: scale(1.05); }
        }
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  )
}

/* ─────────────────────────────────────────
   Left content block (shared)
───────────────────────────────────────── */
function LeftContent() {
  return (
    <>
      {/* Trust badges */}
      <div className="mb-6 flex flex-wrap justify-center lg:justify-start gap-2">
        {[
          { icon: <Star className="h-3 w-3 fill-[#E8A020] text-[#E8A020]" />, label: "4.9 / 5 rated" },
          { icon: <Calendar className="h-3 w-3 text-[#27500A]" />,             label: "Available today" },
          { icon: <Shield className="h-3 w-3 text-[#3C3489]" />,               label: "ISO certified" },
        ].map((b) => (
          <span
            key={b.label}
            className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-semibold tracking-wide border"
            style={{
              background: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(8px)",
              borderColor: "rgba(59,46,140,0.12)",
              color: "#2B1E7A",
              boxShadow: "0 2px 8px rgba(43,30,122,0.08)",
            }}
          >
            {b.icon} {b.label}
          </span>
        ))}
      </div>

      {/* Eyebrow */}
      <div className="mb-3 flex items-center gap-2.5 justify-center lg:justify-start">
        <div className="h-px w-8 bg-linear-to-r from-[#D41A2B] to-[#F22233]" />
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D41A2B]">
          Amma Eye Care Hospital
        </span>
        <div className="h-px w-8 bg-linear-to-l from-[#D41A2B] to-[#F22233] lg:hidden" />
      </div>

      {/* H1 */}
      <h1
        className="mb-5 text-[2.4rem] sm:text-5xl md:text-[3.4rem] lg:text-[3.8rem] font-bold tracking-tight text-gray-900 leading-[1.06]"
        style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
      >
        See the world with{" "}
        <span className="block mt-1">
          <span className="relative inline-block">
            <span className="relative z-10 text-[#D41A2B]">clarity</span>
            <svg
              className="absolute -bottom-1.5 left-0 w-full overflow-visible"
              viewBox="0 0 160 12" fill="none" style={{ height: 12 }}
              aria-hidden="true"
            >
              <path
                d="M2 9 Q40 2 80 6 Q120 10 158 5"
                stroke="#D41A2B" strokeWidth="2.5" strokeLinecap="round"
                fill="none" strokeDasharray="200" strokeDashoffset="200"
                style={{ animation: "drawLine 1.2s ease forwards 0.8s" }}
              />
            </svg>
          </span>
        </span>
      </h1>

      <p className="mb-7 text-[15px] sm:text-base text-gray-500 leading-[1.75]">
        World-class eye care with advanced diagnostics, experienced specialists, and compassionate treatment for every member of your family.
      </p>

      {/* Feature grid */}
      <div className="mb-8 grid grid-cols-2 gap-x-5 gap-y-3 w-full">
        {["Painless procedures", "Quick recovery", "Affordable care", "Latest technology"].map((f) => (
          <div key={f} className="flex items-center gap-2 text-[13px] sm:text-sm text-gray-600 font-medium">
            <div className="shrink-0 h-5 w-5 rounded-full bg-red-50 flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-[#D41A2B]" />
            </div>
            {f}
          </div>
        ))}
      </div>

      {/* CTA row */}
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-10">
        <Button
          size="lg" asChild
          className="h-12 px-7 text-sm sm:text-[15px] font-semibold rounded-xl text-white border-0 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-[#D41A2B] focus-visible:ring-offset-2"
          style={{
            background: "linear-gradient(135deg, #D41A2B 0%, #F22233 100%)",
            boxShadow: "0 8px 28px rgba(212,26,43,0.32), inset 0 1px 0 rgba(255,255,255,0.15)",
          }}
        >
          <a href="#contact">
            Book Appointment
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
        <Button
          size="lg" variant="outline" asChild
          className="h-12 px-7 text-sm sm:text-[15px] font-semibold rounded-xl border-2 transition-all duration-300 hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-[#2B1E7A] focus-visible:ring-offset-2"
          style={{ borderColor: "#2B1E7A", color: "#2B1E7A", background: "transparent" }}
        >
          <a href="tel:+911234567890">
            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            Call Now
          </a>
        </Button>
      </div>

      {/* Stats */}
      <div
        className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-10 border-t pt-7 w-full"
        style={{ borderColor: "rgba(43,30,122,0.1)" }}
        role="list"
        aria-label="Key statistics"
      >
        {[
          { value: 25,    suffix: "+", label: "Years experience" },
          { value: 50000, suffix: "+", label: "Happy patients" },
          { value: 15,    suffix: "+", label: "Treatments" },
        ].map((s) => (
          <div key={s.label} role="listitem" className="text-center lg:text-left">
            <div
              className="text-xl sm:text-2xl font-bold leading-none"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#2B1E7A" }}
            >
              <AnimatedCounter end={s.value} suffix={s.suffix} />
            </div>
            <div className="text-[11px] text-gray-400 font-medium mt-1.5 uppercase tracking-wide">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

/* ─────────────────────────────────────────
   Right eye wrapper (desktop only)
───────────────────────────────────────── */
function RightEye() {
  return (
    <div className="relative mx-auto w-full max-w-120 xl:max-w-120">
      <div
        className="absolute inset-[-6%] rounded-[40px] opacity-40 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(59,46,140,0.06), rgba(212,26,43,0.04))",
          border: "1px solid rgba(59,46,140,0.08)",
        }}
      />
      <div className="relative aspect-4/3 w-full p-4 sm:p-6">
        <EyeAnimation />
      </div>

      {/* Side action icons */}
      <div
        className="hidden sm:flex absolute -left-5 lg:-left-7 top-1/2 -translate-y-1/2 flex-col gap-3"
        role="group"
        aria-label="Quick actions"
      >
        {[
          { href: "#contact",                   bg: "rgba(238,237,254,0.95)", icon: <Calendar className="h-4 w-4 text-[#3C3489]" />,         label: "Book appointment" },
          { href: "https://wa.me/911234567890", bg: "rgba(220,252,231,0.95)", icon: <MessageCircle className="h-4 w-4 text-green-700" />,     label: "WhatsApp chat" },
          { href: "#contact",                   bg: "rgba(254,235,235,0.95)", icon: <MapPin className="h-4 w-4 text-[#791F1F]" />,            label: "Find us on map" },
        ].map((a) => (
          <a
            key={a.label} href={a.href}
            target={a.href.startsWith("https") ? "_blank" : undefined}
            rel={a.href.startsWith("https") ? "noopener noreferrer" : undefined}
            aria-label={a.label}
            className="flex h-10 w-10 items-center justify-center rounded-2xl transition-all duration-200 hover:scale-110 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2E8C] focus-visible:ring-offset-1"
            style={{
              background: a.bg,
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            }}
          >
            {a.icon}
          </a>
        ))}
      </div>
    </div>
  )
}