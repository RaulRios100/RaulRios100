"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, FileText, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export default function TerminosDeServicio() {
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
              📋 Términos Legales
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Términos de <span className="text-blue-400">Servicio</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Condiciones generales que rigen el uso de nuestros servicios de posicionamiento en IA
            </p>
            <p className="text-sm text-slate-400">Última actualización: 15 de enero de 2025</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-500" />
                  1. Aceptación de los Términos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  Al contratar nuestros servicios de posicionamiento AIO (AI Optimization), usted acepta estar sujeto a
                  estos términos de servicio. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar
                  nuestros servicios.
                </p>
                <p>
                  Estos términos se aplican a todos los usuarios de nuestros servicios, incluyendo pero no limitándose
                  a: consultas gratuitas, auditorías, implementación de estrategias AIO, y servicios de soporte.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-green-500" />
                  2. Descripción de Servicios
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  Diseño y Optimización Online ofrece servicios especializados en posicionamiento para motores de
                  inteligencia artificial, incluyendo:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Optimización para AI Overviews (Google SGE)</li>
                  <li>Posicionamiento en LLMs (ChatGPT, Perplexity, Gemini)</li>
                  <li>Implementación de datos estructurados (Schema Markup)</li>
                  <li>Creación de contenido conversacional optimizado para IA</li>
                  <li>Desarrollo e integración de chatbots inteligentes</li>
                  <li>Auditorías técnicas y estratégicas</li>
                  <li>Monitoreo y reportes de performance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-orange-500" />
                  3. Garantías y Limitaciones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <div>
                  <h4 className="font-semibold mb-2">Garantías Ofrecidas:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Visibilidad en AI Overviews dentro del plazo acordado o extensión del servicio</li>
                    <li>Uso exclusivo de técnicas white-hat aprobadas por motores de búsqueda</li>
                    <li>Reportes mensuales detallados con métricas específicas</li>
                    <li>Soporte técnico durante la duración del contrato</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Limitaciones:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Los resultados pueden variar según la competencia del sector</li>
                    <li>Los algoritmos de IA están en constante evolución</li>
                    <li>No garantizamos posiciones específicas en rankings tradicionales</li>
                    <li>Los tiempos de implementación pueden variar según la complejidad técnica</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>4. Obligaciones del Cliente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>El cliente se compromete a:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Proporcionar acceso necesario a su sitio web y herramientas de análisis</li>
                  <li>Facilitar información precisa sobre su negocio y objetivos</li>
                  <li>Revisar y aprobar contenido antes de su publicación</li>
                  <li>Realizar pagos según los términos acordados</li>
                  <li>No implementar cambios que puedan afectar negativamente el trabajo realizado</li>
                  <li>Comunicar cualquier cambio en su estrategia de negocio que pueda afectar el proyecto</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>5. Términos de Pago</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <div>
                  <h4 className="font-semibold mb-2">Modalidades de Pago:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Pago único para paquetes Launchpad, Accelerator y Dominator</li>
                    <li>Pagos mensuales para servicios de mantenimiento y soporte continuo</li>
                    <li>50% de anticipo para proyectos personalizados</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Condiciones:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Los pagos deben realizarse dentro de los primeros 5 días del mes</li>
                    <li>Retrasos en pagos pueden resultar en suspensión temporal del servicio</li>
                    <li>Reembolsos sujetos a evaluación caso por caso</li>
                    <li>Precios en pesos mexicanos (MXN) o dólares estadounidenses (USD)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>6. Confidencialidad y Propiedad Intelectual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <div>
                  <h4 className="font-semibold mb-2">Confidencialidad:</h4>
                  <p>
                    Nos comprometemos a mantener la confidencialidad de toda la información proporcionada por el
                    cliente, incluyendo datos de negocio, estrategias, y cualquier información sensible compartida
                    durante la prestación del servicio.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Propiedad Intelectual:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>El contenido creado específicamente para el cliente le pertenece</li>
                    <li>
                      Las metodologías y herramientas desarrolladas por nosotros siguen siendo de nuestra propiedad
                    </li>
                    <li>El cliente puede usar nuestro trabajo para su negocio, pero no puede revenderlo</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>7. Terminación del Servicio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <div>
                  <h4 className="font-semibold mb-2">Por parte del Cliente:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Puede cancelar con 30 días de aviso previo</li>
                    <li>Debe completar el pago de servicios ya prestados</li>
                    <li>Conserva acceso a todo el trabajo completado hasta la fecha</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Por nuestra parte:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Podemos terminar el servicio por incumplimiento de pago</li>
                    <li>En caso de comportamiento abusivo o irrespetuoso</li>
                    <li>Si el cliente solicita prácticas que van contra nuestros estándares éticos</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>8. Limitación de Responsabilidad</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  Nuestra responsabilidad se limita al valor de los servicios contratados. No seremos responsables por:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pérdidas de ingresos o beneficios indirectos</li>
                  <li>Cambios en algoritmos de motores de búsqueda o IA</li>
                  <li>Acciones de terceros que afecten el rendimiento del sitio</li>
                  <li>Problemas técnicos fuera de nuestro control</li>
                  <li>Decisiones de negocio basadas en nuestras recomendaciones</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>9. Modificaciones a los Términos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán
                  notificados a los clientes activos con al menos 30 días de anticipación y entrarán en vigor para
                  nuevos contratos inmediatamente.
                </p>
                <p>
                  El uso continuado de nuestros servicios después de la notificación de cambios constituye la aceptación
                  de los nuevos términos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>10. Contacto y Resolución de Disputas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>Para cualquier consulta sobre estos términos o para resolver disputas, puede contactarnos en:</p>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong> legal@posicionamientoaio.com
                  </p>
                  <p>
                    <strong>Teléfono:</strong> +52 55 1234 5678
                  </p>
                  <p>
                    <strong>Dirección:</strong> Ciudad de México, México
                  </p>
                </div>
                <p>
                  Estos términos se rigen por las leyes de México. Cualquier disputa será resuelta mediante arbitraje o
                  en los tribunales competentes de Ciudad de México.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  ¿Tienes preguntas sobre nuestros términos?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Nuestro equipo legal está disponible para aclarar cualquier duda
                </p>
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={() => window.open("/contacto", "_blank")}
                >
                  Contactar Equipo Legal
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
