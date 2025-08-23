"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, CheckCircle, Clock, Shield, Users, Zap, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ContratarAccelerator() {
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
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="outline"
            className="mb-6 bg-transparent border-white text-white hover:bg-white hover:text-green-800"
            onClick={handleBack}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
          <div className="text-center">
            <Badge className="mb-6 bg-green-100 text-green-700 px-4 py-2 text-sm font-medium">
              PAQUETE ACCELERATOR - MÁS POPULAR
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AIO <span className="text-green-200">Accelerator</span>
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Acelera tu crecimiento con optimización avanzada y chatbot IA incluido
            </p>
            <div className="mt-6">
              <div className="text-4xl font-bold text-green-200">$18,000 MXN</div>
              <div className="text-lg text-green-100">o $1,000 USD mensuales</div>
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
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                    Todo lo del paquete Launchpad +
                  </h3>
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    Auditoría completa, optimización de 5 páginas, schema markup, contenido mensual y reportes
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-700 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Optimización de 10 URLs</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Duplicamos la cantidad de páginas optimizadas para mayor cobertura en motores de IA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-700 p-2 rounded-full">
                    <Zap className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Integración de chatbot LLM simple
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Chatbot inteligente entrenado con tu contenido para responder consultas de clientes 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 dark:bg-orange-700 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-orange-600 dark:text-orange-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">10 contenidos por mes</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Duplicamos la producción de contenido optimizado para IA con formato conversacional
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 dark:bg-red-700 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-red-600 dark:text-red-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Análisis de competencia en SGE
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Monitoreo mensual de cómo se posicionan tus competidores en Search Generative Experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-12 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-300 mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Beneficios Premium
                </h3>
                <ul className="space-y-2 text-green-800 dark:text-green-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Mayor visibilidad en AI Overviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Chatbot funcionando en tiempo récord</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Soporte prioritario y consultas ilimitadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Dashboard avanzado con métricas de competencia</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Order Form */}
            <div>
              <Card className="sticky top-8 border-2 border-green-200 dark:border-green-700">
                <CardHeader className="bg-green-50 dark:bg-green-900/20">
                  <CardTitle className="text-2xl text-center text-green-800 dark:text-green-300">
                    Contratar AIO Accelerator
                  </CardTitle>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">$18,000 MXN</div>
                    <div className="text-slate-600 dark:text-slate-300">Mensual • Máximo valor</div>
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
                        Objetivos de crecimiento
                      </label>
                      <Textarea placeholder="Describe tus metas y expectativas con este paquete..." rows={3} />
                    </div>

                    <Button
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg"
                      onClick={() =>
                        window.open(
                          "https://wa.me/5256202022210?text=Hola%2C%20me%20interesa%20el%20plan%20AIO%20Accelerator.%20%C2%BFPodr%C3%ADamos%20hablar%3F",
                          "_blank",
                        )
                      }
                      type="button"
                    >
                      Acelerar mi crecimiento
                    </Button>

                    <div className="text-center space-y-2">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Al contratar aceptas nuestros términos de servicio
                      </p>
                      <div className="flex items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>Inicio en 24h</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>Soporte prioritario</span>
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
