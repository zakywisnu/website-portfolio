import { ArticleCard } from "@/components/article-card"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { getPublishedArticles } from "@/lib/articles"

export const metadata = {
  title: "Articles",
  description: "Notes on iOS engineering, architecture, product quality, and lessons from shipping mobile apps.",
}

export default function ArticlesPage() {
  const articles = getPublishedArticles()

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-16 sm:px-6 md:py-20" id="main">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-end">
          <div>
            <p className="section-label">Writing archive</p>
            <h1 className="section-title">
              A place for engineering notes, architecture decisions, and lessons from shipping.
            </h1>
            <p className="section-copy">
              The article system is intentionally lightweight: local MDX files, clear frontmatter, and a publishing flow
              that stays close to the codebase.
            </p>
          </div>

          <div className="rounded-[var(--radius-card)] border border-line bg-surface-sunken p-5">
            <p className="eyebrow">Publishing setup</p>
            <p className="mt-3 text-sm leading-7 text-ink-muted">
              Built for shipping thoughtful writing quickly, without separating it from the product and code it
              documents.
            </p>
          </div>
        </div>

        {articles.length > 0 ? (
          <div className="mt-12 grid gap-4">
            {articles.map((article, index) => (
              <ArticleCard article={article} featured={index === 0} headingLevel="h2" key={article.slug} />
            ))}
          </div>
        ) : (
          /* Empty state: the archive can legitimately be empty when every
             article is still in draft, so say so instead of rendering nothing. */
          <div className="mt-12 rounded-[var(--radius-panel)] border border-dashed border-line-strong bg-surface-sunken p-12 text-center">
            <p className="card-title text-xl">Nothing published yet</p>
            <p className="mt-3 text-sm leading-7 text-ink-muted">
              Drafts are in progress. Check back soon, or reach out if there is something you would like me to write
              about.
            </p>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
