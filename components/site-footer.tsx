import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { profile } from "@/lib/site-data"

const elsewhere = [
  { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
  { label: "LinkedIn", href: profile.linkedin, value: "ahmadzakyw", external: true },
  { label: "GitHub", href: profile.github, value: "zakywisnu", external: true },
]

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-surface-sunken/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <div>
            <p className="card-title text-2xl">{profile.name}</p>
            <p className="mt-2 text-sm text-ink-muted">
              {profile.role} &middot; {profile.location}
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-ink-muted">{profile.availability}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 md:gap-8">
            {elsewhere.map((item) => (
              <div key={item.label}>
                <p className="eyebrow">{item.label}</p>
                <Link
                  className="link-quiet mt-2 inline-flex min-h-11 items-center gap-1 text-sm text-ink"
                  href={item.href}
                  {...(item.external ? { rel: "noreferrer", target: "_blank" } : {})}
                >
                  {item.value}
                  {item.external ? <ArrowUpRight aria-hidden className="h-3.5 w-3.5" /> : null}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <hr className="editorial-rule my-10" />

        <div className="flex flex-col gap-2 text-xs text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with Next.js. Written in MDX.</p>
        </div>
      </div>
    </footer>
  )
}
