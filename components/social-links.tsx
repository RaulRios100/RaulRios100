"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

interface SocialLinksProps {
  variant?: "default" | "footer"
}

export function SocialLinks({ variant = "default" }: SocialLinksProps) {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/rescatevivienda",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/rescatevivienda",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/rescatevivienda",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@rescatevivienda",
    },
  ]

  if (variant === "footer") {
    return (
      <div className="flex space-x-2">
        {socialLinks.map((social) => (
          <Button
            key={social.name}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-green-100 dark:hover:bg-green-900"
            onClick={() => window.open(social.url, "_blank")}
          >
            <social.icon className="h-4 w-4" />
            <span className="sr-only">{social.name}</span>
          </Button>
        ))}
      </div>
    )
  }

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <Button key={social.name} variant="outline" size="sm" onClick={() => window.open(social.url, "_blank")}>
          <social.icon className="h-4 w-4 mr-2" />
          {social.name}
        </Button>
      ))}
    </div>
  )
}
