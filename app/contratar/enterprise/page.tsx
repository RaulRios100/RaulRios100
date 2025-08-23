"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import NavigationHeader from "@/components/navigation-header"
import {
  CheckCircle,
  Crown,
  Zap,
  Brain,
  BarChart3,
  Shield,
  Clock,
  Headphones,
  Infinity,
  Star,
  Target,
  Award,
  Rocket,
  Globe,
} from "lucide-react"

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <NavigationHeader title="AIO Enterprise" />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Badge className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 text-sm font-medium">
              ENTERPRISE
            </Badge>
            <Badge className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 text-sm font-medium">
              CORPORATIVO
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-purple-400">AIO ENTERPRISE</span>
            <br />
            Solución Corporativa
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            La solución más completa para empresas que buscan dominar completamente el ecosistema de IA y
            posicionamiento digital.
          </p>

          <div className="bg-slate-900 p-8 rounded-2xl border border-purple-500 mb-8 max-w-md mx-auto">
            <div className="text-5xl font-bold text-purple-400 mb-2">$70,000 MXN</div>
            <div className="text-xl text-slate-300">o $3,888 USD</div>
            <div className="text-sm text-slate-400 mt-2">Mensual</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 text-lg font-semibold"
              onClick={() =>
                window.open(
                  "https://wa.me/525620202210?text=Hola,%20me%20interesa%20el%20plan%20AIO%20Enterprise%20para%20mi%20empresa",
                  "_blank",
                )
              }
            >
              <Crown className="mr-2 h-5 w-5" />
              Solicitar Consulta Enterprise
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Características <span className="text-purple-400">Exclusivas</span>
            </h2>
            <p className="text-xl text-slate-300">Todo lo que necesitas para dominar el mercado digital con IA</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-purple-500 hover:border-purple-400 transition-all duration-300">
              <CardHeader>
                <div className="bg-purple-100 dark:bg-purple-700 p-3 rounded-full w-fit">
                  <Infinity className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-white">Optimización Ilimitada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Sin límites en páginas, contenido o URLs. Optimizamos todo tu ecosistema digital.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-purple-500 hover:border-purple-400 transition-all duration-300">
              <CardHeader>
                <div className="bg-purple-100 dark:bg-purple-700 p-3 rounded-full w-fit">
                  <Brain className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-white">IA Personalizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Desarrollo de modelos de IA específicos para tu industria y necesidades empresariales.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-purple-500 hover:border-purple-400 transition-all duration-300">
              <CardHeader>
                <div className="bg-purple-100 dark:bg-purple-700 p-3 rounded-full w-fit">
                  <Headphones className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-white">Account Manager 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Gerente de cuenta dedicado disponible las 24 horas para soporte inmediato.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-purple-500 hover:border-purple-400 transition-all duration-300">
              <CardHeader>
                <div className="bg-purple-100 dark:bg-purple-700 p-3 rounded-full w-fit">
                  <Zap className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-white">50 Contenidos Mensuales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Producción masiva de contenido optimizado para IA y posicionamiento orgánico.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-purple-500 hover:border-purple-400 transition-all duration-300">
              <CardHeader>
                <div className="bg-purple-100 dark:bg-purple-700 p-3 rounded-full w-fit">
                  <BarChart3 className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-white">Analytics Avanzados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Dashboard personalizado con métricas en tiempo real y reportes ejecutivos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-purple-500 hover:border-purple-400 transition-all duration-300">
              <CardHeader>
                <div className="bg-purple-100 dark:bg-purple-700 p-3 rounded-full w-fit">
                  <Globe className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-white">Expansión Global</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Estrategias de posicionamiento para múltiples mercados y idiomas.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Por qué elegir <span className="text-purple-400">Enterprise</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 p-2 rounded-full flex-shrink-0">
                    <Crown className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Prioridad Máxima</h3>
                    <p className="text-slate-300">
                      Tu empresa tiene prioridad absoluta en todos nuestros servicios y desarrollos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 p-2 rounded-full flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Estrategia Personalizada</h3>
                    <p className="text-slate-300">
                      Desarrollo de estrategias únicas basadas en tu industria y objetivos específicos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 p-2 rounded-full flex-shrink-0">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Implementación Acelerada</h3>
                    <p className="text-slate-300">
                      Tiempos de implementación reducidos con equipos dedicados exclusivamente a tu proyecto.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900 to-slate-900 p-8 rounded-2xl border border-purple-500">
              <h3 className="text-2xl font-bold text-white mb-6">Incluye Todo de los Planes Anteriores:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-300">Auditoría inicial completa</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-300">Sitio completo optimizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-300">PR digital y enlaces EEAT</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-300">Chatbot LLM experto</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-300">Coaching mensual 1:1</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proceso de <span className="text-purple-400">Implementación</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Consulta Estratégica</h3>
              <p className="text-slate-300">Análisis profundo de tu empresa y objetivos</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Desarrollo Personalizado</h3>
              <p className="text-slate-300">Creación de soluciones específicas para tu industria</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Implementación Acelerada</h3>
              <p className="text-slate-300">Despliegue rápido con equipo dedicado</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Optimización Continua</h3>
              <p className="text-slate-300">Mejora constante y soporte 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para la <span className="text-purple-400">transformación digital completa</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            El plan Enterprise está diseñado para empresas que buscan liderar su industria con tecnología de IA
            avanzada.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 text-lg font-semibold"
              onClick={() =>
                window.open(
                  "https://wa.me/525620202210?text=Hola,%20quiero%20agendar%20una%20consulta%20para%20el%20plan%20AIO%20Enterprise",
                  "_blank",
                )
              }
            >
              <Crown className="mr-2 h-5 w-5" />
              Agendar Consulta Enterprise
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg"
              onClick={() =>
                window.open(
                  "https://wa.me/525620202210?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20plan%20Enterprise",
                  "_blank",
                )
              }
            >
              <Clock className="mr-2 h-5 w-5" />
              Más Información
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-purple-400" />
              <span>Garantía de resultados</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-purple-400" />
              <span>Soporte premium 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-purple-400" />
              <span>Implementación prioritaria</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
