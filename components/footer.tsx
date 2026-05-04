import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white pt-16 pb-6" role="contentinfo">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Amma Eye Care Hospital</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Providing world-class eye care services with compassion and expertise.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.youtube.com/@AmmaEyeCareHospitalHyderabad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our YouTube channel"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.7-.8-1.6-.8-2-.9C17.9 2.7 12 2.7 12 2.7s-5.9 0-8.7.3c-.4.1-1.3.1-2 .9C.7 4.6.5 6.2.5 6.2S0 8.1 0 10v1.9c0 1.9.5 3.8.5 3.8s.2 1.6.8 2.3c.7.8 1.8.8 2.2.9 1.6.2 8.5.3 8.5.3s5.9 0 8.7-.3c.4-.1 1.3-.1 2-.9.6-.7.8-2.3.8-2.3s.5-1.9.5-3.8V10c0-1.9-.5-3.8-.5-3.8zM9.6 13.9V7.9l6.4 3-6.4 3z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100054507757497"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M22.7 0H1.3C.6 0 0 .6 0 1.3v21.3C0 23.4.6 24 1.3 24h11.5v-9.3H9.7V11h3.1V8.3c0-3.1 1.9-4.8 4.6-4.8 1.3 0 2.4.1 2.7.1v3.2h-1.9c-1.5 0-1.8.7-1.8 1.7V11h3.6l-.5 3.7h-3.1V24h6.1c.7 0 1.3-.6 1.3-1.3V1.3C24 .6 23.4 0 22.7 0z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ammaeyecarehospital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.5-2.3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.3-.5 1.3-.1 1.7-.1 4.9-.1zm0 3.5a6.3 6.3 0 1 0 0 12.6 6.3 6.3 0 0 0 0-12.6zm0 10.4a4.1 4.1 0 1 1 0-8.2 4.1 4.1 0 0 1 0 8.2zm6.6-10.9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
              </a>
              <a
                href="https://x.com/AmmaEyeCare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our X (Twitter) profile"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/customized-cataract-surgeries" className="text-white/80 hover:text-white transition-colors">
                  Cataract Surgery
                </Link>
              </li>
              <li>
                <Link href="/services/lasik-freedom-from-glasses-contact-lens" className="text-white/80 hover:text-white transition-colors">
                  LASIK Surgery
                </Link>
              </li>
              <li>
                <Link href="/services/glaucoma" className="text-white/80 hover:text-white transition-colors">
                  Glaucoma Treatment
                </Link>
              </li>
              <li>
                <Link href="/services/childrens-eye-checkup" className="text-white/80 hover:text-white transition-colors">
                  Children&apos;s Eye Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+919246446244" className="text-white/80 hover:text-white transition-colors">
                  +91 92464 46244
                </a>
              </li>
              <li>
                <a href="mailto:ammaeyecarehospital@gmail.com" className="text-white/80 hover:text-white transition-colors break-all">
                  ammaeyecarehospital@gmail.com
                </a>
              </li>
              <li>
                <Link href="/appointment" className="text-white/80 hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/video-consultation" className="text-white/80 hover:text-white transition-colors">
                  Video Consultation
                </Link>
              </li>
            </ul>
          </div>
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
