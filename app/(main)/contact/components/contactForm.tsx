"use client"

import React, { useState } from "react"
import { Send, Clock, Sun, Sunset, User, Mail, Phone, Calendar, MessageSquare, FileText, CheckCircle2, ArrowRight } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  appointmentDate: string
  appointmentTime: string
  message: string
}

const UNAVAILABLE: string[] = [] // populate from API: ["09:30","11:00"]

function generateSlots(startH: number, endH: number, stepMins: number): string[] {
  const slots: string[] = []
  for (let h = startH; h < endH; h++) {
    for (let m = 0; m < 60; m += stepMins) {
      slots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`)
    }
  }
  return slots
}

function to12h(val: string): string {
  const [h, m] = val.split(":").map(Number)
  const period = h >= 12 ? "PM" : "AM"
  const h12 = h % 12 === 0 ? 12 : h % 12
  return `${h12}:${String(m).padStart(2, "0")} ${period}`
}

const MORNING_SLOTS = generateSlots(9, 13, 30)
const AFTERNOON_SLOTS = generateSlots(13, 18, 30)

function SlotColumn({
  label,
  icon,
  slots,
  selected,
  onSelect,
}: {
  label: string
  icon: React.ReactNode
  slots: string[]
  selected: string | null
  onSelect: (val: string) => void
}) {
  return (
    <div>
      <div className="mb-2.5 flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.06em] text-[#7a93b3]">
        {icon}
        {label}
      </div>
      <div
        className="flex max-h-[192px] flex-col gap-1.5 overflow-y-auto pr-0.5"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#d4dff0 transparent" }}
        role="listbox"
        aria-label={`${label} appointment slots`}
      >
        {slots.map((slot) => {
          const isUnavailable = UNAVAILABLE.includes(slot)
          const isSelected = selected === slot
          return (
            <button
              key={slot}
              type="button"
              role="option"
              aria-selected={isSelected}
              aria-disabled={isUnavailable}
              disabled={isUnavailable}
              onClick={() => !isUnavailable && onSelect(slot)}
              className={[
                "rounded-[9px] border px-3 py-[7px] text-left text-[13px] transition-all duration-150",
                isSelected
                  ? "border-[#185fa5] bg-[#e6f1fb] font-semibold text-[#0c447c] shadow-[0_0_0_3px_rgba(24,95,165,0.08)]"
                  : isUnavailable
                  ? "cursor-not-allowed border-[#edf1f7] bg-[#f9fafb] text-[#c0ccd8] line-through"
                  : "border-[#dce6f2] bg-white text-[#2a3f6f] hover:border-[#85b7eb] hover:bg-[#f0f7ff] hover:-translate-y-px",
              ].join(" ")}
            >
              {to12h(slot)}
              {isUnavailable && (
                <span className="ml-2 text-[10px] font-medium text-[#c0ccd8]">booked</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function AppointmentTimePicker({
  value,
  onChange,
  name = "appointmentTime",
  required = true,
}: {
  value: string | null
  onChange: (val: string | null) => void
  name?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-3 rounded-xl border border-[#dce6f2] bg-[#f8fbff] p-3">
        <SlotColumn
          label="Morning"
          icon={<Sun className="h-3 w-3 text-[#854f0b]" aria-hidden="true" />}
          slots={MORNING_SLOTS}
          selected={value}
          onSelect={onChange}
        />
        <div className="w-px self-stretch bg-[#dce6f2]" aria-hidden="true" />
        <SlotColumn
          label="Afternoon"
          icon={<Sunset className="h-3 w-3 text-[#185fa5]" aria-hidden="true" />}
          slots={AFTERNOON_SLOTS}
          selected={value}
          onSelect={onChange}
        />
      </div>

      <div
        aria-live="polite"
        aria-atomic="true"
        className={[
          "flex min-h-[40px] items-center gap-2.5 rounded-[10px] border px-3.5 py-2 text-[13px] transition-all duration-200",
          value
            ? "border-[#185fa5] bg-[#e6f1fb] text-[#0c447c]"
            : "border-[#dce6f2] bg-[#f8fbff] text-[#a0b0c8]",
        ].join(" ")}
      >
        <Clock
          className={`h-3.5 w-3.5 flex-shrink-0 ${value ? "text-[#185fa5]" : "text-[#c0ccd8]"}`}
          aria-hidden="true"
        />
        <span className="flex-1 font-medium">
          {value ? `${to12h(value)} — slot confirmed` : "Select a time slot above"}
        </span>
        {value && (
          <button
            type="button"
            onClick={() => onChange(null)}
            aria-label="Clear selected time"
            className="rounded-md px-1.5 py-0.5 text-[11px] font-medium text-[#526b8c] hover:bg-[#d4dff0] hover:text-[#0c447c] transition-colors"
          >
            Clear
          </button>
        )}
      </div>

      <input
        type="hidden"
        id="appointmentTime"
        name={name}
        value={value ?? ""}
        required={required}
        aria-hidden="true"
      />
    </div>
  )
}

function FieldGroup({
  id,
  label,
  required,
  icon,
  children,
}: {
  id: string
  label: string
  required?: boolean
  icon?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.06em] text-[#2a4972]"
      >
        {icon && <span aria-hidden="true">{icon}</span>}
        {label}
        {required && <span className="text-[#a32d2d]" aria-label="required">*</span>}
      </label>
      {children}
    </div>
  )
}

function FormInput({
  id,
  name,
  type,
  placeholder,
  required,
  autoComplete,
  onChange,
}: {
  id: string
  name: string
  type: string
  placeholder?: string
  required?: boolean
  autoComplete?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      onChange={onChange}
      className="h-10 w-full rounded-[10px] border border-[#dce6f2] bg-white px-3.5 text-[13.5px] text-[#1a2f5a] placeholder:text-[#b0bfd4] transition-all duration-150 hover:border-[#85b7eb] focus:border-[#185fa5] focus:outline-none focus:ring-[3px] focus:ring-[rgba(24,95,165,0.1)]"
    />
  )
}

const STEPS = ["Personal", "Schedule", "Message"]

function StepBar({ active }: { active: number }) {
  return (
    <div className="flex items-center gap-0 px-6 pb-5 pt-1" aria-label="Form progress" role="list">
      {STEPS.map((s, i) => (
        <React.Fragment key={s}>
          <div
            role="listitem"
            aria-current={i === active ? "step" : undefined}
            className="flex flex-col items-center gap-1"
          >
            <div
              className={[
                "flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-200",
                i < active
                  ? "bg-[#1d9e75] text-white"
                  : i === active
                  ? "bg-[#1e3a8a] text-white shadow-[0_0_0_3px_rgba(30,58,138,0.15)]"
                  : "border border-[#dce6f2] bg-white text-[#a0b0c8]",
              ].join(" ")}
              aria-hidden="true"
            >
              {i < active ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            <span
              className={[
                "text-[10.5px] font-semibold tracking-wide",
                i === active ? "text-[#1e3a8a]" : i < active ? "text-[#1d9e75]" : "text-[#b0bfd4]",
              ].join(" ")}
            >
              {s}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div
              aria-hidden="true"
              className="mb-4 mx-2 h-px flex-1 transition-colors duration-300"
              style={{ background: i < active ? "#1d9e75" : "#dce6f2" }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

function SuccessScreen({ onBackHome }: { onBackHome: () => void }) {
  return (
    <div className="flex min-h-[420px] items-center justify-center px-4 py-10 sm:px-6">
      <div className="w-full max-w-xl rounded-3xl border border-[#dce6f2] bg-white p-6 text-center shadow-sm sm:p-8">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf8f1]">
          <CheckCircle2 className="h-8 w-8 text-[#1d9e75]" />
        </div>

        <h3 className="text-2xl font-bold text-[#0c2a5e] sm:text-3xl">Thank you!</h3>
        <p className="mx-auto mt-3 max-w-md text-[14px] leading-6 text-[#526b8c] sm:text-[15px]">
          Your appointment request has been submitted successfully. We&apos;ll review the details and confirm shortly.
        </p>

        <div className="mt-6 rounded-2xl border border-[#dce6f2] bg-[#f8fbff] p-4 text-left">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#7a93b3]">What happens next</p>
          <ul className="mt-3 space-y-2 text-[13px] text-[#2a3f6f]">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#1d9e75]" />
              We will contact you using your submitted email or phone number.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#1d9e75]" />
              Your selected time slot has been recorded for review.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#1d9e75]" />
              Please keep your phone available for confirmation.
            </li>
          </ul>
        </div>

        <button
          type="button"
          onClick={onBackHome}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#1e3a8a] px-6 py-3 text-[14px] font-semibold text-white transition-all hover:bg-[#185fa5] hover:-translate-y-px active:scale-[0.98] sm:w-auto"
        >
          Back to Home
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default function ContactForm({
  onSubmit,
  isSubmitting,
}: {
  onSubmit: (data: FormData) => Promise<void> | void
  isSubmitting: boolean
}) {
  const [step, setStep] = useState(0)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    appointmentDate: "",
    message: "",
  })

  const handleNativeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    await onSubmit({
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      appointmentDate: formData.get("appointmentDate") as string,
      appointmentTime: selectedTime ?? "",
      message: formData.get("message") as string,
    })
    setStep(3)
  }

  const canAdvanceStep0 = !!fields.firstName && !!fields.lastName && !!fields.email && !!fields.phone
  const canAdvanceStep1 = !!fields.appointmentDate && !!selectedTime

  const handleBackHome = () => {
    window.location.href = "/"
  }

  return (
    <div className="lg:col-span-2">
      <div className="overflow-hidden rounded-2xl border border-[#dce6f2] bg-white shadow-sm">
        <div
          className="px-6 pt-6"
          style={{ background: "linear-gradient(135deg,#f0f7ff 0%,#e6f1fb 100%)" }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#1e3a8a]">
              <FileText className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-[15px] font-bold text-[#0c2a5e]">Book Appointment</h2>
              <p className="text-[12px] text-[#526b8c]">Fill in your details and we&apos;ll confirm shortly</p>
            </div>
          </div>

          <StepBar active={step} />
        </div>

        <div className="p-6">
  {step === 3 ? (
    <SuccessScreen onBackHome={handleBackHome} />
  ) : (
    <form onSubmit={handleSubmit} aria-label="Appointment booking form" noValidate>

      {/* ── Step 0 ── */}
      {step === 0 && (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-2 duration-200">
          <div className="grid gap-4 sm:grid-cols-2">
            <FieldGroup id="firstName" label="First name" required icon={<User className="h-3 w-3 text-[#2a4972]" />}>
              <FormInput id="firstName" name="firstName" type="text" placeholder="Ravi" required autoComplete="given-name" onChange={handleNativeChange} />
            </FieldGroup>

            <FieldGroup id="lastName" label="Last name" required icon={<User className="h-3 w-3 text-[#2a4972]" />}>
              <FormInput id="lastName" name="lastName" type="text" placeholder="Kumar" required autoComplete="family-name" onChange={handleNativeChange} />
            </FieldGroup>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <FieldGroup id="email" label="Email" required icon={<Mail className="h-3 w-3 text-[#2a4972]" />}>
              <FormInput id="email" name="email" type="email" placeholder="ravi@example.com" required autoComplete="email" onChange={handleNativeChange} />
            </FieldGroup>

            <FieldGroup id="phone" label="Phone" required icon={<Phone className="h-3 w-3 text-[#2a4972]" />}>
              <FormInput id="phone" name="phone" type="tel" placeholder="+91 98765 43210" required autoComplete="tel" onChange={handleNativeChange} />
            </FieldGroup>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              disabled={!canAdvanceStep0}
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#1e3a8a] px-6 py-2.5 text-[13.5px] font-semibold text-white transition-all hover:bg-[#185fa5] disabled:opacity-40 cursor-pointer"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* ── Step 1 ── */}
      {step === 1 && (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-2 duration-200">
          <FieldGroup id="appointmentDate" label="Appointment date" required icon={<Calendar className="h-3 w-3 text-[#7a93b3]" />}>
            <FormInput id="appointmentDate" name="appointmentDate" type="date" required onChange={handleNativeChange} />
          </FieldGroup>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5 text-[11.5px] font-semibold uppercase text-[#2a4972]">
              <Clock className="h-3 w-3" />
              Appointment time *
            </div>

            <AppointmentTimePicker
              value={selectedTime}
              onChange={setSelectedTime}
              name="appointmentTime"
              required
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setStep(0)} className="border px-5 py-2.5 rounded-[10px]">
              Back
            </button>

            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={!canAdvanceStep1}
              className="bg-[#1e3a8a] text-white px-6 py-2.5 rounded-[10px] disabled:opacity-40 cursor-pointer"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* ── Step 2 ── */}
      {step === 2 && (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-2 duration-200">

          <div className="rounded-xl border border-[#dce6f2] bg-[#f8fbff] p-4">
            <p className="mb-2 text-xs font-semibold text-[#7a93b3]">Appointment summary</p>
            <div className="grid gap-2 text-sm">
              <span>Date: {fields.appointmentDate || "—"}</span>
              <span>Time: {selectedTime ? to12h(selectedTime) : "—"}</span>
              <span>Name: {fields.firstName} {fields.lastName}</span>
              <span>Phone: {fields.phone}</span>
            </div>
          </div>

          <FieldGroup id="message" label="Message" required icon={<MessageSquare className="h-3 w-3 text-[#7a93b3]" />}>
            <textarea
              name="message"
              required
              onChange={handleNativeChange}
              className="w-full border p-3 rounded-[10px]"
            />
          </FieldGroup>

          <input type="hidden" name="firstName" value={fields.firstName} />
          <input type="hidden" name="lastName" value={fields.lastName} />
          <input type="hidden" name="email" value={fields.email} />
          <input type="hidden" name="phone" value={fields.phone} />
          <input type="hidden" name="appointmentDate" value={fields.appointmentDate} />
          <input type="hidden" name="appointmentTime" value={selectedTime ?? ""} />

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setStep(1)} className="border px-5 py-2.5 rounded-[10px]">
              Back
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#1e3a8a] text-white px-6 py-2.5 rounded-[10px] cursor-pointer"
            >
              {isSubmitting ? "Submitting..." : "Book Appointment"}
            </button>
          </div>
        </div>
      )}

    </form>
  )}
</div>
      </div>
    </div>
  )
}