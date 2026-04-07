import Link from "next/link"

import { profile } from "@/lib/site-data"

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[rgba(88,64,42,0.16)] bg-[rgba(255,250,242,0.55)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-stone-700 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-stone-900">{profile.name}</p>
          <p>{profile.role}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a className="transition hover:text-[#31443a]" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <Link className="transition hover:text-[#31443a]" href={profile.linkedin} target="_blank">
            LinkedIn
          </Link>
          <Link className="transition hover:text-[#31443a]" href={profile.github} target="_blank">
            GitHub
          </Link>
          <Link className="transition hover:text-[#31443a]" href={profile.resumeHref} target="_blank">
            Resume
          </Link>
        </div>
      </div>
    </footer>
  )
}
