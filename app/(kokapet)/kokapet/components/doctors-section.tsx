"use client"

import { useState } from "react"
import Image from "next/image"
import { CalendarCheck, CheckCircle2, GraduationCap, MapPin, Phone, X } from "lucide-react"
import { DOCTORS } from "@/lib/doctors-detailed-data"
import { Button } from "./ui/button"

type Doctor = (typeof DOCTORS)[number]

type LeadFormProps = {
  doctor: Doctor
  onClose: () => void
}

function AppointmentLeadForm({ doctor, onClose }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")

    const formData = new FormData(event.currentTarget)
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      appointmentDate: formData.get("appointmentDate"),
      appointmentTime: formData.get("appointmentTime"),
      location: doctor.location,
      message: `Appointment requested with ${doctor.name}. Qualification: ${doctor.qualification}.`,
    }

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error("Unable to submit")
      setStatus("success")
    } catch {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div role="dialog" aria-modal="true" aria-labelledby="appointment-dialog-title" className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 text-sm font-semibold text-[#3B2E8C]">Book an appointment</p>
            <h2 id="appointment-dialog-title" className="text-2xl font-bold text-slate-900">Meet {doctor.name}</h2>
            <p className="mt-1 text-sm text-slate-500">Our care team will call you to confirm your visit.</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close appointment form" className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"><X aria-hidden="true" /></button>
        </div>

        {status === "success" ? (
          <div className="rounded-2xl bg-emerald-50 p-6 text-center text-emerald-900">
            <CheckCircle2 className="mx-auto mb-3 size-10 text-emerald-600" aria-hidden="true" />
            <h3 className="text-lg font-bold">Request received</h3>
            <p className="mt-2 text-sm leading-6">Thank you. The hospital team will contact you shortly to confirm your appointment with {doctor.name}.</p>
            <Button type="button" onClick={onClose} className="mt-5 bg-[#3B2E8C] text-white hover:bg-[#302477]">Close</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">First name<input required name="firstName" className="rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-[#3B2E8C]" /></label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">Last name<input name="lastName" className="rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-[#3B2E8C]" /></label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">Phone<input required name="phone" type="tel" className="rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-[#3B2E8C]" /></label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">Email<input required name="email" type="email" className="rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-[#3B2E8C]" /></label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">Preferred date<input name="appointmentDate" type="date" className="rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-[#3B2E8C]" /></label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">Preferred time<input name="appointmentTime" type="time" className="rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-[#3B2E8C]" /></label>
            </div>
            <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600"><MapPin className="mr-2 inline size-4 text-[#3B2E8C]" aria-hidden="true" />{doctor.location}</div>
            {status === "error" && <p role="alert" className="text-sm text-red-600">Something went wrong. Please try again.</p>}
            <Button type="submit" disabled={isSubmitting} className="mt-2 h-12 rounded-xl bg-[#F22233] font-semibold text-white hover:bg-[#d91e2c]">{isSubmitting ? "Sending request…" : "Request appointment"}</Button>
          </form>
        )}
      </div>
    </div>
  )
}

function DoctorCard({ doctor, onBook }: { doctor: Doctor; onBook: (doctor: Doctor) => void }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 bg-[#e8ecfa]">
        <Image src={doctor.photo} alt={doctor.name} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 280px" />
        <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#3B2E8C] shadow-sm"><MapPin className="mr-1 inline size-3.5" aria-hidden="true" />{doctor.address}</div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div><h3 className="text-xl font-bold text-slate-900">{doctor.name}</h3><p className="mt-1 text-sm font-medium text-[#3B2E8C]">{doctor.designation}</p></div>
        <div className="flex items-start gap-3 text-sm text-slate-600"><GraduationCap className="mt-0.5 size-5 shrink-0 text-[#F22233]" aria-hidden="true" /><span>{doctor.qualification}</span></div>
        <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-3 text-sm font-semibold text-slate-800"><CalendarCheck className="size-5 text-[#3B2E8C]" aria-hidden="true" />{doctor.experience}</div>
        <Button type="button" onClick={() => onBook(doctor)} className="mt-auto h-11 rounded-xl bg-[#3B2E8C] text-white hover:bg-[#302477]"><Phone data-icon="inline-start" />Book Appointment</Button>
      </div>
    </article>
  )
}

export function DoctorsSection() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)

  return (
    <section id="doctor" className="bg-[#f6f8ff] px-4 py-16 sm:px-6 md:py-24" aria-labelledby="doctor-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center"><p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#F22233]">Our medical team</p><h2 id="doctor-heading" className="text-balance text-3xl font-bold text-slate-900 sm:text-4xl">Meet our expert ophthalmologists</h2><p className="mt-4 text-pretty leading-7 text-slate-600">Personalised eye care from experienced doctors across our Kokapet and L.B. Nagar hospitals.</p></div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{DOCTORS.map((doctor) => <DoctorCard key={doctor.slug} doctor={doctor} onBook={setSelectedDoctor} />)}</div>
      </div>
      {selectedDoctor && <AppointmentLeadForm doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} />}
    </section>
  )
}

export default DoctorsSection
