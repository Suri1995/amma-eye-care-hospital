"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import ContactForm from "../contact/components/contactForm"
import ContactHero from "../contact/components/contactHero"
import ContactSuccess from "../contact/components/contactSuccess"

export default function BookAppointmentPage() {
  const { toast } = useToast()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [appointmentId, setAppointmentId] = useState("")

  const handleSubmit = async (data: {
    firstName: string
    lastName: string
    email: string
    phone: string
    appointmentDate: string
    appointmentTime: string
    message: string
    location?: string
  }) => {
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!result.success) throw new Error("Submission failed")

      setAppointmentId(result.id)
      setIsSubmitted(true)

      toast({
        title: "Appointment Booked",
        description: `Your registration ID is ${result.id}`,
      })
    } catch {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <ContactSuccess
        appointmentId={appointmentId}
        onReset={() => {
          setIsSubmitted(false)
          setAppointmentId("")
        }}
      />
    )
  }

  return (
    <div className="min-h-screen bg-[#f4f8fd]">
      <ContactHero />

      <div className="container max-w-7xl py-10 md:py-14">
        {/* Main 2-col grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          <ContactForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>
      </div>

      {/* Mobile bottom spacer so content clears floating nav bars */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </div>
  )
}
