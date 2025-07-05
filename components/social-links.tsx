"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Instagram } from "lucide-react"

interface SocialLinksProps {
  variant?: "default" | "footer"
  className?: string
}

export function SocialLinks({ variant = "default", className = "" }: SocialLinksProps) {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/people/Rescate-Vivienda/61576487535374/",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/rescatevivienda",
      color: "hover:text-pink-500",
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
