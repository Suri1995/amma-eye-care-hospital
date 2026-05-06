export default function ContactMap() {
  return (
    <div className="mt-8">
      <div className="overflow-hidden rounded-2xl border border-[#e6edf6] shadow-sm">
        {/* Header strip */}
        <div className="flex items-center gap-3 border-b border-[#e6edf6] bg-white px-5 py-3.5">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[8px] bg-[#e6f1fb]">
            <svg
              width="15" height="15"
              viewBox="0 0 15 15" fill="none"
              aria-hidden="true"
            >
              <path
                d="M7.5 1C5.29 1 3.5 2.9 3.5 5.2c0 3.2 4 8.8 4 8.8s4-5.6 4-8.8C11.5 2.9 9.71 1 7.5 1z"
                stroke="#185fa5" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
              />
              <circle cx="7.5" cy="5.2" r="1.4" stroke="#185fa5" strokeWidth="1.2"/>
            </svg>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-[#0c2a5e]">Our Location</p>
            <p className="text-[11.5px] text-[#526b8c]">
              Amma Eye Care Hospital · Hyderabad, Telangana
            </p>
          </div>
        </div>

        {/* Map iframe */}
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3!2d78.4!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="380"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Amma Eye Care Hospital location on Google Maps"
            aria-label="Google map showing Amma Eye Care Hospital in Hyderabad, Telangana"
          />
        </div>
      </div>
    </div>
  )
}