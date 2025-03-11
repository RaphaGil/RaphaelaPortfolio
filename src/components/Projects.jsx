import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import projects from "../data/projects.json";

function Projects() {
  const navigate = useNavigate();
  const displayedProjects = projects.slice(0, 4); // Show only 4 projects
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="min-h-screen bg-[#890465] text-center flex flex-col items-center p-12">
      <h2
        className={`mt-10 text-3xl font-bold text-[#A1FA8F] mb-8 transition-all duration-1000 ease-out transform ${
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
                  ? "opacity-100 translate-x-0"
                  : index % 2 === 0
                  ? "opacity-0 -translate-x-40"
                  : "opacity-0 translate-x-40"
              }`}
            >
              <h3 className="font-bold text-2xl pb-4">
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#A1FA8F]">
                  {project.title}
                </a>
              </h3>
              <p className="font-thin text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate("/allprojects")}
        className="mt-6 px-6 py-3 font-thin bg-[#A1FA8F] text-black rounded-md hover:opacity-80 transition-all duration-1000 ease-out transform delay-1000"
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
