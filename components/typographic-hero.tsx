"use client"

import { useEffect, useRef, useState } from "react"

const vocabulary = ["Swift", "UIKit", "SwiftUI", "Build", "iOS", "Create"]

export function TypographicHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (!canvas || !context) return

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame = 0
    let visible = true
    let width = 0
    let height = 0
    let lastPaint = 0
    let phase = 0

    const paint = () => {
      context.clearRect(0, 0, width, height)
      context.font = "12px monospace"
      context.textBaseline = "middle"
      const color = getComputedStyle(canvas).color
      context.fillStyle = color
      for (let row = 0; row < Math.ceil(height / 30); row += 1) {
        for (let column = 0; column < Math.ceil(width / 100); column += 1) {
          const horizontal = column * 100 + 10
          const vertical = row * 30 + 15
          const seed = row * 17 + column * 13
          const changing = (seed + phase) % 11 === 0
          context.globalAlpha = changing ? 0.42 : 0.16
          const word = vocabulary[(seed + Math.floor(phase / 4)) % vocabulary.length]
          context.fillText(changing ? word.replace(/i/g, "·") : word, horizontal, vertical)
        }
      }
      context.globalAlpha = 1
    }

    const animate = (timestamp: number) => {
      if (!visible || document.hidden || paused || preference.matches) {
        frame = 0
        return
      }
      if (timestamp - lastPaint >= 180) {
        phase += 1
        paint()
        lastPaint = timestamp
      }
      frame = requestAnimationFrame(animate)
    }

    const resume = () => {
      paint()
      if (!frame && visible && !document.hidden && !paused && !preference.matches) {
        frame = requestAnimationFrame(animate)
      }
    }

    const resize = new ResizeObserver(() => {
      const bounds = canvas.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      const scale = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * scale)
      canvas.height = Math.round(height * scale)
      context.setTransform(scale, 0, 0, scale, 0, 0)
      resume()
    })
    resize.observe(canvas)
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      resume()
    })
    intersection.observe(canvas)
    const theme = new MutationObserver(resume)
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    preference.addEventListener("change", resume)
    document.addEventListener("visibilitychange", resume)

    return () => {
      cancelAnimationFrame(frame)
      resize.disconnect()
      intersection.disconnect()
      theme.disconnect()
      preference.removeEventListener("change", resume)
      document.removeEventListener("visibilitychange", resume)
    }
  }, [paused])

  return (
    <div className="typographic-hero">
      <canvas ref={canvasRef} aria-hidden="true" />
      <button className="hero-motion-toggle" type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>
        {paused ? "Resume animation" : "Pause animation"}
      </button>
    </div>
  )
}
