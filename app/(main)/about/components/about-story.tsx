import Image from "next/image"

export default function AboutStory() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl px-4 sm:px-6 lg:px-8 items-center gap-14 px-4 lg:grid-cols-2">

        {/* Content */}
        <div>

          <div className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-[#1e3a8a]">
            Our Journey
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#1e3a8a] md:text-5xl">
            Building Trust Through Exceptional Vision Care
          </h2>

          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-[#526B8C] md:text-base">
            <p>
              Amma Eye Care Hospital was founded with a mission to provide
              accessible, ethical, and advanced eye care services for every
              patient.
            </p>

            <p>
              Over the years, we have combined compassionate healthcare with
              modern ophthalmic technology to deliver outstanding treatment
              outcomes and patient experiences.
            </p>

            <p>
              Today, our hospital continues to serve patients with comprehensive
              diagnostic, medical, and surgical eye care solutions under one
              roof.
            </p>
          </div>

        </div>

        {/* Image */}
        <div className="relative">

          <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-[#1e3a8a]/20 to-blue-200 blur-2xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-white/30 shadow-2xl">
            <Image
              src="/about-image.webp"
              alt="Amma Eye Care Hospital"
              width={800}
              height={600}
              className="h-[420px] w-full object-cover"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  )
}