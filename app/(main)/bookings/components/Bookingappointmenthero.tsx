export default function BookAppointmentHero() {
  return (
    <>
      {/* CSS-only animations — GPU-composited (transform only), respects prefers-reduced-motion */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes floatUp {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-8px); }
          }
          @keyframes floatDown {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(8px); }
          }
          .card-float-up {
            animation: floatUp 4s ease-in-out infinite;
          }
          .card-float-down {
            animation: floatDown 4s ease-in-out infinite;
            animation-delay: 2s;
          }
        }
      `}</style>

      <section
        className="relative overflow-hidden py-10 md:py-20"
        style={{ background: "linear-gradient(135deg, #042c53 0%, #0c447c 50%, #185fa5 100%)" }}
        aria-labelledby="book-appointment-hero-heading"
      >
        {/* Decorative rings */}
        <div
          className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-20 left-10 h-44 w-44 rounded-full"
          style={{ border: "1px solid rgba(255,255,255,0.05)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-8 right-32 h-24 w-24 rounded-full"
          style={{ border: "1px solid rgba(133,183,235,0.15)" }}
          aria-hidden="true"
        />

        <div className="container relative z-10 max-w-7xl flex items-center justify-between gap-8">
          {/* Left: text content */}
          <div className="flex-1">
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3" aria-hidden="true">
              <span className="h-px w-6 bg-[#378add]" />
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.15em]"
                style={{ color: "#85b7eb" }}
              >
                Amma Eye Care Hospital
              </span>
            </div>

            <h1
              id="book-appointment-hero-heading"
              className="mb-3 font-serif text-4xl font-light leading-tight text-white md:text-5xl"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Book Your <em className="font-light not-italic" style={{ color: "#85b7eb" }}>Appointment</em>
            </h1>

            <p className="max-w-lg text-sm leading-relaxed" style={{ color: "#b5d4f4" }}>
              Schedule your eye care visit in minutes. Pick a location, choose a time
              that works for you, and our team will confirm your slot shortly.
            </p>

            {/* Quick stat chips */}
            <div className="mt-8 flex flex-wrap gap-3" role="list" aria-label="Booking highlights">
              {[
                { icon: "📍", text: "Kokapet & LB Nagar" },
                { icon: "⏱️", text: "Confirmed within 2–4 hrs" },
                { icon: "🗓️", text: "Morning & afternoon slots" },
              ].map((item) => (
                <div
                  key={item.text}
                  role="listitem"
                  className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "0.5px solid rgba(255,255,255,0.15)",
                    color: "#e6f1fb",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <span aria-hidden="true">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero image with floating cards — visible only from lg (1024px) and above */}
          <div
            className="hidden lg:block flex-shrink-0 relative"
            style={{ width: "330px", height: "330px" }}
          >
            <img
              src="/bookings-hero.webp"
              alt="Book an appointment at Amma Eye Care Hospital"
              width={200}
              height={200}
              className="w-96 object-cover rounded-2xl"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.35)" }}
            />

            {/* Floating card — top-left: "Quick & Easy!" */}
            <div
              className="card-float-up absolute -left-30 top-8 rounded-2xl bg-white px-5 py-4 shadow-xl"
              style={{
                border: "1.5px solid #f5c842",
                minWidth: "140px",
                willChange: "transform",
              }}
              role="note"
              aria-label="Quick and Easy Booking"
            >
              <p className="text-sm font-bold leading-snug text-gray-800">
                <span style={{ color: "#185fa5" }}>Quick</span> &amp; Easy!
              </p>
            </div>

            {/* Floating card — bottom-right: "Same-day Slots" */}
            <div
              className="card-float-down absolute -right-10 bottom-6 rounded-2xl bg-white px-5 py-4 shadow-xl"
              style={{
                border: "1.5px solid #1d9e75",
                minWidth: "150px",
                willChange: "transform",
              }}
              role="note"
              aria-label="Same-day slots available"
            >
              <p className="text-sm font-bold leading-snug text-gray-800">
                <span style={{ color: "#1d9e75" }}>Same-day</span> slots open
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}