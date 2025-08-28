import React, { useEffect } from 'react'

interface SEOHeadProps {
  title: string
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
  title,
  description,
  keywords = [],
  image = '/og-image.jpg',
  url = window.location.href,
  type = 'website'
}) => {
  const fullTitle = `${title} | Ganesh Jayakumar - Full Stack Developer`
  const defaultKeywords = [
    'Ganesh Jayakumar',
    'Full Stack Developer',
    'React Developer',
    'TypeScript Developer',
    'Web Development',
    'Portfolio',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript Developer'
  ]
  
  const allKeywords = [...new Set([...defaultKeywords, ...keywords])]

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
  }, [fullTitle, description, allKeywords, type, url, image])

  const updateOpenGraphTags = () => {
    const ogTags = [
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:site_name', content: 'Ganesh Jayakumar Portfolio' },
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
  }

  const addStructuredData = () => {
    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
    existingScripts.forEach(script => script.remove())
    
    // Add Person schema
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ganesh Jayakumar",
      "jobTitle": "Full Stack Developer",
      "description": "Experienced full stack developer specializing in React, TypeScript, and modern web technologies",
      "url": "https://ganeshjayakumar.dev",
      "sameAs": [
        "https://github.com/ganeshjayakumar",
        "https://linkedin.com/in/ganeshjayakumar"
      ],
      "knowsAbout": [
        "React",
        "TypeScript",
        "Node.js",
        "Full Stack Development",
        "Web Development",
        "Software Engineering"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance Developer"
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
      "name": "Ganesh Jayakumar Portfolio",
      "description": "Professional portfolio showcasing web development projects and skills",
      "url": "https://ganeshjayakumar.dev",
      "author": {
        "@type": "Person",
        "name": "Ganesh Jayakumar"
      }
    }
    
    const websiteScript = document.createElement('script')
    websiteScript.type = 'application/ld+json'
    websiteScript.textContent = JSON.stringify(websiteSchema)
    document.head.appendChild(websiteScript)
  }

  return null
}

export default SEOHead
