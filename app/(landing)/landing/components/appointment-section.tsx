"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

const locations = [
  {
    branch: "Branch 1 – Main Road",
    subtitle: "Primary Eye Care Centre",
    hospital: "Amma Eye Care Hospital",
    phones: ["+91 1234 567 890", "+91 9876 543 210"],
    email: "info@ammaeyecare.com",
    address: ["Opp. General Hospital, Main Road", "Medical District – 500001"],
    hours: ["Mon – Sat: 10:30 AM – 8:00 PM", "Sunday: 10:30 AM – 1:00 PM"],
    mapUrl: "https://www.google.com/maps?q=Amma+Eye+Care+Main+Road",
    headerGradient: "from-[#3B2E8C] to-[#1F5AA6]",
    btnColor: "bg-[#3B2E8C] hover:bg-[#2d2270]",
    iconColor: "text-[#3B2E8C]",
    iconBg: "bg-[#3B2E8C]/8",
  },
  {
    branch: "Branch 2 – City Center",
    subtitle: "Advanced Eye Care Unit",
    hospital: "Amma Eye Care Hospital",
    phones: ["+91 2345 678 901", "+91 8765 432 109"],
    email: "citycenter@ammaeyecare.com",
    address: ["2nd Floor, City Center Mall", "Abids, Hyderabad – 500001"],
    hours: ["Mon – Sat: 10:30 AM – 8:00 PM", "Sunday: 10:30 AM – 1:00 PM"],
    mapUrl: "https://www.google.com/maps?q=Amma+Eye+Care+City+Center",
    headerGradient: "from-[#F22233] to-[#b5161f]",
    btnColor: "bg-[#F22233] hover:bg-[#d91e2c]",
    iconColor: "text-[#F22233]",
    iconBg: "bg-[#F22233]/8",
  },
]

export function AppointmentSection() {
  return (
    <section id="contact" className="bg-white py-7 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mx-auto mb-10 sm:mb-16 max-w-2xl text-center">
          <span className="inline-block mb-3 sm:mb-4 px-4 py-1.5 rounded-full bg-[#F22233]/10 text-[#F22233] text-xs sm:text-sm font-semibold">
            Our Locations
          </span>
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Find <span className="text-[#F22233]">Us</span> Near You
          </h2>
          <p className="text-sm sm:text-lg text-gray-600">
            Two convenient locations to serve you better
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {locations.map((loc) => (
            <div key={loc.branch} className="overflow-hidden rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50">
              {/* Card Header */}
              <div className={`bg-linear-to-r ${loc.headerGradient} px-6 py-5 flex items-center gap-4`}>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{loc.branch}</h3>
                  <p className="text-sm text-white/80">{loc.subtitle}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="divide-y divide-gray-100 px-6 py-4 space-y-0">
                {/* Hospital Name */}
                <div className="py-3">
                  <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1">Hospital</p>
                  <p className="text-sm font-bold text-gray-900">{loc.hospital}</p>
                </div>

                {/* Phone */}
                <div className="py-3 flex gap-3 items-start">
                  <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${loc.iconBg}`}>
                    <Phone className={`h-4 w-4 ${loc.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1">Phone</p>
                    {loc.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-sm text-gray-700 hover:text-[#F22233] transition-colors">{p}</a>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="py-3 flex gap-3 items-start">
                  <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${loc.iconBg}`}>
                    <Mail className={`h-4 w-4 ${loc.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1">Email</p>
                    <a href={`mailto:${loc.email}`} className="text-sm text-gray-700 hover:text-[#F22233] transition-colors">{loc.email}</a>
                  </div>
                </div>

                {/* Address */}
                <div className="py-3 flex gap-3 items-start">
                  <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${loc.iconBg}`}>
                    <MapPin className={`h-4 w-4 ${loc.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1">Address</p>
                    {loc.address.map((line) => (
                      <p key={line} className="text-sm text-gray-700">{line}</p>
                    ))}
                  </div>
                </div>

                {/* Hours */}
                <div className="py-3 flex gap-3 items-start">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50">
                    <Clock className="h-4 w-4 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1">Hours</p>
                    {loc.hours.map((h) => (
                      <p key={h} className="text-sm text-gray-700">{h}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direction Button */}
              <div className="px-6 pb-6">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full h-11 rounded-xl text-white text-sm font-semibold ${loc.btnColor} transition-all duration-300 hover:scale-[1.02] shadow-lg`}
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}