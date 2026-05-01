"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Video, CheckCircle, Upload, Clock, Smartphone, Phone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const services = [
  "General Eye Consultation",
  "Follow-up Consultation",
  "Second Opinion",
  "Cataract Surgery Consultation",
  "LASIK Consultation",
  "ICL Consultation",
  "Glaucoma Consultation",
  "Children's Eye Consultation",
  "Gadget Vision Syndrome",
  "Digital Eye Strain",
  "Contact Lenses Consultation",
  "Myopia Management",
  "Diabetic Retinopathy",
  "Refractive Surgery Options",
]

export default function VideoConsultationPage() {
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
      title: "Video Consultation Requested",
      description: "We'll send you the video call link and details within 24 hours.",
    })
  }

  if (isSubmitted) {
    return (
      <div className="flex-1 flex items-center justify-center py-20">
        <Card className="max-w-lg mx-4">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-3">Video Consultation Requested!</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Thank you for choosing Amma Eye Care. We&apos;ll send you the video call link and appointment details via
              email or SMS within 24 hours.
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
                Book Another Consultation
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
      <section className="page-header !bg-accent !text-white">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <Video className="h-8 w-8" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Video Consultation</h1>
          </div>
          <p>
            Consult with our expert ophthalmologists from the comfort of your home. Convenient, safe, and professional
            eye care advice through video call.
          </p>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Consultation Details</CardTitle>
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
                        <Label htmlFor="email">
                          Email Address <span className="text-destructive">*</span>
                        </Label>
                        <Input id="email" type="email" required placeholder="your.email@example.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age">
                        Age <span className="text-destructive">*</span>
                      </Label>
                      <Input id="age" type="number" required placeholder="Enter your age" className="max-w-xs" />
                    </div>
                  </div>

                  {/* Consultation Information */}
                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="font-semibold text-lg">Consultation Information</h3>

                    <div className="space-y-2">
                      <Label htmlFor="consultationType">
                        Consultation Type <span className="text-destructive">*</span>
                      </Label>
                      <select
                        id="consultationType"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Choose consultation type...</option>
                        <option value="first">First Consultation</option>
                        <option value="followup">Follow-up Visit</option>
                        <option value="second">Second Opinion</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">
                        Related Service <span className="text-destructive">*</span>
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
                        <Label htmlFor="preferredTime">
                          Preferred Time <span className="text-destructive">*</span>
                        </Label>
                        <select
                          id="preferredTime"
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Choose a time...</option>
                          <option value="morning">Morning (9 AM - 12 PM)</option>
                          <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                          <option value="evening">Evening (3 PM - 6 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="symptoms">
                        Symptoms or Concerns <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="symptoms"
                        required
                        placeholder="Please describe your symptoms, concerns, or questions in detail..."
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Medical History & Reports */}
                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="font-semibold text-lg">Medical History & Reports</h3>

                    <div className="space-y-2">
                      <Label htmlFor="medicalHistory">Previous Eye Treatments or Surgeries</Label>
                      <Textarea
                        id="medicalHistory"
                        placeholder="List any previous eye surgeries, treatments, or ongoing medications..."
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reports">Upload Reports (Prescriptions, OCT, Test Results)</Label>
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
                      <p className="text-xs text-muted-foreground">
                        Uploading previous reports helps our doctors provide better consultation
                      </p>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-white px-8 py-3 font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50 w-full md:w-auto"
                  >
                    <Video className="w-4 h-4" />
                    {isSubmitting ? "Submitting..." : "Request Video Consultation"}
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Benefits Card */}
              <Card className="bg-accent/10 border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Video className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Why Video Consultation?</h3>
                      <p className="text-sm text-muted-foreground">Convenient, safe, and professional care</p>
                    </div>
                  </div>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Consult from home</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>No waiting time</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Expert ophthalmologists</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Digital prescriptions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What You&apos;ll Need</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Smartphone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>A smartphone, tablet, or computer with camera and microphone</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Stable internet connection for video call</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Upload className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Any previous reports or prescriptions (optional but helpful)</p>
                  </div>
                </CardContent>
              </Card>

              {/* Process */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How It Works</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold flex-shrink-0">
                      1
                    </div>
                    <p>Submit your consultation request with details</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold flex-shrink-0">
                      2
                    </div>
                    <p>Receive video call link and instructions via email/SMS</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold flex-shrink-0">
                      3
                    </div>
                    <p>Join the call at scheduled time to consult with our specialist</p>
                  </div>
                </CardContent>
              </Card>

              {/* Prefer In-Person */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Prefer In-Person Visit?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Some conditions require in-person examination with specialized equipment.
                  </p>
                  <Link
                    href="/appointment"
                    className="w-full inline-flex items-center justify-center rounded-lg border border-border bg-transparent px-4 py-2.5 font-medium hover:bg-muted transition-colors"
                  >
                    Book In-Person Appointment
                  </Link>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Have Questions?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Call us for any queries about video consultation.
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
