import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI Positioning - Agencia de Marketing Digital con IA",
  description:
    "Transformamos tu negocio con estrategias de marketing digital potenciadas por Inteligencia Artificial. Especialistas en posicionamiento SEO, chatbots IA y optimización LLM.",
  keywords: "marketing digital, inteligencia artificial, SEO, chatbots IA, posicionamiento web, optimización LLM",
  authors: [{ name: "AI Positioning" }],
  creator: "AI Positioning",
  publisher: "AI Positioning",
  robots: "index, follow",
  openGraph: {
    title: "AI Positioning - Marketing Digital con IA",
    description:
      "Transformamos tu negocio con estrategias de marketing digital potenciadas por Inteligencia Artificial.",
    type: "website",
    locale: "es_MX",
    siteName: "AI Positioning",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Positioning - Marketing Digital con IA",
    description:
      "Transformamos tu negocio con estrategias de marketing digital potenciadas por Inteligencia Artificial.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#f97316",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
