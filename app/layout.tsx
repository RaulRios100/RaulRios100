import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Diseño y Optimización Online - Agencia SEO con IA",
  description:
    "Agencia líder en posicionamiento para AI Overviews, SGE y motores de búsqueda generativos. Aumenta tu visibilidad donde realmente importa.",
  keywords: "SEO, IA, AI Overviews, SGE, marketing digital, posicionamiento web",
  authors: [{ name: "Diseño y Optimización Online" }],
  creator: "Diseño y Optimización Online",
  publisher: "Diseño y Optimización Online",
  metadataBase: new URL("https://disenooptimizaciononline.com"),
  openGraph: {
    title: "Diseño y Optimización Online - Agencia SEO con IA",
    description: "Agencia líder en posicionamiento para AI Overviews, SGE y motores de búsqueda generativos.",
    url: "https://disenooptimizaciononline.com",
    siteName: "Diseño y Optimización Online",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diseño y Optimización Online - Agencia SEO con IA",
    description: "Agencia líder en posicionamiento para AI Overviews, SGE y motores de búsqueda generativos.",
  },
  robots: {
    index: true,
    follow: true,
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '644155554997693');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
