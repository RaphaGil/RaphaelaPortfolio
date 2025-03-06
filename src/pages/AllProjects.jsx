import React from "react";
import projects from "../data/projects.json";
import NavProjects from '../components/NavProjects'
function AllProjects() {
  return (
    <div className="min-h-screen text-center flex flex-col items-center ">
      <NavProjects />
      <h2 className="text-3xl font-bold text-[#890465] mb-8 mt-32">All Projects</h2>
      <img src={`${process.env.PUBLIC_URL}/images/aboutmepic.png`} alt="About Me" className="absolute  " />

      <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2  md:gap-4 w-full   bg-[#890465] ">

          {projects.map((project) => (
            
            <div key={project.bid}   className=" p-8 md:m-20 rounded-lg text-white text-left transform transition-all duration-300 ease-in-out hover:scale-105 hover:translate-x-2 hover:translate-y-2  mb-10">
              
              {/* Title with Image Next to It */}
              <div className="flex-row items-center md:space-x-4 ">
              <div className="mb-4 ">
                <img src={project.image}></img>
              </div>
                <h3 className="font-bold text-2xl pb-4">
                  <a
                    href={project.deployedLink} // Link to the project's website
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Security best practice
                    className=" text-white hover:text-[#A1FA8F]"
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
                  className="inline-block bg-[#A1FA8F] px-4 py-2 rounded-lg shadow-md transition-transform hover:scale-105   p-2 text-sm text-[#890465]"
                >
                  View Project
                </a>
              </div>
              <p className="font-thin text-gray-200 mt-4">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <li key={tech} className="bg-[#890465] text-white opacity-50  px-3 py-1 rounded-md text-sm">
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
