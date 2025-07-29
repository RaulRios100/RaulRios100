"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function RedesSociales() {
  const socialNetworks = [
    {
      name: "Facebook",
      description: "Síguenos para contenido exclusivo sobre posicionamiento en IA",
      url: "https://www.facebook.com/optimizaciononline1",
      followers: "2.5K",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      icon: (
        <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      description: "Contenido visual y tips rápidos sobre marketing digital",
      url: "https://www.instagram.com/optimizaciononline/",
      followers: "1.8K",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      hoverColor: "hover:from-purple-600 hover:to-pink-600",
      icon: (
        <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      description: "Noticias y actualizaciones sobre IA y posicionamiento digital",
      url: "https://x.com/optimizaciononl/",
      followers: "3.2K",
      color: "bg-slate-900",
      hoverColor: "hover:bg-slate-800",
      icon: (
        <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      description: "Contenido profesional y casos de estudio empresariales",
      url: "https://www.linkedin.com/company/optimización-online/",
      followers: "1.5K",
      color: "bg-blue-700",
      hoverColor: "hover:bg-blue-800",
      icon: (
        <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      description: "Tutoriales completos y webinars sobre marketing con IA",
      url: "https://www.youtube.com/channel/UCNjfW4DkjCUwXLFDSWLpYpg",
      followers: "850",
      color: "bg-red-600",
      hoverColor: "hover:bg-red-700",
      icon: (
        <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white py-20 px-4">
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
              🌐 Síguenos en Redes Sociales
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Conecta con <span className="text-orange-400">Posicionamiento AIO + LLM</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Mantente al día con las últimas tendencias en posicionamiento de IA, casos de éxito exclusivos y
              estrategias que están transformando el marketing digital.
            </p>
          </div>
        </div>
      </section>

      {/* Social Networks Grid */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Nuestras <span className="text-green-500">redes sociales</span>
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300">
              Contenido exclusivo, tips y actualizaciones en cada plataforma
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialNetworks.map((network, index) => (
              <Card
                key={index}
                className="border-2 border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-700 transition-all duration-300 overflow-hidden"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`${network.color} ${network.hoverColor} w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300`}
                  >
                    {network.icon}
                  </div>
                  <CardTitle className="text-xl text-slate-900 dark:text-white">{network.name}</CardTitle>
                  <Badge className="w-fit mx-auto bg-green-100 dark:bg-green-700 text-green-700 dark:text-green-300">
                    {network.followers} seguidores
                  </Badge>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{network.description}</p>
                  <Button
                    className="w-full bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white"
                    onClick={() => window.open(network.url, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Seguir en {network.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mt-16">
            <Card className="bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-slate-900 dark:text-white">
                  ¿Por qué seguirnos en redes sociales?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-orange-100 dark:bg-orange-700 p-2 rounded-full">
                        <svg
                          className="h-5 w-5 text-orange-600 dark:text-orange-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Contenido exclusivo</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          Tips y estrategias que no compartimos en ningún otro lugar
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 dark:bg-green-700 p-2 rounded-full">
                        <svg
                          className="h-5 w-5 text-green-600 dark:text-green-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Casos de éxito reales</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          Historias de clientes y resultados obtenidos con nuestras estrategias
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 dark:bg-blue-700 p-2 rounded-full">
                        <svg
                          className="h-5 w-5 text-blue-600 dark:text-blue-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Actualizaciones de IA</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          Las últimas novedades en motores de IA y cómo afectan tu negocio
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 dark:bg-purple-700 p-2 rounded-full">
                        <svg
                          className="h-5 w-5 text-purple-600 dark:text-purple-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Interacción directa</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          Respuestas a tus preguntas y consultas personalizadas
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-red-100 dark:bg-red-700 p-2 rounded-full">
                        <svg
                          className="h-5 w-5 text-red-600 dark:text-red-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Webinars y tutoriales</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          Contenido educativo en video para implementar estrategias
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-yellow-100 dark:bg-yellow-700 p-2 rounded-full">
                        <svg
                          className="h-5 w-5 text-yellow-600 dark:text-yellow-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Primero en enterarte</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          Ofertas especiales, lanzamientos y eventos antes que nadie
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              ¿Listo para dominar el posicionamiento en IA?
            </h2>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4"
              onClick={() => window.open("/calendario", "_blank")}
            >
              Agenda tu auditoría gratuita
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
