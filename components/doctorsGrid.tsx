import DoctorCard from "./doctorCard"

export default function DoctorsGrid({ doctors }: any) {
  return (
    <section
      className="py-12 md:py-16 bg-[#efe8e8]"
      aria-labelledby="doctors-heading"
    >
      <h2 id="doctors-heading" className="sr-only">
        Our Medical Team
      </h2>

      <div className="container mx-auto px-4">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-5 md:gap-6">
          {doctors.map((doctor: any) => (
            <DoctorCard key={doctor.slug} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  )
}