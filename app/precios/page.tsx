"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Crown, MessageSquare, ArrowRight } from "lucide-react"
import NavigationHeader from "@/components/navigation-header"

export default function PreciosPage() {
  const plans = [
    {
      id: "launchpad",
      name: "AIO LAUNCHPAD",
      badge: { text: "PARA EMPEZAR", color: "bg-slate-600" },
      price: "$10,000 MXN",
      priceUsd: "o $555 USD",
      color: "slate",
      borderColor: "border-slate-600",
      buttonColor: "bg-slate-600 hover:bg-slate-700",
      features: [
        "Auditoría inicial completa",
        "Optimización de 5 páginas",
        "Schema markup básico",
        "5 contenidos mensuales",
      ],
      buttonText: "Comenzar ahora",
      href: "/contratar/launchpad",
      whatsappMessage: "Hola%2C%20me%20interesa%20el%20plan%20AIO%20Launchpad.%20%C2%BFPodr%C3%ADamos%20hablar%3F",
    },
    {
      id: "accelerator",
      name: "AIO ACCELERATOR",
      badge: { text: "MÁS POPULAR", color: "bg-green-500" },
      secondaryBadge: { text: "CRECIMIENTO", color: "bg-green-600" },
      price: "$15,000 MXN",
      priceUsd: "o $810 USD",
      color: "green",
      borderColor: "border-green-500",
      buttonColor: "bg-green-500 hover:bg-green-600",
      features: ["Todo lo anterior +", "10 URLs optimizadas", "Chatbot LLM simple", "10 contenidos mensuales"],
      buttonText: "Acelerar crecimiento",
      href: "/contratar/accelerator",
      whatsappMessage: "Hola%2C%20me%20interesa%20el%20plan%20AIO%20Accelerator.%20%C2%BFPodr%C3%ADamos%20hablar%3F",
      popular: true,
    },
    {
      id: "dominator",
      name: "AIO DOMINATOR",
      badge: { text: "DOMINACIÓN", color: "bg-orange-500" },
      price: "$30,000 MXN",
      priceUsd: "o $1666 USD",
      color: "orange",
      borderColor: "border-orange-500",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      features: ["Todo lo anterior +", "Sitio completo optimizado", "PR digital y enlaces", "20 contenidos mensuales"],
      buttonText: "Dominar mercado",
      href: "/contratar/dominator",
      whatsappMessage: "Hola%2C%20me%20interesa%20el%20plan%20AIO%20Dominator.%20%C2%BFPodr%C3%ADamos%20hablar%3F",
    },
    {
      id: "enterprise",
      name: "AIO ENTERPRISE",
      badge: { text: "ENTERPRISE", color: "bg-purple-500" },
      secondaryBadge: { text: "CORPORATIVO", color: "bg-purple-600" },
      price: "$70,000 MXN",
      priceUsd: "o $3,888 USD",
      color: "purple",
      borderColor: "border-purple-500",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      features: [
        "Todo lo anterior +",
        "Optimización ilimitada",
        "IA personalizada",
        "Account Manager 24/7",
        "50 contenidos mensuales",
      ],
      buttonText: "Solución Enterprise",
      href: "/contratar/enterprise",
      whatsappMessage:
        "Hola%2C%20me%20interesa%20el%20plan%20AIO%20Enterprise.%20%C2%BFPodr%C3%ADamos%20agendar%20una%20reuni%C3%B3n%3F",
      enterprise: true,
    },
  ]

  const additionalFeatures = {
    launchpad: [
      "Configuración inicial de Google Analytics y Search Console",
      "Optimización básica de velocidad de carga",
      "Investigación de palabras clave inicial",
      "Reporte mensual de progreso",
    ],
    accelerator: [
      "Optimización avanzada de Core Web Vitals",
      "Implementación de datos estructurados",
      "Estrategia de contenido personalizada",
      "Integración con redes sociales",
      "Monitoreo de competencia",
    ],
    dominator: [
      "Estrategia de link building avanzada",
      "Optimización para búsquedas locales",
      "Implementación de AMP (Accelerated Mobile Pages)",
      "Auditoría técnica mensual completa",
      "Optimización para voice search",
      "Reportes ejecutivos detallados",
    ],
    enterprise: [
      "Modelo de IA entrenado específicamente para tu industria",
      "Integración con sistemas CRM y ERP",
      "Optimización multiidioma y multinacional",
      "Consultoría estratégica mensual",
      "Acceso prioritario a nuevas funcionalidades",
      "Tiempo de respuesta prioritario",
      "Equipo dedicado exclusivo",
      "Reportes en tiempo real personalizados",
    ],
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <NavigationHeader title="Planes y Precios" />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Elige tu plan <span className="text-orange-500">AIO</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Desde startups hasta empresas Fortune 500, tenemos la solución perfecta para llevar tu SEO al siguiente
            nivel con inteligencia artificial.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`bg-slate-900 ${plan.borderColor} ${
                  plan.popular || plan.enterprise ? "border-2 relative" : "border"
                } hover:shadow-2xl transition-all duration-300 ${plan.enterprise ? "transform hover:scale-105" : ""}`}
              >
                {(plan.popular || plan.enterprise) && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className={plan.badge.color}>
                      {plan.enterprise && <Crown className="mr-1 h-3 w-3" />}
                      {plan.badge.text}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  {!plan.popular && !plan.enterprise && (
                    <Badge className={`${plan.badge.color} mb-4 mx-auto w-fit`}>{plan.badge.text}</Badge>
                  )}
                  {plan.secondaryBadge && (
                    <Badge className={`${plan.secondaryBadge.color} mb-4 mx-auto w-fit`}>
                      {plan.secondaryBadge.text}
                    </Badge>
                  )}

                  <CardTitle className="text-2xl font-bold text-white mb-4">{plan.name}</CardTitle>

                  <div className="mb-6">
                    <div
                      className={`text-4xl font-bold mb-2 ${
                        plan.color === "green"
                          ? "text-green-400"
                          : plan.color === "orange"
                            ? "text-orange-400"
                            : plan.color === "purple"
                              ? "text-purple-400"
                              : "text-slate-300"
                      }`}
                    >
                      {plan.price}
                    </div>
                    <div className="text-slate-400">{plan.priceUsd}</div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${plan.buttonColor} text-white font-semibold py-3`}
                    onClick={() => window.open(`https://wa.me/5256202022210?text=${plan.whatsappMessage}`, "_blank")}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Características <span className="text-orange-500">detalladas</span>
            </h2>
            <p className="text-xl text-slate-300">
              Descubre todo lo que incluye cada plan para hacer crecer tu negocio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {plans.map((plan) => (
              <Card key={`${plan.id}-details`} className={`bg-slate-900 ${plan.borderColor} border`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    {plan.enterprise && <Crown className="h-6 w-6 text-purple-400" />}
                    {plan.name}
                    <Badge className={plan.badge.color}>{plan.badge.text}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div
                      className={`text-3xl font-bold ${
                        plan.color === "green"
                          ? "text-green-400"
                          : plan.color === "orange"
                            ? "text-orange-400"
                            : plan.color === "purple"
                              ? "text-purple-400"
                              : "text-slate-300"
                      }`}
                    >
                      {plan.price}
                    </div>
                    <div className="text-slate-400">{plan.priceUsd}</div>
                  </div>

                  <h4 className="font-semibold text-white mb-4">Incluye:</h4>
                  <ul className="space-y-2 mb-6">
                    {[...plan.features, ...additionalFeatures[plan.id as keyof typeof additionalFeatures]].map(
                      (feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </li>
                      ),
                    )}
                  </ul>

                  <Button
                    className={`w-full ${plan.buttonColor} text-white`}
                    onClick={() => window.open(`https://wa.me/5256202022210?text=${plan.whatsappMessage}`, "_blank")}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comparación de <span className="text-orange-500">planes</span>
            </h2>
            <p className="text-xl text-slate-300">Encuentra el plan perfecto para tus necesidades</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-slate-900 rounded-lg overflow-hidden">
              <thead className="bg-slate-800">
                <tr>
                  <th className="text-left p-4 text-white font-semibold">Características</th>
                  <th className="text-center p-4 text-white font-semibold">Launchpad</th>
                  <th className="text-center p-4 text-white font-semibold">Accelerator</th>
                  <th className="text-center p-4 text-white font-semibold">Dominator</th>
                  <th className="text-center p-4 text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-t border-slate-700">
                  <td className="p-4 font-medium">Páginas optimizadas</td>
                  <td className="text-center p-4">5</td>
                  <td className="text-center p-4">10</td>
                  <td className="text-center p-4">Sitio completo</td>
                  <td className="text-center p-4">
                    <span className="text-purple-400 font-semibold">Ilimitado</span>
                  </td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="p-4 font-medium">Contenidos mensuales</td>
                  <td className="text-center p-4">5</td>
                  <td className="text-center p-4">10</td>
                  <td className="text-center p-4">20</td>
                  <td className="text-center p-4">
                    <span className="text-purple-400 font-semibold">50</span>
                  </td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="p-4 font-medium">Soporte</td>
                  <td className="text-center p-4">Horario laboral</td>
                  <td className="text-center p-4">Horario laboral</td>
                  <td className="text-center p-4">Prioritario</td>
                  <td className="text-center p-4">
                    <span className="text-purple-400 font-semibold">24/7 Dedicado</span>
                  </td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="p-4 font-medium">IA Personalizada</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">
                    <CheckCircle className="h-5 w-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="p-4 font-medium">Account Manager</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">
                    <CheckCircle className="h-5 w-5 text-green-400 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Preguntas <span className="text-orange-500">frecuentes</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "¿Qué incluye la IA personalizada del plan Enterprise?",
                answer:
                  "La IA personalizada incluye un modelo entrenado específicamente con datos de tu industria, competencia y objetivos de negocio. Esto permite generar contenido más relevante y estrategias más efectivas para tu nicho específico.",
              },
              {
                question: "¿Puedo cambiar de plan en cualquier momento?",
                answer:
                  "Sí, puedes actualizar tu plan en cualquier momento. Los cambios se aplican inmediatamente y solo pagas la diferencia prorrateada del período actual.",
              },
              {
                question: "¿Qué significa 'optimización ilimitada' en Enterprise?",
                answer:
                  "Significa que no hay límites en el número de páginas, URLs, o elementos de tu sitio web que podemos optimizar. Trabajamos en todo tu ecosistema digital sin restricciones.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-slate-900 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-slate-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ¿No estás seguro qué plan <span className="text-orange-500">elegir</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Agenda una consulta personalizada y te ayudaremos a encontrar la solución perfecta para tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold"
              onClick={() =>
                window.open(
                  "https://wa.me/5256202022210?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20para%20elegir%20el%20mejor%20plan%20AIO%20para%20mi%20negocio.%20%C2%BFPodr%C3%ADamos%20hablar%3F",
                  "_blank",
                )
              }
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Consulta Personalizada
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-400 text-orange-400 hover:bg-orange-950/20 bg-transparent px-8 py-4 text-lg"
              onClick={() =>
                window.open(
                  "https://wa.me/5256202022210?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20AIO%20y%20sus%20diferencias.%20%C2%BFPodr%C3%ADan%20ayudarme%3F",
                  "_blank",
                )
              }
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Más Información
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
