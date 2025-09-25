"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  CheckCircle,
  Crown,
  MessageSquare,
  ArrowRight,
  Zap,
  Sparkles,
  Star,
  Rocket,
  Target,
  Building,
} from "lucide-react"
import { useState } from "react"
import NavigationHeader from "@/components/navigation-header"
import { trackInitiateCheckout, trackContact } from "@/components/facebook-pixel"

export default function PreciosPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      id: "launchpad",
      name: "AIO LAUNCHPAD",
      badge: { text: "PARA EMPEZAR", color: "bg-blue-600" },
      monthlyPrice: 10000,
      originalPrice: 20000,
      monthlyPriceUsd: 555,
      color: "blue",
      borderColor: "border-blue-500",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      glowColor: "hover:shadow-blue-500/20",
      icon: Rocket,
      features: [
        "Auditoría inicial completa incluida",
        "Optimización de 5 páginas clave",
        "Datos estructurados: FAQPage y LocalBusiness",
        "5 contenidos mensuales",
        "Reporte mensual de visibilidad",
        "Soporte estándar",
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
      monthlyPrice: 15000,
      originalPrice: 30000,
      monthlyPriceUsd: 833,
      color: "green",
      borderColor: "border-green-500",
      buttonColor: "bg-green-500 hover:bg-green-600",
      glowColor: "hover:shadow-green-500/30",
      icon: Star,
      features: [
        "Todo lo incluido en Launchpad +",
        "Optimización de 10 páginas clave",
        "Datos estructurados avanzados en 10 páginas",
        "10 contenidos optimizados mensuales",
        "Reporte mensual de visibilidad detallado",
        "Soporte prioritario con respuesta rápida",
        "Integración de chatbot LLM inteligente",
        "Análisis completo de competencia en SGE",
        "Optimización técnica avanzada",
        "Estrategia de contenido personalizada",
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
      monthlyPrice: 30000,
      originalPrice: 60000,
      monthlyPriceUsd: 1666,
      color: "orange",
      borderColor: "border-orange-500",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      glowColor: "hover:shadow-orange-500/30",
      icon: Target,
      features: [
        "Todo lo incluido en Accelerator +",
        "Optimización de 15 páginas clave",
        "Datos estructurados: Schema completo en 15 páginas",
        "20 contenidos premium mensuales",
        "Reporte mensual de visibilidad avanzado",
        "Soporte completo y prioritario",
        "Integración de chatbot LLM avanzado",
        "Análisis de competencia en SGE avanzado",
        "Enlaces DA 20 SPAM Max 55",
        "1 sesión de coaching estratégico mensual",
        "Dashboard de rendimiento en tiempo real",
        "Optimización para voice search",
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
      monthlyPrice: 70000,
      originalPrice: 150000,
      monthlyPriceUsd: 3888,
      color: "purple",
      borderColor: "border-purple-500",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      glowColor: "hover:shadow-purple-500/30",
      icon: Building,
      features: [
        "Todo lo incluido en Dominator +",
        "Optimización de 20+ páginas clave",
        "Datos estructurados: Schema empresarial completo",
        "50 contenidos premium mensuales",
        "Reporte mensual de visibilidad ejecutivo",
        "Account Manager dedicado 24/7",
        "Agente IA personalizado para tu industria",
        "Análisis de competencia SGE completo + benchmarking",
        "Enlaces DA 20+ SPAM Max 55",
        "2 sesiones de coaching estratégico mensuales",
        "Dashboard completo con KPIs personalizados",
        "Solución corporativa completamente a medida",
        "Integración con sistemas CRM y ERP",
        "Optimización multiidioma y multinacional",
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
      "Configuración Google Analytics y Search Console",
      "Investigación de palabras clave inicial",
      "Optimización básica de velocidad de carga",
      "Dashboard con métricas básicas",
      "Onboarding personalizado de 30 días",
      "Acceso a recursos educativos y guías",
      "Soporte por email en horario laboral",
      "Reportes mensuales básicos",
    ],
    accelerator: [
      "Optimización avanzada Core Web Vitals",
      "Estrategia de contenido personalizada",
      "Integración con redes sociales principales",
      "Monitoreo de competencia semanal",
      "Sesiones de capacitación mensuales",
      "Implementación de datos estructurados avanzados",
      "Optimización para búsquedas locales",
      "Análisis de rendimiento detallado",
      "Soporte prioritario con respuesta en 24h",
      "Acceso a herramientas premium",
    ],
    dominator: [
      "Estrategia de link building avanzada",
      "Implementación de AMP (Accelerated Mobile Pages)",
      "Auditoría técnica mensual completa",
      "Reportes ejecutivos detallados",
      "Acceso a herramientas premium exclusivas",
      "Optimización para featured snippets",
      "Análisis de intención de búsqueda",
      "Estrategia de contenido multimedia",
      "Soporte telefónico prioritario",
      "Consultoría estratégica mensual",
    ],
    enterprise: [
      "Tiempo de respuesta garantizado <2 horas",
      "Equipo dedicado exclusivo de 3+ especialistas",
      "Reportes en tiempo real personalizados",
      "Capacitación del equipo interno",
      "SLA garantizado 99.9%",
      "Acceso prioritario a nuevas funcionalidades",
      "Consultoría estratégica C-level",
      "Implementación de tecnologías emergentes",
      "Soporte 24/7 multicanal",
      "Revisiones estratégicas trimestrales",
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <NavigationHeader title="Planes y Precios" />

      {/* Hero Section Mejorada */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-6 py-2 mb-8">
              <Sparkles className="h-4 w-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">Planes con descuentos especiales</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Nuestros{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent animate-pulse">
                paquetes
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Desde startups hasta empresas Fortune 500, tenemos la solución perfecta para llevar tu SEO al siguiente
              nivel con inteligencia artificial de última generación.
            </p>
          </div>

          {/* Toggle Mensual/Anual Mejorado */}
          <div className="flex items-center justify-center gap-6 mb-12 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <span
              className={`text-lg font-semibold transition-all duration-300 ${
                !isAnnual ? "text-white scale-110" : "text-slate-400 hover:text-slate-300"
              }`}
            >
              Mensual
            </span>

            <div className="relative p-1 bg-slate-800 rounded-full border border-slate-700">
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-orange-500 data-[state=checked]:to-orange-600 transition-all duration-300 hover:scale-110"
              />
            </div>

            <span
              className={`text-lg font-semibold transition-all duration-300 ${
                isAnnual ? "text-white scale-110" : "text-slate-400 hover:text-slate-300"
              }`}
            >
              Anual
            </span>

            {isAnnual && (
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white animate-bounce shadow-lg">
                <Zap className="mr-1 h-3 w-3" />
                ¡16.37% OFF!
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Sección de Tarjetas de Precios Mejorada */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 items-stretch">
            {plans.map((plan, index) => {
              const displayPrice = isAnnual ? calculateAnnualPrice(plan.monthlyPrice) : plan.monthlyPrice
              const displayPriceUsd = isAnnual ? calculateAnnualPriceUsd(plan.monthlyPriceUsd) : plan.monthlyPriceUsd
              const savings = isAnnual ? plan.monthlyPrice * 12 - displayPrice : 0
              const IconComponent = plan.icon

              return (
                <div
                  key={plan.id}
                  className={`flex animate-in fade-in slide-in-from-bottom-8 duration-1000`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Card
                    className={`bg-gradient-to-br from-slate-900 to-slate-800 ${plan.borderColor} ${
                      plan.popular || plan.enterprise ? "border-2 relative ring-2 ring-opacity-50" : "border"
                    } hover:shadow-2xl ${plan.glowColor} transition-all duration-500 ease-out
                    ${plan.enterprise ? "hover:scale-105" : "hover:scale-102"} 
                    ${plan.popular ? "hover:-translate-y-3" : "hover:-translate-y-2"}
                    flex flex-col w-full group cursor-pointer
                    hover:bg-gradient-to-br hover:from-slate-800 hover:to-slate-700 backdrop-blur-sm
                    ${plan.popular ? "ring-green-500/50" : plan.enterprise ? "ring-purple-500/50" : ""}`}
                    onClick={() => handlePlanClick(plan)}
                  >
                    {/* Badge superior mejorado */}
                    {(plan.popular || plan.enterprise) && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <Badge
                          className={`${plan.badge.color} animate-pulse group-hover:animate-bounce transition-all duration-300 shadow-lg px-4 py-1`}
                        >
                          {plan.enterprise && <Crown className="mr-1 h-3 w-3 animate-spin group-hover:animate-pulse" />}
                          {plan.badge.text}
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="text-center pb-6 flex-shrink-0 relative">
                      {/* Icono del plan */}
                      <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 w-fit group-hover:scale-110 transition-transform duration-300">
                        <IconComponent
                          className={`h-8 w-8 ${
                            plan.color === "green"
                              ? "text-green-400"
                              : plan.color === "orange"
                                ? "text-orange-400"
                                : plan.color === "purple"
                                  ? "text-purple-400"
                                  : "text-blue-400"
                          }`}
                        />
                      </div>

                      {/* Badge para planes normales */}
                      {!plan.popular && !plan.enterprise && (
                        <Badge
                          className={`${plan.badge.color} mb-4 mx-auto w-fit transition-all duration-300 group-hover:scale-110 shadow-md`}
                        >
                          {plan.badge.text}
                        </Badge>
                      )}

                      {/* Badge secundario */}
                      {plan.secondaryBadge && (
                        <Badge
                          className={`${plan.secondaryBadge.color} mb-4 mx-auto w-fit transition-all duration-300 group-hover:scale-110 shadow-md`}
                        >
                          {plan.secondaryBadge.text}
                        </Badge>
                      )}

                      {/* Nombre del plan */}
                      <CardTitle className="text-2xl md:text-3xl font-bold text-white mb-6 transition-all duration-300 group-hover:text-orange-300">
                        {plan.name}
                      </CardTitle>

                      {/* Precios mejorados */}
                      <div className="mb-8">
                        {/* Precio original tachado */}
                        <div className="text-lg text-slate-500 line-through mb-2 font-medium">
                          ${plan.originalPrice.toLocaleString()} MXN
                        </div>

                        {/* Precio actual */}
                        <div
                          className={`text-4xl md:text-5xl font-bold mb-3 transition-all duration-500 group-hover:scale-110 ${
                            plan.color === "green"
                              ? "text-green-400 group-hover:text-green-300"
                              : plan.color === "orange"
                                ? "text-orange-400 group-hover:text-orange-300"
                                : plan.color === "purple"
                                  ? "text-purple-400 group-hover:text-purple-300"
                                  : plan.color === "blue"
                                    ? "text-blue-400 group-hover:text-blue-300"
                                    : "text-slate-300 group-hover:text-slate-200"
                          }`}
                        >
                          ${displayPrice.toLocaleString()}
                        </div>

                        <div className="text-slate-400 transition-colors duration-300 group-hover:text-slate-300 text-lg font-medium mb-1">
                          o ${displayPriceUsd} USD
                        </div>

                        <div className="text-sm text-slate-500 transition-colors duration-300 group-hover:text-slate-400 font-medium">
                          {isAnnual ? "por año" : "por mes"}
                        </div>

                        {/* Badge de ahorro anual mejorado */}
                        {isAnnual && savings > 0 && (
                          <div className="mt-4 animate-in fade-in slide-in-from-right duration-500">
                            <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30 animate-pulse group-hover:animate-bounce shadow-lg">
                              <Sparkles className="mr-1 h-3 w-3" />
                              Ahorras ${savings.toLocaleString()} MXN
                            </Badge>
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0 flex flex-col flex-1 px-6">
                      {/* Lista de características mejorada */}
                      <div className="flex-1">
                        <ul className="space-y-4 mb-8">
                          {plan.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2 group-hover:text-white"
                              style={{ animationDelay: `${featureIndex * 100}ms` }}
                            >
                              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:text-green-300 group-hover:scale-125" />
                              <span className="text-slate-300 text-sm leading-relaxed transition-colors duration-300 group-hover:text-slate-100 font-medium">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Botón mejorado */}
                      <div className="mt-auto pt-6">
                        <Button
                          className={`w-full ${plan.buttonColor} text-white font-bold py-4 text-lg
                          transition-all duration-300 hover:scale-105 hover:shadow-xl 
                          active:scale-95 transform-gpu group-hover:animate-pulse
                          shadow-lg hover:shadow-2xl`}
                          onClick={(e) => {
                            e.stopPropagation()
                            handlePlanClick(plan)
                          }}
                          type="button"
                        >
                          <MessageSquare className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                          {plan.buttonText}
                        </Button>
                      </div>
                    </CardContent>

                    {/* Overlay decorativo mejorado */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        plan.color === "green"
                          ? "from-green-500/10 to-transparent"
                          : plan.color === "orange"
                            ? "from-orange-500/10 to-transparent"
                            : plan.color === "purple"
                              ? "from-purple-500/10 to-transparent"
                              : plan.color === "blue"
                                ? "from-blue-500/10 to-transparent"
                                : "from-slate-500/10 to-transparent"
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg`}
                    />
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sección de Características Detalladas Mejorada */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-900/50 via-slate-800/30 to-slate-900/50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Características{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent animate-pulse">
                detalladas
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Descubre todo lo que incluye cada plan para hacer crecer tu negocio con tecnología de vanguardia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {plans.map((plan, index) => {
              const displayPrice = isAnnual ? calculateAnnualPrice(plan.monthlyPrice) : plan.monthlyPrice
              const displayPriceUsd = isAnnual ? calculateAnnualPriceUsd(plan.monthlyPriceUsd) : plan.monthlyPriceUsd
              const IconComponent = plan.icon

              return (
                <div
                  key={`${plan.id}-details`}
                  className="animate-in fade-in slide-in-from-left duration-1000"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Card
                    className={`bg-gradient-to-br from-slate-900 to-slate-800 ${plan.borderColor} border-2 transition-all duration-500 hover:shadow-2xl ${plan.glowColor} hover:-translate-y-2 group relative overflow-hidden`}
                  >
                    {/* Background decorativo */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 ${
                        plan.color === "green"
                          ? "bg-green-500/10"
                          : plan.color === "orange"
                            ? "bg-orange-500/10"
                            : plan.color === "purple"
                              ? "bg-purple-500/10"
                              : "bg-blue-500/10"
                      } rounded-full blur-2xl transform translate-x-16 -translate-y-16`}
                    ></div>

                    <CardHeader className="relative z-10">
                      <CardTitle className="flex items-center gap-4 text-white transition-colors duration-300 group-hover:text-orange-300">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800">
                          <IconComponent
                            className={`h-6 w-6 ${
                              plan.color === "green"
                                ? "text-green-400"
                                : plan.color === "orange"
                                  ? "text-orange-400"
                                  : plan.color === "purple"
                                    ? "text-purple-400"
                                    : "text-blue-400"
                            }`}
                          />
                        </div>

                        <div className="flex-1">
                          <div className="text-2xl font-bold">{plan.name}</div>
                          <Badge
                            className={`${plan.badge.color} transition-all duration-300 group-hover:scale-110 mt-2`}
                          >
                            {plan.badge.text}
                          </Badge>
                        </div>

                        {plan.enterprise && (
                          <Crown className="h-8 w-8 text-purple-400 animate-pulse group-hover:animate-spin" />
                        )}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <div className="mb-8">
                        <div className="text-lg text-slate-500 line-through mb-2">
                          ${plan.originalPrice.toLocaleString()} MXN
                        </div>
                        <div
                          className={`text-4xl font-bold transition-all duration-500 group-hover:scale-110 ${
                            plan.color === "green"
                              ? "text-green-400 group-hover:text-green-300"
                              : plan.color === "orange"
                                ? "text-orange-400 group-hover:text-orange-300"
                                : plan.color === "purple"
                                  ? "text-purple-400 group-hover:text-purple-300"
                                  : plan.color === "blue"
                                    ? "text-blue-400 group-hover:text-blue-300"
                                    : "text-slate-300 group-hover:text-slate-200"
                          }`}
                        >
                          ${displayPrice.toLocaleString()} MXN
                        </div>
                        <div className="text-slate-400 transition-colors duration-300 group-hover:text-slate-300 text-lg">
                          o ${displayPriceUsd} USD
                        </div>
                        <div className="text-sm text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                          {isAnnual ? "por año" : "por mes"}
                        </div>
                      </div>

                      <h4 className="font-bold text-white mb-6 transition-colors duration-300 group-hover:text-orange-300 text-lg">
                        Todo lo que incluye:
                      </h4>

                      <ul className="space-y-3 mb-8">
                        {[...plan.features, ...additionalFeatures[plan.id as keyof typeof additionalFeatures]].map(
                          (feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2"
                              style={{ animationDelay: `${featureIndex * 50}ms` }}
                            >
                              <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0 transition-all duration-300 group-hover:text-green-300 group-hover:scale-125" />
                              <span className="text-slate-300 text-sm transition-colors duration-300 group-hover:text-slate-100 leading-relaxed">
                                {feature}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>

                      <Button
                        className={`w-full ${plan.buttonColor} text-white font-bold py-4 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 transform-gpu shadow-lg`}
                        onClick={(e) => {
                          e.stopPropagation()
                          handlePlanClick(plan)
                        }}
                        type="button"
                      >
                        <MessageSquare className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
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

      {/* Tabla de Comparación Mejorada */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comparación de{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent animate-pulse">
                planes
              </span>
            </h2>
            <p className="text-xl text-slate-300">Encuentra el plan perfecto para tus necesidades específicas</p>
          </div>

          <div className="overflow-x-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-slate-800 to-slate-700">
                  <tr>
                    <th className="text-left p-6 text-white font-bold text-lg">Características</th>
                    <th className="text-center p-6 text-white font-bold">
                      <div className="flex flex-col items-center gap-2">
                        <Rocket className="h-5 w-5 text-blue-400" />
                        Launchpad
                      </div>
                    </th>
                    <th className="text-center p-6 text-white font-bold">
                      <div className="flex flex-col items-center gap-2">
                        <Star className="h-5 w-5 text-green-400" />
                        Accelerator
                      </div>
                    </th>
                    <th className="text-center p-6 text-white font-bold">
                      <div className="flex flex-col items-center gap-2">
                        <Target className="h-5 w-5 text-orange-400" />
                        Dominator
                      </div>
                    </th>
                    <th className="text-center p-6 text-white font-bold">
                      <div className="flex flex-col items-center gap-2">
                        <Building className="h-5 w-5 text-purple-400" />
                        Enterprise
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-slate-700 hover:bg-slate-800/50 transition-colors duration-300">
                    <td className="p-6 font-semibold">Páginas optimizadas</td>
                    <td className="text-center p-6 font-medium">5</td>
                    <td className="text-center p-6 font-medium">10</td>
                    <td className="text-center p-6 font-medium">15</td>
                    <td className="text-center p-6">
                      <span className="text-purple-400 font-bold animate-pulse">20+</span>
                    </td>
                  </tr>
                  <tr className="border-t border-slate-700 hover:bg-slate-800/50 transition-colors duration-300">
                    <td className="p-6 font-semibold">Contenidos mensuales</td>
                    <td className="text-center p-6 font-medium">5</td>
                    <td className="text-center p-6 font-medium">10</td>
                    <td className="text-center p-6 font-medium">20</td>
                    <td className="text-center p-6">
                      <span className="text-purple-400 font-bold animate-pulse">50</span>
                    </td>
                  </tr>
                  <tr className="border-t border-slate-700 hover:bg-slate-800/50 transition-colors duration-300">
                    <td className="p-6 font-semibold">Reporte mensual de visibilidad</td>
                    <td className="text-center p-6">
                      <CheckCircle className="h-6 w-6 text-green-400 mx-auto transition-all duration-300 hover:scale-125 hover:text-green-300" />
                    </td>
                    <td className="text-center p-6">
                      <CheckCircle className="h-6 w-6 text-green-400 mx-auto transition-all duration-300 hover:scale-125 hover:text-green-300" />
                    </td>
                    <td className="text-center p-6">
                      <CheckCircle className="h-6 w-6 text-green-400 mx-auto transition-all duration-300 hover:scale-125 hover:text-green-300" />
                    </td>
                    <td className="text-center p-6">
                      <CheckCircle className="h-6 w-6 text-green-400 mx-auto transition-all duration-300 hover:scale-125 hover:text-green-300" />
                    </td>
                  </tr>
                  <tr className="border-t border-slate-700 hover:bg-slate-800/50 transition-colors duration-300">
                    <td className="p-6 font-semibold">Nivel de soporte</td>
                    <td className="text-center p-6 font-medium">Estándar</td>
                    <td className="text-center p-6 font-medium">Prioritario</td>
                    <td className="text-center p-6 font-medium">Completo</td>
                    <td className="text-center p-6">
                      <span className="text-purple-400 font-bold animate-pulse">24/7 Dedicado</span>
                    </td>
                  </tr>
                  <tr className="border-t border-slate-700 hover:bg-slate-800/50 transition-colors duration-300">
                    <td className="p-6 font-semibold">IA Personalizada</td>
                    <td className="text-center p-6 text-slate-500">-</td>
                    <td className="text-center p-6 text-slate-500">-</td>
                    <td className="text-center p-6 text-slate-500">-</td>
                    <td className="text-center p-6">
                      <CheckCircle className="h-6 w-6 text-green-400 mx-auto transition-all duration-300 hover:scale-125 hover:text-green-300" />
                    </td>
                  </tr>
                  <tr className="border-t border-slate-700 hover:bg-slate-800/50 transition-colors duration-300">
                    <td className="p-6 font-semibold">Account Manager</td>
                    <td className="text-center p-6 text-slate-500">-</td>
                    <td className="text-center p-6 text-slate-500">-</td>
                    <td className="text-center p-6 text-slate-500">-</td>
                    <td className="text-center p-6">
                      <CheckCircle className="h-6 w-6 text-green-400 mx-auto transition-all duration-300 hover:scale-125 hover:text-green-300" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Sección FAQ Mejorada */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-900/50 via-slate-800/30 to-slate-900/50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Preguntas{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent animate-pulse">
                frecuentes
              </span>
            </h2>
            <p className="text-xl text-slate-300">Resolvemos tus dudas más comunes</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "¿Qué incluye el reporte mensual de visibilidad?",
                answer:
                  "Cada mes recibes un reporte detallado con métricas de aparición en AI Overviews, posicionamiento en motores generativos, análisis de competencia y recomendaciones de mejora específicas para tu industria. Incluye datos de tráfico, conversiones y ROI.",
              },
              {
                question: "¿Qué incluye la IA personalizada del plan Enterprise?",
                answer:
                  "La IA personalizada incluye un modelo entrenado específicamente con datos de tu industria, competencia y objetivos de negocio. Esto permite generar contenido más relevante, estrategias más efectivas y análisis predictivos para tu nicho específico.",
              },
              {
                question: "¿Puedo cambiar de plan en cualquier momento?",
                answer:
                  "Sí, puedes actualizar tu plan en cualquier momento. Los cambios se aplican inmediatamente y solo pagas la diferencia prorrateada del período actual. También ofrecemos un período de prueba de 30 días.",
              },
              {
                question: "¿Qué significa 'optimización ilimitada' en Enterprise?",
                answer:
                  "Significa que no hay límites en el número de páginas, URLs, o elementos de tu sitio web que podemos optimizar. Trabajamos en todo tu ecosistema digital sin restricciones, incluyendo subdominios y sitios internacionales.",
              },
              {
                question: "¿Cómo funciona el descuento anual?",
                answer:
                  "Al elegir el plan anual, obtienes un 16.37% de descuento sobre el precio mensual. El pago se realiza una vez al año y tienes acceso inmediato a todos los beneficios de tu plan, más bonificaciones exclusivas.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="animate-in fade-in slide-in-from-left duration-1000"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 border-2 transition-all duration-300 hover:shadow-2xl hover:bg-gradient-to-br hover:from-slate-800 hover:to-slate-700 hover:-translate-y-1 group">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-orange-300">
                      {faq.question}
                    </h3>
                    <p className="text-slate-300 transition-colors duration-300 group-hover:text-slate-100 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección CTA Final Mejorada */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            ¿No estás seguro qué plan{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent animate-pulse">
              elegir
            </span>
            ?
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
            Agenda una consulta personalizada gratuita y te ayudaremos a encontrar la solución perfecta para hacer
            crecer tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-6 text-xl font-bold
              transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 
              active:scale-95 transform-gpu group shadow-xl"
              onClick={() => {
                trackContact()
                window.open(
                  "https://wa.me/5256202022210?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20gratuita%20para%20elegir%20el%20mejor%20plan%20AIO%20para%20mi%20negocio.%20%C2%BFPodr%C3%ADamos%20hablar%3F",
                  "_blank",
                )
              }}
              type="button"
            >
              <MessageSquare className="mr-3 h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
              Consulta Gratuita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-950/30 bg-transparent px-10 py-6 text-xl font-bold
              transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10
              active:scale-95 transform-gpu group hover:border-orange-300"
              onClick={() => {
                trackContact()
                window.open(
                  "https://wa.me/5256202022210?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20detallada%20sobre%20los%20planes%20AIO%20y%20sus%20diferencias.%20%C2%BFPodr%C3%ADan%20ayudarme%3F",
                  "_blank",
                )
              }}
              type="button"
            >
              <ArrowRight className="mr-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
              Más Información
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
