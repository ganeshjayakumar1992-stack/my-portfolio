
import { ContactForm } from '../components/contact/ContactForm'
import { FadeInUp } from '../components/animations'
import { CONTACT, META } from '../constants/labels'

const Contact = () => {
  return (
    <div 
      className="section"
    >
      <div className="container">
        <FadeInUp>
          <div className="section-header">
            <h1 className="section-title">{CONTACT.SECTION_TITLE}</h1>
            <p className="section-subtitle">
              Let's connect! I'm available for Salesforce consulting, AI/ML projects, full-stack development, and entrepreneurial collaborations.
            </p>
          </div>
        </FadeInUp>

        <div className="about-grid">
          <FadeInUp delay={0.1}>
            <div className="about-card glass-card">
              <div className="card-icon">📧</div>
              <h3 className="card-title">Email</h3>
              <p className="card-description">
                The best way to reach me is via email. I typically respond within 24 hours 
                and am happy to discuss any Salesforce, AI/ML, or development opportunities.
              </p>
              <p className="card-description" style={{ marginTop: '1rem', fontWeight: '600' }}>
                {META.CONTACT_EMAIL}
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="about-card glass-card">
              <div className="card-icon">💼</div>
              <h3 className="card-title">LinkedIn</h3>
              <p className="card-description">
                Connect with me on LinkedIn for professional networking, Salesforce insights, 
                and AI/ML industry updates. I'm active in the Salesforce and tech community.
              </p>
              <p className="card-description" style={{ marginTop: '1rem', fontWeight: '600' }}>
                <a href={META.LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="contact-link">
                  linkedin.com/in/ganeshjayakumar1989/
                </a>
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="about-card glass-card">
              <div className="card-icon">🐙</div>
              <h3 className="card-title">GitHub</h3>
              <p className="card-description">
                Check out my open-source contributions, portfolio projects, and AI/ML experiments on GitHub. 
                I'm always exploring new technologies and sharing my learnings.
              </p>
              <p className="card-description" style={{ marginTop: '1rem', fontWeight: '600' }}>
                <a href={META.GITHUB_URL} target="_blank" rel="noopener noreferrer" className="contact-link">
                  github.com/ganeshjayakumar1992-stack
                </a>
              </p>
            </div>
          </FadeInUp>
        </div>

        {/* Contact Form Section */}
        <FadeInUp delay={0.4}>
          <div className="contact-section">
            <ContactForm />
          </div>
        </FadeInUp>

        <div className="about-grid" style={{ marginTop: '3rem' }}>
          <FadeInUp delay={0.5}>
            <div className="about-card glass-card">
              <div className="card-icon">⚡</div>
              <h3 className="card-title">Quick Response</h3>
              <p className="card-description">
                I prioritize responding to all inquiries quickly and thoroughly. Whether it's a 
                Salesforce project, AI/ML consultation, or entrepreneurial discussion, I'm here to help.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.6}>
            <div className="about-card glass-card">
              <div className="card-icon">🤝</div>
              <h3 className="card-title">Collaboration</h3>
              <p className="card-description">
                I'm open to Salesforce consulting opportunities, AI/ML projects, full-stack development, 
                and entrepreneurial partnerships. Let's discuss how we can create innovative solutions together.
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>
    </div>
  )
}

export default Contact
