"use client"

import { useTheme } from "next-themes"
import { useState } from "react"
import { PixelButton } from "@/components/ui/pixel/pixel-button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Use a better approach to handle mounting
  if (typeof window !== 'undefined' && !mounted) {
    setMounted(true)
  }

  if (!mounted) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <PixelButton
          size="md"
          variant="secondary"
          className="pixel-font text-xs pixel-glow"
          disabled
        >
          🌙 DARK
        </PixelButton>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <PixelButton
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        size="md"
        variant="secondary"
        className="pixel-font text-xs pixel-glow hover:pixel-shake"
        title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {theme === "dark" ? "☀️ LIGHT" : "🌙 DARK"}
      </PixelButton>
    </div>
  )
}
