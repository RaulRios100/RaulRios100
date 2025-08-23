"use client"
import { Button } from "antd"
import { MessageCircle } from "lucide-react"

const AgendarSesionPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Agenda tu Auditoría</h1>
      <Button
        size="lg"
        className="w-full bg-orange-600 hover:bg-orange-700 text-white"
        onClick={() =>
          window.open(
            "https://wa.me/5256202022210?text=Hola,%20me%20interesa%20agendar%20una%20auditoría%20de%20SEO%20con%20IA",
            "_blank",
          )
        }
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        Contactar por WhatsApp para Agendar
      </Button>
      {/* rest of code here */}
    </div>
  )
}

export default AgendarSesionPage
