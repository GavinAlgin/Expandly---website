import col_IMG from '../assets/ChatGPT Image Apr 15, 2025, 02_07_45 PM.png';

const Projects = () => {
  return (
    <div className="px-4 py-12 md:px-20 bg-white min-h-screen flex flex-col justify-between">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-5xl md:text-5xl font-bold mb-4">Collaborative to the core</h2>
          <p className="text-gray-700 mb-6">
            Many of our partners are returning clients who appreciated how swiftly we adapted to their working style. We earned their trust with fully transparent communication and consistently excellent work.
          </p>
          <div className="flex gap-2">
            <input 
              type="text" 
              className="w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="@"
            />
            <button className="bg-black text-white font-semibold px-5 py-2 rounded-md hover:bg-lime-500 hover:text-black transition cursor-pointer">
              Submit
            </button>
          </div>
        </div>

        {/* Right Figures Content */}
        <div className="md:w-1/2 flex justify-center md:justify-end gap-8 text-center">
          <div className="flex flex-col">
            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white">4+</span>
            <span className="text-gray-600 mt-1">Years of Experience</span>
          </div>

          {/* Vertical Divider */}
          <div className="border-l border-gray-600 h-full"></div>

          <div className="flex flex-col">
            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white">12+</span>
            <span className="text-gray-600 mt-1">Projects Completed</span>
          </div>
        </div>
      </div>

      {/* Three Column Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div className="relativep-4 rounded-md">
          <div className='bg-gray-400'>
            <img
              src={col_IMG}
              alt="Vision Driven"
              className="rounded-md mb-4"
            />
          </div>
          <h3 className="text-sm font-bold mb-2 text-gray-400">UI/UX DESIGN ~ EDUCATION & RESEARCH</h3>
          <p className="text-black text-2xl">Conceptual design of an Learning Management system mobile application</p>
        </div>

        {/* Column 2 */}
        <div className="relative p-4 rounded-md">
          <img
            src={col_IMG}
            alt="User Focused"
            className="rounded-md mb-4"
          />
          <h3 className="text-sm font-bold mb-2 text-gray-400">DESIGN & DEVELOPMENT ~ ECOMMERCE</h3>
          <p className="text-black text-2xl">Unique and custom web applications for local businesses connected to whatsapp business account</p>
        </div>

        {/* Column 3 */}
        <div className="relative p-4 rounded-md">
          <img
            src={col_IMG}
            alt="Result Oriented"
            className="rounded-md mb-4"
          />
          <h3 className="text-sm font-bold mb-2 text-gray-400">DEVELOPMENT ~ ECOMMERCE & EDUCATION</h3>
          <p className="text-black text-2xl">Innovation, e-learning spaces for every student while enjoying buying your needs</p>
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

export default Projects
