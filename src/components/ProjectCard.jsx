import React from "react";
import { ArrowUpRight, Github } from "lucide-react";

const ProjectCard = ({ project, index, isVisible }) => {
  const imageSrc = project.image?.startsWith("http")
    ? project.image
    : `${process.env.PUBLIC_URL || ""}${project.image}`;

  return (
    <article
      key={project.id}
      className={`group transform transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:shadow-[#890465]/10 hover:border-[#890465]/20 transition-all duration-300 hover:-translate-y-2 flex flex-col w-full">
        {/* Image container - aspect ratio 4/3 for consistency */}
        <a
          href={project.deployedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#890465] focus-visible:ring-offset-4 rounded-t-2xl"
          aria-label={`View ${project.title} live site`}
        >
          <div className="relative w-full flex-shrink-0 aspect-[4/3] overflow-hidden bg-gray-50 flex items-center justify-center">
            <img
              src={imageSrc}
              className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              alt={`${project.title} project screenshot`}
              loading="lazy"
              onError={(e) => {
                e.target.src = `${process.env.PUBLIC_URL || ""}/images/skillspic.png`;
                e.target.onerror = null;
              }}
            />
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#890465]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            {/* Status badge */}
            {project.status === "in-development" && (
              <span className="absolute top-4 right-4 px-3 py-1.5 bg-[#A1FA8F] text-[#890465] text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                In Development
              </span>
            )}
          </div>
        </a>

        {/* Content */}
        <div className="flex-1 flex flex-col p-6 lg:p-7">
          <h3 className="text-xl lg:text-2xl font-bold text-[#890465] mb-3 group-hover:text-[#6b0350] transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>
          {project.technologies?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-[#890465]/8 text-[#890465] rounded-lg text-xs font-medium hover:bg-[#890465]/15 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mt-auto">
            <a
              href={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#890465] text-white rounded-lg text-sm font-semibold hover:bg-[#6b0350] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#890465] focus-visible:ring-offset-2"
            >
              Live page
              <ArrowUpRight className="w-4 h-4" aria-hidden />
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-100 text-[#890465] rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#890465] focus-visible:ring-offset-2"
            >
              <Github className="w-4 h-4" aria-hidden />
              View code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
