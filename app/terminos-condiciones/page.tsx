import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  FileText,
  AlertTriangle,
  Scale,
  HandshakeIcon as HandShake,
  Clock,
  Shield,
  DollarSign,
  Users,
  Gavel,
} from "lucide-react"
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
        <div className="container mx-auto px-4 max-w-5xl">
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Condiciones generales que rigen el uso de nuestros servicios especializados de rescate de vivienda, asesoría legal y financiera.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Última actualización: Enero 2024</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <Card className="border-2 border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600 text-2xl">
                  <FileText className="h-8 w-8 mr-3" />
                  Introducción y Marco Legal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Estos términos y condiciones establecen las bases legales para la prestación de servicios especializados de rescate de vivienda, asesoría legal, gestión financiera y trámites inmobiliarios por parte de Rescate Vivienda.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Al utilizar nuestros servicios, acceder a nuestro sitio web, completar cuestionarios de evaluación o establecer cualquier tipo de comunicación con nosotros, aceptas automáticamente estos términos y condiciones en su totalidad.
                </p>
                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <p className="text-red-800 dark:text-red-200 font-medium">
                    <strong>Importante:</strong> Si no estás de acuerdo con alguna parte de estos términos, debes abstenerte de utilizar nuestros servicios y contactarnos inmediatamente.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <FileText className="h-6 w-6 mr-3" />
                  1. Aceptación de Términos y Capacidad Legal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">1.1 Aceptación Expresa</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Al utilizar nuestros servicios, confirmas que:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Has leído, entendido y aceptado estos términos y condiciones</li>
                    <li>Aceptas nuestra política de privacidad</li>
                    <li>Tienes capacidad legal para contratar servicios</li>
                    <li>Eres mayor de 18 años</li>
                    <li>Proporcionarás información veraz y actualizada</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">1.2 Capacidad Legal Requerida</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Para utilizar nuestros servicios debes cumplir con los siguientes requisitos:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Ser propietario legal del inmueble o tener representación legal válida</li>
                    <li>No estar sujeto a restricciones legales para disponer de la propiedad</li>
                    <li>Tener capacidad de ejercicio plena conforme a la legislación mexicana</li>
                    <li>No encontrarse en estado de interdicción o incapacidad legal</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">1.3 Representación Legal</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Si actúas en representación de otra persona, debes contar con poder notarial vigente y suficiente para realizar todos los actos relacionados con la propiedad, incluyendo su enajenación.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <HandShake className="h-6 w-6 mr-3" />
                  2. Descripción Detallada de Servicios
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">2.1 Servicios Principales</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Rescate Vivienda ofrece servicios especializados en:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h5 className="font-medium text-green-600">Servicios de Evaluación:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        <li>Evaluación gratuita de viabilidad de casos</li>
                        <li>Análisis de situación legal y financiera</li>
                        <li>Valuación preliminar de propiedades</li>
                        <li>Diagnóstico de problemas documentales</li>
                        <li>Estimación de costos y tiempos</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-medium text-green-600">Servicios de Gestión:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        <li>Liquidación de deudas INFONAVIT</li>
                        <li>Gestión con otras instituciones financieras</li>
                        <li>Pago de adeudos de servicios públicos</li>
                        <li>Liquidación de impuestos prediales</li>
                        <li>Resolución de problemas crediticios</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">2.2 Servicios Legales y Documentales</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Regularización documental:</strong> Corrección de escrituras, títulos y documentos legales</li>
                    <li><strong>Trámites registrales:</strong> Inscripciones y actualizaciones en Registro Público</li>
                    <li><strong>Gestión notarial:</strong> Coordinación con notarios públicos para formalización</li>
                    <li><strong>Resolución de intestados:</strong> Tramitación de herencias no regularizadas</li>
                    <li><strong>Aclaración de títulos:</strong> Resolución de problemas de propiedad</li>
                    <li><strong>Gestión de desalojos:</strong> Procesos legales para recuperación de inmuebles</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">2.3 Servicios de Adquisición y Renovación</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Compra de propiedades:</strong> Adquisición de inmuebles en situaciones complejas</li>
                    <li><strong>Renovación y mejora:</strong> Rehabilitación de propiedades deterioradas</li>
                    <li><strong>Gestión integral:</strong> Desde la evaluación hasta la entrega final</li>
                    <li><strong>Coordinación de servicios:</strong> Manejo de contratistas y proveedores</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                    <strong>Importante:</strong> Todos nuestros servicios están sujetos a evaluación previa de viabilidad legal, técnica y financiera. No todos los casos pueden ser aceptados.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <AlertTriangle className="h-6 w-6 mr-3" />
                  3. Proceso de Evaluación y Aceptación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">3.1 Fases del Proceso</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Nuestro proceso de evaluación incluye las siguientes etapas obligatorias:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-600">Evaluación Inicial (24-48 horas)</h5>
                        <p className="text-sm text-muted-foreground">Análisis preliminar de la información proporcionada en el cuestionario</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-600">Verificación Documental (3-7 días)</h5>
                        <p className="text-sm text-muted-foreground">Revisión exhaustiva de escrituras, títulos y documentos legales</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-600">Validación Institucional (5-10 días)</h5>
                        <p className="text-sm text-muted-foreground">Confirmación con INFONAVIT, bancos y autoridades competentes</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-600">Inspección Física (2-5 días)</h5>
                        <p className="text-sm text-muted-foreground">Evaluación del estado físico y legal del inmueble</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">5</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-600">Propuesta Formal (1-3 días)</h5>
                        <p className="text-sm text-muted-foreground">Presentación de opciones viables y condiciones específicas</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">3.2 Criterios de Aceptación</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Para que un caso sea aceptado debe cumplir con:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Viabilidad legal: Situación jurídica clara y resoluble</li>
                    <li>Viabilidad financiera: Números que permitan una solución rentable</li>
                    <li>Viabilidad técnica: Posibilidad real de ejecutar los trabajos necesarios</li>
                    <li>Documentación suficiente: Acceso a información y documentos necesarios</li>
                    <li>Cooperación del cliente: Disposición para cumplir con los requerimientos</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">3.3 Causas de No Aceptación</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Nos reservamos el derecho de no aceptar casos cuando:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Existan problemas legales irresolubles o muy complejos</li>
                    <li>La situación financiera no permita una solución viable</li>
                    <li>Se detecte información falsa o documentos apócrifos</li>
                    <li>El cliente no tenga capacidad legal para contratar</li>
                    <li>Existan conflictos de interés</li>
                    <li>La propiedad esté involucrada en procesos penales</li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <p className="text-red-800 dark:text-red-200 font-medium">
                    <strong>Advertencia Legal:</strong> La evaluación inicial NO constituye compromiso de aceptación. La aceptación definitiva está sujeta a verificación completa de todos los aspectos legales, financieros y técnicos.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Users className="h-6 w-6 mr-3" />
                  4. Obligaciones y Responsabilidades del Cliente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">4.1 Obligaciones Generales</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Como cliente de Rescate Vivienda, te comprometes a:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Veracidad:</strong> Proporcionar información completa, veraz y actualizada en todo momento</li>
                    <li><strong>Documentación:</strong> Entregar todos los documentos originales y copias certificadas requeridas</li>
                    <li><strong>Legitimidad:</strong> Garantizar que eres el propietario legal o tienes representación válida</li>
                    <li><strong>Cooperación:</strong> Participar activamente en todos los trámites y procesos necesarios</li>
                    <li><strong>Cumplimiento:</strong> Respetar todos los acuerdos, plazos y condiciones establecidas</li>
                    <li><strong>Comunicación:</strong> Mantener canales de comunicación abiertos y responder oportunamente</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">4.2 Obligaciones Específicas de Documentación</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Debes proporcionar y mantener actualizados:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h5 className="font-medium text-green-600">Documentos Personales:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        <li>Identificación oficial vigente</li>
                        <li>CURP actualizada</li>
                        <li>Comprobante de domicilio reciente</li>
                        <li>RFC y constancia de situación fiscal</li>
                        <li>Estado civil actualizado</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-medium text-green-600">Documentos de la Propiedad:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        <li>Escrituras públicas originales</li>
                        <li>Certificados de libertad de gravamen</li>
                        <li>Estados de cuenta de créditos</li>
                        <li>Recibos de servicios públicos</li>
                        <li>Comprobantes de pago predial</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">4.3 Obligaciones Financieras</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Cubrir gastos notariales, registrales y fiscales según se acuerde</li>
                    <li>Proporcionar información financiera veraz y completa</li>
                    <li>Cumplir con los compromisos de pago establecidos</li>
                    <li>Notificar cambios en tu situación financiera</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">4.4 Prohibiciones</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Durante la prestación de nuestros servicios, te comprometes a NO:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Proporcionar información falsa o documentos apócrifos</li>
                    <li>Ocultar gravámenes, deudas o problemas legales</li>
                    <li>Realizar actos que afecten la propiedad sin autorización</li>
                    <li>Negociar paralelamente con terceros sobre la misma propiedad</li>
                    <li>Interferir con los procesos legales o administrativos en curso</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Clock className="h-6 w-6 mr-3" />
                  5. Plazos, Tiempos y Cronogramas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">5.1 Tiempos Estimados por Servicio</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Los siguientes son tiempos estimados que pueden variar según la complejidad:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h5 className="font-medium text-green-600">Procesos Rápidos:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        <li>Evaluación inicial: 24-48 horas</li>
                        <li>Casos simples: 15-20 días hábiles</li>
                        <li>Liquidación directa: 10-15 días hábiles</li>
                        <li>Documentación básica: 5-10 días hábiles</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-medium text-green-600">Procesos Complejos:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        <li>Casos complejos: 30-60 días hábiles</li>
                        <li>Regularización documental: 45-90 días</li>
                        <li>Procesos judiciales: 3-12 meses</li>
                        <li>Herencias intestadas: 60-180 días</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">5.2 Factores que Afectan los Tiempos</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Complejidad legal:</strong> Problemas de título, herencias, juicios</li>
                    <li><strong>Disponibilidad documental:</strong> Tiempo para obtener documentos faltantes</li>
                    <li><strong>Respuesta institucional:</strong> Tiempos de INFONAVIT, bancos, notarios</li>
                    <li><strong>Procesos gubernamentales:</strong> Trámites en Registro Público, catastro</li>
                    <li><strong>Cooperación del cliente:</strong> Rapidez en proporcionar información</li>
                    <li><strong>Situaciones imprevistas:</strong> Cambios normativos, días inhábiles</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">5.3 Compromisos de Comunicación</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Nos comprometemos a:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Proporcionar actualizaciones semanales del progreso</li>
                    <li>Notificar inmediatamente cualquier retraso o complicación</li>
                    <li>Mantener comunicación constante durante procesos críticos</li>
                    <li>Responder consultas en máximo 24 horas hábiles</li>
                  </ul>
                </div>

                <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <p className="text-orange-800 dark:text-orange-200 font-medium">
                    <strong>Importante:</strong> Los plazos mencionados son estimaciones basadas en nuestra experiencia. Los tiempos reales pueden variar significativamente según las circunstancias específicas de cada caso.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <DollarSign className="h-6 w-6 mr-3" />
                  6. Aspectos Económicos y Financieros
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">6.1 Estructura de Costos</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Nuestros servicios pueden incluir los siguientes conceptos:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h5 className="font-medium text-green-600">Servicios Incluidos:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        <li>Evaluación y análisis inicial</li>
                        <li>Asesoría legal especializada</li>
                        <li>Gestión administrativa</li>
                        <li>Coordinación con instituciones</li>
                        <li>Seguimiento del proceso</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-medium text-green-600">Gastos Adicionales:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        <li>Honorarios notariales</li>
                        <li>Derechos registrales</li>
                        <li>Impuestos y contribuciones</li>
                        <li>Avalúos técnicos</li>
                        <li>Gastos de gestión específicos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">6.2 Modalidades de Pago</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Ofrecemos diferentes modalidades según el tipo de servicio:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Compra directa:</strong> Adquisición de la propiedad con liquidación de deudas</li>
                    <li><strong>Servicios por honorarios:</strong> Cobro por servicios específicos prestados</li>
                    <li><strong>Modalidad mixta:</strong> Combinación de compra y servicios</li>
                    <li><strong>Pago diferido:</strong> Esquemas de pago a plazos según acuerdo</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">6.3 Transparencia Financiera</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Garantizamos total transparencia mediante:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Cotizaciones detalladas por escrito</li>
                    <li>Desglose completo de todos los costos</li>
                    <li>Explicación clara de cada concepto</li>
                    <li>Documentación de todos los pagos realizados</li>
                    <li>Estados de cuenta periódicos</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Shield className="h-6 w-6 mr-3" />
                  7. Limitaciones de Responsabilidad y Exclusiones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">7.1 Limitaciones Generales</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Rescate Vivienda no se hace responsable por:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Información falsa del cliente:</strong> Consecuencias derivadas de datos incorrectos o incompletos</li>
                    <li><strong>Cambios normativos:</strong> Modificaciones en leyes o regulaciones durante el proceso</li>
                    <li><strong>Retrasos de terceros:</strong> Demoras causadas por notarios, instituciones o autoridades</li>
                    <li><strong>Fuerza mayor:</strong> Eventos extraordinarios fuera de nuestro control</li>
                    <li><strong>Problemas preexistentes:</strong> Situaciones legales no declaradas inicialmente</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">7.2 Exclusiones Específicas</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    No asumimos responsabilidad por:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Daños o deterioro de la propiedad durante el proceso</li>
                    <li>Pérdidas financieras derivadas de decisiones del cliente</li>
                    <li>Consecuencias de actos realizados por el cliente sin autorización</li>
                    <li>Problemas derivados de documentos apócrifos o irregulares</li>
                    <li>Situaciones que requieran procesos judiciales prolongados</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">7.3 Límites de Responsabilidad Económica</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    En caso de responsabilidad comprobada:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>La responsabilidad se limitará al monto de los honorarios pagados</li>
                    <li>No incluye daños indirectos, consecuenciales o lucro cesante</li>
                    <li>Se excluyen daños morales o psicológicos</li>
                    <li>La responsabilidad prescribe en un año desde la terminación del servicio</li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <p className="text-red-800 dark:text-red-200 font-medium">
                    <strong>Advertencia:</strong> Estos límites de responsabilidad no aplican en casos de dolo, mala fe o negligencia grave comprobada de nuestra parte.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <FileText className="h-6 w-6 mr-3" />
                  8. Confidencialidad y Protección de Información
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">8.1 Compromiso de Confidencialidad</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Mantenemos estricta confidencialidad sobre:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Toda tu información personal y financiera</li>
                    <li>Detalles específicos de tu situación legal y patrimonial</li>
                    <li>Documentos y datos relacionados con la propiedad</li>
                    <li>Estrategias comerciales y acuerdos negociados</li>
                    <li>Cualquier información sensible compartida durante el proceso</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">8.2 Duración de la Confidencialidad</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Este compromiso de confidencialidad se mantiene:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Durante toda la prestación de servicios</li>
                    <li>Después de finalizar nuestra relación comercial</li>
                    <li>Incluso si el caso no es aceptado o se cancela</li>
                    <li>Sin límite temporal, salvo requerimiento legal</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">8.3 Excepciones Legales</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    La confidencialidad puede ser levantada únicamente cuando:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Sea requerido por autoridad judicial competente</li>
                    <li>Exista obligación legal de reportar información</li>
                    <li>Sea necesario para defender nuestros derechos legales</li>
                    <li>Cuentes con autorización expresa y por escrito</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Gavel className="h-6 w-6 mr-3" />
                  9. Resolución de Controversias y Jurisdicción
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">9.1 Mecanismos de Resolución</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    En caso de disputas o controversias, seguiremos este orden:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-600">Diálogo Directo</h5>
                        <p className="text-sm text-muted-foreground">Intentaremos resolver mediante comunicación directa y buena fe</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-600">Mediación</h5>
                        <p className="text-sm text-muted-foreground">Recurso a mediación profesional si el diálogo no prospera</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-600">Arbitraje</h5>
                        <p className="text-sm text-muted-foreground">Sometimiento a arbitraje comercial si las partes lo acuerdan</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-600">Vía Judicial</h5>
                        <p className="text-sm text-muted-foreground">Recurso a tribunales competentes como última instancia</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">9.2 Jurisdicción y Competencia</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Para cualquier controversia legal:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Jurisdicción:</strong> Tribunales de León, Guanajuato, México</li>
                    <li><strong>Legislación aplicable:</strong> Leyes federales y estatales mexicanas</li>
                    <li><strong>Idioma:</strong> Todos los procedimientos se realizarán en español</li>
                    <li><strong>Renuncia:</strong> Las partes renuncian a cualquier otro fuero que pudiera corresponderles</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">9.3 Costos Legales</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    En caso de procedimientos legales, cada parte cubrirá sus propios gastos legales, salvo que la resolución final determine lo contrario conforme a derecho.
                  </p>
                </div>
              </CardContent\
