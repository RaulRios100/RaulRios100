"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { Moon, Sun, Calendar, Clock, CheckCircle, Users, Zap, Target } from "lucide-react"
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
      <NavigationHeader title="Agendar Sesión Estratégica" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-medium">
            🎯 Auditoría Estratégica Personalizada
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Descubre cómo <span className="text-orange-400">dominar los motores de IA</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            En esta sesión estratégica analizaremos tu situación actual y te mostraremos exactamente cómo posicionar tu
            marca en las respuestas de inteligencia artificial.
          </p>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Lo que obtienes en tu <span className="text-green-500">sesión estratégica</span>
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300">
              Una auditoría completa y personalizada de tu presencia digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-slate-200 dark:border-slate-700 hover:border-green-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-green-100 dark:bg-green-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl">Análisis de Visibilidad en IA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 text-center">
                  Evaluamos tu presencia actual en ChatGPT, Google AI, Perplexity y otros motores de IA para identificar
                  oportunidades de mejora.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-blue-100 dark:bg-blue-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl">Análisis de Competencia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 text-center">
                  Identificamos qué están haciendo tus competidores para aparecer en las respuestas de IA y cómo puedes
                  superarlos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700 hover:border-purple-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-purple-100 dark:bg-purple-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-xl">Estrategia Personalizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 text-center">
                  Creamos un plan de acción específico para tu industria y objetivos, con pasos claros y medibles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700 hover:border-orange-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-orange-100 dark:bg-orange-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl">Recomendaciones Técnicas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 text-center">
                  Te mostramos exactamente qué cambios técnicos necesitas implementar en tu sitio web para mejorar tu
                  posicionamiento.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700 hover:border-red-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-red-100 dark:bg-red-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-red-500" />
                </div>
                <CardTitle className="text-xl">Plan de Contenidos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 text-center">
                  Definimos qué tipo de contenido necesitas crear para que la IA te reconozca como autoridad en tu
                  sector.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-indigo-100 dark:bg-indigo-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-indigo-500" />
                </div>
                <CardTitle className="text-xl">Cronograma de Implementación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 text-center">
                  Te entregamos un cronograma detallado con fechas específicas para implementar cada estrategia y
                  maximizar resultados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Cómo funciona la <span className="text-blue-500">sesión estratégica</span>
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Análisis Previo</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Antes de la sesión, nuestro equipo realiza un análisis preliminar de tu sitio web, competencia y
                  presencia actual en motores de IA.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Sesión Estratégica (60 min)</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Sesión personalizada donde revisamos los hallazgos, identificamos oportunidades y definimos la
                  estrategia específica para tu negocio.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Plan de Acción</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Te entregamos un documento detallado con todas las recomendaciones, cronograma y próximos pasos para
                  implementar la estrategia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para <span className="text-orange-400">dominar los motores de IA</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            No esperes más. Cada día que pasa sin optimización para IA es una oportunidad perdida. Agenda tu sesión
            estratégica ahora y comienza a recuperar la visibilidad que mereces.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() =>
                window.open(
                  "https://wa.me/525620202210?text=Hola,%20me%20interesa%20agendar%20mi%20sesi%C3%B3n%20estrat%C3%A9gica%20de%20posicionamiento%20en%20IA",
                  "_blank",
                )
              }
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar mi sesión estratégica
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Sesión personalizada</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Plan de acción incluido</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
