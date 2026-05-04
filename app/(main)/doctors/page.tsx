import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Doctors | Amma Eye Care Hospital",
  description: "Meet our expert doctors at Amma Eye Care Hospital and book your appointment.",
  openGraph: {
    title: "Doctors | Amma Eye Care Hospital",
    description: "Meet our expert doctors at Amma Eye Care Hospital and book your appointment.",
    type: "website",
  },
}

const DOCTORS = [
  {
    slug: "dr-sai-rupa-sree-p",
    name: "Dr. Sai Rupa Sree P",
    qualification: "MBBS (Osmania, Gold Medalist), MS Ophthalmology (Osmania, Gold Medalist)",
    specialization: "Cataract and Refractive Surgery",
    experience: "7+ Years",
    languages: "English, Telugu, Hindi",
    photo: "/dr.sai-rupa-image.jpeg"
  },
  {
    slug: "dr-pamba-venkateswarlu",
    name: "Dr. PAMBA VENKATESWARLU",
    qualification: "MBBS, DO",
    specialization: "Cataract, Medical Retina and Glaucoma, Paediatric eye care, Myopia Management and Geriatric Ophthalmology",
    experience: "45+ years experience in ophthalmology",
    languages: "English, Telugu, Hindi",
    photo: "/dr.pamba-venkateswarlu-image.jpeg"
  }
]

export default function DoctorsPage() {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section 
        className="py-14 md:py-16"
        style={{
          backgroundImage: "radial-gradient(352.28% 126.05% at 23.26% 0, #a5f2f0 23.48%, #ddf9b6 100%)"
        }}
      >
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-4">
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
                  Doctors
                </span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-[44px] font-extrabold text-[#1e3a8a] text-center tracking-tight leading-tight">
            Our <span className="text-[#b8860b]">Doctors</span>
          </h1>
          <p className="mt-2.5 max-w-[860px] mx-auto text-[#526B8C] text-base leading-relaxed text-center">
            Choose a specialist and book your appointment. You can also view full doctor profile.
          </p>
        </div>
      </section>

      {/* Doctors Grid Section */}
      <section className="py-16 bg-[#efe8e8]" aria-labelledby="doctors-heading">
        <h2 id="doctors-heading" className="sr-only">Our Medical Team</h2>
        <div className="container mx-auto px-4">
          <div className="max-w-[1120px] mx-auto grid grid-cols-1 gap-4">
            {DOCTORS.map((doctor) => (
              <article 
                key={doctor.slug}
                className="rounded-[18px] p-5 border border-[#e6edf6] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  backgroundImage: "linear-gradient(to left, #FFF9F8, #FFEDE0, #E4CEFF)"
                }}
                itemScope
                itemType="https://schema.org/Physician"
              >
                <div className="flex flex-col md:flex-row gap-5 md:items-start">
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <Image
                      src={doctor.photo}
                      alt={`${doctor.name} - ${doctor.specialization}`}
                      width={160}
                      height={185}
                      className="w-[180px] h-[220px] md:w-[160px] md:h-[185px] rounded-[18px] object-cover object-top border border-[#e6edf6] bg-[#f6fbff]"
                      itemProp="image"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0 text-center md:text-left">
                    <h3 
                      className="text-xl md:text-[22px] font-black text-[#1e3a8a] leading-tight tracking-tight"
                      itemProp="name"
                    >
                      {doctor.name}
                    </h3>
                    <p 
                      className="mt-2 text-sm font-extrabold text-[#526B8C] leading-snug"
                      itemProp="medicalSpecialty"
                    >
                      {doctor.specialization}
                    </p>

                    <div className="mt-2.5 text-sm text-[#526B8C] leading-relaxed">
                      <span className="font-medium">Qualification:</span>{" "}
                      <span itemProp="hasCredential">{doctor.qualification}</span>
                      
                      <div className="flex flex-wrap gap-2.5 mt-2.5 justify-center md:justify-start">
                        <span className="text-xs text-[#355C9D] bg-[#355C9D]/[0.08] border border-[#355C9D]/[0.18] px-2.5 py-1.5 rounded-full font-extrabold">
                          Experience: {doctor.experience}
                        </span>
                        <span className="text-xs text-[#355C9D] bg-[#355C9D]/[0.08] border border-[#355C9D]/[0.18] px-2.5 py-1.5 rounded-full font-extrabold">
                          Languages: {doctor.languages}
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2.5 mt-3 justify-center md:justify-start">
                        <Link
                          href={`/doctors/${doctor.slug}`}
                          className="inline-flex items-center justify-center px-3 py-2.5 text-[13px] font-extrabold rounded-[10px] bg-[#b8860b] text-white hover:bg-[#d99a00] transition-colors"
                        >
                          Know Your Doctor
                        </Link>
                        <Link
                          href="/appointment"
                          className="inline-flex items-center justify-center px-3 py-2.5 text-[13px] font-extrabold rounded-[10px] bg-[#243c8f] text-white hover:bg-[#1b2f70] transition-colors"
                        >
                          Book Appointment
                        </Link>
                        <Link
                          href="/video-consultation"
                          className="inline-flex items-center justify-center px-3 py-2.5 text-[13px] font-extrabold rounded-[10px] bg-[#e53935] text-white hover:bg-[#c62828] transition-colors"
                        >
                          Video Consult
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
