const About = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">
            Get to know me better - my background, skills, and what drives me as a developer.
          </p>
        </div>

        {/* Who I Am */}
        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">👨‍💻</div>
            <h3 className="card-title">Who I Am</h3>
            <p className="card-description">
              I'm a passionate full-stack developer with a love for creating innovative solutions. 
              I believe in writing clean, maintainable code and solving real-world problems through technology.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🚀</div>
            <h3 className="card-title">My Mission</h3>
            <p className="card-description">
              To build applications that make a difference, learn continuously, and share knowledge 
              with the developer community. Every project is an opportunity to grow and innovate.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🎯</div>
            <h3 className="card-title">My Approach</h3>
            <p className="card-description">
              I focus on user experience, performance, and scalability. I believe the best code 
              is the one that solves problems elegantly and efficiently.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="section-header" style={{ marginTop: '5rem' }}>
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">⚛️</div>
            <h3 className="card-title">Frontend</h3>
            <p className="card-description">
              React, TypeScript, JavaScript, HTML5, CSS3, Responsive Design, Modern CSS (Grid, Flexbox)
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🔧</div>
            <h3 className="card-title">Backend</h3>
            <p className="card-description">
              Node.js, Express.js, REST APIs, Database Design, Authentication, Serverless Functions
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🛠️</div>
            <h3 className="card-title">Tools & DevOps</h3>
            <p className="card-description">
              Git, GitHub, Vercel, Vite, npm, VS Code, Terminal, CI/CD, Performance Optimization
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="section-header" style={{ marginTop: '5rem' }}>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My journey in software development and the projects that shaped my skills.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">💼</div>
            <h3 className="card-title">Professional Experience</h3>
            <p className="card-description">
              I've worked on various projects ranging from small business websites to complex 
              enterprise applications, always focusing on delivering value and quality.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🎓</div>
            <h3 className="card-title">Continuous Learning</h3>
            <p className="card-description">
              I'm constantly learning new technologies and best practices to stay current 
              with the ever-evolving world of web development.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🤝</div>
            <h3 className="card-title">Collaboration</h3>
            <p className="card-description">
              I believe in the power of teamwork and knowledge sharing. I enjoy collaborating 
              with other developers and contributing to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
