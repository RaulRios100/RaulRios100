"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Phone } from "lucide-react"

interface ContactButtonsProps {
  variant?: "default" | "hero" | "footer"
  className?: string
}

export function ContactButtons({ variant = "default", className = "" }: ContactButtonsProps) {
  const whatsappNumber = "524775780721" // Formato internacional sin +
  const email = "soporte@rescatevivienda.mx"
  const phoneNumber = "+52 4775780721"

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "¡Hola! Me interesa conocer más sobre sus servicios de Rescate Vivienda. ¿Podrían ayudarme?",
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
  }

  const openEmail = () => {
    const subject = encodeURIComponent("Consulta sobre servicios de Rescate Vivienda")
    const body = encodeURIComponent(
      "Hola,\n\nMe interesa conocer más sobre sus servicios para resolver problemas con mi vivienda INFONAVIT.\n\nGracias.",
    )
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank")
  }

  const openPhone = () => {
    window.open(`tel:${phoneNumber}`, "_self")
  }

  if (variant === "hero") {
    return (
      <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg group"
          onClick={openWhatsApp}
        >
          <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
          Habla con un Experto
          <span className="ml-2 opacity-75">WhatsApp</span>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="px-8 py-4 text-lg border-2 hover:bg-green-50 dark:hover:bg-green-950"
          onClick={openEmail}
        >
          <Mail className="h-5 w-5 mr-2" />
          Enviar Email
        </Button>
      </div>
    )
  }

  if (variant === "footer") {
    return (
      <div className={`space-y-3 ${className}`}>
        <Button variant="ghost" className="w-full justify-start p-0 h-auto hover:text-green-500" onClick={openWhatsApp}>
          <MessageCircle className="h-4 w-4 mr-2 text-green-600" />
          <span>{phoneNumber}</span>
        </Button>
        <Button variant="ghost" className="w-full justify-start p-0 h-auto hover:text-green-500" onClick={openEmail}>
          <Mail className="h-4 w-4 mr-2 text-green-600" />
          <span>{email}</span>
        </Button>
      </div>
    )
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Button className="bg-green-600 hover:bg-green-700 text-white group" onClick={openWhatsApp}>
        <MessageCircle className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
        WhatsApp
      </Button>
      <Button variant="outline" onClick={openEmail}>
        <Mail className="h-4 w-4 mr-2" />
        Email
      </Button>
      <Button variant="outline" onClick={openPhone}>
        <Phone className="h-4 w-4 mr-2" />
        Llamar
      </Button>
    </div>
  )
}
