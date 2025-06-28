"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Contact from "@/components/Contact"
import TechStack from "./tech-stack"
import { IconWrapper } from "./icon-wrapper"
import ProjectsSection from "./projects-section"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"

export default function ClientPageWrapper() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Thành Tâm</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                {t('about')}
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                {t('projects')}
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                {t('contact')}
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button variant="outline" className="ml-4">
              {t('resume')}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                {t('title')}
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {t('subtitle')}
              </p>
            </div>
            <div className="space-x-4">
              <Link href="https://github.com/krissirk0906" target="_blank">
                <Button variant="outline" size="icon">
                  <IconWrapper name="github" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/thành-tâm-58b804190/" target="_blank">
                <Button variant="outline" size="icon">
                  <IconWrapper name="linkedin" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:thanhtam961999@gmail.com">
                <Button variant="outline" size="icon">
                  <IconWrapper name="mail" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <ProjectsSection />

        <section className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            {t('techStack')}
          </h2>
          <TechStack />
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            {t('contactTitle')}
          </h2>
          <Contact />
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Thành Tâm. {t('allRightsReserved')}</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="/privacy/">
              {t('privacyPolicy')}
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="/terms/">
              {t('termsConditions')}
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
} 