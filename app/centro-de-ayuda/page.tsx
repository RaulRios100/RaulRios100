"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, Search, HelpCircle, BookOpen, MessageSquare, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export default function CentroDeAyuda() {
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
              🆘 Centro de Ayuda
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              ¿Cómo podemos <span className="text-blue-400">ayudarte</span>?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Encuentra respuestas rápidas a tus preguntas sobre posicionamiento en IA, nuestros servicios y procesos
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                placeholder="Buscar en el centro de ayuda..."
                className="pl-12 py-4 text-lg bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 text-center">
              <CardHeader>
                <div className="bg-blue-100 dark:bg-blue-700 p-4 rounded-full w-fit mx-auto mb-4">
                  <HelpCircle className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                </div>
                <CardTitle>Preguntas Frecuentes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Respuestas a las preguntas más comunes sobre nuestros servicios
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Ver FAQ
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-700 transition-all duration-300 text-center">
              <CardHeader>
                <div className="bg-green-100 dark:bg-green-700 p-4 rounded-full w-fit mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-green-600 dark:text-green-300" />
                </div>
                <CardTitle>Guías y Tutoriales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Aprende paso a paso sobre posicionamiento en IA
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Ver Guías
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 text-center">
              <CardHeader>
                <div className="bg-purple-100 dark:bg-purple-700 p-4 rounded-full w-fit mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                </div>
                <CardTitle>Soporte Directo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Contacta directamente con nuestro equipo de soporte
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Contactar
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Preguntas Frecuentes
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-white dark:bg-slate-800 rounded-lg px-6 border border-slate-200 dark:border-slate-700"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white">
                  ¿Qué es el posicionamiento AIO y cómo funciona?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 dark:text-slate-300">
                  El posicionamiento AIO (AI Optimization) es la optimización de contenido para aparecer en respuestas
                  generadas por inteligencia artificial como Google AI Overviews, ChatGPT, Perplexity, etc. Funciona
                  mediante la implementación de datos estructurados, contenido conversacional y técnicas específicas que
                  ayudan a la IA a entender y citar tu contenido.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white dark:bg-slate-800 rounded-lg px-6 border border-slate-200 dark:border-slate-700"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white">
                  ¿Cuánto tiempo toma ver resultados?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 dark:text-slate-300">
                  Los primeros resultados en AI Overviews pueden verse entre 4-8 semanas. Para LLMs como ChatGPT, el
                  proceso puede tomar 2-3 meses para consolidarse completamente. Los tiempos varían según la competencia
                  del sector y el estado actual de tu sitio web.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white dark:bg-slate-800 rounded-lg px-6 border border-slate-200 dark:border-slate-700"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white">
                  ¿Qué incluye la auditoría gratuita?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 dark:text-slate-300">
                  La auditoría gratuita incluye: análisis de tu presencia actual en motores de IA, evaluación de
                  competencia, identificación de oportunidades específicas, estrategia personalizada para tu sector, y
                  proyección de ROI. Todo esto en una sesión de 30 minutos sin compromiso.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white dark:bg-slate-800 rounded-lg px-6 border border-slate-200 dark:border-slate-700"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white">
                  ¿Cómo se diferencia del SEO tradicional?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 dark:text-slate-300">
                  Mientras el SEO tradicional se enfoca en rankings en resultados de búsqueda, el posicionamiento AIO
                  optimiza para aparecer directamente en respuestas generadas por IA. Incluye técnicas específicas como
                  schema markup avanzado, contenido conversacional, y optimización para featured snippets que la IA
                  puede citar.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white dark:bg-slate-800 rounded-lg px-6 border border-slate-200 dark:border-slate-700"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white">
                  ¿Ofrecen garantías en sus servicios?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 dark:text-slate-300">
                  Sí, ofrecemos garantía de visibilidad en AI Overviews o extendemos el servicio sin costo adicional.
                  También garantizamos técnicas white-hat sin riesgo de penalizaciones, soporte técnico incluido, y
                  reportes mensuales detallados con métricas específicas de IA.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white dark:bg-slate-800 rounded-lg px-6 border border-slate-200 dark:border-slate-700"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white">
                  ¿Puedo combinar AIO con mis campañas pagadas actuales?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 dark:text-slate-300">
                  Absolutamente. De hecho, es la combinación perfecta. Las campañas pagadas te dan visibilidad inmediata
                  mientras que el posicionamiento AIO te asegura presencia orgánica a largo plazo, reduciendo tu
                  dependencia de la publicidad pagada y mejorando tu ROI general.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Contact Support */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  ¿No encontraste lo que buscabas?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Nuestro equipo de soporte está listo para ayudarte con cualquier pregunta específica
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() => window.open("/contacto", "_blank")}
                  >
                    Contactar Soporte
                  </Button>
                  <Button variant="outline" onClick={() => window.open("/calendario", "_blank")}>
                    Agendar Consulta
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
