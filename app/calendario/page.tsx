"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, CheckCircle, Video } from "lucide-react"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import NavigationHeader from "@/components/navigation-header"

export default function Calendario() {
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
      <NavigationHeader title="Agenda tu Consulta" />

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-medium">
            📅 Consulta Estratégica Gratuita
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Agenda tu <span className="text-orange-400">Auditoría Gratuita</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Descubre cómo tu negocio puede dominar los motores de IA en una sesión personalizada de 30 minutos
          </p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                ¿Qué incluye tu consulta gratuita?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Análisis de tu situación actual</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Revisamos tu presencia actual en motores de IA y identificamos oportunidades
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Estrategia personalizada</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Plan específico para tu industria y objetivos de negocio
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Roadmap de implementación</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Pasos claros para comenzar a aparecer en respuestas de IA
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-900 dark:text-orange-300 mb-2">
                  Sin compromiso, 100% gratuito
                </h3>
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  Esta consulta es completamente gratuita y sin compromiso. Solo queremos ayudarte a entender el
                  potencial de tu negocio en la era de la IA.
                </p>
              </div>
            </div>

            <div>
              <Card className="border-2 border-orange-200 dark:border-orange-700">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-slate-900 dark:text-white">Selecciona tu horario</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <Clock className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                      <div className="font-semibold text-slate-900 dark:text-white">30 minutos</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Duración</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <Video className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                      <div className="font-semibold text-slate-900 dark:text-white">Video llamada</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Google Meet</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900 dark:text-white">Horarios disponibles:</h4>
                    <Button className="w-full justify-start bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600 hover:bg-orange-50 dark:hover:bg-orange-900/20">
                      <Calendar className="mr-2 h-4 w-4" />
                      Lunes a Viernes: 9:00 AM - 6:00 PM
                    </Button>
                    <Button className="w-full justify-start bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600 hover:bg-orange-50 dark:hover:bg-orange-900/20">
                      <Calendar className="mr-2 h-4 w-4" />
                      Sábados: 10:00 AM - 2:00 PM
                    </Button>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() => window.open("https://calendly.com/tu-calendario", "_blank")}
                  >
                    Agendar mi consulta gratuita
                  </Button>

                  <p className="text-center text-sm text-slate-600 dark:text-slate-400">
                    Recibirás un email de confirmación con el enlace de la videollamada
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
