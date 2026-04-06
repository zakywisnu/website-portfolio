import Link from "next/link"
import { ArrowRight, Download, Mail, MapPin } from "lucide-react"

import { ArticleCard } from "@/components/article-card"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { getRecentArticles } from "@/lib/articles"
import { education, languages, profile, projects, skills, strengths, workExperience } from "@/lib/site-data"

export default function HomePage() {
  const recentArticles = getRecentArticles(3)

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#fffdf9_0%,#f6f1e8_45%,#ece3d6_100%)] text-stone-900">
      <SiteHeader />

      <main>
        <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-18 pt-18 lg:grid-cols-[1.3fr_0.9fr]">
          <div>
            <p className="inline-flex rounded-full border border-stone-400 bg-[#fffdf9] px-4 py-2 text-xs uppercase tracking-[0.28em] text-stone-700 shadow-sm">
              Personal dashboard
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-stone-950 md:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-lg font-medium text-stone-600">{profile.role}</p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-700">{profile.tagline}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-[#31443a] px-5 py-3 text-sm font-medium text-stone-50 transition hover:bg-[#27372f]"
                href={profile.resumeHref}
                target="_blank"
              >
                <Download className="h-4 w-4" />
                View resume
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-stone-400 bg-[#fffdf9] px-5 py-3 text-sm font-medium text-stone-900 transition hover:border-[#31443a] hover:text-[#31443a]"
                href="/articles"
              >
                Read articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[2rem] border border-stone-300 bg-[#fffdf9] p-6 shadow-[0_10px_30px_rgba(28,25,23,0.04)]">
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Current focus</p>
              <p className="mt-4 text-base leading-7 text-stone-700">{profile.currentFocus}</p>
            </div>
            <div className="rounded-[2rem] border border-stone-300 bg-[#ebe3d6] p-6 shadow-[0_10px_30px_rgba(28,25,23,0.04)]">
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Based in</p>
              <div className="mt-4 flex items-center gap-2 text-base font-medium text-stone-900">
                <MapPin className="h-4 w-4" />
                <span>{profile.location}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-stone-700">{profile.availability}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-5 px-6 pb-20 md:grid-cols-3">
          {strengths.map((strength) => (
            <div key={strength.title} className="rounded-[2rem] border border-stone-300 bg-[#fffdf9] p-6 shadow-[0_10px_30px_rgba(28,25,23,0.04)]">
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">{strength.title}</p>
              <p className="mt-4 text-base leading-7 text-stone-700">{strength.description}</p>
            </div>
          ))}
        </section>

        <section id="work" className="mx-auto w-full max-w-6xl px-6 py-18">
          <div className="max-w-3xl">
            <p className="section-label">About</p>
            <h2 className="section-title">A portfolio that reads like the work behind the product.</h2>
            <p className="section-copy">{profile.intro}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] border border-stone-300 bg-[#fffdf9] p-8 shadow-[0_12px_34px_rgba(28,25,23,0.05)]">
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Selected projects</p>
              <div className="mt-6 space-y-8">
                {projects.map((project) => (
                  <div key={project.name} className="border-t border-stone-200 pt-6 first:border-t-0 first:pt-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight text-stone-950">{project.name}</h3>
                        <p className="mt-3 text-base leading-7 text-stone-700">{project.description}</p>
                      </div>
                      <Link className="text-sm font-medium text-stone-600 transition hover:text-[#31443a]" href={project.link} target="_blank">
                        Open
                      </Link>
                    </div>
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-stone-600">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[2rem] border border-stone-300 bg-[#fffdf9] p-6 shadow-[0_10px_30px_rgba(28,25,23,0.04)]">
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Skills</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-[#eeeadf] px-3 py-2 text-sm text-stone-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-stone-300 bg-[#fffdf9] p-6 shadow-[0_10px_30px_rgba(28,25,23,0.04)]">
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Languages</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {languages.map((language) => (
                      <span key={language} className="rounded-full bg-[#eeeadf] px-3 py-2 text-sm text-stone-800">
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-stone-300 bg-[#ebe3d6] p-6 shadow-[0_10px_30px_rgba(28,25,23,0.04)]">
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Contact</p>
                <a className="mt-4 inline-flex items-center gap-2 text-base font-medium text-stone-950 transition hover:text-[#31443a]" href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-18">
          <div className="max-w-3xl">
            <p className="section-label">Experience</p>
            <h2 className="section-title">Shipping product work from architecture to the final experience.</h2>
          </div>

          <div className="mt-10 space-y-5">
            {workExperience.map((job) => (
              <article key={job.company} className="rounded-[2rem] border border-stone-300 bg-[#fffdf9] p-8 shadow-[0_12px_34px_rgba(28,25,23,0.05)]">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-semibold tracking-tight text-stone-950">{job.company}</h3>
                      {job.current ? (
                        <span className="rounded-full bg-[#31443a] px-3 py-1 text-xs uppercase tracking-[0.2em] text-stone-50">
                          Current
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-base font-medium text-stone-700">{job.position}</p>
                    <p className="mt-2 text-sm text-stone-500">
                      {job.duration} • {job.location}
                    </p>
                  </div>
                </div>

                <p className="mt-6 max-w-3xl text-base leading-7 text-stone-700">{job.description}</p>

                <ul className="mt-6 grid gap-3 text-sm leading-6 text-stone-600 md:grid-cols-2">
                  {job.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 rounded-2xl bg-[#f1ece3] p-4">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-400" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-5 px-6 py-18 md:grid-cols-3">
          {education.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-stone-300 bg-[#fffdf9] p-6 shadow-[0_10px_30px_rgba(28,25,23,0.04)]">
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Education & credentials</p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-stone-950">{item.title}</h3>
              {item.subtitle ? <p className="mt-2 text-sm leading-6 text-stone-600">{item.subtitle}</p> : null}
              <p className="mt-4 text-sm font-medium text-stone-500">{item.year}</p>
            </article>
          ))}
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-18">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="section-label">Writing</p>
              <h2 className="section-title">Articles are part of the portfolio, not an afterthought.</h2>
              <p className="section-copy">
                I use writing to clarify engineering choices, share production lessons, and capture how I think about building iOS products.
              </p>
            </div>
            <Link className="inline-flex items-center gap-2 text-sm font-medium text-stone-950 transition hover:text-[#31443a]" href="/articles">
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
