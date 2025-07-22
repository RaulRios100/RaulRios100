import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rescate Vivienda - Libérate de tus Deudas INFONAVIT",
  description:
    "Especialistas en rescate de propiedades INFONAVIT. Liquidamos tus deudas, rescatamos tu casa y liberamos tu futuro. Evaluación gratuita en 24 horas.",
  keywords: "INFONAVIT, rescate vivienda, liquidación deudas, casa abandonada, crédito hipotecario, México",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
