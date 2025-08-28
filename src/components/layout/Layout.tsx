import type { ReactNode } from 'react'
import EnhancedHeader from './EnhancedHeader'
import Footer from './Footer'
import InstallPrompt from '../pwa/InstallPrompt'
import OfflineIndicator from '../pwa/OfflineIndicator'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <EnhancedHeader />
      <main style={{ paddingTop: '5rem' }}>
        {children}
      </main>
      <Footer />
      <InstallPrompt />
      <OfflineIndicator />
    </>
  )
}

export default Layout
