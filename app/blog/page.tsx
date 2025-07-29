"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"
import NavigationHeader from "@/components/navigation-header"

export default function Blog() {
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

  const blogPosts = [
    {
      title: "Cómo optimizar tu sitio web para AI Overviews en 2025",
      excerpt:
        "Guía completa para aparecer en las respuestas generadas por Google AI y dominar los resultados de búsqueda del futuro.",
      date: "15 Enero 2025",
      author: "Equipo AIO",
      category: "SEO IA",
      readTime: "8 min",
      featured: true,
    },
    {
      title: "ChatGPT vs Perplexity: ¿Dónde debe estar tu marca?",
      excerpt: "Análisis comparativo de las principales plataformas LLM y estrategias específicas para cada una.",
      date: "12 Enero 2025",
      author: "María González",
      category: "LLM",
      readTime: "6 min",
    },
    {
      title: "Schema Markup para IA: Los datos estructurados que importan",
      excerpt: "Descubre qué tipos de schema markup son más efectivos para el posicionamiento en motores de IA.",
      date: "10 Enero 2025",
      author: "Carlos Ruiz",
      category: "Técnico",
      readTime: "10 min",
    },
    {
      title: "Casos de éxito: Cómo una PYME aumentó 300% su visibilidad con AIO",
      excerpt:
        "Historia real de transformación digital usando estrategias de posicionamiento en inteligencia artificial.",
      date: "8 Enero 2025",
      author: "Ana López",
      category: "Casos de Éxito",
      readTime: "5 min",
    },
    {
      title: "El futuro del marketing digital: Más allá del SEO tradicional",
      excerpt: "Por qué las estrategias de marketing digital deben evolucionar hacia el posicionamiento en IA.",
      date: "5 Enero 2025",
      author: "Equipo AIO",
      category: "Tendencias",
      readTime: "7 min",
    },
    {
      title: "Chatbots inteligentes: Cómo entrenar IA con tu contenido",
      excerpt: "Guía práctica para crear chatbots que realmente entiendan tu negocio y ayuden a tus clientes.",
      date: "3 Enero 2025",
      author: "Roberto Silva",
      category: "Automatización",
      readTime: "9 min",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <DarkModeToggle />
      <NavigationHeader title="Blog" />
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-medium">
              📝 Blog AIO
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Blog de <span className="text-orange-400">Posicionamiento IA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Mantente al día con las últimas tendencias, estrategias y casos de éxito en posicionamiento para motores
              de inteligencia artificial
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Artículo destacado</h2>
            <Card className="border-2 border-orange-200 dark:border-orange-700 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-orange-500 to-orange-600 p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-2">AIO</div>
                    <div className="text-lg">Guía 2025</div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <Badge className="mb-4 bg-orange-100 dark:bg-orange-700 text-orange-700 dark:text-orange-300">
                    {blogPosts[0].category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{blogPosts[0].title}</h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{blogPosts[0].date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{blogPosts[0].author}</span>
                      </div>
                      <span>{blogPosts[0].readTime} lectura</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Leer más <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Artículos recientes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <Card
                  key={index}
                  className="border-2 border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300"
                >
                  <CardHeader>
                    <Badge className="w-fit mb-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime} lectura</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Leer artículo
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-2 border-orange-200 dark:border-orange-700">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Suscríbete a nuestro newsletter
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Recibe las últimas estrategias de posicionamiento IA directamente en tu email
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="flex-1 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">Suscribirse</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
