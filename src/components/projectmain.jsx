import Cardmain from "./cardmain";

let Projectmain=()=>{

    return (
        <div className=" h-auto  ">
        <div className=" text-center md:mb-32  h-16">
            <h1 className=" text-5xl font-bold text-black ">Project</h1>
        </div>


      <div className="carddiv ">
        <div className="1stcardmain md:mb-[200px]">
        <Cardmain></Cardmain>
        </div>

        <div className="2ndcardmain">
        <Cardmain></Cardmain>
        </div>
        

      </div>



     </div>
    )
}

export default Projectmain;