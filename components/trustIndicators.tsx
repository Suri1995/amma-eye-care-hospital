import Image from "next/image"

const trustIndicators = [
  {
    icon: "/specialized-services-icon.jpg",
    title: "25+ Specialized Services",
    description: "Comprehensive eye care solutions",
  },
  {
    icon: "/advanced-technology-icon.png",
    title: "Advanced Technology",
    description: "Latest diagnostic & surgical equipment",
  },
  {
    icon: "/insurance-accepted-icon.jpg",
    title: "Insurance Accepted",
    description: "Most major insurance plans covered",
  },
  {
    icon: "/expert-ophthalmologists-icon.png",
    title: "Expert Ophthalmologists",
    description: "Experienced & caring specialists",
  },
]

export function TrustIndicators() {
  return (
    <section className="py-12" aria-labelledby="trust-heading">
      <h2 id="trust-heading" className="sr-only">Why Choose Us</h2>
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustIndicators.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white border-2 border-primary/50 ">
              <Image src={item.icon} alt="" width={48} height={48} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}