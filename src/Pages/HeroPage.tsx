import Footer from '../components/LandingPage/FooterSection'
import HeroSection from '../components/LandingPage/HeroSection'
import ProjectsShowcase from '../components/LandingPage/ProjectShowcase'
import ServicesSection from '../components/LandingPage/ServicesSection'
import { Testimonial } from '../components/LandingPage/TestimonalSection'
import Navbar from '../components/Navbar'

const HeroPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsShowcase />
        <ServicesSection />
        <Testimonial />
      </main>
      <Footer />
    </>
  )
}

export default HeroPage