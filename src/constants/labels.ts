/**
 * Custom Labels & Constants
 * Single source of truth for all static content across the portfolio
 * 
 * Best Practices Implemented:
 * - Centralized content management
 * - Type-safe constants
 * - Easy localization preparation
 * - Consistent messaging
 * - Maintainable structure
 */

// Navigation & Header
export const NAVIGATION = {
  HOME: 'Home',
  ABOUT: 'About',
  PROJECTS: 'Projects',
  BLOG: 'Blog',
  CONTACT: 'Contact',
  LOGO_TEXT: 'GJ',
  LOGO_ALT: 'Ganesh Jayakumar Portfolio'
} as const

// Hero Section
export const HERO = {
  BADGE_TEXT: 'Available for new opportunities',
  TITLE: "Hi, I'm Ganesh Jayakumar",
  SUBTITLE: 'Full-stack developer passionate about creating innovative solutions and sharing knowledge through code and writing.',
  PRIMARY_BUTTON: 'View My Work',
  SECONDARY_BUTTON: 'Get In Touch'
} as const

// About Section
export const ABOUT = {
  SECTION_TITLE: 'About Me',
  SECTION_SUBTITLE: "I'm a passionate developer who loves turning ideas into reality through code. Every project is an opportunity to learn, grow, and create something meaningful.",
  LEARN_MORE_BUTTON: 'Learn More About Me',
  
  // Who I Am Cards
  WHO_I_AM: {
    TITLE: 'Who I Am',
    DESCRIPTION: "I'm a passionate full-stack developer with a love for creating innovative solutions. I believe in writing clean, maintainable code and solving real-world problems through technology."
  },
  MISSION: {
    TITLE: 'My Mission',
    DESCRIPTION: 'To build applications that make a difference, learn continuously, and share knowledge with the developer community. Every project is an opportunity to grow and innovate.'
  },
  APPROACH: {
    TITLE: 'My Approach',
    DESCRIPTION: 'I focus on user experience, performance, and scalability. I believe the best code is the one that solves problems elegantly and efficiently.'
  }
} as const

// Skills Section
export const SKILLS = {
  SECTION_TITLE: 'My Skills',
  SECTION_SUBTITLE: 'Here are the technologies and tools I work with to bring ideas to life.',
  
  FRONTEND: {
    TITLE: 'Frontend',
    DESCRIPTION: 'React, TypeScript, JavaScript, HTML5, CSS3, Responsive Design, Modern CSS (Grid, Flexbox)'
  },
  BACKEND: {
    TITLE: 'Backend',
    DESCRIPTION: 'Node.js, Express.js, REST APIs, Database Design, Authentication, Serverless Functions'
  },
  TOOLS_DEVOPS: {
    TITLE: 'Tools & DevOps',
    DESCRIPTION: 'Git, GitHub, Vercel, Vite, npm, VS Code, Terminal, CI/CD, Performance Optimization'
  }
} as const

// Experience Section
export const EXPERIENCE = {
  SECTION_TITLE: 'Experience',
  SECTION_SUBTITLE: 'My journey in software development and the projects that shaped my skills.',
  
  PROFESSIONAL: {
    TITLE: 'Professional Experience',
    DESCRIPTION: "I've worked on various projects ranging from small business websites to complex enterprise applications, always focusing on delivering value and quality."
  },
  LEARNING: {
    TITLE: 'Continuous Learning',
    DESCRIPTION: "I'm constantly learning new technologies and best practices to stay current with the ever-evolving world of web development."
  },
  COLLABORATION: {
    TITLE: 'Collaboration',
    DESCRIPTION: 'I believe in the power of teamwork and knowledge sharing. I enjoy collaborating with other developers and contributing to open-source projects.'
  }
} as const

// Projects Section
export const PROJECTS = {
  SECTION_TITLE: 'Featured Projects',
  SECTION_SUBTITLE: "Here are some of the projects I've worked on recently. Each one represents a unique challenge and learning experience.",
  VIEW_ALL_BUTTON: 'View All Projects',
  
  ECOMMERCE: {
    TITLE: 'E-Commerce Platform',
    DESCRIPTION: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB.',
    TAGS: ['React', 'Node.js', 'MongoDB'],
    LINK_TEXT: 'View Project →'
  },
  TASK_APP: {
    TITLE: 'Task Management App',
    DESCRIPTION: 'A collaborative task management application with real-time updates and team features.',
    TAGS: ['Vue.js', 'Firebase', 'Tailwind'],
    LINK_TEXT: 'View Project →'
  },
  PORTFOLIO: {
    TITLE: 'Portfolio Website',
    DESCRIPTION: 'This portfolio website built with React, TypeScript, and modern CSS.',
    TAGS: ['React', 'TypeScript', 'CSS3'],
    LINK_TEXT: 'View Project →'
  }
} as const

// CTA Section
export const CTA = {
  TITLE: "Let's Work Together",
  SUBTITLE: "I'm always interested in new opportunities and exciting projects. Let's discuss how we can collaborate and create something amazing together!",
  BUTTON_TEXT: 'Get In Touch'
} as const

// Contact Form
export const CONTACT = {
  SECTION_TITLE: 'Get In Touch',
  SECTION_SUBTITLE: "I'd love to hear from you! Whether you have a project in mind, want to discuss opportunities, or just want to say hello, feel free to reach out.",
  
  FORM: {
    FIRST_NAME: 'First Name',
    LAST_NAME: 'Last Name',
    EMAIL: 'Email Address',
    PHONE: 'Phone Number (Optional)',
    DESCRIPTION: 'Tell me about your project or what you\'d like to discuss',
    SUBMIT_BUTTON: 'Send Message',
    SUBMIT_LOADING: 'Sending...',
    SUBMIT_SUCCESS: 'Message sent successfully!',
    SUBMIT_ERROR: 'Failed to send message. Please try again.'
  },
  
  VALIDATION: {
    FIRST_NAME_REQUIRED: 'First name is required',
    LAST_NAME_REQUIRED: 'Last name is required',
    EMAIL_REQUIRED: 'Email address is required',
    EMAIL_INVALID: 'Please enter a valid email address',
    DESCRIPTION_REQUIRED: 'Please tell me about your project or query',
    PHONE_INVALID: 'Please enter a valid phone number'
  },
  
  SUCCESS_MESSAGE: 'Thank you for your message! I\'ll get back to you within 24 hours.',
  ERROR_MESSAGE: 'Something went wrong. Please try again or contact me directly at ganeshjayakumar1992@gmail.com'
} as const

// Footer
export const FOOTER = {
  COPYRIGHT: '© 2024 Ganesh Jayakumar. All rights reserved.',
  MADE_WITH: 'Made with ❤️ and lots of ☕',
  SOCIAL_LINKS: {
    GITHUB: 'GitHub',
    LINKEDIN: 'LinkedIn',
    TWITTER: 'Twitter',
    EMAIL: 'Email'
  }
} as const

// Meta Information
export const META = {
  SITE_NAME: 'Ganesh Jayakumar - Portfolio',
  SITE_DESCRIPTION: 'Full-stack developer passionate about creating innovative solutions and sharing knowledge through code and writing.',
  AUTHOR: 'Ganesh Jayakumar',
  CONTACT_EMAIL: 'ganeshjayakumar1992@gmail.com',
  GITHUB_URL: 'https://github.com/ganeshjayakumar1992-stack',
  LINKEDIN_URL: 'https://linkedin.com/in/ganeshjayakumar1992'
} as const

// Animation Delays (in seconds)
export const ANIMATION_DELAYS = {
  HERO_BADGE: 0,
  HERO_TITLE: 0.2,
  HERO_SUBTITLE: 0.4,
  HERO_BUTTONS: 0.6,
  HERO_VISUAL: 0.8,
  SECTION_HEADER: 0,
  CARD_1: 0.1,
  CARD_2: 0.2,
  CARD_3: 0.3,
  CTA_SECTION: 0.4
} as const

// Form Configuration
export const FORM_CONFIG = {
  EMAIL_SERVICE: 'ganeshjayakumar1992@gmail.com',
  SUBJECT_PREFIX: 'Portfolio Contact: ',
  MAX_DESCRIPTION_LENGTH: 1000,
  MIN_DESCRIPTION_LENGTH: 10
} as const

// Export all constants as a single object for easy access
export const LABELS = {
  NAVIGATION,
  HERO,
  ABOUT,
  SKILLS,
  EXPERIENCE,
  PROJECTS,
  CTA,
  CONTACT,
  FOOTER,
  META,
  ANIMATION_DELAYS,
  FORM_CONFIG
} as const

// Type definitions for better IntelliSense
export type NavigationKey = keyof typeof NAVIGATION
export type HeroKey = keyof typeof HERO
export type AboutKey = keyof typeof ABOUT
export type ContactKey = keyof typeof CONTACT
export type ProjectKey = keyof typeof PROJECTS
