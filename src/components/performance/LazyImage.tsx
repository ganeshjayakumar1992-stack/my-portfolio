import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Image, Loader2 } from 'lucide-react'

interface LazyImageProps {
  src: string
  alt: string
  placeholder?: string
  className?: string
  width?: number | string
  height?: number | string
  priority?: boolean
  onLoad?: () => void
  onError?: () => void
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholder = '/placeholder-image.jpg',
  className = '',
  width,
  height,
  priority = false,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const [currentSrc, setCurrentSrc] = useState(priority ? src : placeholder)
  const imgRef = useRef<HTMLImageElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (priority) {
      setIsInView(true)
      setCurrentSrc(src)
      return
    }

    // Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true)
              setCurrentSrc(src)
              observerRef.current?.unobserve(entry.target)
            }
          })
        },
        {
          rootMargin: '50px 0px',
          threshold: 0.1
        }
      )

      if (imgRef.current) {
        observerRef.current.observe(imgRef.current)
      }
    } else {
      // Fallback for older browsers
      setIsInView(true)
      setCurrentSrc(src)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [src, priority])

  const handleImageLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleImageError = () => {
    setIsError(true)
    onError?.()
  }

  const handleImageClick = () => {
    // Optional: Open image in full screen or modal
    if (isLoaded && !isError) {
      window.open(src, '_blank')
    }
  }

  return (
    <div 
      className={`lazy-image-container ${className}`}
      style={{ width, height }}
    >
      <AnimatePresence mode="wait">
        {/* Loading State */}
        {!isLoaded && !isError && (
          <motion.div
            key="loading"
            className="lazy-image-loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Loader2 className="loading-spinner" />
            <span className="loading-text">Loading...</span>
          </motion.div>
        )}

        {/* Error State */}
        {isError && (
          <motion.div
            key="error"
            className="lazy-image-error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Image className="error-icon" />
            <span className="error-text">Failed to load image</span>
          </motion.div>
        )}

        {/* Image */}
        {isInView && (
          <motion.img
            ref={imgRef}
            key="image"
            src={currentSrc}
            alt={alt}
            className={`lazy-image ${isLoaded ? 'loaded' : ''}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            onClick={handleImageClick}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: isLoaded ? 1 : 0.3, 
              scale: isLoaded ? 1 : 0.95 
            }}
            transition={{ 
              duration: 0.3,
              ease: 'easeOut'
            }}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            style={{
              width: width || '100%',
              height: height || 'auto'
            }}
          />
        )}
      </AnimatePresence>

      {/* Placeholder (shown while loading) */}
      {!isLoaded && !isError && currentSrc === placeholder && (
        <div className="lazy-image-placeholder">
          <Image className="placeholder-icon" />
        </div>
      )}
    </div>
  )
}

export default LazyImage
