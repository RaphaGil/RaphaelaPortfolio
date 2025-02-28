import React from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react"; // Import icons

function Home() {
  return (
    <div className="relative md:flex h-auto min-h-screen overflow-auto">
      {/* Left div taking a bit more than half */}
      <div className="md:w-[85%] lg:w-[90%] bg-[#890465] flex items-center md:h-screen">
        <div className="m-12 md:m-10 mt-40 md:w-3/5 lg:pl-16">
          <h1 className="text-[#A1FA8F] font-Montserrat font-bold">Frontend</h1>
          <h1 className="text-[#A1FA8F] font-bold">Developer</h1>
          <h3 className="text-white">
            I focus on user experience and create intuitive UX/UI designs.
          </h3>

          <div className="flex justify-between mt-10">
            <div className="text-[#A1FA8F] text-sm md:w-[45%] mr-6">
              <h4>
                Highly skilled at progressive enhancement, design systems & UI
                engineering.
              </h4>
            </div>
            <div className="text-[#A1FA8F] text-sm md:w-[45%]">
              <h4>
                Proven experience building successful products for clients
                across several countries.
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Right div taking the remaining width */}
      <div className="bg-[#A1FA8F] md:w-[40%] lg:w-[50%] flex justify-center items-center h-auto min-h-[50vh] md:h-screen relative">
        {/* Social Media Icons */}
        <div className="hidden md:block  md:w-[15%] lg:w-[10%] absolute flex justify-center items-center right-0 top-1/2 transform -translate-y-1/2 rounded-l-md">
          {/* Group of Social Media Buttons */}
          <a
            href="https://github.com/RaphaGil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#890465] mx-2"
          >
            <Github size={30} strokeWidth={0.4} /> {/* Thinner icon */}
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#890465] mx-2"
          >
            <Linkedin size={30} strokeWidth={0.4} /> {/* Thinner icon */}
          </a>
          <a
            href="mailto:raphaela.gil@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#890465] mx-2"
          >
            <Mail size={30} strokeWidth={0.4} /> {/* Thinner icon */}
          </a>
          <a
  href="/RaphaelaGil_FrontendWebDeveloper.pdf" // Replace with your actual CV file path
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#890465] mx-2"
>
  <FileText size={30} strokeWidth={0.4} />
</a>
        </div>

        {/* Mobile Image (restricted to this div) */}
        <img
          src="/profilemobile.png"
          alt="Profile"
          className="block md:hidden w-[70%] max-w-[400px] absolute"
        />
      </div>

      {/* Desktop Image (centered between both divs) */}
      <div className="absolute top-1/4 md:left-[50%] lg:left-[55%]">
        <img
          src="/profile.png"
          alt="Profile"
          className="hidden md:block max-w-[500px]"
        />
      </div>
    </div>
  );
}

export default Home;
