import React, { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
}

interface PerformanceMonitorProps {
  showDetails?: boolean
}

// Define proper types for performance entries
interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean
  value: number
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ showDetails = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  })
  const [isVisible, setIsVisible] = useState(false)
  const [performanceScore, setPerformanceScore] = useState<number>(0)

  const calculatePerformanceScore = useCallback(() => {
    let score = 100
    let totalMetrics = 0

    if (metrics.fcp !== null) {
      totalMetrics++
      if (metrics.fcp > 1800) score -= 20
      else if (metrics.fcp > 1000) score -= 10
    }

    if (metrics.lcp !== null) {
      totalMetrics++
      if (metrics.lcp > 4000) score -= 20
      else if (metrics.lcp > 2500) score -= 10
    }

    if (metrics.fid !== null) {
      totalMetrics++
      if (metrics.fid > 300) score -= 20
      else if (metrics.fid > 100) score -= 10
    }

    if (metrics.cls !== null) {
      totalMetrics++
      if (metrics.cls > 0.25) score -= 20
      else if (metrics.cls > 0.1) score -= 10
    }

    if (metrics.ttfb !== null) {
      totalMetrics++
      if (metrics.ttfb > 800) score -= 20
      else if (metrics.ttfb > 600) score -= 10
    }

    if (totalMetrics > 0) {
      score = Math.max(0, score)
      setPerformanceScore(score)
    }
  }, [metrics])

  const measurePerformance = useCallback(() => {
    // First Contentful Paint (FCP)
    if ('PerformanceObserver' in window) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }))
          }
        })
        fcpObserver.observe({ entryTypes: ['paint'] })
      } catch (error) {
        console.warn('FCP measurement failed:', error)
      }

      // Largest Contentful Paint (LCP)
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          if (lastEntry) {
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
          }
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      } catch (error) {
        console.warn('LCP measurement failed:', error)
      }

      // First Input Delay (FID)
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach(entry => {
            if (entry.entryType === 'first-input') {
              const firstInputEntry = entry as PerformanceEventTiming
              setMetrics(prev => ({ ...prev, fid: firstInputEntry.processingStart - firstInputEntry.startTime }))
            }
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })
      } catch (error) {
        console.warn('FID measurement failed:', error)
      }

      // Cumulative Layout Shift (CLS)
      try {
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach(entry => {
            if (entry.entryType === 'layout-shift') {
              const layoutShiftEntry = entry as LayoutShiftEntry
              if (!layoutShiftEntry.hadRecentInput) {
                clsValue += layoutShiftEntry.value
                setMetrics(prev => ({ ...prev, cls: clsValue }))
              }
            }
          })
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      } catch (error) {
        console.warn('CLS measurement failed:', error)
      }
    }

    // Time to First Byte (TTFB)
    if ('performance' in window) {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart
        setMetrics(prev => ({ ...prev, ttfb }))
      }
    }

    // Calculate performance score
    setTimeout(() => {
      calculatePerformanceScore()
    }, 3000)
  }, [calculatePerformanceScore])

  useEffect(() => {
    // Only run in production or when explicitly enabled
    if (process.env.NODE_ENV === 'production' || showDetails) {
      setIsVisible(true)
      measurePerformance()
    }
  }, [showDetails, measurePerformance])

  const getMetricStatus = (metric: keyof PerformanceMetrics, value: number | null) => {
    if (value === null) return 'unknown'
    
    const thresholds = {
      fcp: { good: 1000, poor: 1800 },
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 600, poor: 800 }
    }

    const threshold = thresholds[metric]
    if (value <= threshold.good) return 'good'
    if (value <= threshold.poor) return 'needs-improvement'
    return 'poor'
  }

  const getMetricColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600'
      case 'needs-improvement': return 'text-yellow-600'
      case 'poor': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getMetricIcon = (status: string) => {
    switch (status) {
      case 'good': return <TrendingUp className="w-4 h-4" />
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4" />
      case 'poor': return <TrendingDown className="w-4 h-4" />
      default: return <Activity className="w-4 h-4" />
    }
  }

  const formatMetric = (metric: keyof PerformanceMetrics, value: number | null) => {
    if (value === null) return 'N/A'
    
    switch (metric) {
      case 'fcp':
      case 'lcp':
      case 'fid':
      case 'ttfb':
        return `${Math.round(value)}ms`
      case 'cls':
        return value.toFixed(3)
      default:
        return value.toString()
    }
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        className="performance-monitor"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="performance-header">
          <Activity className="w-5 h-5" />
          <h3>Performance Monitor</h3>
          <div className="performance-score">
            <span className={`score ${performanceScore >= 90 ? 'excellent' : performanceScore >= 70 ? 'good' : 'needs-improvement'}`}>
              {performanceScore}
            </span>
            <span className="score-label">/100</span>
          </div>
        </div>

        <div className="performance-metrics">
          {Object.entries(metrics).map(([key, value]) => {
            const metricKey = key as keyof PerformanceMetrics
            const status = getMetricStatus(metricKey, value)
            const color = getMetricColor(status)
            const icon = getMetricIcon(status)
            
            return (
              <div key={key} className="metric-item">
                <div className="metric-header">
                  <span className="metric-name">{key.toUpperCase()}</span>
                  <span className={`metric-status ${color}`}>
                    {icon}
                  </span>
                </div>
                <div className="metric-value">
                  {formatMetric(metricKey, value)}
                </div>
                <div className="metric-bar">
                  <div 
                    className={`metric-progress ${status}`}
                    style={{ 
                      width: `${value ? Math.min((value / 1000) * 100, 100) : 0}%` 
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        <div className="performance-legend">
          <div className="legend-item">
            <div className="legend-color good" />
            <span>Good</span>
          </div>
          <div className="legend-item">
            <div className="legend-color needs-improvement" />
            <span>Needs Improvement</span>
          </div>
          <div className="legend-item">
            <div className="legend-color poor" />
            <span>Poor</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PerformanceMonitor
