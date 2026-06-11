"use client"

import { useState, useRef } from "react"
import {
  Award,
  Star,
  Users,
  GraduationCap,
  CheckCircle,
  CalendarCheck,
  MapPin,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

type Doctor = {
  id: string
  imageSrc?: string
  initials: string
  panelFrom: string
  panelVia: string
  panelTo: string
  name: string
  role: string
  credentials: string
  education: string
  experience: string
  stats: { value: string; label: string; hasStar?: boolean }[]
  specializations: string[]
}

const branch = {
  id: "kokapet",
  name: "Kokapet Branch",
  address: "Kokapet Terminal, Hyderabad",
  doctors: [
    {
      id: "d1",
      imageSrc: "/rohini-doctor.webp",
      initials: "RP",
      panelFrom: "#085041",
      panelVia: "#0F6E56",
      panelTo: "#1D9E75",
      name: "Dr. Rohini Pothireddy",
      role: "Lead Surgeon & Branch Head",
      credentials: "MS Ophthalmology, DNB, FMRF",
      education: "MS Ophthalmology (Osmania), DNB, FMRF (Singapore)",
      experience: "20 years in LASIK & corneal surgeries",
      stats: [
        { value: "20+", label: "Years Exp." },
        { value: "40K+", label: "Patients" },
      ],
      specializations: [
        "LASIK & SMILE Surgery",
        "Cornea Transplant",
        "Dry Eye Treatment",
        "Cataract Surgery",
        "Keratoconus Management",
      ],
    } satisfies Doctor,
  ],
}

// ─── Doctor Card ──────────────────────────────────────────────────────────────

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article
      className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 hover:shadow-lg hover:ring-gray-200 transition-all duration-300 h-full w-full max-w-sm"
      aria-label={`${doctor.name}, ${doctor.role}`}
    >
      {/* ── Coloured top panel ── */}
      <div
        className="relative flex flex-col items-center px-6 pt-8 pb-6 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${doctor.panelFrom}, ${doctor.panelVia}, ${doctor.panelTo})`,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* Avatar */}
        <div className="relative z-10 mb-4">
          <div className="h-24 w-24 rounded-full overflow-hidden ring-4 ring-white/30 shadow-xl">
            {doctor.imageSrc ? (
              <Image
                src={doctor.imageSrc}
                alt={doctor.name}
                width={96}
                height={96}
                className="object-cover object-top w-full h-full"
                priority
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${doctor.panelFrom}, ${doctor.panelTo})`,
                }}
                role="img"
                aria-label={`${doctor.name} avatar`}
              >
                <span className="text-3xl font-bold text-white select-none">
                  {doctor.initials}
                </span>
              </div>
            )}
          </div>
          <div
            className="absolute -bottom-1 -right-1 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md ring-2 ring-black/5"
            aria-label="Verified doctor"
          >
            <CheckCircle className="h-4 w-4 text-[#3B2E8C]" aria-hidden="true" />
          </div>
        </div>

        <div className="relative z-10 text-center">
          <p className="text-base font-bold text-white leading-tight">{doctor.name}</p>
        </div>
      </div>

      {/* ── Info panel ── */}
      <div className="flex flex-col flex-1 p-5">
        <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#F22233]/10 px-3 py-1 text-[11px] font-semibold text-[#F22233] border border-[#F22233]/15">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F22233]" aria-hidden="true" />
          {doctor.role}
        </span>

        <p className="text-xs font-semibold text-[#3B2E8C] mb-3">{doctor.credentials}</p>

        <div
          className="mb-4 grid grid-cols-2 gap-2"
          role="list"
          aria-label={`${doctor.name} statistics`}
        >
          {doctor.stats.map((stat) => (
            <div
              key={stat.label}
              role="listitem"
              className="rounded-xl bg-gray-50 border border-gray-100 px-2 py-2.5 text-center"
            >
              <div className="flex items-center justify-center gap-0.5 text-sm font-bold text-gray-900 leading-none">
                {stat.value}
                {stat.hasStar && (
                  <Star className="h-3 w-3 fill-[#F2B035] text-[#F2B035]" aria-hidden="true" />
                )}
              </div>
              <p className="mt-1 text-[10px] text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-2 mb-4" role="list" aria-label="Qualifications">
          {[
            {
              Icon: GraduationCap,
              bg: "bg-[#3B2E8C]/10",
              color: "text-[#3B2E8C]",
              title: "Education",
              detail: doctor.education,
            },
            {
              Icon: Award,
              bg: "bg-[#F22233]/10",
              color: "text-[#F22233]",
              title: "Experience",
              detail: doctor.experience,
            },
          ].map((q) => (
            <div
              key={q.title}
              role="listitem"
              className="flex items-start gap-2.5 rounded-xl bg-gray-50 border border-gray-100 px-3 py-2.5 hover:border-gray-200 transition-colors group"
            >
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${q.bg} group-hover:scale-105 transition-transform mt-0.5`}
                aria-hidden="true"
              >
                <q.Icon className={`h-3.5 w-3.5 ${q.color}`} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900 leading-snug">{q.title}</p>
                <p className="text-[11px] text-gray-500 leading-snug mt-0.5">{q.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-5">
          <div className="flex items-center gap-1.5 mb-2">
            <Users className="h-3.5 w-3.5 text-[#3B2E8C]" aria-hidden="true" />
            <span className="text-xs font-semibold text-gray-900">Specializations</span>
          </div>
          <ul className="flex flex-wrap gap-1.5" aria-label={`${doctor.name} specializations`}>
            {doctor.specializations.map((skill) => (
              <li key={skill}>
                <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-700 hover:bg-[#3B2E8C]/10 hover:text-[#3B2E8C] transition-colors border border-transparent hover:border-[#3B2E8C]/15 cursor-default">
                  <CheckCircle className="h-3 w-3 text-[#F22233] shrink-0" aria-hidden="true" />
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <Button
            className="w-full bg-[#F22233] text-white hover:bg-[#d91e2c] active:scale-[0.97] shadow-md shadow-[#F22233]/20 hover:shadow-lg hover:shadow-[#F22233]/25 h-10 text-sm font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F22233] focus-visible:ring-offset-2"
            asChild
          >
            <a href="#contact" aria-label={`Book consultation with ${doctor.name}`}>
              <CalendarCheck className="mr-2 h-4 w-4" aria-hidden="true" />
              Book Consultation
            </a>
          </Button>
        </div>
      </div>
    </article>
  )
}

// ─── Mobile Carousel ──────────────────────────────────────────────────────────

function MobileCarousel({ doctors }: { doctors: Doctor[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1))
  const next = () => setActiveIndex((i) => Math.min(doctors.length - 1, i + 1))

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const delta = touchStartX.current - touchEndX.current
    if (delta > 40) next()
    else if (delta < -40) prev()
  }

  return (
    <div
      className="relative"
      role="region"
      aria-label="Doctors carousel"
      aria-roledescription="carousel"
    >
      <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out will-change-transform"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          aria-live="polite"
        >
          {doctors.map((doctor, i) => (
            <div
              key={doctor.id}
              className="w-full shrink-0 flex justify-center"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${doctors.length}: ${doctor.name}`}
              aria-hidden={i !== activeIndex}
            >
              <DoctorCard doctor={doctor} />
            </div>
          ))}
        </div>
      </div>

      {doctors.length > 1 && (
        <>
          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              aria-label="Previous doctor"
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-gray-500 transition-all hover:border-[#3B2E8C] hover:text-[#3B2E8C] disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2E8C] focus-visible:ring-offset-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Select doctor slide">
              {doctors.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2E8C] focus-visible:ring-offset-2 ${
                    i === activeIndex
                      ? "w-6 h-2.5 bg-[#3B2E8C]"
                      : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={activeIndex === doctors.length - 1}
              aria-label="Next doctor"
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-gray-500 transition-all hover:border-[#3B2E8C] hover:text-[#3B2E8C] disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2E8C] focus-visible:ring-offset-2"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-2 text-center text-[11px] text-gray-400 select-none" aria-hidden="true">
            Swipe to see more doctors
          </p>
        </>
      )}
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function DoctorsSection() {
  return (
    <section
      id="doctor"
      className="relative bg-linear-to-b from-gray-50 to-white py-10 sm:py-14 md:py-20 overflow-hidden"
      aria-labelledby="doctor-heading"
    >
      {/* Bg orbs */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#3B2E8C]/5 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#F22233]/5 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-8 sm:mb-10 max-w-xl text-center">
          <span className="inline-flex items-center gap-1.5 mb-3 px-3.5 py-1 rounded-full bg-[#3B2E8C]/10 text-[#3B2E8C] text-xs font-semibold border border-[#3B2E8C]/15">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3B2E8C] animate-pulse" aria-hidden="true" />
            Meet The Experts
          </span>
          <h2
            id="doctor-heading"
            className="mb-2 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900"
          >
            Our <span className="text-[#F22233]">Doctors</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            Experienced specialists dedicated to your perfect vision.
          </p>
        </div>

        {/* Branch info bar */}
        <div className="mb-6 flex items-center justify-between gap-3 rounded-xl bg-[#3B2E8C]/5 border border-[#3B2E8C]/10 px-4 py-2.5">
          <div className="flex items-center gap-2 min-w-0">
            <MapPin className="h-3.5 w-3.5 text-[#3B2E8C] shrink-0" aria-hidden="true" />
            <span className="text-xs font-semibold text-[#3B2E8C] truncate">{branch.name}</span>
            <span className="text-xs text-gray-500 hidden sm:inline">— {branch.address}</span>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-[#3B2E8C]/10 px-2.5 py-1 text-[11px] font-semibold text-[#3B2E8C]">
            <Users className="h-3 w-3" aria-hidden="true" />
            {branch.doctors.length} doctor{branch.doctors.length > 1 ? "s" : ""}
          </span>
        </div>

        {/* Cards */}
        <div role="region" aria-label="Our doctors">
          {/* Mobile: carousel */}
          <div className="md:hidden">
            <MobileCarousel doctors={branch.doctors} />
          </div>

          {/* Desktop: centered flex-wrap (1 card → centered; 2+ → side by side; 3+ → wraps) */}
          <div className="hidden md:flex md:flex-wrap justify-center gap-5 lg:gap-6">
            {branch.doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}