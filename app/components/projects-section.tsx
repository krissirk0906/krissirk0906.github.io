"use client"

import { useState } from "react"
import ProjectCard from "./project-card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const { t } = useLanguage()

  const projects = [
    {
      title: "Remindly",
      description: t('remindlyDescription'),
      image: "https://play-lh.googleusercontent.com/E5lSa_mehto1EN4CLdHY9__Uqc6Td_CN_byxPC8zE9BvWkD3u5sgdvJZkWz2_Flu5EK4=w240-h480-rw",
      link: "https://play.google.com/store/apps/details?id=com.junenine.remindly",
      tags: ["Android", "Kotlin", "Jetpack Compose", "Task Management", "Reminders"]
    },
    {
      title: "AI Image Generator",
      description: t('aiImageGeneratorDescription'),
      image: "https://play-lh.googleusercontent.com/mAITFzrwolDxEYepe65SmyHhX6ys7_6sONpIfN3kaw5aPXKaNZDU6nNR0jMgNBTeZw=w240-h480-rw",
      link: "https://play.google.com/store/apps/details?id=vn.junenine.ai_image",
      tags: ["Android", "Kotlin", "Jetpack Compose", "AI", "Text-to-Image"]
    },
    {
      title: "GiotMauVang",
      description: t('giotMauVangDescription'),
      image: "https://play-lh.googleusercontent.com/o1hPBxK_4uodqbEKfSOXC2GKF0v8tXWSfhXYUZcKHwtVLybCT3JmVsrh_Ly5fJfK_0wG=w240-h480-rw",
      link: "https://play.google.com/store/apps/details?id=vn.intelin.giotmauvang",
      tags: ["Android", "Kotlin", "Retrofit", "Hilt", "Jetpack"]
    },
    {
      title: "Mẹ Easy - Làm Mẹ Kiểu Nhật",
      description: t('meEasyDescription'),
      image: "https://play-lh.googleusercontent.com/i-yToBVurfmGe5nlDo9pqTQaX34JsIGNKCya5UubujFV-Oo3zOwKBW-kN_r3CWrsEfU=w240-h480-rw",
      link: "https://play.google.com/store/apps/details?id=vn.kbm.meiji",
      appStoreLink: "https://apps.apple.com/us/app/m%E1%BA%B9-easy-l%C3%A0m-m%E1%BA%B9-ki%E1%BB%83u-nh%E1%BA%ADt/id1602205567",
      tags: ["Android", "iOS", "React Native", "Social Network", "Health"]
    },
    {
      title: "LocStoc",
      description: t('locStocDescription'),
      image: "https://play-lh.googleusercontent.com/SeetCt8Xf3xaFuORH9a79dL6UJW_eH6LJj2agfvvmDKLKx2msmF_1NYYuZo74BLRe3gZ=w240-h480-rw",
      link: "https://play.google.com/store/apps/details?id=com.locstock.o2o.uat",
      appStoreLink: "https://apps.apple.com/us/app/locstoc/id6740115270",
      tags: ["Android", "iOS", "React Native", "E-commerce", "Payment"]
    },
    {
      title: "LocStoc Retail",
      description: t('locStocRetailDescription'),
      image: "https://play-lh.googleusercontent.com/NCCnJS-lpuueU0dg_j1X3ln15WxN46XMGd0O2OUQsE_w-R0Fx6s4N9j4usR1vsakfDg=w240-h480-rw",
      link: "https://play.google.com/store/apps/details?id=com.locstock.ls.intelin.uat",
      appStoreLink: "https://apps.apple.com/us/app/locstoc-retail/id6740068804",
      tags: ["Android", "iOS", "React Native", "Retail", "Business"]
    }
  ]

  const displayedProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">{t('projects')}</h2>
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
            {showAll ? t('showLess') : t('viewMoreProjects')}
          </Button>
        </div>
      )}
    </section>
  )
} 