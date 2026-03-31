import React from "react";
import { Github, Linkedin, Mail, ChevronUp } from "lucide-react"; // Import icons
// import { Link } from "react-router-dom";

function Footer() {
  // const [isOpen, setIsOpen] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="footer"
      className="bg-[#A1FA8F] py-10 md:py-12 flex flex-col justify-between px-6 md:px-12"
    >
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[#890465] text-[#A1FA8F] text-sm font-semibold shadow-lg hover:bg-[#6f0352] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#890465] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        aria-label="Scroll to top"
      >
        <ChevronUp size={18} />
  
      </button>

      {/* Container for footer content */}
      <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 flex-grow">
        {/* Left side - Info Section */}
        <div className="text-left w-full md:w-2/4 mr-6">
          <h3 className="text-gray-800 md:text-xl font-bold">RAPHAELA GIL</h3>
          <p className="text-gray-700 text-sm md:text-base font-light mt-2 leading-relaxed">
            A Frontend focused Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product.
          </p>
        </div>

        {/* Right side - Social Section */}
        <div className="w-full md:w-1/3">
        
          <div className="flex gap-4 justify-end">
            {/* GitHub */}
            <a
              href="https://github.com/RaphaGil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#890465] transition-colors p-1 rounded hover:scale-110"
              aria-label="Github"
            >
              <Github size={30} strokeWidth={0.4} />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#890465] transition-colors p-1 rounded hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={30} strokeWidth={0.4} />
            </a>
            {/* Email */}
            <a
              href="mailto:raphaela.gil@yahoo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#890465] transition-colors p-1 rounded hover:scale-110"
              aria-label="Email"
            >
              <Mail size={30} strokeWidth={0.4} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
       
      </div>

      {/* Footer text at the bottom */}
      <div className="w-full flex justify-center mt-10 md:mt-0 border-t-2 border-[#890465] pt-4">
        <p className="text-gray-900 font-thin text-sm">
          © 2026 Raphaela Gil - All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
