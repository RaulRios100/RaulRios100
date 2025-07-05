"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  Monitor,
  MessageCircle,
  Smartphone,
  Mail,
  CheckCircle,
  ArrowRight,
  Zap,
  Clock,
  Palette,
  Brain,
  BarChart3,
  Sparkles,
} from "lucide-react"
import { Instagram, Facebook } from "lucide-react"
import Link from "next/link"
import AeternityLogo from "../components/aeternity-logo"
import LiveChatWidget from "../components/live-chat-widget"
import LanguageSwitcher from "../components/language-switcher"

export default function ChatbotsPage() {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:aeternity017@gmail.com?subject=Consulta sobre chatbots&body=Hola, me interesa conocer más sobre sus chatbots personalizados."
  }

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/525535305269?text=Hola, me interesa conocer más sobre los chatbots de Æternity",
      "_blank",
    )
  }

  const handleChatbotDemo = (platform: string) => {
    window.location.href = "/demo"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
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
            <Link href="/chatbots" className="text-cyan-400">
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
          <Badge className="mb-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-400/50">
            <Bot className="w-4 h-4 mr-2" />
            Chatbots Inteligentes
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Chatbots Para Cada Plataforma
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Crea asistentes virtuales personalizados que responden al instante en todas las plataformas donde están tus
            clientes
          </p>

          {/* Quick Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700/50">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white">Respuesta Instantánea</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700/50">
              <Palette className="w-5 h-5 text-pink-400" />
              <span className="text-white">100% Personalizable</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700/50">
              <Clock className="w-5 h-5 text-cyan-400" />
              <span className="text-white">Disponible 24/7</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700/50">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-white">IA Avanzada</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbots Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {[
              {
                icon: Monitor,
                title: "Sitio Web",
                platform: "Web",
                desc: "Chatbot integrado en tu sitio web que convierte visitantes en clientes las 24 horas del día.",
                features: ["Widget personalizable", "Integración fácil", "Analytics avanzados", "Múltiples idiomas"],
                color: "from-blue-500 to-cyan-500",
                cta: "Ver Demo Web",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp Business",
                platform: "WhatsApp",
                desc: "Automatiza conversaciones en WhatsApp con respuestas inteligentes y seguimiento de leads.",
                features: ["API oficial", "Mensajes multimedia", "Catálogo integrado", "Métricas detalladas"],
                color: "from-green-500 to-emerald-500",
                cta: "Demo WhatsApp",
              },
              {
                icon: Instagram,
                title: "Instagram DMs",
                platform: "Instagram",
                desc: "Responde automáticamente a mensajes directos y comentarios en Instagram.",
                features: ["Stories interactivas", "Respuestas automáticas", "Gestión de comentarios", "Lead capture"],
                color: "from-pink-500 to-rose-500",
                cta: "Demo Instagram",
              },
              {
                icon: Facebook,
                title: "Facebook Messenger",
                platform: "Facebook",
                desc: "Chatbot para Facebook que maneja consultas y genera leads automáticamente.",
                features: ["Messenger integrado", "Anuncios interactivos", "Secuencias automáticas", "CRM integrado"],
                color: "from-blue-600 to-indigo-600",
                cta: "Demo Facebook",
              },
              {
                icon: Smartphone,
                title: "SMS Inteligente",
                platform: "SMS",
                desc: "Campañas de SMS automatizadas con respuestas inteligentes y seguimiento.",
                features: ["SMS masivos", "Respuestas automáticas", "Segmentación avanzada", "ROI tracking"],
                color: "from-purple-500 to-violet-500",
                cta: "Demo SMS",
              },
              {
                icon: Mail,
                title: "Email Marketing",
                platform: "Email",
                desc: "Automatización de email marketing con respuestas inteligentes y personalización.",
                features: ["Secuencias automáticas", "Personalización IA", "A/B testing", "Analytics completos"],
                color: "from-orange-500 to-red-500",
                cta: "Demo Email",
              },
            ].map((chatbot, index) => (
              <Card
                key={index}
                className="group bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${chatbot.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <chatbot.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {chatbot.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6 leading-relaxed">
                    {chatbot.desc}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {chatbot.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleChatbotDemo(chatbot.platform)}
                    className={`w-full bg-gradient-to-r ${chatbot.color} hover:shadow-lg transition-all duration-300 group-hover:scale-105 text-white border-0`}
                  >
                    <Bot className="w-4 h-4 mr-2" />
                    {chatbot.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/50">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Respuesta Instantánea</h4>
                <p className="text-gray-400 text-sm">Responde en menos de 2 segundos, 24/7 sin interrupciones</p>
              </div>

              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">100% Personalizable</h4>
                <p className="text-gray-400 text-sm">Adapta el tono, personalidad y respuestas a tu marca</p>
              </div>

              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">IA Avanzada</h4>
                <p className="text-gray-400 text-sm">Aprende de cada conversación para mejorar continuamente</p>
              </div>

              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Analytics Completos</h4>
                <p className="text-gray-400 text-sm">Métricas detalladas para optimizar conversiones</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Crear mi Chatbot */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge className="mb-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-400/50">
              <Bot className="w-4 h-4 mr-2" />
              Crear mi Chatbot
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              ¿Listo para transformar tu negocio con un chatbot?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              ¡Contáctanos hoy mismo y descubre cómo un chatbot personalizado puede revolucionar tu interacción con los
              clientes!
            </p>
            <Button
              onClick={handleEmailClick}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-lg transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contáctanos por correo
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
