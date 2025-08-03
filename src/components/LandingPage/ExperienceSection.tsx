import { animate, useMotionValue, useTransform, motion } from 'framer-motion';
import serviceIMG from '../../assets/MobileMockupbg.png';
import { useEffect } from 'react';

const ExperienceSection = () => {
  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))

  useEffect(() => {
    const controls = animate(count, 12, { duration: 6 })
    return () => controls.stop()
  }, [])

  return (
    <section className="w-full h-[110vh] py-16 px-6 md:px-20 bg-black" >
      <div className="flex flex-col md:flex-row items-start justify-center relative">

        {/* Left Side */}
        <div className="md:w-1/2 pr-0 md:pr-12 mb-12 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight">
            5 Years of Experience Confirm Our Competence
          </h2>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-gray-300 h-full absolute left-1/2 transform -translate-x-1/2"></div>

        {/* Right Side */}
        <div className="md:w-1/2 pl-0 md:pl-12 space-y-10 ml-8">
          {/* Customer Satisfaction */}
          <div>
            <h3 className="text-4xl font-semibold text-gray-300">98%</h3>
            <p className="text-gray-400 mt-1">Customer Satisfaction Consistent quality and client-first approach</p>
          </div>

          {/* Projects Completed */}
          <div>
            <h3 className="text-4xl font-semibold text-gray-300 flex flex-row gap-1">
              <motion.pre>{rounded}</motion.pre>+
            </h3>
            <p className="text-gray-400 mt-1">Product ready Projects Completed</p>
          </div>
        </div>
      </div>

      {/* visual seciton */}
      <div className='h-screen flex justify-center items-center relative'>

        {/* Image side */}
        <div className='w-1/2 h-full flex flex-col justify-center items-center relative'>
          <div className='absolute top-0 left-0 w-full justify-center items-center'>
            <img src={serviceIMG} alt="img" className='w-full h-full object-cover'/>
          </div>
        </div>

        {/* Text side */}
        <div className='w-1/2 h-full flex justify-center items-center relative m-6'>
          <div className="flex-grow">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              We build stunning websites and drive digital growth.
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              We’re a small but passionate web development and marketing business,
              helping startups and growing brands build fast, beautiful, and conversion-focused websites.
              From code to campaigns, we’ve got you covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
