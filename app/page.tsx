import { NavigationHeader } from "@/components/navigation-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bot, Search, TrendingUp, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            🚀 Revoluciona tu presencia digital con IA
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Posicionamiento Web con Inteligencia Artificial
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Domina Google con estrategias de SEO potenciadas por IA. Aumenta tu visibilidad, genera más leads y
            convierte visitantes en clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link href="/agendar-sesion">
                Agendar Consulta Gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/aprende-mas">Ver Casos de Éxito</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-muted-foreground">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">300%</div>
              <div className="text-muted-foreground">Aumento Promedio en Tráfico</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-muted-foreground">Tasa de Éxito</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-muted-foreground">Monitoreo Automático</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios de Posicionamiento IA</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluciones integrales para dominar los resultados de búsqueda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Search className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>AI Overviews</CardTitle>
                <CardDescription>Optimización para aparecer en las respuestas de IA de Google</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Análisis de contenido con IA
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Optimización para SGE
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Monitoreo continuo
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-transparent" variant="outline" asChild>
                  <Link href="/servicios/ai-overviews">Más Información</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Bot className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Chatbots IA</CardTitle>
                <CardDescription>Asistentes virtuales que convierten visitantes en clientes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Respuestas inteligentes 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Integración con CRM
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Análisis de conversaciones
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-transparent" variant="outline" asChild>
                  <Link href="/servicios/chatbots-ia">Más Información</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Optimización LLM</CardTitle>
                <CardDescription>Posicionamiento en modelos de lenguaje como ChatGPT</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Optimización para ChatGPT
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Estrategias de contenido IA
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Monitoreo de menciones
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-transparent" variant="outline" asChild>
                  <Link href="/servicios/optimizacion-llm">Más Información</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Increíble aumento en nuestro tráfico orgánico. Los resultados superaron nuestras expectativas."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold">María González</div>
                    <div className="text-sm text-muted-foreground">CEO, TechStart</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "El chatbot IA ha revolucionado nuestra atención al cliente. Conversiones aumentaron 200%."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold">Carlos Ruiz</div>
                    <div className="text-sm text-muted-foreground">Director, EcomPlus</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para dominar Google con IA?</h2>
          <p className="text-xl mb-8 opacity-90">
            Agenda una consulta gratuita y descubre cómo podemos transformar tu presencia digital
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/agendar-sesion">
              Agendar Consulta Gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
                <span className="font-bold text-xl">Posicionamiento IA</span>
              </div>
              <p className="text-slate-400">Revolucionando el SEO con inteligencia artificial</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/servicios/ai-overviews" className="hover:text-white">
                    AI Overviews
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/chatbots-ia" className="hover:text-white">
                    Chatbots IA
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
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-slate-400">
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
              <h3 className="font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/centro-de-ayuda" className="hover:text-white">
                    Centro de Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="/documentacion" className="hover:text-white">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="/privacidad" className="hover:text-white">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos-de-servicio" className="hover:text-white">
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Posicionamiento IA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
