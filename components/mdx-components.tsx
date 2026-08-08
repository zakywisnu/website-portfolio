import type { MDXComponents } from "mdx/types"
import Link from "next/link"

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="card-title mt-14 scroll-mt-28 text-[1.75rem] md:text-[2rem]"
      {...props}
    />
  ),
  h3: (props) => <h3 className="card-title mt-10 scroll-mt-28 text-[1.35rem] md:text-[1.5rem]" {...props} />,
  /* 1.75 line-height and a 68ch measure on the container keep long-form
     text inside the 60-75 character comfortable reading range. */
  p: (props) => <p className="mt-6 text-[1.0625rem] leading-[1.75] text-ink-muted" {...props} />,
  ul: (props) => <ul className="mt-6 list-disc space-y-2.5 pl-6 marker:text-ink-subtle" {...props} />,
  ol: (props) => <ol className="mt-6 list-decimal space-y-2.5 pl-6 marker:text-ink-subtle" {...props} />,
  li: (props) => <li className="pl-1.5 text-[1.0625rem] leading-[1.75] text-ink-muted" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-8 rounded-r-[var(--radius-card)] border-l-2 border-accent bg-accent-wash py-4 pl-6 pr-5 text-[1.0625rem] italic leading-[1.75] text-ink [&>p]:mt-0 [&>p+p]:mt-4 [&>p]:text-ink"
      {...props}
    />
  ),
  hr: () => <hr className="editorial-rule my-12" />,
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={props.alt ?? ""}
      className="mt-8 w-full rounded-[var(--radius-card)] border border-line"
      loading="lazy"
      {...props}
    />
  ),
  table: (props) => (
    // Wide tables scroll inside their own container instead of forcing the
    // whole page to scroll sideways on mobile.
    <div className="mt-8 overflow-x-auto rounded-[var(--radius-card)] border border-line">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border-b border-line bg-surface-sunken px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-subtle"
      {...props}
    />
  ),
  td: (props) => <td className="border-b border-line px-4 py-3 text-ink-muted" {...props} />,
  a: ({ href = "", ...props }) => {
    const className =
      "font-medium text-accent underline decoration-accent/40 underline-offset-[3px] transition-colors duration-200 hover:decoration-accent"

    if (href.startsWith("/")) {
      return <Link className={className} href={href} {...props} />
    }

    return <a className={className} href={href} rel="noreferrer" target="_blank" {...props} />
  },
  code: (props) => (
    <code
      className="rounded-md border border-line bg-surface-sunken px-1.5 py-0.5 font-mono text-[0.875em] text-ink"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-8 overflow-x-auto rounded-[var(--radius-card)] border border-line bg-paper-deep p-5 font-mono text-[0.875rem] leading-relaxed text-ink [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit"
      {...props}
    />
  ),
}
