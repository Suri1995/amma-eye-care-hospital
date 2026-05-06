import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Users, Target } from "lucide-react"

const values = [
  { icon: Heart, title: "Patient-Centered Care", description: "Every decision we make prioritizes your comfort..." },
  { icon: Award, title: "Clinical Excellence", description: "Our team maintains the highest standards..." },
  { icon: Users, title: "Compassionate Service", description: "We treat every patient like family..." },
  { icon: Target, title: "Innovation & Technology", description: "Investing in cutting-edge equipment..." },
]

export default function AboutValues() {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <value.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}