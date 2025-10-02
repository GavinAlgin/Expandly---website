import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate()

  const handleRoute = () => {
    navigate('/projects')
  }
  
  return (
    <section className="h-screen w-full pt-16">
      <div className="flex items-center justify-center h-full text-center px-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Inspired Digital{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-500 via-blue-500 to-[#196be4] bg-clip-text animate-gradient">
              Solutions
            </span>
          </h1>

          <p className="text-2xl text-[#888888] mb-6">
            Helping business leaders grow through technology and creativity.
          </p>

          <p className="text-[#888888] mb-6 mt-6 max-w-2xl mx-auto">
            TechLoom — formerly <strong className="text-white">'Expandly'</strong> — started with one goal:
            stop reinventing the wheel. It's our personal vault of components,
            ideas, and techniques we actually use. Like a developer’s Swiss Army knife —
            always sharp, always growing.
          </p>

          <button onClick={handleRoute} className="bg-[#196be4] cursor-pointer hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
