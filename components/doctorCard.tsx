import Image from "next/image"
import Link from "next/link"

export default function DoctorCard({ doctor }: any) {
  const getWhatsAppNumber = (location: string) => {
    if (location?.toLowerCase().includes("kokapet")) return "919000246244"
    if (location?.toLowerCase().includes("lb nagar")) return "919246446244"
    return "919246446244"
  }

  const whatsappNumber = getWhatsAppNumber(doctor.location)
  const whatsappUrl = `https://wa.me/${whatsappNumber}`
  const isKokapet = doctor.location?.toLowerCase().includes("kokapet")

  // Branch-specific values
  const branchBg    = isKokapet ? "bg-[#747240]"  : "bg-[#11468C]"
  const branchSolid = isKokapet ? "#747240"        : "#11468C"
  const branchLabel = isKokapet ? "Kokapet"        : "LB Nagar"
  const ringColor   = isKokapet
    ? "rgba(116,114,64,0.30)"
    : "rgba(17,70,140,0.28)"

  return (
    <article
      className={[
        // Shell
        "group relative overflow-hidden rounded-2xl border border-[#e0e8f4]",
        "bg-white shadow-sm",
        // Hover lift — GPU-composited only
        "transition-[box-shadow,transform] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
        "hover:-translate-y-[3px] hover:shadow-[0_8px_32px_rgba(15,37,89,0.13),0_2px_8px_rgba(15,37,89,0.07)]",
        "focus-within:-translate-y-[3px] focus-within:shadow-[0_8px_32px_rgba(15,37,89,0.13),0_2px_8px_rgba(15,37,89,0.07)]",
        // Contain repaints
        "[contain:layout_style_paint]",
      ].join(" ")}
      itemScope
      itemType="https://schema.org/Physician"
      aria-label={`${doctor.name}, ${doctor.specialization}`}
    >
      {/* ── Gradient wash ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg,#fff9f8 0%,#fff3ea 42%,#ede8ff 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Decorative blobs ── */}
      <span
        className="pointer-events-none absolute -right-14 -top-14 z-0 h-44 w-44 rounded-full"
        style={{
          background:
            "radial-gradient(circle,rgba(200,155,42,0.10) 0%,transparent 70%)",
        }}
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -bottom-10 -left-8 z-0 h-36 w-36 rounded-full"
        style={{
          background:
            "radial-gradient(circle,rgba(15,37,89,0.07) 0%,transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Branch badge (animated via global .location-badge) ── */}
      <div
        className={[
          "location-badge",
          "absolute right-3.5 top-3.5 z-10",
          "inline-flex items-center gap-[5px]",
          "rounded-full py-[5px] pl-[10px] pr-[13px]",
          "text-[11px] font-bold uppercase tracking-[0.04em] text-white",
          "shadow-[0_2px_8px_rgba(0,0,0,0.18)]",
          branchBg,
        ].join(" ")}
        role="img"
        aria-label={`Branch: ${branchLabel}`}
      >
        {/* Pin icon */}
        <svg
          width="10"
          height="13"
          viewBox="0 0 11 14"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M5.5 0C2.462 0 0 2.462 0 5.5c0 3.857 5.5 8.5 5.5 8.5S11 9.357 11 5.5C11 2.462 8.538 0 5.5 0Zm0 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
            fill="white"
          />
        </svg>
        {branchLabel}
      </div>

      {/* ── Card inner ── */}
      <div className="relative z-[1] flex flex-col items-center gap-5 p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6 md:gap-7 md:p-7">

        {/* ── Photo ── */}
        <div className="flex-shrink-0" aria-hidden="true">
          {/* Gradient ring around photo */}
          <div
            className="rounded-[14px] p-[3px] shadow-[0_2px_12px_rgba(15,37,89,0.10)]"
            style={{
              background: `linear-gradient(145deg,${ringColor},transparent 60%)`,
            }}
          >
            <Image
              src={doctor.photo}
              alt={`Portrait of ${doctor.name}`}
              width={160}
              height={200}
              itemProp="image"
              priority={false}
              sizes="(max-width: 640px) 130px, 155px"
              className={[
                "block rounded-[11px] object-cover object-top",
                "w-[130px] h-[162px] sm:w-[140px] sm:h-[176px] md:w-[155px] md:h-[194px]",
                "transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
                "group-hover:scale-[1.03]",
              ].join(" ")}
            />
          </div>
        </div>

        {/* ── Content ── */}
        <div className="min-w-0 flex-1 text-center sm:text-left sm:pr-[88px]">

          {/* Name + accent underline */}
          <div className="inline-block sm:block">
            <h3
              className="m-0 text-[clamp(17px,2.5vw,22px)] font-extrabold leading-snug tracking-tight text-[#1e3a8a]"
              itemProp="name"
            >
              {doctor.name}
            </h3>
            {/* Animated accent line — grows on group-hover */}
            <span
              className={[
                "mt-1.5 block h-[3px] rounded-sm opacity-75 mx-auto sm:mx-0",
                "w-10 transition-[width] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
                "group-hover:w-16",
              ].join(" ")}
              style={{ backgroundColor: branchSolid }}
              aria-hidden="true"
            />
          </div>

          {/* Specialization */}
          <p
            className="mt-2 text-[12.5px] font-bold uppercase tracking-[0.06em] text-[#526B8C]"
            itemProp="medicalSpecialty"
          >
            {doctor.specialization}
          </p>

          {/* Qualification */}
          <p className="mt-2.5 text-[13px] leading-relaxed text-[#526B8C]">
            <span className="font-bold text-[#1e3a8a]">Qualification: </span>
            <span itemProp="hasCredential">{doctor.qualification}</span>
          </p>

          {/* Info tags */}
          <ul
            className="mt-3 flex list-none flex-wrap gap-1.5 justify-center sm:justify-start p-0"
            role="list"
            aria-label="Doctor details"
          >
            {/* Experience */}
            <li className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(53,92,157,0.15)] bg-[rgba(53,92,157,0.08)] px-2.5 py-1 text-[11.5px] font-semibold text-[#2B508A]">
              {/* Clock icon */}
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              {doctor.experience}
            </li>
            {/* Languages */}
            <li className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(53,92,157,0.15)] bg-[rgba(53,92,157,0.08)] px-2.5 py-1 text-[11.5px] font-semibold text-[#2B508A]">
              {/* Chat icon */}
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              {doctor.languages}
            </li>
          </ul>

          {/* CTA buttons */}
          <div
            className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start"
            role="group"
            aria-label={`Actions for ${doctor.name}`}
          >
            {/* Know Your Doctor — gold (uses global .btn-gold) */}
            <Link
              href={`/doctors/${doctor.slug}`}
              className={[
                "btn btn-gold",
                "inline-flex items-center gap-1.5 rounded-[9px] px-4 py-[9px]",
                "text-[12.5px] font-bold leading-none",
                "shadow-sm hover:shadow-[0_4px_14px_rgba(184,134,11,0.35)]",
                "transition-[background-color,box-shadow,transform] duration-200 active:scale-[0.97]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8860b] focus-visible:ring-offset-2",
              ].join(" ")}
            >
              Know Your Doctor
            </Link>

            {/* Book Appointment — navy (uses global .btn-primary) */}
            <Link
              href="/contact"
              className={[
                "btn btn-primary",
                "inline-flex items-center gap-1.5 rounded-[9px] px-4 py-[9px]",
                "text-[12.5px] font-bold leading-none",
                "shadow-sm hover:shadow-[0_4px_14px_rgba(30,58,138,0.30)]",
                "transition-[background-color,box-shadow,transform] duration-200 active:scale-[0.97]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a8a] focus-visible:ring-offset-2",
              ].join(" ")}
            >
              Book Appointment
            </Link>

            {/* Video / WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Start WhatsApp video consultation with ${doctor.name}`}
              className={[
                "inline-flex items-center gap-1.5 rounded-[9px] px-4 py-[9px]",
                "text-[12.5px] font-bold leading-none",
                "border-[1.5px] border-[rgba(37,211,102,0.40)] bg-[rgba(37,211,102,0.08)] text-[#25D366]",
                "transition-[background-color,border-color,box-shadow,transform] duration-200",
                "hover:border-[#25D366] hover:bg-[rgba(37,211,102,0.15)] hover:shadow-[0_4px_14px_rgba(37,211,102,0.25)]",
                "active:scale-[0.97]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2",
              ].join(" ")}
            >
              {/* WhatsApp SVG */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Video Consultation
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}