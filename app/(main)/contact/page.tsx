import type { Metadata } from "next"
import ContactPage from "./contactPage"

export const metadata: Metadata = {
  title: "Contact Us | Amma Eye Care Hospital",
  description:
    "Get in touch with Amma Eye Care Hospital in Hyderabad. Book an appointment, call us, or send a message. We respond within 24 hours.",
}

export default function Page() {
  return <ContactPage />
}