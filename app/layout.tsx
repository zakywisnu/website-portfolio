import type { Metadata, Viewport } from "next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

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
    { media: "(prefers-color-scheme: light)", color: "#f4f6f5" },
    { media: "(prefers-color-scheme: dark)", color: "#18221d" },
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
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="antialiased">
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
