"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { CheckCircle, Crown, MessageSquare, ArrowRight, Zap, Sparkles } from "lucide-react"
import { useState } from "react"
import NavigationHeader from "@/components/navigation-header"
import { trackInitiateCheckout, trackContact } from "@/components/facebook-pixel"

export default function PreciosPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      id: "launchpad",
      name: "AIO LAUNCHPAD",
      badge: { text: "PARA EMPEZAR", color: "bg-slate-600" },
      monthlyPrice: 12000,
      monthlyPriceUsd: 666,
      color: "slate",
      borderColor: "border-slate-600",
      buttonColor: "bg-slate-600 hover:bg-slate-700",
      glowColor: "hover:shadow-slate-500/20",
      features: [
        "Auditoría inicial completa de SEO",
        "Optimización de 5 páginas clave",
        "Datos estructurados básicos (Schema)",
        "5 contenidos conversacionales mensuales",
        "Configuración Google Analytics y Search Console",
        "Investigación de palabras clave inicial",
        "Optimización básica de velocidad de carga",
        "Reporte mensual de visibilidad",
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
      monthlyPrice: 18000,
      monthlyPriceUsd: 1000,
      color: "green",
      borderColor: "border-green-500",
      buttonColor: "bg-green-500 hover:bg-green-600",
      glowColor: "hover:shadow-green-500/30",
      features: [
        "Todo lo anterior +",
        "Optimización de 10 URLs completas",
        "Integración de chatbot LLM simple",
        "10 contenidos optimizados por mes",
        "Análisis de competencia en SGE",
        "Optimización avanzada Core Web Vitals",
        "Estrategia de contenido personalizada",
        "Reporte mensual de visibilidad",
      ],
      buttonText: "Acelerar mi crecimiento",
      href: "/contratar/accelerator",
      whatsappMessage: "Hola%2C%20me%20interesa%20el%20plan%20AIO%20Accelerator.%20%C2%BFPodr%C3%ADamos%20hablar%3F",
      popular: true,
    },
    {
      id: "dominator",
      name: "AIO DOMINATOR",
      badge: { text: "DOMINACIÓN TOTAL", color: "bg-orange-500" },
      monthlyPrice: 36000,
      monthlyPriceUsd: 2000,
      color: "orange",
      borderColor: "border-orange-500",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      glowColor: "hover:shadow-orange-500/30",
      features: [
        "Todo lo anterior +",
        "Sitio completo optimizado (ilimitado)",
        "PR digital y enlaces EEAT",
        "20 contenidos premium + chatbot experto",
        "Coaching mensual 1:1 personalizado",
        "Dashboard de rendimiento en tiempo real",
        "Estrategia de link building avanzada",
        "Reporte mensual de visibilidad",
      ],
      buttonText: "Dominar mi mercado",
      href: "/contratar/dominator",
      whatsappMessage: "Hola%2C%20me%20interesa%20el%20plan%20AIO%20Dominator.%20%C2%BFPodr%C3%ADamos%20hablar%3F",
    },
    {
      id: "enterprise",
      name: "AIO ENTERPRISE",
      badge: { text: "ENTERPRISE", color: "bg-purple-500" },
      secondaryBadge: { text: "CORPORATIVO", color: "bg-purple-600" },
      monthlyPrice: 84000,
      monthlyPriceUsd: 4666,
      color: "purple",
      borderColor: "border-purple-500",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      glowColor: "hover:shadow-purple-500/30",
      features: [
        "Todo lo anterior +",
        "Optimización ilimitada multi-sitio",
        "IA personalizada entrenada para tu industria",
        "Account Manager dedicado 24/7",
        "50 contenidos premium mensuales",
        "Integración con sistemas CRM y ERP",
        "Consultoría estratégica C-level mensual",
        "Reporte mensual de visibilidad",
      ],
      buttonText: "Solución Enterprise",
      href: "/contratar/enterprise",
      whatsappMessage:
        "Hola%2C%20me%20interesa%20el%20plan%20AIO%20Enterprise.%20%C2%BFPodr%C3%ADamos%20agendar%20una%20reuni%C3%B3n%3F",
      enterprise: true,
    },
  ]

  const calculateAnnualPrice = (monthlyPrice: number) => {
    const annualPrice = monthlyPrice * 12 * 0.8363 // 16.37% discount
    return Math.round(annualPrice)
  }

  const calculateAnnualPriceUsd = (monthlyPriceUsd: number) => {
    const annualPriceUsd = monthlyPriceUsd * 12 * 0.8363 // 16.37% discount
    return Math.round(annualPriceUsd)
  }

  const handlePlanClick = (plan: any) => {
    const price = isAnnual ? calculateAnnualPrice(plan.monthlyPrice) : plan.monthlyPrice
    trackInitiateCheckout(plan.name, price)
    trackContact()
    window.open(`https://wa.me/5256202022210?text=${plan.whatsappMessage}`, "_blank")
  }

  const additionalFeatures = {
    launchpad: [
      "Dashboard con métricas básicas",
      "Soporte por email en horario laboral",
      "Onboarding personalizado",
      "Acceso a recursos educativos",
    ],
    accelerator: [
      "Integración con redes sociales",
      "Monitoreo de competencia semanal",
      "Soporte prioritario",
      "Sesiones de capacitación mensuales",
      "Implementación de datos estructurados avanzados",
    ],
    dominator: [
      "Optimización para búsquedas locales",
      "Implementación de AMP (Accelerated Mobile Pages)",
      "Auditoría técnica mensual completa",
      "Optimización para voice search",
      "Reportes ejecutivos detallados",
      "Acceso a herramientas premium",
    ],
    enterprise: [
      "Optimización multiidioma y multinacional",
      "Acceso prioritario a nuevas funcionalidades",
      "Tiempo de respuesta garantizado menor a 2 horas",
      "Equipo dedicado exclusivo",
      "Reportes en tiempo real personalizados",
      "Integración con herramientas empresariales",
      "Capacitación del equipo interno",
      "SLA garantizado 99.9%",
    ],
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <NavigationHeader title="Planes y Precios" />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Elige tu plan <span className="text-orange-500 animate-pulse">AIO</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Desde startups hasta empresas Fortune 500, tenemos la solución perfecta para llevar tu SEO al siguiente
              nivel con inteligencia artificial.
            </p>
          </div>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <span
              className={`text-lg font-medium transition-all duration-300 ${!isAnnual ? "text-white scale-110" : "text-slate-400"}`}
            >
              Mensual
            </span>
            <div className="relative">
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-orange-500 transition-all duration-300 hover:scale-110"
              />
            </div>
            <span
              className={`text-lg font-medium transition-all duration-300 ${isAnnual ? "text-white scale-110" : "text-slate-400"}`}
            >
              Anual
            </span>
            {isAnnual && (
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white animate-bounce">
                <Zap className="mr-1 h-3 w-3" />
                16.37% OFF
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 items-stretch">
            {plans.map((plan, index) => {
              const displayPrice = isAnnual ? calculateAnnualPrice(plan.monthlyPrice) : plan.monthlyPrice
              const displayPriceUsd = isAnnual ? calculateAnnualPriceUsd(plan.monthlyPriceUsd) : plan.monthlyPriceUsd
              const savings = isAnnual ? plan.monthlyPrice * 12 - displayPrice : 0

              return (
                <div
                  key={plan.id}
                  className={`flex animate-in fade-in slide-in-from-bottom-8 duration-1000`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Card
                    className={`bg-slate-900 ${plan.borderColor} ${
                      plan.popular || plan.enterprise ? "border-2 relative" : "border"
                    } hover:shadow-2xl ${plan.glowColor} transition-all duration-500 ease-out
                    ${plan.enterprise ? "hover:scale-105" : "hover:scale-102"} 
                    ${plan.popular ? "hover:-translate-y-2" : "hover:-translate-y-1"}
                    flex flex-col w-full min-h-[700px] group cursor-pointer
                    hover:bg-slate-800/50 backdrop-blur-sm`}
                    onClick={() => handlePlanClick(plan)}
                  >
                    {(plan.popular || plan.enterprise) && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <Badge
                          className={`${plan.badge.color} animate-pulse group-hover:animate-bounce transition-all duration-300`}
                        >
                          {plan.enterprise && <Crown className="mr-1 h-3 w-3 animate-spin group-hover:animate-pulse" />}
                          {plan.badge.text}
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="text-center pb-4 flex-shrink-0">
                      {!plan.popular && !plan.enterprise && (
                        <Badge
                          className={`${plan.badge.color} mb-4 mx-auto w-fit transition-all duration-300 group-hover:scale-110`}
                        >
                          {plan.badge.text}
                        </Badge>
                      )}
                      {plan.secondaryBadge && (
                        <Badge
                          className={`${plan.secondaryBadge.color} mb-4 mx-auto w-fit transition-all duration-300 group-hover:scale-110`}
                        >
                          {plan.secondaryBadge.text}
                        </Badge>
                      )}

                      <CardTitle className="text-2xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-orange-300">
                        {plan.name}
                      </CardTitle>

                      <div className="mb-6">
                        <div
                          className={`text-4xl font-bold mb-2 transition-all duration-500 group-hover:scale-110 ${
                            plan.color === "green"
                              ? "text-green-400 group-hover:text-green-300"
                              : plan.color === "orange"
                                ? "text-orange-400 group-hover:text-orange-300"
                                : plan.color === "purple"
                                  ? "text-purple-400 group-hover:text-purple-300"
                                  : "text-slate-300 group-hover:text-slate-200"
                          }`}
                        >
                          ${displayPrice.toLocaleString()} MXN
                        </div>
                        <div className="text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                          o ${displayPriceUsd} USD
                        </div>
                        <div className="text-sm text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                          {isAnnual ? "por año" : "por mes"}
                        </div>

                        {isAnnual && savings > 0 && (
                          <div className="mt-2 animate-in fade-in slide-in-from-right duration-500">
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 animate-pulse group-hover:animate-bounce">
                              <Sparkles className="mr-1 h-3 w-3" />
                              Ahorras ${savings.toLocaleString()} MXN
                            </Badge>
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0 flex flex-col flex-1">
                      <div className="flex-1">
                        <ul className="space-y-3 mb-8">
                          {plan.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1 group-hover:text-white"
                              style={{ animationDelay: `${featureIndex * 100}ms` }}
                            >
                              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:text-green-300 group-hover:scale-110" />
                              <span className="text-slate-300 text-sm leading-relaxed transition-colors duration-300 group-hover:text-slate-100">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto pt-4">
                        <Button
                          className={`w-full ${plan.buttonColor} text-white font-semibold py-3 
                          transition-all duration-300 hover:scale-105 hover:shadow-lg 
                          active:scale-95 transform-gpu group-hover:animate-pulse`}
                          onClick={(e) => {
                            e.stopPropagation()
                            handlePlanClick(plan)
                          }}
                          type="button"
                        >
                          <MessageSquare className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                          {plan.buttonText}
                        </Button>
                      </div>
                    </CardContent>

                    {/* Decorative gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        plan.color === "green"
                          ? "from-green-500/5 to-transparent"
                          : plan.color === "orange"
                            ? "from-orange-500/5 to-transparent"
                            : plan.color === "purple"
                              ? "from-purple-500/5 to-transparent"
                              : "from-slate-500/5 to-transparent"
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg`}
                    />
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Características <span className="text-orange-500 animate-pulse">detalladas</span>
            </h2>
            <p className="text-xl text-slate-300">
              Descubre todo lo que incluye cada plan para hacer crecer tu negocio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {plans.map((plan, index) => {
              const displayPrice = isAnnual ? calculateAnnualPrice(plan.monthlyPrice) : plan.monthlyPrice
              const displayPriceUsd = isAnnual ? calculateAnnualPriceUsd(plan.monthlyPriceUsd) : plan.monthlyPriceUsd

              return (
                <div
                  key={`${plan.id}-details`}
                  className="animate-in fade-in slide-in-from-left duration-1000"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Card
                    className={`bg-slate-900 ${plan.borderColor} border transition-all duration-500 hover:shadow-xl ${plan.glowColor} hover:-translate-y-1 group`}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-white transition-colors duration-300 group-hover:text-orange-300">
                        {plan.enterprise && (
                          <Crown className="h-6 w-6 text-purple-400 animate-pulse group-hover:animate-spin" />
                        )}
                        {plan.name}
                        <Badge className={`${plan.badge.color} transition-all duration-300 group-hover:scale-110`}>
                          {plan.badge.text}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <div
                          className={`text-3xl font-bold transition-all duration-500 group-hover:scale-110 ${
                            plan.color === "green"
                              ? "text-green-400 group-hover:text-green-300"
                              : plan.color === "orange"
                                ? "text-orange-400 group-hover:text-orange-300"
                                : plan.color === "purple"
                                  ? "text-purple-400 group-hover:text-purple-300"
                                  : "text-slate-300 group-hover:text-slate-200"
                          }`}
                        >
                          ${displayPrice.toLocaleString()} MXN
                        </div>
                        <div className="text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                          o ${displayPriceUsd} USD
                        </div>
                        <div className="text-sm text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                          {isAnnual ? "por año" : "por mes"}
                        </div>
                      </div>

                      <h4 className="font-semibold text-white mb-4 transition-colors duration-300 group-hover:text-orange-300">
                        Incluye:
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {[...plan.features, ...additionalFeatures[plan.id as keyof typeof additionalFeatures]].map(
                          (feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start gap-2 transition-all duration-300 hover:translate-x-1"
                              style={{ animationDelay: `${featureIndex * 50}ms` }}
                            >
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0 transition-all duration-300 group-hover:text-green-300 group-hover:scale-110" />
                              <span className="text-slate-300 text-sm transition-colors duration-300 group-hover:text-slate-100">
                                {feature}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>

                      <Button
                        className={`w-full ${plan.buttonColor} text-white transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 transform-gpu`}
                        onClick={(e) => {
                          e.stopPropagation()
                          handlePlanClick(plan)
                        }}
                        type="button"
                      >
                        <MessageSquare className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                        {plan.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comparación de <span className="text-orange-500 animate-pulse">planes</span>
            </h2>
            <p className="text-xl text-slate-300">Encuentra el plan perfecto para tus necesidades</p>
          </div>

          <div className="overflow-x-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <table className="w-full bg-slate-900 rounded-lg overflow-hidden shadow-2xl">
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
                <tr className="border-t border-slate-700 hover:bg-slate-800/30 transition-colors duration-300">
                  <td className="p-4 font-medium">Páginas optimizadas</td>
                  <td className="text-center p-4">5</td>
                  <td className="text-center p-4">10</td>
                  <td className="text-center p-4">Sitio completo</td>
                  <td className="text-center p-4">
                    <span className="text-purple-400 font-semibold animate-pulse">Ilimitado</span>
                  </td>
                </tr>
                <tr className="border-t border-slate-700 hover:bg-slate-800/30 transition-colors duration-300">
                  <td className="p-4 font-medium">Contenidos mensuales</td>
                  <td className="text-center p-4">5</td>
                  <td className="text-center p-4">10</td>
                  <td className="text-center p-4">20</td>
                  <td className="text-center p-4">
                    <span className="text-purple-400 font-semibold animate-pulse">50</span>
                  </td>
                </tr>
                <tr className="border-t border-slate-700 hover:bg-slate-800/30 transition-colors duration-300">
                  <td className="p-4 font-medium">Reporte mensual de visibilidad</td>
                  <td className="text-center p-4">
                    <CheckCircle className="h-5 w-5 text-green-400 mx-auto transition-all duration-300 hover:scale-125 hover:text-green-300" />
                  </td>
                  <td className="text-center p-4">
                    <CheckCircle className="h-5 w-5 text-green-400 mx-auto transition-all duration-300 hover:scale-125 hover:text-green-300" />
                  </td>
                  <td className="text-center p-4">
                    <CheckCircle className="h-5 w-5 text-green-400 mx-auto transition-all duration-300 hover:scale-125 hover:text-green-300" />
                  </td>
                  <td className="text-center p-4">
                    <CheckCircle className="h-5 w-5 text-green-400 mx-auto transition-all duration-300 hover:scale-125 hover:text-green-300" />
                  </td>
                </tr>
                <tr className="border-t border-slate-700 hover:bg-slate-800/30 transition-colors duration-300">
                  <td className="p-4 font-medium">Soporte</td>
                  <td className="text-center p-4">Horario laboral</td>
                  <td className="text-center p-4">Prioritario</td>
                  <td className="text-center p-4">Prioritario</td>
                  <td className="text-center p-4">
                    <span className="text-purple-400 font-semibold animate-pulse">24/7 Dedicado</span>
                  </td>
                </tr>
                <tr className="border-t border-slate-700 hover:bg-slate-800/30 transition-colors duration-300">
                  <td className="p-4 font-medium">IA Personalizada</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">
                    <CheckCircle className="h-5 w-5 text-green-400 mx-auto transition-all duration-300 hover:scale-125 hover:text-green-300" />
                  </td>
                </tr>
                <tr className="border-t border-slate-700 hover:bg-slate-800/30 transition-colors duration-300">
                  <td className="p-4 font-medium">Account Manager</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">
                    <CheckCircle className="h-5 w-5 text-green-400 mx-auto transition-all duration-300 hover:scale-125 hover:text-green-300" />
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
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Preguntas <span className="text-orange-500 animate-pulse">frecuentes</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "¿Qué incluye el reporte mensual de visibilidad?",
                answer:
                  "Cada mes recibes un reporte detallado con métricas de aparición en AI Overviews, posicionamiento en motores generativos, análisis de competencia y recomendaciones de mejora específicas para tu industria.",
              },
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
              {
                question: "¿Cómo funciona el descuento anual?",
                answer:
                  "Al elegir el plan anual, obtienes un 16.37% de descuento sobre el precio mensual. El pago se realiza una vez al año y tienes acceso inmediato a todos los beneficios de tu plan.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="animate-in fade-in slide-in-from-left duration-1000"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="bg-slate-900 border-slate-700 transition-all duration-300 hover:shadow-xl hover:bg-slate-800/50 hover:-translate-y-1 group">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-orange-300">
                      {faq.question}
                    </h3>
                    <p className="text-slate-300 transition-colors duration-300 group-hover:text-slate-100">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ¿No estás seguro qué plan <span className="text-orange-500 animate-pulse">elegir</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Agenda una consulta personalizada y te ayudaremos a encontrar la solución perfecta para tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold 
              transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 
              active:scale-95 transform-gpu group"
              onClick={() => {
                trackContact()
                window.open(
                  "https://wa.me/5256202022210?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20para%20elegir%20el%20mejor%20plan%20AIO%20para%20mi%20negocio.%20%C2%BFPodr%C3%ADamos%20hablar%3F",
                  "_blank",
                )
              }}
              type="button"
            >
              <MessageSquare className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
              Consulta Personalizada
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-400 text-orange-400 hover:bg-orange-950/20 bg-transparent px-8 py-4 text-lg
              transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10
              active:scale-95 transform-gpu group"
              onClick={() => {
                trackContact()
                window.open(
                  "https://wa.me/5256202022210?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20AIO%20y%20sus%20diferencias.%20%C2%BFPodr%C3%ADan%20ayudarme%3F",
                  "_blank",
                )
              }}
              type="button"
            >
              <ArrowRight className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              Más Información
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
