import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Thank You | Amma Eye Care Hospital",
  description:
    "Thank you for contacting Amma Eye Care Hospital. We have received your inquiry and will get back to you shortly.",
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <CheckCircle className="w-24 h-24 text-primary relative" strokeWidth={1.5} />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Thank You!
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            We&apos;ve successfully received your message and appreciate you reaching out to{" "}
            <span className="font-semibold text-primary">Amma Eye Care Hospital</span>.
          </p>

          {/* Description */}
          <div className="bg-card rounded-2xl border border-border p-8 md:p-10 mb-12 shadow-sm">
            <p className="text-foreground mb-6">
              Our team is reviewing your inquiry and will get back to you as soon as possible. We typically respond within
              <span className="font-semibold"> 24 hours</span>.
            </p>
            <p className="text-muted-foreground">
              If your matter is urgent, please don&apos;t hesitate to call us directly at our contact numbers below.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Phone */}
            <div className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground mb-4">For immediate assistance</p>
              <a
                href="tel:+919876543210"
                className="inline-block text-primary font-semibold hover:underline"
              >
                +91 98765 43210
              </a>
            </div>

            {/* Email */}
            <div className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-accent/10 rounded-lg p-3">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground mb-4">We&apos;ll respond promptly</p>
              <a
                href="mailto:contact@ammaeyecarehospital.com"
                className="inline-block text-accent font-semibold hover:underline"
              >
                contact@ammaeyecarehospital.com
              </a>
            </div>
          </div>

          {/* What to Expect */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">What to Expect Next</h2>
            <div className="space-y-4">
              {[
                { number: "1", title: "Confirmation", desc: "You&apos;ll receive a confirmation email shortly" },
                { number: "2", title: "Review", desc: "Our team will review your inquiry in detail" },
                { number: "3", title: "Follow-up", desc: "We&apos;ll contact you with the next steps" },
              ].map((step) => (
                <div key={step.number} className="flex gap-4 text-left">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section - Trust Indicators */}
      <div className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</p>
              <p className="text-muted-foreground">Happy Patients</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</p>
              <p className="text-muted-foreground">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
