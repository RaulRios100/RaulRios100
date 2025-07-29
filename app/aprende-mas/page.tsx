"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Brain,
  Search,
  Target,
  BarChart3,
  CheckCircle,
  Zap,
  Users,
  Globe,
  Settings,
  TrendingUp,
  Eye,
  MessageSquare,
  FileText,
  Code,
  Shield,
  Clock,
  Award,
  Lightbulb,
  Rocket,
  Database,
  Monitor,
  Smartphone,
  Link,
  AlertTriangle,
  BookOpen,
  Play,
  Star,
  Moon,
  Sun,
} from "lucide-react"

import { useState, useEffect } from "react"

export default function AprendeMas() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light") {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    } else {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const DarkModeToggle = () => (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-6 right-6 z-50 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
    >
      {isDarkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-slate-600" />}
    </button>
  )

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <DarkModeToggle />
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Button
            variant="outline"
            className="mb-6 bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
            onClick={() => window.close()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
          <div className="text-center">
            <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-medium">
              🎓 Centro de Aprendizaje
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Domina el <span className="text-orange-400">SEO con IA</span> en 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Aprende las técnicas más avanzadas de posicionamiento en motores de IA, auditorías técnicas y estrategias
              disruptivas que están transformando el marketing digital.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="webinar" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-12">
              <TabsTrigger value="webinar" className="text-lg py-4">
                <Play className="mr-2 h-5 w-5" />
                Webinar AI First SEO 2025
              </TabsTrigger>
              <TabsTrigger value="auditoria" className="text-lg py-4">
                <Settings className="mr-2 h-5 w-5" />
                Auditoría SEO Técnico
              </TabsTrigger>
            </TabsList>

            {/* Webinar Content */}
            <TabsContent value="webinar">
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    AI First: SEO, SMM & SEM <span className="text-green-500">Disruptivo 2025</span>
                  </h2>
                  <p className="text-xl text-slate-700 dark:text-slate-300">
                    Descubre las estrategias más avanzadas para dominar los motores de IA
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {/* Módulo 1 */}
                  <AccordionItem
                    value="modulo-1"
                    className="bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-200 dark:border-slate-700"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 dark:text-white hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 dark:bg-blue-700 p-2 rounded-full">
                          <Brain className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                        </div>
                        <div>
                          <h3 className="text-lg">Módulo 1: Introducción a AI First Search</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
                            Fundamentos de los nuevos motores de búsqueda
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border border-slate-200 dark:border-slate-700">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                              <Search className="h-5 w-5 text-blue-500" />
                              Answer Engines (AEO)
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <span>Evolución de Google AI Overviews</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <span>Optimización para respuestas directas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <span>Estrategias de posicionamiento AEO</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="border border-slate-200 dark:border-slate-700">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                              <Zap className="h-5 w-5 text-purple-500" />
                              Generative Engines (GEO)
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <span>ChatGPT, Perplexity, Gemini</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <span>Contenido que las IA citan</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <span>Autoridad en motores generativos</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                          ¿Por qué es crítico el AI SEO?
                        </h4>
                        <p className="text-blue-800 dark:text-blue-200 text-sm">
                          La integración de SEO tradicional con AEO y GEO es fundamental porque más del 40% de las
                          búsquedas ya no generan clics hacia sitios web. Las IA responden directamente, por lo que
                          aparecer en estas respuestas es crucial para mantener visibilidad.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Módulo 2 */}
                  <AccordionItem
                    value="modulo-2"
                    className="bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-200 dark:border-slate-700"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 dark:text-white hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 dark:bg-green-700 p-2 rounded-full">
                          <Target className="h-5 w-5 text-green-600 dark:text-green-300" />
                        </div>
                        <div>
                          <h3 className="text-lg">Módulo 2: Técnicas Avanzadas de SEO</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
                            SEO técnico, on-page, off-page y UX
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <Card className="border border-slate-200 dark:border-slate-700">
                          <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-base">
                              <Code className="h-4 w-4 text-orange-500" />
                              SEO Técnico
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                              <li>• Core Web Vitals</li>
                              <li>• Estructura del sitio</li>
                              <li>• Schema markup</li>
                              <li>• Indexabilidad</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="border border-slate-200 dark:border-slate-700">
                          <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-base">
                              <FileText className="h-4 w-4 text-blue-500" />
                              AEO Optimization
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                              <li>• Contenido Q&A</li>
                              <li>• Schema FAQ</li>
                              <li>• Respuestas directas</li>
                              <li>• Featured snippets</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="border border-slate-200 dark:border-slate-700">
                          <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-base">
                              <Rocket className="h-4 w-4 text-purple-500" />
                              GEO Strategy
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                              <li>• Contenido citeable</li>
                              <li>• Autoridad EEAT</li>
                              <li>• Referencias primarias</li>
                              <li>• Contexto semántico</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                        <h4 className="font-semibold text-green-900 dark:text-green-300 mb-3 flex items-center gap-2">
                          <Lightbulb className="h-5 w-5" />
                          Estrategia Integrada
                        </h4>
                        <p className="text-green-800 dark:text-green-200 text-sm mb-3">
                          La clave está en combinar SEO técnico sólido con contenido optimizado para IA. Esto incluye:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-green-900 dark:text-green-300 mb-2">Para AEO:</h5>
                            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                              <li>• Formato pregunta-respuesta</li>
                              <li>• Schema estructurado</li>
                              <li>• Respuestas concisas</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-green-900 dark:text-green-300 mb-2">Para GEO:</h5>
                            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                              <li>• Contenido original y profundo</li>
                              <li>• Enlaces a fuentes primarias</li>
                              <li>• Autoridad reconocida</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Módulo 3 */}
                  <AccordionItem
                    value="modulo-3"
                    className="bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-200 dark:border-slate-700"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 dark:text-white hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-100 dark:bg-purple-700 p-2 rounded-full">
                          <Settings className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                        </div>
                        <div>
                          <h3 className="text-lg">Módulo 3: Automatización y AI SEO Tools</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
                            Herramientas y plataformas clave
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Database className="h-5 w-5 text-purple-500" />
                            Plataformas Clave
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                              <Star className="h-4 w-4 text-yellow-500" />
                              <div>
                                <span className="font-medium text-slate-900 dark:text-white">SEMrush</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">
                                  Análisis completo y research
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                              <Star className="h-4 w-4 text-yellow-500" />
                              <div>
                                <span className="font-medium text-slate-900 dark:text-white">Surfer SEO</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">Optimización de contenido</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                              <Star className="h-4 w-4 text-yellow-500" />
                              <div>
                                <span className="font-medium text-slate-900 dark:text-white">Alli AI</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">Automatización SEO</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                              <Star className="h-4 w-4 text-yellow-500" />
                              <div>
                                <span className="font-medium text-slate-900 dark:text-white">AI EngineBoost</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">Optimización para IA</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Zap className="h-5 w-5 text-orange-500" />
                            Ejemplo Práctico
                          </h4>
                          <div className="space-y-4">
                            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                              <h5 className="font-medium text-orange-900 dark:text-orange-300 mb-2">
                                Optimización Automática
                              </h5>
                              <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                                <li>• Análisis de brechas de contenido</li>
                                <li>• Corrección automática de errores</li>
                                <li>• Sugerencias de mejora en tiempo real</li>
                                <li>• Monitoreo de competencia</li>
                              </ul>
                            </div>
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                              <h5 className="font-medium text-blue-900 dark:text-blue-300 mb-2">Flujo de Trabajo</h5>
                              <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                                <li>1. Auditoría automática del sitio</li>
                                <li>2. Identificación de oportunidades</li>
                                <li>3. Implementación de mejoras</li>
                                <li>4. Monitoreo y ajustes</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Módulo 4 */}
                  <AccordionItem
                    value="modulo-4"
                    className="bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-200 dark:border-slate-700"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 dark:text-white hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="bg-red-100 dark:bg-red-700 p-2 rounded-full">
                          <TrendingUp className="h-5 w-5 text-red-600 dark:text-red-300" />
                        </div>
                        <div>
                          <h3 className="text-lg">Módulo 4: SEM con Inteligencia Artificial</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
                            Optimización de campañas PPC
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border border-slate-200 dark:border-slate-700">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                              <Brain className="h-5 w-5 text-red-500" />
                              Inteligencia Predictiva
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-medium">Segmentación automática</span>
                                  <p className="text-xs text-slate-600 dark:text-slate-400">
                                    IA identifica audiencias de alto valor
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-medium">Optimización de pujas</span>
                                  <p className="text-xs text-slate-600 dark:text-slate-400">
                                    Ajustes en tiempo real basados en datos
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-medium">Predicción de conversiones</span>
                                  <p className="text-xs text-slate-600 dark:text-slate-400">
                                    Algoritmos que anticipan resultados
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="border border-slate-200 dark:border-slate-700">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                              <Link className="h-5 w-5 text-blue-500" />
                              SEO + SEM Integrado
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-medium">Visibilidad máxima</span>
                                  <p className="text-xs text-slate-600 dark:text-slate-400">
                                    Dominar tanto orgánico como pagado
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-medium">Datos compartidos</span>
                                  <p className="text-xs text-slate-600 dark:text-slate-400">
                                    Keywords de SEM nutren estrategia SEO
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-medium">ROI optimizado</span>
                                  <p className="text-xs text-slate-600 dark:text-slate-400">
                                    Mejor retorno de inversión conjunto
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Módulo 5 */}
                  <AccordionItem
                    value="modulo-5"
                    className="bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-200 dark:border-slate-700"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 dark:text-white hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="bg-pink-100 dark:bg-pink-700 p-2 rounded-full">
                          <Users className="h-5 w-5 text-pink-600 dark:text-pink-300" />
                        </div>
                        <div>
                          <h3 className="text-lg">Módulo 5: SMM Potenciado por IA</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
                            Social Media Optimization
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        <Card className="border border-slate-200 dark:border-slate-700">
                          <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-base">
                              <Eye className="h-4 w-4 text-pink-500" />
                              Viralidad
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                              <li>• Análisis de tendencias</li>
                              <li>• Timing óptimo</li>
                              <li>• Contenido viral</li>
                              <li>• Hashtags inteligentes</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="border border-slate-200 dark:border-slate-700">
                          <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-base">
                              <MessageSquare className="h-4 w-4 text-blue-500" />
                              Engagement
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                              <li>• Respuestas automáticas</li>
                              <li>• Social listening</li>
                              <li>• Interacciones personalizadas</li>
                              <li>• Community management</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="border border-slate-200 dark:border-slate-700">
                          <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-base">
                              <Target className="h-4 w-4 text-green-500" />
                              Targeting
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                              <li>• Audiencias lookalike</li>
                              <li>• Segmentación predictiva</li>
                              <li>• Retargeting inteligente</li>
                              <li>• Optimización automática</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg border border-pink-200 dark:border-pink-800">
                        <h4 className="font-semibold text-pink-900 dark:text-pink-300 mb-2 flex items-center gap-2">
                          <Rocket className="h-5 w-5" />
                          Automatización Completa
                        </h4>
                        <p className="text-pink-800 dark:text-pink-200 text-sm">
                          La IA permite automatizar publicaciones, analizar sentimientos, optimizar contenido para cada
                          plataforma y realizar targeting inteligente basado en comportamientos y preferencias de la
                          audiencia.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Módulo 6 */}
                  <AccordionItem
                    value="modulo-6"
                    className="bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-200 dark:border-slate-700"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 dark:text-white hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="bg-yellow-100 dark:bg-yellow-700 p-2 rounded-full">
                          <BarChart3 className="h-5 w-5 text-yellow-600 dark:text-yellow-300" />
                        </div>
                        <div>
                          <h3 className="text-lg">Módulo 6: Métricas y Reporting AI Driven</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
                            Nuevos KPIs y herramientas
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Award className="h-5 w-5 text-yellow-500" />
                            Nuevos KPIs
                          </h4>
                          <div className="space-y-3">
                            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                              <h5 className="font-medium text-yellow-900 dark:text-yellow-300">Visibility Score</h5>
                              <p className="text-xs text-yellow-800 dark:text-yellow-200">
                                Porcentaje de aparición en AI Overviews
                              </p>
                            </div>
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                              <h5 className="font-medium text-blue-900 dark:text-blue-300">Answer Snippet Share</h5>
                              <p className="text-xs text-blue-800 dark:text-blue-200">
                                Participación en respuestas directas
                              </p>
                            </div>
                            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                              <h5 className="font-medium text-green-900 dark:text-green-300">Citations en IA</h5>
                              <p className="text-xs text-green-800 dark:text-green-200">
                                Menciones en motores generativos
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Monitor className="h-5 w-5 text-blue-500" />
                            Herramientas de Reporting
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">S</span>
                              </div>
                              <div>
                                <span className="font-medium text-slate-900 dark:text-white">SEMrush</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">
                                  Tracking completo de visibilidad
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">G</span>
                              </div>
                              <div>
                                <span className="font-medium text-slate-900 dark:text-white">Google Analytics</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">
                                  Análisis de tráfico y conversiones
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">SC</span>
                              </div>
                              <div>
                                <span className="font-medium text-slate-900 dark:text-white">Search Console</span>
                                <p className="text-xs text-slate-600 dark:text-slate-400">Datos directos de Google</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Módulo 7 */}
                  <AccordionItem
                    value="modulo-7"
                    className="bg-white dark:bg-slate-800 rounded-lg border-2 border-orange-200 dark:border-orange-700"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 dark:text-white hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="bg-orange-100 dark:bg-orange-700 p-2 rounded-full">
                          <Play className="h-5 w-5 text-orange-600 dark:text-orange-300" />
                        </div>
                        <div>
                          <h3 className="text-lg">Módulo 7: Caso Práctico en Vivo</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
                            Implementación real y Q&A
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                        <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-4 flex items-center gap-2">
                          <Rocket className="h-5 w-5" />
                          Diagnóstico en Tiempo Real
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-orange-900 dark:text-orange-300 mb-3">
                              Proceso de Auditoría
                            </h5>
                            <ol className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
                              <li className="flex items-start gap-2">
                                <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                  1
                                </span>
                                <span>Análisis técnico del sitio web</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                  2
                                </span>
                                <span>Evaluación de contenido para IA</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                  3
                                </span>
                                <span>Implementación de mejoras</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                  4
                                </span>
                                <span>Estrategia SMM + SEM integrada</span>
                              </li>
                            </ol>
                          </div>
                          <div>
                            <h5 className="font-medium text-orange-900 dark:text-orange-300 mb-3">
                              Roadmap para Escalar
                            </h5>
                            <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <span>Automatización de procesos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <span>Implementación para múltiples clientes</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <span>Reporting y seguimiento</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <span>Optimización continua</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            {/* Auditoría Content */}
            <TabsContent value="auditoria">
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    Auditoría <span className="text-orange-500">SEO Técnico</span> Completa
                  </h2>
                  <p className="text-xl text-slate-700 dark:text-slate-300">
                    Guía paso a paso para una auditoría técnica profesional
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {/* Auditoría Técnica */}
                  <AccordionItem
                    value="auditoria-tecnica"
                    className="bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-200 dark:border-slate-700"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 dark:text-white hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 dark:bg-blue-700 p-2 rounded-full">
                          <Settings className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                        </div>
                        <div>
                          <h3 className="text-lg">1. Auditoría Técnica (SEO Técnico)</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
                            Asegurar rastreabilidad y funcionalidad
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <Database className="h-5 w-5 text-blue-500" />
                          Herramientas Sugeridas
                        </h4>
                        <div className="grid md:grid-cols-5 gap-3">
                          <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <span className="text-sm font-medium text-blue-900 dark:text-blue-300">Screaming Frog</span>
                          </div>
                          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                            <span className="text-sm font-medium text-green-900 dark:text-green-300">
                              Search Console
                            </span>
                          </div>
                          <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                            <span className="text-sm font-medium text-orange-900 dark:text-orange-300">Ahrefs</span>
                          </div>
                          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                            <span className="text-sm font-medium text-red-900 dark:text-red-300">SEMrush</span>
                          </div>
                          <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                            <span className="text-sm font-medium text-purple-900 dark:text-purple-300">PageSpeed</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border border-slate-200 dark:border-slate-700">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                              <Clock className="h-5 w-5 text-green-500" />
                              Core Web Vitals
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center p-2 bg-green-50 dark:bg-green-900/20 rounded">
                                <span className="text-sm font-medium">LCP (Largest Contentful Paint)</span>
                                <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">{"< 2.5s"}</span>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                                <span className="text-sm font-medium">CLS (Cumulative Layout Shift)</span>
                                <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">{"< 0.1"}</span>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                                <span className="text-sm font-medium">TBT (Total Blocking Time)</span>
                                <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded">{"< 200ms"}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border border-slate-200 dark:border-slate-700">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                              <Smartphone className="h-5 w-5 text-blue-500" />
                              Mobile-First Design
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-sm">Diseño responsive</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-sm">Pruebas en móvil</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-sm">Viewport configurado</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-sm">Touch-friendly</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Checklist Completo</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-slate-900 dark:text-white mb-2">Estructura y Navegación</h5>
                            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                              <li>• Estructura de encabezados (H1-H6)</li>
                              <li>• Un solo H1 por página</li>
                              <li>• Jerarquía lógica</li>
                              <li>• URLs limpias y amigables</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-slate-900 dark:text-white mb-2">Indexabilidad</h5>
                            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                              <li>• Robots.txt configurado</li>
                              <li>• Sitemap.xml actualizado</li>
                              <li>• Etiquetas noindex revisadas</li>
                              <li>• Canónicas bien definidas</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Keywords AI Friendly */}
                  <AccordionItem
                    value="keywords-ai"
                    className="bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-200 dark:border-slate-700"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 dark:text-white hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 dark:bg-green-700 p-2 rounded-full">
                          <Search className="h-5 w-5 text-green-600 dark:text-green-300" />
                        </div>
                        <div>
                          <h3 className="text-lg">2. Detección de Palabras Clave "AI Friendly"</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
                            Keywords optimizadas para IA
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                        <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                          ¿Qué son las Keywords AI Friendly?
                        </h4>
                        <p className="text-green-800 dark:text-green-200 text-sm mb-3">
                          Son términos semánticos, de intención clara, long tail y formuladas como preguntas o tareas
                          que tienen más probabilidad de aparecer en resultados generativos.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-green-900 dark:text-green-300 mb-2">Características:</h5>
                            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                              <li>• Incluyen contexto y ubicación</li>
                              <li>• Intención clara y específica</li>
                              <li>• Uso frecuente en IA generativas</li>
                              <li>• Formato conversacional</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-green-900 dark:text-green-300 mb-2">Ejemplos:</h5>
                            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                              <li>• "mejor CRM para doctores en México"</li>
                              <li>• "cómo optimizar sitio web para IA"</li>
                              <li>• "qué es posicionamiento AIO"</li>
                              <li>• "cuánto cuesta SEO técnico"</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border border-slate-200 dark:border-slate-700">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                              <Database className="h-5 w-5 text-blue-500" />
                              Herramientas de Research
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex items-center gap-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">A</span>
                                </div>
                                <span className="text-sm font-medium">AnswerThePublic</span>
                              </div>
                              <div className="flex items-center gap-3 p-2 bg-green-50 dark:bg-green-900/20 rounded">
                                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">A</span>
                                </div>
                                <span className="text-sm font-medium">AlsoAsked</span>
                              </div>
                              <div className="flex items-center gap-3 p-2 bg-red-50 dark:bg-red-900/20 rounded">
                                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">S</span>
                                </div>
                                <span className="text-sm font-medium">SEMrush Topic Research</span>
                              </div>
                              <div className="flex items-center gap-3 p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
                                <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">C</span>
                                </div>
                                <span className="text-sm font-medium">ChatGPT</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border border-slate-200 dark:border-slate-700">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                              <Target className="h-5 w-5 text-orange-500" />
                              Proceso Paso a Paso
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ol className="space-y-3 text-slate-700 dark:text-slate-300">
                              <li className="flex items-start gap-2">
                                <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                  1
                                </span>
                                <div>
                                  <span className="text-sm font-medium">Lista keywords principales</span>
                                  <p className="text-xs text-slate-600 dark:text-slate-400">
                                    Comerciales, transaccionales y de marca
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                  2
                                </span>
                                <div>
                                  <span className="text-sm font-medium">Extrae variantes</span>
                                  <p className="text-xs text-slate-600 dark:text-slate-400">Preguntas y comparativas</p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                  3
                                </span>
                                <div>
                                  <span className="text-sm font-medium">Usa ChatGPT</span>
                                  <p className="text-xs text-slate-600 dark:text-slate-400">
                                    Genera prompts específicos
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                  4
                                </span>
                                <div>
                                  <span className="text-sm font-medium">Analiza AI Overviews</span>
                                  <p className="text-xs text-slate-600 dark:text-slate-400">Verifica aparición en IA</p>
                                </div>
                              </li>
                            </ol>
                          </CardContent>
                        </Card>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Secciones Q&A */}
                  <AccordionItem
                    value="qa-sections"
                    className="bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-200 dark:border-slate-700"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 dark:text-white hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-100 dark:bg-purple-700 p-2 rounded-full">
                          <MessageSquare className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                        </div>
                        <div>
                          <h3 className="text-lg">3. Creación y Evaluación de Secciones Q&A</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
                            Posicionarse como fuente directa para IA
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border border-slate-200 dark:border-slate-700">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                              <Globe className="h-5 w-5 text-purple-500" />
                              Dónde Implementarlas
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-medium">FAQ estructurado</span>
                                  <p className="text-xs text-slate-600 dark:text-slate-400">
                                    Al final de páginas clave
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-medium">Dentro de artículos</span>
                                  <p className="text-xs text-slate-600 dark:text-slate-400">Blog posts y guías</p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-medium">Sección independiente</span>
                                  <p className="text-xs text-slate-600 dark:text-slate-400">
                                    dominio.com/preguntas-frecuentes
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="border border-slate-200 dark:border-slate-700">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                              <Lightbulb className="h-5 w-5 text-yellow-500" />
                              Tipos de Preguntas
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm">
                                <span className="font-medium text-yellow-900 dark:text-yellow-300">"¿Qué es...?"</span>
                              </div>
                              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-sm">
                                <span className="font-medium text-blue-900 dark:text-blue-300">
                                  "¿Cómo funciona...?"
                                </span>
                              </div>
                              <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded text-sm">
                                <span className="font-medium text-green-900 dark:text-green-300">
                                  "¿Cuál es el mejor...?"
                                </span>
                              </div>
                              <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded text-sm">
                                <span className="font-medium text-red-900 dark:text-red-300">"¿Cuánto cuesta...?"</span>
                              </div>
                              <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded text-sm">
                                <span className="font-medium text-purple-900 dark:text-purple-300">
                                  "¿Cuánto tarda...?"
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                        <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-3 flex items-center gap-2">
                          <Code className="h-5 w-5" />
                          Implementación Técnica
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-purple-900 dark:text-purple-300 mb-2">
                              Mejores Prácticas:
                            </h5>
                            <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                              <li>• Respuestas claras y directas</li>
                              <li>• 3 a 5 líneas máximo</li>
                              <li>• Sin relleno innecesario</li>
                              <li>• Datos estructurados FAQ</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-purple-900 dark:text-purple-300 mb-2">Verificación:</h5>
                            <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                              <li>• Extensión AI Overviews Detector</li>
                              <li>• Monitoreo en Search Console</li>
                              <li>• Testing en ChatGPT</li>
                              <li>• Análisis de competencia</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Errores Clave */}
                  <AccordionItem
                    value="errores-clave"
                    className="bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-200 dark:border-slate-700"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 dark:text-white hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="bg-red-100 dark:bg-red-700 p-2 rounded-full">
                          <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-300" />
                        </div>
                        <div>
                          <h3 className="text-lg">4. Errores Clave a Corregir</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
                            Problemas que afectan visibilidad y autoridad
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <Card className="border border-red-200 dark:border-red-700">
                            <CardHeader className="pb-3">
                              <CardTitle className="flex items-center gap-2 text-base text-red-700 dark:text-red-300">
                                <Code className="h-4 w-4" />
                                Errores Técnicos
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" />
                                  <span>Sitemap desactualizado o inexistente</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" />
                                  <span>Robots.txt bloqueando contenido útil</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" />
                                  <span>Contenido duplicado</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" />
                                  <span>Falta de schema para entidad principal</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" />
                                  <span>Redirecciones innecesarias (302 vs 301)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" />
                                  <span>Tiempos de carga altos en móvil</span>
                                </li>
                              </ul>
                            </CardContent>
                          </Card>

                          <Card className="border border-orange-200 dark:border-orange-700">
                            <CardHeader className="pb-3">
                              <CardTitle className="flex items-center gap-2 text-base text-orange-700 dark:text-orange-300">
                                <FileText className="h-4 w-4" />
                                SEO On Page
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-3 w-3 text-orange-500 mt-1 flex-shrink-0" />
                                  <span>Títulos duplicados o ausentes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-3 w-3 text-orange-500 mt-1 flex-shrink-0" />
                                  <span>Meta descripciones genéricas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-3 w-3 text-orange-500 mt-1 flex-shrink-0" />
                                  <span>Falta de keywords semánticas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-3 w-3 text-orange-500 mt-1 flex-shrink-0" />
                                  <span>Headings desorganizados</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-3 w-3 text-orange-500 mt-1 flex-shrink-0" />
                                  <span>Imágenes sin atributos ALT</span>
                                </li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>

                        <div className="space-y-4">
                          <Card className="border border-blue-200 dark:border-blue-700">
                            <CardHeader className="pb-3">
                              <CardTitle className="flex items-center gap-2 text-base text-blue-700 dark:text-blue-300">
                                <BookOpen className="h-4 w-4" />
                                Contenido
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-3 w-3 text-blue-500 mt-1 flex-shrink-0" />
                                  <span>Páginas sin intención clara</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-3 w-3 text-blue-500 mt-1 flex-shrink-0" />
                                  <span>Thin content ({"<300 palabras"})</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-3 w-3 text-blue-500 mt-1 flex-shrink-0" />
                                  <span>No responde preguntas de usuarios</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-3 w-3 text-blue-500 mt-1 flex-shrink-0" />
                                  <span>Falta estructura lógica</span>
                                </li>
                              </ul>
                            </CardContent>
                          </Card>

                          <Card className="border border-green-200 dark:border-green-700">
                            <CardHeader className="pb-3">
                              <CardTitle className="flex items-center gap-2 text-base text-green-700 dark:text-green-300">
                                <Shield className="h-4 w-4" />
                                Autoridad
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                                  <span>Sin backlinks relevantes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                                  <span>No tiene enlaces internos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                                  <span>No está en fuentes externas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                                  <span>Falta presencia en GMB, redes</span>
                                </li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Auditoría AEO y GEO */}
                  <AccordionItem
                    value="auditoria-aeo-geo"
                    className="bg-white dark:bg-slate-800 rounded-lg border-2 border-orange-200 dark:border-orange-700"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 dark:text-white hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="bg-orange-100 dark:bg-orange-700 p-2 rounded-full">
                          <Brain className="h-5 w-5 text-orange-600 dark:text-orange-300" />
                        </div>
                        <div>
                          <h3 className="text-lg">5. Auditoría de AEO y GEO</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
                            Evaluación específica para motores de IA
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/10">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg text-blue-700 dark:text-blue-300">
                              <Search className="h-5 w-5" />
                              Para AEO (Google AI Overviews)
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-700">
                                <h5 className="font-medium text-blue-900 dark:text-blue-300 mb-2">Preguntas Clave:</h5>
                                <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                                  <li>• ¿Responde esta página una pregunta concreta?</li>
                                  <li>• ¿Tiene autoridad (médico, abogado, ingeniero)?</li>
                                  <li>• ¿Incluye schema adecuado?</li>
                                  <li>• ¿Está optimizada para featured snippets?</li>
                                </ul>
                              </div>
                              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                                <h5 className="font-medium text-blue-900 dark:text-blue-300 mb-2">Verificación:</h5>
                                <p className="text-sm text-blue-800 dark:text-blue-200">
                                  Busca tus keywords en Google y verifica si aparecen AI Overviews. Usa herramientas
                                  como AI Overviews Detector.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/10">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg text-purple-700 dark:text-purple-300">
                              <Zap className="h-5 w-5" />
                              Para GEO (ChatGPT, Perplexity, etc)
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-purple-200 dark:border-purple-700">
                                <h5 className="font-medium text-purple-900 dark:text-purple-300 mb-2">
                                  Preguntas Clave:
                                </h5>
                                <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                                  <li>• ¿El sitio aparece citado cuando se pregunta en ChatGPT?</li>
                                  <li>• ¿Tiene contenido original, profundo y con enlaces?</li>
                                  <li>• ¿Está registrada en fuentes como Crunchbase, GitHub?</li>
                                  <li>• ¿Aparece en directorios sectoriales?</li>
                                </ul>
                              </div>
                              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                                <h5 className="font-medium text-purple-900 dark:text-purple-300 mb-2">Testing:</h5>
                                <p className="text-sm text-purple-800 dark:text-purple-200">
                                  Pregunta directamente en ChatGPT sobre tu empresa o servicios para verificar si
                                  apareces como referencia.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="mt-6 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                        <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-4 flex items-center gap-2">
                          <Rocket className="h-5 w-5" />
                          Plan de Acción Integrado
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-medium text-orange-900 dark:text-orange-300 mb-2">
                              Inmediato (1-2 semanas)
                            </h5>
                            <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                              <li>• Corregir errores técnicos críticos</li>
                              <li>• Implementar schema básico</li>
                              <li>• Optimizar Core Web Vitals</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-orange-900 dark:text-orange-300 mb-2">
                              Medio Plazo (1-2 meses)
                            </h5>
                            <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                              <li>• Crear contenido Q&A</li>
                              <li>• Optimizar para keywords AI-friendly</li>
                              <li>• Construir autoridad EEAT</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-orange-900 dark:text-orange-300 mb-2">
                              Largo Plazo (3+ meses)
                            </h5>
                            <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                              <li>• Monitoreo y optimización continua</li>
                              <li>• Expansión de contenido citeable</li>
                              <li>• Dominio completo en IA</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para implementar estas <span className="text-orange-400">estrategias avanzadas</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Nuestro equipo de expertos puede ayudarte a implementar todas estas técnicas y más. Agenda tu auditoría
            gratuita y descubre el potencial de tu sitio web.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold"
              onClick={() => (window.location.href = "/calendario")}
            >
              <Clock className="mr-2 h-5 w-5" />
              Agenda tu auditoría gratuita
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg"
              onClick={() => (window.location.href = "/casos-de-exito")}
            >
              <Award className="mr-2 h-5 w-5" />
              Ver casos de éxito
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-400 dark:text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Implementación garantizada</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Resultados medibles</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Soporte continuo</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
