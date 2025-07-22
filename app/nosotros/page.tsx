import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, Users, Award, Heart, Shield, Target, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactButtons } from "@/components/contact-buttons"

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />

      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-md">
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
            <div className="flex items-center space-x-4">
              <ContactButtons variant="default" />
              <Link href="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600/10 via-transparent to-green-800/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-4 py-2 text-sm font-medium mb-6">
              Conoce Nuestro Equipo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Somos <span className="text-green-600">Rescate Vivienda</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Un equipo de expertos dedicados a transformar problemas de vivienda en soluciones reales. Más que un
              servicio, somos tu aliado en el camino hacia la libertad financiera.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                  <h2 className="text-3xl font-bold">Nuestra Misión</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Rescatar propiedades abandonadas y liberar a las familias mexicanas del peso de las deudas INFONAVIT,
                  ofreciendo soluciones rápidas, transparentes y justas que les permitan comenzar de nuevo.
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                  <h2 className="text-3xl font-bold">Nuestra Visión</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ser la empresa líder en México en rescate de viviendas, reconocida por transformar vidas y comunidades
                  a través de soluciones innovadoras en el sector inmobiliario.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl blur-xl opacity-20"></div>
              <Image
                src="/images/solutions-banner.png"
                alt="Equipo Rescate Vivienda"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros <span className="text-green-600">Valores</span>
            </h2>
            <p className="text-xl text-muted-foreground">Los principios que guían cada una de nuestras acciones</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Transparencia",
                desc: "Procesos claros y honestos. Sin letra pequeña ni sorpresas.",
                color: "blue",
              },
              {
                icon: Heart,
                title: "Empatía",
                desc: "Entendemos tu situación y trabajamos con sensibilidad humana.",
                color: "red",
              },
              {
                icon: CheckCircle,
                title: "Compromiso",
                desc: "Cumplimos lo que prometemos, en los tiempos acordados.",
                color: "green",
              },
              {
                icon: Users,
                title: "Profesionalismo",
                desc: "Equipo experto con años de experiencia en el sector.",
                color: "purple",
              },
              {
                icon: Award,
                title: "Excelencia",
                desc: "Buscamos la perfección en cada proceso y resultado.",
                color: "yellow",
              },
              {
                icon: Target,
                title: "Resultados",
                desc: "Nos enfocamos en soluciones reales y efectivas.",
                color: "orange",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-green-500/50"
              >
                <CardHeader className="text-center">
                  <div
                    className={`bg-${value.color}-100 dark:bg-${value.color}-900/30 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <value.icon className={`h-8 w-8 text-${value.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros <span className="text-green-600">Resultados</span>
            </h2>
            <p className="text-xl text-muted-foreground">Números que hablan de nuestro compromiso</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Casas Rescatadas", desc: "Propiedades transformadas exitosamente" },
              { number: "95%", label: "Tasa de Éxito", desc: "Casos resueltos satisfactoriamente" },
              { number: "24h", label: "Tiempo de Respuesta", desc: "Evaluación inicial gratuita" },
              { number: "100%", label: "Procesos Legales", desc: "Transparencia y legalidad garantizada" },
            ].map((stat, index) => (
              <Card key={index} className="text-center border-2 border-green-500/20">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Por Qué Elegirnos?</h2>
            <p className="text-xl text-muted-foreground">Lo que nos hace diferentes en el mercado</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "Experiencia Especializada",
                desc: "Años de experiencia específica en casos INFONAVIT y propiedades abandonadas.",
              },
              {
                title: "Proceso Integral",
                desc: "Desde la evaluación hasta la escrituración, manejamos todo el proceso.",
              },
              {
                title: "Sin Costos Ocultos",
                desc: "Evaluación gratuita y costos transparentes desde el primer día.",
              },
              {
                title: "Rapidez Comprobada",
                desc: "Resolvemos casos en 15-30 días, mucho más rápido que la competencia.",
              },
              {
                title: "Atención Personalizada",
                desc: "Cada caso es único y recibe atención especializada de nuestro equipo.",
              },
              {
                title: "Respaldo Legal",
                desc: "Todos nuestros procesos cuentan con respaldo notarial y legal completo.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para Comenzar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestro equipo está esperando para ayudarte. Contáctanos hoy y da el primer paso hacia tu libertad
            financiera.
          </p>
          <ContactButtons variant="hero" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <Link href="/">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  )
}
