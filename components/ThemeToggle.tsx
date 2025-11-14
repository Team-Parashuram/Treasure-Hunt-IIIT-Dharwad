"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { PixelButton } from "@/components/ui/pixel/pixel-button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Handle client-side mounting
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50">
        <PixelButton
          size="md"
          variant="secondary"
          className="pixel-font text-xs md:text-sm pixel-glow pixel-shadow"
          disabled
          aria-label="Theme toggle loading"
        >
          🌙 DARK
        </PixelButton>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50">
      <PixelButton
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        size="md"
        variant="secondary"
        className="pixel-font text-xs md:text-sm pixel-glow hover:pixel-shake pixel-press pixel-shadow"
        title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {theme === "dark" ? "☀️ LIGHT" : "🌙 DARK"}
      </PixelButton>
    </div>
  )
}
