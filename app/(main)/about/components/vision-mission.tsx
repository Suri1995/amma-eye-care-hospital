import Image from "next/image";

const VisionMission = () => {
  const cards = [
    {
      id: "vision",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ),
      label: "Vision",
      heading: "Right to Sight",
      body: "We believe every individual deserves the gift of clear vision. Our commitment is to make quality eye care accessible, equitable, and empowering for all.",
      color: "primary",
    },
    {
      id: "mission",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5 10.5 7l3.75 3.75L18 6.75M21 12V3h-9M4.5 20.25h15"
          />
        </svg>
      ),
      label: "Mission",
      heading: "To Implement World Class Technology",
      body: "We harness cutting-edge ophthalmic technologies and evidence-based practices to deliver superior eye care outcomes—raising the standard for every patient we serve.",
      color: "accent",
    },
  ];

  const qualityPoints = [
    {
      color: "primary",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
      text: "Provide the highest service quality and care to every patient.",
    },
    {
      color: "accent",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      ),
      text: "Deliver best value in every aspect of patient care.",
    },
    {
      color: "accent",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
      ),
      text: "Educate patients about eye health for informed decision-making.",
    },
    {
      color: "primary",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      ),
      text: "Motivate patients to be active partners in their eye care journey.",
    },
  ];

  return (
    <section
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--background)" }}
      aria-labelledby="vmp-heading"
    >
      <h2 id="vmp-heading" className="sr-only">
        Vision, Mission and Quality Policy
      </h2>

      {/* ── Section header ── */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full border"
          style={{
            color: "var(--primary)",
            borderColor: "var(--primary)",
            backgroundColor: "var(--secondary)",
          }}
        >
          Our Purpose
        </span>

        <h2
          className="text-3xl sm:text-4xl font-bold leading-tight"
          style={{ color: "var(--foreground)" }}
        >
          Guided by clarity,{" "}
          <span style={{ color: "var(--primary)" }}>driven by care</span>
        </h2>

        <p
          className="mt-4 text-lg leading-relaxed"
          style={{ color: "var(--muted-foreground)" }}
        >
          Every decision we make is rooted in a commitment to your sight and
          well-being.
        </p>
      </div>

      {/* ── Vision / Mission cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {cards.map((card) => (
          <article
            key={card.id}
            className="relative overflow-hidden rounded-2xl border flex flex-col gap-5 p-8 transition-shadow hover:shadow-md"
            style={{
              backgroundColor:
                card.color === "primary"
                  ? "var(--secondary)"       /* --secondary: #e3f2fd — the light blue tint */
                  : "var(--card)",
              borderColor: "var(--border)",
            }}
            aria-labelledby={`${card.id}-title`}
          >
            {/* Decorative circle */}
            <span
              className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-10"
              style={{
                backgroundColor:
                  card.color === "primary" ? "var(--primary)" : "var(--accent)",
              }}
              aria-hidden="true"
            />

            {/* Icon box */}
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={
                card.color === "primary"
                  ? {
                      backgroundColor: "var(--primary)",
                      color: "var(--primary-foreground)",
                    }
                  : {
                      backgroundColor: "var(--accent)",
                      color: "var(--accent-foreground)",
                    }
              }
            >
              {card.icon}
            </div>

            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-1"
                style={{
                  color:
                    card.color === "primary" ? "var(--primary)" : "var(--accent)",
                }}
              >
                {card.label}
              </p>
              <h3
                id={`${card.id}-title`}
                className="text-xl sm:text-2xl font-bold leading-snug"
                style={{ color: "var(--foreground)" }}
              >
                {card.heading}
              </h3>
            </div>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              {card.body}
            </p>

            {/* Bottom accent bar */}
            <span
              className="absolute bottom-0 left-0 w-full h-1 rounded-b-2xl"
              style={{
                backgroundColor:
                  card.color === "primary" ? "var(--primary)" : "var(--accent)",
              }}
              aria-hidden="true"
            />
          </article>
        ))}
      </div>

      {/* ── Quality Policy ── */}
      <div
        className="rounded-2xl border overflow-hidden"
        style={{
          backgroundColor: "var(--muted)",
          borderColor: "var(--border)",
        }}
      >
        {/* Header row */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 px-8 pt-8 pb-6 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          {/* Shield icon — solid primary bg */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>
          </div>

          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-0.5"
              style={{ color: "var(--primary)" }}
            >
              Our Commitment
            </p>
            <h3
              className="text-xl sm:text-2xl font-bold"
              style={{ color: "var(--foreground)" }}
            >
              Quality Policy
            </h3>
          </div>
        </div>

        {/* Policy intro */}
        <div className="px-8 pt-6 pb-2">
          <p
            className="text-base leading-relaxed max-w-3xl"
            style={{ color: "var(--muted-foreground)" }}
          >
            We strive to provide the highest service quality and care to our
            patients by committing to deliver the best value in every aspect of
            our work — ensuring solutions that truly make a difference.
          </p>
        </div>

        {/* Points grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-8 py-6" role="list">
          {qualityPoints.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl border px-5 py-4"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <span
                className="mt-0.5 shrink-0"
                style={{
                  color:
                    point.color === "primary" ? "var(--primary)" : "var(--accent)",
                }}
              >
                {point.icon}
              </span>
              <span
                className="text-sm leading-relaxed"
                style={{ color: "var(--card-foreground)" }}
              >
                {point.text}
              </span>
            </li>
          ))}
        </ul>

        {/* Logo footer */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-8 py-6 border-t"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          <Image
            src="/nabh-logo.webp"
            alt="NABH Accreditation logo"
            width={80}
            height={48}
            className="object-contain h-28 w-auto"
            priority={false}
          />
          <div
            className="hidden sm:block h-8 w-px"
            style={{ backgroundColor: "var(--border)" }}
            aria-hidden="true"
          />
          <p
            className="text-xs leading-snug text-center sm:text-left max-w-xs"
            style={{ color: "var(--muted-foreground)" }}
          >
            NABH Accredited · Committed to the highest standards of patient
            safety and quality care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;