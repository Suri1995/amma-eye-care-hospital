"use client"

import Image from "next/image"
import { useState } from "react"
import { CalendarDays, CheckCircle2 } from "lucide-react"
import { DOCTORS } from "@/lib/doctors-detailed-data"

const LOCATIONS = [
  { value: "Kokapet", label: "Kokapet" },
  { value: "LB Nagar", label: "LB Nagar" },
] as const

// TODO: swap in your real service list — this is a placeholder set.
const SERVICES = [
  "Comprehensive Eye Checkup",
  "Cataract Surgery",
  "LASIK & Refractive Surgery",
  "Retina Care",
  "Glaucoma Treatment",
  "Pediatric Eye Care",
  "Cornea & Contact Lens",
  "Oculoplasty & Cosmetic",
]

function HeroAppointmentForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitting, setSubmitting] = useState(false)
  const todayStr = new Date().toISOString().slice(0, 10)

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    const values = new FormData(event.currentTarget)
    const fullName = String(values.get("name") ?? "").trim()
    const [firstName, ...rest] = fullName.split(" ")
    const lastName = rest.join(" ")
    const service = values.get("service")
    const doctor = values.get("doctor")
    const location = values.get("location")

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName || fullName,
          lastName,
          phone: values.get("phone"),
          email: values.get("email"),
          appointmentDate: values.get("appointmentDate"),
          appointmentTime: "To be scheduled",
          location: location || "Not specified",
          message: `Website hero enquiry. Service interested: ${service || "Not specified"}. Preferred doctor: ${doctor || "No preference"}.`,
        }),
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error("Submission failed")
      setStatus("success")
      event.currentTarget.reset()
    } catch {
      setStatus("error")
    } finally {
      setSubmitting(false)
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-emerald-50 px-6 py-10 text-center text-emerald-900">
        <CheckCircle2 className="size-10 text-emerald-600" aria-hidden="true" />
        <h3 className="text-lg font-bold">Request received</h3>
        <p className="text-sm leading-6 text-emerald-800">
          Thank you! Our care team will call you shortly to confirm your appointment.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 rounded-xl bg-[#253f92] px-5 py-2.5 text-sm font-semibold text-white"
        >
          Book another appointment
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3.5">
      <input
        required
        name="name"
        placeholder="Enter Your Name*"
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#3B2E8C] focus:outline-none focus:ring-2 focus:ring-[#3B2E8C]/15"
      />
      <input
        required
        name="phone"
        type="tel"
        inputMode="tel"
        placeholder="Enter Mobile Number*"
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#3B2E8C] focus:outline-none focus:ring-2 focus:ring-[#3B2E8C]/15"
      />
      <input
        required
        name="email"
        type="email"
        placeholder="Enter Your Email*"
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#3B2E8C] focus:outline-none focus:ring-2 focus:ring-[#3B2E8C]/15"
      />
      <div className="relative">
        <input
          name="appointmentDate"
          type="date"
          min={todayStr}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 focus:border-[#3B2E8C] focus:outline-none focus:ring-2 focus:ring-[#3B2E8C]/15"
        />
        <CalendarDays
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-slate-400"
        />
      </div>
      <select
        required
        name="location"
        defaultValue=""
        className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 focus:border-[#3B2E8C] focus:outline-none focus:ring-2 focus:ring-[#3B2E8C]/15"
      >
        <option value="" disabled>
          Select Location
        </option>
        {LOCATIONS.map((loc) => (
          <option key={loc.value} value={loc.value}>
            {loc.label}
          </option>
        ))}
      </select>
      <select
        name="service"
        defaultValue=""
        className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 focus:border-[#3B2E8C] focus:outline-none focus:ring-2 focus:ring-[#3B2E8C]/15"
      >
        <option value="" disabled>
          Choose Service
        </option>
        {SERVICES.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>
      <select
        name="doctor"
        defaultValue=""
        className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 focus:border-[#3B2E8C] focus:outline-none focus:ring-2 focus:ring-[#3B2E8C]/15"
      >
        <option value="" disabled>
          Choose Doctor
        </option>
        <option value="No preference">No preference</option>
        {DOCTORS.map((doctor) => (
          <option key={doctor.slug} value={doctor.name}>
            {doctor.name}
          </option>
        ))}
      </select>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Unable to submit right now. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-1 h-12 w-full rounded-xl bg-[#EC1876] text-sm font-bold text-white shadow-lg shadow-[#EC1876]/25 transition-all hover:bg-[#d5106a] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Sending…" : "Submit"}
      </button>
    </form>
  )
}

function AppointmentFormCard() {
  return (
    <div className="flex h-full flex-col rounded-3xl border-t-4 border-[#1CA7E0] bg-white p-6 shadow-2xl shadow-slate-900/10 sm:p-7">
      <h2 className="shrink-0 text-xl font-black text-slate-900 sm:text-2xl">
        Book <span className="text-primary">Appointment</span>
      </h2>
      <div className="mt-3 min-h-0 flex-1 overflow-y-auto md:pr-1">
        <HeroAppointmentForm />
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section role="region" aria-label="Amma Eye Care — book an appointment" className="relative w-full">
      {/*
        ── Mobile (< 768px) ──
        Container is locked to the photo's real 9:16 ratio, so the full
        portrait (hallway, all four doctors, feet included) always renders
        with ZERO cropping — no min-h guess that can clip the image.
        The heading lives in the clear band above the doctors' heads
        (roughly the top third of the photo), never over their faces.
      */}
      <div className="relative w-full md:hidden" style={{ aspectRatio: "9 / 16" }}>
        <Image
          src="/hero-image-mobile.webp"
          alt="Doctors and staff at Amma Eye Care Hospital"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* <div className="absolute inset-x-0 top-[7%] z-10 px-6 text-center">
          <h1
            id="hero-heading-mobile"
            className="text-[24px] font-bold leading-[36px] text-primary"
          >
            Amma Eye Care 25+ Years of Expertise. 1 Lakh+ Successful Surgeries.
          </h1>
        </div> */}
      </div>

      {/*
        ═══ Book appointment form — mobile only ═══
        A separate block below the image, pulled up with a negative margin
        so it overlaps the bottom whitespace of the photo — matching the
        wireframe where the form box breaks out past the image's bottom edge.
      */}
      <div className="relative z-10 -mt-60 px-4 sm:px-6 md:hidden">
        <div className="mx-auto w-full max-w-xl">
          <AppointmentFormCard />
        </div>
      </div>

      {/*
        ── Tablet/Desktop (>= 768px) ──
        Same idea: container is locked to the photo's real 16:9 ratio so
        nothing is cropped. In this photo the doctors stand on the left
        two-thirds of the frame with clear ceiling/hallway space above
        their heads and clear floor space to the right of them — so the
        heading sits in that top band (not vertically centered, which is
        what was overlapping their faces before) and the form sits in the
        clear space on the right, vertically centered.
      */}
      <div className="relative hidden w-full md:block" style={{ aspectRatio: "16 / 7" }}>
        <Image
          src="/hero-image-desktop.webp"
          alt="Doctors and staff at Amma Eye Care Hospital"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* <div className="absolute inset-x-0 top-[9%] z-10 px-8 lg:px-16">
          <h1
            id="hero-heading-desktop"
            className="max-w-xl text-[48px] font-bold leading-[52px] text-primary"
          >
            Amma Eye Care — 25+ Years of Expertise. 1 Lakh+ Successful Surgeries.
          </h1>
        </div> */}

        {/*
          768–1279px (md and lg, before xl): the form's natural height is
          taller than the hero image at these widths, so it used to spill
          out past the section — overlapping the header above at 1024px,
          and "Meet the experts" below. It's capped to a share of the
          image's own height (a definite value thanks to the aspect-ratio
          box above) and scrolls internally instead, the whole way through
          lg.
          1280px+ (xl): there's enough vertical room, so the cap is lifted
          and the card renders at its natural height again, no scroll —
          matching how it already looks correct at 1440px.
        */}
        <div className="absolute right-8 top-1/2 z-10 max-w-md -translate-y-1/2 md:h-[85%] md:w-[300px] lg:right-16 lg:h-[85%] lg:w-[370px] xl:h-auto xl:max-h-none xl:w-[430px]">
          <AppointmentFormCard />
        </div>
      </div>
    </section>
  )
}