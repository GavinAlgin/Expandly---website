import React from 'react'

const ExperienceSection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-[#EEF3F7]">
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
            <h3 className="text-4xl font-semibold text-gray-800">98%</h3>
            <p className="text-gray-600 mt-1">Customer Satisfaction Consistent quality and client-first approach</p>
          </div>

          {/* Projects Completed */}
          <div>
            <h3 className="text-4xl font-semibold text-gray-800">12+</h3>
            <p className="text-gray-600 mt-1">Product ready Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
