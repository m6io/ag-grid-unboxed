import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useThemeContext } from '@/theme/ThemeProvider'
import { styles } from '@/styles'
import { NavDropdown } from './NavDropdown'
import type { Example } from '@/types/Example'

interface NavbarProps {
  examples: Example[]
}

export const Navbar: React.FC<NavbarProps> = ({ examples }) => {
  const { isDarkMode, toggleDarkMode } = useThemeContext()

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80">
      <div className={styles.container}>
        <div className="flex h-16 items-center justify-between">
          <NavDropdown examples={examples} />
          <button
            onClick={toggleDarkMode}
            className={styles.iconButton}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
