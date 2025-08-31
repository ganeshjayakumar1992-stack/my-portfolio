import { FadeInUp } from '../components/animations'
import { ABOUT, SKILLS, EXPERIENCE, ANIMATION_DELAYS } from '../constants/labels'

const About = () => {
  return (
    <div className="section" role="region" aria-label="About section">
      <div className="container">
        <FadeInUp>
          <div className="section-header">
            <h1 className="section-title" id="about-title">{ABOUT.SECTION_TITLE}</h1>
            <p className="section-subtitle">
              Get to know me better - my background, skills, and what drives me as a developer.
            </p>
          </div>
        </FadeInUp>

        {/* Who I Am */}
        <section aria-labelledby="about-title">
          <div className="about-grid" role="grid" aria-label="About information">
            <FadeInUp delay={ANIMATION_DELAYS.CARD_1}>
              <div className="about-card glass-card" role="gridcell">
                <div className="card-icon" aria-hidden="true">👨‍💻</div>
                <h3 className="card-title">{ABOUT.WHO_I_AM.TITLE}</h3>
                <p className="card-description">
                  {ABOUT.WHO_I_AM.DESCRIPTION}
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={ANIMATION_DELAYS.CARD_2}>
              <div className="about-card glass-card" role="gridcell">
                <div className="card-icon" aria-hidden="true">🚀</div>
                <h3 className="card-title">{ABOUT.MISSION.TITLE}</h3>
                <p className="card-description">
                  {ABOUT.MISSION.DESCRIPTION}
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={ANIMATION_DELAYS.CARD_3}>
              <div className="about-card glass-card" role="gridcell">
                <div className="card-icon" aria-hidden="true">🎯</div>
                <h3 className="card-title">{ABOUT.APPROACH.TITLE}</h3>
                <p className="card-description">
                  {ABOUT.APPROACH.DESCRIPTION}
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Skills Section */}
        <section aria-labelledby="skills-title">
          <FadeInUp delay={0.4}>
            <div className="section-header" style={{ marginTop: '5rem' }}>
              <h2 className="section-title" id="skills-title">{SKILLS.SECTION_TITLE}</h2>
              <p className="section-subtitle">
                {SKILLS.SECTION_SUBTITLE}
              </p>
            </div>
          </FadeInUp>

          <div className="about-grid" role="grid" aria-label="Skills information">
            <FadeInUp delay={0.5}>
              <div className="about-card glass-card" role="gridcell">
                <div className="card-icon" aria-hidden="true">☁️</div>
                <h3 className="card-title">{SKILLS.SALESFORCE.TITLE}</h3>
                <p className="card-description">
                  {SKILLS.SALESFORCE.DESCRIPTION}
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.6}>
              <div className="about-card glass-card" role="gridcell">
                <div className="card-icon" aria-hidden="true">⚛️</div>
                <h3 className="card-title">{SKILLS.FRONTEND.TITLE}</h3>
                <p className="card-description">
                  {SKILLS.FRONTEND.DESCRIPTION}
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.7}>
              <div className="about-card glass-card" role="gridcell">
                <div className="card-icon" aria-hidden="true">🔧</div>
                <h3 className="card-title">{SKILLS.BACKEND.TITLE}</h3>
                <p className="card-description">
                  {SKILLS.BACKEND.DESCRIPTION}
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.8}>
              <div className="about-card glass-card" role="gridcell">
                <div className="card-icon" aria-hidden="true">🤖</div>
                <h3 className="card-title">{SKILLS.AI_ML.TITLE}</h3>
                <p className="card-description">
                  {SKILLS.AI_ML.DESCRIPTION}
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.9}>
              <div className="about-card glass-card" role="gridcell">
                <div className="card-icon" aria-hidden="true">🛠️</div>
                <h3 className="card-title">{SKILLS.TOOLS_DEVOPS.TITLE}</h3>
                <p className="card-description">
                  {SKILLS.TOOLS_DEVOPS.DESCRIPTION}
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Experience Section */}
        <section aria-labelledby="experience-title">
          <FadeInUp delay={1.0}>
            <div className="section-header" style={{ marginTop: '5rem' }}>
              <h2 className="section-title" id="experience-title">{EXPERIENCE.SECTION_TITLE}</h2>
              <p className="section-subtitle">
                {EXPERIENCE.SECTION_SUBTITLE}
              </p>
            </div>
          </FadeInUp>

          <div className="about-grid" role="grid" aria-label="Experience information">
            <FadeInUp delay={1.1}>
              <div className="about-card glass-card" role="gridcell">
                <div className="card-icon" aria-hidden="true">💼</div>
                <h3 className="card-title">{EXPERIENCE.PROFESSIONAL.TITLE}</h3>
                <p className="card-description">
                  {EXPERIENCE.PROFESSIONAL.DESCRIPTION}
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={1.2}>
              <div className="about-card glass-card" role="gridcell">
                <div className="card-icon" aria-hidden="true">🎓</div>
                <h3 className="card-title">{EXPERIENCE.LEARNING.TITLE}</h3>
                <p className="card-description">
                  {EXPERIENCE.LEARNING.DESCRIPTION}
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={1.3}>
              <div className="about-card glass-card" role="gridcell">
                <div className="card-icon" aria-hidden="true">🤝</div>
                <h3 className="card-title">{EXPERIENCE.COLLABORATION.TITLE}</h3>
                <p className="card-description">
                  {EXPERIENCE.COLLABORATION.DESCRIPTION}
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Future Goals Section */}
        <section aria-labelledby="goals-title">
          <FadeInUp delay={1.4}>
            <div className="section-header" style={{ marginTop: '5rem' }}>
              <h2 className="section-title" id="goals-title">Future Goals & Vision</h2>
              <p className="section-subtitle">
                My entrepreneurial aspirations and vision for creating sustainable environmental solutions through technology.
              </p>
            </div>
          </FadeInUp>

          <div className="about-grid" role="grid" aria-label="Future goals information">
            <FadeInUp delay={1.3}>
              <div className="about-card glass-card" role="gridcell">
                <div className="card-icon" aria-hidden="true">🚀</div>
                <h3 className="card-title">Entrepreneurial Journey</h3>
                <p className="card-description">
                  I'm actively working towards starting my own consulting company to provide Salesforce, AI/ML, and full-stack development services. Despite balancing family commitments with two kids, I remain committed to building my entrepreneurial future.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={1.4}>
              <div className="about-card glass-card" role="gridcell">
                <div className="card-icon" aria-hidden="true">🌱</div>
                <h3 className="card-title">Environmental Mission</h3>
                <p className="card-description">
                  My long-term vision is to address the most pressing environmental challenges, particularly plastic waste management and poly solid fuel generation from plastics. I believe technology can create sustainable solutions for a better future.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={1.5}>
              <div className="about-card glass-card" role="gridcell">
                <div className="card-icon" aria-hidden="true">🔬</div>
                <h3 className="card-title">AI/ML Innovation</h3>
                <p className="card-description">
                  Currently exploring medical chatbot LLM development for research paper summarization. I'm fine-tuning models with MedQA and MedAlpaca datasets to advance medical research and AI applications in healthcare.
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
