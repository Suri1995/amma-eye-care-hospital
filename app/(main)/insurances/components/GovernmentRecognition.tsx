const FACTS = [
  { label: "Proceedings No.", value: "5051/P-1/2026" },
  { label: "Order date", value: "15 July 2026" },
  { label: "Recognized specialty", value: "Ophthalmology" },
  { label: "Valid through", value: "14 July 2029" },
]

const ELIGIBLE_CATEGORIES = [
  "State Government employees",
  "Retired employees and pensioners",
  "M.L.As. and Ex-M.L.As.",
  "Dependents of the above categories",
]

const HIGHLIGHT_COMMITMENTS = [
  {
    title: "White card / BPL patients",
    detail:
      "Free inpatient treatment to a minimum of 5% of bed strength for white card holders and those below the poverty line.",
  },
  {
    title: "S.C. / S.T. / B.C. students",
    detail:
      "Free treatment to students of S.C., S.T. and B.C. residential schools, S.T. ashram schools, S.T. hostels, G.V.V.K. schools and Maabadi schools.",
  },
  {
    title: "Monthly health camps",
    detail:
      "A health camp is conducted once a month across Pocharamral (Havelighanapuram mandal) and Venkatapur (Tekmal mandal, Medak district), as per the hospital's MOU.",
  },
]

const HIGHLIGHT_NOTES = [
  "Charges follow the CGHS package rates prescribed by the Government of India (or lower private-hospital rates, whichever applies), as adopted in G.O.Ms. No. 74, HM&FW (K1) Dept., dated 15.03.2005.",
  "Applicable rates are displayed at the reception counter and notice board.",
  "Medical bills filed under EHS or company payment schemes are not reimbursable under this recognition.",
]

const SUBJECT_TEXT =
  "DME – TGIMA Rules, 1972 – New Recognition of M/s Amma Eye Hospital, Sy. No. 79, 80, 85 & 86, Sahed Nagar, Chintalkunta, LB Nagar, Saroornagar, RR District – 500070 as referral hospital for the purpose of Medical Treatment to the State Government Employees, Retired, Pensioners and their dependents, M.L.As., Ex. M.L.As. and other categories of persons as per rules – Orders – Issued."

const ORDER_INTRO =
  "In exercise of the powers delegated vide reference 1st & 2nd cited, the Director of Medical Education, Telangana, Hyderabad is pleased to accord New Recognition of M/s Amma Eye Hospital, Sy. No. 79, 80, 85 & 86, Sahed Nagar, Chintalkunta, LB Nagar, Saroornagar, RR District – 500070 as referral hospital for Ophthalmology specialties to the categories mentioned in the subject, on reimbursement basis under the following conditions (as in‑patients & out‑patients)."

const REFERENCES = [
  "G.O.Ms. No. 162, HM&FW (K.I) Dept., dt. 23.05.2005.",
  "G.O.Ms. No. 477, HM&FW (K.I) Dept., dt. 30.08.2005.",
  "Inspection report from the Superintendent, GDC&H, Hyderabad vide Rc. No. 942/GDC&H/2026, dt. 30.06.2026.",
]

const ALL_CONDITIONS = [
  "The Hospital should give free treatment to white card holders or those below the poverty line (BPL) to a minimum of 5% of bed strength (for inpatient services).",
  "The Hospital should give free medical treatment to students of S.C. / S.T. / B.C. Residential Schools, S.T. Ashram Schools, S.T. Hostels, G.V.V.K. Schools and Maabadi Schools.",
  "The Hospital authorities should display information about the treatment within the hospital premises.",
  "The Hospital should provide better medical and health services, including diagnostic services, by conducting health camps once a month in the two villages named in the M.O.U. — Pocharamral (V), Havelighanapuram (M) and Venkatapur (V), Tekmal (M), Medak (D). At the time of renewal, the hospital must submit the list of camps conducted, with camp dates, area names, and the list of persons who attended along with their contact numbers.",
  "The Hospital should submit a monthly return of free treatment in the prescribed format.",
  "The Hospital should charge for all medical, surgical and diagnostic services under this scheme as per the package rates prescribed by the Government of India, Ministry of Health & Family Welfare, for CGHS, Hyderabad — as adopted by the State Government in G.O.Ms. No. 74, HM&FW (K1) Dept., dated 15.03.2005 — or as may be prescribed by the State Government or the Director of Medical Education from time to time. The Director of Medical Education / scrutinizing authority shall verify that charges levied by the hospital match these rates before certifying the net admissible amount; where the hospital's rates are lower than the CGHS / Government rates, the lower rate shall be accepted for scrutiny and payment.",
  "The Hospital should display its rates / charges at the reception counter or on the notice board.",
  "The Hospital should pay Rs. 30,000/- (Rupees Thirty Thousand only) towards the inspection fee every year.",
  "All other guidelines mentioned in the references should be followed scrupulously.",
  "Medical bills filed under EHS or Company Payment schemes are not reimbursable under this recognition.",
  "This permission is liable for cancellation — including de-recognition and initiation of criminal action as per law — if the hospital fails to provide treatment to State Government Employees, Retired Employees and their dependants as stipulated, violates the conditions mentioned herein, or indulges in irregularities such as excess or bogus claims, cheating the patient or Government, or any unlawful activity. Such action follows fifteen (15) days' notice to the hospital and consideration of any representation offered.",
  "These orders are valid from 15 July 2026 to 14 July 2029.",
  "All scrutinizing officers should follow these guidelines when admitting bills.",
]

const DISTRIBUTION = [
  "The Director, M/s Amma Eye Hospital, Sy. No. 79, 80, 85 & 86, Sahed Nagar, Chintalkunta, LB Nagar, Saroornagar, RR District – 500070",
  "All the District Treasury Officers in the State.",
  "Copy to Stock file.",
]

const CLAUSE_LETTERS = ["a", "b", "c", "d", "e", "f"]
const NOTE_NUMERALS = ["i", "ii", "iii", "iv", "v", "vi"]

/** Laurel-and-eye seal — the single bold flourish in the section. */
function RecognitionSeal({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
      <circle cx="48" cy="48" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <circle
        cx="48" cy="48" r="39"
        fill="none" stroke="currentColor" strokeWidth="1"
        strokeOpacity="0.55" strokeDasharray="0.5 4.5" strokeLinecap="round"
      />
      <g stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.8" fill="none" strokeLinecap="round">
        <path d="M23 61c-6-9-6-22 2-33" />
        <path d="M24.5 55l-6.5-1.8M23.5 47.5l-7-0.8M24.5 40l-6.5 1.4M28 33.5l-6 3" />
        <path d="M73 61c6-9 6-22-2-33" />
        <path d="M71.5 55l6.5-1.8M72.5 47.5l7-0.8M71.5 40l6.5 1.4M68 33.5l6 3" />
      </g>
      <path d="M27 48c6-11 36-11 42 0-6 11-36 11-42 0Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="48" cy="48" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="48" cy="48" r="2.6" fill="currentColor" />
    </svg>
  )
}

/** Fine engine-turned line texture, the way security paper is printed. */
function GuillochePattern({ id }: { id: string }) {
  return (
    <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden="true">
      <defs>
        <pattern id={id} width="34" height="34" patternUnits="userSpaceOnUse" patternTransform="rotate(12)">
          <path d="M0 17 Q8.5 4 17 17 T34 17" fill="none" stroke="white" strokeWidth="0.6" />
          <path d="M0 28 Q8.5 15 17 28 T34 28" fill="none" stroke="white" strokeWidth="0.6" />
          <path d="M0 6 Q8.5 -7 17 6 T34 6" fill="none" stroke="white" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

/** Small crest marking the seam between the letterhead and the register. */
function SeamCrest() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="absolute bottom-0 left-1/2 h-7 w-7 -translate-x-1/2 translate-y-1/2 text-[var(--brand-teal)] md:h-8 md:w-8"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="22" height="22" rx="3" fill="var(--card, white)" stroke="currentColor" strokeWidth="1.4" transform="rotate(45 20 20)" />
      <circle cx="20" cy="20" r="3" fill="currentColor" />
    </svg>
  )
}

/** Small chevron that flips when the parent <details> is open. */
function DisclosureChevron() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4 flex-shrink-0 text-[var(--brand-teal)] transition-transform duration-200 group-open:rotate-180"
      aria-hidden="true"
    >
      <path d="M5 7.5 10 13 15 7.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * Government (DME) recognition — a certificate panel up top for quick
 * scanning, with a collapsible register beneath holding the complete
 * text of the order: subject, references, all thirteen conditions,
 * signatory and distribution list.
 */
export function GovernmentRecognition() {
  return (
    <section className="section" aria-labelledby="recognition-heading">
      <div className="container max-w-7xl">
        <div className="rounded-[30px] border border-border bg-card p-2 shadow-[0_30px_70px_-25px_rgba(15,23,42,0.25)]">
          {/* gilt seam */}
          <div className="rounded-[25px] bg-gradient-to-br from-amber-300/60 via-border/40 to-amber-300/60 p-px">
            <div className="relative overflow-hidden rounded-[24px] border border-border/60 bg-card">
              {/* Letterhead */}
              <div className="relative overflow-hidden bg-gradient-to-br from-primary to-[var(--brand-blue-light)] px-6 py-14 text-center text-primary-foreground md:px-12 md:py-20">
                <GuillochePattern id="recognition-guilloche" />

                <svg className="absolute left-5 top-5 h-8 w-8 text-white/25 md:left-8 md:top-8" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M2 14V2h12" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M2 20V2h18" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
                <svg className="absolute right-5 top-5 h-8 w-8 rotate-90 text-white/25 md:right-8 md:top-8" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M2 14V2h12" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M2 20V2h18" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>

                <div className="relative">
                  <RecognitionSeal className="mx-auto h-16 w-16 text-white/85 md:h-20 md:w-20" />

                  <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-3 text-[13px] font-medium text-white/75">
                    <span className="h-px flex-1 bg-white/25" aria-hidden="true" />
                    <span>Directorate of Medical Education, Telangana</span>
                    <span className="h-px flex-1 bg-white/25" aria-hidden="true" />
                  </div>
                  <p className="mt-2 text-xs text-white/55">
                    Presented by Dr. A. Narendra Kumar, M.S., M.Ch. — Director of Medical Education
                  </p>

                  <h2
                    id="recognition-heading"
                    className="mx-auto mt-5 font-serif text-2xl font-bold leading-tight tracking-tight md:text-[2.5rem]"
                  >
                    Recognized Referral Hospital for Ophthalmology
                  </h2>
                  <span className="mx-auto mt-4 block h-px w-16 bg-amber-300/70" aria-hidden="true" />
                  <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/80 md:text-base">
                    Amma Eye Hospital is recognized under TGIMA Rules, 1972 for the
                    medical treatment of State Government employees, pensioners,
                    MLAs, ex-MLAs and their dependents.
                  </p>
                </div>

                <SeamCrest />
              </div>

              {/* Key facts strip */}
              <dl className="grid grid-cols-2 divide-x divide-y divide-border border-b border-border sm:grid-cols-4 sm:divide-y-0">
                {FACTS.map((fact) => (
                  <div key={fact.label} className="px-6 py-8 text-center">
                    <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                    <dd className="mt-2 font-serif text-lg font-semibold tabular-nums text-primary md:text-xl">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Eligibility + highlighted commitments */}
              <div className="relative grid grid-cols-1 gap-10 border-b border-border px-6 py-12 md:grid-cols-2 md:px-12 md:py-14">
                <RecognitionSeal className="pointer-events-none absolute -right-10 -top-10 hidden h-72 w-72 text-foreground opacity-[0.03] md:block" />

                <div className="relative">
                  <h3 className="mb-4 font-serif text-lg font-bold text-foreground">
                    Who this recognition covers
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    Eligible patients can access ophthalmology treatment on a
                    reimbursement basis under the applicable government rules.
                  </p>
                  <ul className="divide-y divide-border/70" role="list">
                    {ELIGIBLE_CATEGORIES.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-secondary/40"
                      >
                        <span
                          className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-[var(--brand-teal)] text-[10px] font-bold text-[var(--brand-teal)]"
                          aria-hidden="true"
                        >
                          ✓
                        </span>
                        <span className="text-[15px] font-medium text-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative">
                  <h3 className="mb-4 font-serif text-lg font-bold text-foreground">
                    Free treatment commitments
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    As a condition of recognition, the hospital also provides
                    free treatment to the following groups.
                  </p>
                  <div className="space-y-5">
                    {HIGHLIGHT_COMMITMENTS.map((item, i) => (
                      <div key={item.title} className="flex gap-3">
                        <span className="font-serif text-sm font-semibold text-[var(--brand-teal)]">
                          ({CLAUSE_LETTERS[i]})
                        </span>
                        <div>
                          <h4 className="text-[15px] font-bold text-foreground">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Before-your-visit quick notes */}
              <div className="border-b border-border bg-accent/5 px-6 py-9 md:px-12 md:py-10">
                <div className="rounded-xl border border-dashed border-border bg-card/70 px-5 py-6 md:px-7">
                  <h3 className="mb-3 text-[15px] font-bold text-foreground">
                    Before your visit
                  </h3>
                  <ul className="space-y-2.5" role="list">
                    {HIGHLIGHT_NOTES.map((note, i) => (
                      <li key={note} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        <span className="flex-shrink-0 font-medium text-foreground/70">
                          ({NOTE_NUMERALS[i]})
                        </span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Complete order — collapsed by default, full text on open */}
              <details className="group px-6 py-2 md:px-12">
                <summary
                  className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 [&::-webkit-details-marker]:hidden"
                >
                  <span>
                    <span className="block text-[15px] font-bold text-foreground">
                      Read the complete recognition order
                    </span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">
                      Full text — subject, references, all 13 conditions and signatory
                    </span>
                  </span>
                  <DisclosureChevron />
                </summary>

                <div
                  className="relative -mx-6 overflow-hidden md:rounded-2xl border border-border  bg-secondary/20 px-4 pb-10 pt-8 md:-mx-12 md:px-12"
                >
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                    Subject
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground">
                    {SUBJECT_TEXT}
                  </p>

                  <p className="mt-8 text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                    References
                  </p>
                  <ol className="mt-2 space-y-1.5">
                    {REFERENCES.map((ref, i) => (
                      <li key={ref} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="flex-shrink-0 tabular-nums text-foreground/60">{i + 1}.</span>
                        <span>{ref}</span>
                      </li>
                    ))}
                  </ol>

                  <p className="mt-8 font-serif text-[15px] italic leading-relaxed text-foreground/90">
                    {ORDER_INTRO}
                  </p>

                  <ol className="mt-8 space-y-6 md:columns-2 md:gap-x-12 md:space-y-0">
                    {ALL_CONDITIONS.map((condition, i) => (
                      <li key={condition} className="flex gap-3 break-inside-avoid-column pb-6 md:pb-0">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-[var(--brand-teal)] font-serif text-xs font-semibold text-[var(--brand-teal)]">
                          {i + 1}
                        </span>
                        <p className="text-sm leading-relaxed text-foreground/90">{condition}</p>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-12 flex flex-col items-start justify-between gap-8 border-t border-dashed border-border pt-8 md:flex-row md:items-end">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                        Distribution
                      </p>
                      <ul className="mt-2 max-w-md space-y-1.5">
                        {DISTRIBUTION.map((line) => (
                          <li key={line} className="text-xs leading-relaxed text-muted-foreground">
                            {line}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--brand-teal)]/40 px-4 py-1.5 text-xs font-medium text-[var(--brand-teal)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)]" aria-hidden="true" />
                        Attested — for Director of Medical Education
                      </div>
                    </div>

                    <div className="text-left md:text-right">
                      <p className="font-serif text-xl italic text-foreground">
                        Dr. A. Narendra Kumar
                      </p>
                      <span className="mt-1 block h-px w-40 bg-border md:ml-auto" aria-hidden="true" />
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        Director of Medical Education
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}