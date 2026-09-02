export function InsuranceCard({ name }: { name: string }) {
  return (
    <li className="card flex items-center gap-3.5 px-5 py-4 hover:-translate-y-0.5">
      <span
        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary"
        aria-hidden="true"
      >
        <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[var(--brand-teal)] text-sm font-black text-white">
          ✓
        </span>
      </span>
      <span className="text-[15px] font-bold leading-snug text-foreground">
        {name}
      </span>
    </li>
  )
}