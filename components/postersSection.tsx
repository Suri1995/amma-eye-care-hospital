"use client";

import Image from "next/image";

const POSTERS = [
  { src: "/poster1-image.webp",         alt: "Poster 1" },
  { src: "/poster2-image.webp",         alt: "Poster 2" },
  { src: "/poster3-image.webp",         alt: "Poster 3" },
  { src: "/poster4-image.webp",         alt: "Poster 4" },
  { src: "/poster1-english-image.webp", alt: "Poster 1 English" },
  { src: "/poster2-english-image.webp", alt: "Poster 2 English" },
  { src: "/poster3-english-image.webp", alt: "Poster 3 English" },
  { src: "/poster4-english-image.webp", alt: "Poster 4 English" },
];

export default function PostersSection() {
  const items = [...POSTERS, ...POSTERS];

  return (
    <section
      aria-label="Amma Eye Care Hospital Posters"
      className="py-16 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(352.28% 126.05% at 23.26% 0, #a5f2f0 23.48%, #ddf9b6 100%)",
      }}
    >
      {/* Viewport */}
      <div className="w-full overflow-hidden">

        {/* Scrolling track */}
        <div
          className="flex w-max"
          style={{ animation: "marquee 30s linear infinite" }}
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
              className="flex-shrink-0 mr-6"
              aria-hidden={i >= POSTERS.length ? true : undefined}
            >
              <Image
                src={poster.src}
                alt={poster.alt}
                width={400}
                height={550}
                className="w-[450px] max-w-[90vw] h-auto rounded-[32px] object-cover select-none"
                loading={i < POSTERS.length ? "eager" : "lazy"}
                draggable={false}
              />
            </div>
          ))}
        </div>

      </div>

      {/* Keyframe — tiny, injected once, zero runtime cost */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-30%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>
    </section>
  );
}