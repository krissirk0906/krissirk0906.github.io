"use client"

import { useState } from "react"
import ProjectCard from "./project-card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "AI Image Generator",
    description: "Native Android application that transforms text prompts into stunning AI-generated images. Built with Jetpack Compose for a modern, fluid UI and integrated with advanced text-to-image AI models. Features include customizable generation parameters, image history, sharing capabilities, and style presets.",
    image: "https://play-lh.googleusercontent.com/mAITFzrwolDxEYepe65SmyHhX6ys7_6sONpIfN3kaw5aPXKaNZDU6nNR0jMgNBTeZw=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=vn.junenine.ai_image",
    tags: ["Android", "Kotlin", "Jetpack Compose", "AI", "Text-to-Image"]
  },
  {
    title: "GiotMauVang",
    description: "A blood donation management application that helps users register and participate in blood donation activities. Features include donor registration, blood donation history tracking, and blood quality management. Built with modern Android architecture and best practices.",
    image: "https://play-lh.googleusercontent.com/o1hPBxK_4uodqbEKfSOXC2GKF0v8tXWSfhXYUZcKHwtVLybCT3JmVsrh_Ly5fJfK_0wG=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=vn.intelin.giotmauvang",
    tags: ["Android", "Kotlin", "Retrofit", "Hilt", "Jetpack"]
  },
  {
    title: "Mẹ Easy - Làm Mẹ Kiểu Nhật",
    description: "A social networking application that helps mothers connect with each other to share knowledge about pregnancy, raising children, and understanding their bodies. Features include pregnancy tracking, dietary advice, and emotional journaling.",
    image: "https://play-lh.googleusercontent.com/i-yToBVurfmGe5nlDo9pqTQaX34JsIGNKCya5UubujFV-Oo3zOwKBW-kN_r3CWrsEfU=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=vn.kbm.meiji",
    appStoreLink: "https://apps.apple.com/us/app/m%E1%BA%B9-easy-l%C3%A0m-m%E1%BA%B9-ki%E1%BB%83u-nh%E1%BA%ADt/id1602205567",
    tags: ["Android", "iOS", "React Native", "Social Network", "Health"]
  },
  {
    title: "LocStoc",
    description: "A platform tailored for the region, providing customers with an easy, secure and fast online shopping experience through strong payment and fulfillment support.",
    image: "https://play-lh.googleusercontent.com/SeetCt8Xf3xaFuORH9a79dL6UJW_eH6LJj2agfvvmDKLKx2msmF_1NYYuZo74BLRe3gZ=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.locstock.o2o.uat",
    appStoreLink: "https://apps.apple.com/us/app/locstoc/id6740115270",
    tags: ["Android", "iOS", "React Native", "E-commerce", "Payment"]
  },
  {
    title: "LocStoc Retail",
    description: "A retail management platform that helps businesses manage their operations efficiently. Features include inventory management, sales tracking, and customer relationship management.",
    image: "https://play-lh.googleusercontent.com/NCCnJS-lpuueU0dg_j1X3ln15WxN46XMGd0O2OUQsE_w-R0Fx6s4N9j4usR1vsakfDg=w240-h480-rw",
    link: "https://play.google.com/store/apps/details?id=com.locstock.ls.intelin.uat",
    appStoreLink: "https://apps.apple.com/us/app/locstoc-retail/id6740068804",
    tags: ["Android", "iOS", "React Native", "Retail", "Business"]
  }
]

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {displayedProjects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
      {projects.length > 4 && (
        <div className="flex justify-center mt-8">
          <Button 
            variant="outline" 
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View More Projects"}
          </Button>
        </div>
      )}
    </section>
  )
} 