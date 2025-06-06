"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { IconWrapper } from "./icon-wrapper"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  appStoreLink?: string
}

export default function ProjectCard({ title, description, image, link, tags, appStoreLink }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={225}
          className="w-full h-full object-contain transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-4">
        <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
          <IconWrapper name="external-link" />
          Google Play
        </Link>
        {appStoreLink && (
          <Link href={appStoreLink} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
            <IconWrapper name="external-link" />
            App Store
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
