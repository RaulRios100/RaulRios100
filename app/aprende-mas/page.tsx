import { MessageCircle } from "lucide-react"

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Aprende Más</h1>
      <p className="text-lg mb-8">
        Descubre cómo podemos ayudarte a mejorar tu negocio con nuestros servicios de marketing digital y SEO.
      </p>
      {/* CTA section */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://wa.me/5256202022210?text=Hola%2C%20me%20interesa%20agendar%20una%20auditor%C3%ADa%20SEO%20para%20mi%20negocio.%20%C2%BFPodr%C3%ADamos%20hablar%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Agendar Auditoría
        </a>
        <a
          href="https://wa.me/5256202022210?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20marketing%20digital%20con%20IA.%20%C2%BFPodemos%20conversar%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Contactar por WhatsApp
        </a>
      </div>
      {/* rest of code here */}
    </div>
  )
}
