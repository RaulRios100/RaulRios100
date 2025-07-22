"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { FileText, Send, ArrowRight, User, Home, DollarSign } from "lucide-react"

export function QuestionnaireForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    ciudad: "",
    tipoPropiedad: "",
    situacionDeuda: "",
    tiempoAbandonada: "",
    valorEstimado: "",
    deudaAproximada: "",
    documentos: "",
    objetivoPrincipal: "",
    comentarios: "",
    aceptaTerminos: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.aceptaTerminos) {
      alert("Debes aceptar los términos y condiciones para continuar.")
      return
    }

    const message = `¡Hola! He completado el cuestionario de evaluación:

📋 *DATOS PERSONALES*
• Nombre: ${formData.nombre}
• Teléfono: ${formData.telefono}
• Ciudad: ${formData.ciudad}

🏠 *INFORMACIÓN DE LA PROPIEDAD*
• Tipo: ${formData.tipoPropiedad}
• Situación de deuda: ${formData.situacionDeuda}
• Tiempo abandonada: ${formData.tiempoAbandonada}
• Valor estimado: ${formData.valorEstimado}
• Deuda aproximada: ${formData.deudaAproximada}

📄 *DOCUMENTACIÓN*
• Estado de documentos: ${formData.documentos}

🎯 *OBJETIVO*
• Objetivo principal: ${formData.objetivoPrincipal}

💬 *COMENTARIOS ADICIONALES*
${formData.comentarios || "Ninguno"}

¿Pueden evaluar mi caso?`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/524775780721?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
        Evalúa tu <span className="text-green-600">Caso</span>
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
        Completa este cuestionario para recibir una evaluación personalizada de tu situación. Es gratuito y sin
        compromiso.
      </p>

      <Card className="max-w-4xl mx-auto border-2 border-green-500/20 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-green-600">Cuestionario de Evaluación</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Datos Personales */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold flex items-center">
                <User className="h-6 w-6 mr-2 text-green-600" />
                Datos Personales
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre completo *</Label>
                  <Input
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => handleInputChange("nombre", e.target.value)}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono *</Label>
                  <Input
                    id="telefono"
                    value={formData.telefono}
                    onChange={(e) => handleInputChange("telefono", e.target.value)}
                    placeholder="10 dígitos"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ciudad">Ciudad donde está la propiedad *</Label>
                <Input
                  id="ciudad"
                  value={formData.ciudad}
                  onChange={(e) => handleInputChange("ciudad", e.target.value)}
                  placeholder="Ciudad, Estado"
                  required
                />
              </div>
            </div>

            {/* Información de la Propiedad */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold flex items-center">
                <Home className="h-6 w-6 mr-2 text-green-600" />
                Información de la Propiedad
              </h3>

              <div className="space-y-4">
                <Label>Tipo de propiedad *</Label>
                <RadioGroup
                  value={formData.tipoPropiedad}
                  onValueChange={(value) => handleInputChange("tipoPropiedad", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="casa" id="casa" />
                    <Label htmlFor="casa">Casa</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="departamento" id="departamento" />
                    <Label htmlFor="departamento">Departamento</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="duplex" id="duplex" />
                    <Label htmlFor="duplex">Dúplex</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label>Situación actual de la deuda *</Label>
                <RadioGroup
                  value={formData.situacionDeuda}
                  onValueChange={(value) => handleInputChange("situacionDeuda", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="al-corriente" id="al-corriente" />
                    <Label htmlFor="al-corriente">Al corriente con pagos</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="atrasado" id="atrasado" />
                    <Label htmlFor="atrasado">Atrasado en pagos</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="demanda" id="demanda" />
                    <Label htmlFor="demanda">En proceso de demanda</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="adjudicado" id="adjudicado" />
                    <Label htmlFor="adjudicado">Ya fue adjudicado</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label>¿Cuánto tiempo lleva deshabitada? *</Label>
                <RadioGroup
                  value={formData.tiempoAbandonada}
                  onValueChange={(value) => handleInputChange("tiempoAbandonada", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="menos-1-año" id="menos-1-año" />
                    <Label htmlFor="menos-1-año">Menos de 1 año</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1-3-años" id="1-3-años" />
                    <Label htmlFor="1-3-años">1 a 3 años</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3-5-años" id="3-5-años" />
                    <Label htmlFor="3-5-años">3 a 5 años</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mas-5-años" id="mas-5-años" />
                    <Label htmlFor="mas-5-años">Más de 5 años</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="valorEstimado">Valor estimado de la propiedad</Label>
                  <Input
                    id="valorEstimado"
                    value={formData.valorEstimado}
                    onChange={(e) => handleInputChange("valorEstimado", e.target.value)}
                    placeholder="Ej: $500,000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deudaAproximada">Deuda aproximada</Label>
                  <Input
                    id="deudaAproximada"
                    value={formData.deudaAproximada}
                    onChange={(e) => handleInputChange("deudaAproximada", e.target.value)}
                    placeholder="Ej: $200,000"
                  />
                </div>
              </div>
            </div>

            {/* Documentación */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold flex items-center">
                <FileText className="h-6 w-6 mr-2 text-green-600" />
                Documentación
              </h3>

              <div className="space-y-4">
                <Label>Estado de tus documentos *</Label>
                <RadioGroup
                  value={formData.documentos}
                  onValueChange={(value) => handleInputChange("documentos", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="completos" id="completos" />
                    <Label htmlFor="completos">Tengo escrituras y documentos completos</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="parciales" id="parciales" />
                    <Label htmlFor="parciales">Tengo algunos documentos</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sin-documentos" id="sin-documentos" />
                    <Label htmlFor="sin-documentos">No tengo documentos</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="herencia" id="herencia" />
                    <Label htmlFor="herencia">Es herencia sin regularizar</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Objetivo */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold flex items-center">
                <DollarSign className="h-6 w-6 mr-2 text-green-600" />
                Tu Objetivo
              </h3>

              <div className="space-y-4">
                <Label>¿Cuál es tu objetivo principal? *</Label>
                <RadioGroup
                  value={formData.objetivoPrincipal}
                  onValueChange={(value) => handleInputChange("objetivoPrincipal", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="vender-rapido" id="vender-rapido" />
                    <Label htmlFor="vender-rapido">Vender rápido y salir de deudas</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="limpiar-buro" id="limpiar-buro" />
                    <Label htmlFor="limpiar-buro">Limpiar mi buró de crédito</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="obtener-efectivo" id="obtener-efectivo" />
                    <Label htmlFor="obtener-efectivo">Obtener efectivo por la propiedad</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="regularizar" id="regularizar" />
                    <Label htmlFor="regularizar">Solo regularizar documentos</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Comentarios */}
            <div className="space-y-2">
              <Label htmlFor="comentarios">Comentarios adicionales</Label>
              <Textarea
                id="comentarios"
                value={formData.comentarios}
                onChange={(e) => handleInputChange("comentarios", e.target.value)}
                placeholder="Cuéntanos más detalles sobre tu situación..."
                rows={4}
              />
            </div>

            {/* Términos */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terminos"
                checked={formData.aceptaTerminos}
                onCheckedChange={(checked) => handleInputChange("aceptaTerminos", checked as boolean)}
              />
              <Label htmlFor="terminos" className="text-sm">
                Acepto los{" "}
                <a
                  href="/terminos-condiciones"
                  className="text-green-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  términos y condiciones
                </a>{" "}
                y la{" "}
                <a
                  href="/politica-privacidad"
                  className="text-green-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  política de privacidad
                </a>
                *
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg group"
            >
              <Send className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Enviar Evaluación por WhatsApp
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
