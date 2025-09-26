import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import NavigationHeader from "@/components/navigation-header"
import {
  Brain,
  Target,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Rocket,
  Building,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-5" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              🚀 Revoluciona tu Marketing Digital
            </Badge>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Domina el Futuro del{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Marketing con IA
              </span>
            </h1>

            <p className="mb-8 text-xl text-gray-600 sm:text-2xl">
              Aumenta tus leads un <strong>300%</strong> y convierte más clientes con estrategias de marketing digital
              potenciadas por inteligencia artificial.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                asChild
              >
                <Link href="/agendar-sesion">
                  Agendar Consulta Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/casos-de-exito">Ver Casos de Éxito</Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Consulta gratuita de 30 min</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Resultados en 30 días</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Garantía de satisfacción</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 sm:text-4xl">300%</div>
              <div className="text-sm text-gray-600">Aumento en Leads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 sm:text-4xl">95%</div>
              <div className="text-sm text-gray-600">Satisfacción Cliente</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 sm:text-4xl">150+</div>
              <div className="text-sm text-gray-600">Empresas Exitosas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 sm:text-4xl">24/7</div>
              <div className="text-sm text-gray-600">Soporte IA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">¿Por qué elegir AI Positioning?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Combinamos la experiencia humana con el poder de la inteligencia artificial
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Brain className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>IA Avanzada</CardTitle>
                <CardDescription>
                  Algoritmos de última generación que analizan y optimizan tus campañas en tiempo real
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Target className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Targeting Preciso</CardTitle>
                <CardDescription>Identifica y alcanza a tu audiencia ideal con precisión milimétrica</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-indigo-50 to-indigo-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>ROI Maximizado</CardTitle>
                <CardDescription>Optimización continua para obtener el máximo retorno de tu inversión</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Equipo Experto</CardTitle>
                <CardDescription>
                  Especialistas certificados en marketing digital e inteligencia artificial
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-orange-50 to-orange-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Zap className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Resultados Rápidos</CardTitle>
                <CardDescription>Ve mejoras significativas en tus métricas desde la primera semana</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-red-50 to-red-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Garantía Total</CardTitle>
                <CardDescription>100% de garantía de satisfacción o te devolvemos tu dinero</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Plans Preview Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Planes Diseñados para tu Éxito</h2>
            <p className="mt-4 text-lg text-gray-600">
              Desde startups hasta empresas, tenemos la solución perfecta para ti
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-blue-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <Rocket className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Launchpad</CardTitle>
                <div className="text-3xl font-bold text-blue-600">$2,997</div>
                <CardDescription>Perfecto para startups y pequeñas empresas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Optimización AI Overviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Schema Markup básico</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Reportes mensuales</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" asChild>
                  <Link href="/contratar/launchpad">Comenzar Ahora</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600">Más Popular</Badge>
              <CardHeader className="text-center">
                <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Accelerator</CardTitle>
                <div className="text-3xl font-bold text-purple-600">$4,997</div>
                <CardDescription>Ideal para empresas en crecimiento</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Todo de Launchpad +</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Chatbot IA personalizado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Optimización LLM avanzada</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/contratar/accelerator">Comenzar Ahora</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <Building className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="text-3xl font-bold text-indigo-600">Personalizado</div>
                <CardDescription>Soluciones a medida para grandes empresas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Solución completamente personalizada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Soporte 24/7 dedicado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Integración completa</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-transparent" variant="outline" asChild>
                  <Link href="/contacto">Contactar Ventas</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/precios">
                Ver Todos los Planes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">¿Listo para Revolucionar tu Marketing?</h2>
            <p className="text-xl mb-8 opacity-90">
              Únete a más de 150 empresas que ya están dominando su mercado con IA
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/agendar-sesion">
                  Agendar Consulta Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="/casos-de-exito">Ver Casos de Éxito</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/logo.png" alt="AI Positioning" width={32} height={32} className="h-8 w-8" />
                <span className="font-bold text-xl">AI Positioning</span>
              </div>
              <p className="text-gray-400 mb-4">Revolucionando el marketing digital con inteligencia artificial</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>+52 (55) 1234-5678</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>hola@aipositioningagency.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>Ciudad de México, México</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/servicios/ai-overviews" className="hover:text-white">
                    AI Overviews
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/optimizacion-llm" className="hover:text-white">
                    Optimización LLM
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/schema-markup" className="hover:text-white">
                    Schema Markup
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/chatbots-ia" className="hover:text-white">
                    Chatbots IA
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/sobre-nosotros" className="hover:text-white">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/casos-de-exito" className="hover:text-white">
                    Casos de Éxito
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-white">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/privacidad" className="hover:text-white">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos-de-servicio" className="hover:text-white">
                    Términos de Servicio
                  </Link>
                </li>
                <li>
                  <Link href="/centro-de-ayuda" className="hover:text-white">
                    Centro de Ayuda
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 AI Positioning. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
