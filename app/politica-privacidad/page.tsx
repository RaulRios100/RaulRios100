import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from "lucide-react"
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
              Política de <span className="text-green-600">Privacidad</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              En Rescate Vivienda, protegemos tu información personal con los más altos estándares de seguridad y
              transparencia.
            </p>
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
                  <h3 className="font-semibold text-lg mb-2">Compromiso con tu Privacidad</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Esta Política de Privacidad describe cómo Rescate Vivienda recopila, utiliza, almacena y protege tu
                    información personal cuando utilizas nuestros servicios de rescate y liquidación de propiedades
                    INFONAVIT.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Información que Recopilamos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Database className="h-6 w-6 mr-3 text-green-600" />
                  1. Información que Recopilamos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Información Personal Directa</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>
                      • <strong>Datos de Identificación:</strong> Nombre completo, CURP, RFC, fecha de nacimiento
                    </li>
                    <li>
                      • <strong>Información de Contacto:</strong> Número telefónico, dirección física
                    </li>
                    <li>
                      • <strong>Datos Financieros:</strong> Información sobre deudas INFONAVIT, historial crediticio,
                      ingresos
                    </li>
                    <li>
                      • <strong>Documentación Legal:</strong> Escrituras, contratos de crédito, identificaciones
                      oficiales
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Información de la Propiedad</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Ubicación y características del inmueble</li>
                    <li>• Estado actual de la propiedad (habitada, abandonada, vandalizada)</li>
                    <li>• Historial de pagos y adeudos</li>
                    <li>• Documentación registral y catastral</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Información Técnica</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Datos de navegación en nuestro sitio web</li>
                    <li>• Información de dispositivos utilizados</li>
                    <li>• Registros de comunicaciones (WhatsApp, llamadas telefónicas)</li>
                    <li>• Geolocalización cuando sea necesario para inspecciones</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Cómo Utilizamos tu Información */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Eye className="h-6 w-6 mr-3 text-green-600" />
                  2. Cómo Utilizamos tu Información
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Servicios Principales</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Evaluar la viabilidad de rescate de tu propiedad</li>
                    <li>• Gestionar la liquidación de deudas con INFONAVIT</li>
                    <li>• Realizar trámites legales y notariales</li>
                    <li>• Coordinar inspecciones y valuaciones</li>
                    <li>• Procesar pagos y transferencias</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Comunicación y Soporte</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Responder a tus consultas y brindar asesoría</li>
                    <li>• Enviarte actualizaciones sobre el progreso de tu caso</li>
                    <li>• Programar citas y reuniones</li>
                    <li>• Proporcionar soporte técnico y legal</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Cumplimiento Legal</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Cumplir con obligaciones fiscales y regulatorias</li>
                    <li>• Verificar identidad y prevenir fraudes</li>
                    <li>• Mantener registros contables y legales</li>
                    <li>• Colaborar con autoridades cuando sea requerido por ley</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Protección de Datos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Lock className="h-6 w-6 mr-3 text-green-600" />
                  3. Protección y Seguridad de Datos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Medidas de Seguridad Técnicas</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Encriptación de datos sensibles en tránsito y almacenamiento</li>
                    <li>• Sistemas de autenticación multifactor</li>
                    <li>• Firewalls y sistemas de detección de intrusiones</li>
                    <li>• Respaldos seguros y redundantes</li>
                    <li>• Monitoreo continuo de seguridad</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Medidas Organizacionales</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Acceso restringido solo a personal autorizado</li>
                    <li>• Capacitación continua en protección de datos</li>
                    <li>• Políticas internas de manejo de información</li>
                    <li>• Auditorías regulares de seguridad</li>
                    <li>• Acuerdos de confidencialidad con todo el personal</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Almacenamiento Seguro</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Servidores ubicados en centros de datos certificados en México</li>
                    <li>• Cumplimiento con estándares internacionales de seguridad</li>
                    <li>• Destrucción segura de documentos físicos</li>
                    <li>• Retención de datos solo por el tiempo legalmente requerido</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Compartir Información */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <UserCheck className="h-6 w-6 mr-3 text-green-600" />
                  4. Compartir tu Información
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Terceros Autorizados</h4>
                  <p className="text-muted-foreground mb-3">
                    Compartimos tu información únicamente con terceros necesarios para completar nuestros servicios:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>
                      • <strong>INFONAVIT:</strong> Para gestionar liquidaciones y trámites oficiales
                    </li>
                    <li>
                      • <strong>Notarios Públicos:</strong> Para formalizar transferencias y escrituras
                    </li>
                    <li>
                      • <strong>Instituciones Financieras:</strong> Para procesar pagos y transferencias
                    </li>
                    <li>
                      • <strong>Valuadores Certificados:</strong> Para determinar el valor de propiedades
                    </li>
                    <li>
                      • <strong>Autoridades Fiscales:</strong> Para cumplir obligaciones tributarias
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Nunca Compartimos</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Tu información con fines comerciales o publicitarios</li>
                    <li>• Datos personales con empresas de marketing</li>
                    <li>• Información financiera con terceros no autorizados</li>
                    <li>• Detalles de tu caso con otras personas sin tu consentimiento</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Derechos del Usuario */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Shield className="h-6 w-6 mr-3 text-green-600" />
                  5. Tus Derechos sobre tu Información
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Derechos ARCO</h4>
                  <p className="text-muted-foreground mb-3">
                    Conforme a la Ley Federal de Protección de Datos Personales, tienes derecho a:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>
                      • <strong>Acceso:</strong> Conocer qué datos personales tenemos sobre ti
                    </li>
                    <li>
                      • <strong>Rectificación:</strong> Solicitar la corrección de datos inexactos
                    </li>
                    <li>
                      • <strong>Cancelación:</strong> Pedir la eliminación de tus datos cuando sea procedente
                    </li>
                    <li>
                      • <strong>Oposición:</strong> Oponerte al tratamiento de tus datos para fines específicos
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Cómo Ejercer tus Derechos</h4>
                  <p className="text-muted-foreground mb-3">
                    Para ejercer cualquiera de estos derechos, puedes contactarnos a través de:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• WhatsApp: +52 4775780721</li>
                    <li>• Teléfono: +52 4775780721</li>
                    <li>• Presentándote en nuestras oficinas con identificación oficial</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    Responderemos a tu solicitud en un plazo máximo de 20 días hábiles.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies y Tecnologías */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">6. Cookies y Tecnologías de Seguimiento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Nuestro sitio web utiliza cookies y tecnologías similares para mejorar tu experiencia:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>
                    • <strong>Cookies Esenciales:</strong> Necesarias para el funcionamiento básico del sitio
                  </li>
                  <li>
                    • <strong>Cookies de Rendimiento:</strong> Para analizar cómo utilizas nuestro sitio
                  </li>
                  <li>
                    • <strong>Cookies de Funcionalidad:</strong> Para recordar tus preferencias
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del
                  sitio.
                </p>
              </CardContent>
            </Card>

            {/* Menores de Edad */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">7. Protección de Menores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nuestros servicios están dirigidos a personas mayores de 18 años. No recopilamos intencionalmente
                  información personal de menores de edad. Si un menor ha proporcionado información personal, el padre o
                  tutor debe contactarnos inmediatamente para su eliminación.
                </p>
              </CardContent>
            </Card>

            {/* Transferencias Internacionales */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">8. Transferencias de Datos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Todos tus datos personales se almacenan y procesan dentro del territorio mexicano. No realizamos
                  transferencias internacionales de datos personales sin tu consentimiento expreso y las medidas de
                  protección adecuadas.
                </p>
              </CardContent>
            </Card>

            {/* Cambios a la Política */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">9. Cambios a esta Política</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios
                  significativos a través de nuestros canales de comunicación habituales. La fecha de la última
                  actualización aparece al inicio de este documento.
                </p>
              </CardContent>
            </Card>

            {/* Contacto */}
            <Card className="border-2 border-green-500/20 bg-green-50 dark:bg-green-950/20">
              <CardHeader>
                <CardTitle className="text-xl text-green-700 dark:text-green-300">10. Contacto y Consultas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 dark:text-green-300 mb-4">
                  Si tienes preguntas sobre esta Política de Privacidad o sobre el manejo de tus datos personales, no
                  dudes en contactarnos:
                </p>
                <div className="space-y-2 text-green-700 dark:text-green-300">
                  <p>
                    <strong>Rescate Vivienda</strong>
                  </p>
                  <p>WhatsApp: +52 4775780721</p>
                  <p>Teléfono: +52 4775780721</p>
                  <p>Horario de atención: Lunes a Viernes, 9:00 AM - 6:00 PM</p>
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
