import Link from "next/link"

// Minimal location data mirrored from the contact-page map cards (LocationMaps),
// just enough to render a small square preview map + directions link per branch.
const LOCATIONS = [
  {
    id: "lb-nagar",
    label: "LB Nagar",
    address: "Chintalkunta, L.B. Nagar, Hyderabad",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Amma+Eye+Care+Hospital+Chintalkunta+LB+Nagar+Hyderabad",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.9!2d78.5556240!3d17.3412647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98a906c50f4f%3A0x27f26d05063b4290!2sAmma+Eye+Care+Hospital!5e0!3m2!1sen!2sin!4v1750000000001!5m2!1sen!2sin",
  },
  {
    id: "kokapet",
    label: "Kokapet",
    address: "Kokapet Terminal, Narsingi, Hyderabad",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=17.3850525,78.3291999",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.2!2d78.3266250!3d17.3850576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95ad43832651%3A0x30abd9d08f4baec6!2sAmma+Eye+Care+Hospital!5e0!3m2!1sen!2sin!4v1750000000002!5m2!1sen!2sin",
  },
] as const

export function Footer() {
  return (
    <footer
      className="bg-[#1e3a8a] text-white py-16 md:py-20"
      role="contentinfo"
    >
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Amma Eye Care Hospital
            </h3>

            <p className="text-white/80 leading-relaxed mb-6">
              Providing world-class eye care services with compassion and expertise.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-2">

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@AmmaEyeCareHospitalHyderabad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our YouTube channel"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="#FF0000"
                  aria-hidden="true"
                >
                  <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.7-.8-1.6-.8-2-.9C17.9 2.7 12 2.7 12 2.7s-5.9 0-8.7.3c-.4.1-1.3.1-2 .9C.7 4.6.5 6.2.5 6.2S0 8.1 0 10v1.9c0 1.9.5 3.8.5 3.8s.2 1.6.8 2.3c.7.8 1.8.8 2.2.9 1.6.2 8.5.3 8.5.3s5.9 0 8.7-.3c.4-.1 1.3-.1 2-.9.6-.7.8-2.3.8-2.3s.5-1.9.5-3.8V10c0-1.9-.5-3.8-.5-3.8zM9.6 13.9V7.9l6.4 3-6.4 3z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100054507757497"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="#1877F2"
                  aria-hidden="true"
                >
                  <path d="M22.7 0H1.3C.6 0 0 .6 0 1.3v21.3C0 23.4.6 24 1.3 24h11.5v-9.3H9.7V11h3.1V8.3c0-3.1 1.9-4.8 4.6-4.8 1.3 0 2.4.1 2.7.1v3.2h-1.9c-1.5 0-1.8.7-1.8 1.7V11h3.6l-.5 3.7h-3.1V24h6.1c.7 0 1.3-.6 1.3-1.3V1.3C24 .6 23.4 0 22.7 0z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ammaeyecarehospital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="instagram-gradient"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#FFDC80" />
                      <stop offset="25%" stopColor="#FCAF45" />
                      <stop offset="50%" stopColor="#F77737" />
                      <stop offset="75%" stopColor="#E1306C" />
                      <stop offset="100%" stopColor="#833AB4" />
                    </linearGradient>
                  </defs>

                  <path
                    fill="url(#instagram-gradient)"
                    d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.5-2.3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.3-.5 1.3-.1 1.7-.1 4.9-.1zm0 3.5a6.3 6.3 0 1 0 0 12.6 6.3 6.3 0 0 0 0-12.6zm0 10.4a4.1 4.1 0 1 1 0-8.2 4.1 4.1 0 0 1 0 8.2zm6.6-10.9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                  />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/AmmaEyeCare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our X (Twitter) profile"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="#000000"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Services
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/customized-cataract-surgeries"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Cataract Surgery
                </Link>
              </li>

              <li>
                <Link
                  href="/services/lasik-surgery"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  LASIK Surgery
                </Link>
              </li>

              <li>
                <Link
                  href="/services/icl-implantable-contact-lens"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  ICL
                </Link>
              </li>

              <li>
                <Link
                  href="/services/children-eye-checkup"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  SMILE
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Locations */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Our Locations
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {LOCATIONS.map((loc) => (
                <a
                  key={loc.id}
                  href={loc.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get directions to our ${loc.label} branch`}
                  className="group block overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/15 transition-colors hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e3a8a]"
                >
                  {/* Square map preview */}
                  <div className="relative aspect-square w-full overflow-hidden bg-white/5">
                    <iframe
                      title={`${loc.label} branch preview map`}
                      src={loc.embedUrl}
                      className="pointer-events-none h-full w-full"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      tabIndex={-1}
                      aria-hidden="true"
                    />

                    {/* Legibility scrim + hover tint */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 transition-colors duration-200 group-hover:from-black/65"
                    />

                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-1.5 right-1.5 inline-flex items-center gap-1 rounded-md bg-white/95 px-1.5 py-0.5 text-[9px] font-semibold text-slate-700 shadow-sm"
                    >
                      <svg
                        className="size-2.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                      Map
                    </span>
                  </div>

                  {/* Label + address */}
                  <div className="px-2.5 py-2">
                    <p className="text-sm font-semibold text-white">
                      {loc.label}
                    </p>

                    <p className="mt-0.5 line-clamp-1 text-[11px] leading-snug text-white/65">
                      {loc.address}
                    </p>

                    <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-[#6495ED] group-hover:underline">
                      Get directions

                      <svg
                        className="size-2.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          {/*
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919246446244"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  +91 92464 46244
                </a>
              </li>

              <li>
                <a
                  href="mailto:ammaeyecarehospital@gmail.com"
                  className="text-white/80 hover:text-white transition-colors break-all"
                >
                  ammaeyecarehospital@gmail.com
                </a>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Book Appointment
                </Link>
              </li>

              <li>
                <a
                  href="https://wa.me/919246446244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Video Consultation
                </a>
              </li>
            </ul>
          </div>
          */}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/80 text-sm mb-2">
            © 2026 Amma Eye Care Hospital. All rights reserved.
          </p>

          <p className="text-white/80 text-sm">
            Developed by{" "}
            <a
              href="https://sellute.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6495ED] font-semibold hover:underline"
            >
              Sellute
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}