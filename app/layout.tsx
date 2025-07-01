import { cn } from "@/lib/utils"
import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import type React from "react"
import { ThemeProvider } from "./components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Thành Tâm - Mobile Developer",
  description: "Mobile Developer specializing in Android, iOS, and React Native development",
}

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
      </head>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
