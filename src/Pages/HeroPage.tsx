import HeroSection from '../components/LandingPage/HeroSection'
import ExperienceSection from '../components/LandingPage/ExperienceSection'
import ServicesSection from '../components/LandingPage/ServicesSection'

const HeroPage = () => {
  return (
    <>
      <HeroSection />
      <div className='w-full h-1/3 bg-blue-800 p-4 flex flex-row justify-between'>
        <h2 className='font-semibold text-lg text-white'>Digital Solutions</h2>
        <h2 className='font-semibold text-lg text-white'>Digital Solutions</h2>
        <h2 className='font-semibold text-lg text-white'>Digital Solutions</h2>
      </div>
      <ExperienceSection data-aos="fade-up" />
      <ServicesSection />
    </>
  )
}

export default HeroPage