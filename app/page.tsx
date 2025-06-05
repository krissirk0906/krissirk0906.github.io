import { Button } from "@/components/ui/button"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import { IconWrapper } from "./components/icon-wrapper"

export default function Page() {
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
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <Button variant="outline" className="ml-4">
            Resume
          </Button>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Mobile Developer
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Crafting native and cross-platform mobile experiences. Specialized in Android, iOS, and React Native
                development with a focus on performance and user experience.
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

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            <ProjectCard
              title="AI Image Generator"
              description="Native Android application that transforms text prompts into stunning AI-generated images. Built with Jetpack Compose for a modern, fluid UI and integrated with advanced text-to-image AI models. Features include customizable generation parameters, image history, sharing capabilities, and style presets."
              image="https://play-lh.googleusercontent.com/mAITFzrwolDxEYepe65SmyHhX6ys7_6sONpIfN3kaw5aPXKaNZDU6nNR0jMgNBTeZw=w240-h480-rw"
              link="https://play.google.com/store/apps/details?id=vn.junenine.ai_image"
              tags={["Android", "Kotlin", "Jetpack Compose", "AI", "Text-to-Image"]}
            />
            <ProjectCard
              title="GiotMauVang"
              description="A blood donation management application that helps users register and participate in blood donation activities. Features include donor registration, blood donation history tracking, and blood quality management. Built with modern Android architecture and best practices."
              image="https://play-lh.googleusercontent.com/o1hPBxK_4uodqbEKfSOXC2GKF0v8tXWSfhXYUZcKHwtVLybCT3JmVsrh_Ly5fJfK_0wG=w240-h480-rw"
              link="https://play.google.com/store/apps/details?id=vn.intelin.giotmauvang"
              tags={["Android", "Kotlin", "Retrofit", "Hilt", "Jetpack"]}
            />
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Tech Stack
          </h2>
          <TechStack />
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Get in Touch
            </h2>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Thành Tâm. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
