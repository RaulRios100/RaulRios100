"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-4 h-4 bg-green-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-green-400/30 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-green-600/25 rounded-full animate-ping delay-700"></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-green-500/20 rounded-full animate-pulse delay-1000"></div>

      {/* Geometric shapes */}
      <div className="absolute top-60 left-1/4 w-8 h-8 border border-green-500/20 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-60 right-1/4 w-6 h-6 border border-green-400/30 rotate-12 animate-float"></div>
    </div>
  )
}
