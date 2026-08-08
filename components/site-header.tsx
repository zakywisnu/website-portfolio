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
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-6">
        <Link
          className="group flex shrink-0 items-center gap-3 rounded-full py-1 pr-2 text-sm font-medium text-ink"
          href="/"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-surface font-mono text-[11px] tracking-[0.14em] text-ink transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
            {profile.shortName}
          </span>
          <span className="hidden text-sm tracking-[0.04em] text-ink-muted transition-colors duration-200 group-hover:text-ink sm:inline">
            {profile.name}
          </span>
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
