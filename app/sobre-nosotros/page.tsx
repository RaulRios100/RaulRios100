"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Target, Zap, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"
import NavigationHeader from "@/components/navigation-header"

export default function SobreNosotros() {
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
      <NavigationHeader title="Sobre Nosotros" />

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-medium">
              🚀 Nuestra Historia
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Sobre <span className="text-orange-400">Nosotros</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Somos pioneros en posicionamiento para motores de IA, ayudando a empresas a dominar el futuro del
              marketing digital
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Nuestra <span className="text-green-500">Misión</span>
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                En Diseño y Optimización Online, creemos que el futuro del marketing digital está en la inteligencia
                artificial. Mientras otros se enfocan en SEO tradicional, nosotros nos especializamos en posicionar
                marcas en los motores de IA que están transformando la forma en que las personas buscan información.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Nuestra misión es simple: hacer que tu marca sea la respuesta que la IA recomienda cuando los usuarios
                buscan productos o servicios como los tuyos.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-500">150+</div>
                  <div className="text-slate-600 dark:text-slate-300">Clientes satisfechos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-500">95%</div>
                  <div className="text-slate-600 dark:text-slate-300">Tasa de éxito</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">3 años</div>
                  <div className="text-slate-600 dark:text-slate-300">Especializados en IA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-500">24/7</div>
                  <div className="text-slate-600 dark:text-slate-300">Soporte disponible</div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Nuestros <span className="text-orange-500">Valores</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="border-2 border-slate-200 dark:border-slate-700 text-center">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-700 p-3 rounded-full w-fit mx-auto mb-4">
                    <Zap className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                  </div>
                  <CardTitle>Innovación</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">
                    Siempre a la vanguardia de las nuevas tecnologías de IA
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 dark:border-slate-700 text-center">
                <CardHeader>
                  <div className="bg-green-100 dark:bg-green-700 p-3 rounded-full w-fit mx-auto mb-4">
                    <Target className="h-8 w-8 text-green-600 dark:text-green-300" />
                  </div>
                  <CardTitle>Resultados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">Nos enfocamos en métricas reales y ROI medible</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 dark:border-slate-700 text-center">
                <CardHeader>
                  <div className="bg-purple-100 dark:bg-purple-700 p-3 rounded-full w-fit mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                  </div>
                  <CardTitle>Colaboración</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">Trabajamos como una extensión de tu equipo</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 dark:border-slate-700 text-center">
                <CardHeader>
                  <div className="bg-orange-100 dark:bg-orange-700 p-3 rounded-full w-fit mx-auto mb-4">
                    <Award className="h-8 w-8 text-orange-600 dark:text-orange-300" />
                  </div>
                  <CardTitle>Excelencia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">Calidad premium en cada proyecto que entregamos</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              ¿Listo para trabajar con nosotros?
            </h2>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4"
              onClick={() => (window.location.href = "/calendario")}
            >
              Agenda tu consulta gratuita
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
