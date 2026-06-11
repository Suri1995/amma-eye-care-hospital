import Image from "next/image"
import Link from "next/link"
import type { Doctor } from "@/lib/types/doctor"

export default function DoctorProfileCard({
  doctor,
}: {
  doctor: Doctor
}) {
  const getWhatsAppNumber = (location: string) => {
    // Check both address and location fields
    const locationToCheck = location?.toLowerCase() || "";
    
    if (locationToCheck.includes("kokapet")) {
      return "919000246244"
    } else if (locationToCheck.includes("lb nagar")) {
      return "919246446244"
    }
    return "919246446244" // Default fallback
  }

  // Check both address and location fields from doctor object
  const whatsappNumber = getWhatsAppNumber(doctor.address || doctor.location || "")
  const whatsappUrl = `https://wa.me/${whatsappNumber}`
  
  return (
    <article
      className="max-w-[900px] mx-auto rounded-[22px] p-4 md:p-5 border border-[#1e3a8a]/10 shadow-lg"
      style={{
        background:
          "linear-gradient(90deg, rgba(224,207,255,.75) 0%, rgba(255,237,224,.55) 35%, rgba(255,249,248,.75) 100%)",
      }}
      itemScope
      itemType="https://schema.org/Physician"
    >
      <div className="bg-white/35 border border-white/55 rounded-[18px] p-4">
        <div className="flex flex-col md:flex-row gap-4 md:items-center">

          {/* Image */}
          <div className="bg-white rounded-[22px] border border-[#1e3a8a]/10 shadow-lg overflow-hidden h-[300px] md:h-[240px] w-full md:w-[160px] flex-shrink-0 mx-auto md:mx-0">
            <Image
              src={doctor.photo}
              alt={`${doctor.name} - ${doctor.specialization}`}
              width={160}
              height={240}
              className="w-full h-full object-cover object-[50%_18%]"
              priority
              itemProp="image"
            />
          </div>

          {/* Content */}
          <div className="min-w-0 text-center md:text-left">

            <h1
              className="text-2xl md:text-[26px] font-black text-[#1e3a8a] tracking-tight"
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
              className="mt-3 text-[15px] font-semibold text-[#4b607c]"
              itemProp="hasCredential"
            >
              {doctor.qualification}
            </p>

            <div className="flex flex-wrap gap-3 mt-3.5 justify-center md:justify-start">
              <span className="bg-[#1e3a8a]/[0.08] px-2 py-1 rounded-lg text-xs font-bold">
                Experience: {doctor.experience?.replace(" in Clinical Ophthalmology", "") || doctor.experience}
              </span>

              <span className="bg-[#1e3a8a]/[0.08] px-2 py-1 rounded-lg text-xs font-bold">
                Languages: {doctor.languages}
              </span>

              <span className="bg-[#1e3a8a]/[0.08] px-2 py-1 rounded-lg text-xs font-bold">
                Location: {doctor.address || doctor.location}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 mt-4 justify-center md:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-11 px-5 text-sm font-bold rounded-[10px] bg-[#1e3a8a] text-white hover:bg-[#1b2f70] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a8a]"
              >
                Book Appointment
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Start WhatsApp consultation with ${doctor.name}`}
                className="inline-flex items-center justify-center h-11 px-5 text-sm font-bold rounded-[10px] border border-[#1e3a8a]/30 text-[#1e3a8a] bg-white hover:bg-[#25D366]/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
              >
                Video Consultation
              </a>
            </div>

          </div>
        </div>
      </div>
    </article>
  )}