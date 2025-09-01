import React, { useEffect, useCallback, useMemo } from 'react'

interface SEOHeadProps {
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}

const SEOHead: React.FC<SEOHeadProps> = ({
  description,
  keywords = [],
  image = '/og-image.jpg',
  url = window.location.href,
  type = 'website'
}) => {
  const fullTitle = 'Ganesh\'s Portfolio' // Hardcoded as title is removed from props
  
  const allKeywords = useMemo(() => {
    const defaultKeywords = [
      'Ganesh Jayakumar',
      'Salesforce Technical Architect',
      'Salesforce CPQ',
      'AI/ML Developer',
      'Einstein AI',
      'Medical LLM',
      'React Developer',
      'TypeScript Developer',
      'Full Stack Development',
      'Portfolio',
      'Software Engineer',
      'Salesforce Consultant',
      'AI Consultant',
      'Environmental Technology'
    ]
    return [...new Set([...defaultKeywords, ...keywords])]
  }, [keywords])

  const updateOpenGraphTags = useCallback(() => {
    const ogTags = [
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:site_name', content: 'Ganesh\'s Portfolio' },
      { property: 'og:locale', content: 'en_US' }
    ]
    
    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`)
      if (!metaTag) {
        metaTag = document.createElement('meta')
        metaTag.setAttribute('property', tag.property)
        document.head.appendChild(metaTag)
      }
      metaTag.setAttribute('content', tag.content)
    })
  }, [fullTitle, description, type, url, image])

  const addStructuredData = useCallback(() => {
    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
    existingScripts.forEach(script => script.remove())
    
    // Add Person schema
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ganesh Jayakumar",
      "jobTitle": "Salesforce Technical Architect",
      "description": "Salesforce Technical Architect with 15+ years of IT experience, specializing in AI/ML solutions, CPQ automation, and building sustainable environmental technologies",
      "url": "https://ganeshjayakumar.com",
      "sameAs": [
        "https://github.com/ganeshjayakumar1992-stack",
        "https://linkedin.com/in/ganeshjayakumar1989/"
      ],
      "knowsAbout": [
        "Salesforce CPQ",
        "Einstein AI",
        "Field Service Lightning",
        "AI/ML Development",
        "Medical LLM",
        "React",
        "TypeScript",
        "Node.js",
        "Full Stack Development",
        "Environmental Technology"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Tata Consultancy Services"
      }
    }
    
    const personScript = document.createElement('script')
    personScript.type = 'application/ld+json'
    personScript.textContent = JSON.stringify(personSchema)
    document.head.appendChild(personScript)
    
    // Add Website schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Ganesh's Portfolio",
      "description": "Professional portfolio showcasing Salesforce solutions, AI/ML innovations, and full-stack development projects",
      "url": "https://ganeshjayakumar.com",
      "author": {
        "@type": "Person",
        "name": "Ganesh Jayakumar"
      }
    }
    
    const websiteScript = document.createElement('script')
    websiteScript.type = 'application/ld+json'
    websiteScript.textContent = JSON.stringify(websiteSchema)
    document.head.appendChild(websiteScript)
  }, [])

  // Update document title and meta tags
  useEffect(() => {
    // Update document title
    document.title = fullTitle
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description)
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.setAttribute('content', allKeywords.join(', '))
    
    // Update Open Graph tags
    updateOpenGraphTags()
    
    // Add structured data
    addStructuredData()
  }, [fullTitle, description, allKeywords, type, url, image, updateOpenGraphTags, addStructuredData])

  return null
}

export default SEOHead
