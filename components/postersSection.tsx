"use client";

import Image from "next/image";

const POSTERS = [
  { src: "/poster-1.webp", alt: "Poster 1" },
  { src: "/poster-2.webp", alt: "Poster 2" },
  { src: "/poster-3.webp", alt: "Poster 3" },
  { src: "/poster-4.webp", alt: "Poster 4" },
  { src: "/poster-5.webp", alt: "Poster 5" },
];

export default function PostersSection() {
  const items = [...POSTERS, ...POSTERS];

  return (
    <section
      aria-label="Amma Eye Care Hospital Posters"
      className="relative py-16 overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#90bff9]"
    >
      {/* Viewport: clip horizontally only, leave vertical room for hover lift */}
      <div
        className="w-full overflow-x-hidden overflow-y-visible py-4 -my-4">
        {/* Scrolling track */}
        <div
          className="marquee-track flex w-max"
          style={{ animation: "marquee 32s linear infinite" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")
          }
        >
          {items.map((poster, i) => (
            <div
              key={i}
              className="group flex-shrink-0 mr-5 sm:mr-6 md:mr-8"
              aria-hidden={i >= POSTERS.length ? true : undefined}
            >
              <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] shadow-lg shadow-black/20 ring-1 ring-white/10 transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-black/30 group-hover:ring-white/30">
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  width={400}
                  height={550}
                  className="h-auto sm:w-[clamp(200px,42vw,450px)] object-cover select-none transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  loading={i < POSTERS.length ? "eager" : "lazy"}
                  draggable={false}
                />
                {/* subtle sheen on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>
    </section>
  );
}