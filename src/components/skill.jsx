


let Skill=({heading,image})=>{
    return(
        <div className="skillcontainer h-[70px] w-[250px] md:h-[88px] md:w-[300px] flex md:justify-between justify-evenly pl-1 pr-1 bg-white opacity-85 shadow-custom2 rounded-[5px] md:mb-0 mb-10 ">
            <div className="leftskill  md:w-[30%] md:h-[75px] flex items-center md:ml-4 md:mr-0 mr-5">
                <img src={image} className=" md:h-[70px] md:w-[71px] h-[50px] w-[52px]"></img>
            </div>
            <div className="rightskill   md:w-[50%] md:h-[88px] w-[47%] flex items-center md:mr-2 md:leading-7 leading-5 ">
                <h1 className=" md:text-[22px] font-bold font-roboto text-[18px]">{heading}</h1>
            </div>
        </div>
    )
}

export default Skill;