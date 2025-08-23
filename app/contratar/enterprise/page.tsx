"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Crown,
  Zap,
  Users,
  Brain,
  MessageSquare,
  BarChart3,
  Globe,
  Shield,
  Clock,
  Star,
  Rocket,
  Target,
  TrendingUp,
} from "lucide-react"
import NavigationHeader from "@/components/navigation-header"

export default function EnterprisePage() {
  const features = [
    {
      icon: <CheckCircle className="h-5 w-5 text-green-400" />,
      title: "Todo lo anterior +",
      description: "Todos los beneficios de los planes Launchpad, Accelerator y Dominator",
    },
    {
      icon: <Zap className="h-5 w-5 text-purple-400" />,
      title: "Optimización ilimitada",
      description: "Sin límites en páginas, URLs o contenido a optimizar",
    },
    {
      icon: <Brain className="h-5 w-5 text-purple-400" />,
      title: "IA personalizada",
      description: "Modelo de IA entrenado específicamente para tu industria y negocio",
    },
    {
      icon: <Users className="h-5 w-5 text-purple-400" />,
      title: "Account Manager 24/7",
      description: "Gerente de cuenta dedicado disponible las 24 horas del día",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-purple-400" />,
      title: "50 contenidos mensuales",
      description: "Creación masiva de contenido optimizado para SEO con IA",
    },
    {
      icon: <Shield className="h-5 w-5 text-purple-400" />,
      title: "SLA garantizado",
      description: "Acuerdo de nivel de servicio con garantías de tiempo de respuesta",
    },
    {
      icon: <Globe className="h-5 w-5 text-purple-400" />,
      title: "SEO internacional",
      description: "Optimización para múltiples países y idiomas",
    },
    {
      icon: <Rocket className="h-5 w-5 text-purple-400" />,
      title: "Implementación prioritaria",
      description: "Acceso prioritario a nuevas funcionalidades y actualizaciones",
    },
  ]

  const benefits = [
    {
      icon: <Crown className="h-6 w-6 text-purple-400" />,
      title: "Solución Corporativa Completa",
      description: "Diseñado para empresas que necesitan dominar completamente su mercado digital",
    },
    {
      icon: <Target className="h-6 w-6 text-purple-400" />,
      title: "Resultados Escalables",
      description: "Estrategias que crecen con tu empresa y se adaptan a tus objetivos cambiantes",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-400" />,
      title: "ROI Maximizado",
      description: "Inversión que se traduce en crecimiento exponencial de tu presencia digital",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Análisis Corporativo",
      description: "Auditoría completa de tu ecosistema digital y competencia",
    },
    {
      step: "2",
      title: "Estrategia Personalizada",
      description: "Desarrollo de estrategia única basada en tus objetivos empresariales",
    },
    {
      step: "3",
      title: "Implementación Dedicada",
      description: "Equipo exclusivo trabajando en tu proyecto con prioridad máxima",
    },
    {
      step: "4",
      title: "Optimización Continua",
      description: "Monitoreo 24/7 y optimización constante basada en datos en tiempo real",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <NavigationHeader title="AIO Enterprise" />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-950/20 via-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Badge className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2">
              <Crown className="mr-2 h-4 w-4" />
              ENTERPRISE
            </Badge>
            <Badge variant="outline" className="border-purple-400 text-purple-400 bg-purple-950/20">
              CORPORATIVO
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AIO <span className="text-purple-400">ENTERPRISE</span>
          </h1>

          <div className="mb-8">
            <div className="text-5xl md:text-6xl font-bold text-purple-400 mb-2">$70,000 MXN</div>
            <div className="text-xl text-slate-400">o $3,888 USD</div>
          </div>

          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            La solución más completa para empresas que buscan dominar completamente su mercado digital. Optimización
            ilimitada, IA personalizada y soporte 24/7.
          </p>

          <Button
            size="lg"
            className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 text-lg font-semibold"
            onClick={() =>
              window.open(
                "https://wa.me/5256202022210?text=Hola%2C%20me%20interesa%20el%20plan%20AIO%20Enterprise%20para%20mi%20empresa.%20%C2%BFPodr%C3%ADamos%20agendar%20una%20reuni%C3%B3n%3F",
                "_blank",
              )
            }
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Solución Enterprise
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Todo lo que necesitas para <span className="text-purple-400">dominar tu mercado</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              El plan Enterprise incluye todas las funcionalidades de nuestros otros planes, más características
              exclusivas para empresas de gran escala.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-900 border-slate-700 hover:border-purple-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {feature.icon}
                    <div>
                      <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-950/10 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Por qué elegir <span className="text-purple-400">Enterprise</span>?
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-slate-900 border-slate-700 text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nuestro proceso <span className="text-purple-400">Enterprise</span>
            </h2>
            <p className="text-xl text-slate-300">
              Un enfoque estructurado y personalizado para maximizar tu inversión
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <Card key={index} className="bg-slate-900 border-slate-700 relative">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-900 border-purple-500/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Comparación con otros planes</CardTitle>
              <CardDescription className="text-slate-300">
                Ve por qué Enterprise es la mejor opción para tu empresa
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Planes Básicos</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                      <span>Límites en optimización</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                      <span>Soporte en horario laboral</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                      <span>IA genérica</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                      <span>Contenido limitado</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-4">Plan Enterprise</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Optimización ilimitada</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Soporte 24/7 dedicado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>IA personalizada</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>50 contenidos mensuales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-950/20 via-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para llevar tu empresa al <span className="text-purple-400">siguiente nivel</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Únete a las empresas líderes que ya están dominando su mercado con nuestra solución Enterprise. Agenda una
            consulta personalizada y descubre cómo podemos transformar tu presencia digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 text-lg font-semibold"
              onClick={() =>
                window.open(
                  "https://wa.me/5256202022210?text=Hola%2C%20me%20interesa%20el%20plan%20AIO%20Enterprise.%20%C2%BFPodr%C3%ADamos%20agendar%20una%20reuni%C3%B3n%20para%20discutir%20los%20detalles%3F",
                  "_blank",
                )
              }
            >
              <Crown className="mr-2 h-5 w-5" />
              Agendar Consulta Enterprise
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-950/20 bg-transparent px-8 py-4 text-lg"
              onClick={() =>
                window.open(
                  "https://wa.me/5256202022210?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20plan%20Enterprise%20y%20sus%20beneficios.%20%C2%BFPodr%C3%ADan%20contactarme%3F",
                  "_blank",
                )
              }
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Más Información
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-purple-400" />
              <span>Implementación en 48 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-purple-400" />
              <span>SLA garantizado</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-purple-400" />
              <span>Soporte premium 24/7</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
