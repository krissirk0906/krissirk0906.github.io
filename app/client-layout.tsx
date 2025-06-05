'use client'

import { ThemeProvider } from "@/components/theme-provider"
import type React from "react"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="v0-theme"
    >
      {children}
    </ThemeProvider>
  )
} 