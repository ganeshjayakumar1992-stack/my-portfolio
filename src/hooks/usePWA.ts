import { useState, useEffect } from 'react'

interface PWAInstallPrompt {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

interface PWAState {
  isInstallable: boolean
  isInstalled: boolean
  isOffline: boolean
  isOnline: boolean
  deferredPrompt: PWAInstallPrompt | null
}

export const usePWA = () => {
  const [pwaState, setPwaState] = useState<PWAState>({
    isInstallable: false,
    isInstalled: false,
    isOffline: false,
    isOnline: true,
    deferredPrompt: null
  })

  useEffect(() => {
    // Check if app is installed
    const checkIfInstalled = () => {
      const isInstalled = window.matchMedia('(display-mode: standalone)').matches ||
                         (window.navigator as any).standalone === true
      
      setPwaState(prev => ({ ...prev, isInstalled }))
    }

    // Handle online/offline status
    const handleOnlineStatus = () => {
      setPwaState(prev => ({
        ...prev,
        isOnline: navigator.onLine,
        isOffline: !navigator.onLine
      }))
    }

    // Handle beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setPwaState(prev => ({
        ...prev,
        isInstallable: true,
        deferredPrompt: e as any
      }))
    }

    // Handle appinstalled event
    const handleAppInstalled = () => {
      setPwaState(prev => ({
        ...prev,
        isInstalled: true,
        isInstallable: false,
        deferredPrompt: null
      }))
    }

    // Register service worker
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js')
          console.log('Service Worker registered successfully:', registration)
        } catch (error) {
          console.error('Service Worker registration failed:', error)
        }
      }
    }

    // Initialize PWA functionality
    const initPWA = async () => {
      checkIfInstalled()
      handleOnlineStatus()
      await registerServiceWorker()

      // Add event listeners
      window.addEventListener('online', handleOnlineStatus)
      window.addEventListener('offline', handleOnlineStatus)
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.addEventListener('appinstalled', handleAppInstalled)

      // Check for existing service worker
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.getRegistration()
        if (registration) {
          console.log('Service Worker already registered:', registration)
        }
      }
    }

    initPWA()

    // Cleanup
    return () => {
      window.removeEventListener('online', handleOnlineStatus)
      window.removeEventListener('offline', handleOnlineStatus)
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  // Install app function
  const installApp = async (): Promise<boolean> => {
    if (!pwaState.deferredPrompt) {
      console.log('Install prompt not available')
      return false
    }

    try {
      pwaState.deferredPrompt.prompt()
      const { outcome } = await pwaState.deferredPrompt.userChoice
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt')
        setPwaState(prev => ({
          ...prev,
          isInstallable: false,
          deferredPrompt: null
        }))
        return true
      } else {
        console.log('User dismissed the install prompt')
        return false
      }
    } catch (error) {
      console.error('Error during app installation:', error)
      return false
    }
  }

  // Check for updates
  const checkForUpdates = async () => {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.getRegistration()
      if (registration) {
        await registration.update()
        console.log('Service Worker update check completed')
      }
    }
  }

  // Send message to service worker
  const sendMessageToSW = (message: any) => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage(message)
    }
  }

  return {
    ...pwaState,
    installApp,
    checkForUpdates,
    sendMessageToSW
  }
}
