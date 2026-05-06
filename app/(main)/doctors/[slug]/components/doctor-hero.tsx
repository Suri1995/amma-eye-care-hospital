import Link from "next/link"
import DoctorProfileCard from "./doctorProfile"

export default function DoctorHero({ doctor }: any) {
  return (
    <section
      className="py-10 md:py-14"
      style={{
        backgroundImage:
          "radial-gradient(352.28% 126.05% at 23.26% 0, #a5f2f0 23.48%, #ddf9b6 100%)",
      }}
    >
      <div className="container mx-auto px-4 ">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex justify-center mb-6"
        >
          <ol className="inline-flex items-center overflow-hidden rounded-full border border-[#bfe7ff] bg-[#dff3ff] shadow-sm">

            <li>
              <Link
                href="/"
                className="px-3.5 py-2 text-[14px] md:text-[15px] font-bold text-[#1e3a8a] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a8a]"
              >
                Home
              </Link>
            </li>

            <li
              className="w-px h-5 bg-[#1e3a8a]/20"
              aria-hidden="true"
            />

            <li>
              <Link
                href="/doctors"
                className="px-3.5 py-2 text-[14px] md:text-[15px] font-bold text-[#1e3a8a] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a8a]"
              >
                Doctors
              </Link>
            </li>

            <li
              className="w-px h-5 bg-[#1e3a8a]/20"
              aria-hidden="true"
            />

            <li
              aria-current="page"
              className="m-1 rounded-full border-2 border-black bg-white px-3.5 py-1.5"
            >
              <span className="text-[14px] md:text-[15px] font-bold text-[#1e3a8a]">
                {doctor.name}
              </span>
            </li>
          </ol>
        </nav>

        {/* Profile Card */}
        <div className="mt-2">
          <DoctorProfileCard doctor={doctor} />
        </div>

      </div>
    </section>
  )
}