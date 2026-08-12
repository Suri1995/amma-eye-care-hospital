"use client"

import Image from "next/image"
import { useState } from "react"
import { CalendarDays, CheckCircle2, Clock3, MapPin, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DOCTORS } from "@/lib/doctors-detailed-data"

type Doctor = (typeof DOCTORS)[number]

function AppointmentLeadForm({ doctor, onClose }: { doctor: Doctor; onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitting, setSubmitting] = useState(false)

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
          appointmentDate: values.get("appointmentDate"),
          appointmentTime: values.get("appointmentTime"),
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div role="dialog" aria-modal="true" aria-labelledby="appointment-title" className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div><p className="text-sm font-bold uppercase tracking-[0.14em] text-[#e21d3b]">Book an appointment</p><h2 id="appointment-title" className="mt-2 text-2xl font-bold text-slate-900">Meet {doctor.name}</h2><p className="mt-1 text-sm text-slate-500">Share your details and our care team will call you.</p></div>
          <button type="button" aria-label="Close appointment form" onClick={onClose} className="rounded-full p-2 text-slate-500 hover:bg-slate-100"><X aria-hidden="true" /></button>
        </div>
        {status === "success" ? <div className="rounded-2xl bg-emerald-50 p-6 text-center text-emerald-900"><CheckCircle2 className="mx-auto mb-3 size-10 text-emerald-600" /><h3 className="text-lg font-bold">Request received</h3><p className="mt-2 text-sm leading-6">We will contact you shortly to confirm your appointment.</p><Button type="button" onClick={onClose} className="mt-5 bg-[#253f92] text-white">Close</Button></div> : <form onSubmit={submit} className="flex flex-col gap-4"><div className="grid gap-4 sm:grid-cols-2"><label className="flex flex-col gap-2 text-sm font-medium text-slate-700">First name<input required name="firstName" className="rounded-xl border border-slate-200 px-3 py-3" /></label><label className="flex flex-col gap-2 text-sm font-medium text-slate-700">Last name<input name="lastName" className="rounded-xl border border-slate-200 px-3 py-3" /></label></div><div className="grid gap-4 sm:grid-cols-2"><label className="flex flex-col gap-2 text-sm font-medium text-slate-700">Phone<input required name="phone" type="tel" className="rounded-xl border border-slate-200 px-3 py-3" /></label><label className="flex flex-col gap-2 text-sm font-medium text-slate-700">Email<input required name="email" type="email" className="rounded-xl border border-slate-200 px-3 py-3" /></label></div><div className="grid gap-4 sm:grid-cols-2"><label className="flex flex-col gap-2 text-sm font-medium text-slate-700">Preferred date<input name="appointmentDate" type="date" className="rounded-xl border border-slate-200 px-3 py-3" /></label><label className="flex flex-col gap-2 text-sm font-medium text-slate-700">Preferred time<input name="appointmentTime" type="time" className="rounded-xl border border-slate-200 px-3 py-3" /></label></div><div className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600"><MapPin className="mr-2 inline size-4 text-[#253f92]" />{doctor.location}</div>{status === "error" && <p role="alert" className="text-sm text-red-600">Unable to submit right now. Please try again.</p>}<Button disabled={submitting} className="h-12 rounded-xl bg-[#e21d3b] font-semibold text-white hover:bg-[#c91834]">{submitting ? "Sending request…" : "Request appointment"}</Button></form>}
      </div>
    </div>
  )
}

export default function MainDoctorsPortfolio() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  return <section id="doctors" aria-labelledby="doctors-heading" className="bg-[#253f92] px-4 py-16 text-white sm:px-6 md:py-20"><div className="mx-auto max-w-7xl"><div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f5c451]">Our doctors</p><h2 id="doctors-heading" className="mt-2 text-balance text-3xl font-bold sm:text-4xl">Meet the experts behind your care</h2></div><p className="max-w-xl text-pretty leading-7 text-white/80">Experienced ophthalmologists offering trusted, compassionate eye care across Amma Eye Care Hospital.</p></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{DOCTORS.map((doctor) => <article key={doctor.slug} className="overflow-hidden rounded-3xl bg-white text-slate-900 shadow-xl"><div className="relative h-64 bg-slate-100"><Image src={doctor.photo} alt={doctor.name} fill className="object-cover object-top" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /></div><div className="flex flex-col gap-3 p-5"><h3 className="text-xl font-bold">{doctor.name}</h3><p className="text-sm font-semibold text-[#253f92]">{doctor.specialization}</p><p className="text-sm leading-6 text-slate-600">{doctor.qualification}</p><div className="flex items-center gap-2 text-sm font-semibold text-slate-700"><Clock3 className="size-4 text-[#e21d3b]" />{doctor.experience}</div><div className="flex items-center gap-2 text-sm text-slate-600"><MapPin className="size-4 text-[#253f92]" />{doctor.address}</div><Button type="button" onClick={() => setSelectedDoctor(doctor)} className="mt-2 h-11 rounded-xl bg-[#e21d3b] font-semibold text-white hover:bg-[#c91834]"><CalendarDays data-icon="inline-start" />Book Appointment</Button></div></article>)}</div></div>{selectedDoctor && <AppointmentLeadForm doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} />}</section>
}
