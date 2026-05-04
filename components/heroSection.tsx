import Image from "next/image"
import Link from "next/link"
import { Eye, ShieldCheck } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Hero — Amma Eye Care Hospital"
      style={{ background: "linear-gradient(135deg, #fdfcff 0%, #f0eeff 40%, #fff0f1 100%)" }}
    >
      {/* ── Decorative SVG wave top border ── */}
      <div aria-hidden="true" className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 12" fill="none" className="w-full">
          <path d="M0 12 Q360 0 720 8 Q1080 16 1440 4 L1440 0 L0 0Z" fill="#3B2E8C" opacity="0.12" />
        </svg>
      </div>

      {/* ── Scattered decorative circles ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-[8%] h-72 w-72 rounded-full border border-[#3B2E8C]/08 bg-[#3B2E8C]/04" />
        <div className="absolute -bottom-16 left-[5%] h-56 w-56 rounded-full border border-[#F22233]/08 bg-[#F22233]/04" />
        <div className="absolute top-1/2 right-[30%] h-4 w-4 rounded-full bg-[#3B2E8C]/20" />
        <div className="absolute top-[20%] left-[40%] h-2 w-2 rounded-full bg-[#F22233]/30" />
        <div className="absolute bottom-[30%] right-[12%] h-3 w-3 rounded-full bg-[#3B2E8C]/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ══════════════════════════════════════
            DESKTOP: Magazine-style asymmetric layout
            ══════════════════════════════════════ */}
        <div className="hidden lg:block py-16 xl:py-20">

          {/* Row 1: badge + heading spanning full width */}
          <div className="flex items-start justify-between gap-8 mb-12">

            {/* Left: badge + giant heading */}
            <div className="flex-1 max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#3B2E8C]/25 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#3B2E8C] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F22233] animate-pulse" aria-hidden="true" />
                Trusted Eye Care in Hyderabad
              </div>

              <h1 className="font-black leading-[0.95] tracking-tighter"
                style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}>
                <span className="block text-[#3B2E8C]">Advanced</span>
                <span className="block relative text-[#F22233] w-fit">
                  Eye Care
                  <svg aria-hidden="true" className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 10" preserveAspectRatio="none" height="10">
                    <path d="M0 8 Q75 1 150 6 Q225 11 300 4" fill="none" stroke="#F22233" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                  </svg>
                </span>
                <span className="block text-[#0D0D0D]">for All Ages</span>
              </h1>
            </div>

            {/* Right: main hero image — tall card */}
            <div className="relative w-72 xl:w-80 shrink-0">
              <div className="relative h-[420px] xl:h-[480px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl">
                <Image
                  src="/clinic.png"
                  alt="Amma Eye Care Hospital clinic facility"
                  fill
                  className="object-cover"
                  sizes="320px"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2E8C]/60 via-transparent to-transparent" />
                {/* Doctors Available chip on image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-2xl border border-white/20 bg-white/15 px-3 py-2.5 backdrop-blur-md">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-400/20">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white leading-none">Doctors Available</p>
                    <p className="text-[10px] text-white/65 mt-0.5">Mon – Sat, 9am – 7pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: description + CTAs + stats + two smaller images */}
          <div className="grid grid-cols-[1fr_auto_auto] items-end gap-6 xl:gap-8">

            {/* Description + CTAs */}
            <div className="max-w-md">
              <p className="text-base xl:text-lg leading-relaxed text-slate-600">
                From routine check-ups to advanced surgeries, experience world-class
                eye care with our expert team of ophthalmologists.
              </p>
              <div className="mt-7 flex items-center gap-3">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center rounded-xl bg-[#3B2E8C] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#3B2E8C]/30 transition-all hover:bg-[#2e2270] hover:-translate-y-0.5 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B2E8C]"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/video-consultation"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-[#3B2E8C]/20 bg-white px-7 py-3.5 text-sm font-bold text-[#3B2E8C] transition-all hover:border-[#3B2E8C]/50 hover:-translate-y-0.5 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B2E8C]"
                >
                  Video Consultation
                </Link>
              </div>
              {/* Stats inline */}
              <div className="mt-8 flex gap-6">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#3B2E8C]/10">
                    <Eye className="h-4 w-4 text-[#3B2E8C]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xl font-black text-[#0D0D0D] leading-none">20k+</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Happy Patients</p>
                  </div>
                </div>
                <div className="w-px bg-slate-200" aria-hidden="true" />
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F22233]/10">
                    <ShieldCheck className="h-4 w-4 text-[#F22233]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xl font-black text-[#0D0D0D] leading-none">500+</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exam image — tilted card */}
            <div className="relative h-52 w-44 xl:h-60 xl:w-52 overflow-hidden rounded-3xl shadow-xl"
              style={{ transform: "rotate(-3deg)" }}>
              <Image
                src="/exam.png"
                alt="Eye examination at Amma Eye Care"
                fill
                className="object-cover"
                sizes="208px"
              />
            </div>

            {/* Spectacular image — tilted opposite */}
            <div className="relative h-44 w-36 xl:h-52 xl:w-44 overflow-hidden rounded-3xl shadow-xl"
              style={{ transform: "rotate(2.5deg)" }}>
              <Image
                src="/spectacular.png"
                alt="Spectacles and eyewear"
                fill
                className="object-cover"
                sizes="176px"
              />
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            MOBILE: Centered editorial card stack
            ══════════════════════════════════════ */}
        <div className="flex flex-col lg:hidden py-10 gap-6">

          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3B2E8C]/25 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#3B2E8C] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F22233] animate-pulse" aria-hidden="true" />
              Trusted Eye Care in Hyderabad
            </div>
          </div>

          {/* Heading centered */}
          <h1 className="text-center font-black leading-[1.02] tracking-tight text-[2.6rem]">
            <span className="block text-[#3B2E8C]">Advanced</span>
            <span className="relative inline-block text-[#F22233]">
              Eye Care
              <svg aria-hidden="true" className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none" height="7">
                <path d="M0 6 Q50 0 100 5 Q150 10 200 4" fill="none" stroke="#F22233" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>
            <br />
            <span className="text-[#0D0D0D]">for All Ages</span>
          </h1>

          {/* Three images — horizontal scroll strip */}
          <div className="flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory scrollbar-none -mx-4 px-4">
            <div className="relative h-52 w-44 shrink-0 overflow-hidden rounded-3xl snap-start shadow-lg">
              <Image src="/clinic.png" alt="Amma Eye Care Hospital clinic" fill className="object-cover" sizes="176px" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B2E8C]/50 via-transparent to-transparent" />
              {/* Doctors chip */}
              <div className="absolute bottom-3 left-2 right-2 flex items-center gap-1.5 rounded-xl bg-black/40 px-2.5 py-1.5 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-green-400 shrink-0" />
                <div>
                  <p className="text-[9px] font-bold text-white leading-none">Doctors Available</p>
                  <p className="text-[8px] text-white/55 mt-0.5">Mon – Sat, 9am – 7pm</p>
                </div>
              </div>
            </div>
            <div className="relative h-52 w-44 shrink-0 overflow-hidden rounded-3xl snap-start shadow-lg">
              <Image src="/exam.png" alt="Eye examination at Amma Eye Care" fill className="object-cover" sizes="176px" />
            </div>
            <div className="relative h-52 w-44 shrink-0 overflow-hidden rounded-3xl snap-start shadow-lg">
              <Image src="/spectacular.png" alt="Spectacles and eyewear" fill className="object-cover" sizes="176px" />
            </div>
          </div>

          {/* Description */}
          <p className="text-center text-sm leading-relaxed text-slate-600 max-w-sm mx-auto">
            From routine check-ups to advanced surgeries, experience world-class
            eye care with our expert team of ophthalmologists.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 rounded-2xl border border-[#3B2E8C]/10 bg-white px-4 py-3.5 shadow-sm">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#3B2E8C]/10">
                <Eye className="h-4 w-4 text-[#3B2E8C]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-lg font-black text-[#0D0D0D] leading-none">20k+</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Happy Patients</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-[#F22233]/10 bg-white px-4 py-3.5 shadow-sm">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F22233]/10">
                <ShieldCheck className="h-4 w-4 text-[#F22233]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-lg font-black text-[#0D0D0D] leading-none">500+</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Reviews</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <Link
              href="/appointment"
              className="flex items-center justify-center rounded-2xl bg-[#3B2E8C] py-4 text-sm font-bold text-white shadow-lg shadow-[#3B2E8C]/25 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B2E8C]"
            >
              Book Appointment
            </Link>
            <Link
              href="/video-consultation"
              className="flex items-center justify-center rounded-2xl border-2 border-[#3B2E8C]/20 bg-white py-4 text-sm font-bold text-[#3B2E8C] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B2E8C]"
            >
              Video Consultation
            </Link>
          </div>
        </div>

      </div>

      <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}