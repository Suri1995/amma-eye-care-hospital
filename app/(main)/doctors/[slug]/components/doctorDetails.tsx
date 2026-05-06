import type { Doctor, AboutItem } from "@/lib/types/doctor"

export default function DoctorDetails({
  doctor,
  aboutItems,
}: {
  doctor: Doctor
  aboutItems: AboutItem[]
}) {
  return (
    <section className="py-8 md:py-10 bg-white" aria-labelledby="doctor-details-heading">
      <h2 id="doctor-details-heading" className="sr-only">
        Doctor Details
      </h2>

      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-4">

          {/* About Doctor */}
          <div className="bg-white border border-[#e6edf6] rounded-[18px] p-5">
            <h3 className="text-lg font-black text-[#1e3a8a] mb-3">
              About Doctor
            </h3>

            <ul className="space-y-2.5">
              {aboutItems.map((item, index) => (
                <li key={index} className="flex gap-2.5 text-sm text-[#526B8C] leading-relaxed">
                  <span
                    className="w-2.5 h-2.5 rounded-full bg-[#355C9D] mt-1.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <strong className="text-[#1e3a8a]">{item.label}:</strong> {item.value}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div className="bg-white border border-[#e6edf6] rounded-[18px] p-5">
            <h3 className="text-lg font-black text-[#1e3a8a] mb-3">
              Treatments Offered
            </h3>

            <ul className="space-y-2.5">
              {doctor.treatments.map((treatment, index) => (
                <li key={index} className="flex gap-2.5 text-sm text-[#526B8C] leading-relaxed">
                  <span
                    className="w-2.5 h-2.5 rounded-full bg-[#355C9D] mt-1.5 flex-shrink-0"
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
  )
}