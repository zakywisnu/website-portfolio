"use client"

import { useEffect, useRef, type ReactNode } from "react"

export function CareerTimeline({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = root.current
    if (!element || !window.IntersectionObserver) return
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    let observer: IntersectionObserver | undefined

    const configure = () => {
      observer?.disconnect()
      if (preference.matches) {
        element.removeAttribute("data-motion-ready")
        return
      }
      element.setAttribute("data-motion-ready", "true")
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.setAttribute("data-revealed", "true")
          observer?.unobserve(entry.target)
        }
      }, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" })
      element.querySelectorAll(".career-row:not([data-revealed])").forEach((row) => observer?.observe(row))
    }

    configure()
    preference.addEventListener("change", configure)
    return () => {
      observer?.disconnect()
      preference.removeEventListener("change", configure)
      element.removeAttribute("data-motion-ready")
    }
  }, [])

  return <div ref={root} className="career-history">{children}</div>
}
