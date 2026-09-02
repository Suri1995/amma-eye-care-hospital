"use client"

import { useState } from "react"
import { INSURANCE_PARTNERS } from "@/lib/InsurancePartners"
import { InsuranceCard } from "./InsuranceCard"

export function InsuranceDirectory() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredInsurances = INSURANCE_PARTNERS.filter((insurance) =>
    insurance.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section className="section bg-muted/40" aria-labelledby="insurance-heading">
      <div className="container max-w-7xl">
        <div className="mb-6 flex flex-col flex-wrap items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 id="insurance-heading" className="text-2xl font-extrabold text-primary md:text-[28px]">
              Supported Insurances / TPA
            </h2>
          </div>

          <div className="w-full md:ml-auto md:w-auto">
            <div className="relative w-full md:w-[320px]">
              <label htmlFor="insuranceSearch" className="sr-only">
                Search insurance
              </label>
              <input
                id="insuranceSearch"
                type="text"
                placeholder="Search insurance..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-11 w-full rounded-lg border border-input bg-card px-3.5 pr-11 text-sm font-semibold outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <span
                className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path
                    d="M10.5 18.5a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20 20l-3.5-3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {filteredInsurances.length === 0 && (
          <p
            className="my-4 text-center font-bold text-muted-foreground"
            role="status"
            aria-live="polite"
          >
            No matching insurance found.
          </p>
        )}

        <ul
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Insurance partners list"
        >
          {filteredInsurances.map((insurance) => (
            <InsuranceCard key={insurance} name={insurance} />
          ))}
        </ul>
      </div>
    </section>
  )
}