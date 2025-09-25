"use client"

import { useEffect } from "react"
import Script from "next/script"

declare global {
  interface Window {
    fbq: any
  }
}

export default function FacebookPixel() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.fbq =
        window.fbq ||
        (() => {
          ;(window.fbq.q = window.fbq.q || []).push(arguments)
        })
      window.fbq.l = +new Date()
      window.fbq("init", "YOUR_PIXEL_ID")
      window.fbq("track", "PageView")
    }
  }, [])

  return (
    <>
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
          `,
        }}
      />
    </>
  )
}

export const trackContact = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Contact")
  }
}

export const trackViewContent = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "ViewContent")
  }
}

export const trackPurchase = (value: number, currency = "MXN") => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Purchase", {
      value: value,
      currency: currency,
    })
  }
}
