import Allicon from "./icon";
import Primarybtn from "./primarybtn";
import myimage from "./../../src/image.png"


let Homemain=()=>{
    return(
        <div>
    <div className="flex md:flex-row md:p-4 min-h-screen md:ml-16 md:mr-16 flex-col items-center ">
      
        <div className="leftbox md:w-1/2 w-[80%] md:pt-4 md:pb-4 md:pl-4  flex flex-col md:justify-center  items-start space-y-4 md:mt-0 mt-10 h-auto">
        <div className=" md:w-full">
        <h1 className=" md:text-5xl text-3xl font-bold">Hi, I am Surendra Pandar</h1>
       </div>
            
            <div className="">
            <h2 className="md:text-4xl text-2xl font-semibold">Full Stack Developer</h2>
            </div>
           

            <div className="">
            <p className="md:text-3xl text-xl text-gray-700">I am full stack developer, i am currently working at wisflux tech labs as full stack developer</p>
            </div>
            

            <div className="flex w-[85%] md:pb-0 pb-3 ">
            
           <Allicon></Allicon>
                
            </div>
  
           <div className="">
            <Primarybtn></Primarybtn>
           </div>

        </div>
       
        <div className="rightbox md:w-1/2  flex justify-center md:mt-0 mt-5">
        <img src={myimage} alt="Profile " className=""   />
        </div>
    </div>

        </div>
    )
}

export  default Homemain;