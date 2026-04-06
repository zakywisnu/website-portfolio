import Link from "next/link"

import { formatArticleDate, type Article } from "@/lib/articles"

type ArticleCardProps = {
  article: Article
  featured?: boolean
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <article
      className={`rounded-[2rem] border border-[#d7ccbc] bg-white ring-1 ring-[#e6ddd0] shadow-[0_12px_28px_rgba(76,62,44,0.06)] transition duration-200 hover:-translate-y-1 hover:border-[#b7a791] hover:ring-[#d8cdbf] hover:shadow-[0_22px_56px_rgba(76,62,44,0.14)] ${
        featured ? "p-8 md:p-10" : "p-6"
      }`}
    >
      <div className="flex flex-wrap items-center gap-3 text-sm text-stone-600">
        <span>{formatArticleDate(article.publishedAt)}</span>
        <span>&bull;</span>
        <span>{article.readingTime}</span>
      </div>

      <h2 className={`mt-4 font-semibold tracking-tight text-stone-950 ${featured ? "text-3xl" : "text-2xl"}`}>
        <Link className="transition hover:text-[#31443a]" href={`/articles/${article.slug}`}>
          {article.title}
        </Link>
      </h2>

      <p className="mt-4 max-w-2xl text-base leading-7 text-stone-700">{article.excerpt}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-[#eeeadf] px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-stone-700">
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
