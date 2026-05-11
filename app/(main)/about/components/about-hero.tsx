export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eff6ff] via-white to-[#dbeafe] py-16 md:py-24">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#1e3a8a]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#3b82f6]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 text-center">

        <div className="inline-flex items-center rounded-full border border-[#1e3a8a]/10 bg-white/80 px-4 py-1 text-sm font-medium text-[#1e3a8a] shadow-sm backdrop-blur">
          Trusted Eye Care Since 2015
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#1e3a8a] md:text-6xl">
          Compassionate Eye Care <br />
          With Advanced Technology
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#526B8C] md:text-xl">
          Amma Eye Care Hospital is dedicated to preserving and enhancing vision
          through advanced ophthalmology, experienced specialists, and
          patient-first care.
        </p>

      </div>
    </section>
  )
}