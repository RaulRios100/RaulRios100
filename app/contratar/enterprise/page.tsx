"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Crown,
  Brain,
  Users,
  Sparkles,
  Shield,
  BarChart3,
  Target,
  ArrowRight,
  Globe,
  TrendingUp,
} from "lucide-react"

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-slate-950 via-purple-900/20 to-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 px-6 py-2">
              <Crown className="mr-2 h-4 w-4" />
              ENTERPRISE
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-transparent">
            AIO ENTERPRISE
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            Solución completa de posicionamiento en IA para empresas que buscan dominar completamente su mercado digital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">$70,000 MXN</div>
              <div className="text-lg text-slate-400">o $3,888 USD mensuales</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 text-lg"
              onClick={() =>
                window.open(
                  "https://wa.me/525620202210?text=Hola%2C%20me%20interesa%20el%20plan%20Enterprise%20y%20quiero%20agendar%20una%20demo%20personalizada",
                  "_blank",
                )
              }
            >
              <Crown className="mr-2 h-5 w-5" />
              Solicitar Demo Enterprise
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 text-lg bg-transparent"
              onClick={() =>
                window.open(
                  "https://wa.me/525620202210?text=Hola%2C%20quiero%20una%20consulta%20personalizada%20sobre%20el%20plan%20Enterprise",
                  "_blank",
                )
              }
            >
              Consulta Personalizada
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Características <span className="text-purple-400">Exclusivas Enterprise</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tecnología de vanguardia y soporte dedicado para empresas que no aceptan compromisos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <CardHeader>
                <Crown className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Optimización Ilimitada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Sin límites en páginas, contenido o keywords. Optimización completa de todo tu ecosistema digital.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <CardHeader>
                <Brain className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">IA Personalizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Modelos de IA entrenados específicamente con los datos y el conocimiento de tu industria.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Account Manager 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Gerente de cuenta dedicado disponible las 24 horas para soporte inmediato y estrategia continua.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <CardHeader>
                <Sparkles className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">50 Contenidos Mensuales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Producción masiva de contenido optimizado para IA, incluyendo artículos, FAQs y contenido técnico.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Analytics Avanzados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Dashboard empresarial con métricas en tiempo real, predicciones de IA y reportes ejecutivos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">SLA Garantizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Acuerdo de nivel de servicio con garantías de uptime, tiempo de respuesta y resultados medibles.
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
              ¿Por qué elegir <span className="text-purple-400">Enterprise</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Ventajas Competitivas Únicas</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Target className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Dominación Total del Mercado</h4>
                    <p className="text-slate-300">
                      Posicionamiento en todas las plataformas de IA relevantes para tu industria, no solo Google.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Globe className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Alcance Global</h4>
                    <p className="text-slate-300">
                      Optimización multiidioma y multicultural para mercados internacionales.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">ROI Comprobado</h4>
                    <p className="text-slate-300">
                      Clientes Enterprise reportan un aumento promedio del 300% en visibilidad orgánica.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-slate-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Incluye Todo de los Planes Anteriores:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Auditoría inicial completa</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Optimización completa del sitio</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Schema markup avanzado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Chatbot LLM experto</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">PR digital y enlaces EEAT</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Coaching mensual 1:1</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Dashboard de rendimiento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proceso de Implementación <span className="text-purple-400">Enterprise</span>
            </h2>
            <p className="text-xl text-slate-300">
              Metodología probada para empresas Fortune 500 y líderes de industria
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Análisis Estratégico</h3>
              <p className="text-slate-300">
                Auditoría completa de 360° incluyendo competencia, mercado y oportunidades de IA.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Estrategia Personalizada</h3>
              <p className="text-slate-300">
                Desarrollo de roadmap específico para tu industria y objetivos de negocio.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Implementación Acelerada</h3>
              <p className="text-slate-300">Despliegue rápido con equipo dedicado y recursos prioritarios.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Optimización Continua</h3>
              <p className="text-slate-300">Monitoreo 24/7 y ajustes proactivos basados en datos en tiempo real.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-950 via-purple-900/20 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para <span className="text-purple-400">dominar tu industria</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Únete a las empresas líderes que ya están aprovechando el poder de la IA para multiplicar su presencia
            digital y dominar su mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 text-lg"
              onClick={() =>
                window.open(
                  "https://wa.me/525620202210?text=Hola%2C%20quiero%20agendar%20una%20demo%20del%20plan%20Enterprise%20para%20mi%20empresa",
                  "_blank",
                )
              }
            >
              <Crown className="mr-2 h-5 w-5" />
              Agendar Demo Enterprise <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 text-lg bg-transparent"
              onClick={() =>
                window.open(
                  "https://wa.me/525620202210?text=Hola%2C%20necesito%20más%20información%20sobre%20el%20plan%20Enterprise",
                  "_blank",
                )
              }
            >
              Más Información
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 mb-4">© 2024 Diseño y Optimización Online. Todos los derechos reservados.</p>
          <p className="text-sm text-slate-500">
            Plan Enterprise diseñado para empresas que buscan resultados excepcionales
          </p>
        </div>
      </footer>
    </div>
  )
}
