import React, { useRef, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { motion, useAnimation, useInView } from 'framer-motion'

// Text animation variants
const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2 * i,
    },
  }),
}

const child = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// AnimatedText Component
const AnimatedText = ({ text, className = '', delay = 0 }) => {
  const words = text.split(' ')
  return (
    <motion.div
      className={`flex flex-wrap justify-center ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="mr-2 whitespace-nowrap"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

// StatsSection with scroll animation
const StatsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) controls.start('visible')
  }, [isInView, controls])

  const variant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={controls}
      className="flex flex-wrap justify-center gap-6 mt-6"
    >
      {[
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M7 21H17C19.4 21 20.5 21 21.3 20.3C22 19.5 22 18.4 22 16C22 13.6 22 12.5 21.3 11.7C20.5 11 19.4 11 17 11H7C4.6 11 3.5 11 2.7 11.7C2 12.5 2 13.6 2 16C2 18.4 2 19.5 2.7 20.3C3.5 21 4.6 21 7 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 11C4 9.6 4 8.9 4.3 8.4C4.5 7.9 4.9 7.5 5.4 7.3C5.9 7 6.6 7 8 7H16C17.4 7 18.1 7 18.6 7.3C19.1 7.5 19.5 7.9 19.7 8.4C20 8.9 20 9.6 20 11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 7C6 5.6 6 4.9 6.3 4.4C6.5 3.9 6.9 3.5 7.4 3.3C7.9 3 8.6 3 10 3H14C15.4 3 16.1 3 16.6 3.3C17.1 3.5 17.5 3.9 17.7 4.4C18 4.9 18 5.6 18 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 15L15.7 15.4C15.1 16.2 14.8 16.6 14.4 16.8C13.9 17 13.5 17 12.5 17H11.5C10.5 17 10.1 17 9.6 16.8C9.2 16.6 8.9 16.2 8.3 15.4L8 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
          text: 'Over 12+ projects completed',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor">
              <path d="M12 16.5V14.5" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M4.3 18.8C4.5 20.5 5.9 21.8 7.6 21.9C9 22 10.4 22 12 22C13.6 22 15 22 16.4 21.9C18.1 21.8 19.5 20.5 19.7 18.8C19.9 17.8 20 16.6 20 15.5C20 14.4 19.9 13.2 19.7 12.2C19.5 10.5 18.1 9.2 16.4 9.1C15 9 13.6 9 12 9C10.4 9 9 9 7.6 9.1C5.9 9.2 4.5 10.5 4.3 12.2C4.1 13.2 4 14.4 4 15.5C4 16.6 4.1 17.8 4.3 18.8Z" strokeWidth="1.5" />
              <path d="M7.5 9V6.5C7.5 4 9.5 2 12 2C14.5 2 16.5 4 16.5 6.5V9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
          text: 'Secured & safe online payment',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
              <path d="M8 12l2 2 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
          text: 'Unique builds & Integration of SME',
        },
      ].map(({ icon, text }, idx) => (
        <motion.span
          key={idx}
          variants={item}
          className="flex items-center gap-2 text-sm md:text-base font-semibold text-gray-800"
        >
          {icon}
          {text}
        </motion.span>
      ))}
    </motion.div>
  )
}

const HeroPage = () => {
  return (
    <div className="bg-white h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center text-center px-6">
        <AnimatedText
          text="Your Innovative Partner for Impactful Solutions"
          className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white"
          delay={0}
        />
        <AnimatedText
          text="Creative and innovative web solutions for firms and emerging businesses wanting to establish a strong foundation."
          className="font-semibold mt-6 text-gray-600 max-w-2xl"
          delay={1}
        />
        <StatsSection />
      </div>
    </div>
  )
}

export default HeroPage
