import { TestimonialSlider } from "@/components/testimonial-slider"

export function TestimonialsSection() {
  return (
    <section
      className="relative py-16 md:py-20 bg-[#f8fafc]"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">

          <div>
            <p className="text-xs font-semibold tracking-widest text-[#1e3a8a] uppercase mb-2">
              Testimonials
            </p>

            <h2
              id="testimonials-heading"
              className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
            >
              What Our Patients Say
            </h2>
          </div>

        </div>

        {/* Slider */}
        <TestimonialSlider />

      </div>
    </section>
  )
}