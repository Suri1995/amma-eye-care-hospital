"use client";

import { useEffect, useRef, useState } from "react";

// ── Types ──────────────────────────────────────────────────────────────────
interface BranchData {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  address: string;
  phone: string;
  hours: string;
  directionsUrl: string;
  embedUrl: string;
  copyAddress: string;
}

// ── Branch data ────────────────────────────────────────────────────────────
const branches: BranchData[] = [
  {
    id: "lb-nagar",
    label: "LB Nagar Branch",
    title: "LB Nagar",
    subtitle: "Amma Eye Care Hospital · Hyderabad",
    address: "Chintalkunta, L.B. Nagar, Vanasthalipuram, Hyder...",
    phone: "92464 46244",
    hours: "Mon – Sat : 8 AM – 8 PM  Sun : 10 AM - 4 PM",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Amma+Eye+Care+Hospital+Chintalkunta+LB+Nagar+Hyderabad",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.9!2d78.5556240!3d17.3412647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98a906c50f4f%3A0x27f26d05063b4290!2sAmma+Eye+Care+Hospital!5e0!3m2!1sen!2sin!4v1750000000001!5m2!1sen!2sin",
    copyAddress:
      "Amma Eye Care Hospital, Chintalkunta Check post, Hyderabad - Vijayawada Hwy, near Vanasthalipuram, L. B. Nagar, Hyderabad, Telangana 500070",
  },
  {
    id: "kokapet",
    label: "Kokapet Branch",
    title: "Kokapet",
    subtitle: "Amma Eye Care Hospital · Hyderabad",
    address: "Suite 420 & 421, 4th Floor, Kokapet Terminal, Gandipet & Shakarpally Junction, Kokapet, Narsingi, Hyderabad - 500075",
    phone: "90001 96244 / 90002 46244",
    hours: "Mon – Sat : 8 AM – 8 PM  Sun : 10 AM - 1 PM",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=17.3850525,78.3291999",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.2!2d78.3266250!3d17.3850576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95ad43832651%3A0x30abd9d08f4baec6!2sAmma+Eye+Care+Hospital!5e0!3m2!1sen!2sin!4v1750000000002!5m2!1sen!2sin",
    copyAddress: "Amma Eye Care Hospital, Suite 420 & 421, 4th Floor, Kokapet Terminal, Gandipet & Shakarpally Junction, Kokapet, Narsingi, Hyderabad - 500075",
}
];

// ── Single map card — pixel-perfect match to the screenshot ───────────────
const MapCard = ({ branch }: { branch: BranchData }) => {
  const iframeRef = useRef<HTMLDivElement>(null);
  const [mapVisible, setMapVisible] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  // Lazy-load iframe only when card enters viewport
  useEffect(() => {
    const el = iframeRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(branch.copyAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback — silent fail
    }
  };

  return (
    <article
      aria-label={`${branch.label} map and contact details`}
      className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-md border border-gray-200 w-full"
    >
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-3">
          {/* Pin icon badge */}
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, #042c53 0%, #185fa5 100%)" }}
            aria-hidden="true"
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 leading-tight">{branch.title}</p>
            <p className="text-xs text-gray-500 leading-tight">{branch.subtitle}</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            aria-label={copied ? "Address copied" : `Copy ${branch.label} address`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-gray-700 hover:bg-gray-50 active:scale-95 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-600">Copied</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </>
            )}
          </button>

          <a
            href={branch.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Get directions to ${branch.label}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all duration-150 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-blue-600"
            style={{ background: "linear-gradient(135deg, #042c53 0%, #185fa5 100%)" }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Directions
          </a>
        </div>
      </div>

      {/* ── Map iframe ── */}
      <div
        ref={iframeRef}
        className="relative w-full bg-gray-100"
        style={{ height: "360px" }}
        role="region"
        aria-label={`Interactive map for ${branch.label}`}
      >
        {/* Loading skeleton */}
        {!mapLoaded && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gray-50 z-10"
            aria-hidden="true"
          >
            <div className="relative w-10 h-10">
              <div
                className="absolute inset-0 rounded-full border-2 border-t-blue-600 border-gray-200 animate-spin"
                style={{ animationDuration: "0.8s" }}
              />
            </div>
            <p className="text-xs text-gray-400">Loading map…</p>
          </div>
        )}

        {mapVisible && (
          <iframe
            title={`${branch.label} location on Google Maps`}
            src={branch.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapLoaded(true)}
          />
        )}

        {/* "Open full map" overlay — bottom-right, visible on hover */}
        <a
          href={branch.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open full map for ${branch.label}`}
          className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:shadow-md hover:text-blue-700 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Open full map
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* ── Bottom info strip — 3 columns matching screenshot ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 border-t border-gray-100">
        {/* Address */}
        <div className="flex items-start gap-2.5 px-2 py-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-gray-50 border border-gray-100" aria-hidden="true">
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 mb-0.5">Address</p>
            <p className="text-xs text-gray-700 leading-snug line-clamp-2">{branch.address}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-2.5 px-2 py-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-gray-50 border border-gray-100" aria-hidden="true">
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 mb-0.5">Phone</p>
            <a
              href={`tel:${branch.phone.replace(/\s|\//g, "").replace("+91", "+91")}`}
              className="text-xs text-gray-700 hover:text-blue-700 transition-colors focus:outline-none focus:underline leading-snug block"
            >
              {branch.phone}
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-2.5 px-2 py-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-gray-50 border border-gray-100" aria-hidden="true">
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 mb-0.5">Hours</p>
            <p className="text-xs text-gray-700 leading-snug">{branch.hours}</p>
          </div>
        </div>
      </div>

      {/* ── Footer — "Powered by Google Maps" + "Open full map" ── */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border-t border-gray-100">
        <p className="text-[10px] text-gray-400">Powered by Google Maps</p>
        <a
          href={branch.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open full map for ${branch.label} in Google Maps`}
          className="flex items-center gap-1 text-[11px] font-medium text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 rounded"
        >
          Open full map
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </article>
  );
};

// ── Exported section — drop this in wherever the map lives ────────────────
export default function LocationMaps() {
  return (
    <section
      aria-labelledby="locations-heading"
      className="w-full py-7 sm:py-12"
    >
      <h2 id="locations-heading" className="sr-only">Our Locations</h2>

      {/* Side-by-side ≥768px · stacked <768px */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto">
        {branches.map((branch) => (
          <MapCard key={branch.id} branch={branch} />
        ))}
      </div>
    </section>
  );
}