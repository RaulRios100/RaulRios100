"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  Clock,
  DollarSign,
  Heart,
  TrendingUp,
  Settings,
  Star,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Rocket,
  Target,
  Users,
  BarChart3,
  Brain,
  Bot,
  Shield,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import FAQSection from "./components/faq-section"
import LanguageSwitcher from "./components/language-switcher"
import AeternityLogo from "./components/aeternity-logo"
import { Instagram, Facebook } from "lucide-react"

// Icono X personalizado
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

// Icono TikTok original
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.52v-3.39a4.85 4.85 0 0 1-1-.05z" />
  </svg>
)

export default function AeternityLanding() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleEmailClick = () => {
    window.location.href =
      "mailto:aeternity017@gmail.com?subject=Consulta sobre servicios de IA&body=Hola, me interesa conocer más sobre sus servicios de automatización e IA."
  }

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/525535305269?text=Hola, me interesa conocer más sobre los servicios de Æternity",
      "_blank",
    )
  }

  const handleSocialClick = (platform: string) => {
    const socialLinks = {
      instagram: "https://www.instagram.com/aeternity.agency/",
      facebook: "https://www.facebook.com/profile.php?id=61577759225251",
      twitter: "https://x.com/The_Aeternity",
      tiktok: "https://www.tiktok.com/@aeternity_agency",
    }
    window.open(socialLinks[platform as keyof typeof socialLinks], "_blank")
  }

  const handleDemoClick = () => {
    window.location.href = "/demo"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `,
        }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float-delayed"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="animate-pulse">
            <AeternityLogo size={32} />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/servicios"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
              data-translate="services"
            >
              Servicios
            </Link>
            <Link
              href="/chatbots"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
              data-translate="chatbots"
            >
              Chatbots
            </Link>
            <Link
              href="/casos"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
              data-translate="cases"
            >
              Casos de Uso
            </Link>
            <Link
              href="/contacto"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
              data-translate="contact"
            >
              Contacto
            </Link>
            <LanguageSwitcher />
            <Button
              onClick={handleDemoClick}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 animate-glow"
            >
              <Rocket className="w-4 h-4 mr-2" />
              <span data-translate="scheduleDemo">Agenda Demo</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 min-h-screen flex items-center">
        <div className="container mx-auto text-center max-w-6xl relative z-10">
          <div className="animate-fade-in-up">
            <Badge
              variant="outline"
              className="mb-8 text-cyan-400 border-cyan-400/50 bg-cyan-400/10 backdrop-blur-sm hover:bg-cyan-400/20 transition-all duration-300 animate-bounce-slow"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              <span data-translate="digitalTransformation">Transformación Digital Sin Límites</span>
            </Badge>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
              <span
                className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x"
                data-translate="heroTitle1"
              >
                ZERO
              </span>
              <br />
              <span
                className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x-reverse"
                data-translate="heroTitle2"
              >
                LIMITS
              </span>
            </h1>

            <p
              className="text-2xl md:text-3xl text-gray-300 mb-6 leading-relaxed animate-fade-in-up-delayed"
              data-translate="heroSubtitle"
            >
              Automatiza y potencia tu negocio con <span className="text-cyan-400 font-semibold">IA</span>, sin límites.
            </p>

            <p
              className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed-2"
              data-translate="heroDescription"
            >
              Transformamos tus ventas, soporte y operaciones con soluciones de inteligencia artificial personalizadas
              que impulsan el crecimiento exponencial de tu empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up-delayed-3">
              <Button
                size="lg"
                onClick={handleDemoClick}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-10 py-6 text-xl font-semibold border-0 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-110 animate-glow group"
              >
                <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                <span data-translate="scheduleDemoBtn">Agenda una Demo</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-10 py-6 text-xl font-semibold backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 hover:scale-110 group bg-transparent"
              >
                <Link href="/servicios">
                  <Target className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  <span data-translate="viewServices">Ver Servicios</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Quick Benefits Bar */}
      <section className="py-8 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm border-y border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span data-translate="freeDemo">Demo gratuita en 15 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span data-translate="implementation">Implementación en 48 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span data-translate="support">Soporte 24/7</span>
              </div>
            </div>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 animate-glow"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              <span data-translate="whatsappDirect">WhatsApp Directo</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-cyan-400/50">
              <Brain className="w-4 h-4 mr-2" />
              <span data-translate="revolutionaryBenefits">Beneficios Revolucionarios</span>
            </Badge>
            <h2
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              data-translate="whyChoose"
            >
              ¿Por qué elegir Æternity?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-translate="transformBenefits">
              Descubre los beneficios que transformarán tu negocio para siempre
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Zap,
                title: "extremeSpeed",
                titleText: "Velocidad Extrema",
                desc: "extremeSpeedDesc",
                descText: "Automatiza tareas repetitivas para acelerar tus operaciones hasta 10x más rápido",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: Settings,
                title: "totalEfficiency",
                titleText: "Eficiencia Total",
                desc: "totalEfficiencyDesc",
                descText: "Optimiza procesos y elimina errores humanos con sistemas inteligentes y precisos",
                color: "from-green-400 to-emerald-500",
              },
              {
                icon: Clock,
                title: "service247",
                titleText: "Servicio 24/7",
                desc: "service247Desc",
                descText: "Atiende a tus clientes las 24 horas con asistentes virtuales que nunca descansan",
                color: "from-purple-400 to-violet-500",
              },
              {
                icon: DollarSign,
                title: "guaranteedROI",
                titleText: "ROI Garantizado",
                desc: "guaranteedROIDesc",
                descText: "Reduce gastos operativos hasta 70% mientras aumentas la productividad exponencialmente",
                color: "from-cyan-400 to-blue-500",
              },
              {
                icon: Heart,
                title: "premiumExperience",
                titleText: "Experiencia Premium",
                desc: "premiumExperienceDesc",
                descText: "Mejora la satisfacción del cliente con respuestas inmediatas y atención personalizada",
                color: "from-pink-400 to-rose-500",
              },
              {
                icon: Shield,
                title: "advancedSecurity",
                titleText: "Seguridad Avanzada",
                desc: "advancedSecurityDesc",
                descText: "Protección de datos de nivel empresarial con encriptación y cumplimiento normativo",
                color: "from-indigo-400 to-purple-500",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="group bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300"
                    data-translate={benefit.title}
                  >
                    {benefit.titleText}
                  </h3>
                  <p
                    className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed"
                    data-translate={benefit.desc}
                  >
                    {benefit.descText}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              onClick={handleDemoClick}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 animate-glow"
            >
              <Target className="w-5 h-5 mr-2" />
              <span data-translate="viewDemoLive">Ver Demo en Vivo</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900/50 to-purple-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge className="mb-6 bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-pink-400 border-pink-400/50">
              <Users className="w-4 h-4 mr-2" />
              <span data-translate="realTestimonials">Testimonios Reales</span>
            </Badge>
            <h2
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent"
              data-translate="whatClientsSay"
            >
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-translate="realStories">
              Historias reales de empresas que han transformado su negocio con Æternity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                text: "testimonial1",
                textContent:
                  "Gracias a Æternity, nuestro tiempo de respuesta bajó de horas a minutos, y la satisfacción del cliente está por las nubes. ¡Increíble!",
                author: "author1",
                authorName: "Juan Pérez",
                position: "position1",
                positionName: "Director de Operaciones",
                company: "company1",
                companyName: "SolTech",
              },
              {
                text: "testimonial2",
                textContent:
                  "Los asistentes virtuales de Æternity nos ayudaron a aumentar un 45% las ventas online en solo 3 meses. ROI espectacular.",
                author: "author2",
                authorName: "María López",
                position: "position2",
                positionName: "CEO",
                company: "company2",
                companyName: "LegalTrust",
              },
              {
                text: "testimonial3",
                textContent:
                  "La automatización de procesos nos permitió enfocar al equipo en tareas estratégicas. El ROI fue inmediato y sostenible.",
                author: "author3",
                authorName: "Carlos Mendoza",
                position: "position3",
                positionName: "Gerente General",
                company: "company3",
                companyName: "HealthPlus",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="group bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <blockquote
                    className="text-gray-300 mb-6 text-lg leading-relaxed group-hover:text-white transition-colors duration-300"
                    data-translate={testimonial.text}
                  >
                    "{testimonial.textContent}"
                  </blockquote>
                  <div className="border-t border-slate-700 pt-6">
                    <div
                      className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors duration-300"
                      data-translate={testimonial.author}
                    >
                      {testimonial.authorName}
                    </div>
                    <div
                      className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                      data-translate={testimonial.position}
                    >
                      {testimonial.positionName}
                    </div>
                    <div className="text-cyan-400 font-semibold" data-translate={testimonial.company}>
                      {testimonial.companyName}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge className="mb-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-400/50">
              <BarChart3 className="w-4 h-4 mr-2" />
              <span data-translate="provenResults">Resultados Comprobados</span>
            </Badge>
            <h2
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
              data-translate="impactNumbers"
            >
              Números Que Impactan
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-translate="extraordinaryTransformations">
              Nuestros clientes han logrado transformaciones extraordinarias y resultados medibles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                number: "+40%",
                label: "conversionRate",
                labelText: "Tasa de Conversión",
                color: "text-blue-400",
                icon: TrendingUp,
              },
              {
                number: "8×",
                label: "roiDays",
                labelText: "ROI en 60 días",
                color: "text-green-400",
                icon: DollarSign,
              },
              {
                number: "70%",
                label: "responseTime",
                labelText: "Menos tiempo de respuesta",
                color: "text-purple-400",
                icon: Clock,
              },
              {
                number: "+25%",
                label: "clientSatisfaction",
                labelText: "Satisfacción de clientes",
                color: "text-pink-400",
                icon: Heart,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <stat.icon
                    className={`w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  />
                  <div className={`text-5xl font-bold ${stat.color}  mb-2 group-hover:animate-pulse`}>{stat.number}</div>
                  <div
                    className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                    data-translate={stat.label}
                  >
                    {stat.labelText}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={handleDemoClick}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 animate-glow"
            >
              <Rocket className="w-5 h-5 mr-2" />
              <span data-translate="wantResults">Quiero Estos Resultados</span>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              data-translate="readyToEliminate"
            >
              ¿Listo para eliminar los límites de tu negocio?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto" data-translate="joinCompanies">
              Únete a las empresas que ya están transformando sus resultados con Æternity. Agenda una demo personalizada
              y descubre el potencial infinito de tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                onClick={handleDemoClick}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-10 py-6 text-xl font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 animate-glow group"
              >
                <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                <span data-translate="scheduleDemoFree">Agenda Demo GRATIS</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-10 py-6 text-xl font-semibold backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 hover:scale-110 group bg-transparent"
              >
                <Link href="/chatbots">
                  <Bot className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  <span data-translate="viewChatbots">Ver Chatbots</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <AeternityLogo size={40} className="mb-6" />
              <p className="text-gray-400 mb-6 max-w-md" data-translate="footerDescription">
                Transformación digital sin límites. Automatización e IA para impulsar tu negocio hacia el futuro.
              </p>
              <div className="flex space-x-4">
                <Button
                  onClick={() => handleSocialClick("instagram")}
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-gray-400 hover:text-pink-400 hover:border-pink-400 bg-transparent"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => handleSocialClick("facebook")}
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-gray-400 hover:text-blue-400 hover:border-blue-400 bg-transparent"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => handleSocialClick("twitter")}
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-gray-400 hover:text-gray-300 hover:border-gray-300 bg-transparent"
                >
                  <XIcon className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => handleSocialClick("tiktok")}
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-gray-400 hover:text-white hover:border-white bg-transparent"
                >
                  <TikTokIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4" data-translate="pages">
                Páginas
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/servicios"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    data-translate="servicesFooter"
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chatbots"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    data-translate="chatbots"
                  >
                    Chatbots
                  </Link>
                </li>
                <li>
                  <Link
                    href="/casos"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    data-translate="cases"
                  >
                    Casos de Uso
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    data-translate="contactFooter"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4" data-translate="servicesFooter">
                Servicios
              </h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-400" data-translate="salesAutomation">
                    Automatización de Ventas
                  </span>
                </li>
                <li>
                  <span className="text-gray-400" data-translate="intelligentSupport">
                    Soporte Inteligente
                  </span>
                </li>
                <li>
                  <span className="text-gray-400" data-translate="automatedOperations">
                    Operaciones Automatizadas
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Æternity. <span data-translate="rightsReserved">Todos los derechos reservados.</span>
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0" data-translate="tagline">
              Zero Limits, Infinite Possibilities.
            </p>
          </div>
        </div>
      </footer>

      {/* Float Buttons */}
      <div className="fixed bottom-8 left-8 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>
    </div>
  )
}
