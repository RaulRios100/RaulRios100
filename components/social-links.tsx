"use client"

import { Button } from "@/components/ui/button"
import { Youtube, Facebook, Instagram } from "lucide-react"

// TikTok icon component since it's not in Lucide
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
  </svg>
)

interface SocialLinksProps {
  variant?: "default" | "footer"
  className?: string
}

export function SocialLinks({ variant = "default", className = "" }: SocialLinksProps) {
  const socialLinks = [
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@rescatevivienda",
      color: "hover:text-red-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/rescatevivienda",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/rescatevivienda",
      color: "hover:text-pink-500",
    },
    {
      name: "TikTok",
      icon: TikTokIcon,
      url: "https://tiktok.com/@rescatevivienda",
      color: "hover:text-black dark:hover:text-white",
    },
  ]

  if (variant === "footer") {
    return (
      <div className={`flex space-x-4 ${className}`}>
        {socialLinks.map((social) => (
          <Button
            key={social.name}
            variant="ghost"
            size="icon"
            asChild
            className={`${social.color} transition-colors duration-300`}
          >
            <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`Síguenos en ${social.name}`}>
              <social.icon className="h-5 w-5" />
            </a>
          </Button>
        ))}
      </div>
    )
  }

  return (
    <div className={`flex space-x-2 ${className}`}>
      {socialLinks.map((social) => (
        <Button
          key={social.name}
          variant="outline"
          size="sm"
          asChild
          className={`${social.color} transition-all duration-300 hover:scale-110`}
        >
          <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`Síguenos en ${social.name}`}>
            <social.icon className="h-4 w-4 mr-2" />
            {social.name}
          </a>
        </Button>
      ))}
    </div>
  )
}
