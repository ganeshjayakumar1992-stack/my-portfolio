import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AccessibilityProvider } from './components/accessibility'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import BlogPost from './pages/BlogPost'
import PerformanceMonitor from './components/performance/PerformanceMonitor'
import PreloadResources from './components/performance/PreloadResources'
import './index.css'

// ScrollToTop component to ensure pages start at the top
const ScrollToTop = () => {
  const { pathname } = useLocation()
  
  useEffect(() => {
    // Force scroll to top with a small delay to ensure content is rendered
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      })
    }, 100)
  }, [pathname])
  
  return null
}

function App() {
  return (
    <Router>
      <AccessibilityProvider>
        <PreloadResources />
        <ScrollToTop />
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
        <PerformanceMonitor />
      </AccessibilityProvider>
    </Router>
  )
}

export default App
