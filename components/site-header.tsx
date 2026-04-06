import Link from "next/link"

import { profile } from "@/lib/site-data"

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/articles", label: "Articles" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-300/80 bg-[rgba(246,241,232,0.92)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link className="flex items-center gap-3 text-sm font-medium text-stone-900" href="/">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-400 bg-[#fffdf9] text-xs tracking-[0.24em] text-stone-800 shadow-sm">
            {profile.shortName}
          </span>
          <span className="hidden text-sm tracking-[0.16em] text-stone-700 sm:inline">Ahmad Zaky Wisnumurti</span>
        </Link>

        <nav className="flex items-center gap-5 text-sm text-stone-700">
          {links.map((link) => (
            <Link key={link.href} className="transition hover:text-[#31443a]" href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link
            className="rounded-full border border-[#31443a] bg-[#31443a] px-4 py-2 font-medium text-stone-50 transition hover:bg-[#27372f]"
            href={profile.resumeHref}
            target="_blank"
          >
            Resume
          </Link>
        </nav>
      </div>
    </header>
  )
}
