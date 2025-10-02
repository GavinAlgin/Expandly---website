// src/components/Footer.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  const handleRoute = () =>{
    navigate('/form');
  }

  return (
    <footer className="text-white">
      {/* CTA */}
      <div className="py-8 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Join Us Today!</h2>
        <p className="text-sm md:text-base">Be part of something great. Subscribe to our newsletter or get in touch.</p>
        <button onClick={handleRoute} className="mt-4 px-6 py-2 bg-[#196be4] text-white font-semibold rounded hover:bg-[#145bc4] transition cursor-pointer">
          Get Started
        </button>
      </div>

      {/* Horizontal Separator */}
      <div className="w-full h-px bg-gray-700 my-4" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-semibold text-white mb-2">Our Location</h3>
          <p>61 Church street<br />Polokwane, Limpopo<br />ZA</p>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2">Contact Us</h3>
          <p>Email: techloomcode@gmail.com<br />Phone:  +27 66 133 9012</p>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex items-center gap-4 mt-2">
            {/* Instagram SVG */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-blue-500"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm4.75-.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>
            </a>

            {/* WhatsApp SVG */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-blue-500"
              >
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12 0a11.94 11.94 0 0 0-10.61 17.46L0 24l6.69-1.86A11.94 11.94 0 0 0 12 24a11.94 11.94 0 0 0 8.52-20.52ZM12 21.5a9.55 9.55 0 0 1-4.87-1.32l-.35-.21-3.97 1.1 1.1-3.87-.23-.4A9.45 9.45 0 1 1 21.5 12 9.53 9.53 0 0 1 12 21.5Zm5.41-7.05c-.29-.15-1.71-.85-1.98-.94s-.46-.14-.65.15-.75.94-.92 1.13-.34.22-.63.07a7.8 7.8 0 0 1-2.28-1.41 8.56 8.56 0 0 1-1.6-2c-.17-.29 0-.44.13-.58.13-.13.29-.34.43-.51a1.93 1.93 0 0 0 .29-.49.54.54 0 0 0 0-.51c-.14-.15-.65-1.56-.89-2.14-.23-.55-.47-.48-.65-.49a1.06 1.06 0 0 0-.55.1 2.3 2.3 0 0 0-.75.52 3.15 3.15 0 0 0-.94 2.32c0 1.37 1 2.69 1.13 2.88s2 3.17 4.84 4.3a16.54 16.54 0 0 0 1.63.6 4.43 4.43 0 0 0 2 .13 3.4 3.4 0 0 0 2.21-1.57 2.76 2.76 0 0 0 .2-1.57c-.09-.15-.26-.21-.55-.36Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-400">
        <p>
          © {year} Techloom. All rights reserved.{" "}
          <a href="/terms" className="underline hover:text-white">Terms & Conditions</a> |{" "}
          <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
