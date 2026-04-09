import { ArticleCard } from "@/components/article-card"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { getPublishedArticles } from "@/lib/articles"

export const metadata = {
  title: "Articles | Ahmad Zaky Wisnumurti",
  description: "Notes on iOS engineering, architecture, product quality, and lessons from shipping mobile apps.",
}

export default function ArticlesPage() {
  const articles = getPublishedArticles()

  return (
    <div className="flex min-h-screen flex-col text-stone-900">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-18 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div className="max-w-3xl">
            <p className="section-label">Writing archive</p>
            <h1 className="section-title">A place for engineering notes, architecture decisions, and lessons from shipping.</h1>
            <p className="section-copy">
              The article system is intentionally lightweight: local MDX files, clear frontmatter, and a publishing flow that stays close to the codebase.
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-[rgba(80,61,43,0.14)] bg-[rgba(255,250,242,0.62)] p-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">Publishing setup</p>
            <p className="mt-3 text-sm leading-7 text-stone-700">
              Built for shipping thoughtful writing quickly, without separating it from the product and code it documents.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5">
          {articles.map((article, index) => (
            <ArticleCard key={article.slug} article={article} featured={index === 0} />
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
