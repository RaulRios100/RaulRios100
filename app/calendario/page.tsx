"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, CheckCircle, Users, Video, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export default function CalendarioPage() {
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

  const horarios = [
    { dia: "Lunes", fecha: "27 Enero", slots: ["09:00", "11:00", "14:00", "16:00"] },
    { dia: "Martes", fecha: "28 Enero", slots: ["10:00", "12:00", "15:00", "17:00"] },
    { dia: "Miércoles", fecha: "29 Enero", slots: ["09:00", "11:30", "14:30", "16:30"] },
    { dia: "Jueves", fecha: "30 Enero", slots: ["10:30", "13:00", "15:30", "17:30"] },
    { dia: "Viernes", fecha: "31 Enero", slots: ["09:30", "12:30", "14:00", "16:00"] },
  ]

  const handleScheduleClick = (dia: string, hora: string) => {
    // URL de Google Calendar con parámetros pre-llenados
    const startDate = new Date()
    startDate.setHours(Number.parseInt(hora.split(":")[0]), Number.parseInt(hora.split(":")[1]))

    const endDate = new Date(startDate)
    endDate.setMinutes(endDate.getMinutes() + 30)

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Auditoría%20Gratuita%20-%20Posicionamiento%20AIO&dates=${startDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z/${endDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z&details=Sesión%20estratégica%20gratuita%20para%20analizar%20tu%20posicionamiento%20en%20motores%20de%20IA&location=Videollamada%20(enlace%20se%20enviará%20por%20email)&sf=true&output=xml`

    window.open(googleCalendarUrl, "_blank")
  }

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
            Agenda tu <span className="text-orange-400">Auditoría Gratuita</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Selecciona el horario que mejor te convenga para tu sesión estratégica de 30 minutos. Analizaremos tu
            presencia actual en motores de IA.
          </p>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="py-8 px-4 bg-green-50 border-b border-green-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-medium">100% Gratuita</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-medium">30 minutos</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Video className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-medium">Por videollamada</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Users className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-medium">Sin compromiso</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Elige tu <span className="text-orange-500">horario preferido</span>
            </h2>
            <p className="text-lg text-slate-600">Todos los horarios están en zona horaria de México (GMT-6)</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {horarios.map((dia, index) => (
              <Card
                key={index}
                className="border-2 border-slate-200 hover:border-orange-300 transition-all duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <Badge className="w-fit mx-auto mb-2 bg-slate-100 text-slate-700">{dia.dia}</Badge>
                  <CardTitle className="text-lg text-slate-900">{dia.fecha}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {dia.slots.map((hora, slotIndex) => (
                    <Button
                      key={slotIndex}
                      variant="outline"
                      size="sm"
                      className="w-full hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700"
                      onClick={() => handleScheduleClick(dia.dia, hora)}
                    >
                      <Clock className="mr-2 h-4 w-4" />
                      {hora}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* What to Expect */}
          <div className="mt-16">
            <Card className="bg-white border-2 border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-slate-900">
                  ¿Qué incluye tu auditoría gratuita?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-orange-100 p-2 rounded-full">
                        <CheckCircle className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Análisis de presencia en IA</h3>
                        <p className="text-slate-600 text-sm">
                          Revisamos si apareces en Google AI Overviews, ChatGPT, Perplexity y otros motores de IA
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-orange-100 p-2 rounded-full">
                        <CheckCircle className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Evaluación de competencia</h3>
                        <p className="text-slate-600 text-sm">
                          Analizamos cómo se posicionan tus competidores en las respuestas de IA
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-orange-100 p-2 rounded-full">
                        <CheckCircle className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Oportunidades identificadas</h3>
                        <p className="text-slate-600 text-sm">
                          Te mostramos gaps específicos que puedes aprovechar inmediatamente
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-orange-100 p-2 rounded-full">
                        <CheckCircle className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Estrategia personalizada</h3>
                        <p className="text-slate-600 text-sm">
                          Plan específico para tu sector con acciones prioritarias
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-orange-100 p-2 rounded-full">
                        <CheckCircle className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Proyección de ROI</h3>
                        <p className="text-slate-600 text-sm">
                          Estimación realista de resultados y retorno de inversión
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-orange-100 p-2 rounded-full">
                        <CheckCircle className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Reporte ejecutivo</h3>
                        <p className="text-slate-600 text-sm">
                          Documento PDF con hallazgos y recomendaciones para tu equipo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">¿Necesitas un horario diferente o tienes alguna pregunta?</p>
            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  "mailto:contacto@posicionamientoaio.com?subject=Consulta sobre auditoría gratuita",
                  "_blank",
                )
              }
            >
              Contáctanos directamente
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
