import React, { useState,useEffect } from 'react';

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
      <nav className="p-2 md:mt-0 mt-3 " data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div className="container mx-auto">
          <div className="flex md:justify-between justify-end items-center lg:flex lg:justify-center">
            <div className="text-black text-md md:text-3xl hidden md:flex">
              <a href="#home" className="block md:inline-block md:px-4 md:py-2">Home</a>
              <a href="#projects" className="block md:inline-block md:px-4 md:py-2">Projects</a>
              <a href="#contact" className="block md:inline-block md:px-4 md:py-2">Contact Us</a>
              <a href="#about" className="block md:inline-block md:px-4 md:py-2">About Us</a>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-black focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                </svg>
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="mt-2 lg:hidden flex flex-col items-end">
              <a href="#home" className="block text-black text-md py-2">Home</a>
              <a href="#projects" className="block text-black text-md py-2">Projects</a>
              <a href="#contact" className="block text-black text-md py-2">Contact Us</a>
              <a href="#about" className="block text-black text-md py-2">About Us</a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbaar;
