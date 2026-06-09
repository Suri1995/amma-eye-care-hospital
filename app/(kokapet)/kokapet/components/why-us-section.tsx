"use client"

import { Clock, Award, Heart, Zap, Users, Shield, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

const features = [
  {
    icon: Clock,
    title: "25+ Years Experience",
    description: "Decades of trusted eye care expertise serving thousands of patients with excellence.",
    color: "text-[#F22233]",
    bgColor: "bg-[#F22233]/10",
    hoverBg: "group-hover:bg-[#F22233]",
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Board-certified specialists with international training across all eye care disciplines.",
    color: "text-[#3B2E8C]",
    bgColor: "bg-[#3B2E8C]/10",
    hoverBg: "group-hover:bg-[#3B2E8C]",
  },
  {
    icon: Zap,
    title: "Advanced Technology",
    description: "State-of-the-art equipment for precise, painless treatments and accurate diagnostics.",
    color: "text-[#1F5AA6]",
    bgColor: "bg-[#1F5AA6]/10",
    hoverBg: "group-hover:bg-[#1F5AA6]",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Customized treatment plans tailored to your unique eye health needs and lifestyle.",
    color: "text-[#F22233]",
    bgColor: "bg-[#F22233]/10",
    hoverBg: "group-hover:bg-[#F22233]",
  },
  {
    icon: Users,
    title: "Patient First",
    description: "Compassionate care in a warm, welcoming environment where you feel at home.",
    color: "text-[#F2B035]",
    bgColor: "bg-[#F2B035]/10",
    hoverBg: "group-hover:bg-[#F2B035]",
  },
  {
    icon: Shield,
    title: "Affordable Pricing",
    description: "Quality eye care at competitive prices with transparent billing and insurance support.",
    color: "text-[#3B2E8C]",
    bgColor: "bg-[#3B2E8C]/10",
    hoverBg: "group-hover:bg-[#3B2E8C]",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="relative bg-linear-to-b from-gray-50 to-white py-7 md:py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#F22233]/20 to-transparent" />
      <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-[#3B2E8C]/5 blur-3xl" />
      <div className="absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-[#F22233]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="mx-auto mb-10 sm:mb-16 max-w-2xl text-center">
          <span className="inline-block mb-3 sm:mb-4 px-4 py-1.5 rounded-full bg-[#F2B035]/10 text-[#F2B035] text-xs sm:text-sm font-semibold">
            Why Choose Us
          </span>
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Why Choose <span className="text-[#F22233]">Amma Eye Care</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-600">
            We combine expertise with empathy to deliver exceptional eye care experiences.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-transparent"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote decoration */}
              <div className="absolute -right-6 -top-6 text-[100px] sm:text-[120px] font-serif text-gray-100/80 select-none leading-none transition-colors group-hover:text-gray-200/80">
                &ldquo;
              </div>
              
              {/* Icon */}
              <div className={`relative mb-5 sm:mb-6 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl ${feature.bgColor} ${feature.hoverBg} transition-all duration-300`}>
                <feature.icon className={`h-6 w-6 sm:h-7 sm:w-7 ${feature.color} group-hover:text-white transition-colors duration-300`} />
              </div>
              
              {/* Content */}
              <h3 className="relative mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#3B2E8C] transition-colors">
                {feature.title}
              </h3>
              <p className="relative text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom border animation */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#F22233] to-[#3B2E8C] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 rounded-2xl bg-linear-to-r from-[#3B2E8C]/5 to-[#F22233]/5 border border-gray-100">
            <p className="text-sm sm:text-base text-gray-700 font-medium text-center sm:text-left">
              Ready to experience the best in eye care?
            </p>
            <Button 
              className="bg-[#F22233] text-white hover:bg-[#d91e2c] shadow-lg shadow-[#F22233]/20 h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
              asChild
            >
              <a href="#contact">
                Book Your Visit
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
