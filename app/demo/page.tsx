"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Rocket,
  CheckCircle,
  ArrowRight,
  Mail,
  MessageCircle,
  Sparkles,
  Clock,
  Users,
  Globe,
  Phone,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import AeternityLogo from "../components/aeternity-logo"
import LiveChatWidget from "../components/live-chat-widget"
import LanguageSwitcher from "../components/language-switcher"

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [emailError, setEmailError] = useState("")
  const [formData, setFormData] = useState({
    // Información Personal
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    cargo: "",
    sitioWeb: "",
    tieneSitioWeb: "",

    // Información del Negocio
    tipoNegocio: "",
    tamanoEmpresa: "",
    industria: "",
    objetivoPrincipal: "",

    // Necesidades del Bot
    tipoBot: "",
    plataformas: [],
    volumenConsultas: "",
    horariosAtencion: "",
    presupuestoMensual: "",

    // Situación Actual
    tieneBot: "",
    problemaPrincipal: "",
    urgencia: "",
    expectativaROI: "",

    // Personalización
    tonoBot: "",
    funcionalidadesEspeciales: [],
  })

  const totalSteps = 4

  // Función para formatear número de teléfono
  const formatPhoneNumber = (value: string) => {
    // Remover todo excepto números
    const phoneNumber = value.replace(/[^\d]/g, "")

    // Formatear según longitud
    if (phoneNumber.length <= 3) {
      return phoneNumber
    } else if (phoneNumber.length <= 6) {
      return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`
    } else if (phoneNumber.length <= 10) {
      return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6)}`
    } else {
      return `+${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 4)} ${phoneNumber.slice(4, 8)} ${phoneNumber.slice(8, 12)}`
    }
  }

  // Validación de email en tiempo real
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) {
      setEmailError("*El email es obligatorio para continuar")
      return false
    }
    if (!emailRegex.test(email)) {
      setEmailError("*Este correo no es válido")
      return false
    }
    setEmailError("")
    return true
  }

  const handleInputChange = (field: string, value: any) => {
    // Formatear teléfono automáticamente
    if (field === "telefono") {
      value = formatPhoneNumber(value)
    }

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    // Validar email en tiempo real
    if (field === "email") {
      validateEmail(value)
    }
  }

  const handleArrayChange = (field: string, value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: checked
        ? [...(prev[field as keyof typeof prev] as string[]), value]
        : (prev[field as keyof typeof prev] as string[]).filter((item) => item !== value),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validar email antes de enviar
    if (!validateEmail(formData.email)) {
      return
    }

    // Validar sitio web obligatorio
    if (formData.tieneSitioWeb === "si" && !formData.sitioWeb) {
      alert("Por favor, ingresa la URL de tu sitio web")
      return
    }

    // Preparar datos para Formspree
    const emailData = {
      ...formData,
      plataformas: formData.plataformas.join(", "),
      funcionalidadesEspeciales: formData.funcionalidadesEspeciales.join(", "),
      timestamp: new Date().toLocaleString(),
      subject: `Nueva Demo Request - ${formData.empresa} - ${formData.nombre}`,
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
        setCurrentStep(5) // Página de éxito
      } else {
        alert("Error al enviar el formulario. Por favor, inténtalo de nuevo.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al enviar el formulario. Por favor, inténtalo de nuevo.")
    }
  }

  const nextStep = () => {
    // Validar email obligatorio en paso 1
    if (currentStep === 1) {
      if (!validateEmail(formData.email)) {
        return
      }
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/525535305269?text=Hola, tengo dudas sobre el cuestionario de demo de Æternity", "_blank")
  }

  if (currentStep === 5) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-slow">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              ¡Perfecto! Tu Demo Está en Camino
            </h1>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 mb-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-green-400" />
                <span className="text-xl font-semibold text-white">Tu demo llegará en menos de 24 horas</span>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Hemos recibido toda tu información y nuestro equipo ya está trabajando en crear una demo personalizada
                específicamente para{" "}
                <span className="text-green-400 font-semibold">{formData.empresa || "tu negocio"}</span>.
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Demo personalizada lista</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Enviada a {formData.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Configuración específica</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Listo para implementar</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">¿Tienes alguna duda mientras tanto?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp: +52 55 353 5269
                </Button>
                <Button
                  onClick={() => (window.location.href = "mailto:aeternity017@gmail.com")}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  aeternity017@gmail.com
                </Button>
              </div>
            </div>

            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link href="/">
                <ArrowRight className="w-5 h-5 mr-2" />
                Volver al Inicio
              </Link>
            </Button>
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
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            <AeternityLogo />
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-400/50">
              <Rocket className="w-4 h-4 mr-2" />
              <span data-translate="personalizedDemo">Demo Personalizada</span>
            </Badge>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Cuéntanos sobre tu Negocio
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Con esta información crearemos una demo personalizada específicamente para tus necesidades
            </p>

            {/* Progress Bar */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      step <= currentStep
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                        : "bg-slate-700 text-gray-400"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 4 && (
                    <div
                      className={`w-12 h-1 mx-2 transition-all duration-300 ${
                        step < currentStep ? "bg-gradient-to-r from-cyan-500 to-purple-500" : "bg-slate-700"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* Paso 1: Información Personal */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fade-in-up">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-white mb-2">Información de Contacto</h2>
                      <p className="text-gray-400">Para enviarte tu demo personalizada</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Nombre Completo *</label>
                        <input
                          type="text"
                          required
                          value={formData.nombre}
                          onChange={(e) => handleInputChange("nombre", e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                          placeholder="Tu nombre completo"
                          autoComplete="name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email Empresarial *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-300 ${
                            emailError
                              ? "border-red-500 focus:border-red-500"
                              : "border-slate-600 focus:border-cyan-500"
                          }`}
                          placeholder="tu@empresa.com"
                          autoComplete="email"
                        />
                        {emailError && (
                          <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            <span>{emailError}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Teléfono/WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={formData.telefono}
                          onChange={(e) => handleInputChange("telefono", e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                          placeholder="+52 55 1234 5678"
                          autoComplete="tel"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Empresa *</label>
                        <input
                          type="text"
                          required
                          value={formData.empresa}
                          onChange={(e) => handleInputChange("empresa", e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                          placeholder="Nombre de tu empresa"
                          autoComplete="organization"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Tu Cargo *</label>
                        <select
                          required
                          value={formData.cargo}
                          onChange={(e) => handleInputChange("cargo", e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                        >
                          <option value="">Selecciona tu cargo</option>
                          <option value="CEO/Fundador">CEO/Fundador</option>
                          <option value="Director General">Director General</option>
                          <option value="Director de Marketing">Director de Marketing</option>
                          <option value="Director de Ventas">Director de Ventas</option>
                          <option value="Gerente">Gerente</option>
                          <option value="Emprendedor">Emprendedor</option>
                          <option value="Otro">Otro</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">¿Tienes sitio web? *</label>
                        <select
                          required
                          value={formData.tieneSitioWeb}
                          onChange={(e) => handleInputChange("tieneSitioWeb", e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                        >
                          <option value="">Selecciona una opción</option>
                          <option value="si">Sí, tengo sitio web</option>
                          <option value="no">No tengo sitio web</option>
                        </select>
                      </div>
                    </div>

                    {/* Campo condicional para URL del sitio web */}
                    {formData.tieneSitioWeb === "si" && (
                      <div className="animate-fade-in-up">
                        <label className="block text-sm font-medium text-gray-300 mb-2">URL de tu Sitio Web *</label>
                        <div className="relative">
                          <input
                            type="url"
                            required
                            value={formData.sitioWeb}
                            onChange={(e) => handleInputChange("sitioWeb", e.target.value)}
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                            placeholder="https://tuempresa.com"
                            autoComplete="url"
                          />
                          <Globe className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Nos ayuda a entender mejor tu negocio y personalizar la demo
                        </p>
                      </div>
                    )}

                    {formData.tieneSitioWeb === "no" && (
                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 animate-fade-in-up">
                        <p className="text-blue-300 text-sm">
                          <strong>¡Perfecto!</strong> También podemos ayudarte a crear un sitio web con chatbot
                          integrado. Lo incluiremos en tu demo personalizada.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Resto de los pasos permanecen igual... */}
                {/* Paso 2: Información del Negocio */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fade-in-up">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-white mb-2">Sobre tu Negocio</h2>
                      <p className="text-gray-400">Para personalizar tu solución</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Industria/Sector *</label>
                        <select
                          required
                          value={formData.industria}
                          onChange={(e) => handleInputChange("industria", e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                        >
                          <option value="">Selecciona tu industria</option>
                          <option value="E-commerce">E-commerce</option>
                          <option value="Servicios Profesionales">Servicios Profesionales</option>
                          <option value="Salud">Salud</option>
                          <option value="Educación">Educación</option>
                          <option value="Inmobiliaria">Inmobiliaria</option>
                          <option value="Tecnología">Tecnología</option>
                          <option value="Restaurantes/Comida">Restaurantes/Comida</option>
                          <option value="Fitness/Bienestar">Fitness/Bienestar</option>
                          <option value="Legal">Legal</option>
                          <option value="Energía Solar">Energía Solar</option>
                          <option value="Otro">Otro</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Tamaño de la Empresa *</label>
                        <select
                          required
                          value={formData.tamanoEmpresa}
                          onChange={(e) => handleInputChange("tamanoEmpresa", e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                        >
                          <option value="">Selecciona el tamaño</option>
                          <option value="Solo yo">Solo yo</option>
                          <option value="2-10 empleados">2-10 empleados</option>
                          <option value="11-50 empleados">11-50 empleados</option>
                          <option value="51-200 empleados">51-200 empleados</option>
                          <option value="200+ empleados">200+ empleados</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          ¿Cuál es tu objetivo principal con el bot? *
                        </label>
                        <select
                          required
                          value={formData.objetivoPrincipal}
                          onChange={(e) => handleInputChange("objetivoPrincipal", e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                        >
                          <option value="">Selecciona tu objetivo</option>
                          <option value="Generar más leads/ventas">Generar más leads/ventas</option>
                          <option value="Mejorar atención al cliente">Mejorar atención al cliente</option>
                          <option value="Automatizar procesos">Automatizar procesos</option>
                          <option value="Reducir costos operativos">Reducir costos de personal</option>
                          <option value="Atender 24/7">Atender 24/7</option>
                          <option value="Calificar leads automáticamente">Calificar leads automáticamente</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          ¿Cuántas consultas recibes aproximadamente por día? *
                        </label>
                        <select
                          required
                          value={formData.volumenConsultas}
                          onChange={(e) => handleInputChange("volumenConsultas", e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                        >
                          <option value="">Selecciona el volumen</option>
                          <option value="1-10 consultas">1-10 consultas</option>
                          <option value="11-50 consultas">11-50 consultas</option>
                          <option value="51-100 consultas">51-100 consultas</option>
                          <option value="100+ consultas">100+ consultas</option>
                          <option value="No estoy seguro">No estoy seguro</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Paso 3: Necesidades del Bot */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fade-in-up">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-white mb-2">Configuración del Bot</h2>
                      <p className="text-gray-400">Personalicemos tu asistente virtual</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          ¿Qué tipo de bot necesitas? *
                        </label>
                        <div className="grid md:grid-cols-2 gap-4">
                          {[
                            { value: "ventas", label: "Bot de Ventas", desc: "Genera leads y cierra ventas" },
                            { value: "soporte", label: "Bot de Soporte", desc: "Atiende consultas y problemas" },
                            { value: "mixto", label: "Mixto", desc: "Ventas + Soporte combinado" },
                            { value: "personalizado", label: "Personalizado", desc: "Funciones específicas" },
                          ].map((option) => (
                            <div
                              key={option.value}
                              className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                                formData.tipoBot === option.value
                                  ? "border-cyan-500 bg-cyan-500/10"
                                  : "border-slate-600 hover:border-slate-500"
                              }`}
                              onClick={() => handleInputChange("tipoBot", option.value)}
                            >
                              <div className="font-semibold text-white">{option.label}</div>
                              <div className="text-sm text-gray-400">{option.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          ¿En qué plataformas quieres el bot? * (Puedes seleccionar varias)
                        </label>
                        <div className="grid md:grid-cols-3 gap-4">
                          {[
                            { value: "sitio-web", label: "Sitio Web", icon: Globe },
                            { value: "whatsapp", label: "WhatsApp", icon: MessageCircle },
                            { value: "instagram", label: "Instagram", icon: Users },
                            { value: "facebook", label: "Facebook", icon: Users },
                            { value: "sms", label: "SMS", icon: Phone },
                            { value: "email", label: "Email", icon: Mail },
                          ].map((platform) => (
                            <div
                              key={platform.value}
                              className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-3 ${
                                formData.plataformas.includes(platform.value)
                                  ? "border-cyan-500 bg-cyan-500/10"
                                  : "border-slate-600 hover:border-slate-500"
                              }`}
                              onClick={() =>
                                handleArrayChange(
                                  "plataformas",
                                  platform.value,
                                  !formData.plataformas.includes(platform.value),
                                )
                              }
                            >
                              <platform.icon className="w-5 h-5 text-cyan-400" />
                              <span className="text-white font-medium">{platform.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Presupuesto Mensual Estimado *
                          </label>
                          <select
                            required
                            value={formData.presupuestoMensual}
                            onChange={(e) => handleInputChange("presupuestoMensual", e.target.value)}
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                          >
                            <option value="">Selecciona tu presupuesto</option>
                            <option value="$300-800">$300 - $800 USD</option>
                            <option value="$800-1500">$800 - $1,500 USD</option>
                            <option value="$1500-3000">$1,500 - $3,000 USD</option>
                            <option value="$3000+">$3,000+ USD</option>
                            <option value="Necesito cotización">Necesito cotización personalizada</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            ¿Qué tan urgente es implementar esto? *
                          </label>
                          <select
                            required
                            value={formData.urgencia}
                            onChange={(e) => handleInputChange("urgencia", e.target.value)}
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                          >
                            <option value="">Selecciona urgencia</option>
                            <option value="Esta semana">Esta semana</option>
                            <option value="Este mes">Este mes</option>
                            <option value="En 2-3 meses">En 2-3 meses</option>
                            <option value="Solo explorando">Solo explorando</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Paso 4: Personalización Final */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-fade-in-up">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-white mb-2">Personalización Final</h2>
                      <p className="text-gray-400">Los últimos detalles para tu demo perfecta</p>
                    </div>

                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            ¿Ya tienes algún bot o chatbot? *
                          </label>
                          <select
                            required
                            value={formData.tieneBot}
                            onChange={(e) => handleInputChange("tieneBot", e.target.value)}
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                          >
                            <option value="">Selecciona una opción</option>
                            <option value="No, es mi primer bot">No, es mi primer bot</option>
                            <option value="Sí, pero no funciona bien">Sí, pero no funciona bien</option>
                            <option value="Sí, pero quiero uno mejor">Sí, pero quiero uno mejor</option>
                            <option value="Tengo varios">Tengo varios</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Tono/Personalidad del Bot *
                          </label>
                          <select
                            required
                            value={formData.tonoBot}
                            onChange={(e) => handleInputChange("tonoBot", e.target.value)}
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                          >
                            <option value="">Selecciona el tono</option>
                            <option value="Profesional y formal">Profesional y formal</option>
                            <option value="Amigable y cercano">Amigable y cercano</option>
                            <option value="Divertido y casual">Divertido y casual</option>
                            <option value="Experto y técnico">Experto y técnico</option>
                            <option value="Personalizado">Personalizado</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          ¿Cuál es tu mayor problema actual con la atención al cliente?
                        </label>
                        <textarea
                          value={formData.problemaPrincipal}
                          onChange={(e) => handleInputChange("problemaPrincipal", e.target.value)}
                          rows={4}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300 resize-none"
                          placeholder="Ej: No podemos atender fuera de horario, perdemos muchos leads, respuestas muy lentas..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          Funcionalidades especiales que te interesan (Opcional)
                        </label>
                        <div className="grid md:grid-cols-2 gap-4">
                          {[
                            "Integración con CRM",
                            "Pagos automáticos",
                            "Citas/Reservas",
                            "Catálogo de productos",
                            "Seguimiento de pedidos",
                            "Encuestas de satisfacción",
                            "Múltiples idiomas",
                            "Analytics avanzados",
                          ].map((funcionalidad) => (
                            <div
                              key={funcionalidad}
                              className={`p-3 border rounded-lg cursor-pointer transition-all duration-300 ${
                                formData.funcionalidadesEspeciales.includes(funcionalidad)
                                  ? "border-cyan-500 bg-cyan-500/10"
                                  : "border-slate-600 hover:border-slate-500"
                              }`}
                              onClick={() =>
                                handleArrayChange(
                                  "funcionalidadesEspeciales",
                                  funcionalidad,
                                  !formData.funcionalidadesEspeciales.includes(funcionalidad),
                                )
                              }
                            >
                              <span className="text-white text-sm">{funcionalidad}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          ¿Qué ROI/resultado esperas obtener? *
                        </label>
                        <select
                          required
                          value={formData.expectativaROI}
                          onChange={(e) => handleInputChange("expectativaROI", e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                        >
                          <option value="">Selecciona tu expectativa</option>
                          <option value="Más leads/ventas">Más leads/ventas</option>
                          <option value="Reducir costos de personal">Reducir costos de personal</option>
                          <option value="Mejor experiencia del cliente">Mejor experiencia del cliente</option>
                          <option value="Atención 24/7">Atención 24/7</option>
                          <option value="Automatizar procesos">Automatizar procesos</option>
                          <option value="Todo lo anterior">Todo lo anterior</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-12 pt-8 border-t border-slate-700">
                  <Button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="bg-slate-700 hover:bg-slate-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Anterior
                  </Button>

                  {currentStep < totalSteps ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      disabled={currentStep === 1 && emailError !== ""}
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Siguiente
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={emailError !== ""}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 font-bold animate-pulse-glow disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Rocket className="w-5 h-5 mr-2" />
                      Crear Mi Demo
                      <Sparkles className="w-5 h-5 ml-2" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </form>

          {/* Help Section */}
          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">¿Tienes dudas mientras completas el formulario?</p>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Ayuda por WhatsApp
            </Button>
          </div>
        </div>
      </div>
      <LiveChatWidget />
    </div>
  )
}
