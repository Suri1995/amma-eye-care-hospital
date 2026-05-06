import Link from "next/link"

export function InsuranceNotice() {
  return (
    <section className="py-12 bg-primary/5" aria-labelledby="insurance-heading">
      <div className="container max-w-7xl">
        <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 shrink-0">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>

            <div className="flex-1">
              <h2 id="insurance-heading" className="font-bold text-xl mb-2">
                Cashless Facility Available
              </h2>
              <p className="text-muted-foreground">
                We accept all major insurance providers. Most treatments and procedures are covered
                under cashless facility for your convenience. Check our{" "}
                <Link href="/insurances" className="text-primary hover:underline font-medium">
                  accepted insurances
                </Link>.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90"
            >
              Book Appointment
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}