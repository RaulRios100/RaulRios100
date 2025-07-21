"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-500/10 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-green-600/10 rounded-lg rotate-45 animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-400/10 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-500/10 rounded-lg animate-pulse"></div>

      {/* Animated background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-green-600/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
  )
}
