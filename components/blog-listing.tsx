import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Calendar, Clock, ShieldCheck, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { blogPosts, type BlogPost } from "@/lib/blog-data"

const topics = ["All"]

export function BlogListing({ post }: { post: BlogPost }) {
  const more = blogPosts.filter((p) => p.slug !== post.slug)

  return (
    <main className="bg-background text-foreground">
      {/* Page header — mirrors the brand's .page-header banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-[#3b82f6] py-16 text-center text-primary-foreground md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 size-72 rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 bottom-0 size-64 rounded-full bg-white/5 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blogs" }]} variant="onDark" className="justify-start" />
          <h1 className="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Blogs
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Trusted advice on cataract care, eye health, and patient experiences — written with
            our ophthalmologists in Hyderabad.
          </p>
        </div>
      </section>

      {/* Topic filters */}
      <section className="section pb-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div className="flex flex-wrap gap-2">
              {topics.map((topic, i) => (
                <Badge
                  key={topic}
                  className={
                    i === 0
                      ? "rounded-full bg-primary px-4 py-1.5 font-medium text-primary-foreground hover:bg-primary"
                      : "rounded-full border border-border bg-secondary px-4 py-1.5 font-medium text-secondary-foreground hover:bg-secondary"
                  }
                >
                  {topic}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{blogPosts.length} article{blogPosts.length !== 1 ? "s" : ""}</p>
          </div>

          {/* Featured post */}
          <Link
            href={`/blogs/${post.slug}`}
            className="card group grid gap-0 overflow-hidden lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-primary shadow-sm">
                <Sparkles className="size-3.5 text-[color:var(--brand-gold)]" />
                Featured Article
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
              <Badge className="w-fit rounded-full bg-secondary px-3 py-1 font-medium text-secondary-foreground hover:bg-secondary">
                {post.category}
              </Badge>
              <h2 className="text-2xl font-bold leading-tight text-foreground md:text-3xl">
                {post.title}
              </h2>
              <p className="leading-7 text-muted-foreground">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-4" />
                  {post.readTime}
                </span>
              </div>
              <span className="btn btn-primary mt-2 w-fit">
                Read full article <ArrowUpRight className="ml-2 size-4" />
              </span>
            </div>
          </Link>

          {/* More posts grid — populates automatically once you add another entry to blogPosts */}
          {more.length > 0 && (
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {more.map((p) => (
                <Link key={p.slug} href={`/blogs/${p.slug}`} className="card group overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-3 p-5">
                    <Badge className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground hover:bg-secondary">
                      {p.category}
                    </Badge>
                    <h3 className="font-semibold leading-snug text-foreground group-hover:text-primary">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {p.date} · {p.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Insurance / trust strip */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-secondary/60 p-8 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="size-6 text-primary" />
              </span>
              <div>
                <p className="font-semibold text-foreground">Cashless facility available</p>
                <p className="text-sm text-muted-foreground">
                  We accept all major insurance providers for eligible treatments.
                </p>
              </div>
            </div>
            <Button asChild variant="outline" className="btn-outline w-fit rounded-lg">
              <Link href="/insurances">View accepted insurances</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="page-header !py-14 md:!py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="!mb-3 !text-2xl md:!text-3xl">Need help choosing a treatment?</h2>
          <p className="mx-auto max-w-xl">
            Our specialists can guide you to the right care. Book an appointment or start a video
            consultation with our expert ophthalmologists.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="btn-gold rounded-lg">
              <Link href="/contact">Book Appointment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-lg border-white/40 bg-transparent text-white hover:bg-white/10"
            >
              <a href="https://wa.me/919246446244" target="_blank" rel="noopener noreferrer">
                Video Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}