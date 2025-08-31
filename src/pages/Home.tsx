import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { FadeInUp } from '../components/animations'
import { HERO, ABOUT, PROJECTS, CTA, ANIMATION_DELAYS } from '../constants/labels'
import SEOHead from '../components/seo/SEOHead'

const Home = () => {
  return (
    <>
      <SEOHead 
        title="Home"
        description="Full Stack Developer specializing in React, TypeScript, and modern web technologies. View my portfolio, projects, and get in touch for collaboration."
        keywords={['React Developer', 'TypeScript Developer', 'Full Stack Developer', 'Web Development']}
        type="website"
      />
      
      {/* Hero Section - Enhanced with Better UX */}
      <section className="hero">
        <div className="hero-content">
          {/* Advanced AI & Medical Animations */}
          <div className="hero-advanced-animations">
            {/* AI Brain Network */}
            <motion.div
              className="ai-brain-network"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="neural-node" />
              <div className="neural-node" />
              <div className="neural-node" />
              <div className="neural-connection" />
            </motion.div>

            {/* Medical Cross */}
            <motion.div
              className="medical-cross"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Code Particles */}
            <motion.div
              className="code-particles"
              animate={{ 
                y: [0, -100],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <span className="code-particle">01</span>
              <span className="code-particle">AI</span>
              <span className="code-particle">ML</span>
            </motion.div>

            {/* Salesforce Lightning */}
            <motion.div
              className="salesforce-lightning"
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />

            {/* Floating Data Points */}
            <motion.div
              className="data-points"
              animate={{ 
                y: [0, -30, 0],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <div className="data-point" />
              <div className="data-point" />
              <div className="data-point" />
            </motion.div>

            {/* New: Floating Tech Icons */}
            <motion.div
              className="tech-icons"
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="tech-icon">⚡</div>
              <div className="tech-icon">🔬</div>
              <div className="tech-icon">💻</div>
            </motion.div>

            {/* New: Pulsing Circles */}
            <motion.div
              className="pulsing-circles"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="pulse-circle" />
              <div className="pulse-circle" />
              <div className="pulse-circle" />
            </motion.div>

            {/* New: Floating Bubbles */}
            <motion.div
              className="floating-bubbles"
              animate={{ 
                y: [0, -50, 0],
                x: [0, 20, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              <div className="bubble" />
              <div className="bubble" />
              <div className="bubble" />
            </motion.div>

            {/* New: DNA Helix */}
            <motion.div
              className="dna-helix"
              animate={{ 
                y: [0, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="dna-strand" />
              <div className="dna-strand" />
              <div className="dna-connection" />
            </motion.div>

            {/* New: Circuit Board */}
            <motion.div
              className="circuit-board"
              animate={{ 
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5
              }}
            >
              <div className="circuit-line" />
              <div className="circuit-line" />
              <div className="circuit-node" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-badge"
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>{HERO.BADGE_TEXT}</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.span
              className="title-word"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {HERO.TITLE}
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            {HERO.SUBTITLE}
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/projects" className="btn-primary">
                {HERO.PRIMARY_BUTTON}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="btn-secondary">
                {HERO.SECONDARY_BUTTON}
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div
              className="scroll-arrow"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* About Section - Modern Layout */}
      <section className="section">
        <div className="container-narrow">
          <FadeInUp>
            <div className="section-header">
              <h2 className="section-title">{ABOUT.SECTION_TITLE}</h2>
              <p className="section-subtitle">
                {ABOUT.SECTION_SUBTITLE}
              </p>
            </div>
          </FadeInUp>
        </div>
        
        <div className="about-grid">
          <FadeInUp delay={ANIMATION_DELAYS.CARD_1}>
            <div className="about-card">
              <div className="card-icon">💻</div>
              <h3 className="card-title">{ABOUT.WHO_I_AM.TITLE}</h3>
              <p className="card-description">
                {ABOUT.WHO_I_AM.DESCRIPTION}
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={ANIMATION_DELAYS.CARD_2}>
            <div className="about-card">
              <div className="card-icon">🔍</div>
              <h3 className="card-title">{ABOUT.MISSION.TITLE}</h3>
              <p className="card-description">
                {ABOUT.MISSION.DESCRIPTION}
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={ANIMATION_DELAYS.CARD_3}>
            <div className="about-card">
              <div className="card-icon">📚</div>
              <h3 className="card-title">{ABOUT.APPROACH.TITLE}</h3>
              <p className="card-description">
                {ABOUT.APPROACH.DESCRIPTION}
              </p>
            </div>
          </FadeInUp>
        </div>

        <div className="container-narrow">
          <FadeInUp delay={0.4}>
            <div className="text-center mt-12">
              <Link to="/about" className="btn-primary">
                {ABOUT.LEARN_MORE_BUTTON}
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Projects Section - Modern Compact */}
      <section className="section-compact" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-narrow">
          <FadeInUp>
            <div className="section-header">
              <h2 className="section-title">{PROJECTS.SECTION_TITLE}</h2>
              <p className="section-subtitle">
                {PROJECTS.SECTION_SUBTITLE}
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <div className="text-center mt-8">
              <Link to="/projects" className="btn-primary btn-large">
                {PROJECTS.VIEW_ALL_BUTTON}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA Section - Modern */}
      <section className="cta-section">
        <div className="container-narrow">
          <FadeInUp delay={ANIMATION_DELAYS.CTA_SECTION}>
            <h2 className="cta-title">{CTA.TITLE}</h2>
            <p className="cta-subtitle">
              {CTA.SUBTITLE}
            </p>
            <Link to="/contact" className="cta-button-large">
              {CTA.BUTTON_TEXT}
            </Link>
          </FadeInUp>
        </div>
      </section>
    </>
  )
}

export default Home
