"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  Calendar,
  Check,
  Clock,
  HeartPulse,
  MapPin,
  Phone,
  Share2,
  ShieldCheck,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { doctors, disclaimer, blogPosts, type BlogPost, type Doctor } from "@/lib/blog-data"

function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent">
      <div
        className="h-full bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

// Sidebar order is intentionally fixed (Dr. Rohini, then Dr. Omana) rather than
// sorted by experience — update these slugs if the featured doctors change.
const SIDEBAR_DOCTOR_SLUGS = ["dr-rohini-pothireddy", "dr-c-omana-reddy"]

export function BlogDetail({ post }: { post: BlogPost }) {
  const [activeSection, setActiveSection] = useState(post.sections[0]?.heading ?? "")
  const [shareState, setShareState] = useState<"idle" | "copied">("idle")
  const related = blogPosts.filter((p) => p.slug !== post.slug)
  const sidebarDoctors = SIDEBAR_DOCTOR_SLUGS.map((slug) =>
    doctors.find((d) => d.slug === slug)
  ).filter((d): d is Doctor => Boolean(d))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-20% 0px -70% 0px" }
    )
    post.sections.forEach((s) => {
      const el = document.getElementById(s.heading.toLowerCase().replaceAll(" ", "-"))
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [post.sections])

  async function handleShare() {
    // Always share the clean canonical URL — no #anchor.
    const shareUrl = `${window.location.origin}/blogs/${post.slug}`

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: post.title, text: post.excerpt, url: shareUrl })
      } catch {
        // User cancelled the native share sheet — no action needed.
      }
      return
    }

    try {
      await navigator.clipboard.writeText(shareUrl)
      setShareState("copied")
      setTimeout(() => setShareState("idle"), 2000)
    } catch {
      // Clipboard write blocked (e.g. insecure context) — fail silently.
    }
  }

  return (
    <main className="bg-background text-foreground">
      <ReadingProgress />

      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blogs", href: "/blogs" },
              { label: post.title },
            ]}
            className="mb-6"
          />

          <Badge className="rounded-full bg-secondary px-3 py-1 font-medium text-secondary-foreground hover:bg-secondary">
            {post.category}
          </Badge>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">{post.excerpt}</p>
          <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/7] overflow-hidden rounded-xl shadow-sm">
          <Image src={post.image} alt="Cataract surgery care" fill priority className="object-cover" />
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[190px_minmax(0,680px)_1fr] lg:px-8">
        {/* TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-36">
            <p className="text-[18px] font-bold uppercase tracking-wide text-primary">
              In this article
            </p>
            <div className="mt-4 flex flex-col gap-1 border-l border-border">
              {post.sections.map((s) => {
                const id = s.heading.toLowerCase().replaceAll(" ", "-")
                const isActive = activeSection === id
                return (
                  <a
                    key={s.heading}
                    href={`#${id}`}
                    className={`-ml-px border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                      isActive
                        ? "border-primary font-medium text-primary"
                        : "border-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {s.heading}
                  </a>
                )
              })}
            </div>
            <button
              onClick={handleShare}
              className="mt-8 flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"
            >
              {shareState === "copied" ? (
                <Check className="size-4 text-primary" />
              ) : (
                <Share2 className="size-4" />
              )}
              {shareState === "copied" ? "Link copied!" : "Share this article"}
            </button>
          </div>
        </aside>

        {/* Content */}
        <div className="min-w-0">
          {post.sections.map((section, idx) => (
            <section
              key={section.heading}
              id={section.heading.toLowerCase().replaceAll(" ", "-")}
              className="mb-12 scroll-mt-24"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                  {idx + 1}
                </span>
                <h2 className="text-xl font-bold text-foreground md:text-2xl">{section.heading}</h2>
              </div>
              {section.paragraphs?.map((p) => (
                <p key={p} className="mt-4 text-lg leading-8 text-muted-foreground">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-6 grid gap-3 rounded-xl border border-border bg-secondary/40 p-6 text-foreground md:grid-cols-2">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-3 leading-7">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <Card className="rounded-xl border-0 bg-secondary/60 shadow-none">
            <CardContent className="flex gap-4 p-6 md:p-8">
              <HeartPulse className="mt-1 size-5 shrink-0 text-primary" />
              <p className="text-sm leading-7 text-muted-foreground">
                <strong className="text-foreground">A note from our clinicians.</strong> {disclaimer}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-6 lg:pl-4">
          <div className="card p-6">
            <h2 className="text-xl font-bold text-foreground">Meet our doctors</h2>

            <div className="mt-5 flex flex-col gap-5">
              {sidebarDoctors.map((doc) => (
                <div
                  key={doc.slug}
                  className="flex flex-col items-center gap-3 border-t border-border pt-5 text-center first:border-t-0 first:pt-0"
                >
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    width={88}
                    height={88}
                    className="size-20 shrink-0 rounded-full border border-border object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold leading-tight text-foreground">{doc.name}</p>
                    <p className="mt-1 text-sm leading-5 text-muted-foreground">{doc.specialty}</p>
                    <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                      <span className="rounded-full bg-secondary px-2 py-0.5 font-medium text-secondary-foreground">
                        {doc.experience}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="size-3" />
                        {doc.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <Link
                href="/doctors"
                className="group inline-flex items-center gap-1.5 rounded-xl border border-primary/25 bg-primary/5 px-5 py-2 text-xs font-semibold tracking-wide text-primary shadow-sm transition-all duration-300 hover:border-accent hover:bg-accent hover:text-primary-foreground hover:shadow-md hover:shadow-primary/25"
              >
                View all {doctors.length} doctors
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <Button asChild className="btn-primary mt-4 w-full rounded-lg">
              <Link href="/contact">
                Book Appointment <ArrowUpRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-primary to-[#3b82f6] p-6 text-primary-foreground">
            <p className="flex items-center gap-2 text-sm font-medium">
              <MapPin className="size-4" /> Kokapet · LB Nagar
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-white/80">
              <Phone className="size-4" /> Video consultation available on WhatsApp
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-white/80">
              <ShieldCheck className="size-4" /> Cashless facility with major insurers
            </p>
            <Button
              asChild
              className="mt-5 w-full rounded-lg bg-white text-primary hover:bg-white/90"
            >
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </aside>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-border bg-secondary/40 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Read next
            </p>
            <div className="mt-6 grid gap-8 md:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} href={`/blogs/${p.slug}`} className="card group overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold leading-snug text-foreground group-hover:text-primary">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="page-header !py-14 md:!py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="!mb-3 !text-2xl md:!text-3xl">Questions about your vision?</h2>
          <p className="mx-auto max-w-xl">We are here to help — book a consultation today.</p>
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
                Video Consult
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}