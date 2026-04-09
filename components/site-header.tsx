import Link from "next/link"

import { profile } from "@/lib/site-data"

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/articles", label: "Articles" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(88,64,42,0.16)] bg-[rgba(249,243,232,0.8)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Link className="flex items-center gap-3 text-sm font-medium text-stone-900" href="/">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-400 bg-[#fffdf9] text-xs tracking-[0.24em] text-stone-800 shadow-sm">
            {profile.shortName}
          </span>
          <span className="hidden text-sm tracking-[0.16em] text-stone-700 sm:inline">Ahmad Zaky Wisnumurti</span>
        </Link>

        <nav className="flex w-full items-center justify-between gap-2 text-sm text-stone-700 md:w-auto md:justify-end md:gap-3 lg:gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              className="rounded-full px-2 py-2 text-center transition hover:bg-[rgba(49,68,58,0.08)] hover:text-[#31443a] sm:px-3"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
