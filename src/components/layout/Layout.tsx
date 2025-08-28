import type { ReactNode } from 'react'
import EnhancedHeader from './EnhancedHeader'
import Footer from './Footer'
import InstallPrompt from '../pwa/InstallPrompt'
import OfflineIndicator from '../pwa/OfflineIndicator'
import AccessibilityProvider from '../accessibility/AccessibilityProvider'
import PerformanceMonitor from '../performance/PerformanceMonitor'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <AccessibilityProvider>
      <EnhancedHeader />
      <main style={{ paddingTop: '5rem' }}>
        {children}
      </main>
      <Footer />
      <InstallPrompt />
      <OfflineIndicator />
      <PerformanceMonitor showDetails={process.env.NODE_ENV === 'development'} />
    </AccessibilityProvider>
  )
}

export default Layout
