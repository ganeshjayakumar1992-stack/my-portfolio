import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Home, User, Briefcase, Mail, Github, Linkedin, ExternalLink } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

interface MobileNavigationProps {
  isOpen: boolean
  onClose: () => void
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const location = useLocation()


  // Close navigation when route changes
  useEffect(() => {
    if (isOpen) {
      onClose()
    }
  }, [location.pathname, isOpen, onClose])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClose = () => {
    onClose()
  }

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/contact', label: 'Contact', icon: Mail }
  ]

  const socialLinks = [
    { url: 'https://github.com/username', icon: Github, label: 'GitHub' },
    { url: 'https://linkedin.com/in/username', icon: Linkedin, label: 'LinkedIn' }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Navigation Menu */}
          <motion.nav
            className="mobile-navigation"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="mobile-nav-header">
              <h3 className="mobile-nav-title">Menu</h3>
              <button
                className="mobile-nav-close"
                onClick={handleClose}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="mobile-nav-content">
              {navItems.map((item, index) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={handleClose}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                      {isActive && (
                        <motion.div
                          className="active-indicator"
                          layoutId="mobile-active"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="mobile-nav-social">
              <h4 className="social-title">Connect</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.url}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{social.label}</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="mobile-nav-footer">
              <p className="mobile-nav-version">Portfolio v2.0</p>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileNavigation
