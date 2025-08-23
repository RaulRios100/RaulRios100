"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Menu, X } from "lucide-react"
import { useState } from "react"

interface NavigationHeaderProps {
  title: string
  showBackButton?: boolean
}

export default function NavigationHeader({ title, showBackButton = true }: NavigationHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios/ai-overviews" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" },
    { name: "Calendario", href: "/calendario" },
  ]

  return (
    <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <Button variant="outline" size="sm" className="bg-transparent" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver
              </Button>
            )}
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden bg-transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-700 pt-4">
            <div className="flex flex-col gap-3">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
