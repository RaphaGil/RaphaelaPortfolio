import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2 flex justify-between items-center w-full absolute z-10">
      {/* Left side - Logo */}
      <div className="pl-4">
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          className="w-[25%] sm:w-[20%] md:w-[22%] lg:w-[24%] xl:w-[26%] max-w-[250px] min-w-[80px]"
          alt="Logo"
        />
      </div>

      {/* Menu Button - Always Visible */}
      <button
        className="lg:flex text-[#A1FA8F] md:text-[#890465] focus:outline-none p-4 z-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} strokeWidth={0.4} /> : <Menu size={30} strokeWidth={0.6} />}
      </button>

      {/* Mobile & Large Screen Navigation (Hidden by Default) */}
      {isOpen && (
        <div className="absolute top-6 right-0 w-56 bg-white bg-opacity-10 shadow-md  ">
          <ul className="flex flex-col space-y-4 p-4 font-thin text-wtext-[#A1FA8F] md:text-[#890465]">
            {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((item, index) => {
              // Custom paths for "HOME" and "PROJECTS"
              let path = `/${item.toLowerCase()}`;
              if (item === "HOME") path = "/"; // Set HOME to "/"
              if (item === "PROJECTS") path = "/allprojects"; // Set PROJECTS to "/allprojects"

              return (
                <li key={index}>
                  <a
                    href={path}
                    className="block text-[#A1FA8F] md:text-[#890465] text-sm hover:text-[#590465] px-4 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
