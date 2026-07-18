import type { Metadata } from "next"
import BookAppointmentPage from "./bookAppointmentPage"

export const metadata: Metadata = {
  title: "Book Appointment | Amma Eye Care Hospital",
  description:
    "Book your eye care appointment at Amma Eye Care Hospital in Hyderabad. Schedule your visit online easily.",
}

export default function Page() {
  return <BookAppointmentPage />
}
