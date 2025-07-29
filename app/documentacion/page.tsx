"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, FileText, Code, Settings, BookOpen, Download, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export default function Documentacion() {
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
              📚 Documentación
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Documentación <span className="text-purple-400">Técnica</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Guías completas, especificaciones técnicas y recursos para implementar posicionamiento en IA
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-12">
              <TabsTrigger value="getting-started" className="text-sm py-3">
                <BookOpen className="mr-2 h-4 w-4" />
                Primeros Pasos
              </TabsTrigger>
              <TabsTrigger value="technical" className="text-sm py-3">
                <Code className="mr-2 h-4 w-4" />
                Implementación
              </TabsTrigger>
              <TabsTrigger value="api" className="text-sm py-3">
                <Settings className="mr-2 h-4 w-4" />
                API & Herramientas
              </TabsTrigger>
              <TabsTrigger value="resources" className="text-sm py-3">
                <FileText className="mr-2 h-4 w-4" />
                Recursos
              </TabsTrigger>
            </TabsList>

            {/* Getting Started */}
            <TabsContent value="getting-started">
              <div className="space-y-8">
                <Card className="border-2 border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-2xl">Introducción al Posicionamiento AIO</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">¿Qué es AIO?</h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-4">
                        AIO (AI Optimization) es la práctica de optimizar contenido web para aparecer en respuestas
                        generadas por inteligencia artificial, incluyendo Google AI Overviews, ChatGPT, Perplexity y
                        otros LLMs.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Conceptos Clave</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                          <h4 className="font-medium text-blue-900 dark:text-blue-300 mb-2">
                            AEO (Answer Engine Optimization)
                          </h4>
                          <p className="text-sm text-blue-800 dark:text-blue-200">
                            Optimización para motores de respuesta como Google AI Overviews
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                          <h4 className="font-medium text-green-900 dark:text-green-300 mb-2">
                            GEO (Generative Engine Optimization)
                          </h4>
                          <p className="text-sm text-green-800 dark:text-green-200">
                            Optimización para LLMs como ChatGPT y Perplexity
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                        Proceso de Implementación
                      </h3>
                      <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
                        <li>Auditoría inicial de presencia en IA</li>
                        <li>Implementación de datos estructurados</li>
                        <li>Creación de contenido conversacional</li>
                        <li>Optimización técnica del sitio</li>
                        <li>Monitoreo y ajustes continuos</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Technical Implementation */}
            <TabsContent value="technical">
              <div className="space-y-8">
                <Card className="border-2 border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-2xl">Implementación Técnica</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                        Schema Markup Esencial
                      </h3>
                      <div className="bg-slate-900 p-4 rounded-lg mb-4">
                        <pre className="text-green-400 text-sm overflow-x-auto">
                          {`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "¿Qué es el posicionamiento AIO?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "El posicionamiento AIO es la optimización..."
    }
  }]
}`}
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                        Estructura de Contenido Q&A
                      </h3>
                      <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Formato Recomendado:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300">
                          <li>Pregunta clara y específica como H2 o H3</li>
                          <li>Respuesta directa en 2-3 líneas</li>
                          <li>Información adicional en párrafos siguientes</li>
                          <li>Uso de listas y elementos estructurados</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                        Optimización para Featured Snippets
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                          <h4 className="font-medium text-orange-900 dark:text-orange-300 mb-2">Párrafo</h4>
                          <p className="text-sm text-orange-800 dark:text-orange-200">
                            Respuesta directa de 40-60 palabras
                          </p>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                          <h4 className="font-medium text-purple-900 dark:text-purple-300 mb-2">Lista</h4>
                          <p className="text-sm text-purple-800 dark:text-purple-200">
                            Pasos numerados o elementos con viñetas
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* API & Tools */}
            <TabsContent value="api">
              <div className="space-y-8">
                <Card className="border-2 border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-2xl">Herramientas y APIs</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                        Herramientas de Análisis
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                          <h4 className="font-medium text-blue-900 dark:text-blue-300 mb-2">SEMrush</h4>
                          <p className="text-sm text-blue-800 dark:text-blue-200">Análisis de AI Overviews</p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                          <h4 className="font-medium text-green-900 dark:text-green-300 mb-2">Alli AI</h4>
                          <p className="text-sm text-green-800 dark:text-green-200">Automatización AIO</p>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                          <h4 className="font-medium text-purple-900 dark:text-purple-300 mb-2">BrightEdge</h4>
                          <p className="text-sm text-purple-800 dark:text-purple-200">Tracking SGE</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">APIs Recomendadas</h3>
                      <div className="space-y-4">
                        <div className="border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Google Search Console API</h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                            Monitoreo de performance en búsquedas
                          </p>
                          <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-xs">
                            https://developers.google.com/webmaster-tools/search-console-api-original
                          </code>
                        </div>
                        <div className="border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Schema.org Validator</h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                            Validación de datos estructurados
                          </p>
                          <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-xs">
                            https://validator.schema.org/
                          </code>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Resources */}
            <TabsContent value="resources">
              <div className="space-y-8">
                <Card className="border-2 border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-2xl">Recursos Descargables</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-lg">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Checklist AIO Completo</h3>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                          Lista de verificación paso a paso para implementar posicionamiento AIO
                        </p>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          <Download className="mr-2 h-4 w-4" />
                          Descargar PDF
                        </Button>
                      </div>

                      <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-lg">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Templates Schema Markup</h3>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                          Plantillas JSON-LD listas para usar en tu sitio web
                        </p>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          <Download className="mr-2 h-4 w-4" />
                          Descargar ZIP
                        </Button>
                      </div>

                      <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-lg">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guía de Contenido Q&A</h3>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                          Cómo crear contenido optimizado para respuestas de IA
                        </p>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          <Download className="mr-2 h-4 w-4" />
                          Descargar PDF
                        </Button>
                      </div>

                      <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-lg">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Métricas y KPIs AIO</h3>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                          Dashboard template para monitorear tu progreso en IA
                        </p>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          <Download className="mr-2 h-4 w-4" />
                          Descargar Excel
                        </Button>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
                      <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                        ¿Necesitas ayuda personalizada?
                      </h3>
                      <p className="text-purple-800 dark:text-purple-200 mb-4">
                        Nuestro equipo puede ayudarte a implementar estas estrategias específicamente para tu negocio
                      </p>
                      <Button
                        className="bg-purple-500 hover:bg-purple-600 text-white"
                        onClick={() => window.open("/calendario", "_blank")}
                      >
                        Agendar Consulta Técnica
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
