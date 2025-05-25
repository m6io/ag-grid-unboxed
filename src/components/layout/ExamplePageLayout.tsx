import React from 'react'
import { styles } from '@/styles'

interface ExamplePageLayoutProps {
  title: string
  subtitle: string
  children: React.ReactNode
}

export const ExamplePageLayout: React.FC<ExamplePageLayoutProps> = ({
  title,
  subtitle,
  children,
}) => (
  <div className={styles.container}>
    <div className="py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
      </div>
      <div className="rounded-lg border bg-foreground/20 p-6 shadow-sm dark:bg-background/50">
        {children}
      </div>
    </div>
  </div>
)
