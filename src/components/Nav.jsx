import React, { useState } from "react";
import { Menu, X, FileDown } from "lucide-react"; 
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

      {/* Right side - CV button + Menu */}
      <div className="flex items-center gap-2">
        <a
          href={`${process.env.PUBLIC_URL}/RaphaelaGil_FrontendEngineer.pdf`}
          download
          className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#A1FA8F] md:text-[#890465] border border-[#A1FA8F] md:border-[#890465] rounded-lg hover:bg-[#A1FA8F] md:hover:bg-[#890465] hover:text-[#890465] md:hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#890465] focus-visible:ring-offset-2"
        >
          <FileDown size={18} />
          <span className="hidden sm:inline">Download my CV</span>
        </a>
        <button
          className="lg:flex text-[#A1FA8F] md:text-[#890465] focus:outline-none p-4 z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} strokeWidth={0.4} /> : <Menu size={30} strokeWidth={0.6} />}
        </button>
      </div>

      {/* Mobile menu backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:bg-transparent md:backdrop-blur-none"
          onClick={() => setIsOpen(false)}
          aria-hidden
        />
      )}

      {/* Mobile & Large Screen Navigation */}
      {isOpen && (
        <div className="absolute top-16 right-4 w-64 rounded-2xl bg-white shadow-xl border border-gray-100 py-4 z-50">
          <ul className="flex flex-col space-y-1 px-2">
            <li>
              <a
                href={`${process.env.PUBLIC_URL}/RaphaelaGil_FrontendEngineer.pdf`}
                download
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#890465]/5 hover:text-[#890465] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <FileDown size={18} />
                Download my CV
              </a>
            </li>
            <li className="border-t border-gray-100 my-2" />
            {["ABOUT", "PROJECTS", "CONTACT"].map((item) => (
              <li key={item}>
                {item === "PROJECTS" ? (
                  <Link
                    to="/allprojects"
                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#890465]/5 hover:text-[#890465] rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleSectionClick(item.toLowerCase())}
                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#890465]/5 hover:text-[#890465] rounded-lg transition-colors w-full text-left"
                  >
                    {item}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
