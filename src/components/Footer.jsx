import React from 'react';
import { Github, Linkedin, Mail } from "lucide-react"; // Import icons

function Footer() {
  return (
    <div className='bg-[#A1FA8F] py-10 h-fit md:h-[300px] flex flex-col justify-between px-6'>
      {/* Container for footer content */}
      <div className='flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 flex-grow'>
        
        {/* Left side - Info Section */}
        <div className='text-left w-full md:w-2/4 mr-6'>
          <h3 className='text-gray-800 md:text-xl font-bold'>RAPHAELA GIL</h3>
          <p className='text-gray-800 text-sm md:text-mdfont-thin mt-2'>
            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.
          </p>
        </div>

        {/* Right side - Social Section */}
        <div className='w-full md:w-1/3'>
          <h3 className='text-left text-gray-800 md:text-xl font-bold mb-2'>SOCIAL</h3>
          <div className='flex space-x-4'>
            {/* GitHub */}
            <a
              href="https://github.com/RaphaGil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#890465] transition-colors"
              aria-label="Github"
            >
              <Github size={30} strokeWidth={0.4} />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#6b0c3b] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={30} strokeWidth={0.4} />
            </a>
            {/* Email */}
            <a
              href="mailto:raphaela.gil@yahoo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#6b0c3b] transition-colors"
              aria-label="Email"
            >
              <Mail size={30} strokeWidth={0.4} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className='w-full md:w-1/4'>
        <h3 className='text-gray-800 md:text-xl font-bold'>MENU</h3>
          <ul className="flex flex-col space-y-2 font-thin text-gray-800 text-sm md:text-md mt-2">
            {["Home", "About", "Projects", "Contact"].map((item) => {
              let path = `/${item.toLowerCase()}`;
              if (item === "HOME") path = "/";
              if (item === "PROJECTS") path = "/allprojects";

              return (
                <li key={item}>
                  <a href={path} className="hover:text-[#6b0c3b] transition-colors">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Footer text at the bottom */}
      <div className='w-full flex justify-center mt-10 md:mt-0 border-t-2 border-[#890465] pt-4'>
        <p className='text-gray-900 font-thin text-sm'>© 2025 Raphaela Gil - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
