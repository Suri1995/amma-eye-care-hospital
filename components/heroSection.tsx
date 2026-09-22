"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { CalendarDays, Check, ChevronDown } from "lucide-react"
import { DOCTORS } from "@/lib/doctors-detailed-data"

const LOCATIONS = [
  { value: "Kokapet", label: "Kokapet" },
  { value: "LB Nagar", label: "LB Nagar" },
] as const

// TODO: swap in your real service list — this is a placeholder set.
const SERVICES = [
  "Cataract Surgery",
  "LASIK & Refractive Surgery",
  "ICL",
  "SMILE Surgery",
  "Comprehensive Eye Checkup",
  "Retina Care",
  "Glaucoma Treatment",
  "Pediatric Eye Care",
  "Cornea & Contact Lens",
  "Oculoplasty & Cosmetic",
]

/**
 * Premium custom dropdown used for the "Choose Service" field.
 * Renders a hidden input so it plugs straight into the existing
 * FormData-based submit() logic — no changes needed there.
 */
function PremiumServiceSelect({
  name,
  placeholder,
  options,
}: {
  name: string
  placeholder: string
  options: string[]
}) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const [mounted, setMounted] = useState(false)
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  // Portals need the DOM, so only render one after mount (SSR-safe).
  useEffect(() => setMounted(true), [])

  function updateCoords() {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    setCoords({ top: rect.bottom + 8, left: rect.left, width: rect.width })
  }

  // Computed BEFORE the panel opens (not in an effect after it renders),
  // so React batches the coords + open state into one paint and the panel
  // never flashes at {0,0} before jumping into place.
  function toggleOpen() {
    if (!open) updateCoords()
    setOpen((prev) => !prev)
  }

  // Once open, keep it glued to the trigger on scroll (capture:true also
  // catches the card's internal overflow-y-auto scroll, not just the
  // window) or resize.
  useEffect(() => {
    if (!open) return
    window.addEventListener("scroll", updateCoords, true)
    window.addEventListener("resize", updateCoords)
    return () => {
      window.removeEventListener("scroll", updateCoords, true)
      window.removeEventListener("resize", updateCoords)
    }
  }, [open])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node
      if (
        containerRef.current &&
        !containerRef.current.contains(target) &&
        panelRef.current &&
        !panelRef.current.contains(target)
      ) {
        setOpen(false)
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  const panel = (
    <div
      ref={panelRef}
      role="listbox"
      style={{ position: "fixed", top: coords.top, left: coords.left, width: coords.width, zIndex: 9999 }}
      className={`origin-top overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl shadow-slate-900/20 transition-[opacity,transform] duration-200 ease-out ${
        open ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
      }`}
    >
      <ul className="max-h-64 overflow-y-auto py-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-track]:bg-transparent">
        {options.map((option) => {
          const active = option === value
          return (
            <li key={option}>
              <button
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => {
                  setValue(option)
                  setOpen(false)
                }}
                className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors duration-150 ${
                  active
                    ? "bg-gradient-to-r from-[#3B2E8C]/10 to-[#EC1876]/10 font-semibold text-[#3B2E8C]"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span className="truncate">{option}</span>
                {active && <Check aria-hidden="true" className="size-4 shrink-0 text-[#EC1876]" />}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )

  return (
    <div ref={containerRef} className="relative">
      {/* Keeps FormData.get("service") working exactly as before */}
      <input type="hidden" name={name} value={value} />

      <button
        ref={buttonRef}
        type="button"
        onClick={toggleOpen}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center justify-between rounded-xl border bg-white px-4 py-2 text-sm shadow-sm transition-all duration-200 ${
          open
            ? "border-[#3B2E8C] ring-2 ring-[#3B2E8C]/15"
            : "border-slate-200 hover:border-slate-300 hover:shadow-md"
        } ${value ? "text-slate-800" : "text-slate-400"}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown
          aria-hidden="true"
          className={`ml-2 size-4 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180 text-[#3B2E8C]" : "text-slate-400"
          }`}
        />
      </button>

      {/* Rendered into document.body so the card's overflow-y-auto and
          rounded corners can never clip the open panel. */}
      {mounted ? createPortal(panel, document.body) : null}
    </div>
  )
}

function HeroAppointmentForm() {
  const router = useRouter()
  const [status, setStatus] = useState<"idle" | "error">("idle")
  const [submitting, setSubmitting] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState("")
  const todayStr = new Date().toISOString().slice(0, 10)

  // Only show doctors who practice at the chosen branch. Before a branch
  // is picked, show everyone so the field isn't empty/confusing.
  // Note: in doctors-detailed-data, the short branch name ("Kokapet" /
  // "LB Nagar") is on `address`, not `location` (which holds the full
  // hospital address string) — filter on `address` accordingly.
  const filteredDoctors = selectedLocation
    ? DOCTORS.filter((doctor) => doctor.address === selectedLocation)
    : DOCTORS

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Capture the form element synchronously, before any `await`.
    // React nulls out event.currentTarget once the synchronous part of the
    // handler finishes, so using event.currentTarget after an `await` (as
    // this used to do for `.reset()`) throws a TypeError once the fetch
    // resolves — which was landing in the catch block and showing
    // "Unable to submit right now" even though the submission had already
    // succeeded on the server.
    const form = event.currentTarget
    setSubmitting(true)
    const values = new FormData(form)
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
      form.reset()
      setSelectedLocation("")
      // Navigate to the thank-you page, passing the appointment id along
      // so ThankYouPage can read it from searchParams and show it.
      router.push(`/thankyou?id=${encodeURIComponent(result.id ?? "")}`)
    } catch {
      setStatus("error")
      setSubmitting(false)
    }
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
        value={selectedLocation}
        onChange={(event) => setSelectedLocation(event.target.value)}
        className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 focus:border-[#3B2E8C] focus:outline-none focus:ring-2 focus:ring-[#3B2E8C]/15"
      >
        <option value="" disabled>
          Select Branch
        </option>
        {LOCATIONS.map((loc) => (
          <option key={loc.value} value={loc.value}>
            {loc.label}
          </option>
        ))}
      </select>

      {/* ── Premium custom dropdown (was a native <select>) ── */}
      <PremiumServiceSelect name="service" placeholder="Choose Service" options={SERVICES} />

      <select
        name="doctor"
        key={selectedLocation}
        defaultValue=""
        className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 focus:border-[#3B2E8C] focus:outline-none focus:ring-2 focus:ring-[#3B2E8C]/15"
      >
        <option value="" disabled>
          Choose Doctor
        </option>
        <option value="No preference">No preference</option>
        {filteredDoctors.map((doctor) => (
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