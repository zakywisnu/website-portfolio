import Link from "next/link"
import { ArrowRight, ArrowUpRight, Mail, MapPin } from "lucide-react"

import { ArticleCard } from "@/components/article-card"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { getRecentArticles } from "@/lib/articles"
import { education, languages, profile, projects, skills, strengths, workExperience } from "@/lib/site-data"

const quickFacts = [
  { label: "Focus", value: "iOS product engineering" },
  { label: "Based in", value: profile.location },
  { label: "Writing", value: "Architecture and production lessons" },
]

export default function HomePage() {
  const recentArticles = getRecentArticles(3)

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="flex-1" id="main">
        {/* ---------------------------------------------------------- Hero */}
        <section className="relative px-5 pb-20 pt-12 sm:px-6 md:pt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_18%_12%,var(--amber-wash),transparent_28%),radial-gradient(circle_at_82%_8%,var(--accent-wash),transparent_24%)]"
          />

          <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.25fr)_20rem] lg:items-start">
            <div>
              <p className="rise-in eyebrow inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-2">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                iOS engineer portfolio
              </p>

              <div className="rise-in rise-in-1 mt-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-subtle">{profile.name}</p>
                <h1 className="display-title mt-4 max-w-[11ch]">Shipping calm, resilient mobile products at scale.</h1>
              </div>

              <div className="rise-in rise-in-2 mt-9 grid gap-8 lg:grid-cols-[minmax(0,1fr)_13rem] lg:items-start">
                <p className="lede">
                  {profile.tagline} I care about the work behind the interface too: architecture, delivery rhythm,
                  product quality, and the small decisions that make teams faster over time.
                </p>
                <div className="border-l border-line pl-5">
                  <p className="eyebrow">Current focus</p>
                  <p className="mt-3 text-sm leading-7 text-ink-muted">{profile.currentFocus}</p>
                </div>
              </div>

              <div className="rise-in rise-in-3 mt-10 flex flex-wrap items-center gap-3">
                <Link className="btn-primary" href="/articles">
                  Read articles
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
                <a className="btn-secondary" href={`mailto:${profile.email}`}>
                  <Mail aria-hidden className="h-4 w-4" />
                  {profile.email}
                </a>
              </div>
            </div>

            {/* Aside is decorative-adjacent context, so it follows the main
                column in the DOM and reads last on a screen reader. */}
            <aside className="rise-in rise-in-4 paper-panel rounded-[var(--radius-panel)] p-6 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <p className="max-w-[16rem] text-sm leading-7 text-ink-muted">
                  Product-minded engineering for teams that need strong foundations without slowing delivery.
                </p>
                <span
                  aria-hidden
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-surface-sunken"
                >
                  <MapPin className="h-4 w-4 text-ink-muted" />
                </span>
              </div>

              <hr className="editorial-rule my-6" />

              <dl className="space-y-5">
                {quickFacts.map((fact) => (
                  <div className="flex items-start justify-between gap-6" key={fact.label}>
                    <dt className="eyebrow">{fact.label}</dt>
                    <dd className="max-w-[11rem] text-right text-sm leading-6 text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 rounded-[var(--radius-card)] border border-line bg-surface-sunken p-5">
                <p className="eyebrow">Availability</p>
                <p className="mt-3 text-sm leading-7 text-ink-muted">{profile.availability}</p>
              </div>
            </aside>
          </div>
        </section>

        {/* ----------------------------------------------------- Strengths */}
        <section aria-label="Strengths" className="mx-auto w-full max-w-6xl px-5 pb-24 sm:px-6">
          <div className="reveal grid gap-4 md:grid-cols-3">
            {strengths.map((strength) => (
              <div className="editorial-card rounded-[var(--radius-panel)] p-6" key={strength.title}>
                <span aria-hidden className="block h-px w-8 bg-accent" />
                <h2 className="card-title mt-5 text-[1.35rem]">{strength.title}</h2>
                <p className="mt-3 text-[0.9375rem] leading-7 text-ink-muted">{strength.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------- Work */}
        <section className="reveal mx-auto w-full max-w-6xl px-5 py-20 sm:px-6" id="work">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_18rem] lg:items-end">
            <div>
              <p className="section-label">Selected work</p>
              <h2 className="section-title">
                A portfolio that explains how the product got better, not just what shipped.
              </h2>
              <p className="section-copy">{profile.intro}</p>
            </div>

            <div className="rounded-[var(--radius-card)] border border-line bg-surface-sunken p-5">
              <p className="eyebrow">Why this format</p>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                I prefer portfolios that show engineering judgment, delivery tradeoffs, and writing, not just
                screenshots.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(17rem,0.7fr)]">
            <div className="paper-panel paper-cut rounded-[var(--radius-panel)] p-7 md:p-10">
              <h3 className="eyebrow">Selected projects</h3>

              <div className="mt-8 space-y-9">
                {projects.map((project) => (
                  <div className="border-t border-line pt-8 first:border-t-0 first:pt-0" key={project.name}>
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="max-w-2xl">
                        <h4 className="card-title text-[1.65rem] md:text-[1.85rem]">{project.name}</h4>
                        <p className="mt-3 text-[0.9375rem] leading-7 text-ink-muted">{project.description}</p>
                      </div>
                      <Link
                        className="link-quiet inline-flex min-h-11 shrink-0 items-center gap-1.5 self-start text-sm font-medium"
                        href={project.link}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="sr-only">Open {project.name}</span>
                        <span aria-hidden>Open</span>
                        <ArrowUpRight aria-hidden className="h-4 w-4" />
                      </Link>
                    </div>

                    <ul className="mt-6 grid gap-2.5 md:grid-cols-2">
                      {project.features.map((feature) => (
                        <li
                          className="rounded-[var(--radius-card)] bg-surface-sunken p-4 text-sm leading-6 text-ink-muted"
                          key={feature}
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid content-start gap-4">
              <div className="editorial-card rounded-[var(--radius-panel)] p-6">
                <h3 className="eyebrow">Toolbox</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li className="pill" key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[var(--radius-panel)] bg-accent p-6 text-[var(--accent-contrast)] shadow-[var(--shadow-lg)]">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-80">Collaboration style</h3>
                <p className="mt-4 text-[0.9375rem] leading-7">
                  Code review, pairing, testing discipline, and architecture decisions that keep teams shipping without
                  noise.
                </p>
              </div>

              <div className="editorial-card rounded-[var(--radius-panel)] p-6">
                <h3 className="eyebrow">Languages</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <li className="pill" key={language}>
                      {language}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- Experience */}
        <section className="reveal mx-auto w-full max-w-6xl px-5 py-20 sm:px-6" id="experience">
          <div>
            <p className="section-label">Experience</p>
            <h2 className="section-title">Shipping product work from architecture to the final experience.</h2>
          </div>

          <ol className="mt-12 space-y-5">
            {workExperience.map((job) => (
              <li key={job.company}>
                <article className="editorial-card rounded-[var(--radius-panel)] p-7 md:p-10">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="card-title text-[1.75rem] md:text-[2rem]">{job.company}</h3>
                        {job.current ? (
                          <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent-contrast)]">
                            Current
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-3 text-[0.9375rem] font-medium text-ink">{job.position}</p>
                      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-subtle">
                        {job.duration} &middot; {job.location}
                      </p>
                    </div>

                    <p className="max-w-sm border-l border-line pl-5 text-sm leading-7 text-ink-muted">
                      {job.description}
                    </p>
                  </div>

                  <ul className="mt-8 grid gap-2.5 md:grid-cols-2">
                    {job.achievements.map((achievement) => (
                      <li
                        className="rounded-[var(--radius-card)] bg-surface-sunken p-4 text-sm leading-6 text-ink-muted"
                        key={achievement}
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </section>

        {/* ----------------------------------------------------- Education */}
        <section className="reveal mx-auto w-full max-w-6xl px-5 py-20 sm:px-6">
          <div>
            <p className="section-label">Education &amp; credentials</p>
            <h2 className="section-title">Foundations, and the habit of going back to school.</h2>
          </div>

          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {education.map((item) => (
              <li className="editorial-card flex flex-col rounded-[var(--radius-panel)] p-6" key={item.title}>
                <h3 className="card-title text-[1.35rem]">{item.title}</h3>
                {item.subtitle ? <p className="mt-3 text-sm leading-6 text-ink-muted">{item.subtitle}</p> : null}
                <p className="mt-auto pt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-subtle">
                  {item.year}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* ------------------------------------------------------- Writing */}
        <section className="reveal mx-auto w-full max-w-6xl px-5 py-20 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="section-label">Writing</p>
              <h2 className="section-title">Articles are part of the portfolio, not an afterthought.</h2>
              <p className="section-copy">
                I use writing to clarify engineering choices, share production lessons, and capture how I think about
                building iOS products.
              </p>
            </div>
            <Link className="btn-secondary shrink-0" href="/articles">
              All articles
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4">
            {recentArticles.map((article, index) => (
              <ArticleCard article={article} featured={index === 0} key={article.slug} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
