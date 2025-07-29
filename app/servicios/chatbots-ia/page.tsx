"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Bot, CheckCircle, MessageSquare, Zap, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export default function ServiciosChatbotsIA() {
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
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Button
            variant="outline"
            className="mb-6 bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
            onClick={() => window.close()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
          <div className="text-center">
            <Badge className="mb-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm font-medium">
              🤖 Automatización IA
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Chatbots con <span className="text-blue-400">Inteligencia Artificial</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Automatiza la atención al cliente con chatbots inteligentes entrenados específicamente con tu contenido y
              servicios
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Chatbots <span className="text-blue-500">Inteligentes</span>
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Nuestros chatbots van más allá de respuestas predefinidas. Utilizan IA avanzada para entender el
                contexto, aprender de cada conversación y proporcionar respuestas personalizadas que realmente ayudan a
                tus clientes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">Disponible 24/7 sin interrupciones</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">Respuestas contextuales inteligentes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">Integración con tu CRM y sistemas</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
              <div className="text-center">
                <Bot className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Conversación Ejemplo</h3>
                <div className="space-y-3">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg text-left">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>Cliente:</strong> "¿Cuánto cuesta el posicionamiento en IA?"
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-700 p-3 rounded-lg text-left">
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>Chatbot:</strong> "Tenemos 3 paquetes: Launchpad ($10,000 MXN), Accelerator ($15,000 MXN)
                      y Dominator ($30,000 MXN). ¿Te gustaría que te explique las diferencias?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Características de nuestros chatbots
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="bg-green-100 dark:bg-green-700 p-3 rounded-full w-fit mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-green-600 dark:text-green-300" />
                  </div>
                  <CardTitle className="text-center">Conversacional</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Comprende lenguaje natural</li>
                    <li>• Mantiene contexto de conversación</li>
                    <li>• Respuestas personalizadas</li>
                    <li>• Tono de marca consistente</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-700 p-3 rounded-full w-fit mx-auto mb-4">
                    <Zap className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                  </div>
                  <CardTitle className="text-center">Inteligente</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Entrenado con tu contenido</li>
                    <li>• Aprende de cada interacción</li>
                    <li>• Escalación automática a humanos</li>
                    <li>• Análisis de sentimientos</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="bg-purple-100 dark:bg-purple-700 p-3 rounded-full w-fit mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                  </div>
                  <CardTitle className="text-center">Integrado</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Conecta con tu CRM</li>
                    <li>• Sincroniza con calendarios</li>
                    <li>• Reportes y analytics</li>
                    <li>• Multi-canal (web, WhatsApp, etc.)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              ¿Listo para automatizar tu atención al cliente?
            </h2>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4"
              onClick={() => window.open("/calendario", "_blank")}
            >
              Agenda tu consulta gratuita
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
