"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { Moon, Sun, CheckCircle, Crown, Brain, Users, Zap, Shield, BarChart3, Clock } from "lucide-react"
import NavigationHeader from "@/components/navigation-header"

export default function EnterprisePage() {
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
      <NavigationHeader title="AIO Enterprise" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 text-lg font-medium">
            <Crown className="mr-2 h-5 w-5" />
            SOLUCIÓN ENTERPRISE
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AIO <span className="text-purple-400">Enterprise</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-200 max-w-4xl mx-auto">
            La solución más completa para corporaciones que buscan dominar completamente su mercado a través de la
            inteligencia artificial
          </p>
          <div className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-5xl font-bold text-purple-300 mb-2">$70,000 MXN</div>
            <div className="text-xl text-purple-200">o $3,888 USD mensuales</div>
            <div className="text-sm text-purple-300 mt-2">Facturación mensual • Sin permanencia mínima</div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Todo lo que incluye <span className="text-purple-500">Enterprise</span>
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300">
              Una solución integral diseñada para empresas que no aceptan límites
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Optimización Ilimitada */}
            <Card className="border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 transition-all duration-300">
              <CardHeader>
                <Crown className="h-12 w-12 text-purple-500 mb-4" />
                <CardTitle className="text-xl text-slate-900 dark:text-white">Optimización Ilimitada</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Páginas ilimitadas optimizadas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Productos y servicios sin límite</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Múltiples sitios web incluidos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Optimización en tiempo real</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* IA Personalizada */}
            <Card className="border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 transition-all duration-300">
              <CardHeader>
                <Brain className="h-12 w-12 text-purple-500 mb-4" />
                <CardTitle className="text-xl text-slate-900 dark:text-white">IA Personalizada</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Modelo de IA entrenado específicamente</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>5 chatbots especializados</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Integración con sistemas internos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>API personalizada</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Account Manager Dedicado */}
            <Card className="border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-500 mb-4" />
                <CardTitle className="text-xl text-slate-900 dark:text-white">Soporte Premium 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Account Manager dedicado</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Soporte 24/7 prioritario</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Llamadas semanales de estrategia</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Acceso directo al equipo técnico</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contenido Masivo */}
            <Card className="border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 transition-all duration-300">
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-500 mb-4" />
                <CardTitle className="text-xl text-slate-900 dark:text-white">Producción Masiva</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>50 contenidos mensuales optimizados</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Contenido en múltiples idiomas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Videos y multimedia incluidos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Distribución automatizada</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Analytics Avanzados */}
            <Card className="border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 transition-all duration-300">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-purple-500 mb-4" />
                <CardTitle className="text-xl text-slate-900 dark:text-white">Analytics Ejecutivos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Dashboard ejecutivo personalizado</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Reportes predictivos con IA</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Análisis de competencia en tiempo real</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>ROI tracking avanzado</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Garantías Premium */}
            <Card className="border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-500 mb-4" />
                <CardTitle className="text-xl text-slate-900 dark:text-white">Garantías Enterprise</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Dominancia en 21 días o reembolso</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>500% ROI garantizado en 6 meses</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>SLA de 99.9% uptime</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Protección legal incluida</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exclusive Benefits */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Beneficios <span className="text-purple-500">Exclusivos Enterprise</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Capacitación y Consultoría</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Capacitación del equipo interno:</strong>
                    <p className="text-slate-700 dark:text-slate-300">
                      Formamos a tu equipo en las mejores prácticas de AIO
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Consultoría estratégica mensual:</strong>
                    <p className="text-slate-700 dark:text-slate-300">Sesiones con nuestros expertos senior</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Acceso a beta features:</strong>
                    <p className="text-slate-700 dark:text-slate-300">Primeros en probar nuevas funcionalidades</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Soluciones White-Label</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Plataforma con tu marca:</strong>
                    <p className="text-slate-700 dark:text-slate-300">Dashboard y herramientas personalizadas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Reventa autorizada:</strong>
                    <p className="text-slate-700 dark:text-slate-300">Ofrece nuestros servicios bajo tu marca</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Comisiones preferenciales:</strong>
                    <p className="text-slate-700 dark:text-slate-300">Hasta 40% de comisión en referidos</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Cronograma de <span className="text-purple-500">Implementación</span>
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300">
              Un proceso estructurado para garantizar el éxito desde el día uno
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-700 p-6 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-300">1</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Semana 1-2</h3>
              <p className="text-slate-700 dark:text-slate-300">
                Auditoría completa y configuración inicial del ecosistema
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-700 p-6 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-300">2</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Semana 3-4</h3>
              <p className="text-slate-700 dark:text-slate-300">
                Implementación de IA personalizada y primeros contenidos
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-700 p-6 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-300">3</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Mes 2</h3>
              <p className="text-slate-700 dark:text-slate-300">Optimización masiva y capacitación del equipo</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-700 p-6 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-300">4</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Mes 3+</h3>
              <p className="text-slate-700 dark:text-slate-300">Dominancia completa y optimización continua</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para <span className="text-purple-400">dominar tu mercado</span>?
          </h2>
          <p className="text-xl text-purple-200 mb-12 max-w-3xl mx-auto">
            El plan Enterprise está diseñado para empresas que no aceptan ser segundas. Si buscas resultados
            extraordinarios, este es tu momento.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 text-lg font-semibold"
              onClick={() =>
                window.open(
                  "https://wa.me/5256202022210?text=Hola, estoy interesado en el plan AIO Enterprise de $70,000 MXN. Me gustaría agendar una consulta.",
                  "_blank",
                )
              }
            >
              <Clock className="mr-2 h-5 w-5" />
              Agendar consulta Enterprise
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg"
              onClick={() => (window.location.href = "/")}
            >
              Ver otros planes
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-sm text-purple-200">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Implementación inmediata</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Account Manager dedicado</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Garantía de dominancia</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
