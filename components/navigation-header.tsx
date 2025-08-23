"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface NavigationHeaderProps {
  title: string
  showBackButton?: boolean
}

export default function NavigationHeader({ title, showBackButton = true }: NavigationHeaderProps) {
  return (
    <header className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver
              </Button>
            )}
            <h1 className="text-xl font-bold text-white">{title}</h1>
          </div>
        </div>
      </div>
    </header>
  )
}
