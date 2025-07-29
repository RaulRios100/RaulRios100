"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Calendar, Clock, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export default function AgendarSesion() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light") {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    } else {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const DarkModeToggle = () => (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-6 right-6 z-50 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
    >
      {isDarkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-slate-600" />}
    </button>
  )

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <DarkModeToggle />
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="outline"
            className="mb-6 bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
            onClick={() => window.close()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Agenda tu <span className="text-orange-400">Sesión Estratégica</span>
          </h1>
          <p className="text-xl text-slate-300">
            Descubre cómo posicionar tu marca en los motores de IA. Sesión gratuita de 30 minutos.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">En esta sesión descubrirás:</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Auditoría gratuita de tu presencia en IA</h3>
                    <p className="text-slate-600">Analizamos si apareces en Google AI Overviews y ChatGPT</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Estrategia personalizada</h3>
                    <p className="text-slate-600">Plan específico para tu sector y competencia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Oportunidades de crecimiento</h3>
                    <p className="text-slate-600">Identificamos gaps que puedes aprovechar inmediatamente</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">ROI proyectado</h3>
                    <p className="text-slate-600">Estimación de resultados y retorno de inversión</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-800">Sesión de 30 minutos</span>
                </div>
                <p className="text-green-700 text-sm">Sin compromiso • Totalmente gratuita • Resultados inmediatos</p>
              </div>
            </div>

            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-500" />
                  Reserva tu sesión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Nombre *</label>
                      <Input placeholder="Tu nombre" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Apellido *</label>
                      <Input placeholder="Tu apellido" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                    <Input type="email" placeholder="tu@email.com" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Teléfono *</label>
                    <Input type="tel" placeholder="+52 55 1234 5678" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Empresa</label>
                    <Input placeholder="Nombre de tu empresa" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Sitio web</label>
                    <Input placeholder="https://tuempresa.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      ¿Cuál es tu principal desafío digital?
                    </label>
                    <Textarea placeholder="Cuéntanos brevemente sobre tu situación actual..." rows={3} />
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                    Agendar mi sesión gratuita
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    Al enviar este formulario aceptas nuestros términos de privacidad
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
