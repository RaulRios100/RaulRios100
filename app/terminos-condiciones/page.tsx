import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Scale, AlertTriangle, FileText, Shield, Users, XCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function TerminosCondiciones() {
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
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-4">
                <Scale className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Términos y <span className="text-green-600">Condiciones de Uso</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">de www.rescatevivienda.com</p>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Última actualización: 21 de enero de 2025</p>
            </div>
          </div>

          {/* Introduction */}
          <Card className="mb-8 border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Bienvenido</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Bienvenido al sitio web www.rescatevivienda.com (en adelante, "el Sitio"), operado por Rescate
                    Vivienda S.A. de C.V., con domicilio en México. Al acceder o utilizar el Sitio, usted acepta cumplir
                    con estos Términos y Condiciones (en adelante, "Términos"). Si no está de acuerdo con ellos, por
                    favor no utilice el Sitio.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Estos Términos regulan el uso del Sitio y los servicios ofrecidos. Nos reservamos el derecho de
                    modificarlos en cualquier momento, notificándolo a través del Sitio. El uso continuado del Sitio
                    después de cualquier modificación implica su aceptación de los cambios.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Descripción de Servicios */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <FileText className="h-6 w-6 mr-3 text-green-600" />
                  1. Descripción de los Servicios
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  En www.rescatevivienda.com ofrecemos servicios de asesoría y gestión para ayudar a propietarios de
                  viviendas con deudas relacionadas con créditos hipotecarios de Infonavit, Fovissste u otras
                  instituciones bancarias. Nuestros servicios incluyen:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• Asesoría para la resolución de deudas pendientes.</li>
                  <li>
                    • Gestión de trámites relacionados con viviendas abandonadas, en estado de vandalismo o con
                    problemas de pago.
                  </li>
                  <li>• Remodelación de propiedades para mejorar su estado.</li>
                  <li>• Búsqueda de posibles compradores para las propiedades.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Estos servicios se proporcionan con el objetivo de asistir al usuario en la medida de nuestras
                  posibilidades, incluyendo la gestión de gastos como agua, luz y otros servicios públicos asociados.
                  Sin embargo,{" "}
                  <strong>
                    no garantizamos ni prometemos resultados específicos, resolución de deudas, tiempos de procesamiento
                    ni éxito en la venta o remodelación
                  </strong>
                  . Los procesos dependen de factores externos como decisiones de instituciones financieras, autoridades
                  gubernamentales o condiciones del mercado, que están fuera de nuestro control. Actuamos como
                  facilitadores y no asumimos responsabilidad por retrasos, denegaciones o cualquier outcome negativo.
                </p>
              </CardContent>
            </Card>

            {/* Obligaciones del Usuario */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Users className="h-6 w-6 mr-3 text-green-600" />
                  2. Obligaciones del Usuario
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Al utilizar el Sitio y nuestros servicios, usted se compromete a:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>
                    • Proporcionar información veraz, completa y actualizada sobre su situación (deudas, propiedad,
                    etc.).
                  </li>
                  <li>
                    • Cumplir con todas las leyes aplicables en México, incluyendo normativas de Infonavit, Fovissste y
                    protección al consumidor.
                  </li>
                  <li>• No utilizar el Sitio para fines ilegales, fraudulentos o que violen derechos de terceros.</li>
                  <li>
                    • Asumir todos los costos asociados con los trámites, remodelaciones o gestiones (ej. pagos a
                    terceros, materiales).
                  </li>
                  <li>
                    • Autorizar expresamente la gestión de sus datos y trámites en su nombre, entendiendo que no hay
                    garantías.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitación de Responsabilidad */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Shield className="h-6 w-6 mr-3 text-green-600" />
                  3. Limitación de Responsabilidad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  En la medida permitida por la ley mexicana, www.rescatevivienda.com y sus representantes no serán
                  responsables por daños directos, indirectos, incidentales o consecuentes derivados del uso del Sitio o
                  servicios, incluyendo pero no limitado a pérdidas financieras, retrasos en trámites o fracaso en la
                  resolución de deudas. No ofrecemos garantías expresas o implícitas sobre la efectividad de nuestros
                  servicios. <strong>Usted utiliza el Sitio bajo su propio riesgo.</strong>
                </p>
              </CardContent>
            </Card>

            {/* Propiedad Intelectual */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">4. Propiedad Intelectual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Todo el contenido del Sitio (textos, imágenes, logos) es propiedad de Rescate Vivienda S.A. de C.V. o
                  sus licenciantes y está protegido por las leyes de propiedad intelectual en México. No se permite su
                  reproducción sin autorización escrita.
                </p>
              </CardContent>
            </Card>

            {/* Privacidad */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">5. Privacidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Consulte nuestra{" "}
                  <Link href="/politica-privacidad" className="text-green-600 hover:underline">
                    Política de Privacidad
                  </Link>{" "}
                  para información sobre cómo manejamos sus datos personales. Al usar el Sitio, acepta nuestras
                  prácticas de privacidad.
                </p>
              </CardContent>
            </Card>

            {/* Terminación */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <XCircle className="h-6 w-6 mr-3 text-green-600" />
                  6. Terminación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos terminar o suspender su acceso al Sitio en cualquier momento si viola estos Términos.
                </p>
              </CardContent>
            </Card>

            {/* Ley Aplicable */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Scale className="h-6 w-6 mr-3 text-green-600" />
                  7. Ley Aplicable y Jurisdicción
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Estos Términos se rigen por las leyes de México. Cualquier disputa se resolverá en los tribunales
                  competentes de México.
                </p>
              </CardContent>
            </Card>

            {/* Contacto */}
            <Card className="border-2 border-green-500/20 bg-green-50 dark:bg-green-950/20">
              <CardHeader>
                <CardTitle className="text-xl text-green-700 dark:text-green-300">Contacto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 dark:text-green-300 mb-4">Si tiene preguntas, contáctenos en:</p>
                <div className="space-y-2 text-green-700 dark:text-green-300">
                  <p>
                    <strong>Rescate Vivienda S.A. de C.V.</strong>
                  </p>
                  <p>WhatsApp: +52 4775780721</p>
                  <p>Teléfono: +52 4775780721</p>
                  <p>Sitio web: www.rescatevivienda.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Aceptación Final */}
            <Card className="border-2 border-yellow-500/50 bg-yellow-50 dark:bg-yellow-950/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Confirmación de Aceptación
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 leading-relaxed">
                      <strong>Al continuar usando el Sitio, confirma que ha leído y acepta estos Términos.</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Link href="/">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Regresar al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
