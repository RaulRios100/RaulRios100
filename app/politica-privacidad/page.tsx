import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Eye, Lock, UserCheck, Database, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function PoliticaPrivacidad() {
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
                <Shield className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Política de <span className="text-green-600">Privacidad</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              En Rescate Vivienda protegemos tu información personal y respetamos tu privacidad.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Última actualización: Enero 2024</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Eye className="h-6 w-6 mr-3" />
                  1. Información que Recopilamos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Recopilamos información que nos proporcionas directamente cuando:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Completas nuestro cuestionario de evaluación</li>
                  <li>Nos contactas por WhatsApp, teléfono o redes sociales</li>
                  <li>Compartes documentos relacionados con tu propiedad</li>
                  <li>Solicitas nuestros servicios de rescate de vivienda</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Esta información puede incluir: nombre, teléfono, correo electrónico, dirección de la propiedad,
                  información financiera relacionada con deudas INFONAVIT, y documentos legales de la propiedad.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Database className="h-6 w-6 mr-3" />
                  2. Cómo Utilizamos tu Información
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">Utilizamos tu información personal para:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Evaluar la viabilidad de tu caso</li>
                  <li>Proporcionarte asesoría personalizada</li>
                  <li>Gestionar trámites legales y financieros</li>
                  <li>Comunicarnos contigo sobre el progreso de tu caso</li>
                  <li>Cumplir con obligaciones legales y regulatorias</li>
                  <li>Mejorar nuestros servicios</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Lock className="h-6 w-6 mr-3" />
                  3. Protección de tu Información
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger tu información:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Encriptación de datos sensibles</li>
                  <li>Acceso restringido solo a personal autorizado</li>
                  <li>Sistemas seguros de almacenamiento</li>
                  <li>Protocolos de seguridad en comunicaciones</li>
                  <li>Auditorías regulares de seguridad</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <UserCheck className="h-6 w-6 mr-3" />
                  4. Compartir Información con Terceros
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Podemos compartir tu información únicamente con:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Notarios públicos para trámites legales</li>
                  <li>INFONAVIT u otras instituciones financieras para gestión de deudas</li>
                  <li>Autoridades gubernamentales cuando sea requerido por ley</li>
                  <li>
                    Proveedores de servicios que nos ayudan a operar (bajo estrictos acuerdos de confidencialidad)
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Nunca vendemos ni comercializamos tu información personal.</strong>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Shield className="h-6 w-6 mr-3" />
                  5. Tus Derechos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">Tienes derecho a:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Acceder a tu información personal</li>
                  <li>Rectificar datos incorrectos o incompletos</li>
                  <li>Cancelar tu información cuando ya no sea necesaria</li>
                  <li>Oponerte al tratamiento de tus datos</li>
                  <li>Solicitar la portabilidad de tus datos</li>
                  <li>Revocar tu consentimiento en cualquier momento</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Mail className="h-6 w-6 mr-3" />
                  6. Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Para ejercer tus derechos o si tienes preguntas sobre esta política de privacidad, contáctanos:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Rescate Vivienda</p>
                  <p className="text-muted-foreground">WhatsApp: +52 4775780721</p>
                  <p className="text-muted-foreground">Email: privacidad@rescatevivienda.mx</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-500/20 bg-green-50 dark:bg-green-950/20">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Nota importante:</strong> Esta política de privacidad puede actualizarse periódicamente. Te
                  notificaremos sobre cambios significativos y la fecha de la última actualización aparecerá en la parte
                  superior de esta página.
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
