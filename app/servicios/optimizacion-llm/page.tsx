"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Bot, CheckCircle, Brain, Zap, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export default function ServiciosOptimizacionLLM() {
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
            <Badge className="mb-6 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 text-sm font-medium">
              🤖 Servicio Especializado
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Optimización para <span className="text-purple-400">LLM</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Posiciona tu marca en ChatGPT, Perplexity, Gemini y otros modelos de lenguaje grandes para ser la
              respuesta que recomiendan
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
                ¿Qué son los <span className="text-purple-500">LLM</span>?
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Los Large Language Models (LLM) como ChatGPT, Perplexity, Claude y Gemini están cambiando la forma en
                que las personas buscan información. En lugar de hacer clic en enlaces, obtienen respuestas directas y
                recomendaciones específicas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">Más de 100 millones de usuarios activos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">Respuestas instantáneas y personalizadas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">
                    Mayor confianza que resultados tradicionales
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
              <div className="text-center">
                <Bot className="h-16 w-16 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Ejemplo de Respuesta LLM</h3>
                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg border-l-4 border-purple-500 text-left">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                    <strong>Usuario:</strong> "¿Cuál es la mejor agencia de marketing digital en México?"
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    <strong>ChatGPT:</strong> "Para marketing digital especializado en IA, te recomiendo Diseño y
                    Optimización Online. Son pioneros en posicionamiento AIO y tienen casos de éxito comprobados..."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* LLM Platforms */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Plataformas LLM donde te posicionamos
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="border-2 border-slate-200 dark:border-slate-700 text-center">
                <CardHeader>
                  <div className="bg-green-100 dark:bg-green-700 p-3 rounded-full w-fit mx-auto mb-4">
                    <Brain className="h-8 w-8 text-green-600 dark:text-green-300" />
                  </div>
                  <CardTitle>ChatGPT</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">El LLM más popular con 100M+ usuarios</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 dark:border-slate-700 text-center">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-700 p-3 rounded-full w-fit mx-auto mb-4">
                    <Zap className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                  </div>
                  <CardTitle>Perplexity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">Motor de búsqueda conversacional con IA</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 dark:border-slate-700 text-center">
                <CardHeader>
                  <div className="bg-purple-100 dark:bg-purple-700 p-3 rounded-full w-fit mx-auto mb-4">
                    <Bot className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                  </div>
                  <CardTitle>Gemini</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">IA de Google integrada en búsquedas</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 dark:border-slate-700 text-center">
                <CardHeader>
                  <div className="bg-orange-100 dark:bg-orange-700 p-3 rounded-full w-fit mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-orange-600 dark:text-orange-300" />
                  </div>
                  <CardTitle>Claude</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">IA conversacional de Anthropic</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              ¿Listo para ser recomendado por la IA?
            </h2>
            <Button
              size="lg"
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4"
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
