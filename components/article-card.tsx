import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { formatArticleDate, type Article } from "@/lib/articles"

type ArticleCardProps = {
  article: Article
  featured?: boolean
  /** Set so the card slots into the surrounding outline without skipping a
   *  level: h2 when cards sit directly under the page h1, h3 under a section. */
  headingLevel?: "h2" | "h3"
}

export function ArticleCard({ article, featured = false, headingLevel = "h3" }: ArticleCardProps) {
  const Heading = headingLevel

  return (
    <article
      className={`hover-lift group relative overflow-hidden rounded-[var(--radius-panel)] border border-line bg-surface shadow-[var(--shadow-md)] ${
        featured ? "p-7 md:p-10" : "p-6 md:p-7"
      }`}
    >
      {article.coverImage ? (
        // Fixed aspect ratio reserves the space before the image loads, so the
        // card never reflows and pushes the text down.
        <div className="mb-6 aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface-sunken">
          <img
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            loading="lazy"
            src={article.coverImage}
          />
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
        <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time>
        <span aria-hidden>&mdash;</span>
        <span>{article.readingTime}</span>
      </div>

      <Heading
        className={`card-title mt-3 ${featured ? "text-[1.75rem] md:text-[2.4rem]" : "text-2xl md:text-[1.85rem]"}`}
      >
        <Link className="transition-colors duration-200 hover:text-accent" href={`/articles/${article.slug}`}>
          {/* Stretched link: the whole card is the target, but the accessible
              name stays just the title rather than the full card text. */}
          <span className="absolute inset-0 z-10" />
          {article.title}
        </Link>
      </Heading>

      <p className="mt-3 max-w-2xl text-[0.9375rem] leading-7 text-ink-muted">{article.excerpt}</p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line bg-surface-sunken px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          aria-hidden
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          Read
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </article>
  )
}
