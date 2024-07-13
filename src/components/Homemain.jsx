import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Allicon from "./icon";
import Primarybtn from "./primarybtn";
import myimage from "./../../src/image.png";

const Homemain = () => {
  const typedElement1 = useRef(null);
  const typedElement2 = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Hi, I am Surendra Pandar"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const options2 = {
        strings: ["Full Stack Developer","web designer","video editer","teacher"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      };

    const typed1 = new Typed(typedElement1.current, options);
    const typed2 = new Typed(typedElement2.current, options2);

    return () => {
        typed1.destroy();
        typed2.destroy();
      };
  }, []);

  return (
    <div id="home">
      <div className="flex md:flex-row md:p-4 min-h-screen md:ml-16 md:mr-16 flex-col items-center">
        <div className="leftbox md:w-1/2 w-[80%] md:pt-4 md:pb-4 md:pl-4 flex flex-col md:justify-center items-start space-y-4 md:mt-0 mt-10 h-auto">
          <div className="md:w-full">
            <h1 className="md:text-5xl text-3xl font-bold">
              <span ref={typedElement1}></span>
            </h1>
          </div>
          <div className="">
            <h2 className="md:text-4xl text-2xl font-semibold">
            <span ref={typedElement2}></span>
            </h2>
          </div>
          <div className="">
            <p className="md:text-3xl text-xl text-gray-700">I am a full stack developer, currently working at Wisflux Tech Labs as a full stack developer</p>
          </div>
          <div className="flex w-[85%] md:pb-0 pb-3">
            <Allicon />
          </div>
          <div className="">
            <Primarybtn />
          </div>
        </div>
        <div className="rightbox md:w-1/2 flex justify-center md:mt-0 mt-5">
          <img src={myimage} alt="Profile" className="" />
        </div>
      </div>
    </div>
  );
};

export default Homemain;
