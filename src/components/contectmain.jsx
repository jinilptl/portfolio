import Contactform from "./contectform"
import Contecth1 from "./contecth1";
import Allicon from "./icon";


let Contectmain = () => {
  return (
    <div>

      <div className="  min-h-screen  md:pt-6 pt-3  ">
      <div className="flex justify-center">
      <div className="darkbg bg-[rgba(51,51,51,0.98)] md:w-[88%] w-[98%] md:h-[600px] h-[420px] md:ml-3 md:rounded-custom1 rounded-custom2"></div>
      </div>
      <div className="maincontent flex flex-col md:justify-between  h-[850px] md:mt-[-550px] mt-[-370px] items-center m-10">
        <Contecth1></Contecth1>
        <Contactform></Contactform>
        <Allicon></Allicon>
        
      </div>
        



      </div>
    </div>
  );
};

export default Contectmain;
