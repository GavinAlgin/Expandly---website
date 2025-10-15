import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/LandingPage/FooterSection';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Section content to replace blog posts
const agencySections = [
  {
    id: 1,
    title: 'Our Story',
    description:
      'Founded with a passion for innovation, our journey began as a small team of developers driven by a mission to solve complex business problems through technology. Over the years, we’ve transformed into a full-scale digital agency, helping startups and enterprises alike build robust web and mobile solutions.',
    date: 'Sep 21, 2025',
    datetime: '2025-09-21',
    category: { title: 'About', href: '#' },
    author: {
      name: 'Quinton Algin',
      role: 'CEO & Co-Founder',
      href: '#',
      imageUrl: 'https://via.placeholder.com/40',
    },
  },
  {
    id: 2,
    title: 'How We Work',
    description:
      'We follow an agile and collaborative approach. Our process includes discovery workshops, UX/UI design, agile development cycles, QA testing, and post-launch support. We keep you involved at every stage and adapt based on real-time feedback to ensure top-quality outcomes.',
    date: 'Sep 18, 2025',
    datetime: '2025-09-18',
    category: { title: 'Process', href: '#' },
    author: {
      name: 'Luther Algin',
      role: 'Delivery Manager',
      href: '#',
      imageUrl: 'https://via.placeholder.com/40',
    },
  },
  {
    id: 3,
    title: 'Our Team',
    description:
      'We are a tight-knit team of developers, designers, and strategists passionate about crafting outstanding digital experiences. We value collaboration, curiosity, and continuous learning — and we bring those values to every project we take on.',
    date: 'Sep 15, 2025',
    datetime: '2025-09-15',
    category: { title: 'Team', href: '#' },
    author: {
      name: 'Quinton Algin',
      role: 'Head of Marketing & Consultation',
      href: '#',
      imageUrl: 'https://via.placeholder.com/40',
    },
  },
  {
    id: 4,
    title: 'Our Products',
    description:
      'We build scalable web and mobile apps using modern technologies like React, Next.js, Flutter, and Node.js. From MVPs to enterprise-grade platforms, our solutions are user-focused, reliable, and designed to grow with your business.',
    date: 'Sep 12, 2025',
    datetime: '2025-09-12',
    category: { title: 'Products', href: '#' },
    author: {
      name: 'Gavin Algin',
      role: 'Technical Architects',
      href: '#',
      imageUrl: 'https://via.placeholder.com/40',
    },
  },
];

const AboutUsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <div className="py-24 sm:py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
              Who We Are
            </h2>
            <p className="mt-2 text-lg/8 text-gray-300">
              Discover what makes us a leading web and mobile development agency.
            </p>
          </div>

          {/* Divider + Grid Section */}
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {agencySections.map((section, index) => (
              <article
                key={section.id}
                className="flex max-w-xl flex-col items-start justify-between"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={section.datetime} className="text-gray-400">
                    {section.date}
                  </time>
                  <a
                    href={section.category.href}
                    className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800"
                  >
                    {section.category.title}
                  </a>
                </div>
                <div className="group relative grow">
                  <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {section.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-5 text-sm/6 text-gray-400">
                    {section.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                  <img
                    alt={section.author.name}
                    src={section.author.imageUrl}
                    loading="lazy"
                    className="size-10 rounded-full bg-gray-800"
                  />
                  <div className="text-sm/6">
                    <p className="font-semibold text-white">
                      <a href={section.author.href}>
                        <span className="absolute inset-0" />
                        {section.author.name}
                      </a>
                    </p>
                    <p className="text-gray-400">{section.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
