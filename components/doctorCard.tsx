import Image from "next/image"
import Link from "next/link"

export default function DoctorCard({ doctor }: any) {
  return (
    <article
      className="group relative rounded-2xl border border-[#e6edf6] bg-white shadow-sm transition-all duration-200 hover:shadow-xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#1e3a8a]/30"
      style={{
        backgroundImage: "linear-gradient(to left, #FFF9F8, #FFEDE0, #E4CEFF)"
      }}
      itemScope
      itemType="https://schema.org/Physician"
    >
      <div className="flex flex-col md:flex-row gap-6 p-5 md:p-6">

        {/* Image */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <div className="relative overflow-hidden rounded-xl border border-[#e6edf6] bg-[#f6fbff]">
            <Image
              src={doctor.photo}
              alt={`${doctor.name} - ${doctor.specialization}`}
              width={160}
              height={185}
              className="w-[170px] h-[210px] md:w-[160px] md:h-[185px] object-cover object-top transition-transform duration-300 group-hover:scale-[1.04]"
              itemProp="image"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 text-center md:text-left">

          {/* Name */}
          <h3
            className="text-xl md:text-[22px] font-extrabold text-[#1e3a8a] leading-snug tracking-tight"
            itemProp="name"
          >
            {doctor.name}
          </h3>

          {/* Specialization */}
          <p
            className="mt-1.5 text-sm font-semibold text-[#526B8C]"
            itemProp="medicalSpecialty"
          >
            {doctor.specialization}
          </p>

          {/* Qualification */}
          <p className="mt-3 text-sm text-[#526B8C] leading-relaxed">
            <span className="font-semibold">Qualification:</span>{" "}
            <span itemProp="hasCredential">{doctor.qualification}</span>
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
            <span className="text-xs font-semibold text-[#355C9D] bg-[#355C9D]/10 border border-[#355C9D]/20 px-3 py-1 rounded-full">
              Experience: {doctor.experience}
            </span>
            <span className="text-xs font-semibold text-[#355C9D] bg-[#355C9D]/10 border border-[#355C9D]/20 px-3 py-1 rounded-full">
              Languages: {doctor.languages}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2.5 mt-4 justify-center md:justify-start">

            <Link
              href={`/doctors/${doctor.slug}`}
              className="inline-flex items-center justify-center px-4 py-2.5 text-[13px] font-semibold rounded-lg bg-[#b8860b] text-white transition-colors hover:bg-[#d99a00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8860b]"
            >
              Know Your Doctor
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2.5 text-[13px] font-semibold rounded-lg bg-[#243c8f] text-white transition-colors hover:bg-[#1b2f70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#243c8f]"
            >
              Book Appointment
            </Link>

            <a
              href="https://wa.me/919246446244"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Start WhatsApp consultation with ${doctor.name}`}
              className="inline-flex items-center justify-center px-4 py-2.5 text-[13px] font-semibold rounded-lg border border-[#25D366]/40 text-[#25D366] bg-white transition-all hover:bg-[#25D366]/10 hover:border-[#25D366] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
            >
              Video Consultation
            </a>

          </div>
        </div>
      </div>
    </article>
  )
}