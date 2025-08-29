import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wifi, WifiOff, RefreshCw } from 'lucide-react'
import { usePWA } from '../../hooks/usePWA'

const OfflineIndicator: React.FC = () => {
  const { isOffline, isOnline } = usePWA()

  const handleRefresh = () => {
    window.location.reload()
  }



  return (
    <AnimatePresence>
      {isOffline && (
        <motion.div
          className="offline-indicator"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="offline-content">
            <div className="offline-icon">
              <WifiOff className="w-5 h-5" />
            </div>
            <div className="offline-text">
              <span className="offline-status">You're offline</span>
              <span className="offline-message">Some features may be limited</span>
            </div>
            <div className="offline-actions">
              <motion.button
                className="offline-button"
                onClick={handleRefresh}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Refresh page"
              >
                <RefreshCw className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      {isOnline && (
        <motion.div
          className="online-indicator"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="online-content">
            <div className="online-icon">
              <Wifi className="w-5 h-5" />
            </div>
            <div className="online-text">
              <span className="online-status">Back online</span>
              <span className="online-message">All features available</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default OfflineIndicator
