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

  const handleBackdropClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    handleClose()
  }

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/contact', label: 'Contact', icon: Mail }
  ]

  const socialLinks = [
    { url: 'https://github.com/ganeshjayakumar1992-stack?tab=repositories', icon: Github, label: 'GitHub' },
    { url: 'https://www.linkedin.com/in/ganeshjayakumar1989/', icon: Linkedin, label: 'LinkedIn' }
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
            onClick={handleBackdropClick}
          />

          {/* Navigation Menu */}
          <motion.nav
            className="mobile-navigation"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            {/* Header */}
            <div className="mobile-nav-header">
              <h3 className="mobile-nav-title" style={{ color: '#1E293B' }}>Menu</h3>
              <button
                className="mobile-nav-close"
                onClick={handleClose}
                aria-label="Close menu"
                style={{ color: '#475569' }}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="mobile-nav-content" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navItems.map((item, index) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{ display: 'block' }}
                  >
                    <Link
                      to={item.path}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={handleClose}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem 1.5rem',
                        textDecoration: 'none',
                        color: isActive ? '#fff' : '#475569',
                        backgroundColor: isActive ? 'var(--gradient-accent)' : 'transparent',
                        borderRadius: '12px',
                        margin: '0.25rem 1rem',
                        minHeight: '48px',
                        fontSize: '1rem',
                        fontWeight: '500'
                      }}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                      {isActive && (
                        <motion.div
                          className="active-indicator"
                          layoutId="mobile-active"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          style={{
                            position: 'absolute',
                            right: '1.5rem',
                            width: '8px',
                            height: '8px',
                            backgroundColor: '#fff',
                            borderRadius: '50%'
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="mobile-nav-social" style={{ padding: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h4 className="social-title" style={{ color: '#1E293B', fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>Connect</h4>
              <div className="social-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
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
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.75rem 1rem',
                        textDecoration: 'none',
                        color: '#475569',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        minHeight: '44px',
                        fontSize: '0.9rem'
                      }}
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
            <div className="mobile-nav-footer" style={{ padding: '1rem 1.5rem', textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="mobile-nav-version" style={{ color: '#64748B', fontSize: '0.8rem', margin: 0 }}>Portfolio v2.0</p>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileNavigation
