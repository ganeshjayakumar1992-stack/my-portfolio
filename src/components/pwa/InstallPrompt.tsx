import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, X, Smartphone, Star } from 'lucide-react'
import { usePWA } from '../../hooks/usePWA'

const InstallPrompt: React.FC = () => {
  const { isInstallable, isInstalled, installApp } = usePWA()
  const [isVisible, setIsVisible] = useState(true)
  const [isInstalling, setIsInstalling] = useState(false)

  // Don't show if not installable or already installed
  if (!isInstallable || isInstalled) {
    return null
  }

  const handleInstall = async () => {
    setIsInstalling(true)
    try {
      const success = await installApp()
      if (success) {
        setIsVisible(false)
      }
    } catch (error) {
      console.error('Installation failed:', error)
    } finally {
      setIsInstalling(false)
    }
  }

  const handleDismiss = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="install-prompt"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          <div className="install-prompt-content">
            {/* Icon and Title */}
            <div className="install-header">
              <div className="install-icon">
                <Smartphone className="w-6 h-6" />
              </div>
              <div className="install-text">
                <h4>Install Portfolio App</h4>
                <p>Get the full app experience with offline access</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="install-benefits">
              <div className="benefit-item">
                <Star className="w-4 h-4" />
                <span>Quick access from home screen</span>
              </div>
              <div className="benefit-item">
                <Star className="w-4 h-4" />
                <span>Works offline</span>
              </div>
              <div className="benefit-item">
                <Star className="w-4 h-4" />
                <span>App-like experience</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="install-actions">
              <motion.button
                className="install-button"
                onClick={handleInstall}
                disabled={isInstalling}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                {isInstalling ? 'Installing...' : 'Install App'}
              </motion.button>
              
              <button
                className="dismiss-button"
                onClick={handleDismiss}
                aria-label="Dismiss install prompt"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default InstallPrompt
