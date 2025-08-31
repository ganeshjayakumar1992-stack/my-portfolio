import { motion } from 'framer-motion'
import { FadeInUp } from '../components/animations'
import { ProjectGallery } from '../components/portfolio'
import medicalLLMImage from '../assets/medical-research-llm.png'
import b2bHealthcareImage from '../assets/B2B.png'
import aiServiceCloudImage from '../assets/ServiceCloudApp.png'
import medicalSocialMediaImage from '../assets/MedicalSocialMedia.png'

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
    title: 'Portfolio Website',
    description: 'This modern portfolio website built with React 19, TypeScript, and advanced CSS animations. Features PWA capabilities, performance optimization, and responsive design with glassmorphism effects.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=200&fit=crop',
    technologies: ['React 19', 'TypeScript', 'CSS3', 'Framer Motion', 'Vite', 'PWA'],
    liveUrl: undefined,
    githubUrl: 'https://github.com/ganeshjayakumar1992-stack/my-portfolio',
    category: 'Frontend',
    featured: true,
    completionDate: '2024-12-19'
  },
  {
    id: '2',
    title: 'AI-Driven Service Cloud & Life Sciences Cloud',
    description: 'Future project focusing on AI-powered Service Cloud solutions for healthcare and life sciences. Will integrate Einstein AI, predictive analytics, and machine learning for enhanced customer service and patient care.',
    image: aiServiceCloudImage,
    technologies: ['Salesforce Service Cloud', 'Life Sciences Cloud', 'Einstein AI', 'Machine Learning', 'Predictive Analytics', 'Healthcare AI'],
    liveUrl: undefined,
    githubUrl: undefined,
    category: 'AI/ML',
    featured: true,
    completionDate: '2025-06-01'
  },
  {
    id: '3',
    title: 'Medical Social Media Mobile App',
    description: 'Ongoing project: A specialized social media platform for medical professionals, focusing on operation room posts, comments, and learning content. Enables surgeons and medical professionals to share knowledge, discuss cases, and collaborate on medical procedures.',
    image: medicalSocialMediaImage,
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Real-time Chat', 'Medical Content Moderation', 'HIPAA Compliance', 'Push Notifications'],
    liveUrl: undefined,
    githubUrl: undefined,
    category: 'Mobile App',
    featured: true,
    completionDate: '2025-03-01'
  },
  {
    id: '4',
    title: 'Medical Research LLM',
    description: 'Currently developing and fine-tuning medical chatbot LLM for advanced research paper summarization. Using MedQA and MedAlpaca datasets.',
    image: medicalLLMImage,
    technologies: ['LLM Development', 'Medical AI', 'MedQA Dataset', 'MedAlpaca', 'Fine-tuning', 'Python'],
    liveUrl: undefined,
    githubUrl: undefined,
    category: 'AI/ML',
    featured: false,
    completionDate: '2025-12-15'
  },
  {
    id: '5',
    title: 'B2B Healthcare Website',
    description: 'Developed a B2B healthcare website using open source technologies including React.js, Node.js, Express.js, MongoDB, and Java Spring Boot microservices.',
    image: b2bHealthcareImage,
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Java', 'Spring Boot', 'Microservices'],
    liveUrl: undefined,
    githubUrl: undefined,
    category: 'Full-Stack',
    featured: false,
    completionDate: '2024-08-01'
  }
]

const Projects = () => {
  const handleProjectClick = (project: Project) => {
    // You could open a modal, navigate to a detail page, or perform other actions
    console.log('Project clicked:', project)
  }

  return (
    <motion.div 
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        {/* Page Header */}
        <FadeInUp>
          <div className="section-header text-center">
            <h1 className="section-title">My Projects</h1>
            <p className="section-subtitle">
              Here's a showcase of my work spanning Salesforce solutions, AI/ML innovations, and full-stack development. 
              Each project represents my commitment to leveraging technology for business value and sustainable impact.
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
              <p>Let's work together to bring your Salesforce, AI/ML, or full-stack development ideas to life!</p>
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
    </motion.div>
  )
}

export default Projects
