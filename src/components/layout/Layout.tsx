import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '5rem' }}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
