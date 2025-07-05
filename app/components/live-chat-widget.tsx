"use client"

import { useEffect } from "react"

// Declarar el tipo para TypeScript
declare global {
  interface Window {
    AIChatWidget?: {
      init: (config: { widgetId: string }) => void
    }
  }
}

export default function LiveChatWidget() {
  useEffect(() => {
    // Función para inicializar el widget
    const initializeWidget = () => {
      if (window.AIChatWidget) {
        window.AIChatWidget.init({
          widgetId: "6862bbd080a194272065a176",
        })
      }
    }

    // Si el DOM ya está cargado, inicializar inmediatamente
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initializeWidget)
    } else {
      initializeWidget()
    }

    // Crear y cargar el script
    const script = document.createElement("script")
    script.src = "https://testmyprompt.com/widget/6862bbd080a194272065a176/widget.js"
    script.async = true

    script.onload = () => {
      // Inicializar después de que el script se cargue
      initializeWidget()
    }

    script.onerror = () => {
      console.log("Chat widget failed to load")
    }

    document.head.appendChild(script)

    // Cleanup
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
      document.removeEventListener("DOMContentLoaded", initializeWidget)
    }
  }, [])

  return null
}
