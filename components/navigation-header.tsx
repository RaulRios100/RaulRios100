"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationHeaderProps {
  title?: string
}

export default function NavigationHeader({ title }: NavigationHeaderProps) {
  const handleBack = () => {
    if (typeof window !== "undefined") {
      window.history.back()
    }
  }

  return (
    <header className="bg-slate-900 border-b border-slate-700 px-4 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBack}
            className="text-slate-300 hover:text-white hover:bg-slate-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
          {title && <h1 className="text-xl font-semibold text-white">{title}</h1>}
        </div>
      </div>
    </header>
  )
}
