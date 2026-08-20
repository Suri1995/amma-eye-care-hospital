"use client"

import { useEffect, useRef } from "react"
import { Phone, PhoneCall, X } from "lucide-react"

type BranchNumber = {
  tel: string
  display: string
  label: string
}

type Branch = {
  name: string
  numbers: BranchNumber[]
}

const BRANCHES: Branch[] = [
  {
    name: "LB Nagar",
    numbers: [{ tel: "9246446244", display: "92464 46244", label: "Main line" }],
  },
  {
    name: "Kokapet",
    numbers: [{ tel: "9000146244", display: "90001 46244", label: "Main line" }],
  },
]

type CallWidgetProps = {
  /** Controlled from FloatingWidgets so only one widget is open at a time. */
  open: boolean
  onToggle: () => void
  onClose: () => void
}

/**
 * Floating "Call Us" widget. Positioning (fixed/bottom/right/z-index)
 * lives on the shared <FloatingWidgets> wrapper, which also owns the
 * open/closed state — this component just renders what it's told and
 * reports interactions back up, so opening WhatsApp auto-closes this one
 * and vice versa.
 *
 * The branch panel below stays mounted at all times (for a smooth
 * fade/scale transition) but collapses to h-0 while closed so it never
 * reserves extra space in the flex column and throws off the stack.
 */
export default function CallWidget({ open, onToggle, onClose }: CallWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose()
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose()
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [open, onClose])

  return (
    <div ref={containerRef} className="flex flex-col items-end gap-3">
      {/* Expandable branch panel — h-0 when closed so it takes no space */}
      <div
        role="menu"
        aria-hidden={!open}
        className={`w-[300px] max-w-[calc(100vw-3rem)] origin-bottom-right overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-slate-900/20 transition-[opacity,transform] duration-200 ease-out ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none h-0 scale-95 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between bg-gradient-to-r from-[#3B2E8C] to-[#1CA7E0] px-5 py-4">
          <div>
            <p className="text-sm font-extrabold text-secondary">Amma Eye Care</p>
            <p className="text-xs text-white/80">Choose a branch to call</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close call menu"
            className="rounded-full p-1 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col gap-2 p-3">
          {BRANCHES.map((branch) => (
            <div key={branch.name}>
              <p className="px-2 pb-1 text-[11px] font-bold uppercase tracking-wide text-slate-400">
                {branch.name}
              </p>
              <div className="flex flex-col gap-1">
                {branch.numbers.map((number) => (
                  <a
                    key={number.tel}
                    href={`tel:${number.tel}`}
                    role="menuitem"
                    className="group flex items-center gap-3 rounded-xl px-2 py-2 transition-colors duration-150 hover:bg-gradient-to-r hover:from-[#3B2E8C]/8 hover:to-[#1CA7E0]/8"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3B2E8C] to-[#1CA7E0] text-white shadow-md shadow-[#3B2E8C]/25 transition-transform duration-150 group-hover:scale-105">
                      <PhoneCall className="size-4" aria-hidden="true" />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="text-sm font-semibold tracking-wide text-slate-800">
                        {number.display}
                      </span>
                      <span className="text-[11px] text-slate-400">{number.label}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trigger button */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-label={open ? "Close call menu" : "Call us"}
        className="relative flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-[#3B2E8C] to-[#1CA7E0] text-white shadow-xl shadow-[#3B2E8C]/35 transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        {!open && (
          <span
            className="absolute inset-0 animate-ping rounded-full bg-[#3B2E8C]/40"
            aria-hidden="true"
          />
        )}
        {open ? (
          <X className="size-6" aria-hidden="true" />
        ) : (
          <Phone className="size-6" aria-hidden="true" />
        )}
      </button>
    </div>
  )
}