"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Search,
  TrendingDown,
  Bot,
  CheckCircle,
  Shield,
  BarChart3,
  Users,
  Zap,
  ArrowRight,
  Brain,
  Target,
  Award,
  Clock,
  BookOpen,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export default function AIPositioningLanding() {
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

  const DarkModeToggle = () => (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-6 right-6 z-50 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
    >
      {isDarkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-slate-600" />}
    </button>
  )

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <DarkModeToggle />

      {/* Estilos CSS para animaciones */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(0px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 0.3; }
        }
        
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(251, 146, 60, 0.5); }
          50% { text-shadow: 0 0 20px rgba(251, 146, 60, 0.8), 0 0 30px rgba(251, 146, 60, 0.6); }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        
        @keyframes scroll-indicator {
          0% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(15px); }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; animation-delay: 2s; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; animation-delay: 4s; }
        .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; animation-delay: 1s; }
        .animate-fade-in { animation: fade-in 2s ease-out; }
        .animate-slide-down { animation: slide-down 1s ease-out; }
        .animate-slide-up { animation: slide-up 1s ease-out 0.3s both; }
        .animate-slide-up-delayed { animation: slide-up 1s ease-out 0.6s both; }
        .animate-slide-up-delayed-2 { animation: slide-up 1s ease-out 0.9s both; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
        .animate-scroll-indicator { animation: scroll-indicator 2s ease-in-out infinite; }

        @keyframes cube-rotate {
          0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
        }

        @keyframes sphere-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }

        @keyframes pyramid-spin {
          0% { transform: rotateY(0deg) rotateX(15deg); }
          100% { transform: rotateY(360deg) rotateX(15deg); }
        }

        @keyframes hexagon-pulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.7; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
        }

        .animate-cube-rotate { animation: cube-rotate 20s linear infinite; }
        .animate-sphere-float { animation: sphere-float 6s ease-in-out infinite; }
        .animate-pyramid-spin { animation: pyramid-spin 15s linear infinite; }
        .animate-hexagon-pulse { animation: hexagon-pulse 8s ease-in-out infinite; }

        .cube-container {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        .cube-face {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.8;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .cube-front { transform: rotateY(0deg) translateZ(64px); }
        .cube-back { transform: rotateY(180deg) translateZ(64px); }
        .cube-right { transform: rotateY(90deg) translateZ(64px); }
        .cube-left { transform: rotateY(-90deg) translateZ(64px); }
        .cube-top { transform: rotateX(90deg) translateZ(64px); }
        .cube-bottom { transform: rotateX(-90deg) translateZ(64px); }

        .sphere {
          box-shadow: 0 0 50px rgba(6, 182, 212, 0.5);
        }

        .pyramid-container {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        .pyramid-face {
          position: absolute;
          opacity: 0.8;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .pyramid-front {
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 80px solid;
          transform: translateZ(40px);
        }

        .pyramid-right {
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 80px solid;
          transform: rotateY(90deg) translateZ(40px);
        }

        .pyramid-back {
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 80px solid;
          transform: rotateY(180deg) translateZ(40px);
        }

        .pyramid-left {
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 80px solid;
          transform: rotateY(-90deg) translateZ(40px);
        }

        .hexagon {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #f43f5e, #ec4899);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          box-shadow: 0 0 40px rgba(244, 63, 94, 0.6);
        }

        @keyframes lion-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.02); }
        }

        @keyframes lion-pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }

        @keyframes lion-breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes mane-flow-1 {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          50% { transform: translateX(-10px) rotate(-2deg); }
        }

        @keyframes mane-flow-2 {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          50% { transform: translateX(-8px) rotate(-1deg); }
        }

        @keyframes mane-flow-3 {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          50% { transform: translateX(-6px) rotate(-1.5deg); }
        }

        @keyframes mane-flow-4 {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          50% { transform: translateX(8px) rotate(1deg); }
        }

        @keyframes mane-flow-5 {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          50% { transform: translateX(10px) rotate(2deg); }
        }

        @keyframes lion-blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }

        .animate-lion-float { animation: lion-float 8s ease-in-out infinite; }
        .animate-lion-pulse { animation: lion-pulse 4s ease-in-out infinite; }
        .animate-lion-breathe { animation: lion-breathe 6s ease-in-out infinite; }
        .animate-mane-flow-1 { animation: mane-flow-1 10s ease-in-out infinite; }
        .animate-mane-flow-2 { animation: mane-flow-2 12s ease-in-out infinite 1s; }
        .animate-mane-flow-3 { animation: mane-flow-3 14s ease-in-out infinite 2s; }
        .animate-mane-flow-4 { animation: mane-flow-4 11s ease-in-out infinite 0.5s; }
        .animate-mane-flow-5 { animation: mane-flow-5 13s ease-in-out infinite 1.5s; }
        .animate-lion-blink { animation: lion-blink 8s ease-in-out infinite; }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white min-h-screen px-4 overflow-hidden flex items-center">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Animated Lion Silhouette */}
        <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
          {/* Abstract Orange Shapes */}
          <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
            {/* Abstract Shape 1 - Flowing Blob */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 animate-float opacity-20">
              <svg width="256" height="256" viewBox="0 0 256 256" fill="none">
                <path
                  d="M50 128 C50 80, 80 50, 128 50 C176 50, 206 80, 206 128 C206 176, 176 206, 128 206 C80 206, 50 176, 50 128 Z"
                  fill="url(#orangeGradient1)"
                  className="animate-blob"
                />
                <defs>
                  <linearGradient id="orangeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fb923c" />
                    <stop offset="50%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Abstract Shape 2 - Twisted Ring */}
            <div className="absolute top-1/3 right-1/3 w-48 h-48 animate-float-delayed opacity-25">
              <svg width="192" height="192" viewBox="0 0 192 192" fill="none">
                <path
                  d="M96 20 C140 20, 172 52, 172 96 C172 140, 140 172, 96 172 C52 172, 20 140, 20 96 C20 52, 52 20, 96 20 Z M96 60 C116 60, 132 76, 132 96 C132 116, 116 132, 96 132 C76 132, 60 116, 60 96 C60 76, 76 60, 96 60 Z"
                  fill="url(#orangeGradient2)"
                  fillRule="evenodd"
                  className="animate-pyramid-spin"
                />
                <defs>
                  <linearGradient id="orangeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="50%" stopColor="#fb923c" />
                    <stop offset="100%" stopColor="#fdba74" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Abstract Shape 3 - Organic Wave */}
            <div className="absolute bottom-1/3 left-1/2 w-56 h-32 animate-float-slow opacity-30">
              <svg width="224" height="128" viewBox="0 0 224 128" fill="none">
                <path
                  d="M0 64 C56 20, 112 20, 168 64 C224 108, 168 108, 112 64 C56 108, 0 108, 0 64 Z"
                  fill="url(#orangeGradient3)"
                  className="animate-hexagon-pulse"
                />
                <defs>
                  <linearGradient id="orangeGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ea580c" />
                    <stop offset="50%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#fb923c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Abstract Shape 4 - Geometric Crystal */}
            <div className="absolute top-1/2 right-1/4 w-40 h-40 animate-float-reverse opacity-25">
              <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
                <path
                  d="M80 10 L140 50 L120 120 L40 120 L20 50 Z"
                  fill="url(#orangeGradient4)"
                  className="animate-cube-rotate"
                />
                <path
                  d="M80 10 L140 50 L80 80 Z"
                  fill="url(#orangeGradient5)"
                  opacity="0.8"
                  className="animate-cube-rotate"
                />
                <defs>
                  <linearGradient id="orangeGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fdba74" />
                    <stop offset="50%" stopColor="#fb923c" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                  <linearGradient id="orangeGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#fb923c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Abstract Shape 5 - Flowing Ribbon */}
            <div className="absolute bottom-1/4 right-1/3 w-72 h-24 animate-sphere-float opacity-20">
              <svg width="288" height="96" viewBox="0 0 288 96" fill="none">
                <path
                  d="M0 48 C72 12, 144 84, 216 48 C288 12, 216 84, 144 48 C72 84, 0 12, 0 48 Z"
                  fill="url(#orangeGradient6)"
                  className="animate-mane-flow-1"
                />
                <defs>
                  <linearGradient id="orangeGradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fb923c" />
                    <stop offset="50%" stopColor="#fdba74" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-400 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-400 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-float-slow"></div>
          <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-purple-400 rounded-full animate-float-reverse"></div>
        </div>

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10 min-h-screen py-20">
          <div>
            <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-medium animate-slide-down">
              🚀 Posicionamiento en IA - Nueva Era Digital
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
              ¿Estás apareciendo en las{" "}
              <span className="text-orange-400 animate-pulse-glow">respuestas de Google con IA</span>?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-4xl mx-auto leading-relaxed animate-slide-up-delayed">
              Si la IA no menciona tu marca, estás fuera del juego digital. Te ayudamos a recuperar visibilidad con
              contenido optimizado para motores de inteligencia artificial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delayed-2">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce-subtle"
                onClick={() => (window.location.href = "/calendario")}
              >
                Agenda tu auditoría gratuita
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => (window.location.href = "/aprende-mas")}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Aprende más
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="py-4 px-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20"
              onClick={() => document.getElementById("problema")?.scrollIntoView({ behavior: "smooth" })}
            >
              El Problema
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-700 dark:text-slate-300 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20"
              onClick={() => document.getElementById("solucion")?.scrollIntoView({ behavior: "smooth" })}
            >
              Nuestra Solución
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              onClick={() => document.getElementById("paquetes")?.scrollIntoView({ behavior: "smooth" })}
            >
              Paquetes
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-700 dark:text-slate-300 hover:text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              onClick={() => document.getElementById("garantias")?.scrollIntoView({ behavior: "smooth" })}
            >
              Garantías
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
              onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
            >
              FAQ
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problema" className="py-20 px-4 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 animate-slide-up">
                El problema que está <span className="text-orange-500">matando tu negocio</span>
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed animate-slide-up-delayed">
                Más del <strong className="text-orange-500">40% de los clics ya no llegan a sitios web</strong>. La IA
                generativa de Google responde directamente. Las marcas que no aparecen ahí están perdiendo autoridad,
                tráfico y clientes potenciales.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 animate-slide-up-delayed-2">
                  <TrendingDown className="h-6 w-6 text-orange-500" />
                  <span className="text-slate-700 dark:text-slate-300">Pérdida masiva de tráfico orgánico</span>
                </div>
                <div className="flex items-center gap-3 animate-slide-up-delayed-2" style={{ animationDelay: "1.1s" }}>
                  <Users className="h-6 w-6 text-orange-500" />
                  <span className="text-slate-700 dark:text-slate-300">Clientes que no te encuentran</span>
                </div>
                <div className="flex items-center gap-3 animate-slide-up-delayed-2" style={{ animationDelay: "1.2s" }}>
                  <Target className="h-6 w-6 text-orange-500" />
                  <span className="text-slate-700 dark:text-slate-300">Competencia dominando las respuestas de IA</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-lg animate-fade-in">
              <div className="text-center">
                <div className="bg-orange-100 dark:bg-orange-700 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Search className="h-12 w-12 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Desvío de Clics hacia SGE</h3>
                <div className="space-y-3">
                  <div className="bg-slate-100 dark:bg-slate-600 p-3 rounded-lg">
                    <div className="text-sm text-slate-600 dark:text-slate-300">Búsquedas tradicionales</div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">60%</div>
                  </div>
                  <ArrowRight className="h-6 w-6 text-slate-400 mx-auto" />
                  <div className="bg-orange-100 dark:bg-orange-700 p-3 rounded-lg">
                    <div className="text-sm text-orange-800 dark:text-orange-200">Respuestas de IA</div>
                    <div className="text-2xl font-bold text-orange-500">40%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solucion" className="py-20 px-4 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm font-medium">
            💡 Nuestra Solución Exclusiva
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Posicionamiento <span className="text-green-500">AIO + LLM</span>
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 mb-12 max-w-4xl mx-auto">
            Optimización completa para motores de IA (Search Generative Experience) y modelos de lenguaje como ChatGPT,
            Perplexity, Gemini y más.
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <Brain className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">AI Overviews</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Optimización para SGE</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <Bot className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Schema Avanzado</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">FAQ, productos, negocio local</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <Zap className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Contenido IA</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Conversacional y entrenado</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Agentes de IA</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Integración y capacitación</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <Award className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Estrategia EEAT</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Autoridad reconocida por IA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="paquetes" className="py-20 px-4 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Elige tu <span className="text-green-500">paquete de posicionamiento</span>
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300">
              Soluciones adaptadas a cada etapa de tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Launchpad Package */}
            <Card className="relative border-2 border-slate-200 dark:border-slate-700 hover:border-green-300 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <Badge className="w-fit mx-auto mb-4 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600">
                  PARA EMPEZAR
                </Badge>
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">AIO LAUNCHPAD</CardTitle>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">$10,000 MXN</div>
                  <div className="text-lg text-slate-600 dark:text-slate-300">o $555 USD</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Auditoría inicial completa</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Optimización de 5 páginas clave</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      Datos estructurados (FAQPage y LocalBusiness)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">5 contenidos conversacionales mensuales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Reporte mensual de visibilidad</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-6 bg-slate-900 hover:bg-slate-800 text-white"
                  onClick={() => (window.location.href = "/contratar/launchpad")}
                >
                  Comenzar ahora
                </Button>
              </CardContent>
            </Card>

            {/* Accelerator Package */}
            <Card className="relative border-2 border-green-300 dark:border-green-700 hover:border-green-400 transition-all duration-300 transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 hover:bg-green-600 text-white px-4 py-2">MÁS POPULAR</Badge>
              </div>
              <CardHeader className="text-center pb-8 pt-8">
                <Badge className="w-fit mx-auto mb-4 bg-green-100 dark:bg-green-700 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-600">
                  CRECIMIENTO
                </Badge>
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">AIO ACCELERATOR</CardTitle>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-green-600">$15,000 MXN</div>
                  <div className="text-lg text-slate-600 dark:text-slate-300">o $810 USD</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Todo lo anterior +</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Optimización de 10 URLs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Integración de chatbot LLM simple</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">10 contenidos por mes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Análisis de competencia en SGE</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => (window.location.href = "/contratar/accelerator")}
                >
                  Acelerar mi crecimiento
                </Button>
              </CardContent>
            </Card>

            {/* Dominator Package */}
            <Card className="relative border-2 border-orange-300 dark:border-orange-700 hover:border-orange-400 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <Badge className="w-fit mx-auto mb-4 bg-orange-100 dark:bg-orange-700 text-orange-700 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-600">
                  DOMINACIÓN TOTAL
                </Badge>
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">AIO DOMINATOR</CardTitle>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-orange-600">$30,000 MXN</div>
                  <div className="text-lg text-slate-600 dark:text-slate-300">o $1,666 USD</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Todo lo anterior +</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Sitio completo optimizado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">PR digital y enlaces EEAT</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">20 contenidos por mes + chatbot experto</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Coaching mensual 1:1</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Dashboard de rendimiento</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={() => (window.location.href = "/contratar/dominator")}
                >
                  Dominar mi mercado
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section id="garantias" className="py-20 px-4 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Nuestras <span className="text-green-500">garantías</span>
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300">
              Trabajamos con total transparencia y resultados medibles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-700 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-10 w-10 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Visibilidad Garantizada</h3>
              <p className="text-slate-700 dark:text-slate-300">
                Visibilidad garantizada en AI Overviews o se extiende el servicio sin costo adicional
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-700 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <BarChart3 className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Dashboard en Tiempo Real</h3>
              <p className="text-slate-700 dark:text-slate-300">
                Monitoreo constante de tu posicionamiento en motores de IA con reportes detallados
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-700 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Técnicas Seguras</h3>
              <p className="text-slate-700 dark:text-slate-300">
                Sin penalizaciones ni técnicas dudosas. Solo estrategias white-hat aprobadas por Google
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6
"
            >
              Preguntas <span className="text-green-500">frecuentes</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white dark:bg-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white">
                ¿Es esto lo mismo que SEO tradicional?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 dark:text-slate-300">
                No, el posicionamiento AIO va más allá del SEO tradicional. Mientras el SEO se enfoca en rankings en
                resultados de búsqueda, nosotros optimizamos para que aparezcas directamente en las respuestas generadas
                por IA, que es donde está el futuro del tráfico web.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white dark:bg-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white">
                ¿Cuándo empiezo a ver resultados?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 dark:text-slate-300">
                Los primeros resultados en AI Overviews pueden verse entre 4-8 semanas, dependiendo de la competencia de
                tu sector. El posicionamiento en LLMs como ChatGPT puede tomar 2-3 meses para consolidarse
                completamente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white dark:bg-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white">
                ¿Puedo usar esto junto con campañas pagadas?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 dark:text-slate-300">
                Absolutamente. De hecho, es la combinación perfecta. Mientras las campañas pagadas te dan visibilidad
                inmediata, el posicionamiento AIO te asegura presencia orgánica a largo plazo en las respuestas de IA,
                reduciendo tu dependencia de la publicidad pagada.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white dark:bg-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white">
                ¿Qué pasa si mi sector es muy competido?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 dark:text-slate-300">
                Los sectores competidos son precisamente donde más se nota la diferencia. Implementamos estrategias de
                nicho y long-tail específicas para IA, además de fortalecer tu autoridad EEAT para que los modelos de IA
                te reconozcan como fuente confiable.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            No te quedes fuera de los motores que <span className="text-orange-400">dominan el presente</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Cada día que pasa sin posicionamiento en IA es tráfico, autoridad y clientes que pierdes para siempre. El
            momento de actuar es ahora.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold"
              onClick={() => (window.location.href = "/agendar-sesion")}
            >
              <Clock className="mr-2 h-5 w-5" />
              Agendar sesión estratégica
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg"
              onClick={() => (window.location.href = "/aprende-mas")}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Aprende más
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-400 dark:text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Consulta gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Resultados garantizados</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-500 dark:bg-orange-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">{"Diseño y Optimización Online "}</h3>
            <p className="text-white">La agencia líder en posicionamiento para motores de IA</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-white">
                <li>
                  <a href="/servicios/ai-overviews" className="text-white hover:text-orange-200 transition-colors">
                    AI Overviews (SGE)
                  </a>
                </li>
                <li>
                  <a href="/servicios/optimizacion-llm" className="text-white hover:text-orange-200 transition-colors">
                    Optimización LLM
                  </a>
                </li>
                <li>
                  <a href="/servicios/schema-markup" className="text-white hover:text-orange-200 transition-colors">
                    Schema Markup
                  </a>
                </li>
                <li>
                  <a href="/servicios/chatbots-ia" className="text-white hover:text-orange-200 transition-colors">
                    Chatbots IA
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-white">
                <li>
                  <a href="/sobre-nosotros" className="text-white hover:text-orange-200 transition-colors">
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a href="/casos-de-exito" className="text-white hover:text-orange-200 transition-colors">
                    Casos de éxito
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-white hover:text-orange-200 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="text-white hover:text-orange-200 transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-white">
                <li>
                  <a href="/centro-de-ayuda" className="text-white hover:text-orange-200 transition-colors">
                    Centro de ayuda
                  </a>
                </li>
                <li>
                  <a href="/documentacion" className="text-white hover:text-orange-200 transition-colors">
                    Documentación
                  </a>
                </li>
                <li>
                  <a href="/terminos-de-servicio" className="text-white hover:text-orange-200 transition-colors">
                    Términos de servicio
                  </a>
                </li>
                <li>
                  <a href="/privacidad" className="text-white hover:text-orange-200 transition-colors">
                    Privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-white">
            <p>© Diseño y Optimízación Online. Todos los derechos reservados.</p>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/optimizaciononline1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/optimizaciononline/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/optimizaciononl/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/optimización-online/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCNjfW4DkjCUwXLFDSWLpYpg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
