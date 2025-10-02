'use client'; // For Next.js app router
import { motion } from 'framer-motion';

interface TestimonialData {
  name: string;
  title: string;
  text: string;
  image: string;
}

const placeholderImage = 'https://via.placeholder.com/150';

const testimonialsTop: TestimonialData[] = [
  {
    name: 'Jonathan Smith',
    title: 'Tech Startup Founder',
    text: 'Elevate AI has revolutionized how we analyze user data. Their tools provide deep insights with minimal setup.',
    image: placeholderImage,
  },
  {
    name: 'Sophia Liu',
    title: 'Product Manager',
    text: 'The integration was seamless and the impact immediate. Our workflows are faster and smarter than ever.',
    image: placeholderImage,
  },
  {
    name: 'Carlos Mendoza',
    title: 'CTO, Fintech Company',
    text: 'We’ve saved hundreds of hours thanks to Elevate’s predictive analytics. A game-changer.',
    image: placeholderImage,
  },
  {
    name: 'Elena Petrova',
    title: 'Marketing Director',
    text: 'Our campaigns are now data-driven. We’ve seen a 25% increase in conversions using Elevate AI.',
    image: placeholderImage,
  },
];

const testimonialsBottom: TestimonialData[] = [
  {
    name: 'Marcus Wright',
    title: 'E-commerce Owner',
    text: 'Sales went up within the first month of use. Elevate AI gave us insights we didn’t know we needed.',
    image: placeholderImage,
  },
  {
    name: 'Isabella Green',
    title: 'UX Designer',
    text: 'We’re designing better interfaces because of Elevate’s behavior tracking.',
    image: placeholderImage,
  },
  {
    name: 'Noah Fischer',
    title: 'AI Consultant',
    text: 'I recommend Elevate to every client. The platform is robust, flexible, and always evolving.',
    image: placeholderImage,
  },
  {
    name: 'Emily Tan',
    title: 'HR Tech Founder',
    text: 'From recruitment to retention, Elevate’s analytics helped us make smarter HR decisions.',
    image: placeholderImage,
  },
];

export function Testimonial() {
  return (
    <section className="w-full bg-[#080808] overflow-hidden relative py-16 text-white">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold md:text-5xl mb-4">
          What our clients are saying
        </h2>
        <p className="text-sm sm:text-base text-gray-400">
          ElevateAI's AI-centric solutions have enabled businesses to scale
          greater heights. Here's what they have to say...
        </p>
      </div>

      {/* Removed gradient edges with blur */}

      {/* Auto-scroll rows */}
      <div className="relative w-full mt-12 space-y-8">
        {/* Top Row */}
        <motion.div
          className="flex gap-6 px-10"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            duration: 40,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {[...testimonialsTop, ...testimonialsTop].map((testimonial, i) => (
            <TestimonialCard key={`top-${i}`} {...testimonial} />
          ))}
        </motion.div>

        {/* Bottom Row (scroll opposite direction) */}
        <motion.div
          className="flex gap-6 px-10 flex-row-reverse"
          animate={{ x: ['0%', '100%'] }}
          transition={{
            duration: 40,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {[...testimonialsBottom, ...testimonialsBottom].map((testimonial, i) => (
            <TestimonialCard key={`bottom-${i}`} {...testimonial} />
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <a href="#" className="font-bold text-white hover:underline">
          Check all reviews
        </a>
      </div>
    </section>
  );
}

function TestimonialCard({ name, title, text, image }: TestimonialData) {
  return (
    <div className="flex-shrink-0 w-80 p-6 rounded-xl border border-white/10 bg-[#121212]">
      <div className="flex gap-4 items-center mb-4">
        <img
          src={image}
          alt={name}
          className="h-14 w-14 rounded-full object-cover border border-white/20"
        />
        <div>
          <h6 className="text-base font-bold text-white">{name}</h6>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </div>
      <p className="text-sm text-gray-300">{text}</p>
    </div>
  );
}
