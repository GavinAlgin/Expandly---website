import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/LandingPage/FooterSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const pricingPlans = [
  {
    name: 'Startup',
    price: 'R3,000+',
    description: 'Perfect for MVPs and early-stage products',
    features: [
      'Basic Web or Mobile App',
      'Up to 2 user roles',
      '2 weeks of development',
      'UI/UX design (up to 5 screens)',
      '1 round of revisions',
      'Email support',
    ],
    mostPopular: false,
  },
  {
    name: 'Growth',
    price: 'R7,500+',
    description: 'Ideal for scaling teams and growing businesses',
    features: [
      'Custom Web or Mobile App',
      'Up to 5 user roles',
      '4–6 weeks of development',
      'Advanced UI/UX design',
      '3 rounds of revisions',
      'Priority email & chat support',
      'Basic CMS or Admin panel',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large-scale projects',
    features: [
      'Full-stack Web & Mobile development',
      'Unlimited user roles & features',
      'Dedicated dev team',
      'Custom integrations (API, CRM, ERP)',
      'Advanced security & compliance',
      'Ongoing support & maintenance',
      'Dedicated project manager',
    ],
    mostPopular: false,
  },
];

const faqs = [
  {
    question: 'What technologies do you use?',
    answer:
      'We specialize in React, Next.js, Node.js, Tailwind, and Flutter. We select tech stacks based on project needs.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Startup plans usually take 2–3 weeks, Growth plans 4–6 weeks, and Enterprise projects vary based on complexity.',
  },
  {
    question: 'Do you offer maintenance and support?',
    answer:
      'Yes! We offer post-launch support, monitoring, and ongoing maintenance for all plans.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer:
      'Absolutely. You can upgrade anytime as your product scales or requirements grow.',
  },
];

const PricingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // ✅ Typed index as number
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateEmail = (email: string): boolean => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Simulate submission
    toast.success("Message sent successfully!");

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />

      {/* Pricing Section */}
      <div className="bg-[#080808] text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold" data-aos="fade-up">
            Transparent Pricing for Every Stage
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay={100}>
            Whether you're building your first MVP or scaling a product, we have a plan that fits.
          </p>

          {/* Pricing Grid */}
          <div className="mt-20 grid gap-10 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2" data-aos="fade-up" data-aos-delay={200}>
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative flex flex-col border border-[#2a2a2a] rounded-xl p-8 shadow-md bg-[#121212] hover:shadow-lg transition-all ${plan.mostPopular ? 'bg-[#196be4] ring-1 ring-blue-500' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 150}>
                {plan.mostPopular && (
                  <span className="absolute top-4 right-4 text-xs bg-indigo-500 px-2 py-1 rounded-full font-medium text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-gray-200">{plan.description}</p>
                <p className="mt-6 text-3xl font-bold text-white">{plan.price}</p>
                <ul className="mt-6 space-y-3 text-sm text-gray-200">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 w-full inline-block rounded-md bg-[#196be4] px-4 py-2 text-sm font-medium text-white text-center hover:bg-blue-500 transition"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#080808] text-white py-20" id="faq">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10 text-center" data-aos="fade-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#2a2a2a] rounded-lg p-4 cursor-pointer bg-[#121212]"
                onClick={() => toggleFAQ(index)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <span className="text-xl text-gray-400">{openFAQ === index ? '−' : '+'}</span>
                </div>
                {openFAQ === index && (
                  <p className="mt-3 text-gray-200">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-[#080808] text-white py-20" id="contact">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-center" data-aos="fade-up">
            Get in Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay={100}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-[#2a2a2a] bg-[#121212] px-4 py-2 text-white placeholder:text-gray-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-[#2a2a2a] bg-[#121212] px-4 py-2 text-white placeholder:text-gray-500"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Project Details
              </label>
              {/* ✅ rows fixed to number */}
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-[#2a2a2a] bg-[#121212] px-4 py-2 text-white placeholder:text-gray-500"
                placeholder="Tell us about your project, goals, timeline..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-[#196be4] px-6 py-3 text-white font-medium hover:bg-blue-500 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PricingPage;
