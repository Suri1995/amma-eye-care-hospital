"use client";
import { useState, useCallback } from "react";

// Extracted directly from the Google Maps URL:
// @17.3412596,78.5581989 — exact coordinates
// place id: ChIJTw_FBqmYuxIRkEI7BgVt8ic (CID 0x27f26d05063b4290)
// Correct embed URL using place coordinates + q parameter for pinpoint accuracy
const EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.7409876543!2d78.5556240!3d17.3412596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98a906c50f4f%3A0x27f26d05063b4290!2sAmma%20Eye%20Care%20Hospital!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin";

const GMAPS_LINK =
  "https://www.google.com/maps/place/Amma+Eye+Care+Hospital/@17.3412596,78.5581989,17z/data=!4m6!3m5!1s0x3bcb98a906c50f4f:0x27f26d05063b4290!8m2!3d17.3412596!4d78.5581989!16s%2Fg%2F11bwhbb2n4";

const DIRECTIONS_LINK =
  "https://www.google.com/maps/dir/?api=1&destination=Amma+Eye+Care+Hospital&destination_place_id=ChIJTw_FBqmYuxIRkEI7BgVt8ic";

const details = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    value: "Chintalkunta, L.B. Nagar, Vanasthalipuram, Hyderabad 500070",
    href: GMAPS_LINK,
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 92464 46244",
    href: "tel:+919246446244",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Hours",
    value: "Mon – Sat : 8 AM – 8 PM Sun : 10 AM - 4 PM",
    href: null,
  },
];

export default function ContactMap() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [copyDone, setCopyDone] = useState(false);

  const handleLoad = useCallback(() => setMapLoaded(true), []);
  const handleError = useCallback(() => setMapError(true), []);

  const copyAddress = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(
        "Amma Eye Care Hospital, Chintalkunta, L.B. Nagar, Vanasthalipuram, Hyderabad 500070"
      );
      setCopyDone(true);
      setTimeout(() => setCopyDone(false), 2000);
    } catch {
      // clipboard not available — silently ignore
    }
  }, []);

  return (
    <div className="mt-8">
      <div className="overflow-hidden rounded-2xl border border-[#e2ebf5] bg-white shadow-md transition-shadow hover:shadow-lg">

        {/* ── Header strip ── */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e2ebf5] bg-gradient-to-r from-[#f0f6ff] to-white px-5 py-4">
          <div className="flex items-center gap-3">
            {/* Pin icon */}
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#185fa5] shadow-sm">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-[13.5px] font-semibold text-[#0c2a5e] leading-tight">Our Location</p>
              <p className="text-[12px] text-[#526b8c]">
                Amma Eye Care Hospital · Hyderabad
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            {/* Copy address */}
            <button
              onClick={copyAddress}
              aria-label={copyDone ? "Address copied" : "Copy address to clipboard"}
              title="Copy address"
              className="flex h-8 items-center gap-1.5 rounded-lg border border-[#d4e3f5] bg-white px-3 text-[12px] font-medium text-[#185fa5] transition-all hover:border-[#185fa5] hover:bg-[#f0f6ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#185fa5] focus-visible:ring-offset-1"
            >
              {copyDone ? (
                <>
                  <svg className="h-3.5 w-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-emerald-600">Copied!</span>
                </>
              ) : (
                <>
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Copy
                </>
              )}
            </button>

            {/* Get directions */}
            <a
              href={DIRECTIONS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions to Amma Eye Care Hospital on Google Maps"
              className="flex h-8 items-center gap-1.5 rounded-lg bg-[#185fa5] px-3 text-[12px] font-medium text-white transition-all hover:bg-[#1251910] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#185fa5] focus-visible:ring-offset-1 hover:bg-[#1251914] hover:opacity-90"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4" />
              </svg>
              Directions
            </a>
          </div>
        </div>

        {/* ── Map frame ── */}
        <div className="relative bg-[#f0f4f8]" style={{ aspectRatio: "16/7", minHeight: "280px" }}>
          {/* Loading skeleton */}
          {!mapLoaded && !mapError && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#f0f6ff]"
              aria-live="polite"
              aria-label="Map loading"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#185fa5]/10 animate-pulse">
                <svg className="h-6 w-6 text-[#185fa5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-[12.5px] text-[#526b8c]">Loading map…</p>
            </div>
          )}

          {/* Error fallback */}
          {mapError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#f8f9fa] p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                <svg className="h-6 w-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
              </div>
              <p className="text-[13px] font-medium text-[#0c2a5e]">Map unavailable</p>
              <a
                href={GMAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12.5px] text-[#185fa5] underline underline-offset-2 hover:text-[#0c2a5e]"
              >
                Open in Google Maps →
              </a>
            </div>
          )}

          <iframe
            src={EMBED_SRC}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block", width: "100%", height: "100%", opacity: mapLoaded ? 1 : 0, transition: "opacity .4s ease" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Amma Eye Care Hospital location on Google Maps"
            aria-label="Interactive Google map showing Amma Eye Care Hospital at Chintalkunta, L.B. Nagar, Hyderabad"
            onLoad={handleLoad}
            onError={handleError}
            allowFullScreen
          />
        </div>

        {/* ── Detail pills row ── */}
        <div className="flex flex-wrap items-stretch gap-0 divide-x divide-[#e2ebf5] border-t border-[#e2ebf5] bg-white">
          {details.map((d) => {
            const inner = (
              <>
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#e6f1fb] text-[#185fa5]">
                  {d.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-[10.5px] font-medium uppercase tracking-wide text-[#8fa8c8]">
                    {d.label}
                  </p>
                  <p className="truncate text-[12.5px] font-medium text-[#0c2a5e] leading-tight">
                    {d.value}
                  </p>
                </div>
              </>
            );

            const cls =
              "flex flex-1 items-center gap-2.5 px-4 py-3 min-w-0 transition-colors" +
              (d.href ? " hover:bg-[#f5f9ff] group focus:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-[#185fa5]" : "");

            return d.href ? (
              <a
                key={d.label}
                href={d.href}
                {...(d.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={`${d.label}: ${d.value}`}
                className={cls}
              >
                {inner}
                {/* External arrow for address link */}
                {d.href.startsWith("http") && (
                  <svg className="ml-auto h-3 w-3 flex-shrink-0 text-[#8fa8c8] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </a>
            ) : (
              <div key={d.label} className={cls}>{inner}</div>
            );
          })}
        </div>

        {/* ── "Open in Google Maps" footer ── */}
        <div className="border-t border-[#e2ebf5] bg-[#f8fbff] px-5 py-2.5 flex items-center justify-between">
          <p className="text-[11.5px] text-[#8fa8c8]">
            Powered by Google Maps
          </p>
          <a
            href={GMAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Amma Eye Care Hospital in Google Maps"
            className="flex items-center gap-1.5 text-[12px] font-medium text-[#185fa5] transition-colors hover:text-[#0c2a5e] focus:outline-none focus-visible:underline"
          >
            Open full map
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
}