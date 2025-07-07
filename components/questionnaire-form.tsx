"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight, MessageCircle } from "lucide-react"

export function QuestionnaireForm() {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    telefono: "",
    correo: "",
    ciudadColonia: "",
    estadoPropiedad: "",
    estadoPropiedadOtra: "",
    aniosPropiedad: "",
    superficieCasa: "",
    hipotecaActiva: "",
    saldoPendiente: "",
    compartirDocumentos: "",
    queHacerPropiedad: "",
    estadoCivil: "",
    estadoCivilOtro: "",
    dispuestoCoinversion: "",
    juicioRelacionado: "",
    prontoResolver: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleRadioChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    let message =
      "¡Hola! He completado el cuestionario de Rescate Vivienda y me gustaría que un asesor me contacte.\n\n"
    message += "--- Sección 1: Datos de contacto ---\n"
    message += `1. Nombre completo: ${formData.nombreCompleto}\n`
    message += `2. Teléfono (WhatsApp): ${formData.telefono}\n`
    message += `3. Correo electrónico: ${formData.correo}\n\n`

    message += "--- Sección 2: Información de la propiedad ---\n"
    message += `4. Ciudad y colonia: ${formData.ciudadColonia}\n`
    message += `5. Estado actual de la propiedad: ${formData.estadoPropiedad}`
    if (formData.estadoPropiedad === "Otra" && formData.estadoPropiedadOtra) {
      message += ` (${formData.estadoPropiedadOtra})\n`
    } else {
      message += "\n"
    }
    message += `6. Años de la propiedad: ${formData.aniosPropiedad}\n`
    message += `7. Superficie de la casa: ${formData.superficieCasa}\n\n`

    message += "--- Sección 3: Situación legal y crediticia ---\n"
    message += `8. Hipoteca activa: ${formData.hipotecaActiva}\n`
    message += `9. Saldo pendiente/deuda: ${formData.saldoPendiente}\n`
    message += `10. Dispuesto a compartir documentos: ${formData.compartirDocumentos}\n`
    message += `11. Qué te gustaría hacer con la propiedad: ${formData.queHacerPropiedad}\n\n`

    message += "--- Sección 4: Estado civil y disposición ---\n"
    message += `12. Estado civil: ${formData.estadoCivil}`
    if (formData.estadoCivil === "Otro" && formData.estadoCivilOtro) {
      message += ` (${formData.estadoCivilOtro})\n`
    } else {
      message += "\n"
    }
    message += `13. Dispuesto a firmar contrato de coinversión: ${formData.dispuestoCoinversion}\n`
    message += `14. Juicio relacionado con la casa: ${formData.juicioRelacionado}\n`
    message += `15. Qué tan pronto necesitas resolver: ${formData.prontoResolver}\n\n`

    message +=
      "Muchas gracias. Con esta información analizaremos si tu caso es viable para ayudarte a resolver la deuda o vender tu casa de forma rápida y segura. Un asesor te contactará pronto si el caso califica."

    const whatsappNumber = "524775780721" // Tu número de WhatsApp
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg border-2 border-green-500/20">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl md:text-4xl font-bold text-green-600">
          📝 Cuestionario para Propietarios
        </CardTitle>
        <p className="text-muted-foreground text-lg mt-2">
          Ayúdanos a entender tu situación para ofrecerte la mejor solución.
        </p>
      </CardHeader>
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Sección 1: Datos de contacto */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-green-700 dark:text-green-400 border-b pb-2 mb-4">
              Sección 1: Datos de contacto (obligatorio)
            </h3>
            <div>
              <Label htmlFor="nombreCompleto" className="mb-2 block">
                1. Nombre completo del propietario:
              </Label>
              <Input
                id="nombreCompleto"
                value={formData.nombreCompleto}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                required
              />
            </div>
            <div>
              <Label htmlFor="telefono" className="mb-2 block">
                2. Número de teléfono (WhatsApp preferente):
              </Label>
              <Input
                id="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Ej. 521234567890"
                type="tel"
                required
              />
            </div>
            <div>
              <Label htmlFor="correo" className="mb-2 block">
                3. Correo electrónico de contacto:
              </Label>
              <Input
                id="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="tu.email@ejemplo.com"
                type="email"
                required
              />
            </div>
          </div>

          {/* Sección 2: Información de la propiedad */}
          <div className="space-y-4 pt-6 border-t border-border">
            <h3 className="text-2xl font-semibold text-green-700 dark:text-green-400 border-b pb-2 mb-4">
              Sección 2: Información de la propiedad
            </h3>
            <div>
              <Label htmlFor="ciudadColonia" className="mb-2 block">
                4. ¿En qué ciudad y colonia se ubica la casa?
              </Label>
              <Input
                id="ciudadColonia"
                value={formData.ciudadColonia}
                onChange={handleChange}
                placeholder="Ej. León, Guanajuato, Col. Jardines del Moral"
              />
            </div>
            <div>
              <Label className="mb-2 block">5. ¿Cuál es el estado actual de la propiedad?</Label>
              <RadioGroup
                onValueChange={(value) => handleRadioChange("estadoPropiedad", value)}
                value={formData.estadoPropiedad}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Habitada por mí o mi familia" id="estadoPropiedad1" />
                  <Label htmlFor="estadoPropiedad1">Habitada por mí o mi familia</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Deshabitada pero en buen estado" id="estadoPropiedad2" />
                  <Label htmlFor="estadoPropiedad2">Deshabitada pero en buen estado</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Abandonada o vandalizada" id="estadoPropiedad3" />
                  <Label htmlFor="estadoPropiedad3">Abandonada o vandalizada</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Rentada a otra persona" id="estadoPropiedad4" />
                  <Label htmlFor="estadoPropiedad4">Rentada a otra persona</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Otra" id="estadoPropiedad5" />
                  <Label htmlFor="estadoPropiedad5">Otra (especificar)</Label>
                </div>
              </RadioGroup>
              {formData.estadoPropiedad === "Otra" && (
                <Input
                  id="estadoPropiedadOtra"
                  value={formData.estadoPropiedadOtra}
                  onChange={handleChange}
                  placeholder="Especifica el estado de la propiedad"
                  className="mt-2"
                />
              )}
            </div>
            <div>
              <Label htmlFor="aniosPropiedad" className="mb-2 block">
                6. ¿Cuántos años tiene la propiedad (aproximadamente)?
              </Label>
              <Input
                id="aniosPropiedad"
                value={formData.aniosPropiedad}
                onChange={handleChange}
                placeholder="Ej. 15 años"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="superficieCasa" className="mb-2 block">
                7. ¿Qué superficie tiene la casa (terreno y construcción si sabes)?
              </Label>
              <Input
                id="superficieCasa"
                value={formData.superficieCasa}
                onChange={handleChange}
                placeholder="Ej. Terreno 120m², Construcción 80m²"
              />
            </div>
          </div>

          {/* Sección 3: Situación legal y crediticia */}
          <div className="space-y-4 pt-6 border-t border-border">
            <h3 className="text-2xl font-semibold text-green-700 dark:text-green-400 border-b pb-2 mb-4">
              Sección 3: Situación legal y crediticia
            </h3>
            <div>
              <Label className="mb-2 block">8. ¿La propiedad tiene hipoteca activa?</Label>
              <RadioGroup
                onValueChange={(value) => handleRadioChange("hipotecaActiva", value)}
                value={formData.hipotecaActiva}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Sí, con INFONAVIT" id="hipoteca1" />
                  <Label htmlFor="hipoteca1">Sí, con INFONAVIT</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Sí, con FOVISSSTE" id="hipoteca2" />
                  <Label htmlFor="hipoteca2">Sí, con FOVISSSTE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Sí, con banco" id="hipoteca3" />
                  <Label htmlFor="hipoteca3">Sí, con banco</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="No tiene hipoteca" id="hipoteca4" />
                  <Label htmlFor="hipoteca4">No tiene hipoteca</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="No lo sé" id="hipoteca5" />
                  <Label htmlFor="hipoteca5">No lo sé</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="saldoPendiente" className="mb-2 block">
                9. ¿Conoces el saldo pendiente del crédito o la deuda acumulada?
              </Label>
              <Input
                id="saldoPendiente"
                value={formData.saldoPendiente}
                onChange={handleChange}
                placeholder="Ej. $250,000 MXN aprox."
              />
            </div>
            <div>
              <Label className="mb-2 block">
                10. ¿Estás dispuesto/a a compartir tus documentos para análisis legal (escritura, predial, estado de
                cuenta)?
              </Label>
              <RadioGroup
                onValueChange={(value) => handleRadioChange("compartirDocumentos", value)}
                value={formData.compartirDocumentos}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Sí" id="docsSi" />
                  <Label htmlFor="docsSi">Sí</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="No" id="docsNo" />
                  <Label htmlFor="docsNo">No</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label className="mb-2 block">11. ¿Qué te gustaría hacer con la propiedad?</Label>
              <RadioGroup
                onValueChange={(value) => handleRadioChange("queHacerPropiedad", value)}
                value={formData.queHacerPropiedad}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Cancelar la deuda y vender" id="accion1" />
                  <Label htmlFor="accion1">Cancelar la deuda y vender</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Vender con la deuda incluida" id="accion2" />
                  <Label htmlFor="accion2">Vender con la deuda incluida</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Remodelarla en asociación" id="accion3" />
                  <Label htmlFor="accion3">Remodelarla en asociación</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Aún no estoy seguro/a" id="accion4" />
                  <Label htmlFor="accion4">Aún no estoy seguro/a</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Sección 4: Estado civil y disposición */}
          <div className="space-y-4 pt-6 border-t border-border">
            <h3 className="text-2xl font-semibold text-green-700 dark:text-green-400 border-b pb-2 mb-4">
              Sección 4: Estado civil y disposición
            </h3>
            <div>
              <Label className="mb-2 block">12. ¿Estás casado(a)? Si es así, ¿con qué régimen?</Label>
              <RadioGroup
                onValueChange={(value) => handleRadioChange("estadoCivil", value)}
                value={formData.estadoCivil}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="No estoy casado" id="civil1" />
                  <Label htmlFor="civil1">No estoy casado</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Sí, por bienes mancomunados" id="civil2" />
                  <Label htmlFor="civil2">Sí, por bienes mancomunados</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Sí, por separación de bienes" id="civil3" />
                  <Label htmlFor="civil3">Sí, por separación de bienes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Otro" id="civil4" />
                  <Label htmlFor="civil4">Otro (especificar)</Label>
                </div>
              </RadioGroup>
              {formData.estadoCivil === "Otro" && (
                <Input
                  id="estadoCivilOtro"
                  value={formData.estadoCivilOtro}
                  onChange={handleChange}
                  placeholder="Especifica el régimen"
                  className="mt-2"
                />
              )}
            </div>
            <div>
              <Label className="mb-2 block">
                13. ¿Estás dispuesto/a a firmar un contrato de coinversión o asociación para que te ayudemos a resolver
                la deuda y venderla juntos?
              </Label>
              <RadioGroup
                onValueChange={(value) => handleRadioChange("dispuestoCoinversion", value)}
                value={formData.dispuestoCoinversion}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Sí" id="coinversionSi" />
                  <Label htmlFor="coinversionSi">Sí</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="No" id="coinversionNo" />
                  <Label htmlFor="coinversionNo">No</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Quisiera saber más" id="coinversionMas" />
                  <Label htmlFor="coinversionMas">Quisiera saber más</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label className="mb-2 block">
                14. ¿Actualmente cuentas con algún juicio (intestamentario, sucesorio, etc.) relacionado con esta casa?
              </Label>
              <RadioGroup
                onValueChange={(value) => handleRadioChange("juicioRelacionado", value)}
                value={formData.juicioRelacionado}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Sí" id="juicioSi" />
                  <Label htmlFor="juicioSi">Sí</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="No" id="juicioNo" />
                  <Label htmlFor="juicioNo">No</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="En proceso" id="juicioProceso" />
                  <Label htmlFor="juicioProceso">En proceso</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label className="mb-2 block">15. ¿Qué tan pronto necesitas resolver esta situación?</Label>
              <RadioGroup
                onValueChange={(value) => handleRadioChange("prontoResolver", value)}
                value={formData.prontoResolver}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Urgente (menos de 30 días)" id="pronto1" />
                  <Label htmlFor="pronto1">Urgente (menos de 30 días)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="En 1-3 meses" id="pronto2" />
                  <Label htmlFor="pronto2">En 1-3 meses</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="No tengo prisa" id="pronto3" />
                  <Label htmlFor="pronto3">No tengo prisa</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Solo estoy explorando opciones" id="pronto4" />
                  <Label htmlFor="pronto4">Solo estoy explorando opciones</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Muchas gracias. Con esta información analizaremos si tu caso es viable para ayudarte a resolver la deuda o
              vender tu casa de forma rápida y segura. Un asesor te contactará pronto si el caso califica.
            </p>
            <Button
              type="submit"
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-bold group"
            >
              <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Enviar Cuestionario por WhatsApp
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
