import { GoDotFill } from "react-icons/go";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




let Experiencecontent3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
    return (
      <div className="main md:w-[800px] md:h-[320px] w-[330px] h-[320px] md:ml-5 ml-1" data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
        <div className="md:w-[795px] md:h-[310px] w-[330px] h-[320px]  rounded-[10px] md:p-[10px] border border-customPurple shadow-custom2 p-[5px] ">

          <div className="heading md:mb-0 mb-3 ">
            <div className="firstheading w-full md:h-[62px] ">
              <h1 className="md:text-[36px] text-[25px] font-bold font-roboto  text-white opacity-80">Technical Writer-Part Time</h1>
            </div>
            <div className="secondheading md:w-[215px] md:h-[48px] md:mt-[-8px] md:ml-0 ml-1">
              <h1 className="md:text-[24px] font-medium font-roboto text-[20px]  text-white opacity-80">Hacking Blog</h1>
            </div>
          </div>


          <div className="paradiv  md:h-[65%] flex flex-col justify-around items-center">

            <div className="firstpara flex md:w-[656px] md:h-[55px] items-center mb-6">

             <p className="md:text-[20px] text-[20px]  text-white opacity-80"><GoDotFill /></p>
              <p className="para md:text-[20px] text-[17px] font-normal md:ml-3 ml-3 md:leading-6  text-white opacity-80">
              Sharing my cybersecurity knowledge by using a known blog website(Hacking Blog) in field of cybersecurity and get paid for that.
              </p>
            </div>

             <div className="secondpara  flex  md:w-[656px] md:h-[55px] items-center leading-5">

             <p className="text-[20px]  text-white opacity-80"><GoDotFill /></p>
              <p className="para md:text-[20px] text-[17px] font-normal ml-3  text-white opacity-80">
              Work  around 4 month and almost 150 + articles.
              </p>
            </div>

             

          
          </div>
        </div>
      </div>
    );
  }
  
  export default Experiencecontent3;
  