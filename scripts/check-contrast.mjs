/**
 * Verifies every foreground/background token pair used in the UI against
 * WCAG 2.1 contrast minimums.
 *
 *   node scripts/check-contrast.mjs
 *
 * Exits non-zero if any pair fails, so it can gate a build if wanted.
 */

const LIGHT = {
  paper: "#f6f0e5",
  "paper-deep": "#ece2d1",
  surface: "#fffcf6",
  "surface-sunken": "#efe7d9",
  "surface-raised": "#fffdfa",
  ink: "#23190f",
  "ink-muted": "#5c5044",
  "ink-subtle": "#6f6153",
  accent: "#31443a",
  "accent-hover": "#24332b",
  "accent-contrast": "#fdfaf4",
  "amber-ink": "#8a5a1f",
  amber: "#b77b37",
}

const DARK = {
  paper: "#17130e",
  "paper-deep": "#100d09",
  surface: "#201a14",
  "surface-sunken": "#1a1610",
  "surface-raised": "#2a231b",
  ink: "#f4ece0",
  "ink-muted": "#b8ab99",
  "ink-subtle": "#9a8e7c",
  accent: "#8fb3a0",
  "accent-hover": "#a9c7b7",
  "accent-contrast": "#12201a",
  "amber-ink": "#d99f5c",
  amber: "#c98d45",
}

/** Text tokens rendered on each surface, plus the minimum ratio required. */
const TEXT_ON_SURFACES = ["ink", "ink-muted", "ink-subtle", "accent", "amber-ink"]
const SURFACES = ["paper", "paper-deep", "surface", "surface-sunken", "surface-raised"]

/** Pairs checked at the 3:1 UI-graphic threshold rather than 4.5:1 text. */
const UI_GRAPHIC_PAIRS = [
  ["amber", "paper"],
  ["amber", "surface"],
]

function toLinear(channel) {
  const c = channel / 255
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
}

function luminance(hex) {
  const value = hex.replace("#", "")
  const r = parseInt(value.slice(0, 2), 16)
  const g = parseInt(value.slice(2, 4), 16)
  const b = parseInt(value.slice(4, 6), 16)
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b)
}

function contrast(fg, bg) {
  const a = luminance(fg)
  const b = luminance(bg)
  const [hi, lo] = a > b ? [a, b] : [b, a]
  return (hi + 0.05) / (lo + 0.05)
}

let failures = 0
const rows = []

for (const [themeName, theme] of [
  ["light", LIGHT],
  ["dark", DARK],
]) {
  for (const surface of SURFACES) {
    for (const text of TEXT_ON_SURFACES) {
      const ratio = contrast(theme[text], theme[surface])
      const pass = ratio >= 4.5
      if (!pass) failures++
      rows.push({ theme: themeName, fg: text, bg: surface, ratio, need: 4.5, pass })
    }
  }

  // Text sitting on the filled accent button
  const onAccent = contrast(theme["accent-contrast"], theme.accent)
  if (onAccent < 4.5) failures++
  rows.push({
    theme: themeName,
    fg: "accent-contrast",
    bg: "accent",
    ratio: onAccent,
    need: 4.5,
    pass: onAccent >= 4.5,
  })

  for (const [fg, bg] of UI_GRAPHIC_PAIRS) {
    const ratio = contrast(theme[fg], theme[bg])
    const pass = ratio >= 3
    if (!pass) failures++
    rows.push({ theme: themeName, fg, bg, ratio, need: 3, pass })
  }
}

const width = Math.max(...rows.map((r) => `${r.fg} on ${r.bg}`.length))
let currentTheme = ""
for (const row of rows) {
  if (row.theme !== currentTheme) {
    currentTheme = row.theme
    console.log(`\n${currentTheme.toUpperCase()}`)
  }
  const label = `${row.fg} on ${row.bg}`.padEnd(width)
  const mark = row.pass ? "PASS" : "FAIL"
  console.log(`  ${mark}  ${label}  ${row.ratio.toFixed(2)}:1  (needs ${row.need}:1)`)
}

console.log(
  failures === 0
    ? `\nAll ${rows.length} token pairs meet WCAG AA.`
    : `\n${failures} of ${rows.length} token pairs FAIL WCAG AA.`,
)

process.exit(failures === 0 ? 0 : 1)
