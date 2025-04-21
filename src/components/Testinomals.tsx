import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonialsData = [
  { company: 'Insight Evolution', role: 'Design & Mobile Dev', text: 'Working with this platform was a seamless and innovative experience.' },
  { company: 'Expandly', role: 'Cloud Solutions', text: 'Reliable and scalable infrastructure support throughout.' },
  { company: 'FreeLancing Client', role: 'Entertainment Tech', text: 'Our deployment and streaming pipelines were vastly improved.' },
  { company: 'GoodMooddrip', role: 'Design & E-Commerce', text: 'Excellent support and service across all domains.' },
  { company: 'Prettybarber', role: 'Mobile Booking Application', text: 'Integrated well with our existing tools and enhanced productivity.' },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 2;

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsPerPage < testimonialsData.length ? prev + itemsPerPage : 0));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - itemsPerPage >= 0 ? prev - itemsPerPage : testimonialsData.length - itemsPerPage));
  };

  const visibleTestimonials = testimonialsData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="h-screen mt-10 flex flex-col items-center justify-center px-4">
      <h1 className="text-center font-bold text-5xl mb-8">Trusted by</h1>

      <div className="relative w-full max-w-6xl">
        {/* Left arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full cursor-pointer z-10 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" color="#000000" fill="none">
              <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        {/* Carousel Content */}
        <div className="overflow-hidden px-12">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={startIndex}
              className="flex gap-6"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-1 bg-gray-100 border rounded-xl p-8 min-w-0">
                  <h3 className="text-2xl font-semibold mb-2">{testimonial.company}</h3>
                  <h4 className="text-lg text-gray-500 mb-4">{testimonial.role}</h4>
                  <p className="text-gray-700 text-lg">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right arrow */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full cursor-pointer z-10 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" color="#000000" fill="none">
              <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      {/* Responsive note: for small screens, show 1 card */}
      <style jsx>{`
        @media (max-width: 768px) {
          .flex > div {
            flex: 1 0 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
