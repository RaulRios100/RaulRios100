import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  Shield,
  Eye,
  Lock,
  UserCheck,
  Database,
  Phone,
  Clock,
  AlertTriangle,
  FileText,
  Users,
  Scale,
} from "lucide-react"
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
        <div className="container mx-auto px-4 max-w-5xl">
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              En Rescate Vivienda protegemos tu información personal con los más altos estándares de seguridad y
              transparencia. Tu privacidad es nuestra prioridad.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Última actualización: Enero 2024</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <Card className="border-2 border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600 text-2xl">
                  <FileText className="h-8 w-8 mr-3" />
                  Introducción y Compromiso
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Rescate Vivienda se compromete a proteger y respetar tu privacidad. Esta política explica cómo
                  recopilamos, utilizamos, almacenamos y protegemos tu información personal cuando utilizas nuestros
                  servicios de rescate de vivienda, asesoría legal y financiera.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Entendemos que confías en nosotros información sensible sobre tu situación financiera y patrimonial,
                  por lo que hemos implementado medidas estrictas para garantizar la confidencialidad y seguridad de
                  todos tus datos.
                </p>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="text-green-800 dark:text-green-200 font-medium">
                    <strong>Nuestro compromiso:</strong> Nunca vendemos, alquilamos o comercializamos tu información
                    personal con terceros para fines comerciales.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Eye className="h-6 w-6 mr-3" />
                  1. Información que Recopilamos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">1.1 Información Personal Básica</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Recopilamos información que nos proporcionas directamente cuando:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Completas nuestro cuestionario de evaluación en línea</li>
                    <li>Nos contactas por WhatsApp, teléfono o redes sociales</li>
                    <li>Solicitas una consulta o evaluación gratuita</li>
                    <li>Participas en nuestros procesos de asesoría</li>
                    <li>Firmas acuerdos de intención o contratos de servicios</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">1.2 Información Específica que Recopilamos</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h5 className="font-medium text-green-600">Datos Personales:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        <li>Nombre completo</li>
                        <li>Número de teléfono</li>
                        <li>Dirección de residencia</li>
                        <li>Fecha de nacimiento</li>
                        <li>Estado civil</li>
                        <li>Ocupación</li>
                        <li>Identificación oficial (INE/IFE)</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-medium text-green-600">Información de la Propiedad:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        <li>Dirección del inmueble</li>
                        <li>Tipo de propiedad</li>
                        <li>Valor estimado</li>
                        <li>Estado físico actual</li>
                        <li>Tiempo de abandono</li>
                        <li>Situación de ocupación</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">1.3 Información Financiera y Legal</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Información sobre deudas con INFONAVIT u otras instituciones</li>
                    <li>Estados de cuenta de créditos hipotecarios</li>
                    <li>Historial crediticio y situación en buró de crédito</li>
                    <li>Documentos legales de la propiedad (escrituras, títulos)</li>
                    <li>Información sobre procesos legales en curso</li>
                    <li>Situación fiscal y predial de la propiedad</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">1.4 Información Técnica</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    También recopilamos automáticamente cierta información cuando visitas nuestro sitio web:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Dirección IP y ubicación geográfica aproximada</li>
                    <li>Tipo de navegador y dispositivo utilizado</li>
                    <li>Páginas visitadas y tiempo de permanencia</li>
                    <li>Fuente de referencia (cómo llegaste a nuestro sitio)</li>
                    <li>Cookies y tecnologías similares para mejorar la experiencia</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Database className="h-6 w-6 mr-3" />
                  2. Cómo Utilizamos tu Información
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">2.1 Propósitos Principales</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">Utilizamos tu información personal para:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>
                      <strong>Evaluación de viabilidad:</strong> Analizar si tu caso es viable para nuestros servicios
                    </li>
                    <li>
                      <strong>Asesoría personalizada:</strong> Proporcionarte recomendaciones específicas para tu
                      situación
                    </li>
                    <li>
                      <strong>Gestión de trámites:</strong> Realizar procesos legales, financieros y administrativos
                    </li>
                    <li>
                      <strong>Comunicación:</strong> Mantenerte informado sobre el progreso de tu caso
                    </li>
                    <li>
                      <strong>Cumplimiento legal:</strong> Satisfacer obligaciones legales y regulatorias
                    </li>
                    <li>
                      <strong>Mejora de servicios:</strong> Optimizar nuestros procesos y calidad de atención
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">2.2 Procesos Específicos</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h5 className="font-medium text-green-600">Evaluación y Análisis:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        <li>Verificación de identidad y propiedad</li>
                        <li>Análisis de viabilidad financiera</li>
                        <li>Evaluación de riesgos legales</li>
                        <li>Cálculo de ofertas y propuestas</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-medium text-green-600">Gestión de Casos:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        <li>Coordinación con instituciones financieras</li>
                        <li>Trámites notariales y registrales</li>
                        <li>Seguimiento de procesos legales</li>
                        <li>Gestión de pagos y liquidaciones</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">2.3 Comunicaciones</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Utilizamos tu información de contacto para enviarte:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Actualizaciones sobre el estatus de tu caso</li>
                    <li>Recordatorios de citas y documentos pendientes</li>
                    <li>Información legal relevante para tu situación</li>
                    <li>Notificaciones sobre cambios en regulaciones</li>
                    <li>Invitaciones a consultas de seguimiento</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Lock className="h-6 w-6 mr-3" />
                  3. Protección y Seguridad de tu Información
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">3.1 Medidas Técnicas de Seguridad</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Implementamos múltiples capas de seguridad para proteger tu información:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>
                      <strong>Encriptación avanzada:</strong> Todos los datos sensibles se encriptan usando estándares
                      AES-256
                    </li>
                    <li>
                      <strong>Conexiones seguras:</strong> Utilizamos certificados SSL/TLS para todas las comunicaciones
                    </li>
                    <li>
                      <strong>Servidores protegidos:</strong> Infraestructura con firewalls y sistemas de detección de
                      intrusos
                    </li>
                    <li>
                      <strong>Respaldos seguros:</strong> Copias de seguridad encriptadas en múltiples ubicaciones
                    </li>
                    <li>
                      <strong>Actualizaciones constantes:</strong> Sistemas siempre actualizados con los últimos parches
                      de seguridad
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">3.2 Medidas Organizativas</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>
                      <strong>Acceso restringido:</strong> Solo personal autorizado y capacitado tiene acceso a
                      información personal
                    </li>
                    <li>
                      <strong>Acuerdos de confidencialidad:</strong> Todo el equipo firma acuerdos estrictos de no
                      divulgación
                    </li>
                    <li>
                      <strong>Capacitación continua:</strong> Entrenamiento regular en protección de datos y privacidad
                    </li>
                    <li>
                      <strong>Auditorías internas:</strong> Revisiones periódicas de nuestros procesos de seguridad
                    </li>
                    <li>
                      <strong>Políticas claras:</strong> Procedimientos documentados para el manejo de información
                    </li>
                    <li>
                      <strong>Monitoreo de accesos:</strong> Registro y supervisión de todos los accesos a datos
                      personales
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">3.3 Protección Física</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Oficinas con sistemas de seguridad y acceso controlado</li>
                    <li>Documentos físicos almacenados en archivos seguros</li>
                    <li>Destrucción segura de documentos cuando ya no son necesarios</li>
                    <li>Equipos de cómputo con protección contra acceso no autorizado</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-blue-800 dark:text-blue-200 font-medium">
                    <strong>Certificaciones:</strong> Cumplimos con estándares internacionales de seguridad de la
                    información y estamos en proceso de certificación ISO 27001.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <UserCheck className="h-6 w-6 mr-3" />
                  4. Compartir Información con Terceros
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">4.1 Terceros Autorizados</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Compartimos tu información únicamente cuando es necesario para brindarte nuestros servicios y solo
                    con:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>
                      <strong>Notarios públicos:</strong> Para formalización de trámites legales y escrituración
                    </li>
                    <li>
                      <strong>INFONAVIT y otras instituciones financieras:</strong> Para gestión y liquidación de deudas
                    </li>
                    <li>
                      <strong>Registro Público de la Propiedad:</strong> Para trámites registrales y verificaciones
                    </li>
                    <li>
                      <strong>Autoridades fiscales:</strong> Para cumplimiento de obligaciones tributarias
                    </li>
                    <li>
                      <strong>Tribunales y autoridades judiciales:</strong> Cuando sea requerido por mandato legal
                    </li>
                    <li>
                      <strong>Peritos valuadores:</strong> Para evaluaciones técnicas de propiedades
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">4.2 Proveedores de Servicios</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Trabajamos con proveedores especializados que nos ayudan a operar, siempre bajo estrictos acuerdos
                    de confidencialidad:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>
                      <strong>Servicios de hosting y almacenamiento:</strong> Para mantener nuestros sistemas seguros
                    </li>
                    <li>
                      <strong>Servicios de comunicación:</strong> Para envío de notificaciones y actualizaciones
                    </li>
                    <li>
                      <strong>Servicios de análisis:</strong> Para mejorar nuestros procesos (datos anonimizados)
                    </li>
                    <li>
                      <strong>Servicios legales especializados:</strong> Para casos complejos que requieren expertise
                      adicional
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">4.3 Garantías de Protección</h4>
                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <p className="text-red-800 dark:text-red-200 font-medium mb-2">
                      <strong>Compromiso Absoluto:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-700 dark:text-red-300 ml-4">
                      <li>NUNCA vendemos tu información personal</li>
                      <li>NUNCA la utilizamos para marketing de terceros</li>
                      <li>NUNCA la compartimos sin tu consentimiento explícito</li>
                      <li>NUNCA la transferimos fuera de México sin autorización</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Clock className="h-6 w-6 mr-3" />
                  5. Retención y Eliminación de Datos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">5.1 Períodos de Retención</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Conservamos tu información personal durante diferentes períodos según el tipo de dato y propósito:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h5 className="font-medium text-green-600">Datos de Casos Activos:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        <li>Durante la prestación del servicio</li>
                        <li>Hasta 5 años después de finalizado</li>
                        <li>Para seguimiento y garantías</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-medium text-green-600">Documentos Legales:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        <li>10 años para cumplimiento fiscal</li>
                        <li>Según requerimientos legales</li>
                        <li>Para defensa de derechos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">5.2 Eliminación Segura</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Cuando ya no necesitamos conservar tu información:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Eliminamos de forma segura e irreversible todos los datos digitales</li>
                    <li>Destruimos físicamente documentos en papel mediante trituración</li>
                    <li>Certificamos la eliminación completa de respaldos</li>
                    <li>Notificamos a terceros autorizados para que eliminen copias</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Users className="h-6 w-6 mr-3" />
                  6. Tus Derechos como Titular de Datos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">6.1 Derechos ARCO Plus</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Conforme a la Ley Federal de Protección de Datos Personales, tienes derecho a:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h5 className="font-medium text-green-600">Derechos Básicos:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        <li>
                          <strong>Acceder:</strong> Conocer qué datos tenemos sobre ti
                        </li>
                        <li>
                          <strong>Rectificar:</strong> Corregir información incorrecta
                        </li>
                        <li>
                          <strong>Cancelar:</strong> Solicitar eliminación de datos
                        </li>
                        <li>
                          <strong>Oponerte:</strong> Al tratamiento de tus datos
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-medium text-green-600">Derechos Adicionales:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        <li>
                          <strong>Portabilidad:</strong> Obtener copia de tus datos
                        </li>
                        <li>
                          <strong>Limitación:</strong> Restringir ciertos usos
                        </li>
                        <li>
                          <strong>Revocación:</strong> Retirar consentimiento
                        </li>
                        <li>
                          <strong>No discriminación:</strong> Por ejercer tus derechos
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">6.2 Cómo Ejercer tus Derechos</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Para ejercer cualquiera de estos derechos, puedes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Contactarnos por WhatsApp al +52 4775780721</li>
                    <li>Presentar solicitud por escrito en nuestras oficinas</li>
                    <li>Enviar comunicación a través de nuestros canales oficiales</li>
                  </ul>
                  <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800 mt-4">
                    <p className="text-green-800 dark:text-green-200 font-medium">
                      <strong>Tiempo de respuesta:</strong> Máximo 20 días hábiles para responder a tu solicitud.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">6.3 Información Requerida</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">Para procesar tu solicitud necesitamos:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Identificación oficial vigente</li>
                    <li>Descripción clara de la solicitud</li>
                    <li>Especificación de los datos involucrados</li>
                    <li>Domicilio para recibir notificaciones</li>
                    <li>En su caso, documentos que acrediten la representación</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Scale className="h-6 w-6 mr-3" />
                  7. Transferencias Internacionales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Política de No Transferencia:</strong> Rescate Vivienda NO transfiere información personal
                  fuera de México. Todos nuestros servidores, proveedores y procesos se mantienen dentro del territorio
                  nacional para garantizar la aplicación de las leyes mexicanas de protección de datos.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  En el caso excepcional de requerir una transferencia internacional (por ejemplo, para servicios de
                  hosting en la nube), solicitaremos tu consentimiento explícito y garantizaremos que el país de destino
                  tenga un nivel de protección equivalente al mexicano.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <AlertTriangle className="h-6 w-6 mr-3" />
                  8. Notificación de Brechas de Seguridad
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  En el improbable caso de una brecha de seguridad que pueda afectar tus datos personales:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Te notificaremos dentro de las primeras 72 horas</li>
                  <li>Explicaremos qué información pudo verse comprometida</li>
                  <li>Detallaremos las medidas tomadas para contener el incidente</li>
                  <li>Proporcionaremos recomendaciones para protegerte</li>
                  <li>Reportaremos el incidente a las autoridades competentes</li>
                </ul>
                <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <p className="text-orange-800 dark:text-orange-200 font-medium">
                    <strong>Compromiso de Transparencia:</strong> Mantendremos comunicación constante durante todo el
                    proceso de resolución.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Phone className="h-6 w-6 mr-3" />
                  9. Contacto y Responsable de Datos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Para ejercer tus derechos, presentar quejas o resolver dudas sobre esta política de privacidad:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Responsable de Protección de Datos</h4>
                  <div className="space-y-2">
                    <p className="font-semibold">Rescate Vivienda</p>
                    <p className="text-muted-foreground">WhatsApp: +52 4775780721</p>
                    <p className="text-muted-foreground">Horario de atención: Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Tiempo de respuesta: Máximo 20 días hábiles</p>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-blue-800 dark:text-blue-200 font-medium">
                    <strong>Derecho de recurso:</strong> Si no estás satisfecho con nuestra respuesta, puedes acudir al
                    Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales
                    (INAI).
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-500/20 bg-green-50 dark:bg-green-950/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4">
                  Actualizaciones de esta Política
                </h4>
                <p className="text-sm text-green-700 dark:text-green-300 leading-relaxed mb-3">
                  Esta política de privacidad puede actualizarse periódicamente para reflejar cambios en nuestras
                  prácticas, servicios o requisitos legales. Cuando realicemos cambios significativos:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-green-700 dark:text-green-300 ml-4">
                  <li>Te notificaremos por WhatsApp o teléfono</li>
                  <li>Publicaremos la nueva versión en nuestro sitio web</li>
                  <li>Solicitaremos tu consentimiento si es requerido por ley</li>
                  <li>Mantendremos un historial de versiones anteriores</li>
                </ul>
                <p className="text-sm text-green-700 dark:text-green-300 leading-relaxed mt-3">
                  La fecha de la última actualización siempre aparecerá en la parte superior de esta página.
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
