import React, { useState, useEffect } from "react";
import projectsData from "../data/projects.json";
import NavProjects from "../components/NavProjects";
import ProjectCard from "../components/ProjectCard";

const projects = projectsData.projects;

const AllProjects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center relative overflow-hidden bg-[#faf9fb]">
      <a
        href="#projects-grid"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#890465] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
      >
        Skip to projects
      </a>
      <NavProjects />

      <main className="w-full max-w-7xl px-6 lg:px-12 pt-32 pb-24">
        <header className="mb-16">
          <h1
            className={`text-4xl lg:text-6xl font-bold text-[#890465] mb-4 tracking-tight transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            Projects
          </h1>
          <div
            className={`w-20 h-1.5 bg-[#A1FA8F] rounded-full mb-6 transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 origin-left"
            }`}
          />
          <p
            className={`text-gray-600 text-base lg:text-lg leading-relaxed max-w-2xl transition-all duration-1000 delay-150 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Selected work across web development and design. Each project showcases
            a unique approach to solving user needs with modern technologies.
          </p>
        </header>

        <div
          id="projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AllProjects;
