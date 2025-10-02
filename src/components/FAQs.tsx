import React from 'react';

const FAQs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-12">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Frequently Asked Questions
        </h1>

        <div className="divide-y divide-gray-200">

          {/* FAQ 1 */}
          <details className="group py-4 [&_summary::-webkit-details-marker]:hidden" open>
            <summary className="flex items-center justify-between gap-1.5 text-gray-300 cursor-pointer">
              <h2 className="text-lg font-medium">How does TechLoom differ from other Digital Agencies?</h2>
              <ToggleIcons />
            </summary>
            <p className="pt-4 text-gray-400">
              Our unique approach to UX/UI design, mobile and web development, and dedication to personalized, innovative solutions sets us apart. We’re a small business with a big heart, committed to quality and reliability to ensure your digital presence thrives in a competitive industry.
            </p>
          </details>

          {/* FAQ 2 */}
          <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 text-gray-300 cursor-pointer">
              <h2 className="text-lg font-medium">What services do you offer?</h2>
              <ToggleIcons />
            </summary>
            <p className="pt-4 text-gray-400">
              We offer full-stack web development, mobile app development, UX/UI design, website maintenance, SEO optimization, and custom web solutions tailored to your business goals.
            </p>
          </details>

          {/* FAQ 3 */}
          <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 text-gray-300 cursor-pointer">
              <h2 className="text-lg font-medium">How long does it take to complete a website project?</h2>
              <ToggleIcons />
            </summary>
            <p className="pt-4 text-gray-400">
              Project timelines vary based on complexity, but a standard website typically takes 4–8 weeks from initial planning to launch. We work closely with you to meet deadlines and ensure a smooth process.
            </p>
          </details>

          {/* FAQ 4 */}
          <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 text-gray-300 cursor-pointer">
              <h2 className="text-lg font-medium">Will my website be mobile-friendly?</h2>
              <ToggleIcons />
            </summary>
            <p className="pt-4 text-gray-400">
              Absolutely. Every website we build is fully responsive and optimized for mobile, tablet, and desktop devices to ensure the best user experience across all platforms.
            </p>
          </details>

          {/* FAQ 5 */}
          <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 text-gray-300 cursor-pointer">
              <h2 className="text-lg font-medium">Do you provide website maintenance and support?</h2>
              <ToggleIcons />
            </summary>
            <p className="pt-4 text-gray-400">
              Yes, we offer ongoing support and maintenance packages to keep your website running smoothly, secure, and up-to-date with the latest technologies and content.
            </p>
          </details>

        </div>
      </div>
    </div>
  );
};

// Icon toggle component for expand/collapse arrows
const ToggleIcons = () => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="block size-5 shrink-0 group-open:hidden"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="hidden size-5 shrink-0 group-open:block"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </>
);

export default FAQs;
