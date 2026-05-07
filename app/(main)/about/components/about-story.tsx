import Image from "next/image"

export default function AboutStory() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Story
          </h2>

          <div className="space-y-4 text-[#526B8C] leading-relaxed">
            <p>
              Founded with a vision to make world-class eye care accessible to everyone...
            </p>
            <p>
              Our journey has been guided by a simple principle: every patient deserves the best possible care...
            </p>
            <p>
              Today, we offer a complete range of ophthalmology services...
            </p>
          </div>
        </div>

        <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
          <Image
            src="/clinic.webp"
            alt="Amma Eye Care Hospital interior"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  )
}