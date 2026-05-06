import type { Metadata } from "next"
import AboutHero from "./components/about-hero"
import AboutStory from "./components/about-story"
import AboutValues from "./components/about-values"
import AboutDoctors from "./components/about-doctors"
import AboutCTA from "./components/about-cta"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Amma Eye Care Hospital - over 25 years of dedicated eye care services with advanced technology and compassionate specialists.",
}

export default function AboutPage() {
  return (
    <main id="main-content">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutDoctors />
      <AboutCTA />
    </main>
  )
}