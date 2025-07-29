"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Search, CheckCircle, Brain, Target, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export default function ServiciosAIOverviews() {
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
              🔍 Servicio Especializado
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Optimización para <span className="text-blue-400">AI Overviews</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Posiciona tu marca en las respuestas generadas por Google AI (SGE) y domina los resultados de búsqueda del
              futuro
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
                ¿Qué son los <span className="text-blue-500">AI Overviews</span>?
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Los AI Overviews (anteriormente SGE - Search Generative Experience) son las respuestas generadas por
                inteligencia artificial que aparecen en la parte superior de los resultados de Google, proporcionando
                respuestas directas a las consultas de los usuarios.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">Aparecen en el 40% de las búsquedas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">
                    Capturan la atención antes que los resultados orgánicos
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">Generan mayor confianza y autoridad</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
              <div className="text-center">
                <Search className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Ejemplo de AI Overview</h3>
                <div className="bg-white dark:bg-slate-700 p-4 rounded-lg border-l-4 border-blue-500 text-left">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                    <strong>¿Cómo optimizar mi sitio web para IA?</strong>
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Para optimizar tu sitio web para IA necesitas implementar schema markup, crear contenido en formato
                    Q&A, y asegurar que tu contenido responda preguntas específicas de manera clara y concisa...
                  </p>
                  <div className="mt-2 text-xs text-blue-600 dark:text-blue-400">
                    Fuentes: tuempresa.com, ejemplo.com
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Nuestro proceso de optimización
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-700 p-3 rounded-full w-fit mx-auto mb-4">
                    <Brain className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                  </div>
                  <CardTitle className="text-center">Análisis de Oportunidades</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Identificación de queries con AI Overviews</li>
                    <li>• Análisis de competencia en SGE</li>
                    <li>• Mapeo de intenciones de búsqueda</li>
                    <li>• Evaluación de contenido actual</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="bg-green-100 dark:bg-green-700 p-3 rounded-full w-fit mx-auto mb-4">
                    <Target className="h-8 w-8 text-green-600 dark:text-green-300" />
                  </div>
                  <CardTitle className="text-center">Optimización Técnica</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Implementación de schema markup</li>
                    <li>• Estructura de contenido Q&A</li>
                    <li>• Optimización de featured snippets</li>
                    <li>• Mejora de autoridad EEAT</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="bg-purple-100 dark:bg-purple-700 p-3 rounded-full w-fit mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                  </div>
                  <CardTitle className="text-center">Monitoreo y Ajustes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Tracking de apariciones en AI Overviews</li>
                    <li>• Análisis de performance</li>
                    <li>• Optimizaciones continuas</li>
                    <li>• Reportes detallados</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              ¿Listo para aparecer en AI Overviews?
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
