import Link from "next/link"

import { formatArticleDate, type Article } from "@/lib/articles"

type ArticleCardProps = {
  article: Article
  featured?: boolean
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <article
      className={`paper-cut rounded-[2rem] border border-[rgba(117,95,71,0.2)] bg-[rgba(255,251,245,0.82)] shadow-[0_20px_48px_rgba(76,62,44,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(117,95,71,0.34)] hover:shadow-[0_28px_70px_rgba(76,62,44,0.14)] ${
        featured ? "p-8 md:p-10" : "p-6 md:p-7"
      }`}
    >
      {article.coverImage ? (
        <div className="mb-6 overflow-hidden rounded-2xl border border-[rgba(117,95,71,0.2)]">
          <img alt={article.title} className="h-auto w-full object-cover" loading="lazy" src={article.coverImage} />
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.18em] text-stone-500">
        <span>{formatArticleDate(article.publishedAt)}</span>
        <span>&bull;</span>
        <span>{article.readingTime}</span>
      </div>

      <h2
        className={`mt-4 tracking-[-0.03em] text-stone-950 ${featured ? "text-3xl md:text-4xl" : "text-2xl md:text-[2rem]"}`}
        style={{ fontFamily: "var(--font-display)", lineHeight: "0.98" }}
      >
        <Link className="transition hover:text-[#31443a]" href={`/articles/${article.slug}`}>
          {article.title}
        </Link>
      </h2>

      <p className="mt-4 max-w-2xl text-base leading-7 text-stone-700">{article.excerpt}</p>

      <div className="editorial-rule mt-6" />

      <div className="mt-6 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[rgba(117,95,71,0.18)] bg-[rgba(238,234,223,0.72)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
