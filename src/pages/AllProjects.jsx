import React, { useState, useEffect } from "react";
import projects from "../data/projects.json";
import NavProjects from "../components/NavProjects";

function AllProjects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  return (
    <div className="min-h-screen text-center flex flex-col items-center relative overflow-hidden bg-[#f7f7f7]">
      <NavProjects />

      {/* Fading Background Overlay */}
     

      {/* Heading with Slide-in Effect */}
      <h2
        className={`text-3xl font-bold text-[#890465] mb-8 mt-32 transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        All Projects
      </h2>

      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-8xl  ">
          {projects.map((project, index) => (
            <div
              key={project.bid}
              className={`p-10 m-4  rounded-lg text-white text-left transform transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }} // Staggered slide-in animation
            >
              {/* Card with Floating Hover Effect */}
              <div className="relative bg-[#890465] rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 lg:h-[600px]">
                {/* Project Image */}
                <img
                  src={project.image}
                  className="w-full h-58 object-cover opacity-90 transition-opacity duration-500 hover:opacity-100"
                  alt={project.title}
                />

                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="font-bold text-2xl pb-4 text-white">
                    <a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#A1FA8F] transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>

                  {/* Project Description */}
                  <p className="font-thin text-gray-100">{project.description}</p>

                  {/* Technologies Used */}
                  <ul className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="bg-[#A1FA8F]/20 text-white px-3 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* View Project Button */}
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm mt-4 font-thin inline-block px-3 py-3 bg-[#A1FA8F] text-black rounded-md hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
