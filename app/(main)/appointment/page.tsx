"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, CheckCircle, Upload, Shield, Phone, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const services = [
  "General Eye Checkup",
  "Computerized Eye Testing",
  "Eye Pressure Test",
  "Customized Cataract Surgeries",
  "LASIK – Freedom from Glasses & Contact Lens",
  "ICL – For those who are not suitable for LASIK",
  "Cornea and Anterior Segment Services",
  "Advanced Refractive Procedures",
  "Myopia Management",
  "Children's Eye Checkup",
  "Gadget Vision Syndrome",
  "Scleral Lenses",
  "Orthokeratology",
  "Low Vision Devices",
  "Glaucoma Services",
  "Oculoplasty",
  "Visual Fields Testing",
  "YAG Laser",
  "OCT (Retina Scan)",
  "Diabetic & Hypertension Retinopathy Screening",
  "Thyroid Eye Screening",
  "Contact Lenses – Soft & RGP Lenses",
  "Digital Eye Strain Treatment",
  "Refractive Cornea Collagen Cross-Linking",
  "Squint Treatment",
]

export default function AppointmentPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    toast({
      title: "Appointment Requested",
      description: "We'll confirm your appointment within 24 hours via phone or email.",
    })
  }

  if (isSubmitted) {
    return (
      <div className="flex-1 flex items-center justify-center py-20">
        <Card className="max-w-lg mx-4">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-3">Appointment Request Received!</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Thank you for choosing Amma Eye Care. Our team will contact you within 24 hours to confirm your
              appointment details.
            </p>
            <div className="space-y-3">
              <Link
                href="/"
                className="w-full inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
              >
                Return to Home
              </Link>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="w-full inline-flex items-center justify-center rounded-lg border border-border bg-transparent px-6 py-3 font-semibold hover:bg-muted transition-colors"
              >
                Book Another Appointment
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="page-header">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-8 w-8" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Book an Appointment</h1>
          </div>
          <p>
            Schedule your visit with our expert ophthalmologists. Fill out the form below and we&apos;ll confirm your
            appointment within 24 hours.
          </p>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Appointment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Personal Information</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">
                          First Name <span className="text-destructive">*</span>
                        </Label>
                        <Input id="firstName" required placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">
                          Last Name <span className="text-destructive">*</span>
                        </Label>
                        <Input id="lastName" required placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          Phone Number <span className="text-destructive">*</span>
                        </Label>
                        <Input id="phone" type="tel" required placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age">
                        Age <span className="text-destructive">*</span>
                      </Label>
                      <Input id="age" type="number" required placeholder="Enter your age" className="max-w-xs" />
                    </div>
                  </div>

                  {/* Appointment Information */}
                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="font-semibold text-lg">Appointment Information</h3>

                    <div className="space-y-2">
                      <Label htmlFor="service">
                        Select Service <span className="text-destructive">*</span>
                      </Label>
                      <select
                        id="service"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Choose a service...</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">
                          Preferred Date <span className="text-destructive">*</span>
                        </Label>
                        <Input id="preferredDate" type="date" required min={new Date().toISOString().split("T")[0]} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">Preferred Time</Label>
                        <select
                          id="preferredTime"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Any time</option>
                          <option value="morning">Morning (9 AM - 12 PM)</option>
                          <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                          <option value="evening">Evening (3 PM - 6 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="symptoms">Symptoms or Concerns</Label>
                      <Textarea
                        id="symptoms"
                        placeholder="Please describe any symptoms or concerns you'd like to discuss..."
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Insurance & Reports */}
                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="font-semibold text-lg">Insurance & Medical Reports</h3>

                    <div className="space-y-2">
                      <Label htmlFor="insurance">Insurance Provider (if applicable)</Label>
                      <Input id="insurance" placeholder="Enter your insurance provider name" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reports">Upload Reports (OCT, Prescriptions, Scans)</Label>
                      <div className="flex items-center gap-3">
                        <Input
                          id="reports"
                          type="file"
                          multiple
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                          className="cursor-pointer"
                        />
                        <Upload className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      </div>
                      {files.length > 0 && (
                        <div className="text-sm text-muted-foreground">
                          {files.length} file(s) selected: {files.map((f) => f.name).join(", ")}
                        </div>
                      )}
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 w-full md:w-auto"
                  >
                    {isSubmitting ? "Submitting..." : "Request Appointment"}
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Insurance Card */}
              <Card className="bg-accent/10 border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Shield className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Insurance Accepted</h3>
                      <p className="text-sm text-muted-foreground">Cashless facility available with major providers</p>
                    </div>
                  </div>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>TPA & Third-party claims</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Mediclaim policies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Corporate insurance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold flex-shrink-0">
                      1
                    </div>
                    <p>Submit your appointment request with preferred date and time</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold flex-shrink-0">
                      2
                    </div>
                    <p>Our team will confirm within 24 hours via phone or email</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold flex-shrink-0">
                      3
                    </div>
                    <p>Visit our hospital at the scheduled time with your ID and insurance card</p>
                  </div>
                </CardContent>
              </Card>

              {/* Working Hours */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Working Hours</h4>
                      <p className="text-sm text-muted-foreground">
                        Monday - Saturday<br />
                        9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Need Urgent Care?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    For urgent eye emergencies, please call us directly.
                  </p>
                  <a 
                    href="tel:+919246446244"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-4 py-2.5 font-medium hover:bg-muted transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +91 92464 46244
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacing for mobile CTA */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  )
}
