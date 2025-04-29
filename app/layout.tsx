'use client'

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href={`${process.env.NODE_ENV === 'production' ? '/krissirk0906.github.io' : ''}/styles/globals.css`} />
      </head>
      <body className={cn("min-h-screen bg-background text-foreground font-sans antialiased", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="v0-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
