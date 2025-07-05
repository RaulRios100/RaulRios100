"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  Eye,
  Heart,
  Users,
  TrendingUp,
  Shield,
  CheckCircle,
  Home,
  ArrowRight,
  BarChart3,
  MapPin,
  DollarSign,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { FloatingElements } from "@/components/floating-elements"
import { ContactButtons } from "@/components/contact-buttons"
import { SocialLinks } from "@/components/social-links"
import { FloatingContact } from "@/components/floating-contact"
import { AnimatedCounter } from "@/components/animated-counter"

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <FloatingElements />

      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logo-rescate-vivienda.png"
                alt="Rescate Vivienda"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-sm font-medium hover:text-green-500 transition-colors">
                Inicio
              </Link>
              <Link href="/#servicios" className="text-sm font-medium hover:text-green-500 transition-colors">
                Servicios
              </Link>
              <Link href="/nosotros" className="text-sm font-medium text-green-500">
                Nosotros
              </Link>
              <Link href="/#contacto" className="text-sm font-medium hover:text-green-500 transition-colors">
                Contacto
              </Link>
            </nav>
            <ContactButtons variant="default" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-transparent to-green-800/10"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-4 py-2 text-sm font-medium mb-6">
            ✨ Conoce Nuestra Historia
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Somos <span className="text-green-600">Rescate Vivienda</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            La empresa que se la juega por los mexicanos atrapados con casas que son más problema que hogar. Desde el
            Estado de México hasta cualquier rincón del país.
          </p>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">¿Quiénes Somos?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rescate Vivienda es la empresa que se la juega por los mexicanos atrapados con casas que son más
                problema que hogar. Nuestro equipo de expertos en bienes raíces y finanzas le mete turbo a tus deudas,
                casas destruidas y trámites legales.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No mareamos con promesas vacías; actuamos para que vuelvas a dormir tranquilo. Somos especialistas en
                resolver los problemas más complejos relacionados con INFONAVIT y propiedades abandonadas.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">
                    <AnimatedCounter end={200} suffix="K+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Casas en el Olvido</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">66%</div>
                  <div className="text-sm text-muted-foreground">Hipotecas INFONAVIT</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/solutions-banner.png"
                alt="Nuestro equipo trabajando"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Análisis de la Empresa */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nuestra <span className="text-green-600">Especialización</span>
            </h2>
            <p className="text-xl text-muted-foreground">Soluciones integrales para problemas complejos de vivienda</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Gestión de Deudas",
                desc: "Pago o reestructuración de deudas de servicios (agua, luz, predial) o créditos hipotecarios.",
                color: "green",
              },
              {
                icon: Home,
                title: "Solución a Abandono",
                desc: "Recuperación de propiedades abandonadas o vandalizadas que afectan el valor del inmueble.",
                color: "orange",
              },
              {
                icon: Shield,
                title: "Gestión Documental",
                desc: "Regularización de documentos (títulos, escrituras, registros en el Registro Público).",
                color: "red",
              },
              {
                icon: TrendingUp,
                title: "Acuerdos Financieros",
                desc: "Ofrecemos efectivo a propietarios para liberar la propiedad, quitando la carga de deudas.",
                color: "yellow",
              },
              {
                icon: BarChart3,
                title: "Limpieza de Buró",
                desc: "Ayudamos a resolver problemas crediticios que impiden acceder a nuevos créditos.",
                color: "purple",
              },
              {
                icon: Users,
                title: "Asesoría Integral",
                desc: "Acompañamiento completo en todo el proceso de liberación de tu propiedad.",
                color: "blue",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div
                    className={`bg-${service.color}-100 dark:bg-${service.color}-900/30 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className={`h-6 w-6 text-${service.color}-600`} />
                  </div>
                  <CardTitle className={`text-${service.color}-600`}>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Público Objetivo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nuestro <span className="text-green-600">Público</span>
            </h2>
            <p className="text-xl text-muted-foreground">Conocemos perfectamente a quién servimos</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 text-green-600 mr-2" />
                    Perfil Demográfico
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="font-semibold text-green-600">Edad</div>
                      <div className="text-muted-foreground">30-55 años</div>
                    </div>
                    <div>
                      <div className="font-semibold text-green-600">Ingresos</div>
                      <div className="text-muted-foreground">$8K-$20K MXN</div>
                    </div>
                    <div>
                      <div className="font-semibold text-green-600">Empleo</div>
                      <div className="text-muted-foreground">Trabajadores formales</div>
                    </div>
                    <div>
                      <div className="font-semibold text-green-600">Afiliación</div>
                      <div className="text-muted-foreground">IMSS</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-6 w-6 text-orange-600 mr-2" />
                    Ubicaciones Clave
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Estado de México (Zumpango)</span>
                      <Badge variant="outline">Alta prioridad</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Ciudad de México</span>
                      <Badge variant="outline">Zona activa</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Tijuana, Ciudad Juárez</span>
                      <Badge variant="outline">Expansión</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Guadalajara, Monterrey</span>
                      <Badge variant="outline">Periferias</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Problemas Principales que Resolvemos</h3>
              <div className="space-y-4">
                {[
                  "Deudas con INFONAVIT o servicios públicos que afectan el buró de crédito",
                  "Casas abandonadas o vandalizadas que deprecian su valor",
                  "Dificultad para vender o regularizar propiedades por trámites legales",
                  "Estrés emocional por problemas financieros y crediticios",
                ].map((problem, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nuestros <span className="text-green-600">Fundamentos</span>
            </h2>
            <p className="text-xl text-muted-foreground">Los principios que guían nuestro trabajo</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-2 border-green-500/20 hover:border-green-500/50 transition-colors">
              <CardHeader>
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-green-600">Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  ¡Sacarte del hoyo! Rescate Vivienda existe para liberar a los mexicanos de deudas y casas que los
                  atan, con soluciones rápidas, claras y con puro corazón, para que recuperen su paz y su futuro.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-orange-500/20 hover:border-orange-500/50 transition-colors">
              <CardHeader>
                <Eye className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-orange-600">Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ser los chidos que cambian el juego en México, rescatando casas y sueños, y convirtiendo problemas en
                  historias de éxito para miles de familias trabajadoras.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-red-500/20 hover:border-red-500/50 transition-colors">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-red-600">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-left space-y-3">
                  <div>
                    <strong className="text-green-600">Empatía:</strong>
                    <span className="text-muted-foreground">
                      {" "}
                      Sabemos lo que es batallar y te acompañamos con respeto.
                    </span>
                  </div>
                  <div>
                    <strong className="text-orange-600">Transparencia:</strong>
                    <span className="text-muted-foreground"> Sin letras chiquitas, te decimos cómo está el rollo.</span>
                  </div>
                  <div>
                    <strong className="text-red-600">Acción:</strong>
                    <span className="text-muted-foreground"> No prometemos, hacemos. Resultados rápidos y reales.</span>
                  </div>
                  <div>
                    <strong className="text-yellow-600">Compromiso:</strong>
                    <span className="text-muted-foreground"> Tu tranquilidad es nuestra meta.</span>
                  </div>
                  <div>
                    <strong className="text-purple-600">Comunidad:</strong>
                    <span className="text-muted-foreground"> Rescatamos casas para mejorar barrios.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Por Qué Somos Diferentes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Por Qué Somos <span className="text-green-600">Diferentes</span>?
            </h2>
            <p className="text-xl text-muted-foreground">Nuestras ventajas competitivas que nos hacen únicos</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Maestros del INFONAVIT",
                desc: "Conocemos cada detalle del INFONAVIT, que maneja 6 de cada 10 hipotecas en México.",
                icon: "🎯",
              },
              {
                title: "Todo en uno",
                desc: "Pagamos deudas, arreglamos papeles, rescatamos casas y te damos efectivo para cerrar el capítulo.",
                icon: "🔧",
              },
              {
                title: "Zonas clave",
                desc: "Atacamos donde más duele, como Zumpango, Tijuana y CDMX, donde el abandono es un problemón.",
                icon: "📍",
              },
              {
                title: "Corazón mexicano",
                desc: "Te tratamos como familia, con soluciones claras y sin rodeos.",
                icon: "❤️",
              },
              {
                title: "Resultados rápidos",
                desc: "Resolvemos rápido para que sigas adelante sin complicaciones.",
                icon: "⚡",
              },
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <CardTitle className="text-green-600">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para <span className="text-yellow-300">Darle la Vuelta</span>?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            En Rescate Vivienda, tu casa no es un problema, ¡es nuestra misión! Déjanos pelear por ti y convierte ese
            dolor de cabeza en un nuevo capítulo.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold group"
              onClick={() => {
                const message = encodeURIComponent(
                  "¡Hola! Leí sobre su empresa y me interesa conocer más sobre sus servicios. ¿Pueden ayudarme?",
                )
                window.open(`https://wa.me/524775780721?text=${message}`, "_blank")
              }}
            >
              Hablar con un Experto
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg bg-transparent"
              asChild
            >
              <Link href="/">Volver al Inicio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-16">
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
              <h4 className="text-lg font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-green-500 transition-colors">
                    • Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/#servicios" className="hover:text-green-500 transition-colors">
                    • Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros" className="hover:text-green-500 transition-colors">
                    • Nosotros
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Zonas de Servicio</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Zumpango, Estado de México</li>
                <li>• Ciudad de México</li>
                <li>• Tijuana, Ciudad Juárez</li>
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
