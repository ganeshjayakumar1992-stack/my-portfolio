import type { ReactNode } from 'react'
import EnhancedHeader from './EnhancedHeader'
import Footer from './Footer'
import InstallPrompt from '../pwa/InstallPrompt'
import AccessibilityProvider from '../accessibility/AccessibilityProvider'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <AccessibilityProvider>
      <div className="app-layout">
        <EnhancedHeader />
        <main 
          id="main-content" 
          role="main" 
          aria-label="Main content"
          style={{ paddingTop: '5rem' }}
        >
          {children}
        </main>
        <Footer />
        <InstallPrompt />
      </div>
    </AccessibilityProvider>
  )
}

export default Layout
