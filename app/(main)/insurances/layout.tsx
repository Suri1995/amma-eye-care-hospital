import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cashless Insurance Partners | Amma Eye Care Hospital",
  description: "Cashless facility available with major insurance partners at Amma Eye Care Hospital.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ammaeyecarehospital.com/insurances",
  },
  openGraph: {
    title: "Cashless Insurance Partners | Amma Eye Care Hospital",
    description: "Cashless facility available with major insurance partners at Amma Eye Care Hospital.",
    type: "website",
  },
}

export default function InsurancesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
