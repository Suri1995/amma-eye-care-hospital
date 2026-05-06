import { notFound } from "next/navigation"
import { DOCTORS } from "@/lib/doctors-detailed-data"
import DoctorHero from "./components/doctor-hero"
import DoctorProfileCard from "./components/doctorProfile"
import DoctorDetails from "./components/doctorDetails"
import DoctorCTA from "./components/doctorCTA"

export default async function DoctorDetailPage({ params }: any) {
  const { slug } = await params

  const doctor = DOCTORS.find((d) => d.slug === slug)

  if (!doctor) notFound()

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
      <DoctorHero doctor={doctor} />      
      <DoctorDetails doctor={doctor} aboutItems={aboutItems} />
      <DoctorCTA doctor={doctor} />
    </main>
  )
}

export async function generateStaticParams() {
  return DOCTORS.map((doctor) => ({
    slug: doctor.slug,
  }))
}