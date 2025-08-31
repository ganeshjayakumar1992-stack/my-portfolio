import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
}

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)

  useEffect(() => {
    // Only run in development or when explicitly enabled
    if (process.env.NODE_ENV !== 'development' && !process.env.REACT_APP_ENABLE_PERFORMANCE_MONITORING) {
      return
    }

    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        const paint = performance.getEntriesByType('paint')
        
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart
        const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
        
        // Measure Largest Contentful Paint
        let largestContentfulPaint = 0
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const lastEntry = entries[entries.length - 1]
            if (lastEntry) {
              largestContentfulPaint = lastEntry.startTime
            }
          })
          observer.observe({ entryTypes: ['largest-contentful-paint'] })
        }

        // Measure Cumulative Layout Shift
        let cumulativeLayoutShift = 0
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!entry.hadRecentInput) {
                cumulativeLayoutShift += (entry as any).value
              }
            }
          })
          observer.observe({ entryTypes: ['layout-shift'] })
        }

        setMetrics({
          loadTime,
          firstContentfulPaint,
          largestContentfulPaint,
          cumulativeLayoutShift
        })

        // Log performance metrics
        console.log('Performance Metrics:', {
          loadTime: `${loadTime.toFixed(2)}ms`,
          firstContentfulPaint: `${firstContentfulPaint.toFixed(2)}ms`,
          largestContentfulPaint: `${largestContentfulPaint.toFixed(2)}ms`,
          cumulativeLayoutShift: `${cumulativeLayoutShift.toFixed(3)}`
        })
      }
    }

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
      return () => window.removeEventListener('load', measurePerformance)
    }
  }, [])

  // Only show in development
  if (process.env.NODE_ENV !== 'development' || !metrics) {
    return null
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '8px',
      fontSize: '12px',
      zIndex: 10000,
      fontFamily: 'monospace'
    }}>
      <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
      <div>FCP: {metrics.firstContentfulPaint.toFixed(2)}ms</div>
      <div>LCP: {metrics.largestContentfulPaint.toFixed(2)}ms</div>
      <div>CLS: {metrics.cumulativeLayoutShift.toFixed(3)}</div>
    </div>
  )
}

export default PerformanceMonitor
