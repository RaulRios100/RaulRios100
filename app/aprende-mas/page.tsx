"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
  Search,
  Target,
  BarChart3,
  CheckCircle,
  Zap,
  Settings,
  MessageSquare,
  Clock,
  Award,
  Database,
  Monitor,
  Smartphone,
  AlertTriangle,
  Play,
  Moon,
  Sun,
} from "lucide-react"

import { useState, useEffect } from "react"
import NavigationHeader from "@/components/navigation-header"

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
      <NavigationHeader title="Centro de Aprendizaje" />

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
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

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Contenido del Webinar Completo
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Módulos Incluidos:</h4>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Introducción a AI First Search</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Técnicas Avanzadas de SEO</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Automatización y AI SEO Tools</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>SEM con Inteligencia Artificial</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>SMM Potenciado por IA</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Métricas y Reporting AI Driven</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Caso Práctico en Vivo</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Lo que aprenderás:</h4>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        <li className="flex items-center gap-2">
                          <Brain className="h-4 w-4 text-blue-500" />
                          <span>Optimización para AI Overviews</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-green-500" />
                          <span>Estrategias de contenido citeable</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-purple-500" />
                          <span>Automatización de procesos SEO</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <BarChart3 className="h-4 w-4 text-orange-500" />
                          <span>Nuevos KPIs para IA</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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

                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-xl border border-orange-200 dark:border-orange-800">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Proceso de Auditoría Completo
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Áreas de Análisis:</h4>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        <li className="flex items-center gap-2">
                          <Settings className="h-4 w-4 text-blue-500" />
                          <span>Auditoría Técnica (SEO Técnico)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Search className="h-4 w-4 text-green-500" />
                          <span>Keywords "AI Friendly"</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-purple-500" />
                          <span>Secciones Q&A</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-red-500" />
                          <span>Errores Clave a Corregir</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Brain className="h-4 w-4 text-orange-500" />
                          <span>Auditoría de AEO y GEO</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Herramientas Incluidas:</h4>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        <li className="flex items-center gap-2">
                          <Database className="h-4 w-4 text-blue-500" />
                          <span>Screaming Frog, Search Console</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Monitor className="h-4 w-4 text-green-500" />
                          <span>SEMrush, Ahrefs</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Smartphone className="h-4 w-4 text-purple-500" />
                          <span>PageSpeed Insights</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-orange-500" />
                          <span>AI Overviews Detector</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
