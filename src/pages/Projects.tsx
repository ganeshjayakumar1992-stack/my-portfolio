import { motion } from 'framer-motion'
import { FadeInUp } from '../components/animations'
import { ProjectGallery } from '../components/portfolio'

// Define Project interface
interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  category: string
  featured: boolean
  completionDate: string
}

// Sample project data - in a real app, this would come from an API or CMS
const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration. Built with modern technologies and best practices.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    category: 'Full-Stack',
    featured: true,
    completionDate: '2024-12-01'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team features, and project organization tools. Features drag-and-drop interface and real-time collaboration.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop',
    technologies: ['Vue.js', 'Firebase', 'Real-time', 'PWA', 'TypeScript'],
    liveUrl: 'https://task-app-demo.com',
    githubUrl: 'https://github.com/username/task-management',
    category: 'Frontend',
    featured: true,
    completionDate: '2024-11-15'
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'This portfolio website built with React 19, TypeScript, and modern CSS. Features responsive design, smooth animations, and glassmorphism effects.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=200&fit=crop',
    technologies: ['React 19', 'TypeScript', 'CSS3', 'Framer Motion', 'Vite'],
    liveUrl: undefined,
    githubUrl: 'https://github.com/username/portfolio',
    category: 'Frontend',
    featured: false,
    completionDate: '2024-12-19'
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    description: 'A weather application with real-time data, interactive maps, and detailed forecasts. Includes location-based services and weather alerts.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=200&fit=crop',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation', 'PWA'],
    liveUrl: 'https://weather-dashboard-demo.com',
    githubUrl: 'https://github.com/username/weather-app',
    category: 'Frontend',
    featured: false,
    completionDate: '2024-10-20'
  },
  {
    id: '5',
    title: 'Blog CMS',
    description: 'A content management system for blogs with markdown support, user management, and SEO optimization. Built with modern backend technologies.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Markdown', 'SEO', 'JWT'],
    liveUrl: 'https://blog-cms-demo.com',
    githubUrl: 'https://github.com/username/blog-cms',
    category: 'Backend',
    featured: false,
    completionDate: '2024-09-30'
  },
  {
    id: '6',
    title: 'Mobile Fitness App',
    description: 'A fitness tracking application with workout plans, progress tracking, and social features. Built with React Native and Firebase.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop',
    technologies: ['React Native', 'Firebase', 'Redux', 'Charts', 'Push Notifications'],
    liveUrl: undefined,
    githubUrl: 'https://github.com/username/fitness-app',
    category: 'Mobile',
    featured: false,
    completionDate: '2024-08-25'
  }
]

const Projects = () => {
  const handleProjectClick = (project: Project) => {
    // You could open a modal, navigate to a detail page, or perform other actions
    console.log('Project clicked:', project)
  }

  return (
    <div className="section">
      <div className="container">
        {/* Page Header */}
        <FadeInUp>
          <div className="section-header text-center">
            <h1 className="section-title">My Projects</h1>
            <p className="section-subtitle">
              Here's a showcase of the projects I've worked on. Each one represents a unique challenge 
              and learning experience in my development journey.
            </p>
          </div>
        </FadeInUp>

        {/* Project Statistics */}
        <FadeInUp delay={0.2}>
          <div className="project-stats">
            <div className="stat-item">
              <div className="stat-number">{sampleProjects.length}</div>
              <div className="stat-label">Total Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{sampleProjects.filter(p => p.featured).length}</div>
              <div className="stat-label">Featured</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{[...new Set(sampleProjects.map(p => p.category))].length}</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{sampleProjects.filter(p => p.liveUrl).length}</div>
              <div className="stat-label">Live Demos</div>
            </div>
          </div>
        </FadeInUp>

        {/* Interactive Project Gallery */}
        <FadeInUp delay={0.4}>
          <ProjectGallery 
            projects={sampleProjects}
            onProjectClick={handleProjectClick}
          />
        </FadeInUp>

        {/* Call to Action */}
        <FadeInUp delay={0.6}>
          <div className="cta-section">
            <div className="cta-content">
              <h3>Have a project in mind?</h3>
              <p>Let's work together to bring your ideas to life!</p>
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
              >
                Get In Touch
              </motion.button>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  )
}

export default Projects
