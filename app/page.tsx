import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Zap, Target, TrendingUp, Users, Brain, Crown, Sparkles, Globe } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-orange-500/10 text-orange-400 border-orange-500/20">
            🚀 Posicionamiento con IA
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Domina Google con <span className="text-orange-400">Inteligencia Artificial</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            Revoluciona tu presencia digital con estrategias de SEO potenciadas por IA. Resultados medibles,
            posicionamiento garantizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg" asChild>
              <a
                href="https://wa.me/5256202022210?text=Hola%2C%20quiero%20agendar%20una%20auditor%C3%ADa%20SEO%20para%20mi%20negocio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Auditoría SEO <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg bg-transparent"
              asChild
            >
              <Link href="/aprende-mas">Aprende Más</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Por qué elegir <span className="text-orange-400">IA para SEO</span>?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              La inteligencia artificial revoluciona el SEO con análisis profundo, optimización automática y resultados
              10x más rápidos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
              <CardHeader>
                <Brain className="h-12 w-12 text-orange-400 mb-4" />
                <CardTitle className="text-white">Análisis Inteligente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  IA analiza millones de datos para identificar oportunidades únicas de posicionamiento que la
                  competencia no ve.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
              <CardHeader>
                <Zap className="h-12 w-12 text-orange-400 mb-4" />
                <CardTitle className="text-white">Optimización Automática</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Algoritmos avanzados optimizan tu contenido 24/7, adaptándose a los cambios de Google en tiempo real.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-orange-400 mb-4" />
                <CardTitle className="text-white">Resultados Medibles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Dashboard en tiempo real con métricas precisas y predicciones de crecimiento basadas en IA.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="paquetes" className="py-20 px-4 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Elige tu <span className="text-orange-400">paquete de posicionamiento</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Planes diseñados para cada etapa de crecimiento, desde startups hasta empresas Fortune 500
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Launchpad Plan */}
            <Card className="bg-slate-900 border-slate-700 hover:border-slate-600 transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-slate-700 text-slate-300">PARA EMPEZAR</Badge>
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-bold text-white mb-2">AIO LAUNCHPAD</CardTitle>
                <div className="text-3xl font-bold text-white mb-1">$10,000 MXN</div>
                <div className="text-slate-400">o $555 USD</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">Auditoría inicial completa</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">Optimización de 5 páginas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">Schema markup básico</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">5 contenidos mensuales</span>
                  </div>
                </div>
                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white" asChild>
                  <Link href="/contratar/launchpad">Comenzar ahora</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Accelerator Plan */}
            <Card className="bg-slate-900 border-green-500 hover:border-green-400 transition-all duration-300 relative transform hover:scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 flex flex-col gap-1">
                <Badge className="bg-green-500 text-white">MÁS POPULAR</Badge>
                <Badge className="bg-green-600 text-white">CRECIMIENTO</Badge>
              </div>
              <CardHeader className="text-center pt-12">
                <CardTitle className="text-2xl font-bold text-white mb-2">AIO ACCELERATOR</CardTitle>
                <div className="text-3xl font-bold text-green-400 mb-1">$15,000 MXN</div>
                <div className="text-slate-400">o $810 USD</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">Todo lo anterior +</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">10 URLs optimizadas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">Chatbot LLM simple</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">10 contenidos mensuales</span>
                  </div>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white" asChild>
                  <Link href="/contratar/accelerator">Acelerar crecimiento</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Dominator Plan */}
            <Card className="bg-slate-900 border-orange-500 hover:border-orange-400 transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white">DOMINACIÓN</Badge>
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-bold text-white mb-2">AIO DOMINATOR</CardTitle>
                <div className="text-3xl font-bold text-orange-400 mb-1">$30,000 MXN</div>
                <div className="text-slate-400">o $1,666 USD</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">Todo lo anterior +</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">Sitio completo optimizado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">PR digital y enlaces</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">20 contenidos mensuales</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <Link href="/contratar/dominator">Dominar mercado</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-slate-900 border-purple-500 hover:border-purple-400 transition-all duration-300 relative transform hover:scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 flex flex-col gap-1">
                <Badge className="bg-purple-500 text-white">ENTERPRISE</Badge>
                <Badge className="bg-purple-600 text-white">CORPORATIVO</Badge>
              </div>
              <CardHeader className="text-center pt-12">
                <CardTitle className="text-2xl font-bold text-white mb-2">AIO ENTERPRISE</CardTitle>
                <div className="text-3xl font-bold text-purple-400 mb-1">$70,000 MXN</div>
                <div className="text-slate-400">o $3,888 USD</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">Todo lo anterior +</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Crown className="h-5 w-5 text-purple-400" />
                    <span className="text-slate-300">Optimización ilimitada</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Brain className="h-5 w-5 text-purple-400" />
                    <span className="text-slate-300">IA personalizada</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-purple-400" />
                    <span className="text-slate-300">Account Manager 24/7</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-purple-400" />
                    <span className="text-slate-300">50 contenidos mensuales</span>
                  </div>
                </div>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white" asChild>
                  <Link href="/contratar/enterprise">Solución Enterprise</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Servicios especializados en <span className="text-orange-400">IA y SEO</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tecnologías de vanguardia para posicionar tu negocio en la era de la inteligencia artificial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300 group">
              <CardHeader>
                <Globe className="h-12 w-12 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">AI Overviews</CardTitle>
                <CardDescription className="text-slate-300">
                  Optimización para las nuevas respuestas de IA de Google
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                  asChild
                >
                  <Link href="/servicios/ai-overviews">Más información</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300 group">
              <CardHeader>
                <Brain className="h-12 w-12 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">Chatbots IA</CardTitle>
                <CardDescription className="text-slate-300">
                  Asistentes inteligentes que convierten visitantes en clientes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                  asChild
                >
                  <Link href="/servicios/chatbots-ia">Más información</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300 group">
              <CardHeader>
                <Target className="h-12 w-12 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">Optimización LLM</CardTitle>
                <CardDescription className="text-slate-300">
                  Posicionamiento en ChatGPT, Claude y otros modelos de IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                  asChild
                >
                  <Link href="/servicios/optimizacion-llm">Más información</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300 group">
              <CardHeader>
                <Zap className="h-12 w-12 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">Schema Markup</CardTitle>
                <CardDescription className="text-slate-300">
                  Datos estructurados avanzados para máxima visibilidad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                  asChild
                >
                  <Link href="/servicios/schema-markup">Más información</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para <span className="text-orange-400">dominar Google</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Únete a las empresas que ya están aprovechando el poder de la IA para multiplicar su tráfico orgánico y
            ventas online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg" asChild>
              <a
                href="https://wa.me/5256202022210?text=Hola%2C%20quiero%20una%20consulta%20personalizada%20sobre%20sus%20servicios%20de%20SEO%20con%20IA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consulta Personalizada <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg bg-transparent"
              asChild
            >
              <Link href="/contacto">Más información</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">AIO Marketing</h3>
              <p className="text-slate-400 mb-4">Revolucionando el marketing digital con inteligencia artificial</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Servicios</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/servicios/ai-overviews" className="hover:text-orange-400 transition-colors">
                    AI Overviews
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/chatbots-ia" className="hover:text-orange-400 transition-colors">
                    Chatbots IA
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/optimizacion-llm" className="hover:text-orange-400 transition-colors">
                    Optimización LLM
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/schema-markup" className="hover:text-orange-400 transition-colors">
                    Schema Markup
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/sobre-nosotros" className="hover:text-orange-400 transition-colors">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-orange-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-orange-400 transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/privacidad" className="hover:text-orange-400 transition-colors">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos-de-servicio" className="hover:text-orange-400 transition-colors">
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 AIO Marketing. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
