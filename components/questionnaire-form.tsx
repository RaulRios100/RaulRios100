"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, MessageCircle } from "lucide-react"

export function QuestionnaireForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyState: "",
    debtAmount: "",
    propertyCondition: "",
    additionalInfo: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres"
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Por favor, introduce un correo electrónico válido"
    }

    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = "El número de teléfono debe tener al menos 10 dígitos"
    }

    if (!formData.propertyState.trim() || formData.propertyState.length < 2) {
      newErrors.propertyState = "Por favor, introduce el estado de la propiedad"
    }

    if (!formData.debtAmount.trim()) {
      newErrors.debtAmount = "Por favor, introduce el monto aproximado de la deuda"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Create WhatsApp message with form data
      const message = `¡Hola! He llenado el cuestionario en su sitio web:

📋 *Información Personal:*
• Nombre: ${formData.name}
• Email: ${formData.email}
• Teléfono: ${formData.phone}

🏠 *Información de la Propiedad:*
• Estado: ${formData.propertyState}
• Monto de deuda aproximado: ${formData.debtAmount}
• Condición de la propiedad: ${formData.propertyCondition || "No especificada"}

💬 *Información adicional:*
${formData.additionalInfo || "Ninguna"}

Me gustaría recibir más información sobre sus servicios de liberación de vivienda.`

      const encodedMessage = encodeURIComponent(message)
      window.open(`https://wa.me/524791080098?text=${encodedMessage}`, "_blank")
      setIsSubmitted(true)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto border-2 border-green-500/20 bg-green-50 dark:bg-green-950/20">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-4">¡Cuestionario Enviado!</h3>
          <p className="text-green-600 dark:text-green-400 mb-6">
            Hemos abierto WhatsApp con tu información. Envía el mensaje para que podamos contactarte lo antes posible.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-950"
          >
            Enviar Otro Cuestionario
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-4 py-2 text-sm font-medium mb-6">
          📋 Evaluación Gratuita
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <FileText className="h-10 w-10 text-green-600 mx-auto mb-4" />
          Cuestionario de <span className="text-green-600">Evaluación</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Completa este formulario para recibir una evaluación personalizada de tu caso
        </p>
      </div>

      <Card className="border-2 hover:border-green-500/50 transition-colors">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-green-600">Información para tu Evaluación</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Nombre Completo *
                </Label>
                <Input
                  id="name"
                  placeholder="Ingresa tu nombre completo"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Correo Electrónico *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Número de Teléfono *
                </Label>
                <Input
                  id="phone"
                  placeholder="Ingresa tu número a 10 dígitos"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="propertyState" className="text-sm font-medium">
                  Estado de la Propiedad *
                </Label>
                <Input
                  id="propertyState"
                  placeholder="¿En qué estado se encuentra?"
                  value={formData.propertyState}
                  onChange={(e) => handleInputChange("propertyState", e.target.value)}
                  className={errors.propertyState ? "border-red-500" : ""}
                />
                {errors.propertyState && <p className="text-sm text-red-500">{errors.propertyState}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="debtAmount" className="text-sm font-medium">
                  Monto Aproximado de la Deuda *
                </Label>
                <Input
                  id="debtAmount"
                  placeholder="Ej: $500,000 MXN"
                  value={formData.debtAmount}
                  onChange={(e) => handleInputChange("debtAmount", e.target.value)}
                  className={errors.debtAmount ? "border-red-500" : ""}
                />
                {errors.debtAmount && <p className="text-sm text-red-500">{errors.debtAmount}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="propertyCondition" className="text-sm font-medium">
                  Condición Actual de la Propiedad
                </Label>
                <Input
                  id="propertyCondition"
                  placeholder="Ej: Abandonada, habitada, vandalizada"
                  value={formData.propertyCondition}
                  onChange={(e) => handleInputChange("propertyCondition", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo" className="text-sm font-medium">
                Información Adicional
              </Label>
              <Textarea
                id="additionalInfo"
                placeholder="Cuéntanos más detalles sobre tu situación..."
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                rows={4}
              />
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Nota:</strong> Esta información será enviada por WhatsApp para una evaluación inicial. Todos los
                datos son confidenciales y solo se utilizarán para brindarte la mejor asesoría.
              </p>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg group"
            >
              <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Enviar Cuestionario por WhatsApp
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
