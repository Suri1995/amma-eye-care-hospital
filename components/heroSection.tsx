import Image from "next/image"
import Link from "next/link"
import { Eye, ShieldCheck } from "lucide-react"

export function HeroSection() {
  return (
    <section
      role="region"
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden"
    >
      {/* ── Background ── */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-[#fdfcff] via-[#f0eeff] to-[#fff0f1]" />

      {/* ── Decorative blobs ── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-[#3B2E8C]/08 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#F22233]/07 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#e8e4ff]/40 blur-[80px]" />
        {/* Dot accents */}
        <div className="absolute top-[18%] left-[38%] w-2 h-2 rounded-full bg-[#3B2E8C]/25" />
        <div className="absolute top-[60%] left-[25%] w-1.5 h-1.5 rounded-full bg-[#F22233]/25" />
        <div className="absolute bottom-[25%] right-[15%] w-2.5 h-2.5 rounded-full bg-[#3B2E8C]/15" />
        {/* Thin ring */}
        <div className="absolute top-[8%] right-[18%] w-28 h-28 rounded-full border border-[#3B2E8C]/10" />
        <div className="absolute bottom-[12%] left-[12%] w-20 h-20 rounded-full border border-[#F22233]/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ═══════════════════════════════
            DESKTOP
        ═══════════════════════════════ */}
        <div className="hidden lg:grid grid-cols-2 gap-16 py-20 xl:py-24 items-center">

          {/* LEFT */}
          <div className="max-w-xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full border border-[#3B2E8C]/20 bg-white/80 text-xs font-bold tracking-[0.15em] uppercase text-[#3B2E8C] shadow-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D11A2A] animate-pulse" aria-hidden="true" />
              Trusted Eye Care in Hyderabad
            </div>

            {/* Heading */}
            <h1
              id="hero-heading"
              className="font-black tracking-tight leading-[1.02]"
            >
              <span className="block text-[#3B2E8C] text-[clamp(3rem,5vw,5rem)]">
                Advanced
              </span>
              <span className="relative block w-fit text-[#D11A2A] text-[clamp(3rem,5vw,5rem)]">
                Eye Care
                {/* Wavy underline */}
                <svg aria-hidden="true" className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 10" preserveAspectRatio="none" height="10">
                  <path d="M0 8 Q75 1 150 7 Q225 13 300 5" fill="none" stroke="#D11A2A" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
                </svg>
              </span>
              <span className="block text-black text-[clamp(2.5rem,4.5vw,4.5rem)]">
                for All Ages
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 text-lg text-slate-600 leading-relaxed">
              From routine check-ups to advanced surgeries, experience world-class
              eye care with our expert team of ophthalmologists.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex gap-3">
              <Link
                href="/contact"
                aria-label="Book an appointment at Amma Eye Care Hospital"
                className="inline-flex items-center justify-center rounded-xl bg-[#3B2E8C] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#3B2E8C]/25 transition-all hover:bg-[#2e2270] hover:-translate-y-0.5 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B2E8C]"
              >
                Book Appointment
              </Link>
              <a
                 href="https://wa.me/919246446244"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Start a video consultation via WhatsApp with Amma Eye Care Hospital"
  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#3B2E8C]/20 bg-white/80 px-8 py-3.5 text-sm font-bold text-[#3B2E8C] backdrop-blur-sm transition-all hover:border-[#25D366]/60 hover:bg-[#25D366]/5 hover:text-[#25D366] hover:-translate-y-0.5 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B2E8C]"
>
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
  Video Consultation
</a>
            </div>

            {/* Stats */}
            <div className="mt-10 flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-[#3B2E8C]/10 shadow-inner" aria-hidden="true">
                  <Eye className="w-5 h-5 text-[#3B2E8C]" />
                </div>
                <div>
                  <p className="text-2xl font-black text-black leading-none">20k+</p>
                  <p className="text-xs text-slate-500 mt-0.5">Happy Patients</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-10 w-px bg-slate-200" aria-hidden="true" />

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-[#F22233]/10 shadow-inner" aria-hidden="true">
                  <ShieldCheck className="w-5 h-5 text-[#F22233]" />
                </div>
                <div>
                  <p className="text-2xl font-black text-black leading-none">500+</p>
                  <p className="text-xs text-slate-500 mt-0.5">Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[520px]">

            {/* Offset shadow card behind */}
            <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-[#3B2E8C]/12" />

            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
              <Image
                src="/clinic.webp"
                alt="Amma Eye Care Hospital clinic building in Hyderabad"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Floating image cards */}
              {/* <div className="absolute top-5 left-5 w-28 h-28 rounded-2xl overflow-hidden ring-2 ring-white/30 shadow-xl">
                <Image src="/exam.png" alt="Eye examination" fill className="object-cover" sizes="112px" />
              </div>
              <div className="absolute top-5 right-5 w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-white/30 shadow-xl">
                <Image src="/spectacular.png" alt="Spectacles and eyewear" fill className="object-cover" sizes="96px" />
              </div> */}

              {/* Availability Card */}
              <div
                className="absolute w-fit bottom-5 left-5 right-5 bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl px-4 py-3 text-white flex items-center gap-3"
                role="status"
                aria-live="polite"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-400/20">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold leading-none">Doctors Available</p>
                  <p className="text-xs opacity-70 mt-0.5">Mon – Sat, 8am – 8pm</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ═══════════════════════════════
            MOBILE
        ═══════════════════════════════ */}
        <div className="lg:hidden flex flex-col py-10 gap-7">

          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3B2E8C]/20 bg-white/80 text-[10px] font-bold tracking-[0.15em] uppercase text-[#3B2E8C] shadow-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D11A2A] animate-pulse" aria-hidden="true" />
              Trusted Eye Care in Hyderabad
            </div>
          </div>

          {/* Heading */}
          <h1 id="hero-heading" className="text-center font-black leading-[1.04] tracking-tight text-[2.45rem]">
            <span className="text-[#3B2E8C] block">Advanced</span>
            <span className="relative inline-block text-[#D11A2A]">
              Eye Care
              <svg aria-hidden="true" className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none" height="7">
                <path d="M0 6 Q50 0 100 5 Q150 10 200 4" fill="none" stroke="#D11A2A" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
              </svg>
            </span>
            <br />
            <span className="text-black">for All Ages</span>
          </h1>

          {/* Hero image */}
          <div className="relative">
            {/* offset shadow */}
            <div aria-hidden="true" className="absolute inset-0 translate-x-2 translate-y-2 rounded-3xl bg-[#3B2E8C]/10" />
            <div className="relative w-full h-60 rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image
                src="/clinic.webp"
                alt="Amma Eye Care Hospital clinic"
                fill
                sizes="100vw"
                loading="eager"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Small overlapping images inside */}
              {/* <div className="absolute top-0 left-0 w-20 h-20 rounded-xl overflow-hidden ring-2 ring-white/30 shadow-lg">
                <Image src="/exam.png" alt="Eye examination" fill className="object-cover" sizes="80px" />
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 rounded-xl overflow-hidden ring-2 ring-white/30 shadow-lg">
                <Image src="/spectacular.png" alt="Spectacles" fill className="object-cover" sizes="64px" />
              </div> */}

              {/* Doctors chip */}
              <div
                className="absolute w-fit bottom-3 left-3 right-3 flex items-center gap-2.5 rounded-xl bg-white/15 border border-white/25 px-3 py-2 backdrop-blur-sm"
                role="status"
                aria-live="polite"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-400/20">
                  <span className="h-2 w-2 rounded-full bg-green-400" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] font-bold text-white leading-none">Doctors Available</p>
                  <p className="text-[10px] text-white/65 mt-0.5">Mon – Sat, 8am – 8pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-center text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
            From routine check-ups to advanced surgeries, experience world-class eye care.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 rounded-2xl border border-[#3B2E8C]/10 bg-white/80 px-4 py-3.5 shadow-sm backdrop-blur-sm">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#3B2E8C]/10 shrink-0" aria-hidden="true">
                <Eye className="w-4 h-4 text-[#3B2E8C]" />
              </div>
              <div>
                <p className="text-xl font-black text-black leading-none">20k+</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Happy Patients</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-[#F22233]/10 bg-white/80 px-4 py-3.5 shadow-sm backdrop-blur-sm">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#F22233]/10 shrink-0" aria-hidden="true">
                <ShieldCheck className="w-4 h-4 text-[#F22233]" />
              </div>
              <div>
                <p className="text-xl font-black text-black leading-none">500+</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Reviews</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <Link
              href="/contact"
              aria-label="Book appointment"
              className="flex items-center justify-center rounded-2xl bg-[#3B2E8C] py-4 text-sm font-bold text-white shadow-lg shadow-[#3B2E8C]/25 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B2E8C]"
            >
              Book Appointment
            </Link>
            <a
                 href="https://wa.me/919246446244"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Start a video consultation via WhatsApp with Amma Eye Care Hospital"
  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#3B2E8C]/20 bg-white/80 px-8 py-3.5 text-sm font-bold text-[#3B2E8C] backdrop-blur-sm transition-all hover:border-[#25D366]/60 hover:bg-[#25D366]/5 hover:text-[#25D366] hover:-translate-y-0.5 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B2E8C]"
>
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
  Video Consultation
</a>
          </div>

        </div>
      </div>
    </section>
  )
}