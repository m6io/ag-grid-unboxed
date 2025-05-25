import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { Navbar } from '@/components/layout/Navbar'

import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'

import { examples } from '@/examples'
import { AnimatedRouteWrapper } from './components/layout/AnimatedRouteWrapper'
import { ExamplePageLayout } from './components/layout/ExamplePageLayout'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedRouteWrapper>
              <HomePage examples={examples} />
            </AnimatedRouteWrapper>
          }
        />
        {examples.map((example) => (
          <Route
            key={example.id}
            path={example.path}
            element={
              <AnimatedRouteWrapper>
                <ExamplePageLayout
                  title={example.pageTitle || example.title}
                  subtitle={example.pageSubtitle || example.description}
                >
                  <example.component />
                </ExamplePageLayout>
              </AnimatedRouteWrapper>
            }
          />
        ))}
        <Route
          path="*"
          element={
            <AnimatedRouteWrapper>
              <NotFoundPage />
            </AnimatedRouteWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Navbar examples={examples} />
        <main>
          <AnimatedRoutes />
        </main>
      </div>
    </BrowserRouter>
  )
}
