"use client"

import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "./ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"

const testimonials = [
  {
    name: "Sunita Reddy",
    initials: "SR",
    content: "I came here with my cataract problem and it was solved in a single visit only. Patient friendly, hygienic environment, reasonable price. I advise people who are suffering with eye problems to consult Dr. Amma.",
    rating: 5,
    treatment: "Cataract Surgery",
  },
  {
    name: "Prince Anil Varma",
    initials: "PA",
    content: "Extremely professional, knowledgeable, and always takes time to answer all of my questions thoroughly. Besides, every appointment is on time. Highly recommended!",
    rating: 5,
    treatment: "Eye Examination",
  },
  {
    name: "Lakshmi Prasad",
    initials: "LP",
    content: "Got my LASIK done here. The team transformed my confidence. Highly recommend! No more glasses after 15 years. Life changing experience!",
    rating: 5,
    treatment: "LASIK Surgery",
  },
  {
    name: "Ravi Teja Kumar",
    initials: "RT",
    content: "The cataract surgery procedure was smooth and the results are outstanding. Feels completely natural! Thank you team for giving me clear vision.",
    rating: 5,
    treatment: "Cataract Surgery",
  },
  {
    name: "Sunita Menon",
    initials: "SM",
    content: "My daughter&apos;s squint treatment was handled with so much care. Excellent results and friendly staff throughout the entire journey.",
    rating: 5,
    treatment: "Pediatric Care",
  },
  {
    name: "Kiran Babu",
    initials: "KB",
    content: "Very thorough check-up and diagnosis. The clinic is spotless and the staff is incredibly professional. Best eye care experience I&apos;ve had!",
    rating: 5,
    treatment: "Eye Examination",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [cardWidth, setCardWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Calculate card width and visible cards based on screen size
  useEffect(() => {
    const updateDimensions = () => {
      const mobile = window.innerWidth < 640 // sm breakpoint
      setIsMobile(mobile)
      
      if (scrollRef.current) {
        // Force a reflow to get accurate dimensions
        setTimeout(() => {
          if (scrollRef.current) {
            const firstCard = scrollRef.current.querySelector('[data-card]') as HTMLElement
            if (firstCard) {
              // Get the actual width including margins
              const cardWidthValue = firstCard.offsetWidth
              const gap = mobile ? 16 : 24 // gap-4 (16px) for mobile, gap-6 (24px) for desktop
              setCardWidth(cardWidthValue + gap)
            }
          }
        }, 50)
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current && cardWidth > 0) {
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <section id="testimonials" className="bg-white py-7 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-12 gap-4">
          <div className="max-w-xl">
            <span className="inline-block mb-3 sm:mb-4 px-4 py-1.5 rounded-full bg-[#F2B035]/10 text-[#F2B035] text-xs sm:text-sm font-semibold">
              Testimonials
            </span>
            <h2 className="mb-2 sm:mb-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              What Our <span className="text-[#F22233]">Patients Say</span>
            </h2>
            <p className="text-sm sm:text-lg text-gray-600">
              Hear from our satisfied patients about their experience with us.
            </p>
          </div>
          
          {/* Navigation arrows - Desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-[#3B2E8C] text-[#3B2E8C] hover:bg-[#3B2E8C] hover:text-white disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-[#3B2E8C] text-[#3B2E8C] hover:bg-[#3B2E8C] hover:text-white disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory md:pt-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                data-card
                className="shrink-0 snap-start group relative overflow-hidden border-0 bg-linear-to-br from-gray-50 to-white shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                style={{ 
                  scrollSnapAlign: 'start',
                  // For desktop: exactly 1/3 of container width minus gaps
                  // For mobile: full width
                  width: !isMobile ? 'calc((100% - 48px) / 3)' : '100%', // 48px = 2 gaps of 24px (gap-6)
                  minWidth: !isMobile ? 'auto' : '280px',
                }}
              >
                <CardContent className="p-5 sm:p-6">
                  {/* Quote icon */}
                  <div className="mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-linear-to-br from-[#F22233] to-[#F22233]/80 shadow-lg shadow-[#F22233]/20">
                    <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="mb-3 sm:mb-4 flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-[#F2B035] text-[#F2B035]" />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500 font-medium">{testimonial.rating}.0</span>
                  </div>

                  {/* Content */}
                  <p className="mb-5 sm:mb-6 text-sm sm:text-base text-gray-700 leading-relaxed line-clamp-4">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 sm:gap-4 border-t border-gray-100 pt-4 sm:pt-5">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-linear-to-br from-[#3B2E8C] to-[#1F5AA6] text-sm sm:text-base font-bold text-white shadow-lg">
                      {testimonial.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-sm sm:text-base truncate">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-[#F22233] font-medium">{testimonial.treatment}</div>
                    </div>
                  </div>
                </CardContent>
                
                {/* Decorative corner */}
                <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-[#F22233]/5 group-hover:bg-[#F22233]/10 transition-colors" />
                <div className="absolute -right-4 -top-4 h-8 w-8 rounded-full bg-[#3B2E8C]/5 group-hover:bg-[#3B2E8C]/10 transition-colors" />
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation arrows - Mobile */}
        <div className="flex sm:hidden items-center justify-center gap-3 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="h-10 w-10 rounded-full border-2 border-[#3B2E8C] text-[#3B2E8C] hover:bg-[#3B2E8C] hover:text-white disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="h-10 w-10 rounded-full border-2 border-[#3B2E8C] text-[#3B2E8C] hover:bg-[#3B2E8C] hover:text-white disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}