'use client'

import * as React from 'react'
import useFixHydration from 'fix-hydration'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const hasMounted = useFixHydration()
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  if (!hasMounted) {
    return null
  }

  return (
    <Button
      variant="link"
      size="icon"
      onClick={toggleTheme}
      className={`border-2  ${theme === 'light' ? 'text-blue-500' : 'text-gray-100'}`}
    >
      {theme === 'light' ? (
        <Sun className="h-5 w-5 " />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  )
}
