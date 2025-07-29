"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import NavigationHeader from "@/components/navigation-header"

export default function CasosDeExito() {
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
      <NavigationHeader title="Casos de Éxito" />

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Casos de <span className="text-orange-400">Éxito</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Descubre cómo hemos ayudado a empresas como la tuya a dominar los motores de IA y multiplicar su
              visibilidad online.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case 1 */}
            <Card className="border-2 border-slate-200 hover:border-green-300 transition-all duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-green-100 text-green-700">E-COMMERCE</Badge>
                <CardTitle className="text-xl">Escencia Mental CBD</CardTitle>
                <p className="text-slate-600">Servicios</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">+85%</div>
                      <div className="text-sm text-slate-600">Visibilidad en IA</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">+45%</div>
                      <div className="text-sm text-slate-600">Tráfico orgánico</div>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm">
                    "Ahora aparecemos en el 85% de las consultas de IA relacionadas con nuestros productos. Las ventas
                    se dispararon."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Case 2 */}
            <Card className="border-2 border-slate-200 hover:border-green-300 transition-all duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-blue-100 text-blue-700">SERVICIOS</Badge>
                <CardTitle className="text-xl">ROTO Cristales</CardTitle>
                <p className="text-slate-600">Reparación de Parabrisas</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">+120%</div>
                      <div className="text-sm text-slate-600">Citas generadas</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">78%</div>
                      <div className="text-sm text-slate-600">Precisión en IA</div>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm">
                    "Los pacientes nos encuentran directamente a través de ChatGPT y Google AI. Increíble ROI."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Case 3 */}
            <Card className="border-2 border-slate-200 hover:border-green-300 transition-all duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-orange-100 text-orange-700">HEALTHCARE</Badge>
                <CardTitle className="text-xl">OCEANICA</CardTitle>
                <p className="text-slate-600">Centros de Rehabilitación</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">+180%</div>
                      <div className="text-sm text-slate-600">Consultas</div>
                    </div>
                    <div className="text-center p-3 bg-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">65%</div>
                      <div className="text-sm text-slate-600">Share of voice</div>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm">
                    "Dominamos las respuestas legales en IA. Somos la referencia en nuestro sector."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">¿Listo para ser el próximo caso de éxito?</h2>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4"
              onClick={() => window.open("/agendar-sesion", "_self")}
            >
              Agendar mi sesión estratégica
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
