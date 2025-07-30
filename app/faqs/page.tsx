import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Search, Brain, Target, TrendingUp, Zap, Eye, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            <Brain className="w-4 h-4 mr-2" />
            GEO - Generative Engine Optimization
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">El Nuevo Google Ya Está Aquí</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Google está cambiando el juego, y la mayoría ni siquiera se ha dado cuenta. Sus nuevas funciones de IA están
            robándose el momento más valioso del buscador.
          </p>
        </div>

        {/* Alert Section */}
        <Card className="mb-16 border-red-200 bg-red-50">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Eye className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-900 mb-4">
                  Si tu marca no aparece en esos resultados generados por IA, olvídate de todo.
                </h3>
                <p className="text-red-800 text-lg">
                  Eres invisible. Estás fuera de la conversación. Esto ya no es SEO clásico. Esto es una guerra por
                  atención, posicionamiento y confianza en el nuevo Google.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Sections */}
        <div className="grid gap-12">
          {/* Section 1: El Viejo Google Está Muerto */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
              <CardTitle className="text-2xl flex items-center">
                <Search className="w-6 h-6 mr-3" />
                El Viejo Google Está Muerto
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Antes era una lista de enlaces. Ahora es un maldito motor de respuestas con criterio propio.
                </p>
                <p className="text-gray-700 mb-6">
                  ¿Y de dónde saca esas respuestas? De la gente, de las marcas, del contenido en el que confía.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
                  <p className="text-yellow-800 font-semibold text-lg">
                    Y te tengo una bomba: puedes estar en la primera página… y aún así perder.
                  </p>
                  <p className="text-yellow-700 mt-2">
                    Porque si no estás citado en esas respuestas de IA, simplemente no existes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Cómo Ganar */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-blue-900">
                <Target className="w-6 h-6 mr-3" />
                ¿Quieres Ganar en Esto?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 text-lg mb-6">
                Tienes que entrenar la IA para que te vea como una fuente confiable.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">❌ Ya NO es sobre:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Keywords sueltas</li>
                    <li>• Escribir artículos al azar</li>
                    <li>• Obsesionarse con el clic</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">✅ Ahora ES sobre:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Dominar el contexto</li>
                    <li>• Convertirte en fuente confiable</li>
                    <li>• Obsesionarse con el momento</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Query Fan-Out */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-indigo-900">
                <Zap className="w-6 h-6 mr-3" />
                El Secreto: Query Fan-Out
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  La gente ya no escribe "mejor CRM". Escriben:
                  <span className="font-semibold text-indigo-700">
                    "¿Cuál es el mejor CRM para una agencia chica con presupuesto limitado y equipo remoto?"
                  </span>
                </p>

                <div className="bg-white rounded-lg p-6 border border-indigo-200">
                  <h4 className="font-semibold text-indigo-900 mb-4">Lo que pasa detrás de escena:</h4>
                  <div className="grid gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold">
                        1
                      </div>
                      <p>El usuario escribe una pregunta</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold">
                        2
                      </div>
                      <p>La IA hace 30 microbúsquedas ocultas</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold">
                        3
                      </div>
                      <p>Todo se fusiona en una respuesta brillante</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-xl font-semibold text-gray-900">¿Tu marca fue parte de ese collage?</p>
                  <p className="text-red-600 font-semibold mt-2">Si no… otra vez: eres invisible.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: Cómo Ganar al Sistema */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-green-900">
                <TrendingUp className="w-6 h-6 mr-3" />
                ¿Cómo Le Ganas al Sistema?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 font-semibold">
                  Fácil (bueno, no fácil, pero claro): Reversa el proceso.
                </p>

                <div className="grid gap-4">
                  {[
                    "Mira qué contenido la IA ya está usando",
                    "Ve qué marcas están apareciendo",
                    "Detecta las brechas de contenido",
                    "Crea contenido más profundo, más visual, más útil, más humano",
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-green-800 font-medium">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h4 className="font-semibold text-gray-900 mb-4">No escribas por escribir. Haz:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Videos explicativos</li>
                      <li>• Infografías detalladas</li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Contenido multimedia</li>
                      <li>• Explicaciones con autoridad</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 5: La Nueva Realidad */}
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-900">La Nueva Realidad del SEO</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  Esto no es sobre ganar clics. Es sobre ganar mente, atención, confianza.
                </p>

                <div className="bg-white rounded-lg p-6 border border-purple-200">
                  <p className="text-purple-800 text-lg font-semibold mb-4">
                    SEO ahora es como tener tu logo en un auto de Fórmula 1.
                  </p>
                  <p className="text-purple-700">
                    Tal vez no te recuerden con detalle, pero te vieron 500 veces. Cuando llegue el momento de elegir,
                    te van a elegir a ti.
                  </p>
                </div>

                <Separator />

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Última Verdad:</h3>
                  <p className="text-xl text-gray-700 mb-6">
                    Google no está matando el SEO. Lo está reinventando y ahora es
                    <span className="font-bold text-purple-600"> más importante que NUNCA.</span>
                  </p>

                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-6 mb-8">
                    <p className="text-lg font-semibold">
                      Ahora mismo hay una ventana brutal para que tú seas de los primeros en adaptarse y ganar
                      visibilidad sin pagar anuncios, sin ser #1, sin siquiera ser clickeado.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final Question */}
          <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">La Pregunta Es:</h3>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-red-100 rounded-lg border border-red-200">
                  <h4 className="text-xl font-semibold text-red-800 mb-4">¿Vas a seguir compitiendo por:</h4>
                  <ul className="text-red-700 space-y-2">
                    <li>• Tráfico</li>
                    <li>• Clics</li>
                    <li>• Rankings tradicionales</li>
                  </ul>
                </div>

                <div className="p-6 bg-green-100 rounded-lg border border-green-200">
                  <h4 className="text-xl font-semibold text-green-800 mb-4">¿O vas a competir por:</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• Permanencia</li>
                    <li>• Memoria</li>
                    <li>• Relevancia</li>
                    <li>• Menciones de tu marca</li>
                  </ul>
                </div>
              </div>

              <p className="text-2xl font-bold text-gray-900 mb-6">Tú eliges.</p>

              <p className="text-lg text-gray-700 mb-8">Muchos de nuestros clientes ya empezaron.</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <Link href="https://wa.me/5256202022210?text=Hola,%20quiero%20empezar%20con%20GEO%20y%20posicionar%20mi%20marca%20en%20las%20respuestas%20de%20IA">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Empezar con GEO Ahora
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contacto">
                    Más Información
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
