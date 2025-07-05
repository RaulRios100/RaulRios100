"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageCircle, Phone, Clock, Send, User, Building, Sparkles, AlertCircle } from "lucide-react"
import { Instagram, Facebook } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import AeternityLogo from "../components/aeternity-logo"
import LiveChatWidget from "../components/live-chat-widget"
import LanguageSwitcher from "../components/language-switcher"

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

export default function ContactoPage() {
  const [emailError, setEmailError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Validación de email en tiempo real
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) {
      setEmailError("")
      return true
    }
    if (!emailRegex.test(email)) {
      setEmailError("*Este correo no es válido")
      return false
    }
    setEmailError("")
    return true
  }

  const handleEmailClick = () => {
    window.location.href =
      "mailto:aeternity017@gmail.com?subject=Consulta desde página de contacto&body=Hola, me interesa conocer más sobre sus servicios."
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validar email antes de enviar
    if (!validateEmail(formData.email)) {
      return
    }

    setIsSubmitting(true)

    // Preparar datos para Formspree
    const emailData = {
      ...formData,
      timestamp: new Date().toLocaleString(),
      subject: `Contacto desde æternity.agency - ${formData.empresa} - ${formData.nombre}`,
      source: "Página de Contacto",
    }

    try {
      // Form ID de Formspree configurado
      const response = await fetch("https://formspree.io/f/xvgrdokd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          nombre: "",
          empresa: "",
          email: "",
          telefono: "",
          mensaje: "",
        })
      } else {
        alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Validar email en tiempo real
    if (name === "email") {
      validateEmail(value)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-slow">
              <Send className="w-12 h-12 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              ¡Mensaje Enviado Exitosamente!
            </h1>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 mb-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Gracias por contactarnos. Hemos recibido tu mensaje y nuestro equipo se pondrá en contacto contigo en
                las próximas 24 horas.
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-400" />
                  <span>Respuesta en 24 horas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span>Enviado a {formData.email}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Directo
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white transition-all duration-300 hover:scale-105"
              >
                <Link href="/">Volver al Inicio</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="">
            <AeternityLogo size={32} />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              Inicio
            </Link>
            <Link href="/servicios" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              Servicios
            </Link>
            <Link href="/chatbots" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              Chatbots
            </Link>
            <Link href="/casos" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              Casos de Uso
            </Link>
            <Link href="/contacto" className="text-cyan-400">
              Contacto
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-400/50">
            <Sparkles className="w-4 h-4 mr-2" />
            Hablemos
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contacta con Nosotros
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ¿Listo para transformar tu negocio? Estamos aquí para ayudarte a dar el siguiente paso hacia la
            automatización inteligente.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Envíanos un Mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Building className="w-4 h-4 inline mr-2" />
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-300 ${
                          emailError ? "border-red-500 focus:border-red-500" : "border-slate-600 focus:border-cyan-500"
                        }`}
                        placeholder="tu@email.com"
                      />
                      {emailError && (
                        <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>{emailError}</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje *</label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300 resize-none"
                      placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || emailError !== ""}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                  <div className="space-y-6">
                    <div
                      className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer"
                      onClick={handleEmailClick}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Email</h4>
                        <p className="text-gray-400">aeternity017@gmail.com</p>
                      </div>
                    </div>

                    <div
                      className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer"
                      onClick={() => window.open("tel:+525535305269", "_self")}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Teléfono</h4>
                        <p className="text-gray-400">+52 55 3530 5269</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Horario</h4>
                        <p className="text-gray-400">24/7 - Siempre disponibles</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Síguenos en Redes</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      onClick={() => handleSocialClick("instagram")}
                      className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 transition-all duration-300 hover:scale-105"
                    >
                      <Instagram className="w-5 h-5 mr-2" />
                      Instagram
                    </Button>
                    <Button
                      onClick={() => handleSocialClick("facebook")}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105"
                    >
                      <Facebook className="w-5 h-5 mr-2" />
                      Facebook
                    </Button>
                    <Button
                      onClick={() => handleSocialClick("twitter")}
                      className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-800 hover:to-slate-700 transition-all duration-300 hover:scale-105"
                    >
                      <XIcon className="w-5 h-5 mr-2" />X (Twitter)
                    </Button>
                    <Button
                      onClick={() => handleSocialClick("tiktok")}
                      className="bg-gradient-to-r from-slate-800 to-black hover:from-slate-900 hover:to-slate-800 transition-all duration-300 hover:scale-105"
                    >
                      <TikTokIcon className="w-5 h-5 mr-2" />
                      TikTok
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border-cyan-500/30 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas ayuda inmediata?</h3>
                  <p className="text-gray-300 mb-6">Nuestro equipo está disponible 24/7 para resolver tus dudas</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={handleWhatsAppClick}
                      className="bg-green-500 hover:bg-green-600 text-white flex-1 transition-all duration-300 hover:scale-105"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat Ahora
                    </Button>
                    <Button
                      onClick={handleEmailClick}
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white flex-1 transition-all duration-300 hover:scale-105"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Email Directo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Float Buttons */}

      {/* Live Chat Widget */}
      <LiveChatWidget />

      {/* Keep only WhatsApp float button */}
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
