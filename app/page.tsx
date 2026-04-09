import Link from "next/link"
import { ArrowRight, Mail, MapPin } from "lucide-react"

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
    <div className="flex min-h-screen flex-col text-stone-900">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden px-5 pb-18 pt-10 sm:px-6 md:pt-18">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_18%_18%,rgba(183,123,55,0.2),transparent_22%),radial-gradient(circle_at_82%_12%,rgba(49,68,58,0.14),transparent_18%),linear-gradient(180deg,rgba(255,252,247,0.82),rgba(255,252,247,0.18)_55%,rgba(255,252,247,0))]" />
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.2fr)_22rem] lg:items-start">
            <div className="relative">
              <p className="display-eyebrow hero-reveal">
                <span className="h-2 w-2 rounded-full bg-[var(--olive)]" />
                iOS engineer portfolio
              </p>

              <div className="hero-reveal hero-reveal-delay-1 mt-8 max-w-5xl">
                <p className="text-sm uppercase tracking-[0.26em] text-stone-500">Ahmad Zaky Wisnumurti</p>
                <h1 className="display-title mt-4 max-w-[10ch] md:max-w-[9ch]">
                  Shipping calm,
                  <br />
                  resilient mobile
                  <br />
                  products at scale.
                </h1>
              </div>

              <div className="hero-reveal hero-reveal-delay-2 mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-end">
                <p className="max-w-2xl text-base leading-8 text-stone-700 md:text-[1.12rem]">
                  {profile.tagline} I care about the work behind the interface too: architecture, delivery rhythm, product
                  quality, and the small decisions that make teams faster over time.
                </p>
                <div className="border-l border-[rgba(80,61,43,0.18)] pl-5 text-sm leading-7 text-stone-600">
                  <p className="uppercase tracking-[0.22em] text-stone-500">Current focus</p>
                  <p className="mt-3">{profile.currentFocus}</p>
                </div>
              </div>

              <div className="hero-reveal hero-reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
                <Link
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(80,61,43,0.22)] bg-[rgba(255,250,242,0.92)] px-6 py-3 text-sm font-medium text-stone-900 shadow-[0_10px_24px_rgba(57,40,24,0.08)] transition hover:-translate-y-0.5 hover:border-[#31443a] hover:text-[#31443a]"
                  href="/articles"
                >
                  Read articles
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  className="inline-flex items-center gap-2 text-sm font-medium text-stone-700 transition hover:text-[#31443a]"
                  href={`mailto:${profile.email}`}
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="hero-reveal hero-reveal-delay-4 paper-panel rounded-[2.2rem] p-6 md:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Field notes</p>
                  <p className="mt-3 text-sm leading-7 text-stone-700">
                    Product-minded engineering for teams that need strong foundations without slowing delivery.
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(80,61,43,0.16)] bg-[rgba(255,252,247,0.88)]">
                  <MapPin className="h-4 w-4 text-stone-700" />
                </div>
              </div>

              <div className="editorial-rule my-6" />

              <div className="space-y-5">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-start justify-between gap-6">
                    <p className="text-[11px] uppercase tracking-[0.26em] text-stone-500">{fact.label}</p>
                    <p className="max-w-[12rem] text-right text-sm leading-6 text-stone-800">{fact.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.6rem] border border-[rgba(80,61,43,0.14)] bg-[rgba(255,250,242,0.7)] p-5">
                <p className="text-[11px] uppercase tracking-[0.26em] text-stone-500">Availability</p>
                <p className="mt-3 text-sm leading-7 text-stone-700">{profile.availability}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-fade section-fade-delay-1 mx-auto grid w-full max-w-6xl gap-5 px-5 pb-20 sm:px-6 md:grid-cols-3">
          {strengths.map((strength, index) => (
            <div
              key={strength.title}
              className={`editorial-card rounded-[2rem] p-6 ${index === 1 ? "md:-translate-y-4" : ""}`}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">{strength.title}</p>
              <p className="mt-4 text-base leading-7 text-stone-700">{strength.description}</p>
            </div>
          ))}
        </section>

        <section id="work" className="section-fade section-fade-delay-2 mx-auto w-full max-w-6xl px-5 py-18 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_20rem] lg:items-end">
            <div className="max-w-3xl">
              <p className="section-label">Selected work</p>
              <h2 className="section-title">A portfolio that explains how the product got better, not just what shipped.</h2>
              <p className="section-copy">{profile.intro}</p>
            </div>

            <div className="rounded-[1.8rem] border border-[rgba(80,61,43,0.14)] bg-[rgba(255,250,242,0.62)] p-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">Why this format</p>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                I prefer portfolios that show engineering judgment, delivery tradeoffs, and writing, not just screenshots.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.75fr)]">
            <div className="paper-panel paper-cut rounded-[2.2rem] p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Selected projects</p>
              <div className="mt-8 space-y-9">
                {projects.map((project) => (
                  <div key={project.name} className="border-t border-[rgba(80,61,43,0.12)] pt-7 first:border-t-0 first:pt-0">
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                      <div className="max-w-2xl">
                        <h3
                          className="text-3xl tracking-[-0.03em] text-stone-950"
                          style={{ fontFamily: "var(--font-display)", lineHeight: "0.98" }}
                        >
                          {project.name}
                        </h3>
                        <p className="mt-3 text-base leading-7 text-stone-700">{project.description}</p>
                      </div>
                      <Link
                        className="inline-flex items-center gap-2 text-sm font-medium text-stone-700 transition hover:text-[#31443a]"
                        href={project.link}
                        target="_blank"
                      >
                        Open
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>

                    <ul className="mt-6 grid gap-3 text-sm leading-6 text-stone-600 md:grid-cols-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="rounded-[1.3rem] bg-[rgba(255,250,242,0.72)] p-4">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="editorial-card rounded-[2rem] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Toolbox</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[rgba(117,95,71,0.16)] bg-[rgba(238,234,223,0.65)] px-3 py-2 text-sm text-stone-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-[rgba(80,61,43,0.16)] bg-[#31443a] p-6 text-stone-50 shadow-[0_18px_44px_rgba(49,68,58,0.24)]">
                <p className="text-xs uppercase tracking-[0.28em] text-stone-200/80">Collaboration style</p>
                <p className="mt-4 text-base leading-7 text-stone-100">
                  Code review, pairing, testing discipline, and architecture decisions that keep teams shipping without noise.
                </p>
              </div>

              <div className="editorial-card rounded-[2rem] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Languages</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <span
                      key={language}
                      className="rounded-full border border-[rgba(117,95,71,0.16)] bg-[rgba(255,250,242,0.86)] px-3 py-2 text-sm text-stone-800"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section-fade section-fade-delay-3 mx-auto w-full max-w-6xl px-5 py-18 sm:px-6">
          <div className="max-w-3xl">
            <p className="section-label">Experience</p>
            <h2 className="section-title">Shipping product work from architecture to the final experience.</h2>
          </div>

          <div className="mt-12 space-y-6">
            {workExperience.map((job, index) => (
              <article
                key={job.company}
                className={`rounded-[2.1rem] border border-[rgba(80,61,43,0.14)] p-8 shadow-[0_18px_44px_rgba(57,40,24,0.08)] md:p-10 ${
                  index === 1 ? "bg-[rgba(255,251,245,0.84)]" : "bg-[rgba(249,241,231,0.84)]"
                }`}
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3
                        className="text-3xl tracking-[-0.03em] text-stone-950"
                        style={{ fontFamily: "var(--font-display)", lineHeight: "0.98" }}
                      >
                        {job.company}
                      </h3>
                      {job.current ? (
                        <span className="rounded-full bg-[#31443a] px-3 py-1 text-xs uppercase tracking-[0.2em] text-stone-50">
                          Current
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-3 text-base font-medium text-stone-700">{job.position}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-stone-500">
                      {job.duration} • {job.location}
                    </p>
                  </div>

                  <div className="max-w-sm border-l border-[rgba(80,61,43,0.14)] pl-5 text-sm leading-7 text-stone-600">
                    {job.description}
                  </div>
                </div>

                <ul className="mt-8 grid gap-3 text-sm leading-6 text-stone-700 md:grid-cols-2">
                  {job.achievements.map((achievement) => (
                    <li key={achievement} className="rounded-[1.4rem] bg-[rgba(255,250,242,0.7)] p-4">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-5 px-5 py-18 sm:px-6 md:grid-cols-[1.15fr_0.85fr_0.85fr]">
          {education.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-[2rem] border border-[rgba(80,61,43,0.14)] p-6 shadow-[0_14px_34px_rgba(28,25,23,0.05)] ${
                index === 0 ? "bg-[rgba(255,251,245,0.9)]" : "bg-[rgba(250,244,236,0.74)]"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Education & credentials</p>
              <h3
                className="mt-4 text-[1.85rem] tracking-[-0.03em] text-stone-950"
                style={{ fontFamily: "var(--font-display)", lineHeight: "0.98" }}
              >
                {item.title}
              </h3>
              {item.subtitle ? <p className="mt-3 text-sm leading-6 text-stone-600">{item.subtitle}</p> : null}
              <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-stone-500">{item.year}</p>
            </article>
          ))}
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-18 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
            <div className="max-w-3xl">
              <p className="section-label">Writing</p>
              <h2 className="section-title">Articles are part of the portfolio, not an afterthought.</h2>
              <p className="section-copy">
                I use writing to clarify engineering choices, share production lessons, and capture how I think about
                building iOS products.
              </p>
            </div>
            <Link
              className="inline-flex items-center justify-between rounded-[1.7rem] border border-[rgba(80,61,43,0.14)] bg-[rgba(255,250,242,0.7)] px-5 py-4 text-sm font-medium text-stone-900 transition hover:border-[#31443a] hover:text-[#31443a]"
              href="/articles"
            >
              All articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5">
            {recentArticles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} featured={index === 0} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
