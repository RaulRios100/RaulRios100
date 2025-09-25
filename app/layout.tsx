import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import FacebookPixel from "@/components/facebook-pixel"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Diseño y Optimización Online - Agencia SEO con IA",
  description:
    "Agencia líder en posicionamiento para AI Overviews, SGE y motores de búsqueda generativos. Aumenta tu visibilidad donde realmente importa.",
  keywords: "SEO, IA, AI Overviews, SGE, marketing digital, posicionamiento web",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <FacebookPixel />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
