import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function Nav() {
  return (
    <div className="flex justify-between items-center w-full absolute ">
      {/* Left side - Logo */}
      <div className="pl-4 pt-4">
        <img src={`${process.env.PUBLIC_URL}/images/logoprojects.png`} className='w-2/3 md:1/2' />
      </div>

      {/* Right side - Navigation */}
      <div className="pr-4 pt-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-[#890465] font-thin text-sm">HOME</Link>
          </li>
          <li>
            <Link to="/about" className="text-[#890465] font-thin text-sm">ABOUT</Link>
          </li>
          <li>
            <Link to="/allprojects" className="text-[#890465] font-thin text-sm">PROJECTS</Link>
          </li>
          <li>
            <Link to="/contact" className="text-[#890465] font-thin text-sm">CONTACT</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Nav;

