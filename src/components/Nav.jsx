import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { Link, useNavigate, useLocation } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (sectionId) => {
    setIsOpen(false);
    
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="p-2 flex justify-between items-center w-full absolute z-10">
      {/* Left side - Logo */}
      <div className="md:pl-4">
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            className="w-[25%] sm:w-[20%] md:w-[22%] lg:w-[24%] xl:w-[26%] max-w-[250px] min-w-[80px]"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Menu Button */}
      <button
        className="lg:flex text-[#A1FA8F] md:text-[#890465] focus:outline-none p-4 z-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} strokeWidth={0.4} /> : <Menu size={30} strokeWidth={0.6} />}
      </button>

      {/* Mobile & Large Screen Navigation */}
      {isOpen && (
        <div className="absolute top-6 right-0 w-56 bg-white bg-opacity-10 shadow-md">
          <ul className="flex flex-col space-y-4 p-4 font-thin text-[#A1FA8F] md:text-[#890465]">
            {[ "ABOUT", "PROJECTS", "CONTACT"].map((item, index) => {
              return (
                <li key={index}>
                  {item === "PROJECTS" ? (
                    <Link
                      to="/allprojects"
                      className="block text-[#A1FA8F] md:text-[#890465] text-sm hover:underline px-4 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleSectionClick(item.toLowerCase())}
                      className="block text-[#A1FA8F] md:text-[#890465] text-sm hover:underline px-4 py-2 w-full text-left"
                    >
                      {item}
                    </button>
                  )}
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
