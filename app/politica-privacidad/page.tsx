import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, AlertTriangle, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function PoliticaPrivacidad() {
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
                <Shield className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Aviso de <span className="text-green-600">Privacidad Integral</span>
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
                  <h3 className="font-semibold text-lg mb-2">Cumplimiento Legal</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares
                    (LFPDPPP) y su Reglamento, Rescate Vivienda S.A. de C.V., con domicilio en México (en adelante, "el
                    Responsable"), pone a su disposición este Aviso de Privacidad, en el que se describe cómo se
                    recaban, usan, protegen y, en su caso, transfieren sus datos personales.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Datos Personales Recabados */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Database className="h-6 w-6 mr-3 text-green-600" />
                  1. Datos Personales Recabados
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Recabamos los siguientes datos personales para proporcionar nuestros servicios:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">Datos de identificación:</h4>
                    <p className="text-muted-foreground">Nombre completo, fecha de nacimiento, CURP, RFC.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">Datos de contacto:</h4>
                    <p className="text-muted-foreground">Teléfono, correo electrónico, domicilio.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">Datos financieros y patrimoniales:</h4>
                    <p className="text-muted-foreground">
                      Información sobre deudas hipotecarias (Infonavit, Fovissste, bancos), detalles de la propiedad
                      (dirección, estado, documentos relacionados).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">Otros:</h4>
                    <p className="text-muted-foreground">
                      Información sobre gastos públicos (agua, luz, etc.) y cualquier dato necesario para la gestión de
                      trámites.
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>
                    No recabamos datos sensibles (origen racial, salud, etc.) a menos que sea estrictamente necesario y
                    con su consentimiento expreso.
                  </strong>
                </p>
              </CardContent>
            </Card>

            {/* Finalidades del Tratamiento */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Eye className="h-6 w-6 mr-3 text-green-600" />
                  2. Finalidades del Tratamiento de Datos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">Sus datos se utilizan para:</p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>
                    • Proporcionar asesoría y gestión en resolución de deudas hipotecarias, remodelación de propiedades
                    y búsqueda de compradores.
                  </li>
                  <li>• Realizar trámites ante instituciones como Infonavit, Fovissste o bancos.</li>
                  <li>• Gestionar pagos de servicios públicos asociados a la propiedad.</li>
                  <li>• Enviar comunicaciones relacionadas con sus solicitudes.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>
                    Las finalidades son necesarias para los servicios solicitados. No usamos sus datos para fines
                    secundarios sin su consentimiento.
                  </strong>
                </p>
              </CardContent>
            </Card>

            {/* Transferencia de Datos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <UserCheck className="h-6 w-6 mr-3 text-green-600" />
                  3. Transferencia de Datos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Sus datos no serán transferidos a terceros sin su consentimiento, salvo:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>
                    • A instituciones financieras o gubernamentales (ej. Infonavit, Fovissste) para gestiones
                    necesarias.
                  </li>
                  <li>• Por requerimiento de autoridad competente.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  En caso de transferencia, se informará el propósito y se garantizará la protección de datos.
                </p>
              </CardContent>
            </Card>

            {/* Medidas de Seguridad */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Lock className="h-6 w-6 mr-3 text-green-600" />
                  4. Medidas de Seguridad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas administrativas, técnicas y físicas para proteger sus datos contra daño,
                  pérdida, alteración, destrucción o uso no autorizado, conforme a la LFPDPPP.
                </p>
              </CardContent>
            </Card>

            {/* Derechos ARCO */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Shield className="h-6 w-6 mr-3 text-green-600" />
                  5. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos. Para
                  ejercerlos, envíe una solicitud por escrito a{" "}
                  <a href="mailto:contacto@rescatevivienda.com" className="text-green-600 hover:underline">
                    contacto@rescatevivienda.com
                  </a>{" "}
                  o al domicilio indicado, incluyendo:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• Nombre y domicilio.</li>
                  <li>• Descripción clara del derecho a ejercer.</li>
                  <li>• Documentos que acrediten su identidad.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Responderemos en un plazo máximo de 20 días hábiles. Para más información, consulte al Instituto
                  Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI) en{" "}
                  <a
                    href="https://www.inai.org.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    www.inai.org.mx
                  </a>
                  .
                </p>
              </CardContent>
            </Card>

            {/* Cambios al Aviso */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <FileText className="h-6 w-6 mr-3 text-green-600" />
                  6. Cambios al Aviso de Privacidad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Nos reservamos el derecho de modificar este Aviso. Los cambios se publicarán en el Sitio con al menos
                  15 días de anticipación. Le recomendamos revisar periódicamente esta sección.
                </p>
              </CardContent>
            </Card>

            {/* Contacto */}
            <Card className="border-2 border-green-500/20 bg-green-50 dark:bg-green-950/20">
              <CardHeader>
                <CardTitle className="text-xl text-green-700 dark:text-green-300">Contacto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 dark:text-green-300 mb-4">Si tiene dudas, contáctenos en:</p>
                <div className="space-y-2 text-green-700 dark:text-green-300">
                  <p>
                    <strong>Rescate Vivienda S.A. de C.V.</strong>
                  </p>
                  <p>WhatsApp: +52 4775780721</p>
                  <p>Teléfono: +52 4775780721</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:contacto@rescatevivienda.com" className="hover:underline">
                      contacto@rescatevivienda.com
                    </a>
                  </p>
                  <p>Sitio web: www.rescatevivienda.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Consentimiento */}
            <Card className="border-2 border-yellow-500/50 bg-yellow-50 dark:bg-yellow-950/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Consentimiento Expreso</h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 leading-relaxed">
                      <strong>
                        Al proporcionar sus datos y usar nuestros servicios, manifiesta su consentimiento expreso con
                        este Aviso de Privacidad.
                      </strong>
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
