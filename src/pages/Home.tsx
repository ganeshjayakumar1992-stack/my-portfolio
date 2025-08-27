import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ganesh Jayakumar - Full-Stack Developer</title>
        <meta name="description" content="Full-stack developer passionate about creating innovative solutions and sharing knowledge through code and writing." />
        <meta name="keywords" content="developer, full-stack, react, typescript, portfolio" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm Ganesh Jayakumar
          </h1>
          <p className="hero-subtitle">
            Full-stack developer passionate about creating innovative solutions and sharing knowledge through code and writing.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              I'm a passionate developer who loves turning ideas into reality through code. 
              Every project is an opportunity to learn, grow, and create something meaningful.
            </p>
          </div>
          
          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">💻</div>
              <h3 className="card-title">Full-Stack Development</h3>
              <p className="card-description">
                Building complete web applications from frontend to backend with modern technologies and best practices.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">🔍</div>
              <h3 className="card-title">Problem Solving</h3>
              <p className="card-description">
                Analyzing complex problems and designing efficient, scalable solutions that make a real impact.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">📚</div>
              <h3 className="card-title">Continuous Learning</h3>
              <p className="card-description">
                Always exploring new technologies and sharing knowledge through writing and teaching others.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/about" className="btn-primary">
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Here are some of the projects I've worked on recently. Each one represents a unique challenge and learning experience.
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">E-Commerce</div>
              <div className="project-content">
                <h3 className="project-title">E-Commerce Platform</h3>
                <p className="project-description">
                  A full-stack e-commerce solution built with React, Node.js, and MongoDB.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">Node.js</span>
                  <span className="project-tag">MongoDB</span>
                </div>
                <Link to="/projects" className="project-link">
                  View Project →
                </Link>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">Task App</div>
              <div className="project-content">
                <h3 className="project-title">Task Management App</h3>
                <p className="project-description">
                  A collaborative task management application with real-time updates and team features.
                </p>
                <div className="project-tags">
                  <span className="project-tag">Vue.js</span>
                  <span className="project-tag">Firebase</span>
                  <span className="project-tag">Tailwind</span>
                </div>
                <Link to="/projects" className="project-link">
                  View Project →
                </Link>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">Portfolio</div>
              <div className="project-content">
                <h3 className="project-title">Portfolio Website</h3>
                <p className="project-description">
                  This portfolio website built with React, TypeScript, and modern CSS.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">TypeScript</span>
                  <span className="project-tag">CSS3</span>
                </div>
                <Link to="/projects" className="project-link">
                  View Project →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Let's Work Together</h2>
          <p className="cta-subtitle">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can collaborate and create something amazing together!
          </p>
          <Link to="/contact" className="cta-button-large">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
