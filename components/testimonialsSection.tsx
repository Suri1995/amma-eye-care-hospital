import { TestimonialSlider } from "@/components/testimonial-slider"

export function TestimonialsSection() {
  return (
    <section
      className="relative py-16 md:py-20 bg-[#f8fafc]"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#3B2E8C]/20 bg-accent/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            Testimonials
          </div>
          <h2
            id="services-heading"
            className="text-3xl font-black tracking-tight text-primary sm:text-4xl lg:text-5xl"
          >
            What Our Patients Say
          </h2>
          <p className="mt-3 max-w-md text-base text-slate-500">
            Real stories from patients who trusted us with their vision
          </p>
        </div>

        {/* Slider */}
        <TestimonialSlider />

      </div>
    </section>
  )
}