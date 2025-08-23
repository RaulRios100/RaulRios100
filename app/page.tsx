"use client"

import { ArrowRight, Star, Users, Zap, Shield, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Optimiza tu presencia en línea con IA</h1>
        <p className="text-xl mb-8">Agenda tu Auditoría de SEO con IA</p>
        <Button
          size="lg"
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() =>
            window.open(
              "https://wa.me/5256202022210?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20marketing%20digital%20con%20IA",
              "_blank",
            )
          }
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Contactar por WhatsApp
        </Button>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Feature 1 */}
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
          <Zap className="h-12 w-12 mb-4 text-orange-600" />
          <h2 className="text-2xl font-bold mb-4">Potencia tu negocio con IA</h2>
          <p className="text-lg mb-8">
            Descubre cómo podemos mejorar tu presencia en línea utilizando la inteligencia artificial.
          </p>
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowRight className="mr-2 h-5 w-5" />
            Más información
          </Button>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
          <Shield className="h-12 w-12 mb-4 text-orange-600" />
          <h2 className="text-2xl font-bold mb-4">Seguridad y confidencialidad</h2>
          <p className="text-lg mb-8">Tu información está segura con nosotros. Confidencialidad garantizada.</p>
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowRight className="mr-2 h-5 w-5" />
            Más información
          </Button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-16">
        <h2 className="text-2xl font-bold mb-8">Nuestros clientes hablan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
            <Star className="h-12 w-12 mb-4 text-orange-600" />
            <p className="text-lg mb-4">
              "La auditoría de SEO con IA fue una experiencia increíble. Mejoró significativamente nuestro ranking en
              los motores de búsqueda."
            </p>
            <div className="flex items-center">
              <Users className="h-8 w-8 mr-2 text-gray-600" />
              <span className="text-lg font-semibold">Juan Pérez</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
            <Star className="h-12 w-12 mb-4 text-orange-600" />
            <p className="text-lg mb-4">
              "Nuestro negocio creció exponencialmente después de implementar los servicios de marketing digital con
              IA."
            </p>
            <div className="flex items-center">
              <Users className="h-8 w-8 mr-2 text-gray-600" />
              <span className="text-lg font-semibold">Ana Martínez</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-600 text-white p-8 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">¿Listo para dar un salto?</h2>
        <p className="text-lg mb-8">Descubre cómo podemos ayudarte a alcanzar tus objetivos de marketing digital.</p>
        <Button
          size="lg"
          className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce-subtle"
          onClick={() => window.open("https://wa.me/5256202022210", "_blank")}
        >
          Agenda tu auditoría
        </Button>
      </div>
    </div>
  )
}
