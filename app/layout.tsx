import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import FacebookPixel from "@/components/facebook-pixel"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Positioning - Agencia de Marketing Digital con IA",
  description:
    "Revoluciona tu presencia digital con nuestra agencia especializada en marketing con inteligencia artificial. Aumenta tu visibilidad, genera más leads y domina tu mercado.",
  keywords: "marketing digital, inteligencia artificial, SEO, leads, conversiones, agencia marketing",
  authors: [{ name: "AI Positioning" }],
  openGraph: {
    title: "AI Positioning - Marketing Digital con IA",
    description: "Revoluciona tu presencia digital con IA. Más leads, más conversiones, más resultados.",
    url: "https://aipositioningagency.com",
    siteName: "AI Positioning",
    images: [
      {
        url: "/logo.png",
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
    title: "AI Positioning - Marketing Digital con IA",
    description: "Revoluciona tu presencia digital con IA. Más leads, más conversiones, más resultados.",
    images: ["/logo.png"],
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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <FacebookPixel />
        {children}
      </body>
    </html>
  )
}
