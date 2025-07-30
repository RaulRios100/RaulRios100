"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"
import NavigationHeader from "@/components/navigation-header"

export default function Contacto() {
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
      <NavigationHeader title="Contacto" />

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Badge className="mb-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm font-medium">
              📞 Contáctanos
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hablemos de tu <span className="text-green-400">proyecto</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte a dominar el posicionamiento en IA. Contáctanos y descubre cómo podemos
              transformar tu presencia digital
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Información de contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-700 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h3>
                    <p className="text-slate-700 dark:text-slate-300">contacto@posicionamientoaio.com</p>
                    <p className="text-slate-700 dark:text-slate-300">ventas@posicionamientoaio.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-700 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Teléfono</h3>
                    <p className="text-slate-700 dark:text-slate-300">+52 56 2020 2210</p>
                    <p className="text-slate-700 dark:text-slate-300">+52 55 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-700 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Ubicación</h3>
                    <p className="text-slate-700 dark:text-slate-300">Ciudad de México, México</p>
                    <p className="text-slate-700 dark:text-slate-300">Atención remota en toda Latinoamérica</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 dark:bg-orange-700 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-orange-600 dark:text-orange-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Horarios</h3>
                    <p className="text-slate-700 dark:text-slate-300">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-700 dark:text-slate-300">Sábados: 10:00 AM - 2:00 PM (GMT-6)</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-12 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Acciones rápidas</h3>
                <div className="space-y-3">
                  <Button
                    className="w-full justify-start bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => window.open("https://wa.me/5256202022210", "_blank")}
                  >
                    📅 Agendar consulta
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => window.open("https://wa.me/5256202022210", "_blank")}
                  >
                    💬 WhatsApp directo
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => (window.location.href = "/aprende-mas")}
                  >
                    📚 Descargar guía gratuita
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 dark:text-white">Envíanos un mensaje</CardTitle>
                  <p className="text-slate-600 dark:text-slate-300">
                    Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas
                  </p>
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
                        Teléfono
                      </label>
                      <Input type="tel" placeholder="+52 55 1234 5678" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Empresa
                      </label>
                      <Input placeholder="Nombre de tu empresa" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Sitio web
                      </label>
                      <Input placeholder="https://tuempresa.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        ¿En qué podemos ayudarte? *
                      </label>
                      <Textarea
                        placeholder="Describe tu proyecto, objetivos o preguntas específicas sobre posicionamiento en IA..."
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Presupuesto aproximado
                      </label>
                      <select className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                        <option value="">Selecciona un rango</option>
                        <option value="5000-15000">$5,000 - $15,000 MXN</option>
                        <option value="15000-30000">$15,000 - $30,000 MXN</option>
                        <option value="30000-50000">$30,000 - $50,000 MXN</option>
                        <option value="50000+">Más de $50,000 MXN</option>
                      </select>
                    </div>

                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-3">Enviar mensaje</Button>

                    <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                      Al enviar este formulario aceptas nuestros términos de privacidad
                    </p>
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
