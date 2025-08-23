"use client"
import { Button } from "antd"
import { MessageCircle } from "lucide-react"

const AgendarSesionPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Agenda tu Auditoría</h1>
      <Button
        size="lg"
        className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold"
        onClick={() =>
          window.open(
            "https://wa.me/5256202022210?text=Hola,%20me%20interesa%20agendar%20una%20sesi%C3%B3n%20estrat%C3%A9gica",
            "_blank",
          )
        }
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        Agenda mi sesión estratégica
      </Button>
      {/* rest of code here */}
    </div>
  )
}

export default AgendarSesionPage
