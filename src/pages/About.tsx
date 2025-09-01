
import { ABOUT, SKILLS, EXPERIENCE } from '../constants/labels'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
      className="section" 
      role="region" 
      aria-label="About section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ backgroundColor: 'white', color: '#1E293B' }}
    >
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h1 className="section-title" id="about-title" style={{ color: '#1E293B' }}>{ABOUT.SECTION_TITLE}</h1>
          <p className="section-subtitle" style={{ color: '#475569' }}>
            Get to know me better - my background, skills, and what drives me as a developer.
          </p>
        </motion.div>

        {/* Who I Am */}
        <motion.section 
          aria-labelledby="about-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="about-grid" role="grid" aria-label="About information">
            <motion.div 
              className="about-card glass-card" 
              role="gridcell"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="card-icon" aria-hidden="true">👨‍💻</div>
              <h3 className="card-title">{ABOUT.WHO_I_AM.TITLE}</h3>
              <p className="card-description">
                {ABOUT.WHO_I_AM.DESCRIPTION}
              </p>
            </motion.div>

            <motion.div 
              className="about-card glass-card" 
              role="gridcell"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="card-icon" aria-hidden="true">🚀</div>
              <h3 className="card-title">{ABOUT.MISSION.TITLE}</h3>
              <p className="card-description">
                {ABOUT.MISSION.DESCRIPTION}
              </p>
            </motion.div>

            <motion.div 
              className="about-card glass-card" 
              role="gridcell"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <div className="card-icon" aria-hidden="true">🎯</div>
              <h3 className="card-title">{ABOUT.APPROACH.TITLE}</h3>
              <p className="card-description">
                {ABOUT.APPROACH.DESCRIPTION}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          aria-labelledby="skills-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <motion.div 
            className="section-header" 
            style={{ marginTop: '5rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <h2 className="section-title" id="skills-title" style={{ color: '#1E293B' }}>{SKILLS.SECTION_TITLE}</h2>
            <p className="section-subtitle" style={{ color: '#475569' }}>
              {SKILLS.SECTION_SUBTITLE}
            </p>
          </motion.div>

          <div className="about-grid" role="grid" aria-label="Skills information">
            {[
              { icon: '☁️', title: SKILLS.SALESFORCE.TITLE, description: SKILLS.SALESFORCE.DESCRIPTION },
              { icon: '⚛️', title: SKILLS.FRONTEND.TITLE, description: SKILLS.FRONTEND.DESCRIPTION },
              { icon: '🔧', title: SKILLS.BACKEND.TITLE, description: SKILLS.BACKEND.DESCRIPTION },
              { icon: '🤖', title: SKILLS.AI_ML.TITLE, description: SKILLS.AI_ML.DESCRIPTION },
              { icon: '🛠️', title: SKILLS.TOOLS_DEVOPS.TITLE, description: SKILLS.TOOLS_DEVOPS.DESCRIPTION }
            ].map((skill, index) => (
              <motion.div 
                key={skill.title}
                className="about-card glass-card" 
                role="gridcell"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <div className="card-icon" aria-hidden="true">{skill.icon}</div>
                <h3 className="card-title">{skill.title}</h3>
                <p className="card-description">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          aria-labelledby="experience-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.2 }}
        >
          <motion.div 
            className="section-header" 
            style={{ marginTop: '5rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.3 }}
          >
            <h2 className="section-title" id="experience-title" style={{ color: '#1E293B' }}>{EXPERIENCE.SECTION_TITLE}</h2>
            <p className="section-subtitle" style={{ color: '#475569' }}>
              {EXPERIENCE.SECTION_SUBTITLE}
            </p>
          </motion.div>

          <div className="about-grid" role="grid" aria-label="Experience information">
            {[
              { icon: '💼', title: EXPERIENCE.PROFESSIONAL.TITLE, description: EXPERIENCE.PROFESSIONAL.DESCRIPTION },
              { icon: '🎓', title: EXPERIENCE.LEARNING.TITLE, description: EXPERIENCE.LEARNING.DESCRIPTION },
              { icon: '🤝', title: EXPERIENCE.COLLABORATION.TITLE, description: EXPERIENCE.COLLABORATION.DESCRIPTION }
            ].map((exp, index) => (
              <motion.div 
                key={exp.title}
                className="about-card glass-card" 
                role="gridcell"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
              >
                <div className="card-icon" aria-hidden="true">{exp.icon}</div>
                <h3 className="card-title">{exp.title}</h3>
                <p className="card-description">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Future Goals Section */}
        <motion.section 
          aria-labelledby="goals-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.6 }}
        >
          <motion.div 
            className="section-header" 
            style={{ marginTop: '5rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.7 }}
          >
            <h2 className="section-title" id="goals-title" style={{ color: '#1E293B' }}>Future Goals & Vision</h2>
            <p className="section-subtitle" style={{ color: '#475569' }}>
              My entrepreneurial aspirations and vision for creating sustainable environmental solutions through technology.
            </p>
          </motion.div>

          <div className="about-grid" role="grid" aria-label="Future goals information">
            {[
              {
                icon: '🚀',
                title: 'Entrepreneurial Journey',
                description: 'I\'m actively working towards starting my own consulting company to provide Salesforce, AI/ML, and full-stack development services. Despite balancing family commitments with two kids, I remain committed to building my entrepreneurial future.'
              },
              {
                icon: '🌱',
                title: 'Environmental Mission',
                description: 'My long-term vision is to address the most pressing environmental challenges, particularly plastic waste management and poly solid fuel generation from plastics. I believe technology can create sustainable solutions for a better future.'
              },
              {
                icon: '🔬',
                title: 'AI/ML Innovation',
                description: 'Currently exploring medical chatbot LLM development for research paper summarization. I\'m fine-tuning models with MedQA and MedAlpaca datasets to advance medical research and AI applications in healthcare.'
              }
            ].map((goal, index) => (
              <motion.div 
                key={goal.title}
                className="about-card glass-card" 
                role="gridcell"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
              >
                <div className="card-icon" aria-hidden="true">{goal.icon}</div>
                <h3 className="card-title">{goal.title}</h3>
                <p className="card-description">
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}

export default About
