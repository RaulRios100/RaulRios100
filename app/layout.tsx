import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LiberaCréditoDeTuCasa - Libérate de tus Deudas Hipotecarias",
  description: "Liberamos tu casa, rescatamos tu futuro. Especialistas en liquidación de deudas hipotecarias.",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Analytics />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
