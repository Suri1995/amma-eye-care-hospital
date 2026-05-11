import {
  Award,
  Heart,
  Target,
  Users,
} from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description:
      "Every treatment plan is tailored to ensure comfort, trust, and personalized attention.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    description:
      "We maintain the highest standards in diagnostics, surgery, and patient outcomes.",
  },
  {
    icon: Users,
    title: "Compassionate Service",
    description:
      "Our team believes in treating every patient with empathy, dignity, and respect.",
  },
  {
    icon: Target,
    title: "Advanced Technology",
    description:
      "We invest continuously in modern ophthalmic equipment and innovation.",
  },
]

export default function AboutValues() {
  return (
    <section className="bg-[#f8fbff] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#1e3a8a] md:text-5xl">
            Our Core Values
          </h2>

          <p className="mt-4 text-[#526B8C]">
            The principles that define our commitment to exceptional eye care.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {values.map((value, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-[#dbeafe] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="mb-5 inline-flex rounded-2xl bg-blue-50 p-4 text-[#1e3a8a] transition-all duration-300 group-hover:scale-110">
                <value.icon className="h-7 w-7" />
              </div>

              <h3 className="text-xl font-bold text-[#1e3a8a]">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#526B8C]">
                {value.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}