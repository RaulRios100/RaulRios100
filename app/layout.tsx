import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Posicionamiento IA - SEO con Inteligencia Artificial",
  description:
    "Revoluciona tu presencia digital con estrategias de SEO potenciadas por IA. Domina Google, aumenta tu visibilidad y convierte visitantes en clientes.",
  keywords: "SEO, IA, inteligencia artificial, posicionamiento web, marketing digital, AI overviews, chatbots",
  authors: [{ name: "Posicionamiento IA" }],
  creator: "Posicionamiento IA",
  publisher: "Posicionamiento IA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
