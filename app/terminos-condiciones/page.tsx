import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle, XCircle, DollarSign, Clock } from "lucide-react"
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
              Términos y <span className="text-green-600">Condiciones</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conoce los términos que rigen nuestros servicios de rescate y liquidación de propiedades INFONAVIT.
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
                  <h3 className="font-semibold text-lg mb-2">Aceptación de Términos</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Al utilizar los servicios de Rescate Vivienda, aceptas estos términos y condiciones en su totalidad.
                    Si no estás de acuerdo con alguna parte, te recomendamos no utilizar nuestros servicios.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Definiciones */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <FileText className="h-6 w-6 mr-3 text-green-600" />
                  1. Definiciones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">Rescate Vivienda</h4>
                    <p className="text-sm text-muted-foreground">
                      Empresa especializada en la adquisición, liquidación y rescate de propiedades con adeudos
                      INFONAVIT.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">Cliente/Usuario</h4>
                    <p className="text-sm text-muted-foreground">
                      Persona física propietaria de un inmueble que solicita nuestros servicios de rescate.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">Propiedad/Inmueble</h4>
                    <p className="text-sm text-muted-foreground">
                      Casa, departamento o terreno adquirido mediante crédito INFONAVIT objeto del servicio.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">Servicios</h4>
                    <p className="text-sm text-muted-foreground">
                      Evaluación, liquidación de deudas, trámites legales y adquisición de propiedades.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Servicios Ofrecidos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-600" />
                  2. Servicios Ofrecidos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Servicios Principales</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>
                      • <strong>Evaluación Gratuita:</strong> Análisis inicial de viabilidad del caso sin costo
                    </li>
                    <li>
                      • <strong>Liquidación de Deudas:</strong> Pago total de adeudos con INFONAVIT y servicios
                    </li>
                    <li>
                      • <strong>Trámites Legales:</strong> Gestión de escrituras, registros y documentación
                    </li>
                    <li>
                      • <strong>Adquisición de Propiedades:</strong> Compra del inmueble una vez saldadas las deudas
                    </li>
                    <li>
                      • <strong>Limpieza de Buró:</strong> Gestión para mejorar el historial crediticio
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Servicios Adicionales</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Asesoría legal especializada en INFONAVIT</li>
                    <li>• Inspecciones y valuaciones profesionales</li>
                    <li>• Gestión de desalojos cuando sea necesario</li>
                    <li>• Regularización de documentos faltantes</li>
                    <li>• Acompañamiento durante todo el proceso</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Proceso y Requisitos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clock className="h-6 w-6 mr-3 text-green-600" />
                  3. Proceso y Requisitos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Etapas del Proceso</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h5 className="font-semibold">Evaluación Inicial</h5>
                        <p className="text-sm text-muted-foreground">
                          Análisis de documentos y viabilidad del caso (24-48 horas)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h5 className="font-semibold">Propuesta Formal</h5>
                        <p className="text-sm text-muted-foreground">Presentación de oferta y términos específicos</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h5 className="font-semibold">Firma de Contrato</h5>
                        <p className="text-sm text-muted-foreground">Formalización del acuerdo ante notario público</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h5 className="font-semibold">Liquidación</h5>
                        <p className="text-sm text-muted-foreground">Pago de todas las deudas pendientes</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">5</span>
                      </div>
                      <div>
                        <h5 className="font-semibold">Transferencia</h5>
                        <p className="text-sm text-muted-foreground">Escrituración y registro de la propiedad</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Requisitos Indispensables</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Ser propietario legal del inmueble (escrituras a tu nombre)</li>
                    <li>• Identificación oficial vigente (INE/IFE o pasaporte)</li>
                    <li>• CURP y RFC actualizados</li>
                    <li>• Estado de cuenta INFONAVIT actualizado</li>
                    <li>• Comprobante de domicilio reciente</li>
                    <li>• Capacidad legal para contratar (mayor de edad)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Obligaciones del Cliente */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <FileText className="h-6 w-6 mr-3 text-green-600" />
                  4. Obligaciones del Cliente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Información y Documentación</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Proporcionar información veraz y completa sobre la propiedad</li>
                    <li>• Entregar toda la documentación requerida en tiempo y forma</li>
                    <li>• Notificar cualquier cambio en la situación legal del inmueble</li>
                    <li>• Permitir inspecciones y valuaciones cuando sea necesario</li>
                    <li>• Mantener actualizada su información de contacto</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Cooperación en el Proceso</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Asistir a citas programadas con notarios y autoridades</li>
                    <li>• Firmar documentos requeridos en los plazos establecidos</li>
                    <li>• Facilitar el acceso a la propiedad para inspecciones</li>
                    <li>• Colaborar en la resolución de problemas legales que puedan surgir</li>
                    <li>• Mantener comunicación constante durante el proceso</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Restricciones</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• No realizar actos que comprometan la propiedad durante el proceso</li>
                    <li>• No negociar la venta con terceros una vez firmado el contrato</li>
                    <li>• No ocultar información relevante sobre deudas o gravámenes</li>
                    <li>• No realizar modificaciones estructurales sin autorización</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Obligaciones de Rescate Vivienda */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-600" />
                  5. Nuestras Obligaciones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Compromisos de Servicio</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Realizar evaluación gratuita y sin compromiso en 24-48 horas</li>
                    <li>• Proporcionar información clara y transparente sobre costos y procesos</li>
                    <li>• Liquidar todas las deudas acordadas en los plazos establecidos</li>
                    <li>• Gestionar todos los trámites legales y notariales necesarios</li>
                    <li>• Mantener comunicación constante sobre el progreso del caso</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Garantías</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Confidencialidad absoluta de tu información personal</li>
                    <li>• Procesos 100% legales y transparentes</li>
                    <li>• Asesoría profesional durante todo el proceso</li>
                    <li>• Cumplimiento de plazos acordados contractualmente</li>
                    <li>• Soporte post-venta para dudas o aclaraciones</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Limitaciones de Responsabilidad</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• No somos responsables por información falsa proporcionada por el cliente</li>
                    <li>• Los plazos pueden extenderse por causas ajenas a nuestra voluntad</li>
                    <li>• No garantizamos resultados en casos con problemas legales complejos</li>
                    <li>• Nuestra responsabilidad se limita al monto del contrato firmado</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Aspectos Financieros */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <DollarSign className="h-6 w-6 mr-3 text-green-600" />
                  6. Aspectos Financieros
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Estructura de Pagos</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>
                      • <strong>Evaluación:</strong> Completamente gratuita, sin costo ni compromiso
                    </li>
                    <li>
                      • <strong>Servicios:</strong> El pago se realiza únicamente al completar la transacción
                    </li>
                    <li>
                      • <strong>Gastos Notariales:</strong> Cubiertos por Rescate Vivienda
                    </li>
                    <li>
                      • <strong>Trámites Legales:</strong> Incluidos en el servicio sin costo adicional
                    </li>
                    <li>
                      • <strong>Liquidación de Deudas:</strong> Pagamos directamente a INFONAVIT y servicios
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Cálculo del Valor</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Valuación profesional del inmueble en su estado actual</li>
                    <li>• Deducción de todas las deudas pendientes (INFONAVIT, servicios, predial)</li>
                    <li>• Consideración de costos de renovación y puesta en valor</li>
                    <li>• Margen operativo para garantizar la viabilidad del proyecto</li>
                    <li>• El cliente recibe el remanente en efectivo</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Formas de Pago</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Transferencia bancaria directa</li>
                    <li>• Cheque certificado</li>
                    <li>• Efectivo para montos menores (sujeto a regulaciones)</li>
                    <li>• Todos los pagos se realizan ante notario público</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Cancelación y Terminación */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <XCircle className="h-6 w-6 mr-3 text-green-600" />
                  7. Cancelación y Terminación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Derecho de Cancelación del Cliente</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Puedes cancelar el servicio antes de la firma del contrato definitivo</li>
                    <li>• No hay penalizaciones por cancelación en etapa de evaluación</li>
                    <li>• Una vez firmado el contrato, aplican las cláusulas de cancelación específicas</li>
                    <li>• Debes notificar la cancelación por escrito</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Terminación por Rescate Vivienda</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Información falsa o incompleta proporcionada por el cliente</li>
                    <li>• Incumplimiento de obligaciones contractuales</li>
                    <li>• Problemas legales que impidan completar la transacción</li>
                    <li>• Cambios en la situación legal del inmueble no reportados</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Efectos de la Terminación</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Devolución de documentos originales al cliente</li>
                    <li>• Liquidación de gastos incurridos hasta la fecha</li>
                    <li>• Confidencialidad de información se mantiene vigente</li>
                    <li>• No hay obligaciones futuras para ninguna de las partes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Resolución de Disputas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Scale className="h-6 w-6 mr-3 text-green-600" />
                  8. Resolución de Disputas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Proceso de Resolución</h4>
                  <ol className="space-y-2 text-muted-foreground ml-4 list-decimal">
                    <li>
                      <strong>Comunicación Directa:</strong> Intentar resolver la disputa mediante diálogo directo
                    </li>
                    <li>
                      <strong>Mediación:</strong> Recurrir a un mediador neutral si es necesario
                    </li>
                    <li>
                      <strong>Arbitraje:</strong> Someter la disputa a arbitraje vinculante
                    </li>
                    <li>
                      <strong>Jurisdicción:</strong> Como último recurso, tribunales competentes en México
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Ley Aplicable</h4>
                  <p className="text-muted-foreground">
                    Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier disputa será
                    resuelta en los tribunales competentes de México.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Modificaciones */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">9. Modificaciones a los Términos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Rescate Vivienda se reserva el derecho de modificar estos términos y condiciones en cualquier momento.
                  Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
                </p>
                <p className="text-muted-foreground">
                  Te notificaremos sobre cambios significativos a través de nuestros canales de comunicación habituales.
                  El uso continuado de nuestros servicios después de las modificaciones constituye tu aceptación de los
                  nuevos términos.
                </p>
              </CardContent>
            </Card>

            {/* Contacto */}
            <Card className="border-2 border-green-500/20 bg-green-50 dark:bg-green-950/20">
              <CardHeader>
                <CardTitle className="text-xl text-green-700 dark:text-green-300">10. Contacto y Soporte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 dark:text-green-300 mb-4">
                  Para cualquier duda sobre estos términos y condiciones o nuestros servicios, contáctanos:
                </p>
                <div className="space-y-2 text-green-700 dark:text-green-300">
                  <p>
                    <strong>Rescate Vivienda</strong>
                  </p>
                  <p>WhatsApp: +52 4775780721</p>
                  <p>Teléfono: +52 4775780721</p>
                  <p>Horario de atención: Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                  <p>Tiempo de respuesta: Menos de 1 hora en horario laboral</p>
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
