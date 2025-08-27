import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ganesh Jayakumar - Full-Stack Developer</title>
        <meta name="description" content="Full-stack developer passionate about creating innovative solutions and sharing knowledge through code and writing." />
        <meta name="keywords" content="developer, full-stack, react, typescript, portfolio" />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">Ganesh Jayakumar</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Full-stack developer passionate about creating innovative solutions and sharing knowledge through code and writing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="btn-primary text-center">
                  View My Work
                </Link>
                <Link to="/contact" className="btn-secondary text-center">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 to-blue-500 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-8xl font-bold text-primary-600">G</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a passionate developer who loves turning ideas into reality through code.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Full-Stack Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building complete web applications from frontend to backend with modern technologies.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Problem Solving
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Analyzing complex problems and designing efficient, scalable solutions.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Always exploring new technologies and sharing knowledge through writing and teaching.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/about" className="btn-primary">
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of the projects I've worked on recently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="card group hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 bg-gradient-to-br from-primary-400 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Project 1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                E-Commerce Platform
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A full-stack e-commerce solution built with React, Node.js, and MongoDB.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                  MongoDB
                </span>
              </div>
              <Link to="/projects" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium">
                View Project →
              </Link>
            </div>

            {/* Project Card 2 */}
            <div className="card group hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Project 2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Task Management App
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A collaborative task management application with real-time updates.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-sm rounded-full">
                  Vue.js
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-sm rounded-full">
                  Firebase
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-sm rounded-full">
                  Tailwind
                </span>
              </div>
              <Link to="/projects" className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium">
                View Project →
              </Link>
            </div>

            {/* Project Card 3 */}
            <div className="card group hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Project 3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Portfolio Website
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                This portfolio website built with React, TypeScript, and Tailwind CSS.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                  Tailwind
                </span>
              </div>
              <Link to="/projects" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
                View Project →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can collaborate!
          </p>
          <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
