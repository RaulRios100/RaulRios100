import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import FacebookPixel from "@/components/facebook-pixel"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Positioning - Agencia de Marketing Digital con IA",
  description:
    "Especialistas en posicionamiento SEO con inteligencia artificial. Optimizamos tu presencia digital para aparecer en AI Overviews, ChatGPT y motores de búsqueda generativos. Aumenta tu visibilidad online con estrategias de marketing digital potenciadas por IA.",
  keywords:
    "marketing digital, SEO, inteligencia artificial, AI Overviews, ChatGPT, posicionamiento web, agencia digital, optimización IA, marketing con IA, SEO IA",
  authors: [{ name: "AI Positioning" }],
  creator: "AI Positioning",
  publisher: "AI Positioning",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aipositioningagency.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Positioning - Agencia de Marketing Digital con IA",
    description:
      "Especialistas en posicionamiento SEO con inteligencia artificial. Optimizamos tu presencia digital para aparecer en AI Overviews y motores generativos.",
    url: "https://aipositioningagency.com",
    siteName: "AI Positioning",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Positioning - Marketing Digital con IA",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Positioning - Agencia de Marketing Digital con IA",
    description:
      "Especialistas en posicionamiento SEO con inteligencia artificial. Aumenta tu visibilidad online con estrategias potenciadas por IA.",
    images: ["/og-image.jpg"],
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
  category: "technology",
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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AI Positioning" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <FacebookPixel />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
