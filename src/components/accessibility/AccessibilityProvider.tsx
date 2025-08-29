import React, { useEffect, useState } from 'react'
import { AccessibilityContext, AccessibilityContextType } from './context'

interface AccessibilityProviderProps {
  children: React.ReactNode
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [isKeyboardUser, setKeyboardUser] = useState(false)
  const [announcements, setAnnouncements] = useState<string[]>([])

  // Detect keyboard user
  useEffect(() => {
    const handleKeyDown = () => {
      setKeyboardUser(true)
    }

    const handleMouseDown = () => {
      setKeyboardUser(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
    setAnnouncements(prev => [...prev, message])
  }

  // Focus management
  const setFocus = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.focus()
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  // Skip links functionality
  const skipToMainContent = () => {
    const mainContent = document.querySelector('main')
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView({ behavior: 'smooth' })
      announceToScreenReader('Main content area')
    }
  }

  const skipToNavigation = () => {
    const navigation = document.querySelector('nav')
    if (navigation) {
      navigation.focus()
      navigation.scrollIntoView({ behavior: 'smooth' })
      announceToScreenReader('Navigation menu')
    }
  }

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Escape key to close modals/menus
      if (event.key === 'Escape') {
        const activeModal = document.querySelector('[data-modal="true"]')
        if (activeModal) {
          const closeButton = activeModal.querySelector('[data-close="true"]') as HTMLElement
          if (closeButton) {
            closeButton.click()
            announceToScreenReader('Modal closed')
          }
        }
      }

      // Tab key navigation improvements
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation')
      }
    }

    const handleKeyUp = () => {
      document.body.classList.remove('keyboard-navigation')
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  const contextValue: AccessibilityContextType = {
    announceToScreenReader,
    setFocus,
    isKeyboardUser,
    setKeyboardUser,
    skipToMainContent,
    skipToNavigation
  }

  return (
    <AccessibilityContext.Provider value={contextValue}>
      {children}
      
      {/* Screen Reader Announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="screen-reader-announcements"
      >
        {announcements.map((announcement, index) => (
          <span key={index}>{announcement}</span>
        ))}
      </div>

      {/* Skip Links */}
      <div className="skip-links">
        <button
          onClick={skipToMainContent}
          className="skip-link"
          aria-label="Skip to main content"
        >
          Skip to main content
        </button>
        <button
          onClick={skipToNavigation}
          className="skip-link"
          aria-label="Skip to navigation"
        >
          Skip to navigation
        </button>
      </div>
    </AccessibilityContext.Provider>
  )
}

export default AccessibilityProvider
