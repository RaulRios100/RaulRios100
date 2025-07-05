"use client"

import Image from "next/image"

interface AeternityLogoProps {
  className?: string
  size?: number
}

export default function AeternityLogo({ className = "", size = 40 }: AeternityLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/images/aeternity-logo.png"
        alt="Æternity Logo"
        width={size}
        height={size}
        className="object-contain"
      />
      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Æternity
      </span>
    </div>
  )
}
