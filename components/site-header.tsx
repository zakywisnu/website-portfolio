"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { ThemeToggle } from "@/components/theme-toggle"
import { profile } from "@/lib/site-data"

const links = [
  { href: "/#work", label: "Work", match: "/" },
  { href: "/#experience", label: "Experience", match: "/" },
  { href: "/articles", label: "Articles", match: "/articles" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="resume-header sticky top-0 z-50 border-b border-line bg-paper">
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between gap-3 px-5 py-3 sm:px-6">
        <Link
          className="group flex shrink-0 items-center gap-3 rounded-full py-1 pr-2 text-sm font-medium text-ink"
          href="/"
        >
          <svg className="resume-logo" viewBox="0 0 78 32" role="img" aria-label={profile.name}>
            <title>{profile.name}</title>
            <defs><clipPath id="azw-clearspace"><rect width="78" height="32" /></clipPath></defs>
            <g clipPath="url(#azw-clearspace)"><text x="1" y="25" className="resume-logo-letters">{profile.shortName}</text></g>
          </svg>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav aria-label="Main" className="flex items-center">
            {links.map((link) => {
              // Hash links share the home route, so only the exact page match
              // is treated as current — never more than one item at a time.
              const isCurrent = link.href === "/articles" && pathname.startsWith("/articles")

              return (
                <Link
                  aria-current={isCurrent ? "page" : undefined}
                  className={`relative inline-flex min-h-11 items-center rounded-full px-2.5 text-sm transition-colors duration-200 sm:px-3.5 ${
                    isCurrent ? "text-accent" : "text-ink-muted hover:text-ink"
                  }`}
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                  {isCurrent ? (
                    <span aria-hidden className="absolute inset-x-2.5 bottom-1.5 h-px bg-accent sm:inset-x-3.5" />
                  ) : null}
                </Link>
              )
            })}
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
