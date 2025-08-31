import { useEffect } from 'react'

const PreloadResources = () => {
  useEffect(() => {
    // Preload critical fonts
    const fontLink = document.createElement('link')
    fontLink.rel = 'preload'
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
    fontLink.as = 'style'
    document.head.appendChild(fontLink)

    // Preload critical images (commented out for now to avoid path issues)
    // const criticalImages = [
    //   '/src/assets/PortfolioLogo.png',
    //   '/src/assets/B2B.png',
    //   '/src/assets/MedicalSocialMedia.png'
    // ]

    // criticalImages.forEach(src => {
    //   const link = document.createElement('link')
    //   link.rel = 'preload'
    //   link.href = src
    //   link.as = 'image'
    //   document.head.appendChild(link)
    // })

    // DNS prefetch for external resources
    const dnsPrefetch = document.createElement('link')
    dnsPrefetch.rel = 'dns-prefetch'
    dnsPrefetch.href = 'https://fonts.googleapis.com'
    document.head.appendChild(dnsPrefetch)

    const dnsPrefetch2 = document.createElement('link')
    dnsPrefetch2.rel = 'dns-prefetch'
    dnsPrefetch2.href = 'https://fonts.gstatic.com'
    document.head.appendChild(dnsPrefetch2)

    return () => {
      // Cleanup if needed
      document.head.removeChild(fontLink)
      document.head.removeChild(dnsPrefetch)
      document.head.removeChild(dnsPrefetch2)
    }
  }, [])

  return null
}

export default PreloadResources
