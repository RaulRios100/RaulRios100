"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Phone } from "lucide-react"

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000) // Show after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Me interesa conocer más sobre sus servicios de liberación de vivienda. ¿Pueden ayudarme?",
    )
    window.open(`https://wa.me/524791080098?text=${message}`, "_blank")
    setIsOpen(false)
  }

  const handlePhoneClick = () => {
    window.open("tel:+524791080098", "_self")
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border p-4 w-64 animate-in slide-in-from-bottom duration-300">
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-semibold text-sm">¿Necesitas ayuda?</h4>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-6 w-6 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Contáctanos ahora y recibe atención personalizada</p>
          <div className="space-y-2">
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-sm"
              size="sm"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            <Button onClick={handlePhoneClick} variant="outline" className="w-full text-sm bg-transparent" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Llamar
            </Button>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  )
}
