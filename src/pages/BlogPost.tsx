import { useParams } from 'react-router-dom'

const BlogPost = () => {
  const { slug } = useParams()

  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Blog Post</h1>
          <p className="section-subtitle">
            Individual blog post functionality coming soon!
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">📄</div>
            <h3 className="card-title">Post: {slug}</h3>
            <p className="card-description">
              This is where individual blog posts will be displayed. The MDX integration and blog 
              functionality is planned for Phase 2 of the portfolio.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🔧</div>
            <h3 className="card-title">Features Coming</h3>
            <p className="card-description">
              Rich text formatting, code syntax highlighting, interactive examples, and a complete 
              blog management system.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">📚</div>
            <h3 className="card-title">Stay Tuned</h3>
            <p className="card-description">
              I'm working on implementing the full blog functionality. In the meantime, check out 
              the main blog page for updates on what's coming.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
