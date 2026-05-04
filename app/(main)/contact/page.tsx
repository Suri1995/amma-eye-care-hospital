"use client"

import type React from "react"
import type { Metadata } from "next"
import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, CheckCircle, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    toast({
      title: "Message Sent",
      description: "We'll get back to you within 24 hours.",
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
            <h2 className="text-2xl font-bold mb-3">Message Received!</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Thank you for contacting Amma Eye Care. We&apos;ll respond to your inquiry within 24 hours.
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
                Send Another Message
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
          <h1>Contact Us</h1>
          <p>Get in touch with our team. We&apos;re here to answer your questions and schedule your visit.</p>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      <Label htmlFor="email">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input id="email" type="email" required placeholder="your.email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      Subject <span className="text-destructive">*</span>
                    </Label>
                    <Input id="subject" required placeholder="What is your inquiry about?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-8 py-3 font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Location */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Visit Us</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Amma Eye Care Hospital<br />
                        Hyderabad, Telangana<br />
                        India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-sm text-muted-foreground">
                        <a href="tel:+919246446244" className="hover:text-primary transition-colors">
                          +91 92464 46244
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-sm text-muted-foreground">
                        <a href="mailto:ammaeyecarehospital@gmail.com" className="hover:text-primary transition-colors break-all">
                          ammaeyecarehospital@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Working Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        Monday - Saturday<br />
                        9:00 AM - 6:00 PM<br />
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link
                      href="/appointment"
                      className="w-full inline-flex items-center justify-center rounded-lg bg-white text-primary px-4 py-2 font-medium hover:bg-white/90 transition-colors text-sm"
                    >
                      Book Appointment
                    </Link>
                    <Link
                      href="/video-consultation"
                      className="w-full inline-flex items-center justify-center rounded-lg border border-white bg-transparent px-4 py-2 font-medium hover:bg-white/10 transition-colors text-sm"
                    >
                      Video Consultation
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <Card>
            <CardContent className="p-0 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3!2d78.4!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amma Eye Care Hospital Location"
                className="w-full"
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom spacing for mobile CTA */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  )
}
