import React from 'react';
import Aboutcontent from '../components/Aboutcontent';

const AboutPage = () => {
  return (
    <div className=" h-[750px] md:h-[800px] ">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-black">About Me</h1>
      </div>

      <div>
        <Aboutcontent />
      </div>
    </div>
  );
};

export default AboutPage;
