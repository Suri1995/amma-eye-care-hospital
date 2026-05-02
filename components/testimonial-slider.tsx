"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    image: "/testimonial-1.jpg",
    rating: 5,
    text: "Excellent experience at Amma Eye Care Hospital. Dr. Aruna Rani is very professional and caring. My cataract surgery was smooth and painless. Highly recommend!",
    procedure: "Cataract Surgery"
  },
  {
    name: "Priya Sharma",
    image: "/testimonial-2.jpg",
    rating: 5,
    text: "Got my LASIK done here and it was the best decision. The staff is friendly and the technology they use is top-notch. Now I can see clearly without glasses!",
    procedure: "LASIK Surgery"
  },
  {
    name: "Mohammed Ali",
    image: "/testimonial-3.jpg",
    rating: 5,
    text: "My daughter's eye checkup was handled with so much care. The pediatric team is wonderful with children. Very clean and modern facility.",
    procedure: "Children's Eye Care"
  },
  {
    name: "Lakshmi Devi",
    image: "/testimonial-4.jpg",
    rating: 5,
    text: "The doctors detected my glaucoma early and started treatment immediately. Regular follow-ups and excellent care. Thank you Amma Eye Care!",
    procedure: "Glaucoma Treatment"
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, nextSlide])

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="w-full flex-shrink-0 px-4"
              aria-hidden={currentIndex !== index}
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-[#1e3a8a]/20">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-[#1e3a8a]">{testimonial.procedure}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6" role="tablist">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index ? "bg-[#1e3a8a]" : "bg-[#1e3a8a]/30"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-selected={currentIndex === index}
            role="tab"
          />
        ))}
      </div>
    </div>
  )
}
