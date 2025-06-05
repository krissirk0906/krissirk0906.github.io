"use client"

import { Button } from "@/components/ui/button"

export default function ViewMoreButton() {
  return (
    <Button 
      variant="outline" 
      onClick={() => window.open("https://play.google.com/store/apps/developer?id=Th%C3%A0nh+T%C3%A2m", "_blank")}
    >
      View More Projects
    </Button>
  )
} 