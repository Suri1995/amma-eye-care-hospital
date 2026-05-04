import { TestimonialSlider } from "@/components/testimonial-slider"

export function TestimonialsSection() {
  return (
    <section 
      className="py-16 md:py-20"
      style={{ backgroundImage: "linear-gradient(90deg, #dcf5ff, rgba(220, 245, 255, 0.8))" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-10">
          Client Testimonials
        </h2>
        <TestimonialSlider />
      </div>
    </section>
  )
}