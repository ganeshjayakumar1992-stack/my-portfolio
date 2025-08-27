import { Helmet } from 'react-helmet-async'

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Ganesh Jayakumar</title>
        <meta name="description" content="View my portfolio of projects and work samples." />
      </Helmet>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
            </p>
          </div>

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Projects page coming soon! This will showcase my work portfolio.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
