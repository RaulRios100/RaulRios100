"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Lock, Eye, Database, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export default function Privacidad() {
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
            onClick={() => (window.location.href = "/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
          <div className="text-center">
            <Badge className="mb-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm font-medium">
              🔒 Política de Privacidad
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Política de <span className="text-green-400">Privacidad</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Cómo recopilamos, usamos y protegemos tu información personal en nuestros servicios de posicionamiento IA
            </p>
            <p className="text-sm text-slate-400">Última actualización: 15 de enero de 2025</p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  1. Información que Recopilamos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <div>
                  <h4 className="font-semibold mb-2">Información Personal:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nombre completo y datos de contacto (email, teléfono)</li>
                    <li>Información de la empresa (nombre, sitio web, sector)</li>
                    <li>Datos de facturación y pago</li>
                    <li>Comunicaciones y correspondencia con nuestro equipo</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Información Técnica:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Datos de analytics de tu sitio web (con tu autorización)</li>
                    <li>Información sobre el rendimiento de tu sitio</li>
                    <li>Métricas de posicionamiento en motores de IA</li>
                    <li>Logs de acceso y uso de nuestros servicios</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-blue-500" />
                  2. Cómo Usamos tu Información
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>Utilizamos tu información personal para:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Prestación de servicios:</strong> Implementar estrategias de posicionamiento AIO
                    personalizadas
                  </li>
                  <li>
                    <strong>Comunicación:</strong> Mantener contacto sobre el progreso de tu proyecto
                  </li>
                  <li>
                    <strong>Facturación:</strong> Procesar pagos y mantener registros contables
                  </li>
                  <li>
                    <strong>Mejora de servicios:</strong> Analizar tendencias para mejorar nuestras metodologías
                  </li>
                  <li>
                    <strong>Soporte técnico:</strong> Resolver problemas y brindar asistencia
                  </li>
                  <li>
                    <strong>Marketing (con consentimiento):</strong> Enviar información sobre nuevos servicios y
                    actualizaciones
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-purple-500" />
                  3. Compartir Información con Terceros
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>No vendemos ni alquilamos tu información personal. Podemos compartir datos limitados con:</p>
                <div>
                  <h4 className="font-semibold mb-2">Proveedores de Servicios:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Plataformas de analytics (Google Analytics, SEMrush) - solo datos agregados</li>
                    <li>Servicios de hosting y almacenamiento en la nube</li>
                    <li>Procesadores de pago (Stripe, PayPal) - solo información de facturación</li>
                    <li>Herramientas de comunicación (email marketing, CRM)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Casos Especiales:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Cuando sea requerido por ley o autoridades competentes</li>
                    <li>Para proteger nuestros derechos legales o los de nuestros clientes</li>
                    <li>En caso de fusión o adquisición empresarial (con notificación previa)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-orange-500" />
                  4. Seguridad de los Datos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>Implementamos múltiples capas de seguridad para proteger tu información:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Medidas Técnicas:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Encriptación SSL/TLS para todas las transmisiones</li>
                      <li>Almacenamiento encriptado en servidores seguros</li>
                      <li>Autenticación de dos factores para accesos administrativos</li>
                      <li>Monitoreo continuo de seguridad</li>
                      <li>Backups regulares y seguros</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Medidas Organizacionales:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Acceso limitado solo a personal autorizado</li>
                      <li>Capacitación regular en seguridad de datos</li>
                      <li>Políticas internas de manejo de información</li>
                      <li>Auditorías de seguridad periódicas</li>
                      <li>Acuerdos de confidencialidad con empleados</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>5. Tus Derechos de Privacidad</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>Tienes los siguientes derechos sobre tu información personal:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Derechos de Acceso:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Solicitar una copia de tus datos personales</li>
                      <li>Conocer cómo procesamos tu información</li>
                      <li>Verificar la exactitud de tus datos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Derechos de Control:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Corregir información inexacta o incompleta</li>
                      <li>Solicitar la eliminación de tus datos</li>
                      <li>Limitar el procesamiento de tu información</li>
                      <li>Retirar el consentimiento en cualquier momento</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    <strong>Para ejercer estos derechos:</strong> Envía un email a privacy@posicionamientoaio.com con tu
                    solicitud. Responderemos dentro de 30 días hábiles.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>6. Cookies y Tecnologías de Seguimiento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <div>
                  <h4 className="font-semibold mb-2">Tipos de Cookies que Usamos:</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-medium text-blue-700 dark:text-blue-300">Cookies Esenciales</h5>
                      <p className="text-sm">Necesarias para el funcionamiento básico del sitio web</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-medium text-green-700 dark:text-green-300">Cookies de Analytics</h5>
                      <p className="text-sm">Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-medium text-purple-700 dark:text-purple-300">Cookies de Marketing</h5>
                      <p className="text-sm">
                        Para personalizar contenido y mostrar anuncios relevantes (solo con consentimiento)
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm bg-slate-50 dark:bg-slate-800 p-3 rounded">
                  Puedes controlar las cookies a través de la configuración de tu navegador o nuestro banner de cookies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>7. Retención de Datos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>Conservamos tu información personal durante los siguientes períodos:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Datos de clientes activos:</strong> Durante la duración del contrato más 2 años
                  </li>
                  <li>
                    <strong>Información de facturación:</strong> 7 años (requerimiento legal fiscal)
                  </li>
                  <li>
                    <strong>Datos de marketing:</strong> Hasta que retires el consentimiento
                  </li>
                  <li>
                    <strong>Logs técnicos:</strong> 12 meses máximo
                  </li>
                  <li>
                    <strong>Comunicaciones:</strong> 3 años para referencia y soporte
                  </li>
                </ul>
                <p className="text-sm bg-blue-50 dark:bg-blue-900/20 p-3 rounded border border-blue-200 dark:border-blue-800">
                  Después de estos períodos, eliminamos o anonimizamos tu información de manera segura.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>8. Transferencias Internacionales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  Algunos de nuestros proveedores de servicios pueden estar ubicados fuera de México. En estos casos:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Solo transferimos datos a países con niveles adecuados de protección</li>
                  <li>Implementamos salvaguardas contractuales adicionales</li>
                  <li>Verificamos que los proveedores cumplan con estándares internacionales</li>
                  <li>Limitamos las transferencias al mínimo necesario</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>9. Privacidad de Menores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  Nuestros servicios están dirigidos a empresas y profesionales. No recopilamos intencionalmente
                  información personal de menores de 18 años.
                </p>
                <p>
                  Si descubrimos que hemos recopilado información de un menor sin el consentimiento parental apropiado,
                  eliminaremos esa información inmediatamente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>10. Cambios a esta Política</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  Podemos actualizar esta política de privacidad ocasionalmente para reflejar cambios en nuestras
                  prácticas o por razones legales.
                </p>
                <p>Te notificaremos sobre cambios significativos mediante:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Email a la dirección registrada en tu cuenta</li>
                  <li>Aviso prominente en nuestro sitio web</li>
                  <li>Actualización de la fecha de "última modificación" en esta página</li>
                </ul>
                <p>
                  El uso continuado de nuestros servicios después de los cambios constituye tu aceptación de la política
                  actualizada.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>11. Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos tu información personal,
                  puedes contactarnos:
                </p>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg space-y-2">
                  <p>
                    <strong>Email:</strong> privacy@posicionamientoaio.com
                  </p>
                  <p>
                    <strong>Teléfono:</strong> +52 (55) 1234-5678
                  </p>
                  <p>
                    <strong>Dirección:</strong> Av. Reforma 123, Col. Centro, CDMX, México
                  </p>
                  <p>
                    <strong>Horario de atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM (GMT-6)
                  </p>
                </div>
                <p className="text-sm">
                  Nos comprometemos a responder a todas las consultas de privacidad dentro de 30 días hábiles.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Button
              onClick={() => (window.location.href = "/")}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
            >
              Volver al Inicio
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
