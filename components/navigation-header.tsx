"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface NavigationHeaderProps {
  title: string
  showBackButton?: boolean
}

export default function NavigationHeader({ title, showBackButton = true }: NavigationHeaderProps) {
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
        </div>
      </div>
    </header>
  )
}
