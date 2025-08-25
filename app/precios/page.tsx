"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowLeft, Zap } from "lucide-react"
import Link from "next/link"
import { trackInitiateCheckout, trackContact } from "@/components/facebook-pixel"

export default function PreciosPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Launchpad",
      description: "Perfecto para emprendedores y pequeñas empresas que buscan establecer su presencia digital",
      monthlyPrice: 12000,
      features: [
        "Auditoría SEO completa",
        "Optimización básica para AI Overviews",
        "Configuración de Schema Markup",
        "Análisis de competencia",
        "Reporte mensual de progreso",
        "Soporte por email",
        "1 sesión de consultoría mensual",
      ],
      popular: false,
      whatsappMessage: "¡Hola! Me interesa el plan Launchpad para mi negocio. ¿Podrían darme más información?",
    },
    {
      name: "Accelerator",
      description: "Ideal para empresas en crecimiento que necesitan acelerar su visibilidad online",
      monthlyPrice: 18000,
      features: [
        "Todo lo incluido en Launchpad",
        "Optimización avanzada para AI Overviews",
        "Chatbot IA personalizado",
        "Estrategia de contenido SEO",
        "Optimización técnica avanzada",
        "Soporte prioritario",
        "2 sesiones de consultoría mensual",
        "Análisis de rendimiento semanal",
      ],
      popular: true,
      whatsappMessage:
        "¡Hola! Me interesa el plan Accelerator. ¿Podrían explicarme cómo puede ayudar a acelerar el crecimiento de mi empresa?",
    },
    {
      name: "Dominator",
      description: "Para empresas establecidas que buscan dominar su mercado con IA",
      monthlyPrice: 36000,
      features: [
        "Todo lo incluido en Accelerator",
        "Optimización completa para LLMs",
        "Múltiples chatbots IA especializados",
        "Estrategia de contenido premium",
        "Análisis predictivo con IA",
        "Soporte 24/7",
        "Consultoría semanal personalizada",
        "Implementación de automatizaciones",
        "Reportes ejecutivos detallados",
      ],
      popular: false,
      whatsappMessage:
        "¡Hola! Estoy interesado en el plan Dominator para posicionar mi empresa como líder del mercado. ¿Podrían contarme más sobre las estrategias incluidas?",
    },
  ]

  const calculateAnnualPrice = (monthlyPrice: number) => {
    return Math.round(monthlyPrice * 12 * 0.8363) // 16.37% descuento
  }

  const calculateSavings = (monthlyPrice: number) => {
    const annualTotal = monthlyPrice * 12
    const discountedAnnual = calculateAnnualPrice(monthlyPrice)
    return annualTotal - discountedAnnual
  }

  const handlePlanSelection = (plan: any) => {
    const price = isAnnual ? calculateAnnualPrice(plan.monthlyPrice) : plan.monthlyPrice
    trackInitiateCheckout(plan.name, price)
    trackContact()

    const message = encodeURIComponent(plan.whatsappMessage)
    window.open(`https://wa.me/5256202020210?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-white">AI Positioning</span>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.history.back()}
              className="text-slate-300 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Planes que se adaptan a tu{" "}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              crecimiento
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Elige el plan perfecto para transformar tu presencia digital con inteligencia artificial
          </p>

          {/* Toggle Mensual/Anual */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${!isAnnual ? "text-white font-semibold" : "text-slate-400"}`}>Mensual</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                isAnnual ? "bg-orange-500" : "bg-slate-600"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? "text-white font-semibold" : "text-slate-400"}`}>Anual</span>
            {isAnnual && (
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 animate-pulse">
                <Zap className="w-3 h-3 mr-1" />
                16.37% OFF
              </Badge>
            )}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const displayPrice = isAnnual ? calculateAnnualPrice(plan.monthlyPrice) : plan.monthlyPrice
            const savings = calculateSavings(plan.monthlyPrice)

            return (
              <Card
                key={index}
                className={`relative bg-slate-800/50 border-slate-700 backdrop-blur-sm ${
                  plan.popular ? "ring-2 ring-orange-500 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                    Más Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-slate-300 mb-4">{plan.description}</CardDescription>

                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-white">
                      ${displayPrice.toLocaleString("es-MX")}
                      <span className="text-lg text-slate-400 font-normal">{isAnnual ? "/año" : "/mes"}</span>
                    </div>

                    {isAnnual && (
                      <div className="space-y-1">
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          Ahorras ${savings.toLocaleString("es-MX")} MXN
                        </Badge>
                        <p className="text-sm text-slate-400">
                          Equivale a ${Math.round(displayPrice / 12).toLocaleString("es-MX")} MXN/mes
                        </p>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter>
                  <Button
                    type="button"
                    onClick={() => handlePlanSelection(plan)}
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                        : "bg-slate-700 hover:bg-slate-600"
                    } text-white font-semibold py-3`}
                  >
                    Comenzar ahora
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Enterprise Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 border-slate-700 backdrop-blur-sm max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-4">¿Necesitas algo más personalizado?</CardTitle>
              <CardDescription className="text-xl text-slate-300">
                Ofrecemos soluciones enterprise completamente personalizadas para grandes empresas
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Incluye todo de Dominator, más:</h4>
                <div className="space-y-2">
                  {[
                    "Estrategia IA completamente personalizada",
                    "Equipo dedicado exclusivo",
                    "Integración con sistemas empresariales",
                    "Análisis predictivo avanzado",
                    "Automatización de procesos complejos",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Beneficios adicionales:</h4>
                <div className="space-y-2">
                  {[
                    "Consultoría estratégica C-level",
                    "Implementación en múltiples mercados",
                    "Soporte técnico prioritario 24/7",
                    "Capacitación del equipo interno",
                    "Métricas y KPIs personalizados",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Desde $84,000 MXN/mes</div>
                <p className="text-slate-400">Precio personalizado según necesidades</p>
              </div>
              <Button
                type="button"
                onClick={() => {
                  trackInitiateCheckout("Enterprise", 84000)
                  trackContact()
                  const message = encodeURIComponent(
                    "¡Hola! Estoy interesado en conocer más sobre las soluciones Enterprise de AI Positioning. ¿Podrían agendar una consulta para discutir las necesidades específicas de mi empresa?",
                  )
                  window.open(`https://wa.me/5256202020210?text=${message}`, "_blank")
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8"
              >
                Solicitar consulta Enterprise
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Preguntas Frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "¿Qué incluye la optimización para AI Overviews?",
                answer:
                  "Optimizamos tu contenido para aparecer en las respuestas de IA de Google, incluyendo estructura de datos, contenido semántico y autoridad temática.",
              },
              {
                question: "¿Cuánto tiempo toma ver resultados?",
                answer:
                  "Los primeros resultados suelen verse entre 2-4 semanas, con mejoras significativas en 2-3 meses, dependiendo de la competencia y el estado actual del sitio.",
              },
              {
                question: "¿Puedo cambiar de plan en cualquier momento?",
                answer:
                  "Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplican en el siguiente ciclo de facturación.",
              },
              {
                question: "¿Qué tipo de soporte incluyen los planes?",
                answer:
                  "Todos los planes incluyen soporte especializado, desde email en Launchpad hasta soporte 24/7 en Dominator, con tiempos de respuesta garantizados.",
              },
              {
                question: "¿Los chatbots IA se integran con mi sitio web?",
                answer:
                  "Sí, desarrollamos chatbots personalizados que se integran perfectamente con tu sitio web y sistemas existentes, adaptados a tu marca y necesidades.",
              },
              {
                question: "¿Ofrecen capacitación para usar las herramientas?",
                answer:
                  "Incluimos capacitación completa para tu equipo en el uso de todas las herramientas y estrategias implementadas, con materiales de apoyo y sesiones de seguimiento.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-white">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 border-orange-500/30 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="py-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                ¿Listo para transformar tu negocio con IA?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Únete a las empresas que ya están dominando su mercado con nuestras estrategias de marketing digital
                potenciadas por inteligencia artificial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  type="button"
                  onClick={() => {
                    trackContact()
                    const message = encodeURIComponent(
                      "¡Hola! Me gustaría agendar una consulta gratuita para conocer cómo AI Positioning puede ayudar a transformar mi negocio.",
                    )
                    window.open(`https://wa.me/5256202020210?text=${message}`, "_blank")
                  }}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-3 px-8"
                >
                  Consulta gratuita
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent"
                >
                  <Link href="/casos-de-exito">Ver casos de éxito</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
