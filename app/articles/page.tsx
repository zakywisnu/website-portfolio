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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#fffdf9_0%,#f6f1e8_45%,#ece3d6_100%)] text-stone-900">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-6 py-18">
        <div className="max-w-3xl">
          <p className="section-label">Writing</p>
          <h1 className="section-title">A place for engineering notes, architecture decisions, and lessons from shipping.</h1>
          <p className="section-copy">
            The article system is intentionally lightweight: local MDX files, clear frontmatter, and a publishing flow that stays close to the codebase.
          </p>
        </div>

        <div className="mt-12 grid gap-5">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
