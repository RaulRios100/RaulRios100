"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { trackContact } from "@/components/facebook-pixel"

export default function NavigationHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const handleContactClick = () => {
    trackContact()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="AI Positioning" width={40} height={40} className="h-8 w-8" />
          <span className="font-bold text-xl">AI Positioning</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium hover:text-primary">
              Servicios
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/servicios/ai-overviews">AI Overviews</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/servicios/optimizacion-llm">Optimización LLM</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/servicios/schema-markup">Schema Markup</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/servicios/chatbots-ia">Chatbots IA</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/precios" className="text-sm font-medium hover:text-primary">
            Precios
          </Link>
          <Link href="/casos-de-exito" className="text-sm font-medium hover:text-primary">
            Casos de Éxito
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary">
            Blog
          </Link>
          <Link href="/sobre-nosotros" className="text-sm font-medium hover:text-primary">
            Nosotros
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link href="/contacto" onClick={handleContactClick}>
              Contacto
            </Link>
          </Button>
          <Button asChild>
            <Link href="/agendar-sesion">Agendar Sesión</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Servicios</h3>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/servicios/ai-overviews"
                    className="block text-sm hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Overviews
                  </Link>
                  <Link
                    href="/servicios/optimizacion-llm"
                    className="block text-sm hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Optimización LLM
                  </Link>
                  <Link
                    href="/servicios/schema-markup"
                    className="block text-sm hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Schema Markup
                  </Link>
                  <Link
                    href="/servicios/chatbots-ia"
                    className="block text-sm hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Chatbots IA
                  </Link>
                </div>
              </div>

              <Link href="/precios" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                Precios
              </Link>
              <Link
                href="/casos-de-exito"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Casos de Éxito
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
              <Link
                href="/sobre-nosotros"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>

              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link
                    href="/contacto"
                    onClick={() => {
                      setIsOpen(false)
                      handleContactClick()
                    }}
                  >
                    Contacto
                  </Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/agendar-sesion" onClick={() => setIsOpen(false)}>
                    Agendar Sesión
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
