"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Star,
  TrendingUp,
  Shield,
  Sparkles,
  Brain,
  Search,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import NavigationHeader from "@/components/navigation-header"
import { trackContact, trackViewContent } from "@/components/facebook-pixel"
import { useEffect } from "react"

export default function HomePage() {
  useEffect(() => {
    trackViewContent()
  }, [])

  const handleContactClick = () => {
    trackContact()
    window.open(
      "https://wa.me/5256202022210?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20SEO%20con%20IA.%20%C2%BFPodr%C3%ADamos%20hablar%3F",
      "_blank",
    )
  }

  const features = [
    {
      icon: Brain,
      title: "IA Generativa Avanzada",
      description: "Optimización automática para AI Overviews y motores de búsqueda generativos",
    },
    {
      icon: Search,
      title: "SGE Optimization",
      description: "Posicionamiento estratégico en Search Generative Experience de Google",
    },
    {
      icon: BarChart3,
      title: "Analytics Predictivo",
      description: "Análisis de datos con IA para predecir tendencias y oportunidades",
    },
    {
      icon: Shield,
      title: "Protección de Marca",
      description: "Monitoreo y optimización de tu presencia en resultados generativos",
    },
  ]

  const plans = [
    {
      name: "AIO LAUNCHPAD",
      price: "10,000",
      originalPrice: "20,000",
      description: "Perfecto para empezar tu transformación digital",
      features: [
        "Auditoría inicial completa",
        "5 páginas optimizadas",
        "5 contenidos mensuales",
        "Reporte mensual básico",
      ],
      color: "blue",
      href: "/contratar/launchpad",
    },
    {
      name: "AIO ACCELERATOR",
      price: "15,000",
      originalPrice: "30,000",
      description: "El más popular para crecimiento acelerado",
      features: ["10 páginas optimizadas", "10 contenidos mensuales", "Chatbot IA incluido", "Soporte prioritario"],
      color: "green",
      popular: true,
      href: "/contratar/accelerator",
    },
    {
      name: "AIO DOMINATOR",
      price: "30,000",
      originalPrice: "60,000",
      description: "Para dominar completamente tu mercado",
      features: ["15 páginas optimizadas", "20 contenidos mensuales", "Link building premium", "Coaching estratégico"],
      color: "orange",
      href: "/contratar/dominator",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Badge className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border-orange-500/30 text-orange-300 mb-8 px-6 py-2">
              <Sparkles className="mr-2 h-4 w-4" />
              Agencia líder en SEO con IA
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Domina los{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                motores generativos
              </span>{" "}
              con IA
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Somos la primera agencia especializada en posicionamiento para AI Overviews, SGE y motores de búsqueda
              generativos. Aumenta tu visibilidad donde realmente importa.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-6 text-xl font-bold
                transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 
                active:scale-95 transform-gpu group shadow-xl"
                onClick={handleContactClick}
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
                asChild
              >
                <Link href="/precios">
                  <ArrowRight className="mr-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                  Ver Planes
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">+300%</div>
                <div className="text-slate-300">Aumento promedio en visibilidad</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-slate-300">Clientes satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-slate-300">Monitoreo con IA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-900/50 via-slate-800/30 to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Por qué elegir{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                nuestra IA
              </span>
              ?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Somos pioneros en optimización para motores generativos y AI Overviews
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 w-fit group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-orange-400" />
                    </div>
                    <CardTitle className="text-white group-hover:text-orange-300 transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-center group-hover:text-slate-100 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Plans Preview Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Planes diseñados para{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                tu crecimiento
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Desde startups hasta empresas Fortune 500, tenemos la solución perfecta
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-slate-900 to-slate-800 border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group relative
                ${plan.popular ? "border-green-500 ring-2 ring-green-500/20" : "border-slate-700 hover:border-orange-500/50"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-green-500 text-white animate-pulse px-4 py-1">
                      <Star className="mr-1 h-3 w-3" />
                      MÁS POPULAR
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                    {plan.name}
                  </CardTitle>

                  <div className="mb-4">
                    <div className="text-lg text-slate-500 line-through mb-1">${plan.originalPrice} MXN</div>
                    <div
                      className={`text-4xl font-bold mb-2 transition-all duration-500 group-hover:scale-110 ${
                        plan.color === "green"
                          ? "text-green-400"
                          : plan.color === "orange"
                            ? "text-orange-400"
                            : "text-blue-400"
                      }`}
                    >
                      ${plan.price} MXN
                    </div>
                    <div className="text-sm text-slate-500">por mes</div>
                  </div>

                  <p className="text-slate-300 mb-6 group-hover:text-slate-100 transition-colors duration-300">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm group-hover:text-slate-100 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full font-bold py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 ${
                      plan.color === "green"
                        ? "bg-green-500 hover:bg-green-600"
                        : plan.color === "orange"
                          ? "bg-orange-500 hover:bg-orange-600"
                          : "bg-blue-500 hover:bg-blue-600"
                    }`}
                    asChild
                  >
                    <Link href={plan.href}>Elegir Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-950/30 bg-transparent px-8 py-4 text-lg font-bold
              transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10
              active:scale-95 transform-gpu group hover:border-orange-300"
              asChild
            >
              <Link href="/precios">
                <ArrowRight className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                Ver Todos los Planes
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-900/50 via-slate-800/30 to-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            ¿Listo para{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              dominar
            </span>{" "}
            los motores generativos?
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
            Agenda una consulta gratuita y descubre cómo la IA puede transformar tu presencia digital
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-6 text-xl font-bold
              transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 
              active:scale-95 transform-gpu group shadow-xl"
              onClick={handleContactClick}
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
              asChild
            >
              <Link href="/aprende-mas">
                <TrendingUp className="mr-3 h-6 w-6 transition-transform duration-300 group-hover:translate-y-1" />
                Aprende Más
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
