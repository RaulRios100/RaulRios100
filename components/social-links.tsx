"use client"

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

interface SocialLinksProps {
  variant?: "default" | "footer"
  className?: string
}

export function SocialLinks({ variant = "default", className = "" }: SocialLinksProps) {
  const socialLinks = {
    facebook: "https://www.facebook.com/LiberaCreditoDeTuCasaOficial/",
    instagram: "https://www.instagram.com/liberacreditodetucasaoficial/",
    youtube: "https://www.youtube.com/@LiberaCreditoDeTuCasa",
    twitter: "https://twitter.com/LiberaCredito_Casa",
  }

  const openSocialLink = (url: string) => {
    window.open(url, "_blank")
  }

  if (variant === "footer") {
    return (
      <div className={`flex space-x-4 ${className}`}>
        <Facebook
          className="h-5 w-5 cursor-pointer text-muted-foreground hover:text-blue-500 transition-colors"
          onClick={() => openSocialLink(socialLinks.facebook)}
        />
        <Instagram
          className="h-5 w-5 cursor-pointer text-muted-foreground hover:text-purple-500 transition-colors"
          onClick={() => openSocialLink(socialLinks.instagram)}
        />
        <Youtube
          className="h-5 w-5 cursor-pointer text-muted-foreground hover:text-red-500 transition-colors"
          onClick={() => openSocialLink(socialLinks.youtube)}
        />
        <Twitter
          className="h-5 w-5 cursor-pointer text-muted-foreground hover:text-blue-500 transition-colors"
          onClick={() => openSocialLink(socialLinks.twitter)}
        />
      </div>
    )
  }

  return (
    <div className={`flex space-x-4 ${className}`}>
      <Facebook
        className="h-4 w-4 cursor-pointer hover:text-blue-500 transition-colors"
        onClick={() => openSocialLink(socialLinks.facebook)}
      />
      <Instagram
        className="h-4 w-4 cursor-pointer hover:text-purple-500 transition-colors"
        onClick={() => openSocialLink(socialLinks.instagram)}
      />
      <Youtube
        className="h-4 w-4 cursor-pointer hover:text-red-500 transition-colors"
        onClick={() => openSocialLink(socialLinks.youtube)}
      />
      <Twitter
        className="h-4 w-4 cursor-pointer hover:text-blue-500 transition-colors"
        onClick={() => openSocialLink(socialLinks.twitter)}
      />
    </div>
  )
}
