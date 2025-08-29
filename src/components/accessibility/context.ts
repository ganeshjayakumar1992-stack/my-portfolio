import { createContext } from 'react'

export interface AccessibilityContextType {
  announceToScreenReader: (message: string) => void
  setFocus: (elementId: string) => void
  isKeyboardUser: boolean
  setKeyboardUser: (value: boolean) => void
  skipToMainContent: () => void
  skipToNavigation: () => void
}

export const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)
