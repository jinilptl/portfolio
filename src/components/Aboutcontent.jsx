import React from 'react';
import profile from '../../src/profile-pic.png';

const Aboutcontent = () => {
  return (
    <div id='About'>
      <div className="flex flex-col  md:flex-row h-[600px]">
        {/* Left Side Image */}
        <div className="w-full mb-9 md:mb-0 md:w-1/2 p-4 flex justify-center items-center md:h-auto md:mt-8">
          <div className="bg-slate-800 rounded-3xl w-[15rem] md:w-auto flex justify-center h-[350px] md:h-[550px]">
            <img src={profile} alt="Profile" className="h-[300px] md:h-[400px] w-[80%] m-auto" />
          </div>
        </div>
        
        {/* Right Side Content */}
        <div className="w-full md:w-[48%] pt-2 pl-3  md:pl-24 flex flex-col justify-center ">
          <div >
            <p className="mb-6 md:mb-10 text-lg md:text-2xl">
              Hello, I am Surendra Pandar, a web developer specializing in cyber security, JavaScript, React, Redux, and more.
            </p>
          </div>
          <div>
            <p className="text-lg md:text-2xl">
              I am passionate about crafting exceptional digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutcontent;
