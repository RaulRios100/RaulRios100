"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Crown,
  BarChart3,
  Zap,
  Brain,
  Target,
  Moon,
  Sun,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function ContratarEnterprise() {
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <DarkModeToggle />
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="outline"
            className="mb-6 bg-transparent border-white text-white hover:bg-white hover:text-purple-800"
            onClick={() => window.close()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
          <div className="text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-700 px-4 py-2 text-sm font-medium">
              PAQUETE ENTERPRISE - SOLUCIÓN CORPORATIVA
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AIO <span className="text-purple-200">Enterprise</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              La solución más avanzada para corporaciones que buscan liderar completamente su industria en IA
            </p>
            <div className="mt-6">
              <div className="text-4xl font-bold text-purple-200">$70,000 MXN</div>
              <div className="text-lg text-purple-100">o $3,888 USD</div>
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
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                    Todo lo del paquete Dominator +
                  </h3>
                  <p className="text-purple-800 dark:text-purple-200 text-sm">
                    Sitio completo optimizado, PR digital, 20 contenidos mensuales, coaching 1:1 y más
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 dark:bg-indigo-700 p-2 rounded-full">
                    <Crown className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Optimización ilimitada</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Sin límites de páginas, productos o secciones. Optimización completa de toda tu presencia digital
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-700 p-2 rounded-full">
                    <Brain className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      IA personalizada y entrenamiento custom
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Desarrollo de modelos de IA específicos para tu industria y entrenamiento con tu base de
                      conocimiento
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-700 p-2 rounded-full">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Account Manager dedicado</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Ejecutivo de cuenta exclusivo disponible 24/7 para tu empresa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-700 p-2 rounded-full">
                    <Zap className="h-6 w-6 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      50 contenidos mensuales + múltiples chatbots
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Producción masiva de contenido y ecosistema completo de chatbots especializados
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 dark:bg-orange-700 p-2 rounded-full">
                    <BarChart3 className="h-6 w-6 text-orange-600 dark:text-orange-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Analytics y reporting avanzado
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Dashboard ejecutivo con métricas personalizadas, reportes automáticos y análisis predictivo
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 dark:bg-red-700 p-2 rounded-full">
                    <Target className="h-6 w-6 text-red-600 dark:text-red-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Capacitación y consultoría estratégica
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Sesiones de capacitación para tu equipo y consultoría estratégica mensual con C-level
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 dark:bg-yellow-700 p-2 rounded-full">
                    <Shield className="h-6 w-6 text-yellow-600 dark:text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Soluciones white-label</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Implementación de soluciones con tu marca para ofrecer a tus propios clientes
                    </p>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Garantías Enterprise
                </h3>
                <ul className="space-y-2 text-purple-800 dark:text-purple-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Dominación completa en AI Overviews en 21 días o reembolso total</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Posicionamiento #1 en tu industria garantizado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>SLA de respuesta en menos de 1 hora, 24/7/365</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Acceso directo al equipo ejecutivo y fundadores</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>ROI mínimo garantizado del 500% en 6 meses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Implementación prioritaria y onboarding VIP</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Order Form */}
            <div>
              <Card className="sticky top-8 border-2 border-purple-200 dark:border-purple-700">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
                  <CardTitle className="text-2xl text-center text-purple-800 dark:text-purple-300">
                    Contratar AIO Enterprise
                  </CardTitle>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">$70,000 MXN</div>
                    <div className="text-slate-600 dark:text-slate-300">Solución corporativa • Máximo ROI</div>
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
                        Email corporativo *
                      </label>
                      <Input type="email" placeholder="tu@empresa.com" required />
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
                        Sitio web corporativo *
                      </label>
                      <Input placeholder="https://tuempresa.com" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Cargo/Posición *
                      </label>
                      <Input placeholder="CEO, CMO, Director de Marketing..." required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Facturación anual aproximada *
                      </label>
                      <Input placeholder="Ej: $50,000,000 MXN" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Tamaño del equipo
                      </label>
                      <Input placeholder="Número de empleados" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Objetivos estratégicos y visión corporativa
                      </label>
                      <Textarea
                        placeholder="Describe tu visión de liderazgo en la industria, objetivos de crecimiento y cómo planeas dominar tu mercado..."
                        rows={4}
                      />
                    </div>

                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 text-lg">
                      Solicitar implementación Enterprise
                    </Button>

                    <div className="text-center space-y-2">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Al contratar aceptas nuestros términos de servicio enterprise
                      </p>
                      <div className="flex items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>Implementación inmediata</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>Account Manager dedicado</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Shield className="h-3 w-3" />
                          <span>SLA garantizado</span>
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
