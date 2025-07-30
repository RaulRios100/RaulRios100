"use client"

import { useEffect } from "react"
import NavigationHeader from "@/components/navigation-header"

export default function CalendarioPage() {
  useEffect(() => {
    // Cargar el script de Calendly
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Limpiar el script cuando el componente se desmonte
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <NavigationHeader title="Agendar Sesión Estratégica" />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Agenda tu <span className="text-orange-500">Sesión Estratégica Gratuita</span>
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Reserva 30 minutos para analizar tu situación actual y descubrir cómo el posicionamiento en IA puede
            transformar tu negocio. Al finalizar la sesión recibirás el enlace de Zoom automáticamente.
          </p>
        </div>

        {/* Calendly Widget */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/tu-usuario/sesion-estrategica-ia"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
        </div>

        {/* Información adicional */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-orange-100 dark:bg-orange-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">30 Minutos</h3>
            <p className="text-slate-600 dark:text-slate-300">Sesión enfocada y sin compromisos</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 dark:bg-green-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">100% Gratuito</h3>
            <p className="text-slate-600 dark:text-slate-300">Sin costo ni obligación de compra</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Vía Zoom</h3>
            <p className="text-slate-600 dark:text-slate-300">Enlace enviado automáticamente</p>
          </div>
        </div>

        {/* Qué incluye la sesión */}
        <div className="mt-12 bg-slate-50 dark:bg-slate-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            ¿Qué incluye tu sesión estratégica?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-orange-500 rounded-full p-1 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Análisis de tu situación actual</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Revisión de tu presencia en motores de IA
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-orange-500 rounded-full p-1 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Estrategia personalizada</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Plan específico para tu industria y objetivos
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-orange-500 rounded-full p-1 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Oportunidades identificadas</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Gaps que puedes aprovechar antes que tu competencia
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-orange-500 rounded-full p-1 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Recomendaciones inmediatas</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Acciones que puedes implementar hoy mismo
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-orange-500 rounded-full p-1 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Hoja de ruta clara</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Pasos específicos para dominar tu nicho en IA
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-orange-500 rounded-full p-1 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Q&A personalizado</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Respuestas a todas tus dudas específicas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
