const Projects = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle">
            Here's a showcase of the projects I've worked on. Each one represents a unique challenge 
            and learning experience in my development journey.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">🚧</div>
            <h3 className="card-title">Projects Coming Soon!</h3>
            <p className="card-description">
              I'm currently working on updating this section with detailed project showcases, 
              including live demos, code repositories, and technical details.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">💻</div>
            <h3 className="card-title">What to Expect</h3>
            <p className="card-description">
              Full project descriptions, technology stacks, challenges faced, solutions implemented, 
              and lessons learned from each project.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🔗</div>
            <h3 className="card-title">Live Demos</h3>
            <p className="card-description">
              Interactive project demos, GitHub repositories, and detailed case studies 
              showing the development process and final results.
            </p>
          </div>
        </div>

        {/* Featured Projects Preview */}
        <div className="section-header" style={{ marginTop: '5rem' }}>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A preview of some projects that will be featured here.
          </p>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">E-Commerce</div>
            <div className="project-content">
              <h3 className="project-title">E-Commerce Platform</h3>
              <p className="project-description">
                A full-stack e-commerce solution with user authentication, product management, 
                shopping cart, and payment integration.
              </p>
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">Node.js</span>
                <span className="project-tag">MongoDB</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">Task App</div>
            <div className="project-content">
              <h3 className="project-title">Task Management App</h3>
              <p className="project-description">
                A collaborative task management application with real-time updates, team features, 
                and project organization tools.
              </p>
              <div className="project-tags">
                <span className="project-tag">Vue.js</span>
                <span className="project-tag">Firebase</span>
                <span className="project-tag">Real-time</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">Portfolio</div>
            <div className="project-content">
              <h3 className="project-title">Portfolio Website</h3>
              <p className="project-description">
                This portfolio website built with React 19, TypeScript, and modern CSS. 
                Features responsive design and modern animations.
              </p>
              <div className="project-tags">
                <span className="project-tag">React 19</span>
                <span className="project-tag">TypeScript</span>
                <span className="project-tag">CSS3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
