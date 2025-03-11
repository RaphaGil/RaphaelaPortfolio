import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import projects from "../data/projects.json";

function Projects() {
  const navigate = useNavigate();
  const displayedProjects = projects.slice(0, 4); // Show only 4 projects
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, []);

  return (
    <div className="min-h-screen bg-[#890465] text-center flex flex-col items-center p-12">
      {/* Heading slides down from the top */}
      <h2
        className={`text-3xl font-bold text-[#A1FA8F] mb-8 transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
        }`}
      >
        Projects
      </h2>

      <div className="w-full lg:w-4/5 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white/10 p-6 rounded-lg shadow-md text-white text-left transition-all duration-1000 ease-out transform delay-${index * 200 + 300} ${
                isVisible
                  ? index % 2 === 0
                    ? "opacity-100 translate-x-0" // Even-indexed projects slide in from left
                    : "opacity-100 translate-x-0" // Odd-indexed projects slide in from right
                  : index % 2 === 0
                  ? "opacity-0 -translate-x-40" // Start position for left slide
                  : "opacity-0 translate-x-40" // Start position for right slide
              }`}
            >
              {/* Title with Image Next to It */}
              <div className="flex items-center space-x-4">
                <h3 className="font-bold text-2xl pb-4">
                  <a
                    href={project.deployedLink} // Link to the project's website
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Security best practice
                    className="text-white hover:text-[#A1FA8F]"
                  >
                    {project.title}
                  </a>
                </h3>
              </div>
              <p className="font-thin text-gray-300">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, techIndex) => (
                  <li
                    key={tech}
                    className={`bg-[#890465] text-white opacity-90 px-3 py-1 rounded-md text-sm transition-all duration-1000 ease-out transform delay-${techIndex * 100} ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* See More Button slides up from below */}
      <button
        onClick={() => navigate("/allprojects")} // Navigate to the /all-projects route
        className="mt-6 px-6 py-3 font-thin bg-[#A1FA8F] text-black  rounded-md hover:opacity-80 transition-all duration-1000 ease-out transform delay-1000"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
        }}
      >
        See More Projects
      </button>
    </div>
  );
}

export default Projects;
