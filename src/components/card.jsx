import coockbook from "../../src/image1.png"

let Card =()=>{
    return (
      <div className=" bg-[#333333FA] rounded-[10px] md:h-[360px] md:w-[350px] flex justify-center w-[93%] h-[320px] md:ml-0 ml-3 md:mt-0 mt-40">
        <div className="carditem flex flex-col bg-white text-black md:h-[390px] md:w-[300px] md:pl-[30px]  mt-[-60px] shadow-custom2 rounded-[10px] w-[88%] h-[350px] pl-6">

           <div className="imgdiv ">
            <img src={coockbook} className="md:h-[160px] md:w-[90%] h-[120px] w-[90%]  object-cover rounded-[5px] border border-red-700"></img>

           </div>

           
            <h2 className="md:text-[35px] text-[25px] font-bold mt-3"> coockbook</h2>
           

           <div className="textdiv md:w-[85%] w-[75%] mt-1">
            
            <p className="md:text-[17px] md:leading-6 leading-5  "> Using React , Tailwind CSS, Typescript, Nest.js, Express, API, Sequelize, PostgreSQL, Javascript, JWT authentication.</p>

           </div>



           <div className="btndiv  mt-4">
          
           <a href="#" class="bg-gray-800 text-white font-sm py-2 px-4 rounded-[10px] hover:bg-gray-700 inline-block h-[40px] w-[150px] text-center">
           Read more
         </a>

           </div>
           </div>
</div>
    )
}

export default Card;