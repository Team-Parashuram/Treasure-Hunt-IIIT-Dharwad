"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { PixelButton } from "@/components/ui/pixel/pixel-button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <PixelButton
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        size="md"
        variant="secondary"
        className="pixel-font text-xs"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </PixelButton>
    </div>
  )
}
