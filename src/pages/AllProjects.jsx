import React, { useState, useEffect } from "react";
import projects from "../data/projects.json";
import NavProjects from "../components/NavProjects";
import ProjectCard from "../components/ProjectCard";

const AllProjects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-center flex flex-col items-center relative overflow-hidden bg-[#f7f7f7]">
      <NavProjects />

      <h2
        className={`text-3xl font-bold text-[#890465] mb-8 mt-32 transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        All Projects
      </h2>

      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-8xl">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.bid}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
