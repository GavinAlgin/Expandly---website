import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/LandingPage/FooterSection'
import ParallaxScroller from '../components/Services'
import ExperienceSection from '../components/LandingPage/ExperienceSection'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <ExperienceSection />

      {/* Hero Section */}
      <section className='min-h-[50vh] bg-black text-white flex flex-col justify-center items-center text-center px-6 py-20'>
        <motion.h1
          className='text-2xl md:text-4xl font-semibold max-w-4xl mb-6'
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          We partner with founders and startups to create compelling digital products and brands. Whether you're just getting started, turning a napkin sketch into reality, or reinventing an existing product for the next stage of growth, we'll work with you to make the future arrive a little sooner.
        </motion.h1>

        <motion.h2
          className='text-lg md:text-xl mt-4'
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Scroll down to explore projects →
        </motion.h2>
      </section>

      {/* Parallax Scroller Section */}
      <section>
        <ParallaxScroller />
      </section>

    <div className="bg-[#080808] text-white">
      {/* Section Divider */}
      <div className="flex items-center py-12">
        <span className="h-px flex-1 bg-gray-600"></span>
        <span className="shrink-0 px-4 text-2xl font-semibold text-white">Product Development</span>
        <span className="h-px flex-1 bg-gray-600"></span>
      </div>

      {/* Product Development Steps */}
      <section className="py-20 px-4 sm:px-8 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">Steps We Take to Develop a Product</h3>
          <div className="text-gray-300 text-left space-y-8 border-t border-gray-700 pt-8">

            <div>
              <h4 className="text-xl font-semibold">1. Discovery & Research</h4>
              <p className="mt-2">We begin with in-depth user research, competitive analysis, and stakeholder interviews to align on vision and goals.</p>
              <hr className="border-gray-700 mt-6" />
            </div>

            <div>
              <h4 className="text-xl font-semibold">2. Strategy & Planning</h4>
              <p className="mt-2">We define product requirements, create user flows, and develop a roadmap for execution.</p>
              <hr className="border-gray-700 mt-6" />
            </div>

            <div>
              <h4 className="text-xl font-semibold">3. Design & Prototyping</h4>
              <p className="mt-2">Our designers create wireframes and high-fidelity UI/UX designs, followed by interactive prototypes.</p>
              <hr className="border-gray-700 mt-6" />
            </div>

            <div>
              <h4 className="text-xl font-semibold">4. Development</h4>
              <p className="mt-2">Our engineering team brings the designs to life using modern frameworks, ensuring scalability and performance.</p>
              <hr className="border-gray-700 mt-6" />
            </div>

            <div>
              <h4 className="text-xl font-semibold">5. QA & Testing</h4>
              <p className="mt-2">We conduct manual and automated testing to ensure stability, security, and a flawless user experience.</p>
              <hr className="border-gray-700 mt-6" />
            </div>

            <div>
              <h4 className="text-xl font-semibold">6. Launch & Support</h4>
              <p className="mt-2">We deploy to production and provide ongoing support, analytics, and iterative improvements post-launch.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="flex items-center py-12">
        <span className="h-px flex-1 bg-gray-600"></span>
        <span className="shrink-0 px-4 text-2xl font-semibold text-white">Our Partners</span>
        <span className="h-px flex-1 bg-gray-600"></span>
      </div>

      {/* Clients Section */}
      <section className="py-20 px-4 sm:px-8 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">People We Worked With</h3>
          <p className="text-lg text-gray-300 mb-12">
            We've collaborated with startups, scale-ups, and enterprises across various industries to deliver transformative digital products.
          </p>

          {/* Partner List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left text-gray-300 border-t border-gray-700 pt-8">

            <div>
              <h4 className="text-xl font-semibold">TechNova</h4>
              <p className="mt-2">Built their MVP mobile app, taking them from concept to over 50,000 downloads in 6 months.</p>
              <hr className="border-gray-700 mt-6" />
            </div>

            <div>
              <h4 className="text-xl font-semibold">GreenPulse</h4>
              <p className="mt-2">Developed a full-stack web platform for energy tracking and IoT device integration.</p>
              <hr className="border-gray-700 mt-6" />
            </div>

            <div>
              <h4 className="text-xl font-semibold">EduLift</h4>
              <p className="mt-2">Created an e-learning experience used by over 200 institutions worldwide.</p>
              <hr className="border-gray-700 mt-6" />
            </div>

            <div>
              <h4 className="text-xl font-semibold">VaultSec</h4>
              <p className="mt-2">Worked on secure authentication systems and blockchain-based document verification.</p>
              <hr className="border-gray-700 mt-6" />
            </div>

            <div>
              <h4 className="text-xl font-semibold">Nomad CRM</h4>
              <p className="mt-2">Helped re-design and scale their SaaS CRM platform for B2B clients.</p>
              <hr className="border-gray-700 mt-6" />
            </div>

            <div>
              <h4 className="text-xl font-semibold">CareSync</h4>
              <p className="mt-2">Built a patient-centered mobile app for appointment tracking and medication reminders.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>

      <Footer />
    </>
  )
}

export default ProjectsPage
