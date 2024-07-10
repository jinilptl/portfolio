

let Contactform = () => {
    return (
      <div className="md:w-[78%] w-full bg-white rounded-[10px] md:h-[70%] md:pl-6 shadow-custom2 md:mt-0 mt-16 md:mb-0 mb-16">
        <form className=" md:w-[75%]  md:px-8 px-4 pt-6 pb-8 flex flex-col justify-between h-[90%]">
          
          <div className="md:mb-0 mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className=" shadow-custom2 appearance-none rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline md:placeholder:text-[25px]"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
  
          <div className="md:mb-0 mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className=" shadow-custom2 appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline md:placeholder:text-[25px]"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
  
          <div className="md:mb-0 mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2 " htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow-custom2 appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline md:placeholder:text-[25px] "
              id="message"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
  
          <div className="flex items-center justify-end md:mt-0 ">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    );
  };
  
  export default Contactform;
  