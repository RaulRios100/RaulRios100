import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Positioning - Agencia de Marketing Digital con IA",
  description:
    "Especialistas en posicionamiento SEO con inteligencia artificial. Optimización para AI Overviews, chatbots inteligentes y estrategias de marketing digital avanzadas.",
  keywords:
    "SEO, inteligencia artificial, AI Overviews, marketing digital, posicionamiento web, chatbots IA, optimización LLM",
  authors: [{ name: "AI Positioning" }],
  creator: "AI Positioning",
  publisher: "AI Positioning",
  openGraph: {
    title: "AI Positioning - Agencia de Marketing Digital con IA",
    description:
      "Especialistas en posicionamiento SEO con inteligencia artificial. Optimización para AI Overviews y estrategias digitales avanzadas.",
    url: "https://aipositioningagency.com",
    siteName: "AI Positioning",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Positioning - Agencia de Marketing Digital con IA",
    description: "Especialistas en posicionamiento SEO con inteligencia artificial.",
    creator: "@aipositioningmx",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#f97316" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
