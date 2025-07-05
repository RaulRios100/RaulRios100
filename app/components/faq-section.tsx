"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle, Zap, Clock, DollarSign, Bot, Shield, Rocket } from "lucide-react"

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([0]) // Primer item abierto por defecto

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      category: "General",
      icon: HelpCircle,
      color: "from-blue-500 to-cyan-500",
      questions: [
        {
          q: "¿Qué es exactamente un chatbot y cómo puede ayudar a mi negocio?",
          qKey: "faqWhatIsChatbot",
          a: "Un chatbot es un asistente virtual que usa inteligencia artificial para conversar con tus clientes automáticamente. Puede responder preguntas, generar leads, procesar pedidos y brindar soporte 24/7. Esto significa más ventas, menos costos operativos y clientes más satisfechos.",
          aKey: "faqWhatIsChatbotAnswer",
        },
        {
          q: "¿Realmente funciona para empresas pequeñas o solo para grandes corporaciones?",
          qKey: "faqSmallBusiness",
          a: "¡Especialmente para empresas pequeñas! Los chatbots te permiten competir con empresas más grandes ofreciendo atención 24/7 sin contratar personal adicional. Muchos de nuestros clientes más exitosos son PyMEs que han automatizado su atención al cliente.",
          aKey: "faqSmallBusinessAnswer",
        },
        {
          q: "¿Qué tan difícil es implementar un chatbot en mi negocio?",
          qKey: "faqImplementationDifficulty",
          a: "Con Æternity es súper fácil. Nosotros nos encargamos de todo: configuración, entrenamiento del bot, integración con tus sistemas y capacitación de tu equipo. Tú solo necesitas decirnos qué quieres que haga el bot.",
          aKey: "faqImplementationDifficultyAnswer",
        },
      ],
    },
    {
      category: "Implementación",
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
      questions: [
        {
          q: "¿Cuánto tiempo toma tener mi chatbot funcionando?",
          qKey: "faqImplementationTime",
          a: "Entre 48-72 horas para chatbots estándar. Para proyectos más complejos con integraciones especiales, máximo 1-2 semanas. Mucho más rápido que contratar y entrenar personal nuevo.",
          aKey: "faqImplementationTimeAnswer",
        },
        {
          q: "¿Necesito conocimientos técnicos para manejar el chatbot?",
          qKey: "faqTechnicalKnowledge",
          a: "Para nada. Diseñamos todo para que sea súper fácil de usar. Te damos un panel de control intuitivo donde puedes ver conversaciones, estadísticas y hacer cambios básicos sin tocar código.",
          aKey: "faqTechnicalKnowledgeAnswer",
        },
        {
          q: "¿Se puede integrar con mis sistemas actuales (CRM, WhatsApp Business, etc.)?",
          qKey: "faqSystemIntegration",
          a: "Sí, nos especializamos en integraciones. Conectamos tu chatbot con WhatsApp Business, Go HighLevel (nuestro CRM recomendado), sistemas de pagos, calendarios de citas y más. Todo funciona como un ecosistema conectado.",
          aKey: "faqSystemIntegrationAnswer",
        },
      ],
    },
    {
      category: "Costos",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
      questions: [
        {
          q: "¿Cuánto cuesta realmente un chatbot? ¿Hay costos ocultos?",
          qKey: "faqCost",
          a: "Nuestros precios van desde $300-800/mes para chatbots básicos hasta $3,000+/mes para soluciones empresariales. NO hay costos ocultos. El precio incluye: desarrollo, hosting, mantenimiento, soporte 24/7 y actualizaciones.",
          aKey: "faqCostAnswer",
        },
        {
          q: "¿Es más barato que contratar personal de atención al cliente?",
          qKey: "faqCostVsStaff",
          a: "Muchísimo más barato. Un empleado de atención al cliente cuesta $1,500-3,000/mes (salario + prestaciones). Nuestro chatbot cuesta desde $300/mes, trabaja 24/7, nunca se enferma y puede atender múltiples clientes simultáneamente.",
          aKey: "faqCostVsStaffAnswer",
        },
        {
          q: "¿Qué incluye el precio mensual?",
          qKey: "faqMonthlyPrice",
          a: "Todo lo necesario: hosting en la nube, mantenimiento técnico, actualizaciones de IA, soporte 24/7, reportes mensuales, y hasta 10,000 conversaciones/mes. Solo pagas extra si necesitas más conversaciones o integraciones muy específicas.",
          aKey: "faqMonthlyPriceAnswer",
        },
      ],
    },
    {
      category: "Funcionalidades",
      icon: Bot,
      color: "from-orange-500 to-red-500",
      questions: [
        {
          q: "¿Qué tan inteligente es el chatbot? ¿Puede entender preguntas complejas?",
          qKey: "faqIntelligence",
          a: "Nuestros chatbots usan IA avanzada (GPT-4) y aprenden continuamente. Pueden entender contexto, manejar conversaciones complejas, detectar emociones y escalar a humanos cuando es necesario. No son bots básicos con respuestas predefinidas.",
          aKey: "faqIntelligenceAnswer",
        },
        {
          q: "¿Puede el chatbot procesar pagos y cerrar ventas?",
          qKey: "faqPayments",
          a: "¡Absolutamente! Puede mostrar catálogos, calcular precios, procesar pagos con Stripe/PayPal, generar facturas y confirmar pedidos. Muchos clientes han automatizado completamente su proceso de ventas.",
          aKey: "faqPaymentsAnswer",
        },
        {
          q: "¿Funciona en múltiples plataformas o solo en una?",
          qKey: "faqMultiplePlatforms",
          a: "Funciona en todas las plataformas principales: WhatsApp, sitio web, Instagram, Facebook Messenger, SMS y email. Un solo chatbot, múltiples canales. Tus clientes pueden empezar la conversación en WhatsApp y continuarla en tu sitio web.",
          aKey: "faqMultiplePlatformsAnswer",
        },
      ],
    },
    {
      category: "Resultados",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      questions: [
        {
          q: "¿Qué resultados puedo esperar realmente? ¿Hay garantías?",
          qKey: "faqResults",
          a: "Nuestros clientes ven en promedio: +35% más leads, +25% en conversiones, -70% tiempo de respuesta. Ofrecemos garantía de implementación (72 horas) y 30 días para probar. Si no estás satisfecho, cancelación sin penalización.",
          aKey: "faqResultsAnswer",
        },
        {
          q: "¿Cuánto tiempo toma ver el retorno de inversión (ROI)?",
          qKey: "faqROI",
          a: "La mayoría de nuestros clientes recuperan su inversión en 30-60 días. Un solo lead adicional por semana ya justifica el costo del chatbot. Considerando que trabaja 24/7, el ROI es muy rápido.",
          aKey: "faqROIAnswer",
        },
        {
          q: "¿Los clientes realmente prefieren chatbots o prefieren hablar con humanos?",
          qKey: "faqCustomerPreference",
          a: "Depende del contexto. Para preguntas rápidas, horarios, precios y procesos simples, los clientes PREFIEREN chatbots (respuesta inmediata). Para temas complejos, el bot escala inteligentemente a humanos. Es lo mejor de ambos mundos.",
          aKey: "faqCustomerPreferenceAnswer",
        },
      ],
    },
    {
      category: "Soporte",
      icon: Shield,
      color: "from-indigo-500 to-purple-500",
      questions: [
        {
          q: "¿Qué pasa si el chatbot no sabe responder algo?",
          qKey: "faqUnknownQuestions",
          a: "Tiene múltiples niveles de respaldo: 1) Busca en su base de conocimiento, 2) Ofrece opciones relacionadas, 3) Escala a un humano automáticamente, 4) Programa una llamada de seguimiento. Nunca deja al cliente sin respuesta.",
          aKey: "faqUnknownQuestionsAnswer",
        },
        {
          q: "¿Qué tipo de soporte ofrecen después de la implementación?",
          qKey: "faqSupport",
          a: "Soporte 24/7 por WhatsApp, email y chat. Incluye: monitoreo proactivo, actualizaciones automáticas, optimizaciones mensuales, reportes de rendimiento y capacitación continua. No te dejamos solo después de la implementación.",
          aKey: "faqSupportAnswer",
        },
        {
          q: "¿Puedo hacer cambios al chatbot después de que esté funcionando?",
          qKey: "faqChanges",
          a: "¡Por supuesto! Puedes hacer cambios básicos desde tu panel de control. Para cambios más complejos, nuestro equipo los implementa rápidamente. El chatbot evoluciona con tu negocio.",
          aKey: "faqChangesAnswer",
        },
      ],
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <Badge className="mb-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-400/50">
            <HelpCircle className="w-4 h-4 mr-2" />
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            <span data-translate="faqTitle">Todo lo que Necesitas Saber</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-translate="faqSubtitle">
            Respuestas honestas a las preguntas más importantes sobre chatbots e IA para tu negocio
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white" data-translate={`faq${category.category}`}>
                  {category.category}
                </h3>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex
                  const isOpen = openItems.includes(globalIndex)

                  return (
                    <Card
                      key={questionIndex}
                      className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300"
                    >
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-300 rounded-lg"
                        >
                          <h4
                            className="text-lg font-semibold text-white pr-4 leading-relaxed"
                            data-translate={faq.qKey}
                          >
                            {faq.q}
                          </h4>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-cyan-400" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-6 animate-fade-in-up">
                            <div className="border-t border-slate-700/50 pt-4">
                              <p className="text-gray-300 leading-relaxed text-base" data-translate={faq.aKey}>
                                {faq.a}
                              </p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA at the end */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-slate-800/50 to-indigo-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4" data-translate="faqNotFound">
              ¿No encontraste tu respuesta?
            </h3>
            <p className="text-gray-400 mb-6" data-translate="faqContactTeam">
              Nuestro equipo está disponible 24/7 para resolver cualquier duda específica sobre tu proyecto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/525535305269?text=Hola, tengo una pregunta sobre los chatbots de Æternity",
                    "_blank",
                  )
                }
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Clock className="w-5 h-5" />
                <span data-translate="faqWhatsApp">Pregunta por WhatsApp</span>
              </button>
              <button
                onClick={() => (window.location.href = "/demo")}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                <span data-translate="faqScheduleDemo">Agenda Demo Gratis</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
