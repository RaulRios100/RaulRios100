"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Video, CheckCircle, ArrowLeft, Users, Target, BarChart3, Lightbulb } from "lucide-react"
import { useEffect } from "react"
import Link from "next/link"

export default function CalendarioPage() {
  useEffect(() => {
    // Cargar el script de Calendly
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Limpiar el script al desmontar el componente
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]',
      )
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-slate-700 dark:text-slate-300">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al inicio
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">Agenda tu Sesión Estratégica</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">Posicionamiento en IA para tu negocio</p>
            </div>
            <div className="w-24"></div> {/* Spacer para centrar el título */}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Información de la sesión */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2">
                🚀 Sesión Estratégica Gratuita
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Descubre cómo posicionar tu marca en los <span className="text-orange-500">motores de IA</span>
              </h2>
              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                En esta sesión de 30 minutos analizaremos tu situación actual y te mostraremos exactamente cómo aparecer
                en las respuestas de ChatGPT, Google AI y otros motores de inteligencia artificial.
              </p>
            </div>

            {/* Detalles de la sesión */}
            <Card className="border-2 border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                  <Video className="h-5 w-5" />
                  Detalles de la Sesión
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-slate-500" />
                  <span className="text-slate-700 dark:text-slate-300">
                    <strong>Duración:</strong> 30 minutos
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="h-5 w-5 text-slate-500" />
                  <span className="text-slate-700 dark:text-slate-300">
                    <strong>Modalidad:</strong> Videollamada por Zoom
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">
                    <strong>Precio:</strong> Completamente gratuito
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-slate-500" />
                  <span className="text-slate-700 dark:text-slate-300">
                    <strong>Confirmación:</strong> Automática con link de Zoom
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Qué obtendrás */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">¿Qué obtendrás en esta sesión?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 dark:bg-orange-700 p-2 rounded-full mt-1">
                    <Target className="h-4 w-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      Análisis de tu situación actual
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Revisaremos si tu marca aparece en las respuestas de IA y identificaremos oportunidades.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-700 p-2 rounded-full mt-1">
                    <Lightbulb className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Estrategia personalizada</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Te mostraremos exactamente qué pasos seguir para posicionarte en motores de IA.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-700 p-2 rounded-full mt-1">
                    <BarChart3 className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Plan de acción inmediato</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Recibirás un plan detallado con los primeros pasos que puedes implementar hoy mismo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 dark:bg-purple-700 p-2 rounded-full mt-1">
                    <Users className="h-4 w-4 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Análisis de competencia</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Veremos qué están haciendo tus competidores y cómo superarlos en el posicionamiento IA.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial o garantía */}
            <Card className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="font-semibold text-slate-900 dark:text-white">Garantía de valor</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 italic">
                  "Si al final de la sesión no sientes que has recibido valor concreto y accionable para tu negocio, te
                  compensaremos con una auditoría gratuita de tu sitio web."
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Widget de Calendly */}
          <div className="lg:sticky lg:top-24">
            <Card className="border-2 border-orange-200 dark:border-orange-800 shadow-xl">
              <CardHeader className="text-center bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
                <CardTitle className="text-2xl text-slate-900 dark:text-white">
                  Selecciona tu horario preferido
                </CardTitle>
                <p className="text-slate-600 dark:text-slate-400">Elige el día y hora que mejor te convenga</p>
              </CardHeader>
              <CardContent className="p-0">
                {/* Widget de Calendly */}
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/tu-usuario/sesion-estrategica-ia?hide_event_type_details=1&hide_gdpr_banner=1"
                  style={{ minWidth: "320px", height: "700px" }}
                ></div>
              </CardContent>
            </Card>

            {/* Información adicional */}
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">¿Prefieres contactarnos directamente?</p>
              <Link href="/">
                <Button variant="outline" size="sm">
                  Volver a la página principal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer simplificado */}
      <footer className="bg-slate-100 dark:bg-slate-800 py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Diseño y Optimización Online</h3>
          <p className="text-slate-600 dark:text-slate-400">Especialistas en posicionamiento para motores de IA</p>
        </div>
      </footer>
    </div>
  )
}
