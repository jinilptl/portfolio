import React from 'react';
import coockbook from "../../src/image1.png";

const Card = () => {
  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden p-6 m-4 ">
      <div className="imgupdiv border border-transparent p-[8px] rounded-[10px] bg-gray-800 hover:border-red-600 hover:translate-y-[-5px] transition-all duration-300">
        <div className="relative">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block">
            <img
              src={coockbook}
              alt="Project"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </a>
        </div>
      </div>
      <div className=" p-3 md:p-0 md:pt-6">
        <h3 className="text-2xl font-semibold text-white">Devflow</h3>
        <p className="mt-2 text-gray-400 text-justify">
          DevOverflow is a complex Q&A platform for devs to ask questions, share knowledge, and learn from each other.
        </p>
        <div className="mt-4 flex space-x-2">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.17c-3.338.727-4.033-1.415-4.033-1.415-.546-1.388-1.332-1.758-1.332-1.758-1.087-.744.083-.729.083-.729 1.204.084 1.837 1.236 1.837 1.236 1.07 1.835 2.808 1.305 3.492.997.107-.774.42-1.305.762-1.605-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.652.242 2.873.12 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.804 5.623-5.476 5.92.43.372.81 1.104.81 2.223v3.293c0 .32.216.694.825.576C20.565 21.798 24 17.302 24 12 24 5.373 18.627 0 12 0z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 ml-3" viewBox="0 0 24 24">
              <path d="M19.998 3A2 2 0 0 1 22 5v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h15.998zM8.186 19v-8.378H5.329V19h2.857zm-1.429-9.533c-.952 0-1.571-.629-1.571-1.428 0-.807.629-1.429 1.607-1.429.952 0 1.572.622 1.572 1.429-.018.799-.62 1.428-1.608 1.428zm12.142 9.533v-4.572c0-2.34-1.247-3.429-2.91-3.429-1.339 0-1.905.739-2.238 1.292V10.62H11.83v8.378h2.857v-4.585c0-.241.018-.481.087-.658.192-.481.63-.981 1.365-.981.96 0 1.344.739 1.344 1.818V19h2.857z"/>
            </svg>
          </a>
        </div>
        <div className="mt-6 flex flex-wrap space-x-2 ">
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white md:mb-0 mb-4">NextJs</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white md:mb-0 mb-4">Tailwind CSS</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white md:mb-0 mb-4">Clerk</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white md:mb-0 mb-4">MongoDB</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
