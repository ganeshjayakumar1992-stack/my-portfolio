import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Ganesh Jayakumar</title>
        <meta name="description" content="Get in touch with Ganesh Jayakumar for collaboration or inquiries." />
      </Helmet>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can collaborate!
            </p>
          </div>

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Contact form and contact information coming soon! This will include a contact form and ways to reach me.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
