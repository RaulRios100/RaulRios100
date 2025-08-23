import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  ArrowRight,
  Crown,
  Brain,
  Users,
  Sparkles,
  Target,
  Globe,
  Shield,
  Clock,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-purple-950/20 via-slate-950 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-2 mb-6">
            <Badge className="bg-purple-500 text-white px-4 py-2">ENTERPRISE</Badge>
            <Badge className="bg-purple-600 text-white px-4 py-2">CORPORATIVO</Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-purple-400">AIO ENTERPRISE</span>
          </h1>
          <div className="text-5xl md:text-7xl font-bold text-purple-400 mb-4">$70,000 MXN</div>
          <div className="text-xl text-slate-400 mb-8">o $3,888 USD mensuales</div>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            La solución más avanzada de SEO con IA para empresas que buscan dominar completamente su mercado digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 text-lg" asChild>
              <a
                href="https://wa.me/5256202022210?text=Hola%2C%20quiero%20información%20sobre%20el%20plan%20AIO%20Enterprise%20para%20mi%20empresa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consulta Enterprise <Crown className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 text-lg bg-transparent"
              asChild
            >
              <Link href="/contacto">Agendar Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Características <span className="text-purple-400">Enterprise</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Todo lo que necesita una empresa para dominar completamente su presencia digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-purple-500/30 hover:border-purple-500 transition-all duration-300">
              <CardHeader>
                <Crown className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Optimización Ilimitada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Sin límites en páginas, URLs o contenido. Optimizamos todo su ecosistema digital.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-purple-500/30 hover:border-purple-500 transition-all duration-300">
              <CardHeader>
                <Brain className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">IA Personalizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Modelo de IA entrenado específicamente para su industria y objetivos de negocio.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-purple-500/30 hover:border-purple-500 transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Account Manager 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Equipo dedicado disponible las 24 horas para soporte y optimización continua.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-purple-500/30 hover:border-purple-500 transition-all duration-300">
              <CardHeader>
                <Sparkles className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">50 Contenidos Mensuales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Producción masiva de contenido optimizado con IA para dominar todas las keywords.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-purple-500/30 hover:border-purple-500 transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Protección de Marca</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Monitoreo y protección activa de su reputación digital en todos los canales.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-purple-500/30 hover:border-purple-500 transition-all duration-300">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Analytics Avanzado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Dashboard ejecutivo con métricas en tiempo real y predicciones de crecimiento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Beneficios únicos del <span className="text-purple-400">Plan Enterprise</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Dominación Total del Mercado</h3>
                  <p className="text-slate-300">
                    Estrategia integral para posicionar su marca en todas las búsquedas relevantes de su industria.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Competencia Eliminada</h3>
                  <p className="text-slate-300">
                    Análisis competitivo profundo y estrategias para superar a todos los competidores.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Resultados Acelerados</h3>
                  <p className="text-slate-300">
                    Implementación prioritaria con recursos dedicados para resultados en tiempo récord.
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-purple-900/20 to-slate-900 border-purple-500/30 p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white mb-4">Lo que incluye Enterprise:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Todo de los planes anteriores</span>
                </div>
                <div className="flex items-center gap-3">
                  <Crown className="h-5 w-5 text-purple-400" />
                  <span className="text-slate-300">Optimización ilimitada de páginas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="h-5 w-5 text-purple-400" />
                  <span className="text-slate-300">IA personalizada para su negocio</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-purple-400" />
                  <span className="text-slate-300">Account Manager dedicado 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-purple-400" />
                  <span className="text-slate-300">50 contenidos mensuales optimizados</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-purple-400" />
                  <span className="text-slate-300">Protección y monitoreo de marca</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-purple-400" />
                  <span className="text-slate-300">Analytics y reportes ejecutivos</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proceso de <span className="text-purple-400">Implementación Enterprise</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Metodología probada para transformar completamente su presencia digital
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardHeader>
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <CardTitle className="text-white">Auditoría Profunda</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Análisis completo de su ecosistema digital y competencia</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardHeader>
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <CardTitle className="text-white">Estrategia Personalizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Desarrollo de estrategia única basada en sus objetivos</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardHeader>
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <CardTitle className="text-white">Implementación IA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Despliegue de tecnologías de IA personalizadas</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardHeader>
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <CardTitle className="text-white">Optimización Continua</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Monitoreo y mejora constante con su equipo dedicado</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-950/20 via-slate-950 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para la <span className="text-purple-400">transformación digital</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Únase a las empresas líderes que ya están dominando su mercado con nuestra solución Enterprise de SEO con
            IA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 text-lg" asChild>
              <a
                href="https://wa.me/5256202022210?text=Hola%2C%20quiero%20agendar%20una%20demo%20del%20plan%20AIO%20Enterprise%20para%20mi%20empresa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Demo Enterprise <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 text-lg bg-transparent"
              asChild
            >
              <a
                href="https://wa.me/5256202022210?text=Hola%2C%20necesito%20más%20información%20sobre%20el%20plan%20Enterprise%20y%20sus%20beneficios"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consulta Personalizada
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
