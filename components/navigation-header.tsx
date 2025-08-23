"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Moon, Sun } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

interface NavigationHeaderProps {
  title: string
}

export default function NavigationHeader({ title }: NavigationHeaderProps) {
  const router = useRouter()
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light") {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    } else {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push("/")
    }
  }

  return (
    <>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-6 right-6 z-50 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
      >
        {isDarkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-slate-600" />}
      </button>

      {/* Navigation Header */}
      <header className="bg-slate-900 border-b border-slate-800 py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleBack}
            className="bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
          <h1 className="text-xl font-bold text-white">{title}</h1>
        </div>
      </header>
    </>
  )
}
