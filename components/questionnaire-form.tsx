"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un correo electrónico válido.",
  }),
  phone: z.string().min(10, {
    message: "El número de teléfono debe tener al menos 10 dígitos.",
  }),
  propertyState: z.string().min(2, {
    message: "Por favor, introduce el estado de la propiedad.",
  }),
  debtAmount: z.string().min(1, {
    message: "Por favor, introduce el monto aproximado de la deuda.",
  }),
})

export function QuestionnaireForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      propertyState: "",
      debtAmount: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre Completo</FormLabel>
              <FormControl>
                <Input placeholder="Ingresa tu nombre" {...field} />
              </FormControl>
              <FormDescription>¿Cómo te llamas?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input placeholder="correo@ejemplo.com" {...field} />
              </FormControl>
              <FormDescription>¿Cuál es tu dirección de correo electrónico?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de Teléfono</FormLabel>
              <FormControl>
                <Input placeholder="Ingresa tu número a 10 dígitos" {...field} />
              </FormControl>
              <FormDescription>¿Cuál es tu número de teléfono?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="propertyState"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estado de la Propiedad</FormLabel>
              <FormControl>
                <Input placeholder="¿En qué estado se encuentra la propiedad?" {...field} />
              </FormControl>
              <FormDescription>¿En qué estado se encuentra la propiedad?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="debtAmount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Monto Aproximado de la Deuda</FormLabel>
              <FormControl>
                <Input placeholder="¿Cuál es el monto aproximado de la deuda?" {...field} />
              </FormControl>
              <FormDescription>¿Cuál es el monto aproximado de la deuda?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Enviar Cuestionario</Button>
      </form>
    </Form>
  )
}
