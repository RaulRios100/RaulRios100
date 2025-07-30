"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Brain, Target, Zap, TrendingUp, Search, Users, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export default function FAQsPage() {
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <DarkModeToggle />

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="outline"
            className="mb-6 bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
          <div className="text-center">
            <Badge className="mb-6 bg-orange-500 text-white px-4 py-2 text-sm font-medium">
              🔥 LA NUEVA REALIDAD DEL MARKETING DIGITAL
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              El <span className="text-orange-400">viejo Google está muerto</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Google está cambiando el juego, y la mayoría ni siquiera se ha dado cuenta. Descubre por qué el SEO
              tradicional ya no funciona y cómo adaptarte al nuevo mundo del GEO.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <Card className="mb-12 border-2 border-orange-200 dark:border-orange-700">
            <CardHeader className="bg-orange-50 dark:bg-orange-900/20">
              <CardTitle className="text-2xl text-orange-800 dark:text-orange-300 flex items-center gap-3">
                <Brain className="h-8 w-8" />
                La Revolución Silenciosa
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                Google está cambiando el juego, y la mayoría ni siquiera se ha dado cuenta. Sus nuevas funciones de IA
                están robándose el momento más valioso del buscador:{" "}
                <strong className="text-orange-600">cuando el usuario ya está listo para comprar</strong>. Y si tu marca
                no aparece en esos resultados generados por IA, olvídate de todo.
              </p>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-slate-800 dark:text-slate-200 font-semibold">
                  Eres invisible. Estás fuera de la conversación.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* GEO vs SEO */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900 dark:text-white flex items-center gap-3">
                <Target className="h-8 w-8 text-green-500" />
                Bienvenido al GEO - Generative Engine Optimization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                Esto ya no es SEO clásico. Esto es una guerra por atención, posicionamiento y confianza en el nuevo
                Google. Ahora lo llaman <strong className="text-green-600">GEO – Generative Engine Optimization</strong>
                . Y si no empiezas a pensar como un jugador de este nuevo juego, te vas a quedar viendo cómo otros se
                llevan toda la atención.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-3">❌ El Viejo Google (SEO)</h3>
                  <ul className="space-y-2 text-red-700 dark:text-red-200">
                    <li>• Lista de enlaces</li>
                    <li>• Competencia por clics</li>
                    <li>• Keywords sueltas</li>
                    <li>• Artículos al azar</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">✅ El Nuevo Google (GEO)</h3>
                  <ul className="space-y-2 text-green-700 dark:text-green-200">
                    <li>• Motor de respuestas con criterio</li>
                    <li>• Competencia por menciones</li>
                    <li>• Dominio del contexto</li>
                    <li>• Autoridad reconocida por IA</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                <p className="text-slate-800 dark:text-slate-200 font-semibold mb-2">La bomba que debes saber:</p>
                <p className="text-slate-700 dark:text-slate-300">
                  Puedes estar en la primera página… y aún así perder. Porque si no estás citado en esas respuestas de
                  IA, simplemente no existes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Query Fan-out */}
          <Card className="mb-12 border-2 border-blue-200 dark:border-blue-700">
            <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
              <CardTitle className="text-2xl text-blue-800 dark:text-blue-300 flex items-center gap-3">
                <Search className="h-8 w-8" />
                El Secreto del "Query Fan-out"
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                ¿Qué está pasando en las búsquedas? La gente ya no escribe "mejor CRM". Escriben:{" "}
                <em>"¿Cuál es el mejor CRM para una agencia chica con presupuesto limitado y equipo remoto?"</em>
              </p>

              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-4">¿Y adivina qué?</h3>
                <p className="text-blue-700 dark:text-blue-200 mb-4">
                  Google lo contesta. Con IA. En segundos. No te manda a 10 links. Te da una respuesta completa, basada
                  en contenido que ni siquiera ves.
                </p>
                <p className="text-blue-800 dark:text-blue-300 font-semibold">
                  Y lo peor (o lo mejor, si eres listo): Ese contenido probablemente ni siquiera lo escribió el número 1
                  del ranking.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 dark:text-white">Cómo funciona el Query Fan-out:</h4>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">El usuario escribe una cosa</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">
                      La IA hace 30 microbúsquedas en segundo plano: clima, ubicación, comparaciones, datos, horarios,
                      tips…
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">Todo eso se fusiona en una respuesta brillante</p>
                  </div>
                </div>

                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-yellow-800 dark:text-yellow-200 font-semibold">
                    ¿Tu marca fue parte de ese collage? Si no… otra vez: eres invisible.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Strategy */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900 dark:text-white flex items-center gap-3">
                <Zap className="h-8 w-8 text-purple-500" />
                Cómo Ganarle al Sistema
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                Deja de obsesionarte con el clic. Empieza a obsesionarte con el momento. Ese instante en el que el
                usuario dice: <strong>"Sí, eso quiero."</strong> Y si tú no estás citado en ese momento, ya perdiste.
              </p>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Entonces, ¿cómo le ganas al sistema?
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                Fácil (bueno, no fácil, pero claro): <strong>Reversa el proceso.</strong>
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Mira qué contenido la IA ya está usando</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Ve qué marcas están apareciendo</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Detecta las brechas de contenido: temas que ellos cubren y tú no
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Crea contenido más profundo, más visual, más útil, más humano
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-3">No escribas por escribir:</h4>
                <ul className="space-y-2 text-purple-700 dark:text-purple-200">
                  <li>• Haz videos</li>
                  <li>• Haz infografías</li>
                  <li>• Haz explicaciones con gancho</li>
                  <li>• Haz contenido que se vea y se sienta como una autoridad</li>
                </ul>
                <p className="text-purple-800 dark:text-purple-300 font-semibold mt-4">
                  Así es como entrenas a la IA para decir: "Este es el tipo que sabe. Lo voy a citar."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* New Reality */}
          <Card className="mb-12 border-2 border-green-200 dark:border-green-700">
            <CardHeader className="bg-green-50 dark:bg-green-900/20">
              <CardTitle className="text-2xl text-green-800 dark:text-green-300 flex items-center gap-3">
                <TrendingUp className="h-8 w-8" />
                La Nueva Realidad del Marketing
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                Esto no es sobre ganar clics. Es sobre ganar mente, atención, confianza. SEO ahora es como tener tu logo
                en un auto de Fórmula 1. Tal vez no te recuerden con detalle, pero te vieron 500 veces.
              </p>

              <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-lg mb-6">
                <p className="text-green-800 dark:text-green-300 font-semibold text-lg">
                  Cuando llegue el momento de elegir, te van a elegir a ti.
                </p>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Última verdad:</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Google no está matando el SEO. Lo está reinventando y ahora es{" "}
                <strong className="text-green-600">más importante que NUNCA</strong>.
              </p>

              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                <p className="text-slate-800 dark:text-slate-200 mb-4">
                  Y ahora mismo hay una ventana brutal para que tú seas de los primeros en adaptarse y ganar visibilidad
                  sin pagar anuncios, sin ser #1, sin siquiera ser clickeado.
                </p>
                <p className="text-slate-900 dark:text-white font-bold text-lg">
                  La pregunta es: ¿Vas a seguir compitiendo por tráfico? ¿O vas a competir por permanencia? Por memoria.
                  Por relevancia. Por menciones de tu marca?
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="border-2 border-orange-300 dark:border-orange-700 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
            <CardContent className="pt-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Muchos de nuestros clientes <span className="text-orange-600">ya empezaron</span>
                </h2>
                <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                  No te quedes atrás en esta revolución. El momento de actuar es ahora, antes de que tu competencia
                  descubra estos secretos.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold"
                    onClick={() =>
                      window.open(
                        "https://wa.me/5256202022210?text=Hola, quiero saber más sobre GEO y cómo adaptar mi negocio al nuevo Google con IA",
                        "_blank",
                      )
                    }
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Quiero empezar ahora
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-orange-500 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 px-8 py-4 text-lg bg-transparent"
                    onClick={() => (window.location.href = "/")}
                  >
                    Ver nuestros paquetes
                  </Button>
                </div>

                <div className="mt-8 text-sm text-slate-500 dark:text-slate-400">
                  <p>✅ Consulta personalizada • ✅ Sin compromiso • ✅ Resultados garantizados</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
