// Simplified Web Vitals implementation without external dependencies

interface WebVitalMetric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta: number
  id: string
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number
  hadRecentInput: boolean
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number
  startTime: number
}

interface PerformanceMemory {
  usedJSHeapSize: number
  totalJSHeapSize: number
  jsHeapSizeLimit: number
}

interface NetworkConnection {
  effectiveType: string
  downlink: number
  rtt: number
  saveData: boolean
}

function sendToAnalytics(metric: WebVitalMetric) {
  // In a real app, you would send this to your analytics service
  console.log('Web Vital:', {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id
  })
}

// Custom implementation of Core Web Vitals
export function reportWebVitals() {
  // Cumulative Layout Shift (CLS)
  if ('PerformanceObserver' in window) {
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as LayoutShiftEntry
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value
          sendToAnalytics({
            name: 'CLS',
            value: clsValue,
            rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor',
            delta: layoutShiftEntry.value,
            id: (entry as PerformanceEntry & { id?: string }).id || 'cls'
          })
        }
      }
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })
  }

  // First Input Delay (FID)
  if ('PerformanceObserver' in window) {
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const firstInputEntry = entry as FirstInputEntry
        const fid = firstInputEntry.processingStart - firstInputEntry.startTime
        sendToAnalytics({
          name: 'FID',
          value: fid,
          rating: fid < 100 ? 'good' : fid < 300 ? 'needs-improvement' : 'poor',
          delta: fid,
          id: (entry as PerformanceEntry & { id?: string }).id || 'fid'
        })
      }
    })
    fidObserver.observe({ entryTypes: ['first-input'] })
  }

  // First Contentful Paint (FCP)
  if ('PerformanceObserver' in window) {
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          sendToAnalytics({
            name: 'FCP',
            value: entry.startTime,
            rating: entry.startTime < 1000 ? 'good' : entry.startTime < 1800 ? 'needs-improvement' : 'poor',
            delta: entry.startTime,
            id: (entry as PerformanceEntry & { id?: string }).id || 'fcp'
          })
        }
      }
    })
    fcpObserver.observe({ entryTypes: ['paint'] })
  }

  // Largest Contentful Paint (LCP)
  if ('PerformanceObserver' in window) {
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      if (lastEntry) {
        sendToAnalytics({
          name: 'LCP',
          value: lastEntry.startTime,
          rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs-improvement' : 'poor',
          delta: lastEntry.startTime,
          id: (lastEntry as PerformanceEntry & { id?: string }).id || 'lcp'
        })
      }
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
  }

  // Time to First Byte (TTFB)
  if ('performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigation) {
      const ttfb = navigation.responseStart - navigation.requestStart
      sendToAnalytics({
        name: 'TTFB',
        value: ttfb,
        rating: ttfb < 600 ? 'good' : ttfb < 800 ? 'needs-improvement' : 'poor',
        delta: ttfb,
        id: 'ttfb'
      })
    }
  }
}

// Performance monitoring utilities
export const measurePerformance = () => {
  if ('performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming & { navigationStart: number }
    
    return {
      // Time to First Byte
      ttfb: navigation.responseStart - navigation.requestStart,
      // DOM Content Loaded
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      // Load Complete
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      // Total Page Load Time
      totalLoadTime: navigation.loadEventEnd - navigation.navigationStart
    }
  }
  
  return null
}

// Memory usage monitoring
export const getMemoryInfo = () => {
  if ('memory' in performance) {
    const memory = (performance as Performance & { memory: PerformanceMemory }).memory
    return {
      usedJSHeapSize: memory.usedJSHeapSize,
      totalJSHeapSize: memory.totalJSHeapSize,
      jsHeapSizeLimit: memory.jsHeapSizeLimit
    }
  }
  return null
}

// Network information
export const getNetworkInfo = () => {
  if ('connection' in navigator) {
    const connection = (navigator as Navigator & { connection: NetworkConnection }).connection
    return {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData
    }
  }
  return null
}
