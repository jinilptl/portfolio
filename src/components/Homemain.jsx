import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Allicon from "./icon";
import Primarybtn from "./primarybtn";
import myimage from "./../../src/image.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homemain = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const typedElement2 = useRef(null);

  useEffect(() => {
    const options2 = {
      strings: ["Full Stack Developer", "Software Engineer", "Teacher by passion"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    const typed2 = new Typed(typedElement2.current, options2);

    return () => {
      typed2.destroy();
    };
  }, []);

  return (
    <div id="home" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2500">
      <div className="flex md:flex-row md:p-4 min-h-screen md:ml-16 md:mr-16 flex-col items-center  ">
        <div className="leftbox md:w-1/2 w-[80%] md:pt-4 md:pb-4 md:pl-4 flex flex-col md:justify-center items-start space-y-4 md:mt-[-70px] mt-10 h-auto">
          <div className="md:w-full">
            <h1 className="md:text-5xl text-2xl font-bold" data-aos="fade-up">
              <span>
               <span className=" text-[#00b4d8]">Hi, I am</span>  <span className="animated-text">Surendra Pandar</span>
              </span>
            </h1>
          </div>
          <div className="">
            <h2 className="md:text-4xl text-xl font-semibold animated-text">
              <span ref={typedElement2}></span>
            </h2>
          </div>
          <div className="">
            <p className="md:text-3xl text-md text-[#0077b6]" data-aos="fade-up">
              I am a full stack developer, currently working at Wisflux Tech Labs as a full stack developer
            </p>
          </div>
          <div className="flex w-[85%] md:pb-0 pb-3">
            <Allicon />
          </div>
          <div className="">
            <Primarybtn />
          </div>
        </div>
        <div className="rightbox md:w-1/2 flex justify-center md:mt-[-120px] mt-14 lg:ml-10 rounded-[20px] w-[90%]  ">
          <img src={myimage} alt="Profile" className="animated-image opacity-80" />
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes colorChange {
          0% { color: #ff6b6b; }
          25% { color: #ffcc00; }
          50% { color: #00bfff; }
          75% { color: #ff6347; }
          100% { color: #ff6b6b; }
        }

        .animated-text {
          display: inline-block;
          animation: colorChange 6s infinite;
        }

        @keyframes scaleUp {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .animated-image {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: scaleUp 5s infinite;
        }

        .animated-image:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 20px rgba(0, 128, 128, 0.5);
          border-radius:20px
        }
      `}</style>
    </div>
  );
};

export default Homemain;
