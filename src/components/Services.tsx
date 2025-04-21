import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  // Floating animation for h2 titles
  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  // Unique animations for <p> tags
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <div className="min-h-screen flex flex-col justify-between px-4 py-8">
      {/* Header */}
      <h1 className="text-center font-bold text-5xl">In-depth services</h1>

      {/* Grid Content */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 mt-16">
        {/* Design */}
        <div>
          <motion.h2
            className="text-center font-semibold text-4xl mt-3"
            {...floatAnimation}
          >
            Design
          </motion.h2>
          <motion.p
            className="text-medium cursor-pointer hover:text-lime-300 text-2xl text-center mt-8"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            UI/UX Consulting & Design
          </motion.p>
          <motion.p
            className="text-medium cursor-pointer hover:text-lime-300 text-2xl text-center mt-8"
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Visual Identity Design
          </motion.p>
          <motion.p
            className="text-medium cursor-pointer hover:text-lime-300 text-2xl text-center mt-8"
            variants={scaleUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Redesign & Final Consultion
          </motion.p>
        </div>

        {/* Development */}
        <div className="lg:border-l border-gray-300 lg:pl-6">
          <motion.h2
            className="text-center font-semibold text-4xl mt-3"
            {...floatAnimation}
          >
            Development
          </motion.h2>
          <motion.p
            className="text-medium cursor-pointer hover:text-lime-300 text-2xl text-center mt-8"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            Dev Implementation
          </motion.p>
          <motion.p
            className="text-medium cursor-pointer hover:text-lime-300 text-2xl text-center mt-8"
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Design System Refinery
          </motion.p>
          <motion.p
            className="text-medium cursor-pointer hover:text-lime-300 text-2xl text-center mt-8"
            variants={scaleUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Coding
          </motion.p>
        </div>

        {/* Scale */}
        <div className="lg:border-l border-gray-300 lg:pl-6">
          <motion.h2
            className="text-center font-semibold text-4xl mt-3"
            {...floatAnimation}
          >
            Scale
          </motion.h2>
          <motion.p
            className="text-medium cursor-pointer hover:text-lime-300 text-2xl text-center mt-8"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            DevOps
          </motion.p>
          <motion.p
            className="text-medium cursor-pointer hover:text-lime-300 text-2xl text-center mt-8"
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Visual Identity Design
          </motion.p>
          <motion.p
            className="text-medium cursor-pointer hover:text-lime-300 text-2xl text-center mt-8"
            variants={scaleUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Redesign
          </motion.p>
        </div>
      </div>

      {/* Button at Bottom */}
      <div className="flex justify-center mt-8">
        <button className="p-4 bg-black transition font-semibold text-lg text-white rounded-full cursor-pointer hover:bg-lime-500 hover:text-black">
          Learn more →
        </button>
      </div>
    </div>
  )
}

export default Services
