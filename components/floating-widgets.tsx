"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import CallWidget from "@/components/call-widget"
import WhatsAppWidget from "@/components/whatsapp-widget"

type ActiveWidget = "whatsapp" | "call" | null

/**
 * Single fixed-position anchor for both floating widgets, and the single
 * source of truth for which one (if either) is open.
 *
 * Three responsibilities:
 * 1. Auto-open WhatsApp on every page load AND every client-side
 *    navigation — this component lives in the root layout, which Next.js
 *    keeps mounted across route changes, so a plain "run once on mount"
 *    effect only fired on the very first load. Watching `usePathname()`
 *    and re-running the effect whenever it changes re-fires this on every
 *    navigation too, and force-opens WhatsApp even if Call was open.
 * 2. Mutual exclusivity — opening one widget closes the other. Both
 *    WhatsAppWidget and CallWidget are fully controlled: they hold no
 *    open/closed state of their own, they just render what `active` says
 *    and call back up (onOpen/onToggle/onClose) on user interaction.
 * 3. Stacking — `flex-direction: column-reverse` anchors the first child
 *    (WhatsAppWidget) at the bottom and lays CallWidget out directly
 *    above whatever height it currently is (closed button vs. full open
 *    panel), so they never overlap regardless of which one is open.
 */
export default function FloatingWidgets() {
  const [active, setActive] = useState<ActiveWidget>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Runs on first mount (covers full page load / reload) AND every time
    // `pathname` changes (covers client-side navigation to another page).
    // Force-opens WhatsApp regardless of what was open before — this is
    // what closes the Call widget automatically if it happened to be open
    // when the visitor navigated.
    const timer = setTimeout(() => {
      setActive("whatsapp")
    }, 700)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div className="fixed bottom-16 right-6 md:bottom-6 md:right-6 z-50 flex flex-col-reverse items-end gap-3">
      <WhatsAppWidget
        open={active === "whatsapp"}
        onOpen={() => setActive("whatsapp")}
        onClose={() => setActive((current) => (current === "whatsapp" ? null : current))}
      />
      <CallWidget
        open={active === "call"}
        onToggle={() => setActive((current) => (current === "call" ? null : "call"))}
        onClose={() => setActive((current) => (current === "call" ? null : current))}
      />
    </div>
  )
}