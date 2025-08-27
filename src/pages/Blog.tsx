import { Helmet } from 'react-helmet-async'

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Ganesh Jayakumar</title>
        <meta name="description" content="Read my thoughts on development, technology, and industry insights." />
      </Helmet>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Sharing insights, tutorials, and thoughts on software development and technology.
            </p>
          </div>

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Blog posts coming soon! I'll be sharing development insights and tutorials here.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
