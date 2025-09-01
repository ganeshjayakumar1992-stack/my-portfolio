import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, Calendar, Tag } from 'lucide-react'

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

interface InteractiveProjectCardProps {
  project: Project
  index: number
  onProjectClick?: (project: Project) => void
}

export const InteractiveProjectCard: React.FC<InteractiveProjectCardProps> = ({
  project,
  index,
  onProjectClick
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleCardClick = () => {
    if (onProjectClick) {
      onProjectClick(project)
    } else {
      setIsExpanded(!isExpanded)
    }
  }

  const handleLiveClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <motion.div
      className="interactive-project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleCardClick}
      whileHover={{ y: -8 }}
      layout
    >
      {/* Project Image Container */}
      <div className="project-image-container">
        <motion.img
          src={project.image}
          alt={project.title}
          className="project-image"
          layoutId={`project-image-${project.id}`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="project-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="overlay-content">
                <motion.button
                  className="overlay-button primary"
                  onClick={handleLiveClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!project.liveUrl}
                >
                  <Eye className="w-4 h-4" />
                  {project.liveUrl ? 'View Live' : 'Coming Soon'}
                </motion.button>
                
                {project.githubUrl && (
                  <motion.button
                    className="overlay-button secondary"
                    onClick={handleGithubClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            className="featured-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <span>⭐ Featured</span>
          </motion.div>
        )}
      </div>

      {/* Project Content */}
      <div className="project-content">
        <motion.h3 
          className="project-title"
          layoutId={`project-title-${project.id}`}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="project-description"
          layoutId={`project-description-${project.id}`}
        >
          {project.description}
        </motion.p>

        {/* Project Meta */}
        <div className="project-meta">
          <div className="meta-item">
            <Calendar className="w-4 h-4" />
            <span>{project.completionDate}</span>
          </div>
          <div className="meta-item">
            <Tag className="w-4 h-4" />
            <span>{project.category}</span>
          </div>
        </div>

        {/* Technologies */}
        <div className="technologies-container">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="technology-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + techIndex * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 4 && (
            <span className="technology-more">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="project-actions">
          {project.liveUrl && (
            <motion.button
              className="action-button primary"
              onClick={handleLiveClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              View Live
            </motion.button>
          )}
          
          {project.githubUrl && (
            <motion.button
              className="action-button secondary"
              onClick={handleGithubClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              View Code
            </motion.button>
          )}
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="expanded-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="expanded-details">
              <h4>Project Details</h4>
              <p>Additional details about {project.title} will be displayed here...</p>
              {/* Add more detailed content as needed */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
