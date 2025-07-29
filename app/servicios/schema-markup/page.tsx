"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Code, CheckCircle, Database, Settings, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export default function ServiciosSchemaMarkup() {
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
            <Badge className="mb-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm font-medium">
              📊 Servicio Técnico
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Implementación de <span className="text-green-400">Schema Markup</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Datos estructurados que ayudan a la IA a entender tu contenido y mostrarlo en resultados enriquecidos
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
                ¿Qué es <span className="text-green-500">Schema Markup</span>?
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Schema Markup es un código estructurado que ayuda a los motores de búsqueda y a la IA a entender mejor
                tu contenido. Es el lenguaje que hablan las máquinas para comprender qué representa cada elemento de tu
                sitio web.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">Mejora la comprensión de la IA</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">
                    Aumenta las posibilidades de featured snippets
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">Resultados enriquecidos en búsquedas</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
              <div className="text-center">
                <Code className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Ejemplo de Schema</h3>
                <div className="bg-slate-900 p-4 rounded-lg text-left text-sm">
                  <pre className="text-green-400">
                    {`{
  "@type": "LocalBusiness",
  "name": "Tu Empresa",
  "description": "Descripción",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle 123",
    "addressLocality": "Ciudad"
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Schema Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Tipos de Schema que implementamos
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-700 p-3 rounded-full w-fit mx-auto mb-4">
                    <Database className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                  </div>
                  <CardTitle className="text-center">LocalBusiness</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Información de contacto</li>
                    <li>• Horarios de atención</li>
                    <li>• Ubicación y dirección</li>
                    <li>• Reseñas y calificaciones</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="bg-green-100 dark:bg-green-700 p-3 rounded-full w-fit mx-auto mb-4">
                    <Settings className="h-8 w-8 text-green-600 dark:text-green-300" />
                  </div>
                  <CardTitle className="text-center">FAQPage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Preguntas frecuentes</li>
                    <li>• Respuestas estructuradas</li>
                    <li>• Optimizado para IA</li>
                    <li>• Featured snippets</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="bg-purple-100 dark:bg-purple-700 p-3 rounded-full w-fit mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                  </div>
                  <CardTitle className="text-center">Product</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Información de productos</li>
                    <li>• Precios y disponibilidad</li>
                    <li>• Reseñas de productos</li>
                    <li>• Especificaciones técnicas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              ¿Listo para estructurar tu contenido?
            </h2>
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4"
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
