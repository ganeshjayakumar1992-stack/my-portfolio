import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Grid, List, X } from 'lucide-react'
import { InteractiveProjectCard } from './InteractiveProjectCard'

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

interface ProjectGalleryProps {
  projects: Project[]
  onProjectClick?: (project: Project) => void
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  projects,
  onProjectClick
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'featured'>('featured')

  // Get unique categories from projects
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(projects.map(project => project.category))]
    return ['all', ...uniqueCategories]
  }, [projects])

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    const filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })

    // Sort projects
    switch (sortBy) {
      case 'date':
        filtered.sort((a, b) => new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime())
        break
      case 'name':
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'featured':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
    }

    return filtered
  }, [projects, searchTerm, selectedCategory, sortBy])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setSortBy('featured')
  }

  const hasActiveFilters = searchTerm || selectedCategory !== 'all' || sortBy !== 'featured'

  return (
    <div className="project-gallery">
      {/* Gallery Header */}
      <motion.div 
        className="gallery-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="gallery-title">
          <h2>Featured Projects</h2>
          <p>Explore my latest work and technical achievements</p>
        </div>

        {/* Search and Filters */}
        <div className="gallery-controls">
          {/* Search Bar */}
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="clear-search"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="filter-container">
            <Filter className="filter-icon" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Options */}
          <div className="sort-container">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'name' | 'featured')}
              className="sort-select"
            >
              <option value="featured">Featured First</option>
              <option value="date">Newest First</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="view-toggle">
            <button
              onClick={() => setViewMode('grid')}
              className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
              aria-label="Grid view"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <motion.div
            className="active-filters"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="filters-label">Active filters:</span>
            {searchTerm && (
              <span className="filter-tag">
                Search: "{searchTerm}"
                <button onClick={() => setSearchTerm('')} className="remove-filter">×</button>
              </span>
            )}
            {selectedCategory !== 'all' && (
              <span className="filter-tag">
                Category: {selectedCategory}
                <button onClick={() => setSelectedCategory('all')} className="remove-filter">×</button>
              </span>
            )}
            {sortBy !== 'featured' && (
              <span className="filter-tag">
                Sort: {sortBy === 'date' ? 'Newest First' : 'Alphabetical'}
                <button onClick={() => setSortBy('featured')} className="remove-filter">×</button>
              </span>
            )}
            <button onClick={clearFilters} className="clear-all-filters">
              Clear All
            </button>
          </motion.div>
        )}
      </motion.div>

      {/* Results Count */}
      <motion.div 
        className="results-count"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span>
          Showing {filteredProjects.length} of {projects.length} projects
        </span>
      </motion.div>

      {/* Projects Grid/List */}
      <div className={`projects-container ${viewMode}`}>
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={`${viewMode}-${searchTerm}-${selectedCategory}-${sortBy}`}
              className={`projects-${viewMode}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <InteractiveProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onProjectClick={onProjectClick}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="no-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="no-results-content">
                <Search className="no-results-icon" />
                <h3>No projects found</h3>
                <p>
                  {searchTerm 
                    ? `No projects match "${searchTerm}"`
                    : `No projects in the "${selectedCategory}" category`
                  }
                </p>
                <button onClick={clearFilters} className="reset-filters">
                  Reset Filters
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
