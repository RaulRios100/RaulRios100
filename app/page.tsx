"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Home,
  Shield,
  Users,
  Heart,
  Mail,
  ArrowRight,
  Star,
  Phone,
  FileText,
  HelpCircle,
  AlertTriangle,
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
                href="#casos"
                className="text-sm font-medium hover:text-green-500 transition-colors"
                onClick={scrollToTop}
              >
                Casos de Éxito
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

      {/* Testimonial Section */}
      <section id="casos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Historia de <span className="text-green-600">Éxito</span>
            </h2>
            <p className="text-xl text-muted-foreground">La transformación de Laura: de pesadilla a tranquilidad</p>
          </div>

          <Card className="max-w-4xl mx-auto border-2 border-green-500/20 shadow-2xl">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-2xl font-medium leading-relaxed">
                    "Rescate Vivienda me devolvió la esperanza. En menos de un mes resolvieron todo: pagaron mis deudas,
                    arreglaron los papeles y me dieron efectivo por mi casa."
                  </blockquote>

                  <div className="space-y-2">
                    <div className="font-semibold text-lg">Laura Martínez</div>
                    <div className="text-muted-foreground">León, Guanajuato • 42 años</div>
                    <div className="text-sm text-green-600 font-medium">✅ Caso resuelto en 28 días</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">$0</div>
                      <div className="text-sm text-muted-foreground">Deudas restantes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">100%</div>
                      <div className="text-sm text-muted-foreground">Buró limpio</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">28</div>
                      <div className="text-sm text-muted-foreground">Días total</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src="/images/renovation-examples.png"
                    alt="Ejemplos de renovación - Antes y después"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
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

            <div className="text-center mt-8">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg group"
                onClick={() => {
                  const message = encodeURIComponent(
                    "¡Hola! Quiero evaluar mi caso. Tengo una propiedad con problemas y me gustaría conocer sus servicios.",
                  )
                  window.open(`https://wa.me/524775780721?text=${message}`, "_blank")
                }}
              >
                <FileText className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Evaluar Mi Caso Ahora
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
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
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg bg-transparent"
              onClick={() => {
                scrollToTop()
                const subject = encodeURIComponent("Consulta urgente - Rescate Vivienda")
                const body = encodeURIComponent(
                  "Hola,\n\nNecesito ayuda urgente con mi situación de vivienda INFONAVIT.\n\nGracias.",
                )
                window.open(`mailto:soporte@rescatevivienda.mx?subject=${subject}&body=${body}`, "_blank")
              }}
            >
              <Mail className="h-5 w-5 mr-2" />
              soporte@rescatevivienda.mx
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

          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Rescate Vivienda. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      <FloatingContact />
    </div>
  )
}
