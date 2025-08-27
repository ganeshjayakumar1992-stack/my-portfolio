const Contact = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Contact Me</h1>
          <p className="section-subtitle">
            Let's connect! I'm always interested in new opportunities, collaborations, and interesting projects.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">📧</div>
            <h3 className="card-title">Email</h3>
            <p className="card-description">
              The best way to reach me is via email. I typically respond within 24 hours 
              and am happy to discuss any opportunities or questions you might have.
            </p>
            <p className="card-description" style={{ marginTop: '1rem', fontWeight: '600' }}>
              ganeshjayakumar1992@gmail.com
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">💼</div>
            <h3 className="card-title">LinkedIn</h3>
            <p className="card-description">
              Connect with me on LinkedIn for professional networking, project updates, 
              and industry insights. I'm active in the developer community there.
            </p>
            <p className="card-description" style={{ marginTop: '1rem', fontWeight: '600' }}>
              linkedin.com/in/ganeshjayakumar
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🐙</div>
            <h3 className="card-title">GitHub</h3>
            <p className="card-description">
              Check out my open-source contributions and personal projects on GitHub. 
              I'm always looking for interesting projects to contribute to.
            </p>
            <p className="card-description" style={{ marginTop: '1rem', fontWeight: '600' }}>
              github.com/ganeshjayakumar1992-stack
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="section-header" style={{ marginTop: '5rem' }}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Contact form functionality is coming in Phase 2. For now, please use the contact methods above.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">📝</div>
            <h3 className="card-title">Contact Form</h3>
            <p className="card-description">
              A full-featured contact form with validation, spam protection, and email integration 
              will be implemented in the next phase of development.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">⚡</div>
            <h3 className="card-title">Quick Response</h3>
            <p className="card-description">
              I prioritize responding to all inquiries quickly and thoroughly. Whether it's a 
              project discussion or just a question, I'm here to help.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🤝</div>
            <h3 className="card-title">Collaboration</h3>
            <p className="card-description">
              I'm open to freelance opportunities, full-time positions, and collaborative projects. 
              Let's discuss how we can work together to create something amazing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
