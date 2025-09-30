import React from "react";

const ProjectCard = ({ project, index, isVisible }) => {
  return (
    <div
      key={project.bid}
      className={`md:p-10 m-4 rounded-lg text-white text-left transform transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative bg-[#890465] rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl lg:h-[100%]">
        {/* <img
          src={project.image}
          className="w-full h-58 object-cover opacity-90 transition-opacity duration-500 hover:opacity-100"
          alt={project.title}
          loading="lazy"
        /> */}
        <div className="p-6">
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
          <p className="font-thin text-gray-100">{project.description}</p>
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
  );
};

export default ProjectCard;
