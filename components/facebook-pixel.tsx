"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

declare global {
  interface Window {
    fbq: any
  }
}

export function FacebookPixel() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView")
    }
  }, [pathname])

  return null
}

// Función para trackear eventos personalizados
export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, parameters)
  }
}

// Eventos específicos para el negocio
export const trackLead = (value?: number) => {
  trackEvent("Lead", { value, currency: "MXN" })
}

export const trackContact = () => {
  trackEvent("Contact")
}

export const trackViewContent = (contentName: string) => {
  trackEvent("ViewContent", { content_name: contentName })
}

export const trackInitiateCheckout = (planName: string, value: number) => {
  trackEvent("InitiateCheckout", {
    content_name: planName,
    value,
    currency: "MXN",
  })
}
