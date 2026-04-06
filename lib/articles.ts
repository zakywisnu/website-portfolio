import fs from "node:fs"
import path from "node:path"

import matter from "gray-matter"
import { compileMDX } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"

import { mdxComponents } from "@/components/mdx-components"

const articlesDirectory = path.join(process.cwd(), "content/articles")

export type ArticleFrontmatter = {
  title: string
  excerpt: string
  publishedAt: string
  tags: string[]
  draft: boolean
  coverImage?: string
}

export type Article = ArticleFrontmatter & {
  slug: string
  readingTime: string
}

function getArticleFilePaths() {
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }

  return fs.readdirSync(articlesDirectory).filter((file) => file.endsWith(".mdx"))
}

function getArticleSource(slug: string) {
  return fs.readFileSync(path.join(articlesDirectory, `${slug}.mdx`), "utf8")
}

function calculateReadingTime(source: string) {
  const text = source
    .replace(/^---[\s\S]*?---/, "")
    .replace(/[`#>*_[\]\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()

  const words = text ? text.split(" ").length : 0
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min read`
}

function parseArticleFile(fileName: string): Article {
  const slug = fileName.replace(/\.mdx$/, "")
  const source = getArticleSource(slug)
  const { data } = matter(source)
  const frontmatter = data as ArticleFrontmatter

  return {
    ...frontmatter,
    slug,
    readingTime: calculateReadingTime(source),
  }
}

function sortArticles(articles: Article[]) {
  return [...articles].sort((left, right) => {
    return new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
  })
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date))
}

export function getAllArticles() {
  return sortArticles(getArticleFilePaths().map(parseArticleFile))
}

export function getPublishedArticles() {
  return getAllArticles().filter((article) => !article.draft)
}

export function getArticleBySlug(slug: string) {
  return getPublishedArticles().find((article) => article.slug === slug)
}

export function getRecentArticles(limit: number) {
  return getPublishedArticles().slice(0, limit)
}

export function getRelatedArticles(slug: string, limit = 2) {
  return getPublishedArticles()
    .filter((article) => article.slug !== slug)
    .slice(0, limit)
}

export async function getCompiledArticle(slug: string) {
  const source = getArticleSource(slug)
  const { content, data } = matter(source)

  if ((data as ArticleFrontmatter).draft) {
    return null
  }

  const compiled = await compileMDX<ArticleFrontmatter>({
    source: content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  })

  return {
    frontmatter: data as ArticleFrontmatter,
    content: compiled.content,
    readingTime: calculateReadingTime(source),
  }
}

