import type { Metadata } from "next"
import { DOCTORS } from "@/lib/doctors-data"
import DoctorsHero from "@/components/doctorsHero"
import DoctorsGrid from "@/components/doctorsGrid"

export const metadata: Metadata = {
  title: "Doctors | Amma Eye Care Hospital",
  description:
    "Meet our expert doctors at Amma Eye Care Hospital and book your appointment.",
  openGraph: {
    title: "Doctors | Amma Eye Care Hospital",
    description:
      "Meet our expert doctors at Amma Eye Care Hospital and book your appointment.",
    type: "website",
  },
}

export default function DoctorsPage() {
  return (
    <main id="main-content">
      <DoctorsHero />
      <DoctorsGrid doctors={DOCTORS} />
    </main>
  )
}