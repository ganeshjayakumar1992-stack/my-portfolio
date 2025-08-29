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
                <div className="card-icon" aria-hidden="true">⚛️</div>
                <h3 className="card-title">{SKILLS.FRONTEND.TITLE}</h3>
                <p className="card-description">
                  {SKILLS.FRONTEND.DESCRIPTION}
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.6}>
              <div className="about-card glass-card" role="gridcell">
                <div className="card-icon" aria-hidden="true">🔧</div>
                <h3 className="card-title">{SKILLS.BACKEND.TITLE}</h3>
                <p className="card-description">
                  {SKILLS.BACKEND.DESCRIPTION}
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.7}>
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
          <FadeInUp delay={0.8}>
            <div className="section-header" style={{ marginTop: '5rem' }}>
              <h2 className="section-title" id="experience-title">{EXPERIENCE.SECTION_TITLE}</h2>
              <p className="section-subtitle">
                {EXPERIENCE.SECTION_SUBTITLE}
              </p>
            </div>
          </FadeInUp>

          <div className="about-grid" role="grid" aria-label="Experience information">
            <FadeInUp delay={0.9}>
              <div className="about-card glass-card" role="gridcell">
                <div className="card-icon" aria-hidden="true">💼</div>
                <h3 className="card-title">{EXPERIENCE.PROFESSIONAL.TITLE}</h3>
                <p className="card-description">
                  {EXPERIENCE.PROFESSIONAL.DESCRIPTION}
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={1.0}>
              <div className="about-card glass-card" role="gridcell">
                <div className="card-icon" aria-hidden="true">🎓</div>
                <h3 className="card-title">{EXPERIENCE.LEARNING.TITLE}</h3>
                <p className="card-description">
                  {EXPERIENCE.LEARNING.DESCRIPTION}
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={1.1}>
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
      </div>
    </div>
  )
}

export default About
