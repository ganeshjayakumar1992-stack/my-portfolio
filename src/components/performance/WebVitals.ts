import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

function sendToAnalytics(metric: any) {
  // In a real app, you would send this to your analytics service
  console.log('Web Vital:', {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id
  })
}

export function reportWebVitals() {
  getCLS(sendToAnalytics)
  getFID(sendToAnalytics)
  getFCP(sendToAnalytics)
  getLCP(sendToAnalytics)
  getTTFB(sendToAnalytics)
}

// Performance monitoring utilities
export const measurePerformance = () => {
  if ('performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    
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
    const memory = (performance as any).memory
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
    const connection = (navigator as any).connection
    return {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData
    }
  }
  return null
}
