"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, CheckCircle, Users, Video, Star } from "lucide-react"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import NavigationHeader from "@/components/navigation-header"

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
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <DarkModeToggle />
      <NavigationHeader title="Sesión Estratégica" />

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm font-medium">
            🎯 Sesión Estratégica Premium
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sesión Estratégica <span className="text-green-400">Personalizada</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Una sesión profunda de 60 minutos para crear tu estrategia completa de posicionamiento en IA
          </p>
        </div>
      </section>

      {/* Session Details */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Tu sesión estratégica incluye:</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-700 p-2 rounded-full">
                    <Star className="h-6 w-6 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-2">
                      Auditoría completa en vivo
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Analizamos tu sitio web en tiempo real, identificando oportunidades específicas para aparecer en
                      AI Overviews y respuestas generativas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-700 p-2 rounded-full">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-2">
                      Estrategia de competencia
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Analizamos qué están haciendo tus competidores en motores de IA y cómo puedes superarlos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-700 p-2 rounded-full">
                    <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-2">
                      Plan de acción de 90 días
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Roadmap detallado con tareas específicas, prioridades y cronograma para los próximos 3 meses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 dark:bg-orange-700 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-orange-600 dark:text-orange-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-2">
                      Recomendaciones de herramientas
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Lista personalizada de herramientas y recursos específicos para tu industria y presupuesto.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-2 border-green-200 dark:border-green-700 sticky top-8">
                <CardHeader className="text-center bg-green-50 dark:bg-green-900/20">
                  <CardTitle className="text-2xl text-slate-900 dark:text-white">Agenda tu sesión</CardTitle>
                  <p className="text-slate-600 dark:text-slate-400">60 minutos que cambiarán tu negocio</p>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <Clock className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <div className="font-semibold text-slate-900 dark:text-white">60 minutos</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Sesión completa</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <Video className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                      <div className="font-semibold text-slate-900 dark:text-white">Online</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Zoom/Meet</div>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    onClick={() =>
                      window.open(
                        "https://wa.me/525620202210?text=Hola,%20me%20interesa%20agendar%20una%20sesi%C3%B3n%20estrat%C3%A9gica",
                        "_blank",
                      )
                    }
                  >
                    Agendar mi sesión estratégica por WhatsApp
                  </Button>

                  <div className="text-center space-y-2">
                    <p className="text-sm text-slate-600 dark:text-slate-400">✅ Garantía de satisfacción 100%</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      ✅ Pago seguro con tarjeta o transferencia
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
