import type { Metadata, Viewport } from "next"
import { Newsreader } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

/* Self-hosted at build time. The previous stack relied on locally installed
   fonts ("Iowan Old Style", "Palatino Linotype"), so the display face only
   rendered as designed on Apple devices and silently fell back elsewhere. */
const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: {
    default: "Ahmad Zaky Wisnumurti | iOS Engineer",
    template: "%s | Ahmad Zaky Wisnumurti",
  },
  description:
    "Portfolio and writing from Ahmad Zaky Wisnumurti, an iOS engineer focused on scalable product work.",
  generator: "Next.js",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f0e5" },
    { media: "(prefers-color-scheme: dark)", color: "#17130e" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${newsreader.variable}`}
    >
      <body className="grain antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
