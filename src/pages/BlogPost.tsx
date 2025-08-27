import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

const BlogPost = () => {
  const { slug } = useParams()

  return (
    <>
      <Helmet>
        <title>Blog Post - Ganesh Jayakumar</title>
        <meta name="description" content="Read this blog post about development and technology." />
      </Helmet>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Blog Post
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Individual blog post page for: {slug}
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Individual blog post functionality coming soon! This will display full blog posts with MDX support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPost
