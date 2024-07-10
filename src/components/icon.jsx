import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram  } from 'react-icons/fa';

let Allicon=()=>{
    return(
        

        <div className='mb-3 flex w-64 h-auto justify-between align-middle'>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-600 hover:text-blue-800 md:size-11 size-9" />
            
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400 hover:text-blue-600 md:size-11 size-9" />
                
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-blue-700 hover:text-blue-900 md:size-11 size-9" />
                
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram  className="text-gray-800 hover:text-gray-900 md:size-11 size-9" />
                
            </a>
        
        </div>

        
    )
}

export default Allicon;