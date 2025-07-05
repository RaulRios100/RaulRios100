"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(true)

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "¡Hola! Vi su página web y me interesa conocer más sobre Rescate Vivienda. ¿Pueden ayudarme?",
    )
    window.open(`https://wa.me/524775780721?text=${message}`, "_blank")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
        size="icon"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
      <div className="absolute -top-12 right-0 bg-black/80 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
        ¡Chatea con nosotros!
      </div>
    </div>
  )
}
