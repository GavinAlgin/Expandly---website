import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import mock from '../../assets/SAASMOCkup.png'
import mock1 from '../../assets/downloaded-file.jpeg'
import mock2 from '../../assets/webmock.jpeg'

interface Project {
  title: string
  description: string
  image: string
}

interface ProjectSectionProps {
  project: Project
  zIndex: number
  overlap: boolean
}

const projects: Project[] = [
  {
    title: 'Custom Web Development',
    description:
      'A modern and custom website which fits the asthetics and nature of your brand and style.',
    image: mock,
  },
  {
    title: 'Unique Mobile Development',
    description:
      'A modern and custom mobile native app which fits the asthetics and nature of your brand and style and compatible for both IOS and Android.',
    image: mock1,
  },
  {
    title: 'Offline / Low Connectivity & PWA-First Experiences',
    description:
      'We allow your platform to target audience with intermittent connectivity (rural, mobile data constraints), ensuring solutions work offline, gracefully degrade, cache well, minimal load, etc.',
    image: mock2,
  },
]

export default function ProjectsShowcase() {
  return (
    <section className="w-full">
      {projects.map((project, index) => (
        <ProjectSection
          key={index}
          project={project}
          zIndex={projects.length - index}
          overlap={index > 0}
        />
      ))}
    </section>
  )
}

function ProjectSection({ project, zIndex, overlap }: ProjectSectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.6 })

  return (
    <motion.section
      ref={ref}
      className={`w-full h-screen rounded-2xl flex items-end justify-start relative px-4 sm:px-8 pb-10 ${
        overlap ? '-mt-20' : ''
      }`}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 100,
        scale: inView ? 1 : 0.95,
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      style={{
        zIndex,
        backgroundImage: `url(${project.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <motion.div
        className="p-6 sm:p-8 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          {project.title}
        </h3>
        <p className="text-[#888888] text-base sm:text-lg">
          {project.description}
        </p>
      </motion.div>
    </motion.section>
  )
}
