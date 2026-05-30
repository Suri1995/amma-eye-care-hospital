import Image from "next/image"
import { DOCTORS } from "@/lib/doctors-data"
import { Award } from "lucide-react"

export default function AboutDoctors() {
  return (
    <section className="py-12 md:py-16 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a]">
            Our Expert Team
          </h2>
        </div>

        {/* Doctors */}
        <div className="flex flex-col gap-6">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.slug}
              className="group flex flex-col gap-6 rounded-[28px] border border-[#e8eef8] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:flex-row md:p-6"
            >

              {/* Image */}
              <div className="relative w-full h-[300px] md:w-[220px] md:h-[220px] flex-shrink-0 rounded-[16px] overflow-hidden">
                <Image
                  src={doctor.photo}
                  alt={`${doctor.name} - ${doctor.specialization}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 220px"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center text-center md:text-left">

                <h3 className="text-xl md:text-2xl font-bold text-[#1e3a8a]">
                  {doctor.name}
                </h3>

                <p className="mt-1 text-sm md:text-base font-semibold text-[#3b5ea7]">
                  {doctor.specialization}
                </p>

                <p className="mt-2 text-sm text-[#526B8C] leading-relaxed">
                  {doctor.qualification}
                </p>

                <div className="flex items-center justify-center md:justify-start gap-2 mt-3 text-sm text-[#526B8C]">
                  <Award className="w-4 h-4" />
                  {doctor.experience}
                </div>

                <p className="mt-2 text-sm text-[#526B8C]">
                  Languages: {doctor.languages}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}