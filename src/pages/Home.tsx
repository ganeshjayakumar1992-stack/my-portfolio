import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react'
import { FadeInUp } from '../components/animations'
import { HERO, ABOUT, PROJECTS, CTA, ANIMATION_DELAYS } from '../constants/labels'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge"
          >
            <Sparkles className="w-4 h-4" />
            <span>{HERO.BADGE_TEXT}</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: ANIMATION_DELAYS.HERO_TITLE }}
          >
            {HERO.TITLE}
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: ANIMATION_DELAYS.HERO_SUBTITLE }}
          >
            {HERO.SUBTITLE}
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: ANIMATION_DELAYS.HERO_BUTTONS }}
          >
            <Link to="/projects" className="btn-primary">
              {HERO.PRIMARY_BUTTON}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              {HERO.SECONDARY_BUTTON}
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: ANIMATION_DELAYS.HERO_VISUAL }}
        >
          <div className="floating-elements">
            <motion.div 
              className="floating-element"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code className="w-8 h-8" />
            </motion.div>
            <motion.div 
              className="floating-element"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Zap className="w-8 h-8" />
            </motion.div>
            <motion.div 
              className="floating-element"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <FadeInUp>
            <div className="section-header">
              <h2 className="section-title">{ABOUT.SECTION_TITLE}</h2>
              <p className="section-subtitle">
                {ABOUT.SECTION_SUBTITLE}
              </p>
            </div>
          </FadeInUp>
          
          <div className="about-grid">
            <FadeInUp delay={ANIMATION_DELAYS.CARD_1}>
              <div className="about-card glass-card">
                <div className="card-icon">💻</div>
                <h3 className="card-title">{ABOUT.WHO_I_AM.TITLE}</h3>
                <p className="card-description">
                  {ABOUT.WHO_I_AM.DESCRIPTION}
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={ANIMATION_DELAYS.CARD_2}>
              <div className="about-card glass-card">
                <div className="card-icon">🔍</div>
                <h3 className="card-title">{ABOUT.MISSION.TITLE}</h3>
                <p className="card-description">
                  {ABOUT.MISSION.DESCRIPTION}
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={ANIMATION_DELAYS.CARD_3}>
              <div className="about-card glass-card">
                <div className="card-icon">📚</div>
                <h3 className="card-title">{ABOUT.APPROACH.TITLE}</h3>
                <p className="card-description">
                  {ABOUT.APPROACH.DESCRIPTION}
                </p>
              </div>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.4}>
            <div className="text-center mt-12">
              <Link to="/about" className="btn-primary">
                {ABOUT.LEARN_MORE_BUTTON}
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <FadeInUp>
            <div className="section-header">
              <h2 className="section-title">{PROJECTS.SECTION_TITLE}</h2>
              <p className="section-subtitle">
                {PROJECTS.SECTION_SUBTITLE}
              </p>
            </div>
          </FadeInUp>

          <div className="projects-grid">
            <FadeInUp delay={ANIMATION_DELAYS.CARD_1}>
              <div className="project-card glass-card">
                <div className="project-image">E-Commerce</div>
                <div className="project-content">
                  <h3 className="project-title">{PROJECTS.ECOMMERCE.TITLE}</h3>
                  <p className="project-description">
                    {PROJECTS.ECOMMERCE.DESCRIPTION}
                  </p>
                  <div className="project-tags">
                    {PROJECTS.ECOMMERCE.TAGS.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to="/projects" className="project-link">
                    {PROJECTS.ECOMMERCE.LINK_TEXT}
                  </Link>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={ANIMATION_DELAYS.CARD_2}>
              <div className="project-card glass-card">
                <div className="project-image">Task App</div>
                <div className="project-content">
                  <h3 className="project-title">{PROJECTS.TASK_APP.TITLE}</h3>
                  <p className="project-description">
                    {PROJECTS.TASK_APP.DESCRIPTION}
                  </p>
                  <div className="project-tags">
                    {PROJECTS.TASK_APP.TAGS.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to="/projects" className="project-link">
                    {PROJECTS.TASK_APP.LINK_TEXT}
                  </Link>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={ANIMATION_DELAYS.CARD_3}>
              <div className="project-card glass-card">
                <div className="project-image">Portfolio</div>
                <div className="project-content">
                  <h3 className="project-title">{PROJECTS.PORTFOLIO.TITLE}</h3>
                  <p className="project-description">
                    {PROJECTS.PORTFOLIO.DESCRIPTION}
                  </p>
                  <div className="project-tags">
                    {PROJECTS.PORTFOLIO.TAGS.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to="/projects" className="project-link">
                    {PROJECTS.PORTFOLIO.LINK_TEXT}
                  </Link>
                </div>
              </div>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.4}>
            <div className="text-center mt-12">
              <Link to="/projects" className="btn-primary">
                {PROJECTS.VIEW_ALL_BUTTON}
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
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
