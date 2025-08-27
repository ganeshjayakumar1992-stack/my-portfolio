const Blog = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Blog</h1>
          <p className="section-subtitle">
            Thoughts, tutorials, and insights about web development, technology, and my journey as a developer.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">📝</div>
            <h3 className="card-title">Coming Soon!</h3>
            <p className="card-description">
              I'm working on some great content about React 19, modern CSS techniques, and full-stack development. 
              Check back soon for the first post!
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🚀</div>
            <h3 className="card-title">What to Expect</h3>
            <p className="card-description">
              Tutorials, best practices, project walkthroughs, and insights from my development experience. 
              All written with beginners in mind.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">💡</div>
            <h3 className="card-title">Topics</h3>
            <p className="card-description">
              React development, TypeScript tips, CSS techniques, backend development, deployment strategies, 
              and lessons learned from real projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
