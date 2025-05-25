import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import type { Example } from '@/types/Example'

interface NavDropdownProps {
  examples: Example[]
}

export const NavDropdown: React.FC<NavDropdownProps> = ({ examples }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const current = examples.find((ex) => ex.path === location.pathname)
  const label = current ? current.title : 'Home'
  const items = [
    { title: 'Home', path: '/' },
    ...examples.map((ex) => ({ title: ex.title, path: ex.path })),
  ]

  const handleNavigate = (path: string) => {
    navigate(path)
    setOpen(false)
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </span>
        <ChevronDown
          className={`ml-1 h-4 w-4 transform transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute z-50 mt-1 w-48 origin-top-right rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
          >
            {items.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => handleNavigate(item.path)}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 first:rounded-t-md last:rounded-b-md hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  {item.title}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
