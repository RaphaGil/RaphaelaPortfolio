import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

function Home() {
  // State to control the appearance effect
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setTimeout(() => {
      setIsVisible(true);
    }, 200); // Delay for smooth effect
  }, []);

  return (
    <div className="relative md:flex h-auto min-h-screen overflow-auto">
      {/* Left div taking a bit more than half */}
      <div className="md:w-[85%] lg:w-[90%] bg-[#890465] flex items-center md:h-screen">
        <div className="m-12 md:m-10 mt-40 md:w-3/5 lg:pl-16">
          {/* Animated H1 */}
          <h1
            className={`text-[#A1FA8F] font-Montserrat font-bold text-4xl md:text-5xl transition-all duration-1000 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            Frontend
          </h1>

          <h1
            className={`text-[#A1FA8F] font-bold text-4xl md:text-5xl transition-all duration-1000 ease-out transform delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            Developer
          </h1>

          <h3
            className={`text-white mt-4 transition-opacity duration-1000 ease-out delay-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            I focus on user experience and create intuitive UX/UI designs.
          </h3>

          <div className="flex justify-between mt-10">
            <div
              className={`text-[#A1FA8F] text-sm md:w-[45%] mr-6 transition-all duration-1000 ease-out delay-600 transform ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h4>
                Passionate about accessible web design, I’m learning to master progressive
                enhancement, intuitive design systems, and modern UI techniques.
              </h4>
            </div>

            <div
              className={`text-[#A1FA8F] text-sm md:w-[45%] transition-all duration-1000 ease-out delay-800 transform ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h4>
                Building real-world projects that deliver value, I’m eager to contribute to client
                success and continuously improve my skills.
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Right div taking the remaining width */}
      <div className="bg-[#A1FA8F] md:w-[40%] lg:w-[50%] flex justify-center items-center h-auto min-h-[50vh] md:h-screen relative">
        {/* Social Media Icons */}
        <div className="hidden md:block md:w-[15%] lg:w-[10%] absolute flex justify-center items-center right-0 top-1/2 transform -translate-y-1/2 rounded-l-md">
          <a
            href="https://github.com/RaphaGil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#890465] mx-2"
          >
            <Github size={30} strokeWidth={0.4} />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#890465] mx-2"
          >
            <Linkedin size={30} strokeWidth={0.4} />
          </a>
          <a
            href="mailto:raphaela.gil@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#890465] mx-2"
          >
            <Mail size={30} strokeWidth={0.4} />
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/RaphaelaGil_FrontendWebDeveloper.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#890465] mx-2"
          >
            <FileText size={30} strokeWidth={0.4} />
          </a>
        </div>

        {/* Mobile Image Animation */}
        <img
          src={`${process.env.PUBLIC_URL}/images/profilemobile.png`}
          alt="Profile"
          className={`block md:hidden w-[70%] max-w-[400px] absolute transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        />
      </div>

      {/* Desktop Image Animation */}
      <div
        className={`absolute top-1/4 md:left-[50%] lg:left-[55%] transition-all duration-1000 ease-out transform delay-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/profile.png`}
          alt="Profile"
          className="hidden md:block max-w-[500px]"
        />
      </div>
    </div>
  );
}

export default Home;
