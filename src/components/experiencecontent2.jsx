import { GoDotFill } from "react-icons/go";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


let Experiencecontent2 = () => {
  useEffect(() => {
    AOS.init();
}, []);

    return (
      <div className="main md:w-[800px] md:h-[320px] mr-5 md:ml-5 ml-1 " data-aos="flip-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
        <div className="md:w-[795px] md:h-[310px] w-[330px] h-[250px]  rounded-[10px] md:p-[10px] border border-customPurple shadow-custom2 p-[5px]">

          <div className="heading md:mb-0 mb-3 ">
            <div className="firstheading w-full md:h-[62px] ">
              <h1 className="md:text-[36px] font-bold font-roboto text-[25px]">Web Security Intern(Paid)</h1>
            </div>
            <div className="secondheading md:w-[215px] md:h-[48px] md:mt-[-8px]">
              <h1 className="md:text-[24px] font-medium font-roboto text-[22px]">SecureLayer7</h1>
            </div>
          </div>


          <div className="paradiv  md:h-[65%] flex flex-col justify-around items-center ">

            <div className="firstpara flex md:w-[656px] md:h-[35px] items-center md:mb-0 mb-4">

             <p className="md:text-[20px] text-[20px]"><GoDotFill /></p>
              <p className="para md:text-[20px] text-[17px] font-normal ml-3 ">
              Secure a paid  internship in 1st year of college in the field of cybersecurity.
              </p>
            </div>

             <div className="secondpara  flex  md:w-[656px] md:h-[55px] items-center leading-5 md:mb-0 mb-4">

             <p className="text-[20px]"><GoDotFill /></p>
              <p className="para md:text-[20px] text-[17px] font-normal ml-3">
              Work on Web Application Security for company client.</p>
            </div>

        

          
          </div>
        </div>
      </div>
    );
  }
  
  export default Experiencecontent2;
  