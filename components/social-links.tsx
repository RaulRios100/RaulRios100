"use client"

import { Facebook, Instagram } from "lucide-react"

interface SocialLinksProps {
  variant?: "default" | "footer"
  className?: string
}

// TikTok SVG Icon Component
const TikTokIcon = ({ className, onClick, title }: { className?: string; onClick?: () => void; title?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    title={title}
  >
    <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.294-1.98-1.294-3.338h-3.239v14.19c0 1.308-1.065 2.372-2.372 2.372s-2.372-1.064-2.372-2.372c0-1.307 1.065-2.371 2.372-2.371.26 0 .509.042.744.12V9.756a5.555 5.555 0 0 0-.744-.051c-3.07 0-5.555 2.484-5.555 5.555 0 3.07 2.484 5.555 5.555 5.555s5.555-2.484 5.555-5.555V9.067a9.417 9.417 0 0 0 5.515 1.756V7.584c-.917 0-1.798-.298-2.585-.849z" />
  </svg>
)

export function SocialLinks({ variant = "default", className = "" }: SocialLinksProps) {
  const socialLinks = {
    facebook: "https://www.facebook.com/Liberacreditodetucasa",
    instagram: "https://www.instagram.com/liberacreditodetucasa/",
    tiktok: "https://www.tiktok.com/@libera.credito.detucasa?_t=ZS-8zrz76pqaYh&_r=1",
  }

  const openSocialLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  if (variant === "footer") {
    return (
      <div className={`flex space-x-4 ${className}`}>
        <Facebook
          className="h-5 w-5 cursor-pointer text-muted-foreground hover:text-blue-500 transition-colors"
          onClick={() => openSocialLink(socialLinks.facebook)}
          title="Síguenos en Facebook"
        />
        <Instagram
          className="h-5 w-5 cursor-pointer text-muted-foreground hover:text-purple-500 transition-colors"
          onClick={() => openSocialLink(socialLinks.instagram)}
          title="Síguenos en Instagram"
        />
        <TikTokIcon
          className="h-5 w-5 cursor-pointer text-muted-foreground hover:text-pink-500 transition-colors"
          onClick={() => openSocialLink(socialLinks.tiktok)}
          title="Síguenos en TikTok"
        />
      </div>
    )
  }

  return (
    <div className={`flex space-x-4 ${className}`}>
      <Facebook
        className="h-4 w-4 cursor-pointer hover:text-blue-500 transition-colors"
        onClick={() => openSocialLink(socialLinks.facebook)}
        title="Síguenos en Facebook"
      />
      <Instagram
        className="h-4 w-4 cursor-pointer hover:text-purple-500 transition-colors"
        onClick={() => openSocialLink(socialLinks.instagram)}
        title="Síguenos en Instagram"
      />
      <TikTokIcon
        className="h-4 w-4 cursor-pointer hover:text-pink-500 transition-colors"
        onClick={() => openSocialLink(socialLinks.tiktok)}
        title="Síguenos en TikTok"
      />
    </div>
  )
}
