import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function Nav() {
  return (
    <div className=" flex justify-between items-center w-full absolute z-10 mt-5 ">
      {/* Left side - Logo */}
      <div className="pl-4">
        <Link to="/" className="text-[#890465] font-thin text-sm">
        <img src={`${process.env.PUBLIC_URL}/images/logoprojects.png`} className=' w-[25%] ml-4' />
        </Link>
      </div>

      {/* Right side - Navigation */}
      {/* <div className="pr-4 pt-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-[#890465] font-thin text-sm">HOME</Link>
          </li>
          <li>
            <a href="#about" className="text-[#890465] font-thin text-sm">ABOUT</a>
          </li>
        
          <li>
            <a href="#footer" className="text-[#890465] font-thin text-sm">CONTACT</a>
          </li>
          
        </ul>
      </div> */}
    </div>
  );
}

export default Nav;

