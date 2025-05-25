import React from 'react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { useThemeContext } from '@/theme/ThemeProvider'
import { createPlaceholderUrl } from '@/lib/createPlaceholderUrl'
import type { Example } from '@/types/Example'
import { styles } from '@/styles'

interface ExampleCardProps {
  example: Example
  index: number
}

const darkPlaceholder = createPlaceholderUrl({
  width: 300,
  height: 200,
  bgColor: '1f2937',
  textColor: '9ca3af',
})

const lightPlaceholder = createPlaceholderUrl({
  width: 300,
  height: 200,
  bgColor: 'e5e7eb',
  textColor: '6b7280',
})

const ExampleCard: React.FC<ExampleCardProps> = ({ example, index }) => {
  const { isDarkMode } = useThemeContext()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <RouterLink to={example.path}>
        <div className={`${styles.card} flex h-full flex-col`}>
          <img
            src={
              example.image || (isDarkMode ? darkPlaceholder : lightPlaceholder)
            }
            alt={`${example.title} preview`}
            className="mb-4 h-40 w-full rounded object-cover"
          />
          <div className="flex-1">
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              {example.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {example.description}
            </p>
          </div>
        </div>
      </RouterLink>
    </motion.div>
  )
}

interface HomePageProps {
  examples: Example[]
}

export const HomePage: React.FC<HomePageProps> = ({ examples }) => (
  <div className={styles.container}>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="py-12"
    >
      <h1 className="mb-4 text-center text-4xl font-bold text-gray-900 dark:text-white">
        ag-grid-react showcase
      </h1>
      <p className="mb-12 text-center text-xl text-gray-600 dark:text-gray-400">
        Select an example to explore
      </p>

      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        {examples.map((example, index) => (
          <ExampleCard key={example.id} example={example} index={index} />
        ))}
      </div>
    </motion.div>
  </div>
)
