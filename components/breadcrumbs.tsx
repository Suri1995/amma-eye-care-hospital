import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export type BreadcrumbItem = {
  label: string
  href?: string
}

export function Breadcrumbs({
  items,
  variant = "default",
  className = "",
}: {
  items: BreadcrumbItem[]
  variant?: "default" | "onDark"
  className?: string
}) {
  const isDark = variant === "onDark"
  const base = isDark ? "text-white/80" : "text-muted-foreground"
  const linkHover = isDark ? "hover:text-white" : "hover:text-primary"
  const current = isDark ? "text-white" : "text-foreground"
  const chevron = isDark ? "text-white/40" : "text-muted-foreground/50"

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-sm ${base} ${className}`}>
      <Link href="/" className={`flex items-center gap-1 transition-colors ${linkHover}`}>
        <Home className="size-3.5" />
        Home
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <ChevronRight className={`size-3.5 shrink-0 ${chevron}`} />
          {item.href ? (
            <Link href={item.href} className={`transition-colors ${linkHover}`}>
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" className={`font-medium ${current}`}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}