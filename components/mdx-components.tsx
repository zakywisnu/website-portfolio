import type { MDXComponents } from "mdx/types"
import Link from "next/link"

export const mdxComponents: MDXComponents = {
  h2: (props) => <h2 className="mt-12 text-2xl font-semibold tracking-tight text-stone-950" {...props} />,
  h3: (props) => <h3 className="mt-10 text-xl font-semibold tracking-tight text-stone-950" {...props} />,
  p: (props) => <p className="mt-6 text-base leading-8 text-stone-800" {...props} />,
  ul: (props) => <ul className="mt-6 list-disc space-y-2 pl-6 text-stone-800" {...props} />,
  ol: (props) => <ol className="mt-6 list-decimal space-y-2 pl-6 text-stone-800" {...props} />,
  li: (props) => <li className="pl-1" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-8 border-l-2 border-[#31443a] pl-5 text-base italic leading-8 text-stone-700"
      {...props}
    />
  ),
  a: ({ href = "", ...props }) => {
    const className =
      "font-medium text-[#31443a] underline decoration-[#9fb2a8] underline-offset-4 hover:decoration-[#31443a]"

    if (href.startsWith("/")) {
      return <Link className={className} href={href} {...props} />
    }

    return <a className={className} href={href} rel="noreferrer" target="_blank" {...props} />
  },
  code: (props) => (
    <code className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-[0.9em] text-stone-900" {...props} />
  ),
  pre: (props) => (
    <pre
      className="mt-8 overflow-x-auto rounded-2xl border border-stone-200 bg-stone-950 px-5 py-4 text-sm text-stone-100"
      {...props}
    />
  ),
}
