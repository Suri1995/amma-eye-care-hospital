"use client"

import Image from "next/image"
import { useState, useEffect } from "react" // Add useEffect to imports
import { CalendarDays, CheckCircle2, Clock3, MapPin, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DOCTORS } from "@/lib/doctors-detailed-data"

type Doctor = (typeof DOCTORS)[number]

// Branch working hours. Mon–Sat and Sunday differ per branch (see hospital's Google listing).
const BRANCH_HOURS = {
  "lb-nagar": {
    label: "LB Nagar",
    monSat: { start: "08:00", end: "20:00" },
    sun: { start: "10:00", end: "16:00" },
  },
  kokapet: {
    label: "Kokapet",
    monSat: { start: "08:00", end: "20:00" },
    sun: { start: "10:00", end: "13:00" },
  },
} as const

type BranchKey = keyof typeof BRANCH_HOURS

// Booking window is capped at 8:00 AM–7:45 PM regardless of branch, so the last slot always
// leaves the care team enough time before closing.
const BOOKING_WINDOW_START_MIN = 8 * 60 // 8:00 AM
const BOOKING_WINDOW_END_MIN = 19 * 60 + 45 // 7:45 PM
const SLOT_STEP_MIN = 15

function getBranchKey(location: string): BranchKey {
  return location.toLowerCase().includes("kokapet") ? "kokapet" : "lb-nagar"
}

function timeToMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number)
  return h * 60 + m
}

function minutesToLabel(totalMinutes: number): string {
  const h24 = Math.floor(totalMinutes / 60)
  const m = totalMinutes % 60
  const period = h24 >= 12 ? "PM" : "AM"
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12
  return `${h12}:${String(m).padStart(2, "0")} ${period}`
}

function minutesToValue(totalMinutes: number): string {
  const h = Math.floor(totalMinutes / 60)
  const m = totalMinutes % 60
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
}

/** Whether a yyyy-mm-dd date string falls on a Sunday. */
function isSunday(dateStr: string): boolean {
  // Parsed as local midnight to avoid timezone-shift off-by-one-day issues.
  return new Date(`${dateStr}T00:00:00`).getDay() === 0
}

/** Builds the bookable 15-minute time slots for a branch on a given date, capped to 8:00 AM–7:45 PM. */
function getAvailableSlots(branchKey: BranchKey, dateStr: string): { value: string; label: string }[] {
  const branch = BRANCH_HOURS[branchKey]
  const dayHours = dateStr && isSunday(dateStr) ? branch.sun : branch.monSat

  const openMin = Math.max(BOOKING_WINDOW_START_MIN, timeToMinutes(dayHours.start))
  // Last bookable slot must still fall before closing time.
  const closeMin = Math.min(BOOKING_WINDOW_END_MIN, timeToMinutes(dayHours.end) - SLOT_STEP_MIN)

  const slots: { value: string; label: string }[] = []
  for (let m = openMin; m <= closeMin; m += SLOT_STEP_MIN) {
    slots.push({ value: minutesToValue(m), label: minutesToLabel(m) })
  }
  return slots
}

function AppointmentLeadForm({ doctor, onClose }: { doctor: Doctor; onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitting, setSubmitting] = useState(false)
  const [appointmentDate, setAppointmentDate] = useState("")
  const [appointmentTime, setAppointmentTime] = useState("")

  // Prevent background scrolling when modal is open
  useEffect(() => {
    // Save the current overflow style
    const originalStyle = document.body.style.overflow

    // Disable scrolling on the body
    document.body.style.overflow = "hidden"

    // Cleanup: restore the original overflow style when component unmounts
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [])

  const branchKey = getBranchKey(doctor.location)
  const branch = BRANCH_HOURS[branchKey]
  const todayStr = new Date().toISOString().slice(0, 10)
  const slots = getAvailableSlots(branchKey, appointmentDate)

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    const values = new FormData(event.currentTarget)
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: values.get("firstName"),
          lastName: values.get("lastName"),
          phone: values.get("phone"),
          email: values.get("email"),
          appointmentDate,
          appointmentTime,
          location: doctor.location,
          message: `Appointment requested with ${doctor.name} (${doctor.qualification}).`,
        }),
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error("Submission failed")
      setStatus("success")
    } catch {
      setStatus("error")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-title"
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#e21d3b]">Book an appointment</p>
            <h2 id="appointment-title" className="mt-2 text-2xl font-bold text-slate-900">
              Meet <span className="text-primary">{doctor.name}</span>
            </h2>
            <p className="mt-1 text-sm text-slate-500">Share your details and our care team will call you.</p>
          </div>
          <button
            type="button"
            aria-label="Close appointment form"
            onClick={onClose}
            className="rounded-full p-2 text-slate-500 hover:bg-slate-100"
          >
            <X aria-hidden="true" />
          </button>
        </div>
        {status === "success" ? (
          <div className="rounded-2xl bg-emerald-50 p-6 text-center text-emerald-900">
            <CheckCircle2 className="mx-auto mb-3 size-10 text-emerald-600" />
            <h3 className="text-lg font-bold">Request received</h3>
            <p className="mt-2 text-sm leading-6">We will contact you shortly to confirm your appointment.</p>
            <Button type="button" onClick={onClose} className="mt-5 bg-[#253f92] text-white">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                First name
                <input required name="firstName" className="rounded-xl border border-slate-200 px-3 py-3" />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Last name
                <input name="lastName" className="rounded-xl border border-slate-200 px-3 py-3" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Phone
                <input required name="phone" type="tel" className="rounded-xl border border-slate-200 px-3 py-3" />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Email
                <input required name="email" type="email" className="rounded-xl border border-slate-200 px-3 py-3" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Preferred date
                <input
                  required
                  name="appointmentDate"
                  type="date"
                  min={todayStr}
                  value={appointmentDate}
                  onChange={(event) => {
                    setAppointmentDate(event.target.value)
                    setAppointmentTime("")
                  }}
                  className="rounded-xl border border-slate-200 px-3 py-3"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Preferred time
                <select
                  required
                  name="appointmentTime"
                  value={appointmentTime}
                  onChange={(event) => setAppointmentTime(event.target.value)}
                  disabled={!appointmentDate}
                  className="rounded-xl border border-slate-200 px-3 py-3 disabled:bg-slate-50 disabled:text-slate-400"
                >
                  <option value="" disabled>
                    {appointmentDate ? "Select a time" : "Pick a date first"}
                  </option>
                  {slots.map((slot) => (
                    <option key={slot.value} value={slot.value}>
                      {slot.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <p className="-mt-2 text-xs text-slate-500">Appointments run 8:00 AM–7:45 PM, in 15-minute slots.</p>
            <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
              <p className="flex items-center gap-2 font-semibold text-slate-800">
                <MapPin className="size-4 shrink-0 text-[#253f92]" aria-hidden="true" />
                {doctor.location}
              </p>
              <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 pl-6 text-xs text-slate-600">
                <dt className="font-medium text-slate-500">Mon–Sat</dt>
                <dd>
                  {minutesToLabel(timeToMinutes(branch.monSat.start))} – {minutesToLabel(timeToMinutes(branch.monSat.end))}
                </dd>
                <dt className="font-medium text-slate-500">Sunday</dt>
                <dd>
                  {minutesToLabel(timeToMinutes(branch.sun.start))} – {minutesToLabel(timeToMinutes(branch.sun.end))}
                </dd>
              </dl>
            </div>
            {status === "error" && (
              <p role="alert" className="text-sm text-red-600">
                Unable to submit right now. Please try again.
              </p>
            )}
            <Button
              disabled={submitting}
              className="h-12 rounded-xl bg-[#e21d3b] font-semibold text-white hover:bg-[#c91834]"
            >
              {submitting ? "Sending request…" : "Request appointment"}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}

function DoctorCard({ doctor, onBook }: { doctor: Doctor; onBook: (doctor: Doctor) => void }) {
  return (
    <article
      className="group relative flex h-72 flex-col overflow-hidden rounded-2xl bg-white text-slate-900 ring-1 ring-slate-900/5 transition-[transform,box-shadow] duration-300 ease-out motion-safe:hover:-translate-y-1 hover:shadow-[0_20px_45px_-15px_rgba(15,23,60,0.35)] focus-within:-translate-y-1 focus-within:shadow-[0_20px_45px_-15px_rgba(15,23,60,0.35)] sm:h-80"
      style={{ boxShadow: "0 8px 20px -10px rgba(15,23,60,0.25)" }}
    >
      {/* Slim gold accent bar signals a premium, editorial feel on hover/focus */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 h-[3px] scale-x-0 bg-[#f5c451] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-within:scale-x-100"
      />

      {/* Image area — 60% of the card height. Button lives here as a hover/focus-reveal overlay pinned to the bottom */}
      <div className="relative h-[60%] w-full shrink-0 overflow-hidden bg-slate-100">
        <Image
          src={doctor.photo}
          alt={`Portrait of ${doctor.name}, ${doctor.specialization} specialist`}
          fill
          className="object-cover object-top transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
        />

        {/* Permanent light scrim keeps text legible at the base even before hover, avoiding a jarring pop-in */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/35 to-transparent" />

        {/* Hover/focus-reveal Book Appointment button, overlaid on the bottom of the image */}
        <div className="pointer-events-auto absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black/70 via-black/20 to-transparent p-2 opacity-0 transition-all duration-200 ease-out motion-safe:translate-y-2 group-hover:opacity-100 group-focus-within:opacity-100 motion-safe:group-hover:translate-y-0 motion-safe:group-focus-within:translate-y-0">
          <Button
            type="button"
            onClick={() => onBook(doctor)}
            aria-label={`Book appointment with ${doctor.name}`}
            className="cursor-pointer h-8 w-full rounded-lg bg-[#e21d3b] text-[11px] font-semibold text-white shadow-sm transition-colors hover:bg-[#c91834] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <CalendarDays aria-hidden="true" data-icon="inline-start" className="size-3.5" />
            Book Appointment
          </Button>
        </div>
      </div>

      {/* Text area — 40% of the card height */}
      <div className="flex h-[40%] flex-col gap-1 overflow-hidden border-t border-slate-100 p-2.5">
        <h3 className="line-clamp-1 text-[13px] font-bold leading-tight tracking-tight text-slate-900">{doctor.name}</h3>
        <p className="line-clamp-2 text-[11px] font-semibold leading-snug text-[#253f92]">{doctor.specialization}</p>
        <p className="line-clamp-1 text-[11px] leading-snug text-slate-500">{doctor.qualification}</p>
        <div className="mt-auto flex items-center gap-1.5 text-[10px] font-semibold text-slate-700">
          <Clock3 aria-hidden="true" className="size-2.5 shrink-0 text-[#e21d3b]" />
          <span className="line-clamp-1">{doctor.experience}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
          <MapPin aria-hidden="true" className="size-2.5 shrink-0 text-[#253f92]" />
          <span className="line-clamp-1">{doctor.address}</span>
        </div>
      </div>
    </article>
  )
}

function DoctorGrid({ doctors, onBook }: { doctors: Doctor[]; onBook: (doctor: Doctor) => void }) {
  if (doctors.length === 0) {
    return <p className="py-10 text-center text-sm text-slate-500">No doctors found for this branch.</p>
  }

  // Single flat grid — used for "All" (every doctor together in one row) and for a
  // single-branch filter (just that branch's doctors), per the sketch.
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.slug} doctor={doctor} onBook={onBook} />
      ))}
    </div>
  )
}

// Doctors that should always lead the list, in this exact order — matched by a
// case-insensitive substring of their name so "Dr. Rohini ..." / "Dr. Omana Reddy ..." both match.
const PRIORITY_NAME_ORDER = ["rohini", "omana reddy"]

function priorityRank(doctor: Doctor): number {
  const name = doctor.name.toLowerCase()
  const index = PRIORITY_NAME_ORDER.findIndex((priorityName) => name.includes(priorityName))
  return index === -1 ? PRIORITY_NAME_ORDER.length : index
}

/** Sorts doctors so the priority names come first (in order), then everyone else keeps their original order. */
function sortWithPriorityFirst(doctors: Doctor[]): Doctor[] {
  return doctors
    .map((doctor, originalIndex) => ({ doctor, originalIndex }))
    .sort((a, b) => {
      const rankDiff = priorityRank(a.doctor) - priorityRank(b.doctor)
      return rankDiff !== 0 ? rankDiff : a.originalIndex - b.originalIndex
    })
    .map(({ doctor }) => doctor)
}

const ORDERED_DOCTORS = sortWithPriorityFirst(DOCTORS)

type BranchFilter = "all" | BranchKey

const FILTERS: { key: BranchFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "kokapet", label: "Kokapet" },
  { key: "lb-nagar", label: "LB Nagar" },
]

function FilterTabs({
  active,
  onChange,
}: {
  active: BranchFilter
  onChange: (filter: BranchFilter) => void
}) {
  return (
    <div role="tablist" aria-label="Filter doctors by branch" className="mb-10 flex flex-wrap items-center justify-center gap-2">
      {FILTERS.map((filter) => {
        const isActive = active === filter.key
        return (
          <button
            key={filter.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.key)}
            className={`cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
              isActive
                ? "bg-[#e21d3b] text-white shadow-sm"
                : "bg-white text-slate-600 ring-1 ring-slate-900/10 hover:bg-slate-50"
            }`}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}

export default function MainDoctorsPortfolio() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [activeFilter, setActiveFilter] = useState<BranchFilter>("all")
  const visibleDoctors =
    activeFilter === "all"
      ? ORDERED_DOCTORS
      : ORDERED_DOCTORS.filter((doctor) => getBranchKey(doctor.location) === activeFilter)

  return (
    <section id="doctors" aria-labelledby="doctors-heading" className="relative overflow-hidden bg-[#d9e1fc] px-4 py-16 text-white">
      {/* Decorative blobs — clipped to the section via overflow-hidden above, softened with blur so they read as ambient light rather than hard shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-white to-blue-100 opacity-70 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-emerald-100 to-white opacity-60 blur-2xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#3B2E8C]/20 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#F2B035] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F2B035] animate-pulse" aria-hidden="true" />
            Our doctors
          </div>
          <h2
            id="services-heading"
            className="text-3xl font-black tracking-tight text-primary sm:text-4xl lg:text-5xl"
          >
            Meet the experts behind your care
          </h2>
          <p className="mt-3 text-base text-black">
            Experienced ophthalmologists offering trusted, compassionate eye care across Amma Eye Care Hospital.
          </p>
        </div>

        {/* All / Kokapet / LB Nagar filter tabs */}
        <FilterTabs active={activeFilter} onChange={setActiveFilter} />

        {/* Single row of cards — "All" shows every doctor together, a branch tab narrows it down */}
        <DoctorGrid doctors={visibleDoctors} onBook={setSelectedDoctor} />
      </div>
      {selectedDoctor && <AppointmentLeadForm doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} />}
    </section>
  )
}