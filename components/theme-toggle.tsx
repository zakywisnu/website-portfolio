"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  // Before mount the resolved theme is unknown, so render a same-sized,
  // inert placeholder rather than guessing an icon and shifting layout.
  if (!mounted) {
    return <div aria-hidden className="h-11 w-11" />
  }

  return (
    <button
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line bg-surface text-ink-muted transition-[transform,color,border-color] duration-200 hover:border-accent hover:text-accent active:scale-95"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      type="button"
    >
      {isDark ? <Sun aria-hidden className="h-[18px] w-[18px]" /> : <Moon aria-hidden className="h-[18px] w-[18px]" />}
    </button>
  )
}
