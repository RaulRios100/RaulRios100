import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Posicionamiento en IA - Diseño y Optimización Online",
  description:
    "Especialistas en posicionamiento para motores de IA. Aparece en las respuestas de Google AI, ChatGPT y más. Optimización AIO + LLM.",
  keywords: "posicionamiento IA, SEO IA, AI Overviews, optimización LLM, ChatGPT SEO, Google SGE",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
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
