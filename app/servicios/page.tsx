"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  HeadphonesIcon,
  CheckCircle,
  ArrowRight,
  Mail,
  MessageCircle,
  Bot,
  Zap,
  BarChart3,
  Users,
  Shield,
  Cpu,
} from "lucide-react"
import Link from "next/link"
import AeternityLogo from "../components/aeternity-logo"
import LiveChatWidget from "../components/live-chat-widget"
import LanguageSwitcher from "../components/language-switcher"

export default function ServiciosPage() {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:aeternity017@gmail.com?subject=Consulta sobre servicios&body=Hola, me interesa conocer más sobre sus servicios específicos."
  }

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/525535305269?text=Hola, me interesa conocer más sobre los servicios de Æternity",
      "_blank",
    )
  }

  const handleDemoClick = () => {
    window.location.href = "/demo"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
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
            <Link href="/servicios" className="text-cyan-400">
              <span data-translate="services">Servicios</span>
            </Link>
            <Link href="/chatbots" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              <span data-translate="chatbots">Chatbots</span>
            </Link>
            <Link href="/casos" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
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
          <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-400/50">
            <Bot className="w-4 h-4 mr-2" />
            Soluciones Inteligentes
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transformamos cada área de tu negocio con IA especializada y personalizada
          </p>
        </div>
      </section>

      {/* Servicios Principales */}
      <section id="servicios-principales" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                id: "ventas",
                icon: TrendingUp,
                title: "Ventas Inteligentes",
                color: "from-blue-500 to-cyan-500",
                features: [
                  "Asistentes virtuales que califican leads automáticamente",
                  "Chatbots que convierten visitantes en clientes",
                  "Recomendaciones personalizadas con IA",
                  "Seguimiento automático de oportunidades",
                  "An��lisis predictivo de ventas",
                  "Integración con CRM existente",
                ],
              },
              {
                id: "soporte",
                icon: HeadphonesIcon,
                title: "Soporte Revolucionario",
                color: "from-green-500 to-emerald-500",
                features: [
                  "Atención 24/7 con chatbots superinteligentes",
                  "Resolución automática del 80% de consultas",
                  "Escalación inteligente de casos complejos",
                  "Análisis de sentimientos en tiempo real",
                  "Base de conocimiento autoactualizable",
                  "Métricas de satisfacción en tiempo real",
                ],
              },
              {
                id: "operaciones",
                icon: Cpu,
                title: "Operaciones Automatizadas",
                color: "from-purple-500 to-violet-500",
                features: [
                  "Automatización completa de procesos",
                  "Generación automática de reportes",
                  "Integración inteligente de sistemas",
                  "Programación automática optimizada",
                  "Monitoreo predictivo de operaciones",
                  "Optimización de recursos en tiempo real",
                ],
              },
            ].map((servicio, index) => (
              <Card
                key={index}
                className="group bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${servicio.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <servicio.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300">
                    {servicio.title}
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {servicio.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={handleDemoClick}
                    className="w-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-cyan-600 hover:to-purple-600 text-white border-0 transition-all duration-300 group-hover:scale-105"
                  >
                    Más Información
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Características Adicionales */}
      <section className="py-20 bg-gradient-to-r from-slate-900/50 to-purple-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Características Avanzadas
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tecnología de vanguardia para resultados excepcionales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Respuesta Instantánea",
                desc: "Menos de 2 segundos de tiempo de respuesta",
                color: "text-yellow-400",
              },
              {
                icon: Shield,
                title: "Seguridad Empresarial",
                desc: "Encriptación de nivel bancario",
                color: "text-blue-400",
              },
              {
                icon: BarChart3,
                title: "Analytics Avanzados",
                desc: "Métricas detalladas y reportes en tiempo real",
                color: "text-green-400",
              },
              {
                icon: Users,
                title: "Escalabilidad",
                desc: "Crece con tu negocio sin límites",
                color: "text-purple-400",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4`} />
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">¿Listo para transformar tu negocio?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Agenda una demo personalizada y descubre cómo nuestros servicios pueden revolucionar tu empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={handleDemoClick}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Solicitar Demo
            </Button>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Consulta WhatsApp
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
