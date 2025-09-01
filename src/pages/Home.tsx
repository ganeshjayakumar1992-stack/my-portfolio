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
      
      {/* Hero Section - Clean and Simple */}
      <section className="hero">
        <div className="hero-content">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hero-badge"
            whileHover={{ scale: 1.02 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>{HERO.BADGE_TEXT}</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {HERO.TITLE}
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {HERO.SUBTITLE}
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/projects" className="btn-primary">
                {HERO.PRIMARY_BUTTON}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <motion.div
              className="scroll-arrow"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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
