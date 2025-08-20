"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

interface ContactButtonsProps {
  variant?: "default" | "hero" | "footer"
}

export function ContactButtons({ variant = "default" }: ContactButtonsProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Me interesa conocer más sobre sus servicios de liberación de vivienda. ¿Pueden ayudarme?",
    )
    window.open(`https://wa.me/524791080098?text=${message}`, "_blank")
  }

  const handlePhoneClick = () => {
    window.open("tel:+524791080098", "_self")
  }

  if (variant === "hero") {
    return (
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg group"
          onClick={handleWhatsAppClick}
        >
          <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
          WhatsApp Gratis
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-950 px-8 py-4 text-lg bg-transparent"
          onClick={handlePhoneClick}
        >
          <Phone className="h-5 w-5 mr-2" />
          Llamar Ahora
        </Button>
      </div>
    )
  }

  if (variant === "footer") {
    return (
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Phone className="h-4 w-4" />
          <span className="text-sm">+52 479 108 0098</span>
        </div>
        <div className="flex space-x-2">
          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white" onClick={handleWhatsAppClick}>
            <MessageCircle className="h-4 w-4 mr-1" />
            WhatsApp
          </Button>
          <Button size="sm" variant="outline" onClick={handlePhoneClick}>
            <Phone className="h-4 w-4 mr-1" />
            Llamar
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex space-x-2">
      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white" onClick={handleWhatsAppClick}>
        <MessageCircle className="h-4 w-4 mr-1" />
        WhatsApp
      </Button>
      <Button size="sm" variant="outline" onClick={handlePhoneClick}>
        <Phone className="h-4 w-4 mr-1" />
        Llamar
      </Button>
    </div>
  )
}
