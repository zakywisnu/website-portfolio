import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

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
    title: `${article.title} | Ahmad Zaky Wisnumurti`,
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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#fffdf9_0%,#f6f1e8_45%,#ece3d6_100%)] text-stone-900">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-6 py-18">
        <div className="max-w-3xl">
          <Link className="text-sm text-stone-600 transition hover:text-[#31443a]" href="/articles">
            Back to articles
          </Link>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl">{compiled.frontmatter.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-stone-500">
            <span>{formatArticleDate(compiled.frontmatter.publishedAt)}</span>
            <span>&bull;</span>
            <span>{compiled.readingTime}</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {compiled.frontmatter.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-stone-600">
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-700">{compiled.frontmatter.excerpt}</p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <article className="rounded-[2rem] border border-stone-300 bg-[#fffdf9] px-6 py-10 shadow-[0_12px_34px_rgba(28,25,23,0.05)] md:px-10">
            <div className="prose-shell">{compiled.content}</div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-[2rem] border border-stone-300 bg-[#fffdf9] p-6 shadow-[0_10px_30px_rgba(28,25,23,0.04)]">
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Workflow</p>
              <p className="mt-4 text-sm leading-7 text-stone-700">
                Articles live in <code>content/articles</code> as local MDX files with frontmatter for title, excerpt, date, tags, and draft state.
              </p>
            </div>
          </aside>
        </div>

        {relatedArticles.length > 0 ? (
          <section className="mt-16">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold tracking-tight text-stone-950">More writing</h2>
              <Link className="text-sm font-medium text-stone-600 transition hover:text-[#31443a]" href="/articles">
                View all
              </Link>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.slug} article={relatedArticle} />
              ))}
            </div>
          </section>
        ) : null}
      </main>

      <SiteFooter />
    </div>
  )
}
