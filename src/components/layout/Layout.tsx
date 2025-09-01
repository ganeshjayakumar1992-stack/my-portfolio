import type { ReactNode } from 'react'
import EnhancedHeader from './EnhancedHeader'
import Footer from './Footer'
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
          className="main-content"
        >
          {children}
        </main>
        <Footer />
      </div>
    </AccessibilityProvider>
  )
}

export default Layout
