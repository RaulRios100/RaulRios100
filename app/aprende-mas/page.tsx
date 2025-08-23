"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Target,
  TrendingUp,
  Users,
  Zap,
  Search,
  BarChart3,
  Globe,
  Lightbulb,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  Play,
  Calendar,
  MessageSquare,
} from "lucide-react"
import NavigationHeader from "@/components/navigation-header"

export default function AprendeMasPage() {
  const [activeTab, setActiveTab] = useState("fundamentos")

  const strategies = [
    {
      id: "fundamentos",
      title: "Fundamentos de IA en SEO",
      icon: <Brain className="w-5 h-5" />,
      description: "Comprende cómo la IA está transformando el SEO",
      content: {
        overview:
          "La inteligencia artificial ha revolucionado completamente el panorama del SEO. Desde algoritmos de búsqueda más sofisticados hasta herramientas de optimización automatizada, la IA está redefiniendo cómo abordamos la visibilidad online.",
        keyPoints: [
          "Algoritmos de Google basados en IA (RankBrain, BERT, MUM)",
          "Procesamiento de lenguaje natural avanzado",
          "Personalización de resultados de búsqueda",
          "Automatización de tareas SEO repetitivas",
          "Análisis predictivo de tendencias",
        ],
        tools: [
          { name: "Google AI Overviews", description: "Respuestas generadas por IA en resultados" },
          { name: "ChatGPT para SEO", description: "Generación de contenido optimizado" },
          { name: "Jasper AI", description: "Creación de contenido a escala" },
          { name: "Surfer SEO", description: "Optimización basada en IA" },
        ],
        implementation: [
          "Audita tu contenido actual con herramientas de IA",
          "Identifica oportunidades de optimización automatizada",
          "Implementa estrategias de contenido basadas en IA",
          "Monitorea el rendimiento con analytics predictivos",
        ],
      },
    },
    {
      id: "contenido",
      title: "Optimización de Contenido con IA",
      icon: <Target className="w-5 h-5" />,
      description: "Crea contenido que resuene con algoritmos de IA",
      content: {
        overview:
          "El contenido optimizado para IA va más allá de las palabras clave tradicionales. Se trata de crear contenido que comprenda y satisfaga la intención del usuario de manera profunda y contextual.",
        keyPoints: [
          "Optimización para búsquedas conversacionales",
          "Estructuración semántica del contenido",
          "Creación de contenido para featured snippets",
          "Optimización para búsquedas por voz",
          "Contenido multimedia optimizado",
        ],
        tools: [
          { name: "Frase.io", description: "Optimización semántica de contenido" },
          { name: "MarketMuse", description: "Planificación de contenido basada en IA" },
          { name: "Clearscope", description: "Optimización de contenido en tiempo real" },
          { name: "Copy.ai", description: "Generación de contenido optimizado" },
        ],
        implementation: [
          "Analiza la intención detrás de las consultas objetivo",
          "Estructura el contenido con marcado semántico",
          "Optimiza para preguntas frecuentes y búsquedas largas",
          "Implementa esquemas de datos estructurados",
        ],
      },
    },
    {
      id: "tecnico",
      title: "SEO Técnico Avanzado",
      icon: <Zap className="w-5 h-5" />,
      description: "Optimizaciones técnicas para algoritmos de IA",
      content: {
        overview:
          "El SEO técnico en la era de la IA requiere un enfoque más sofisticado. Los algoritmos modernos evalúan no solo la estructura técnica, sino también la experiencia del usuario y la calidad del contenido de manera integrada.",
        keyPoints: [
          "Core Web Vitals y experiencia de página",
          "Optimización para mobile-first indexing",
          "Implementación de datos estructurados avanzados",
          "Optimización de velocidad con IA",
          "Arquitectura de sitio para crawling inteligente",
        ],
        tools: [
          { name: "PageSpeed Insights", description: "Análisis de rendimiento web" },
          { name: "Schema.org", description: "Marcado de datos estructurados" },
          { name: "Screaming Frog", description: "Auditoría técnica automatizada" },
          { name: "GTmetrix", description: "Monitoreo de rendimiento" },
        ],
        implementation: [
          "Audita y optimiza Core Web Vitals",
          "Implementa datos estructurados comprehensivos",
          "Optimiza la arquitectura de información",
          "Configura monitoreo automatizado de rendimiento",
        ],
      },
    },
    {
      id: "analytics",
      title: "Analytics Predictivos",
      icon: <BarChart3 className="w-5 h-5" />,
      description: "Utiliza datos para predecir tendencias SEO",
      content: {
        overview:
          "Los analytics predictivos en SEO permiten anticipar cambios en el comportamiento de búsqueda y ajustar estrategias proactivamente. La IA analiza patrones históricos para predecir tendencias futuras.",
        keyPoints: [
          "Análisis de tendencias de búsqueda",
          "Predicción de cambios algorítmicos",
          "Modelado de comportamiento del usuario",
          "Optimización basada en datos predictivos",
          "ROI predictivo de estrategias SEO",
        ],
        tools: [
          { name: "Google Analytics 4", description: "Analytics con IA integrada" },
          { name: "SEMrush", description: "Análisis competitivo predictivo" },
          { name: "Ahrefs", description: "Predicción de oportunidades de keywords" },
          { name: "BrightEdge", description: "Plataforma de SEO predictivo" },
        ],
        implementation: [
          "Configura modelos predictivos en GA4",
          "Analiza patrones de comportamiento históricos",
          "Identifica oportunidades emergentes",
          "Desarrolla estrategias basadas en predicciones",
        ],
      },
    },
  ]

  const currentStrategy = strategies.find((s) => s.id === activeTab)

  return (
    <div className="min-h-screen bg-slate-950">
      <NavigationHeader title="Aprende Más" />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 text-orange-400 border-orange-800 bg-orange-950/20">
            <Lightbulb className="mr-2 h-4 w-4" />
            Centro de Conocimiento
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Domina el <span className="text-orange-500">SEO con IA</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Aprende las estrategias más avanzadas para posicionar tu negocio en la era de la inteligencia artificial.
            Contenido actualizado y técnicas probadas por expertos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Play className="mr-2 h-5 w-5" />
              Ver Webinar Exclusivo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-400 text-orange-400 hover:bg-orange-950/20 bg-transparent"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Consulta
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-slate-800 border-slate-700">
              {strategies.map((strategy) => (
                <TabsTrigger
                  key={strategy.id}
                  value={strategy.id}
                  className="flex items-center gap-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white text-slate-300"
                >
                  {strategy.icon}
                  <span className="hidden sm:inline">{strategy.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {strategies.map((strategy) => (
              <TabsContent key={strategy.id} value={strategy.id} className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">{strategy.title}</h2>
                  <p className="text-lg text-slate-300">{strategy.description}</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Overview */}
                  <Card className="lg:col-span-2 bg-slate-900 border-slate-700">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-white">
                        <Globe className="h-5 w-5 text-orange-500" />
                        Visión General
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 mb-6">{strategy.content.overview}</p>

                      <h4 className="font-semibold text-white mb-4">Puntos Clave:</h4>
                      <ul className="space-y-2">
                        {strategy.content.keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Tools */}
                  <Card className="bg-slate-900 border-slate-700">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-white">
                        <Zap className="h-5 w-5 text-orange-500" />
                        Herramientas
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {strategy.content.tools.map((tool, index) => (
                        <div key={index} className="border-l-4 border-orange-500 pl-4">
                          <h5 className="font-medium text-white">{tool.name}</h5>
                          <p className="text-sm text-slate-300">{tool.description}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Implementation */}
                <Card className="bg-slate-900 border-slate-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Target className="h-5 w-5 text-orange-500" />
                      Plan de Implementación
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      Pasos prácticos para implementar esta estrategia en tu negocio
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {strategy.content.implementation.map((step, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-slate-800 rounded-lg">
                          <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <p className="text-slate-300">{step}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Webinar Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-950/20 to-amber-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 text-orange-400 border-orange-400 bg-slate-900">
            <Star className="mr-2 h-4 w-4" />
            Contenido Exclusivo
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Webinar: <span className="text-orange-500">SEO con IA en 2024</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Únete a nuestro webinar exclusivo donde revelamos las estrategias más efectivas para dominar el SEO en la
            era de la inteligencia artificial.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <Clock className="h-8 w-8 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">90 Minutos</h3>
              <p className="text-slate-300">Contenido intensivo y práctico</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <Users className="h-8 w-8 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Expertos</h3>
              <p className="text-slate-300">Presentado por especialistas</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <TrendingUp className="h-8 w-8 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Resultados</h3>
              <p className="text-slate-300">Estrategias probadas y efectivas</p>
            </div>
          </div>

          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Play className="mr-2 h-5 w-5" />
            Acceder al Webinar
          </Button>
        </div>
      </section>

      {/* Audit Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-white border border-slate-700">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-6 text-orange-400 border-orange-400 bg-orange-950/20">
                <Search className="mr-2 h-4 w-4" />
                Auditoría Personalizada
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Quieres saber cómo está tu <span className="text-orange-400">SEO actual</span>?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Recibe una auditoría completa de tu sitio web y descubre oportunidades específicas para mejorar tu
                posicionamiento con IA.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-400">Incluye:</h3>
                <ul className="space-y-3">
                  {[
                    "Análisis técnico completo",
                    "Evaluación de contenido actual",
                    "Oportunidades de palabras clave",
                    "Recomendaciones específicas",
                    "Plan de acción personalizado",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-semibold text-orange-400 mb-4">Proceso:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <span>Análisis automatizado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <span>Revisión por expertos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <span>Entrega en 48 horas</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() =>
                  window.open(
                    "https://wa.me/5256202022210?text=Hola%2C%20me%20interesa%20solicitar%20una%20auditor%C3%ADa%20SEO%20para%20mi%20negocio.%20%C2%BFPodr%C3%ADan%20ayudarme%3F",
                    "_blank",
                  )
                }
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Solicitar Auditoría
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para implementar estas <span className="text-orange-400">estrategias avanzadas</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            No dejes que tu competencia se adelante. Comienza a implementar SEO con IA hoy mismo y posiciona tu negocio
            en los primeros resultados de búsqueda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={() =>
                window.open(
                  "https://wa.me/5256202022210?text=Hola%2C%20me%20interesa%20agendar%20una%20auditor%C3%ADa%20SEO%20para%20mi%20negocio.%20%C2%BFPodr%C3%ADan%20ayudarme%3F",
                  "_blank",
                )
              }
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Agendar Auditoría
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-400 text-orange-400 hover:bg-orange-950/20 bg-transparent"
              onClick={() =>
                window.open(
                  "https://wa.me/5256202022210?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20SEO%20con%20IA.%20%C2%BFPodr%C3%ADan%20contactarme%3F",
                  "_blank",
                )
              }
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Contactar Ahora
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
