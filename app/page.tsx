"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
  CheckCircle,
  Home,
  Shield,
  Users,
  Heart,
  ArrowRight,
  Phone,
  FileText,
  HelpCircle,
  AlertTriangle,
  Send,
  User,
  DollarSign,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedCounter } from "@/components/animated-counter"
import { FloatingElements } from "@/components/floating-elements"
import { useEffect, useState } from "react"
import { ContactButtons } from "@/components/contact-buttons"
import { SocialLinks } from "@/components/social-links"
import { FloatingContact } from "@/components/floating-contact"

export default function RescateViviendaModern() {
  const [isVisible, setIsVisible] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    ciudad: "",
    tipoPropiedad: "",
    situacionDeuda: "",
    tiempoAbandonada: "",
    valorEstimado: "",
    deudaAproximada: "",
    documentos: "",
    objetivoPrincipal: "",
    comentarios: "",
    aceptaTerminos: false,
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.aceptaTerminos) {
      alert("Debes aceptar los términos y condiciones para continuar.")
      return
    }

    const message = `¡Hola! He completado el cuestionario de evaluación:

📋 *DATOS PERSONALES*
• Nombre: ${formData.nombre}
• Teléfono: ${formData.telefono}
• Ciudad: ${formData.ciudad}

🏠 *INFORMACIÓN DE LA PROPIEDAD*
• Tipo: ${formData.tipoPropiedad}
• Situación de deuda: ${formData.situacionDeuda}
• Tiempo abandonada: ${formData.tiempoAbandonada}
• Valor estimado: ${formData.valorEstimado}
• Deuda aproximada: ${formData.deudaAproximada}

📄 *DOCUMENTACIÓN*
• Estado de documentos: ${formData.documentos}

🎯 *OBJETIVO*
• Objetivo principal: ${formData.objetivoPrincipal}

💬 *COMENTARIOS ADICIONALES*
${formData.comentarios || "Ninguno"}

¿Pueden evaluar mi caso?`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/524775780721?text=${encodedMessage}`, "_blank")
  }

  const faqs = [
    {
      question: "¿Cuánto tiempo toma resolver mi situación?",
      answer:
        "En promedio, resolvemos casos en 15-30 días. El tiempo depende de la complejidad de las deudas y la documentación disponible. Casos simples pueden resolverse en una semana.",
    },
    {
      question: "¿Qué pasa si no tengo escrituras o documentos?",
      answer:
        "No te preocupes. Nosotros nos encargamos de regularizar la documentación. Podemos trabajar con intestados, herencias no regularizadas y problemas de título.",
    },
    {
      question: "¿Ustedes pagan todas mis deudas?",
      answer:
        "Sí, nos hacemos cargo de deudas con INFONAVIT, servicios (luz, agua, predial) y otros adeudos relacionados con la propiedad. Todo queda saldado.",
    },
    {
      question: "¿Cuánto dinero recibiré por mi casa?",
      answer:
        "El monto depende del valor de la propiedad, las deudas pendientes y el estado del inmueble. Hacemos una evaluación gratuita y te damos una oferta transparente.",
    },
    {
      question: "¿Qué pasa si mi casa está ocupada por terceros?",
      answer:
        "Manejamos situaciones de ocupación irregular. Tenemos experiencia en desalojos legales y procesos de recuperación de inmuebles.",
    },
    {
      question: "¿Es seguro trabajar con ustedes?",
      answer:
        "Absolutamente. Todos nuestros procesos son legales y transparentes. Trabajamos con notarios públicos y cumplimos con todas las regulaciones.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <FloatingElements />

      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3" onClick={scrollToTop} style={{ cursor: "pointer" }}>
              <Image
                src="/images/logo-rescate-vivienda.png"
                alt="Rescate Vivienda"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="#servicios"
                className="text-sm font-medium hover:text-green-500 transition-colors"
                onClick={scrollToTop}
              >
                Servicios
              </Link>
              <Link
                href="/nosotros"
                className="text-sm font-medium hover:text-green-500 transition-colors"
                onClick={scrollToTop}
              >
                Nosotros
              </Link>
              <Link
                href="#cuestionario"
                className="text-sm font-medium hover:text-green-500 transition-colors"
                onClick={scrollToTop}
              >
                Evaluar Caso
              </Link>
              <Link
                href="#requisitos"
                className="text-sm font-medium hover:text-green-500 transition-colors"
                onClick={scrollToTop}
              >
                Requisitos
              </Link>
              <Link
                href="#faqs"
                className="text-sm font-medium hover:text-green-500 transition-colors"
                onClick={scrollToTop}
              >
                FAQs
              </Link>
              <Link
                href="#contacto"
                className="text-sm font-medium hover:text-green-500 transition-colors"
                onClick={scrollToTop}
              >
                Contacto
              </Link>
            </nav>
            <ContactButtons variant="default" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-transparent to-green-800/10"></div>

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className={`space-y-8 ${isVisible ? "animate-in slide-in-from-left duration-1000" : "opacity-0"}`}>
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-4 py-2 text-sm font-medium">
                ✨ Especialistas en INFONAVIT
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-green-600">Libérate</span>
                <br />
                del peso de
                <br />
                <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  tu casa
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Rescatamos tu casa, liberamos tu futuro. Soluciones rápidas y transparentes para tus deudas INFONAVIT.
              </p>
            </div>

            <ContactButtons variant="hero" />

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">Casas Rescatadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">
                  <AnimatedCounter end={95} suffix="%" />
                </div>
                <div className="text-sm text-muted-foreground">Éxito Garantizado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">
                  <AnimatedCounter end={24} suffix="h" />
                </div>
                <div className="text-sm text-muted-foreground">Respuesta Rápida</div>
              </div>
            </div>
          </div>

          <div
            className={`relative ${isVisible ? "animate-in slide-in-from-right duration-1000 delay-300" : "opacity-0"}`}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <Image
                src="/images/hero-transformation.png"
                alt="Transformación de casa - Antes y Después"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Tu casa está <span className="text-red-500">abandonada</span>, vandalizada o te ahoga con{" "}
              <span className="text-red-500">deudas INFONAVIT</span>? 😣
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              En México, más de <strong className="text-green-600">200,000 casas</strong> están en el olvido, afectando
              a miles de familias. Nosotros resolvemos tu bronca.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Home, title: "Deudas de Créditos", color: "red" },
              { icon: Shield, title: "Deterioro de Casa", color: "orange" },
              { icon: Users, title: "Historial Crediticio", color: "yellow" },
              { icon: Heart, title: "Futuro Financiero", color: "green" },
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-6 text-center">
                  <div
                    className={`bg-${item.color}-100 dark:bg-${item.color}-900/30 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className={`h-8 w-8 text-${item.color}-600`} />
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transformaciones <span className="text-green-600">Reales</span>
            </h2>
            <p className="text-xl text-muted-foreground">Mira cómo convertimos problemas en soluciones</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Image
                src="/images/before-after-houses.png"
                alt="Antes y después - Transformación de viviendas"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold">De Problema a Solución</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada casa tiene una historia. Nosotros la convertimos en una historia de éxito. Desde propiedades
                abandonadas hasta hogares renovados que recuperan su valor.
              </p>

              <div className="space-y-4">
                {[
                  "Evaluación gratuita en 24 horas",
                  "Liquidación completa de deudas",
                  "Renovación profesional",
                  "Documentación legal en orden",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Qué Hacemos por <span className="text-green-600">Ti</span>?
            </h2>
            <p className="text-xl text-muted-foreground">Soluciones integrales para todos tus problemas de vivienda</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                emoji: "💰",
                title: "Deudas fuera",
                desc: "Nos encargamos de deudas con INFONAVIT, luz, agua o predial.",
                color: "green",
              },
              {
                emoji: "🏠",
                title: "Casas rescatadas",
                desc: "Revivimos propiedades abandonadas o vandalizadas.",
                color: "orange",
              },
              {
                emoji: "📄",
                title: "Papeles en orden",
                desc: "Arreglamos títulos, escrituras y trámites legales.",
                color: "red",
              },
              {
                emoji: "💵",
                title: "Dinero en mano",
                desc: "Te ofrecemos efectivo para dejar atrás tu casa sin broncas.",
                color: "yellow",
              },
              {
                emoji: "✨",
                title: "Buró limpio",
                desc: "Te ayudamos a limpiar tu crédito para nuevos proyectos.",
                color: "purple",
              },
              {
                emoji: "🤝",
                title: "Asesoría completa",
                desc: "Te acompañamos en todo el proceso paso a paso.",
                color: "blue",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-green-500/50"
              >
                <CardHeader>
                  <div className="text-4xl mb-2">{service.emoji}</div>
                  <CardTitle className={`text-${service.color}-600 text-xl`}>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Questionnaire Section */}
      <section id="cuestionario" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              Evalúa tu <span className="text-green-600">Caso</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Completa este cuestionario para recibir una evaluación personalizada de tu situación. Es gratuito y sin
              compromiso.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-2 border-green-500/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-green-600">Cuestionario de Evaluación</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Datos Personales */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center">
                    <User className="h-6 w-6 mr-2 text-green-600" />
                    Datos Personales
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => handleInputChange("nombre", e.target.value)}
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => handleInputChange("telefono", e.target.value)}
                        placeholder="10 dígitos"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ciudad">Ciudad donde está la propiedad *</Label>
                    <Input
                      id="ciudad"
                      value={formData.ciudad}
                      onChange={(e) => handleInputChange("ciudad", e.target.value)}
                      placeholder="Ciudad, Estado"
                      required
                    />
                  </div>
                </div>

                {/* Información de la Propiedad */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center">
                    <Home className="h-6 w-6 mr-2 text-green-600" />
                    Información de la Propiedad
                  </h3>

                  <div className="space-y-4">
                    <Label>Tipo de propiedad *</Label>
                    <RadioGroup
                      value={formData.tipoPropiedad}
                      onValueChange={(value) => handleInputChange("tipoPropiedad", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="casa" id="casa" />
                        <Label htmlFor="casa">Casa</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="departamento" id="departamento" />
                        <Label htmlFor="departamento">Departamento</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="duplex" id="duplex" />
                        <Label htmlFor="duplex">Dúplex</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label>Situación actual de la deuda *</Label>
                    <RadioGroup
                      value={formData.situacionDeuda}
                      onValueChange={(value) => handleInputChange("situacionDeuda", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="al-corriente" id="al-corriente" />
                        <Label htmlFor="al-corriente">Al corriente con pagos</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="atrasado" id="atrasado" />
                        <Label htmlFor="atrasado">Atrasado en pagos</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="demanda" id="demanda" />
                        <Label htmlFor="demanda">En proceso de demanda</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="adjudicado" id="adjudicado" />
                        <Label htmlFor="adjudicado">Ya fue adjudicado</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label>¿Cuánto tiempo lleva deshabitada? *</Label>
                    <RadioGroup
                      value={formData.tiempoAbandonada}
                      onValueChange={(value) => handleInputChange("tiempoAbandonada", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="menos-1-año" id="menos-1-año" />
                        <Label htmlFor="menos-1-año">Menos de 1 año</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-3-años" id="1-3-años" />
                        <Label htmlFor="1-3-años">1 a 3 años</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-5-años" id="3-5-años" />
                        <Label htmlFor="3-5-años">3 a 5 años</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mas-5-años" id="mas-5-años" />
                        <Label htmlFor="mas-5-años">Más de 5 años</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="valorEstimado">Valor estimado de la propiedad</Label>
                      <Input
                        id="valorEstimado"
                        value={formData.valorEstimado}
                        onChange={(e) => handleInputChange("valorEstimado", e.target.value)}
                        placeholder="Ej: $500,000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deudaAproximada">Deuda aproximada</Label>
                      <Input
                        id="deudaAproximada"
                        value={formData.deudaAproximada}
                        onChange={(e) => handleInputChange("deudaAproximada", e.target.value)}
                        placeholder="Ej: $200,000"
                      />
                    </div>
                  </div>
                </div>

                {/* Documentación */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center">
                    <FileText className="h-6 w-6 mr-2 text-green-600" />
                    Documentación
                  </h3>

                  <div className="space-y-4">
                    <Label>Estado de tus documentos *</Label>
                    <RadioGroup
                      value={formData.documentos}
                      onValueChange={(value) => handleInputChange("documentos", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="completos" id="completos" />
                        <Label htmlFor="completos">Tengo escrituras y documentos completos</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="parciales" id="parciales" />
                        <Label htmlFor="parciales">Tengo algunos documentos</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sin-documentos" id="sin-documentos" />
                        <Label htmlFor="sin-documentos">No tengo documentos</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="herencia" id="herencia" />
                        <Label htmlFor="herencia">Es herencia sin regularizar</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {/* Objetivo */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center">
                    <DollarSign className="h-6 w-6 mr-2 text-green-600" />
                    Tu Objetivo
                  </h3>

                  <div className="space-y-4">
                    <Label>¿Cuál es tu objetivo principal? *</Label>
                    <RadioGroup
                      value={formData.objetivoPrincipal}
                      onValueChange={(value) => handleInputChange("objetivoPrincipal", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="vender-rapido" id="vender-rapido" />
                        <Label htmlFor="vender-rapido">Vender rápido y salir de deudas</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="limpiar-buro" id="limpiar-buro" />
                        <Label htmlFor="limpiar-buro">Limpiar mi buró de crédito</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="obtener-efectivo" id="obtener-efectivo" />
                        <Label htmlFor="obtener-efectivo">Obtener efectivo por la propiedad</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="regularizar" id="regularizar" />
                        <Label htmlFor="regularizar">Solo regularizar documentos</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {/* Comentarios */}
                <div className="space-y-2">
                  <Label htmlFor="comentarios">Comentarios adicionales</Label>
                  <Textarea
                    id="comentarios"
                    value={formData.comentarios}
                    onChange={(e) => handleInputChange("comentarios", e.target.value)}
                    placeholder="Cuéntanos más detalles sobre tu situación..."
                    rows={4}
                  />
                </div>

                {/* Términos */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terminos"
                    checked={formData.aceptaTerminos}
                    onCheckedChange={(checked) => handleInputChange("aceptaTerminos", checked as boolean)}
                  />
                  <Label htmlFor="terminos" className="text-sm">
                    Acepto los{" "}
                    <Link href="/terminos-condiciones" className="text-green-600 hover:underline">
                      términos y condiciones
                    </Link>{" "}
                    y la{" "}
                    <Link href="/politica-privacidad" className="text-green-600 hover:underline">
                      política de privacidad
                    </Link>
                    *
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg group"
                >
                  <Send className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Enviar Evaluación por WhatsApp
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requisitos" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <span className="text-green-600">Requisitos</span> para Evaluar tu Caso
            </h2>
            <p className="text-xl text-muted-foreground">
              Antes de comenzar, necesitamos verificar algunos puntos importantes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-green-600">📋 Documentación Básica</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">¿Eres el propietario legal del inmueble?</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">¿Está escriturado y registrado a tu nombre?</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">¿Tienes acceso al estado de cuenta del crédito?</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-orange-600">🏠 Estado de la Propiedad</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">¿Cuánto tiempo lleva deshabitada?</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">¿Ha sido vandalizada o dañada?</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">¿Está ocupada por terceros?</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-600">💼 Historial de Venta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">¿Has intentado vender antes?</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">¿Conoces el valor comercial actual?</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">¿Cuál es tu objetivo principal?</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-purple-600">🤝 Compromiso Legal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">¿Estás dispuesto a firmar acuerdo de intención?</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">¿Puedes compartir documentos legales?</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">¿Entiendes que todo está sujeto a verificación?</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 border-2 border-yellow-500/50 bg-yellow-50 dark:bg-yellow-950/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Nota Importante de Seguridad
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 leading-relaxed">
                      Esta evaluación es únicamente de pre-calificación. Todo proceso de negociación quedará sujeto a
                      revisión legal de escrituras, historial registral, validación con INFONAVIT o institución
                      financiera correspondiente, y verificación de identidad del propietario.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <HelpCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              Preguntas <span className="text-green-600">Frecuentes</span>
            </h2>
            <p className="text-xl text-muted-foreground">Resolvemos tus dudas más comunes</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 hover:border-green-500/50 transition-colors">
                <CardHeader className="cursor-pointer" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <CardTitle className="flex items-center justify-between text-lg">
                    <span>{faq.question}</span>
                    <div className={`transform transition-transform ${openFaq === index ? "rotate-180" : ""}`}>
                      <ArrowRight className="h-5 w-5 text-green-600" />
                    </div>
                  </CardTitle>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">¿No encontraste la respuesta que buscabas?</p>
            <Button
              variant="outline"
              size="lg"
              className="border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-950 bg-transparent"
              onClick={() => {
                const message = encodeURIComponent(
                  "Hola, tengo una pregunta específica sobre sus servicios que no está en las FAQs.",
                )
                window.open(`https://wa.me/524775780721?text=${message}`, "_blank")
              }}
            >
              <HelpCircle className="h-5 w-5 mr-2" />
              Hacer Otra Pregunta
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            ¡Vamos <span className="text-yellow-300">Juntos</span>!
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Tu casa no es un problema, ¡es nuestra misión! Déjanos pelear por ti y convierte ese dolor de cabeza en un
            nuevo capítulo.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold group"
              onClick={() => {
                scrollToTop()
                const message = encodeURIComponent(
                  "¡Hola! Quiero liberar mi casa del peso de las deudas. ¿Pueden ayudarme?",
                )
                window.open(`https://wa.me/524775780721?text=${message}`, "_blank")
              }}
            >
              <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              +52 4775780721
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg opacity-90">
              ⚡ Respuesta en menos de 1 hora • 🏆 +50 casas rescatadas • ✅ 95% de éxito
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-background border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Image
                src="/images/logo-rescate-vivienda.png"
                alt="Rescate Vivienda"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
              <p className="text-muted-foreground">Rescatamos tu casa, liberamos tu futuro.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ContactButtons variant="footer" />
              <div className="mt-6">
                <h5 className="text-sm font-medium mb-3 text-muted-foreground">Síguenos</h5>
                <SocialLinks variant="footer" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Liquidación INFONAVIT</li>
                <li>• Rescate de propiedades</li>
                <li>• Trámites legales</li>
                <li>• Limpieza de buró</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Zonas de Servicio</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• León, Guanajuato</li>
                <li>• Ciudad de México</li>
                <li>• Veracruz</li>
                <li>• Todo México</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-muted-foreground">
                <Link href="/politica-privacidad" className="hover:text-green-600 transition-colors">
                  Política de Privacidad
                </Link>
                <Link href="/terminos-condiciones" className="hover:text-green-600 transition-colors">
                  Términos y Condiciones
                </Link>
              </div>
              <p className="text-muted-foreground text-sm">
                &copy; 2024 Rescate Vivienda. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <FloatingContact />
    </div>
  )
}
