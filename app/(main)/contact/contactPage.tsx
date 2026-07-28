"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

import ContactHero from "./components/contactHero"
import ContactForm from "./components/contactForm"
import ContactInfo from "./components/contactInfo"
import ContactMap from "./components/contactMap"

export default function ContactPage() {
  const { toast } = useToast()
  const router = useRouter()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (data: {
    firstName: string
    lastName: string
    email: string
    phone: string
    appointmentDate: string
    appointmentTime: string
    message: string
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

      toast({
        title: "Appointment Booked",
        description: `Your registration ID is ${result.id}`,
      })

      // Redirect to thank you page immediately
      router.push("/thankyou")
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

  return (
    <div className="min-h-screen bg-[#f4f8fd]">
      <ContactHero />

      <div className="container max-w-7xl py-10 md:py-14">
        {/* Main 2-col grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          <ContactForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
          <ContactInfo />
        </div>

        {/* Full-width map below */}
        <ContactMap />
      </div>

      {/* Mobile bottom spacer so content clears floating nav bars */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </div>
  )
}
