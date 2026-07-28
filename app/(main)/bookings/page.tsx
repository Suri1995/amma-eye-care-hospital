"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import BookingsForm, { BookingFormData } from "./components/Bookingsform"
import Bookingappointmenthero from "./components/Bookingappointmenthero"

export default function BookingsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    setError(null)
    
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      
      const result = await res.json()
      
      if (!result.success) {
        throw new Error(result.error || "Submission failed")
      }
      
      // Success - redirect to thank you page
      setTimeout(() => {
        router.push("/thankyou")
      }, 1500)
      
    } catch (error) {
      console.error("Booking submission failed:", error)
      setError("Something went wrong while submitting your appointment. Please try again or call us directly at +91 98765 43210.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f8fc]">
      <Bookingappointmenthero/>
      <div className="mx-auto max-w-2xl my-10 md:my-20">
        <BookingsForm 
          onSubmit={handleSubmit} 
          isSubmitting={isSubmitting} 
          error={error}
        />
      </div>
    </main>
  )
}
