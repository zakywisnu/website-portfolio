import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { ArticleCard } from "@/components/article-card"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import {
  formatArticleDate,
  getArticleBySlug,
  getCompiledArticle,
  getPublishedArticles,
  getRelatedArticles,
} from "@/lib/articles"
import { profile } from "@/lib/site-data"

type ArticlePageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getPublishedArticles().map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {}
  }

  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const compiled = await getCompiledArticle(slug)

  if (!compiled) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(slug, 2)

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-12 sm:px-6 md:py-16" id="main">
        <Link className="link-quiet inline-flex min-h-11 items-center gap-2 text-sm" href="/articles">
          <ArrowLeft aria-hidden className="h-4 w-4" />
          Back to articles
        </Link>

        <header className="mt-6 max-w-4xl">
          <h1 className="display-title text-[clamp(2.25rem,5.5vw,4.25rem)]">{compiled.frontmatter.title}</h1>

          <div className="mt-6 flex flex-wrap items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
            <time dateTime={compiled.frontmatter.publishedAt}>
              {formatArticleDate(compiled.frontmatter.publishedAt)}
            </time>
            <span aria-hidden>&mdash;</span>
            <span>{compiled.readingTime}</span>
          </div>

          <ul className="mt-5 flex flex-wrap gap-2">
            {compiled.frontmatter.tags.map((tag) => (
              <li
                className="rounded-full border border-line bg-surface-sunken px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>

          <p className="lede mt-8 text-[1.1875rem]">{compiled.frontmatter.excerpt}</p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
          <article className="paper-panel rounded-[var(--radius-panel)] px-6 py-10 md:px-10 md:py-12">
            {compiled.frontmatter.coverImage ? (
              <div className="mb-10 aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface-sunken">
                <img
                  alt=""
                  className="h-full w-full object-cover"
                  src={compiled.frontmatter.coverImage}
                />
              </div>
            ) : null}

            <div className="prose-shell">{compiled.content}</div>
          </article>

          {/* Sticky so it stays useful while reading a long article */}
          <aside className="space-y-4 lg:sticky lg:top-24">
            <div className="editorial-card rounded-[var(--radius-panel)] p-6">
              <p className="eyebrow">Workflow</p>
              <p className="mt-4 text-sm leading-7 text-ink-muted">
                Articles live in <code className="font-mono text-[0.85em] text-ink">content/articles</code> as local MDX
                files with frontmatter for title, excerpt, date, tags, and draft state.
              </p>
            </div>

            <div className="editorial-card rounded-[var(--radius-panel)] p-6">
              <p className="eyebrow">Get in touch</p>
              <p className="mt-4 text-sm leading-7 text-ink-muted">
                Questions or corrections on this piece are welcome.
              </p>
              <a
                className="link-quiet mt-3 inline-flex min-h-11 items-center text-sm text-ink"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </div>
          </aside>
        </div>

        {relatedArticles.length > 0 ? (
          <section className="mt-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="card-title text-[1.75rem] md:text-[2rem]">More writing</h2>
              <Link className="link-quiet inline-flex min-h-11 items-center text-sm font-medium" href="/articles">
                View all
              </Link>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard article={relatedArticle} key={relatedArticle.slug} />
              ))}
            </div>
          </section>
        ) : null}
      </main>

      <SiteFooter />
    </div>
  )
}
