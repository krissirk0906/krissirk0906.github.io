"use client"

import { Github, Linkedin, Mail, ExternalLink, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type IconName = "github" | "linkedin" | "mail" | "external-link"

const iconMap: Record<IconName, LucideIcon> = {
  "github": Github,
  "linkedin": Linkedin,
  "mail": Mail,
  "external-link": ExternalLink,
}

interface IconWrapperProps {
  name: IconName
  className?: string
}

export function IconWrapper({ name, className }: IconWrapperProps) {
  const Icon = iconMap[name]
  
  return (
    <div className={cn("inline-flex items-center justify-center", className)}>
      <Icon
        className="h-4 w-4"
        strokeWidth={2}
        aria-hidden="true"
      />
    </div>
  )
} 