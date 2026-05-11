export default function ContactHero() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: "linear-gradient(135deg, #042c53 0%, #0c447c 50%, #185fa5 100%)" }}
      aria-labelledby="contact-hero-heading"
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

      <div className="container relative z-10 max-w-7xl">
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
          id="contact-hero-heading"
          className="mb-3 font-serif text-4xl font-light leading-tight text-white md:text-5xl"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Contact <em className="font-light not-italic" style={{ color: "#85b7eb" }}>Us</em>
        </h1>

        <p className="max-w-lg text-sm leading-relaxed" style={{ color: "#b5d4f4" }}>
          Get in touch with our team. We&apos;re here to answer your questions and
          schedule your visit.
        </p>

        {/* Quick stat chips */}
        <div className="mt-8 flex flex-wrap gap-3" role="list" aria-label="Hospital highlights">
          {[
            { icon: "🕘", text: "Mon–Sat · 8AM–8PM" },
            { icon: "📍", text: "Hyderabad, Telangana" },
            { icon: "📞", text: "+91 92464 46244" },
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
    </section>
  )
}