import Experiencecontent1 from "./experiencecontent1";
import Experiencecontent2 from "./experiencecontent2";
import Experiencecontent3 from "./experiencecontent3";
let Experiencemain = () => {
  return (
    <div className=" mt-10">

      <div className=" min-h-screen ">

        <div className=" text-center mb-10  h-16">
          <h1 className=" text-5xl font-bold text-black ">Experience </h1>
        </div>

        <div className="maincontent">
        <div className="firstcontent flex md:justify-start">
            <Experiencecontent1></Experiencecontent1>
            </div>

            <div className="secondcontent flex md:justify-end mt-16">
                <Experiencecontent2></Experiencecontent2>
            </div>

            <div className="thirdcontent flex md:justify-start mt-16">
                <Experiencecontent3></Experiencecontent3>
            </div>
        </div>




      
      </div>
 </div>
  );
};

export default Experiencemain;
