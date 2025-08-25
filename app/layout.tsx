import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

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
        {/* Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
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
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=644155554997693&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
