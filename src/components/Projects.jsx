import React from "react";
import { useNavigate } from "react-router-dom";
import projects from "../data/projects.json";

function Projects() {
  const navigate = useNavigate();
  const displayedProjects = projects.slice(0, 4); // Show only 4 projects

  return (
    <div className="min-h-screen bg-[#890465] text-center flex flex-col items-center p-12">
      <h2 className="text-3xl font-bold text-[#A1FA8F] mb-8">Projects</h2>

      <div className="w-full lg:w-4/5 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-6">
          {displayedProjects.map((project) => (
            <div key={project.id} className="bg-white/10 p-6 rounded-lg shadow-md text-white text-left">
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
                {project.technologies.map((tech) => (
                  <li key={tech} className="bg-[#890465] text-white opacity-90 px-3 py-1 rounded-md text-sm">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* See More Button */}
      <button
        onClick={() => navigate("/allprojects")} // Navigate to the /all-projects route
        className="mt-6 px-6 py-3 bg-[#A1FA8F] text-black font-semibold rounded-md hover:opacity-80 transition"
      >
        See More Projects
      </button>
    </div>
  );
}

export default Projects;
