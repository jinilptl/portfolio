import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbaar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="p-2 md:mt-0 mt-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <div className="container mx-auto">
          <div className="flex md:justify-between justify-end items-center lg:flex lg:justify-end lg:mr-24">
            <div className="text-[#00b4d8] text-md md:text-2xl hidden md:flex md:pt-4">
              <a href="#home" className="nav-link block md:inline-block md:px-4 md:py-2">Home</a>
              <a href="#projects" className="nav-link block md:inline-block md:px-4 md:py-2">Projects</a>
              <a href="#contact" className="nav-link block md:inline-block md:px-4 md:py-2">Contact Us</a>
              <a href="#about" className="nav-link block md:inline-block md:px-4 md:py-2">About Us</a>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-black focus:outline-none"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                </svg>
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="mt-2 lg:hidden flex flex-col items-end ">
              <a href="#home" className="nav-link block text-[#00b4d8] text-md py-2">Home</a>
              <a href="#projects" className="nav-link block text-[#00b4d8] text-md py-2">Projects</a>
              <a href="#contact" className="nav-link block text-[#00b4d8] text-md py-2">Contact Us</a>
              <a href="#about" className="nav-link block text-[#00b4d8] text-md py-2">About Us</a>
            </div>
          )}
        </div>
      </nav>

      {/* Custom CSS */}
      <style jsx>{`
        .nav-link {
          position: relative;
          display: inline-block;
          padding: 0.5rem 1rem;
          margin: 0.5rem;
          border: 2px solid transperent;
          border-radius: 9999px; /* Rounded corners */
          overflow: hidden;
          transition: color 0.3s ease-in-out;
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background-image: radial-gradient( circle 1292px at -13.6% 51.7%,  rgba(0,56,68,1) 0%, rgba(163,217,185,1) 51.5%, rgba(255,252,247,1) 88.6% );


          z-index: -1;
          transition: height 0.3s ease-in-out;
        }
        
        .nav-link:hover::before {
          height: 100%;
        }
        
        .nav-link:hover {
           /* Change this color to your preference */
          color: white; /* Change this color to your preference */
        }
      `}</style>
    </div>
  );
};

export default Navbaar;
