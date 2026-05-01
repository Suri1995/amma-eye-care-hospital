import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Users, Target, ArrowRight, MapPin, Phone, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Amma Eye Care Hospital - over 25 years of dedicated eye care services with advanced technology and compassionate specialists.",
}

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Every decision we make prioritizes your comfort, safety, and visual health outcomes.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    description: "Our team maintains the highest standards through continuous education and advanced training.",
  },
  {
    icon: Users,
    title: "Compassionate Service",
    description: "We treat every patient like family, providing empathetic care throughout your journey.",
  },
  {
    icon: Target,
    title: "Innovation & Technology",
    description: "Investing in cutting-edge equipment to deliver the most effective treatments available.",
  },
]

const doctors = [
  {
    name: "Dr. Aruna Rani",
    role: "Senior Ophthalmologist & Founder",
    specialization: "Cataract & Refractive Surgery",
    experience: "25+ Years",
    image: "/doctors/dr-aruna-rani.jpg",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-header">
        <div className="container">
          <h1>About Amma Eye Care Hospital</h1>
          <p>
            Dedicated to preserving and enhancing vision through exceptional eye care, advanced technology, and compassionate service
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to make world-class eye care accessible to everyone, Amma Eye Care Hospital has
                  been serving the community for over 25 years. What started as a small clinic has grown into a
                  comprehensive eye care center equipped with the latest technology and staffed by experienced
                  specialists.
                </p>
                <p>
                  Our journey has been guided by a simple principle: every patient deserves the best possible care,
                  delivered with compassion and respect. We&apos;ve treated over 50,000 patients and performed more than
                  15,000 successful surgeries, earning the trust of families across generations.
                </p>
                <p>
                  Today, we offer a complete range of ophthalmology services, from routine eye exams to complex surgical
                  procedures, all under one roof. Our commitment to excellence and patient satisfaction remains
                  unwavering.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
              <Image
                src="/clinic.png"
                alt="Amma Eye Care Hospital interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                      <value.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Doctors */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced ophthalmologists and dedicated staff committed to your vision health
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto bg-muted">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-1">{doctor.name}</h3>
                      <p className="text-primary font-medium mb-2">{doctor.role}</p>
                      <p className="text-muted-foreground mb-4">{doctor.specialization}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="w-4 h-4 text-primary" />
                        <span>{doctor.experience} Experience</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us</h2>
            <p className="text-lg text-muted-foreground">
              Conveniently located in Hyderabad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-sm text-muted-foreground">
                  Amma Eye Care Hospital<br />
                  Hyderabad, Telangana<br />
                  India
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="tel:+919246446244" className="hover:text-primary transition-colors">
                    +91 92464 46244
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Mon - Sat: 9:00 AM - 6:00 PM<br />
                  Sunday: Closed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Difference</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of satisfied patients who trust us with their vision. Schedule your appointment today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center rounded-lg bg-white text-primary px-8 py-3 font-semibold hover:bg-white/90 transition-colors"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-3 font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bottom spacing for mobile CTA */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  )
}
