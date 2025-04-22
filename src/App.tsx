import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testinomals from "./components/Testinomals";
import HeroPage from "./Pages/HeroPage";
import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!message) {
      newErrors.message = 'Message is required';
    } else if (message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle successful form submission
      console.log('Form submitted:', { email, message });
      alert('Message sent!');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <>
    <HeroPage />
    <Services />
    <Projects />
    <Testinomals />
    <div className="bg-black h-[50vh] text-center flex justify-center items-center">
      <div className="flex flex-col items-center">
        <p className="text-sm uppercase font-bold text-white mt-10">Now available for hire</p>
        <h2 className="text-8xl font-semibold text-white mt-6">Get in touch</h2>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mt-6 items-center">
          <div className="flex flex-col">
            <input 
              type="email" 
              placeholder="Your Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 p-2 w-[300px] rounded border"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>
          <div className="flex flex-col">
            <textarea 
              placeholder="Your Message" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-gray-200 p-2 w-[300px] h-[45px] rounded border"
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
          </div>
          <button 
            type="submit" 
            className="bg-lime-500 text-white hover:bg-white hover:text-black transition-all font-bold py-2 px-4 rounded cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </div>
    <FAQs />
    <Footer />

    </>
  )
}

export default App
