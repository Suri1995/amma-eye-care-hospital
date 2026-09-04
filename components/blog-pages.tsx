import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, HeartPulse, MapPin, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { doctors, disclaimer, type BlogPost } from "@/lib/blog-data"

const topics = ["Cataract care", "Patient stories", "Eye health", "Our doctors"]

export function BlogListing({ post }: { post: BlogPost }) {
  return (
    <main className="bg-[#f7f5f0] text-[#172329]">
      <section className="border-b border-[#d9ded9] bg-[#f7f5f0]">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-12 md:px-10 md:pb-24 md:pt-20">
          <div className="flex items-end justify-between gap-8">
            <div className="max-w-3xl">
              <p className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-[#c75c48]"><span className="size-2 rounded-full bg-[#c75c48]" /> The Amma journal</p>
              <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-8xl">A clearer view<br /><em className="text-[#c75c48]">of eye health.</em></h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#5f6b6a]">Thoughtful guidance, real patient perspectives, and practical answers from the people who care for your vision.</p>
            </div>
            <div className="hidden pb-2 text-right font-mono text-xs uppercase tracking-[0.18em] text-[#75817e] md:block"><p>Since 2004</p><p className="mt-2">Hyderabad, India</p></div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-14">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-5 border-b border-[#d9ded9] pb-5"><div className="flex flex-wrap gap-2">{topics.map((topic, i) => <Badge key={topic} variant={i === 0 ? "default" : "outline"} className="rounded-full px-4 py-2 font-normal">{topic}</Badge>)}</div><p className="font-mono text-xs uppercase tracking-widest text-[#75817e]">01 / Journal</p></div>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
          <Link href={`/blogs/${post.slug}`} className="group relative block overflow-hidden bg-[#1b3434]">
            <div className="relative aspect-[16/10] overflow-hidden"><Image src={post.image} alt="Cataract surgery care at Amma Eye Care Hospitals" fill priority className="object-cover transition duration-700 group-hover:scale-105" /></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#102525]/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-2xl p-6 text-white md:p-10"><p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[#f0a18e]">Featured story · {post.category}</p><h2 className="font-serif text-3xl leading-tight md:text-5xl">{post.title}</h2><div className="mt-6 flex items-center gap-5 text-sm text-white/75"><span>{post.date}</span><span>{post.readTime}</span><ArrowUpRight className="ml-auto size-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div></div>
          </Link>
          <div className="flex flex-col gap-7 lg:pl-4"><p className="font-serif text-2xl leading-relaxed text-[#304442]">“Good care begins with good information.”</p><p className="leading-7 text-[#687471]">Our journal makes complex eye care easier to understand, so you can make decisions with calm and confidence.</p><div className="border-t border-[#d9ded9] pt-6"><p className="font-mono text-xs uppercase tracking-widest text-[#75817e]">Inside this story</p><ul className="mt-4 flex flex-col gap-3 text-sm text-[#4e5d5a]"><li>Understanding cataracts</li><li>What treatment involves</li><li>Finding the right specialist</li></ul></div><Button asChild variant="outline" className="w-fit rounded-full"><Link href={`/blogs/${post.slug}`}>Read the full story <ArrowUpRight data-icon="inline-end" /></Link></Button></div>
        </div>
      </section>
      <section className="border-t border-[#d9ded9] bg-[#e8eeea] px-5 py-14 md:px-10 md:py-20"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-[#c75c48]">Coming soon</p><h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight md:text-5xl">More ways to care for your sight.</h2></div><p className="max-w-sm leading-7 text-[#62706c]">We are building a growing library of practical advice from our doctors and the patients we serve.</p></div></section>
    </main>
  )
}

export function BlogDetail({ post }: { post: BlogPost }) {
  return <main className="bg-[#f7f5f0] text-[#172329]"><div className="mx-auto max-w-7xl px-5 pb-8 pt-10 md:px-10 md:pt-16"><Link href="/blogs" className="font-mono text-xs uppercase tracking-[0.18em] text-[#c75c48]">← Back to the journal</Link><div className="mt-14 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"><div><Badge className="rounded-full bg-[#e8eeea] px-4 py-2 font-normal text-[#315551]">{post.category}</Badge><h1 className="mt-6 max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] md:text-7xl">{post.title}</h1></div><div className="flex flex-col gap-5 border-l border-[#d9ded9] pl-6 text-[#687471] md:pl-10"><p className="max-w-md text-lg leading-8">{post.excerpt}</p><div className="flex items-center gap-5 font-mono text-xs uppercase tracking-widest"><span>{post.date}</span><span>·</span><span>{post.readTime}</span></div></div></div></div><div className="mx-auto max-w-7xl px-5 md:px-10"><div className="relative aspect-[16/7] overflow-hidden bg-[#1b3434]"><Image src={post.image} alt="Cataract surgery care" fill priority className="object-cover" /></div></div><article className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[160px_minmax(0,680px)_1fr]"><aside className="hidden lg:block"><div className="sticky top-8"><p className="font-mono text-xs uppercase tracking-widest text-[#75817e]">In this article</p><div className="mt-5 flex flex-col gap-3 text-sm text-[#687471]">{post.sections.slice(0, 4).map((s) => <a key={s.heading} href={`#${s.heading.toLowerCase().replaceAll(" ", "-")}`} className="hover:text-[#c75c48]">{s.heading}</a>)}</div><Share2 className="mt-12 size-5 text-[#75817e]" /></div></aside><div className="min-w-0">{post.sections.map((section) => <section key={section.heading} id={section.heading.toLowerCase().replaceAll(" ", "-")} className="mb-12 scroll-mt-8"><h2 className="font-serif text-3xl leading-tight md:text-4xl">{section.heading}</h2>{section.paragraphs?.map((p) => <p key={p} className="mt-5 text-lg leading-9 text-[#53625f]">{p}</p>)}{section.bullets && <ul className="mt-6 grid gap-3 border-y border-[#d9ded9] py-6 text-[#53625f] md:grid-cols-2">{section.bullets.map((item) => <li key={item} className="flex gap-3 leading-7"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-[#c75c48]" />{item}</li>)}</ul>}</section>)}<Card className="rounded-none border-0 bg-[#e8eeea] shadow-none"><CardContent className="flex gap-4 p-6 md:p-8"><HeartPulse className="mt-1 size-5 shrink-0 text-[#c75c48]" /><p className="text-sm leading-7 text-[#53625f]"><strong className="text-[#172329]">A note from our clinicians.</strong> {disclaimer}</p></CardContent></Card></div><aside className="flex flex-col gap-8 lg:pl-8"><div><p className="font-mono text-xs uppercase tracking-widest text-[#75817e]">Care, in person</p><h2 className="mt-4 font-serif text-3xl">Meet our doctors</h2></div>{doctors.map(([name, bio, image]) => <div key={name} className="flex gap-4 border-t border-[#d9ded9] pt-5"><Image src={image} alt={name} width={58} height={58} className="size-14 rounded-full object-cover grayscale" /><div><p className="font-medium">{name}</p><p className="mt-1 text-sm leading-6 text-[#687471]">{bio}</p></div></div>)}<div className="border-t border-[#d9ded9] pt-6"><p className="flex items-center gap-2 text-sm font-medium"><MapPin className="size-4 text-[#c75c48]" /> Kokapet · LB Nagar</p><Button asChild className="mt-5 rounded-full bg-[#c75c48] hover:bg-[#a94738]"><Link href="/contact">Book a consultation <ArrowUpRight data-icon="inline-end" /></Link></Button></div></aside></article><div className="border-t border-[#d9ded9] px-5 py-10 text-center md:px-10"><p className="font-serif text-2xl text-[#304442]">Questions about your vision? We are here to help.</p></div></main>
}
