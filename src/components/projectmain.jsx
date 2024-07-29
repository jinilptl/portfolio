import Cardmain from "./cardmain";

let Projectmain=()=>{

    return (
        <div className=" h-auto ">
        <div className=" text-center md:mb-10  h-16">
            <h1 className=" md:text-5xl text-3xl font-bold text-white opacity-80 ">Most Popular Projects</h1>
        </div>


      <div className="carddiv ">
        <div className="1stcardmain ">
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