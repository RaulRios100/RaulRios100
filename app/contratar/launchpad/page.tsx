"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, CheckCircle, Clock, Shield, Users, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ContratarLaunchpad() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const router = useRouter()

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

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push("/")
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <DarkModeToggle />
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="outline"
            className="mb-6 bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
            onClick={handleBack}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
          <div className="text-center">
            <Badge className="mb-6 bg-slate-100 text-slate-700 px-4 py-2 text-sm font-medium">PAQUETE LAUNCHPAD</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AIO <span className="text-orange-400">Launchpad</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              El punto de partida perfecto para posicionar tu marca en los motores de IA
            </p>
            <div className="mt-6">
              <div className="text-4xl font-bold text-orange-400">$12,000 MXN</div>
              <div className="text-lg text-slate-300">o $666 USD mensuales</div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Package Features */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">¿Qué incluye este paquete?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-700 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Auditoría inicial completa</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Análisis profundo de tu presencia actual en motores de IA y identificación de oportunidades
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-700 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Optimización de 5 páginas clave
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Optimización completa de tus páginas más importantes para aparecer en AI Overviews
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-700 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Datos estructurados</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Implementación de FAQPage y LocalBusiness schema para mejor comprensión por parte de la IA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 dark:bg-orange-700 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-orange-600 dark:text-orange-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      5 contenidos conversacionales mensuales
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Artículos optimizados para IA con formato Q&A y estructura conversacional
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 dark:bg-red-700 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-red-600 dark:text-red-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Reporte mensual de visibilidad
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Dashboard con métricas de aparición en AI Overviews y motores generativos
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-12 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-300 mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Beneficios incluidos
                </h3>
                <ul className="space-y-2 text-green-800 dark:text-green-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Mejora significativa en visibilidad orgánica</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Soporte técnico incluido durante todo el período</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Reportes mensuales detallados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Estrategia personalizada para tu industria</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Order Form */}
            <div>
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Contratar AIO Launchpad</CardTitle>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-900 dark:text-white">$12,000 MXN</div>
                    <div className="text-slate-600 dark:text-slate-300">Mensual • Cancela cuando quieras</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Nombre *
                        </label>
                        <Input placeholder="Tu nombre" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Apellido *
                        </label>
                        <Input placeholder="Tu apellido" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email *
                      </label>
                      <Input type="email" placeholder="tu@email.com" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Teléfono *
                      </label>
                      <Input type="tel" placeholder="+52 55 1234 5678" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Empresa *
                      </label>
                      <Input placeholder="Nombre de tu empresa" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Sitio web *
                      </label>
                      <Input placeholder="https://tuempresa.com" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Cuéntanos sobre tu negocio
                      </label>
                      <Textarea placeholder="Describe brevemente tu empresa y objetivos..." rows={3} />
                    </div>

                    <Button
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 text-lg"
                      onClick={() =>
                        window.open(
                          "https://wa.me/5256202022210?text=Hola%2C%20me%20interesa%20el%20plan%20AIO%20Launchpad.%20%C2%BFPodr%C3%ADamos%20hablar%3F",
                          "_blank",
                        )
                      }
                      type="button"
                    >
                      Contratar AIO Launchpad
                    </Button>

                    <div className="text-center space-y-2">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Al contratar aceptas nuestros términos de servicio
                      </p>
                      <div className="flex items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>Inicio en 48h</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>Soporte incluido</span>
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
