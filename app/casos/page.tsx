"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sun,
  Scale,
  Stethoscope,
  ShoppingCart,
  Mail,
  MessageCircle,
  Globe,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import AeternityLogo from "../components/aeternity-logo"
import LiveChatWidget from "../components/live-chat-widget"
import LanguageSwitcher from "../components/language-switcher"

export default function CasosPage() {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:aeternity017@gmail.com?subject=Consulta sobre casos de uso&body=Hola, me interesa conocer más sobre casos de uso específicos para mi industria."
  }

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/525535305269?text=Hola, me interesa conocer casos de uso específicos de Æternity para mi industria",
      "_blank",
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            <AeternityLogo />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              <span data-translate="home">Inicio</span>
            </Link>
            <Link href="/servicios" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              <span data-translate="services">Servicios</span>
            </Link>
            <Link href="/chatbots" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              <span data-translate="chatbots">Chatbots</span>
            </Link>
            <Link href="/casos" className="text-cyan-400">
              <span data-translate="cases">Casos de Uso</span>
            </Link>
            <Link href="/contacto" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              <span data-translate="contact">Contacto</span>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-400/50">
            <Globe className="w-4 h-4 mr-2" />
            Casos de Éxito
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Industrias Transformadas
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluciones adaptadas a las necesidades específicas de cada sector
          </p>
        </div>
      </section>

      {/* Casos por Industria */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {[
              {
                icon: Sun,
                title: "🌞 Energía Solar",
                industry: "Energía Renovable",
                desc: "Asistentes virtuales que educan sobre instalaciones solares y calculan ahorros en tiempo real.",
                color: "from-yellow-400 to-orange-500",
                features: [
                  "Calculadora de ahorros automática",
                  "Educación sobre paneles solares",
                  "Seguimiento de leads calificados",
                  "Integración con sistemas de cotización",
                ],
                results: [
                  { metric: "+60%", label: "Leads calificados" },
                  { metric: "35%", label: "Más conversiones" },
                  { metric: "24/7", label: "Atención disponible" },
                ],
              },
              {
                icon: Scale,
                title: "⚖️ Sector Legal",
                industry: "Servicios Legales",
                desc: "Chatbots legales que responden consultas básicas y recopilan información para casos.",
                color: "from-blue-400 to-indigo-500",
                features: [
                  "Consultas legales básicas automatizadas",
                  "Recopilación de información de casos",
                  "Programación de citas con abogados",
                  "Base de conocimiento legal actualizada",
                ],
                results: [
                  { metric: "+45%", label: "Consultas atendidas" },
                  { metric: "50%", label: "Menos tiempo admin" },
                  { metric: "90%", label: "Satisfacción cliente" },
                ],
              },
              {
                icon: Stethoscope,
                title: "🏥 Salud",
                industry: "Sector Salud",
                desc: "Agentes virtuales para triage de pacientes y gestión inteligente de citas médicas.",
                color: "from-green-400 to-emerald-500",
                features: [
                  "Triage automático de pacientes",
                  "Programación inteligente de citas",
                  "Recordatorios automáticos",
                  "Gestión de historiales básicos",
                ],
                results: [
                  { metric: "+30%", label: "Eficiencia operativa" },
                  { metric: "40%", label: "Menos llamadas perdidas" },
                  { metric: "95%", label: "Puntualidad en citas" },
                ],
              },
              {
                icon: ShoppingCart,
                title: "🛒 E-commerce",
                industry: "Comercio Electrónico",
                desc: "Recomendadores inteligentes que ofrecen asistencia personalizada y aumentan ventas.",
                color: "from-purple-400 to-pink-500",
                features: [
                  "Recomendaciones personalizadas",
                  "Asistencia de compra 24/7",
                  "Seguimiento de carritos abandonados",
                  "Soporte post-venta automatizado",
                ],
                results: [
                  { metric: "+55%", label: "Valor promedio pedido" },
                  { metric: "25%", label: "Menos carritos abandonados" },
                  { metric: "80%", label: "Consultas resueltas" },
                ],
              },
            ].map((caso, index) => (
              <Card
                key={index}
                className="group bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="flex items-start gap-6 mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${caso.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}
                    >
                      <caso.icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {caso.title}
                      </h3>
                      <Badge variant="outline" className="text-gray-400 border-gray-600 mb-4">
                        {caso.industry}
                      </Badge>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                        {caso.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Características Principales:</h4>
                    <ul className="space-y-2">
                      {caso.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Resultados Obtenidos:</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {caso.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-2xl font-bold text-cyan-400 mb-1">{result.metric}</div>
                          <div className="text-xs text-gray-400">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={handleEmailClick}
                    className={`w-full bg-gradient-to-r ${caso.color} hover:shadow-lg transition-all duration-300 group-hover:scale-105 text-white border-0`}
                  >
                    Ver Caso Completo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios Generales */}
      <section className="py-20 bg-gradient-to-r from-slate-900/50 to-cyan-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Beneficios Transversales
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Independientemente de tu industria, estos son los beneficios que obtienes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Aumento de Ventas",
                desc: "Incremento promedio del 40% en conversiones",
                color: "text-green-400",
              },
              {
                icon: Clock,
                title: "Ahorro de Tiempo",
                desc: "Reducción del 70% en tiempo de respuesta",
                color: "text-blue-400",
              },
              {
                icon: Users,
                title: "Mejor Experiencia",
                desc: "95% de satisfacción del cliente",
                color: "text-purple-400",
              },
              {
                icon: DollarSign,
                title: "ROI Comprobado",
                desc: "Retorno de inversión en menos de 60 días",
                color: "text-yellow-400",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 hover:scale-105 text-center"
              >
                <CardContent className="p-6">
                  <benefit.icon className={`w-12 h-12 ${benefit.color} mx-auto mb-4`} />
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">¿Tu industria no está aquí?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            No te preocupes. Creamos soluciones personalizadas para cualquier sector. Cuéntanos tu caso específico.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={handleEmailClick}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Consultar Mi Caso
            </Button>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Directo
            </Button>
          </div>
        </div>
      </section>

      {/* Float Buttons */}
      <div className="fixed bottom-8 left-8 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>
      <LiveChatWidget />
    </div>
  )
}
