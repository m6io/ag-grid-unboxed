import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { styles } from '@/styles'

export const NotFoundPage: React.FC = () => (
  <div className={styles.container}>
    <div className="py-16 text-center">
      <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
        404 - Page Not Found
      </h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        The page you're looking for doesn't exist.
      </p>
      <RouterLink to="/">
        <button className={`${styles.button} ${styles.primaryButton}`}>
          Go Home
        </button>
      </RouterLink>
    </div>
  </div>
)
