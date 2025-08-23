"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, CheckCircle, Clock, Shield, Users, Crown, BarChart3, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ContratarDominator() {
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
      <section className="bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="outline"
            className="mb-6 bg-transparent border-white text-white hover:bg-white hover:text-orange-800"
            onClick={handleBack}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
          <div className="text-center">
            <Badge className="mb-6 bg-orange-100 text-orange-700 px-4 py-2 text-sm font-medium">
              PAQUETE DOMINATOR - DOMINACIÓN TOTAL
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AIO <span className="text-orange-200">Dominator</span>
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Domina completamente tu mercado con la solución más avanzada de posicionamiento en IA
            </p>
            <div className="mt-6">
              <div className="text-4xl font-bold text-orange-200">$36,000 MXN</div>
              <div className="text-lg text-orange-100">o $2,000 USD mensuales</div>
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
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-300 mb-2">
                    Todo lo del paquete Accelerator +
                  </h3>
                  <p className="text-orange-800 dark:text-orange-200 text-sm">
                    10 URLs optimizadas, chatbot IA, 10 contenidos mensuales, análisis de competencia y más
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-700 p-2 rounded-full">
                    <Crown className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sitio completo optimizado</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Optimización completa de todo tu sitio web, sin límite de páginas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-700 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">PR digital y enlaces EEAT</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Construcción de autoridad con enlaces de alta calidad y presencia en medios digitales
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-700 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      20 contenidos por mes + chatbot experto
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Producción intensiva de contenido y chatbot avanzado con capacidades expertas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 dark:bg-red-700 p-2 rounded-full">
                    <Users className="h-6 w-6 text-red-600 dark:text-red-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Coaching mensual 1:1</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Sesiones personalizadas con nuestros expertos para maximizar resultados
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 dark:bg-yellow-700 p-2 rounded-full">
                    <BarChart3 className="h-6 w-6 text-yellow-600 dark:text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Dashboard de rendimiento</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Panel de control avanzado con métricas en tiempo real y análisis predictivo
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-12 p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-900 dark:text-orange-300 mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Beneficios Elite
                </h3>
                <ul className="space-y-2 text-orange-800 dark:text-orange-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Dominación completa en AI Overviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Posicionamiento líder en tu sector</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Soporte VIP con respuesta prioritaria</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Acceso directo al equipo senior</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Resultados medibles y reportes ejecutivos</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Order Form */}
            <div>
              <Card className="sticky top-8 border-2 border-orange-200 dark:border-orange-700">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
                  <CardTitle className="text-2xl text-center text-orange-800 dark:text-orange-300">
                    Contratar AIO Dominator
                  </CardTitle>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">$36,000 MXN</div>
                    <div className="text-slate-600 dark:text-slate-300">Mensual • Resultados superiores</div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
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
                        Facturación anual aproximada
                      </label>
                      <Input placeholder="Ej: $2,000,000 MXN" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Visión de dominación
                      </label>
                      <Textarea
                        placeholder="Describe tu visión de dominio en tu mercado y objetivos ambiciosos..."
                        rows={3}
                      />
                    </div>

                    <Button
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg"
                      onClick={() =>
                        window.open(
                          "https://wa.me/5256202022210?text=Hola%2C%20me%20interesa%20el%20plan%20AIO%20Dominator.%20%C2%BFPodr%C3%ADamos%20hablar%3F",
                          "_blank",
                        )
                      }
                      type="button"
                    >
                      Dominar mi mercado
                    </Button>

                    <div className="text-center space-y-2">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Al contratar aceptas nuestros términos de servicio premium
                      </p>
                      <div className="flex items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>Inicio inmediato</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>Soporte VIP 24/7</span>
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
