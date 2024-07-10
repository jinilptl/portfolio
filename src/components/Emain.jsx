import React from 'react';

const Educationcontent = () => {
  return (
    <div>
      <div className="flex flex-col">
        
        {/* First div */}
        <div className="first-div flex w-full h-[7rem] mt-6 md:w-[100%]  md:h-[10rem]  md:mt-10 ">
          <div className="left w-3/4 md:w-[70%] h-[6rem] pl-2 md:pl-6">
            <h1 className="font-bold text-md md:text-[35px] mb-2 md:mb-6">
              SBN SENIOR SECONDARY SCHOOL
            </h1>
            <h5 className="text-sm md:text-[32px]">10th class (RBSC), Percentage: 90%</h5>
          </div>
          <div className="right w-1/4 md:w-[30%] h-[6rem] mt-2 md:mt-6 ml-5 md:ml-0">
            <h5 className="text-sm md:text-[30px] md:mb-4">Choti khatu, Nagaur</h5>
            <h5 className="text-sm md:text-[30px]">2018-2019</h5>
          </div>
        </div>

        {/* Second div */}
        <div className="second-div flex w-full h-[7rem] mt-6 md:h-[10rem] md:w-[100%] md:mt-20 ">
          <div className="left w-3/4 md:w-[70%] h-[6rem] pl-2 md:pl-6 ">
            <h1 className="font-bold text-md md:text-[35px] mb-2 md:mb-6">
              SBN SENIOR SECONDARY SCHOOL
            </h1>
            <h5 className="text-sm md:text-[32px]">10th class (RBSC), Percentage: 90%</h5>
          </div>
          <div className="right w-1/4 md:w-[30%] h-[6rem] mt-2 md:mt-6 ml-5 md:ml-0">
            <h5 className="text-sm md:text-[30px] md:mb-4">Choti khatu, Nagaur</h5>
            <h5 className="text-sm md:text-[30px]">2018-2019</h5>
          </div>
        </div>

        {/* Third div */}
        <div className="third-div flex w-full h-[7rem] mt-6 md:w-[100%]  md:h-[10rem] md:mt-20">
          <div className="left w-3/4 md:w-[70%] h-[6rem] pl-2 md:pl-6 ">
            <h1 className="font-bold text-md md:text-[35px] mb-2 md:mb-6">
              GLOBAL INSTITUTE OF TECHNOLOGY
            </h1>
            <h5 className="text-sm md:text-[32px]">B-tech in Computer Science and Engineering: CGPA-8.02/10</h5>
          </div>
          <div className="right w-1/4 md:w-[30%] h-[6rem] mt-2 md:mt-5 ml-5 md:ml-0">
            <h5 className="text-sm md:text-[30px] md:mb-4">Jaipur, Rajasthan, India</h5>
            <h5 className="text-sm md:text-[30px]">2021-2025</h5>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Educationcontent;
