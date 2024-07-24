import { FaGithub, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

let Allicon=()=>{
    return(
        

        <div className='mb-3 flex w-64 h-auto justify-between align-middle'>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-blue-600 hover:text-[#cdb4db] md:size-11 size-9" />
            
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="text-blue-400 hover:text-[#cdb4db] md:size-11 size-9" />
                
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-blue-700 hover:text-[#cdb4db] md:size-11 size-9" />
                
            </a>
            <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
                <SiLeetcode  className="text-gray-800 hover:text-[#cdb4db] md:size-11 size-9" />
                
            </a>
        
        </div>

        
    )
}

export default Allicon;