import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Ganesh Jayakumar</title>
        <meta name="description" content="Learn more about Ganesh Jayakumar, a full-stack developer passionate about creating innovative solutions." />
      </Helmet>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get to know me better and understand my journey in software development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Who I Am
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                I'm a passionate full-stack developer with a love for creating innovative solutions and solving complex problems. 
                My journey in software development started with curiosity and has evolved into a career filled with continuous learning and growth.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge through writing and teaching.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                My Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Frontend</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">React</span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">TypeScript</span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Tailwind CSS</span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Backend</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Node.js</span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Express.js</span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">MongoDB</span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Experience
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Senior Developer</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">Tech Company • 2022 - Present</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Leading development teams and architecting scalable solutions for enterprise clients.
                  </p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Full-Stack Developer</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">Startup • 2020 - 2022</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Built and maintained multiple web applications using modern technologies and best practices.
                  </p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Junior Developer</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">Digital Agency • 2018 - 2020</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Developed responsive websites and learned the fundamentals of web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
