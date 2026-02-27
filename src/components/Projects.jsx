import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import projectsData from "../data/projects.json";

function Projects() {
  const navigate = useNavigate();
  const projects = projectsData.projects;
  const displayedProjects =
    projects.filter((p) => p.featured).length > 0
      ? projects.filter((p) => p.featured)
      : projects.slice(0, 4);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className="min-h-screen bg-[#890465] text-center flex flex-col items-center py-16 px-6 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <h2
        className={`relative text-4xl md:text-5xl font-bold text-[#A1FA8F] mb-4 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        }`}
      >
        Projects
      </h2>
      <div
        className={`w-16 h-1 bg-[#A1FA8F] rounded-full mx-auto mb-4 transition-all duration-700 delay-75 ${
          isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}
      />
      <p
        className={`relative text-white/80 text-lg mb-12 max-w-xl mx-auto transition-all duration-700 delay-100 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        Selected work across web development and design
      </p>

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {displayedProjects.map((project, index) => {
            const imageSrc = project.image?.startsWith("http")
              ? project.image
              : `${process.env.PUBLIC_URL || ""}${project.image}`;
            return (
              <article
                key={project.id}
                className={`group transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/25 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1">
                  {/* Image container */}
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A1FA8F] focus-visible:ring-offset-4 rounded-t-2xl"
                    aria-label={`View ${project.title} live site`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-white/5 flex items-center justify-center">
                      <img
                        src={imageSrc}
                        alt={`${project.title} project screenshot`}
                        loading="lazy"
                        className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = `${process.env.PUBLIC_URL || ""}/images/skillspic.png`;
                          e.target.onerror = null;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#890465]/90 via-[#890465]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {project.status === "in-development" && (
                        <span className="absolute top-4 right-4 px-3 py-1.5 bg-[#A1FA8F] text-[#890465] text-xs font-bold uppercase tracking-wider rounded-full">
                          In Development
                        </span>
                      )}
                      </div>
                  </a>

                  {/* Content */}
                  <div className="p-6">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#A1FA8F] transition-colors mb-2">
                        {project.title}
                      </h3>
                    <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      {project.technologies?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 bg-white/10 text-white/90 rounded-lg text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3 mt-4">
                      <a
                        href={project.deployedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#A1FA8F] text-[#890465] rounded-lg text-sm font-semibold hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A1FA8F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#890465]"
                      >
                        Live page
                        <ArrowUpRight className="w-4 h-4" aria-hidden />
                      </a>
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 text-white rounded-lg text-sm font-semibold hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#890465]"
                      >
                        <Github className="w-4 h-4" aria-hidden />
                        View code
                      </a>
                    </div>
                    </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => navigate("/allprojects")}
        className={`relative mt-14 px-8 py-4 font-semibold bg-[#A1FA8F] text-[#890465] rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A1FA8F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#890465] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "400ms" }}
      >
        See All Projects
      </button>
    </div>
  );
}

export default Projects;
