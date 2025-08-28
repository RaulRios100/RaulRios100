"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Brain,
  Target,
  TrendingUp,
  Users,
  MessageSquare,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import NavigationHeader from "@/components/navigation-header"
import { trackContact } from "@/components/facebook-pixel"

export default function HomePage() {
  const handleWhatsAppClick = (message: string) => {
    trackContact()
    window.open(`https://wa.me/5256202022210?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleCalendlyClick = () => {
    trackContact()
    window.open("https://calendly.com/ai-positioning/auditoria-gratuita", "_blank")
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10" />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30 animate-pulse">
              <Zap className="mr-2 h-4 w-4" />
              Revoluciona tu SEO con IA
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Domina los{" "}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                AI Overviews
              </span>{" "}
              de Google
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              La primera agencia especializada en posicionar tu negocio en las respuestas de inteligencia artificial.
              Aumenta tu visibilidad cuando tus clientes preguntan a ChatGPT, Claude, Gemini y Google AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() =>
                  handleWhatsAppClick(
                    "¡Hola! Me interesa conocer cómo AI Positioning puede ayudar a mi negocio a aparecer en las respuestas de IA. ¿Podríamos hablar?",
                  )
                }
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Consulta Gratuita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-400 text-orange-400 hover:bg-orange-950/20 bg-transparent px-8 py-4 text-lg"
                onClick={handleCalendlyClick}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Auditoría
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">95%</div>
              <div className="text-slate-400">Mejora en visibilidad IA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">300%</div>
              <div className="text-slate-400">Aumento en tráfico</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">150+</div>
              <div className="text-slate-400">Clientes satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-slate-400">Soporte dedicado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">El futuro del SEO ya está aquí</h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Mientras tu competencia sigue optimizando para búsquedas tradicionales, tus clientes ya están preguntando
              a la IA sobre tu industria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-left duration-1000">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Tu negocio es invisible para la IA</h3>
                  <p className="text-slate-300">
                    ChatGPT, Claude, Gemini y Google AI no mencionan tu empresa cuando los usuarios preguntan sobre tu
                    industria.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Pierdes clientes potenciales</h3>
                  <p className="text-slate-300">
                    El 73% de las búsquedas ya incluyen IA. Si no apareces ahí, tu competencia está capturando esos
                    leads.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Tu audiencia cambió sus hábitos</h3>
                  <p className="text-slate-300">
                    Los usuarios prefieren respuestas directas de IA en lugar de navegar por múltiples sitios web.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-in fade-in slide-in-from-right duration-1000">
              <Card className="bg-slate-900 border-slate-700 p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">AI</span>
                    </div>
                    <span className="text-slate-300">Usuario pregunta:</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-white italic">
                      "¿Cuáles son las mejores empresas de marketing digital en México?"
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-slate-300">Competidor A mencionado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-slate-300">Competidor B mencionado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-red-400 rounded-full" />
                      <span className="text-red-400">Tu empresa NO aparece</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/30">
              <Brain className="mr-2 h-4 w-4" />
              Nuestra Solución
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Te posicionamos en las <span className="text-orange-500">respuestas de IA</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Somos la primera agencia especializada en AI Positioning. Optimizamos tu presencia digital para que
              aparezcas cuando la IA responde preguntas sobre tu industria.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-900 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 group">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 text-orange-400" />
                </div>
                <CardTitle className="text-white group-hover:text-orange-300 transition-colors duration-300">
                  Optimización para LLMs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 group-hover:text-slate-100 transition-colors duration-300">
                  Estructuramos tu contenido para que los modelos de IA como GPT, Claude y Gemini te reconozcan como
                  autoridad en tu sector.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 group">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-orange-400" />
                </div>
                <CardTitle className="text-white group-hover:text-orange-300 transition-colors duration-300">
                  AI Overviews de Google
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 group-hover:text-slate-100 transition-colors duration-300">
                  Te posicionamos en las respuestas generadas por IA de Google, capturando tráfico de alta calidad desde
                  el primer resultado.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 group">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <CardTitle className="text-white group-hover:text-orange-300 transition-colors duration-300">
                  Chatbots Inteligentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 group-hover:text-slate-100 transition-colors duration-300">
                  Implementamos chatbots con IA que convierten visitantes en leads, disponibles 24/7 para capturar
                  oportunidades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Nuestros <span className="text-orange-500">servicios</span>
            </h2>
            <p className="text-xl text-slate-300">Soluciones integrales para dominar el futuro del marketing digital</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/servicios/ai-overviews" className="group">
              <Card className="bg-slate-900 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 h-full">
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-orange-300 transition-colors duration-300 text-lg">
                    AI Overviews
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 group-hover:text-slate-100 transition-colors duration-300 text-sm">
                    Posicionamiento en respuestas de Google AI
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/servicios/optimizacion-llm" className="group">
              <Card className="bg-slate-900 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 h-full">
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-orange-300 transition-colors duration-300 text-lg">
                    Optimización LLM
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 group-hover:text-slate-100 transition-colors duration-300 text-sm">
                    Optimización para ChatGPT, Claude y Gemini
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/servicios/chatbots-ia" className="group">
              <Card className="bg-slate-900 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 h-full">
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-orange-300 transition-colors duration-300 text-lg">
                    Chatbots IA
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 group-hover:text-slate-100 transition-colors duration-300 text-sm">
                    Asistentes inteligentes para tu negocio
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/servicios/schema-markup" className="group">
              <Card className="bg-slate-900 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 h-full">
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-orange-300 transition-colors duration-300 text-lg">
                    Schema Markup
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 group-hover:text-slate-100 transition-colors duration-300 text-sm">
                    Datos estructurados para mejor comprensión IA
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link href="/servicios">
                Ver todos los servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Lo que dicen nuestros <span className="text-orange-500">clientes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-900 border-slate-700 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 group-hover:text-slate-100 transition-colors duration-300">
                  "Increíble cómo AI Positioning logró que apareciéramos en las respuestas de ChatGPT. Nuestro tráfico
                  aumentó 300% en solo 3 meses."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">MR</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">María Rodríguez</div>
                    <div className="text-slate-400 text-sm">CEO, TechStart</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-700 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 group-hover:text-slate-100 transition-colors duration-300">
                  "El chatbot IA que implementaron convierte el 40% de las consultas en leads calificados. ROI
                  impresionante."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">CL</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Carlos López</div>
                    <div className="text-slate-400 text-sm">Director, InnovaWeb</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-700 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 group-hover:text-slate-100 transition-colors duration-300">
                  "Ahora aparecemos en Google AI Overviews para todas nuestras palabras clave principales. Resultados
                  excepcionales."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">AS</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Ana Sánchez</div>
                    <div className="text-slate-400 text-sm">Fundadora, EcoSolutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para dominar el <span className="text-orange-500">futuro del SEO</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              No esperes a que tu competencia se adelante. Comienza hoy a posicionar tu negocio en las respuestas de
              inteligencia artificial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() =>
                  handleWhatsAppClick(
                    "¡Hola! Quiero comenzar a posicionar mi negocio en las respuestas de IA. ¿Podemos agendar una consulta?",
                  )
                }
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Comenzar ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-400 text-orange-400 hover:bg-orange-950/20 bg-transparent px-8 py-4 text-lg"
                asChild
              >
                <Link href="/casos-de-exito">
                  Ver casos de éxito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
