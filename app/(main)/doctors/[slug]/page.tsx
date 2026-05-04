import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const DOCTORS = [
  {
    slug: "dr-sai-rupa-sree-p",
    name: "Dr. Sai Rupa Sree P",
    qualification: "MBBS (Osmania, Gold Medalist), MS Ophthalmology (Osmania, Gold Medalist)",
    designation: "Consultant Ophthalmologist – Amma Eye Care Hospital, L.B.Nagar",
    specialization: "Cataract and Refractive Surgery",
    experience: "7+ Years in Clinical Ophthalmology",
    treatments: [
      "Cataract Surgery",
      "Medical Retina",
      "Glaucoma Care",
      "Paediatric Eye Care",
      "Refractive Surgery",
      "General Eye Check-ups"
    ],
    languages: "English, Telugu, Hindi",
    consultation: "Monday to Saturday",
    location: "Amma Eye Care Hospital L.B.Nagar, Vanasthalipuram Hyderabad",
    photo: "/dr.sai-rupa-image.jpeg"
  },
  {
    slug: "dr-pamba-venkateswarlu",
    name: "Dr. PAMBA VENKATESWARLU",
    qualification: "MBBS, DO",
    designation: "Senior Ophthalmology - Amma Eye Care Hospital, L.B Nagar.",
    specialization: "Cataract, Medical Retina and Glaucoma, Paediatric eye care, Myopia Management and Geriatric Ophthalmology",
    experience: "45+ years experience Ophthalmology",
    treatments: [
      "Cataract",
      "Medical Retina",
      "Glaucoma Care",
      "Paediatric Eye Care",
      "Myopia Management",
      "Refractive Surgery",
      "General Eye Check-ups"
    ],
    languages: "English, Telugu, Hindi",
    consultation: "Monday to Saturday",
    location: "Amma Eye Care Hospital L.B.Nagar, Vanasthalipuram Hyderabad",
    photo: "/dr.pamba-venkateswarlu-image.jpeg"
  }
]

export async function generateStaticParams() {
  return DOCTORS.map((doctor) => ({
    slug: doctor.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const doctor = DOCTORS.find((d) => d.slug === slug)
  
  if (!doctor) {
    return {
      title: "Doctor Not Found | Amma Eye Care Hospital",
    }
  }

  return {
    title: `${doctor.name} | Amma Eye Care Hospital`,
    description: `${doctor.name} - ${doctor.specialization}. ${doctor.qualification}. Book your appointment at Amma Eye Care Hospital.`,
    openGraph: {
      title: `${doctor.name} | Amma Eye Care Hospital`,
      description: `${doctor.name} - ${doctor.specialization}. ${doctor.qualification}.`,
      type: "profile",
    },
  }
}

export default async function DoctorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doctor = DOCTORS.find((d) => d.slug === slug)

  if (!doctor) {
    notFound()
  }

  const aboutItems = [
    { label: "Qualification", value: doctor.qualification },
    { label: "Role", value: doctor.designation },
    { label: "Specialisation", value: doctor.specialization },
    { label: "Experience", value: doctor.experience },
    { label: "Languages", value: doctor.languages },
    { label: "Consultation", value: doctor.consultation },
    { label: "Location", value: doctor.location },
  ]

  return (
    <main id="main-content">
      {/* Hero Section */}
      <section 
        className="py-10 md:py-14"
        style={{
          backgroundImage: "radial-gradient(352.28% 126.05% at 23.26% 0, #a5f2f0 23.48%, #ddf9b6 100%)"
        }}
      >
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol 
              className="inline-flex items-center gap-0 bg-[#dff3ff] border border-[#bfe7ff] rounded-full overflow-hidden"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <li 
                className="px-3.5 py-2"
                itemScope
                itemProp="itemListElement"
                itemType="https://schema.org/ListItem"
              >
                <Link 
                  href="/" 
                  className="text-[15px] font-bold text-[#1e3a8a] hover:underline"
                  itemProp="item"
                >
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="w-px h-[22px] bg-[#1e3a8a]/20" aria-hidden="true" />
              <li 
                className="px-3.5 py-2"
                itemScope
                itemProp="itemListElement"
                itemType="https://schema.org/ListItem"
              >
                <Link 
                  href="/doctors" 
                  className="text-[15px] font-bold text-[#1e3a8a] hover:underline"
                  itemProp="item"
                >
                  <span itemProp="name">Doctors</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li className="w-px h-[22px] bg-[#1e3a8a]/20" aria-hidden="true" />
              <li 
                className="bg-white border-2 border-black rounded-full m-1 px-3.5 py-1.5"
                itemScope
                itemProp="itemListElement"
                itemType="https://schema.org/ListItem"
              >
                <span 
                  className="text-[15px] font-bold text-[#1e3a8a]"
                  itemProp="name"
                  aria-current="page"
                >
                  {doctor.name}
                </span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          {/* Doctor Card */}
          <article 
            className="max-w-[900px] rounded-[22px] p-4 md:p-5 border border-[#1e3a8a]/10 shadow-lg"
            style={{
              background: "linear-gradient(90deg, rgba(224,207,255,.75) 0%, rgba(255,237,224,.55) 35%, rgba(255,249,248,.75) 100%)"
            }}
            itemScope
            itemType="https://schema.org/Physician"
          >
            <div 
              className="bg-white/35 border border-white/55 rounded-[18px] p-4"
            >
              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <div className="bg-white rounded-[22px] border border-[#1e3a8a]/10 shadow-lg overflow-hidden h-[300px] md:h-[240px] w-full md:w-[160px] flex-shrink-0 mx-auto md:mx-0">
                  <Image
                    src={doctor.photo}
                    alt={`${doctor.name} - ${doctor.specialization}`}
                    width={160}
                    height={240}
                    className="w-full h-full object-cover object-[50%_18%]"
                    itemProp="image"
                    priority
                  />
                </div>

                <div className="min-w-0 text-center md:text-left">
                  <h1 
                    className="text-2xl md:text-[26px] font-black text-[#1e3a8a] tracking-tight leading-tight"
                    itemProp="name"
                  >
                    {doctor.name}
                  </h1>
                  <p 
                    className="mt-2 text-base font-extrabold text-[#3b5ea7]"
                    itemProp="medicalSpecialty"
                  >
                    {doctor.specialization}
                  </p>
                  <p 
                    className="mt-3 text-[15px] font-semibold text-[#4b607c] leading-relaxed"
                    itemProp="hasCredential"
                  >
                    {doctor.qualification}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-3.5 justify-center md:justify-start">
                    <span className="bg-[#1e3a8a]/[0.08] border border-[#1e3a8a]/[0.18] text-[#1e3a8a] font-extrabold text-[10px] md:text-xs px-2 py-1 rounded-lg">
                      Experience: {doctor.experience.replace(" in Clinical Ophthalmology", "")}
                    </span>
                    <span className="bg-[#1e3a8a]/[0.08] border border-[#1e3a8a]/[0.18] text-[#1e3a8a] font-extrabold text-[10px] md:text-xs px-2 py-1 rounded-lg">
                      Languages: {doctor.languages}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3.5 mt-4 justify-center md:justify-start">
                    <Link
                      href="/appointment"
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold rounded-[10px] bg-[#1e3a8a] text-white hover:brightness-95 transition-all"
                    >
                      Book Appointment
                    </Link>
                    <Link
                      href="/video-consultation"
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold rounded-[10px] bg-[#ef4444] text-white hover:brightness-95 transition-all"
                    >
                      Video Consult
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-8 md:py-10 bg-white" aria-labelledby="doctor-details-heading">
        <h2 id="doctor-details-heading" className="sr-only">Doctor Details</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-4">
            {/* About Doctor */}
            <div className="bg-white border border-[#e6edf6] rounded-[18px] p-5">
              <h3 className="text-lg font-black text-[#1e3a8a] tracking-tight mb-3">
                About Doctor
              </h3>
              <ul className="space-y-2.5">
                {aboutItems.map((item, index) => (
                  <li key={index} className="flex gap-2.5 items-start text-sm text-[#526B8C] leading-relaxed">
                    <span 
                      className="w-2.5 h-2.5 rounded-full bg-[#355C9D] mt-1.5 flex-shrink-0 shadow-[0_0_0_4px_rgba(53,92,157,0.12)]"
                      aria-hidden="true"
                    />
                    <div>
                      <strong className="text-[#1e3a8a]">{item.label}:</strong> {item.value}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatments Offered */}
            <div className="bg-white border border-[#e6edf6] rounded-[18px] p-5">
              <h3 className="text-lg font-black text-[#1e3a8a] tracking-tight mb-3">
                Treatments Offered
              </h3>
              <ul className="space-y-2.5">
                {doctor.treatments.map((treatment, index) => (
                  <li key={index} className="flex gap-2.5 items-start text-sm text-[#526B8C] leading-relaxed">
                    <span 
                      className="w-2.5 h-2.5 rounded-full bg-[#355C9D] mt-1.5 flex-shrink-0 shadow-[0_0_0_4px_rgba(53,92,157,0.12)]"
                      aria-hidden="true"
                    />
                    <div>{treatment}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-[#f8fafc]" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-2xl md:text-3xl font-extrabold text-[#1e3a8a] mb-4">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-[#526B8C] mb-6 max-w-2xl mx-auto">
            Book an appointment with {doctor.name} today and take the first step towards better eye health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-xl bg-[#1e3a8a] text-white hover:bg-[#1b2f70] transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              href="/doctors"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-xl border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a]/5 transition-colors"
            >
              View All Doctors
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
