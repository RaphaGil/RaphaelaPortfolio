import React from "react";
import projects from "../data/projects.json";
import NavProjects from '../components/NavProjects'
function AllProjects() {
  return (
    <div className="min-h-screen text-center flex flex-col items-center ">
      <NavProjects />
      <h2 className="text-3xl font-bold text-[#890465] mb-8 mt-32">All Projects</h2>

      <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 w-full p-8 md:p-6 mr-4">

          {projects.map((project) => (
            
            <div key={project.bid}   className=" p-10 rounded-lg text-white text-left transform transition-all duration-300 ease-in-out hover:scale-105 hover:translate-x-2 hover:translate-y-2  hover:bg-[#A1FA8F] hover:bg-opacity-20">
              
              {/* Title with Image Next to It */}
              <div className="flex items-center space-x-4 ">
              <di>
                <img src={project.image}></img>
              </di>
                <h3 className="font-bold text-2xl pb-4">
                  <a
                    href={project.deployedLink} // Link to the project's website
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Security best practice
                    className=" text-[#890465] hover:text-[#6b0c3b]"
                  >
                    {project.title}
                  </a>
                </h3>
              
          
              </div>
              <div className="mt-6">
                <a
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#890465] px-4 py-2 rounded-lg shadow-md transition-transform hover:scale-105  hover:bg-[#6b0c3b] p-2 text-sm"
                >
                  View Project
                </a>
              </div>
              <p className="font-thin text-gray-900 mt-4">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <li key={tech} className="bg-[#890465] text-white opacity-80 px-3 py-1 rounded-md text-sm">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
