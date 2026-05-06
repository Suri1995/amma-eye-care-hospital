import Link from "next/link"

export default function DoctorsHero() {
  return (
    <section 
      className="py-14 md:py-16"
      style={{
        backgroundImage: "radial-gradient(352.28% 126.05% at 23.26% 0, #a5f2f0 23.48%, #ddf9b6 100%)"
      }}
    >
      <div className="container mx-auto px-4">
        <nav aria-label="Breadcrumb" className="flex justify-center mb-4">
          <ol 
            className="inline-flex items-center gap-0 bg-[#dff3ff] border border-[#bfe7ff] rounded-full overflow-hidden"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <li className="px-3.5 py-2" itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
              <Link href="/" className="text-[15px] font-bold text-[#1e3a8a] hover:underline" itemProp="item">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>

            <li className="w-px h-[22px] bg-[#1e3a8a]/20" />

            <li className="bg-white border-2 border-black rounded-full m-1 px-3.5 py-1.5"
              itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
              <span className="text-[15px] font-bold text-[#1e3a8a]" itemProp="name">
                Doctors
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-[44px] font-extrabold text-[#1e3a8a] text-center tracking-tight leading-tight">
          Our <span className="text-[#b8860b]">Doctors</span>
        </h1>

        <p className="mt-2.5 max-w-[860px] mx-auto text-[#526B8C] text-base text-center">
          Choose a specialist and book your appointment. You can also view full doctor profile.
        </p>
      </div>
    </section>
  )
}