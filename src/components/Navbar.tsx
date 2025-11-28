import { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-transparent bg-opacity-80 backdrop-blur-sm shadow-md">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-white font-bold text-xl" href="/">
                TechLoom<span className="text-[#196be4]">.</span>
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-8 text-sm">
                  {/* About Dropdown */}
                  <li className="relative group">
                    <button
                      onClick={() => setAboutOpen(!aboutOpen)}
                      className="flex items-center gap-1 text-white font-medium text-lg transition hover:text-[#196be4] cursor-pointer">
                      About
                      <svg
                        className={`w-4 h-4 transform transition-transform ${aboutOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {aboutOpen && (
                      <ul className="absolute mt-2 w-40 bg-white border-white rounded shadow-lg z-20">
                        <li><a href="/aboutus" className="block px-4 py-2 hover:bg-blue-200">Our Story</a></li>
                        <li><a href="/aboutus" className="block px-4 py-2 hover:bg-blue-200">How we work</a></li>
                        <li><a href="/aboutus" className="block px-4 py-2 hover:bg-blue-200">Products</a></li>
                        <li><a href="/aboutus" className="block px-4 py-2 hover:bg-blue-200">Team</a></li>
                      </ul>
                    )}
                  </li>

                  {/* Services Dropdown */}
                  <li className="relative group">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center gap-1 text-white font-medium text-lg transition hover:text-[#196be4] cursor-pointer">
                      Services
                      <svg
                        className={`w-4 h-4 transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <ul className="absolute mt-2 w-48 bg-white border rounded shadow-lg z-20">
                        <li><a href="/#services" className="block px-4 py-2 hover:bg-blue-200">Web Development</a></li>
                        <li><a href="/#services" className="block px-4 py-2 hover:bg-blue-200">Mobile Development</a></li>
                        <li><a href="/#services" className="block px-4 py-2 hover:bg-blue-200">SEO</a></li>
                        <li><a href="/#services" className="block px-4 py-2 hover:bg-blue-200">Techian Support</a></li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <NavLink className="text-white font-medium text-lg transition hover:text-[#196be4] relative group cursor-pointer" to='/projects'>
                      Projects
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#196be4] transition-all group-hover:w-full"></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/pricingplan" className="text-white font-medium text-lg transition hover:text-[#196be4] relative group cursor-pointer">
                      Pricing
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#196be4] transition-all group-hover:w-full"></span>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <NavLink 
                  className="rounded-md hover:border-[#196be4] border bg-transparent px-5 py-2.5 text-sm font-medium text-white hover:text-[#196be4] shadow-sm transition"
                  to="/form">
                  Let's Talk →
                </NavLink>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="block md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <nav>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => setAboutOpen(!aboutOpen)} className="flex justify-between w-full text-left font-medium text-lg text-white">
                    About
                    <span>{aboutOpen ? '▲' : '▼'}</span>
                  </button>
                  {aboutOpen && (
                    <ul className="pl-4 mt-1 space-y-1 text-sm text-[#888888]">
                      <li><a href="/aboutus">Our Story</a></li>
                      <li><a href="/aboutus">How we work</a></li>
                      <li><a href="/aboutus">Team</a></li>
                    </ul>
                  )}
                </li>
                <li>
                  <button onClick={() => setServicesOpen(!servicesOpen)} className="flex justify-between w-full text-left font-medium text-lg text-white">
                    Services
                    <span>{servicesOpen ? '▲' : '▼'}</span>
                  </button>
                  {servicesOpen && (
                    <ul className="pl-4 mt-1 space-y-1 text-sm text-[#888888]">
                      <li><a href="/#services">Web Development</a></li>
                      <li><a href="/#services">Mobile Development</a></li>
                      <li><a href="/#services">SEO</a></li>
                      <li><a href="/#services">Techian Support</a></li>
                    </ul>
                  )}
                </li>
                <li><a href="/projects" className="block text-white font-medium text-lg">Projects</a></li>
                <li><a href="/pricingplan" className="block text-white font-medium text-lg">Pricing</a></li>
              </ul>
            </nav>
          </div>
        )}
  </header>
  )
}

export default Navbar