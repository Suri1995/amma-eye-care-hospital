import Link from "next/link"

export default function DoctorCTA({ doctor }: any) {
  return (
    <section className="py-10 bg-[#f8fafc] text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e3a8a] mb-4">
          Ready to Schedule Your Visit?
        </h2>

        <p className="text-[#526B8C] mb-6 max-w-2xl mx-auto">
          Book an appointment with {doctor.name} today and take the first step towards better eye health.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="px-6 py-3 bg-[#1e3a8a] text-white rounded-xl font-bold">
            Book Appointment
          </Link>

          <Link href="/doctors" className="px-6 py-3 border-2 border-[#1e3a8a] text-[#1e3a8a] rounded-xl font-bold">
            View All Doctors
          </Link>
        </div>
      </div>
    </section>
  )
}