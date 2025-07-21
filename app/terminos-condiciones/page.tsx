import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, AlertTriangle, Scale, HandshakeIcon as HandShake, Clock, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function TerminosCondiciones() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />

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
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-4">
                <Scale className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Términos y <span className="text-green-600">Condiciones</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Condiciones generales que rigen el uso de nuestros servicios de rescate de vivienda.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Última actualización: Enero 2024</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <FileText className="h-6 w-6 mr-3" />
                  1. Aceptación de Términos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Al utilizar nuestros servicios, acceder a nuestro sitio web o contactarnos, aceptas estos términos y
                  condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros
                  servicios.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Estos términos constituyen un acuerdo legal entre tú y Rescate Vivienda.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <HandShake className="h-6 w-6 mr-3" />
                  2. Descripción de Servicios
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">Rescate Vivienda ofrece servicios de:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Evaluación gratuita de propiedades con problemas de deuda</li>
                  <li>Asesoría legal y financiera especializada</li>
                  <li>Gestión de liquidación de deudas INFONAVIT y otras instituciones</li>
                  <li>Trámites de regularización documental</li>
                  <li>Compra de propiedades en situaciones complejas</li>
                  <li>Renovación y mejora de inmuebles</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Importante:</strong> Todos nuestros servicios están sujetos a evaluación previa y viabilidad
                  legal.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <AlertTriangle className="h-6 w-6 mr-3" />
                  3. Proceso de Evaluación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">Nuestro proceso incluye:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>
                    <strong>Evaluación inicial:</strong> Análisis gratuito de tu situación
                  </li>
                  <li>
                    <strong>Verificación legal:</strong> Revisión de escrituras y documentos
                  </li>
                  <li>
                    <strong>Validación institucional:</strong> Confirmación con INFONAVIT u otras entidades
                  </li>
                  <li>
                    <strong>Propuesta formal:</strong> Presentación de opciones viables
                  </li>
                  <li>
                    <strong>Acuerdo de intención:</strong> Formalización del compromiso mutuo
                  </li>
                </ul>
                <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Advertencia:</strong> No todos los casos son viables. La aceptación está sujeta a
                    verificación completa de documentos, situación legal y financiera de la propiedad.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Scale className="h-6 w-6 mr-3" />
                  4. Obligaciones del Cliente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">Como cliente, te comprometes a:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Proporcionar información veraz y completa</li>
                  <li>Entregar documentos originales y actualizados</li>
                  <li>Ser el propietario legal del inmueble o tener representación legal válida</li>
                  <li>Cooperar en todos los trámites necesarios</li>
                  <li>Cumplir con los acuerdos firmados</li>
                  <li>Notificar cualquier cambio en tu situación legal o financiera</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Clock className="h-6 w-6 mr-3" />
                  5. Plazos y Tiempos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">Los tiempos estimados son:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>
                    <strong>Evaluación inicial:</strong> 24-48 horas
                  </li>
                  <li>
                    <strong>Verificación legal:</strong> 5-10 días hábiles
                  </li>
                  <li>
                    <strong>Resolución completa:</strong> 15-45 días (según complejidad)
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Nota:</strong> Los plazos pueden variar según la complejidad del caso, disponibilidad de
                  documentos, y respuesta de instituciones gubernamentales o financieras.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Shield className="h-6 w-6 mr-3" />
                  6. Limitaciones y Exclusiones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">Rescate Vivienda no se hace responsable por:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Información falsa o incompleta proporcionada por el cliente</li>
                  <li>Cambios en regulaciones gubernamentales durante el proceso</li>
                  <li>Retrasos causados por terceros (notarios, instituciones, autoridades)</li>
                  <li>Situaciones de fuerza mayor</li>
                  <li>Problemas legales preexistentes no declarados</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <FileText className="h-6 w-6 mr-3" />
                  7. Confidencialidad
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">Mantenemos estricta confidencialidad sobre:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Tu información personal y financiera</li>
                  <li>Detalles de tu situación legal</li>
                  <li>Documentos y datos de la propiedad</li>
                  <li>Estrategias y acuerdos comerciales</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Esta confidencialidad se mantiene incluso después de finalizar nuestros servicios.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Scale className="h-6 w-6 mr-3" />
                  8. Resolución de Disputas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">En caso de disputas:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Primero intentaremos resolverlo mediante diálogo directo</li>
                  <li>Si es necesario, recurriremos a mediación</li>
                  <li>Como último recurso, se someterá a arbitraje o tribunales competentes</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  La jurisdicción aplicable será la de León, Guanajuato, México.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-500/20 bg-green-50 dark:bg-green-950/20">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Contacto para dudas legales:</strong>
                  <br />
                  WhatsApp: +52 4775780721
                  <br />
                  Email: legal@rescatevivienda.mx
                  <br />
                  <br />
                  Estos términos pueden actualizarse periódicamente. Te notificaremos sobre cambios importantes.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <Link href="/">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
