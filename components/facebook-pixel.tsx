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
    // Initialize Facebook Pixel
    if (typeof window !== "undefined" && window.fbq) {
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
    </>
  )
}

// Utility functions for tracking events
export const trackLead = (value?: number) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      value: value,
      currency: "MXN",
    })
  }
}

export const trackContact = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Contact")
  }
}

export const trackInitiateCheckout = (planName: string, value: number) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "InitiateCheckout", {
      content_name: planName,
      value: value,
      currency: "MXN",
    })
  }
}

export const trackViewContent = (contentName: string) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "ViewContent", {
      content_name: contentName,
    })
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

export const trackCompleteRegistration = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "CompleteRegistration")
  }
}
