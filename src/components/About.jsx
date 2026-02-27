import React, { useState, useEffect, useRef } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiNodedotjs,
  SiSupabase,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { FaCode, FaMobileAlt, FaTachometerAlt, FaUniversalAccess, FaSearch, FaTerminal } from "react-icons/fa";
import { FileText, MapPin } from "lucide-react";

const SKILL_ICONS = {
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Tailwind: SiTailwindcss,
  Bootstrap: SiBootstrap,
  jQuery: SiJquery,
  "Node.js": SiNodedotjs,
  Supabase: SiSupabase,
  APIs: FaCode,
  Git: SiGit,
  GitHub: SiGithub,
  Terminal: FaTerminal,
  Figma: SiFigma,
  "Fabric.js": FaCode,
  "Responsive Design": FaMobileAlt,
  "Performance Optimization": FaTachometerAlt,
  Accessibility: FaUniversalAccess,
  SEO: FaSearch,
  Cursor: FaCode,
};

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Reference to the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Activate animation when section appears
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    const element = sectionRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      id="about"
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col items-center justify-center p-6 md:p-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="w-full max-w-6xl">
        {/* Section header */}
        <div
          className={`mb-12 text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#890465] tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#A1FA8F] rounded-full mx-auto mt-4" />
          <p className="mt-4 inline-flex items-center gap-2 text-gray-500 text-sm">
            <MapPin size={16} className="text-[#890465]" />
            Based in London, UK
          </p>
        </div>

        <div className="space-y-12">
          {/* About Me - 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div
              className={`bg-white rounded-2xl p-8 lg:p-10 shadow-lg shadow-gray-200/60 border border-gray-100 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="text-lg font-semibold text-[#890465] mb-6">My approach</h3>
              <p className="text-gray-600 text-base leading-loose max-w-prose">
                I'm driven by curiosity and a desire to understand the "why" behind everything I do — always considering the impact of my work.
              </p>
              <p className="text-gray-600 text-base leading-loose max-w-prose mt-6">
                Beyond writing code, I enjoy understanding the business behind a product: the brand, its goals, and how technology can support growth and create real value. As a creative and analytical thinker, I solve problems and refine processes through thoughtful, innovative solutions.
              </p>
            </div>
            <div
              className={`bg-white rounded-2xl p-8 lg:p-10 shadow-lg shadow-gray-200/60 border border-gray-100 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              <h3 className="text-lg font-semibold text-[#890465] mb-6">Experience & growth</h3>
              <p className="text-gray-600 text-base leading-loose max-w-prose">
                After earning my Frontend Web Developer certification through edX, I completed two internships and delivered two freelance projects — translating client needs into functional, responsive, and user-friendly web applications.
              </p>
              <p className="text-gray-600 text-base leading-loose max-w-prose mt-6">
                My passion for coding began with "Hello World," and I'm now deepening my skills in backend development to build complete, end-to-end solutions. I thrive in collaborative environments, constantly learning and contributing ideas to create meaningful digital products.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div
            className={`bg-white rounded-2xl p-8 lg:p-10 shadow-lg shadow-gray-200/60 border border-gray-100 transition-all duration-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-[#890465]">Skills & tools</h2>
                <p className="text-gray-500 text-sm mt-1">Technologies I work with</p>
              </div>
              
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Frontend */}
              <div className="rounded-xl bg-[#890465]/5 p-6 border border-[#890465]/10">
                <h3 className="text-sm font-bold text-[#890465] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A1FA8F]" />
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "Bootstrap", "jQuery"].map((skill) => {
                    const Icon = SKILL_ICONS[skill];
                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white text-[#890465] rounded-lg text-xs font-medium shadow-sm border border-[#890465]/10"
                      >
                        {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Backend & Tools */}
              <div className="rounded-xl bg-[#890465]/5 p-6 border border-[#890465]/10">
                <h3 className="text-sm font-bold text-[#890465] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A1FA8F]" />
                  Backend & tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Supabase", "APIs", "Git", "GitHub", "Terminal"].map((skill) => {
                    const Icon = SKILL_ICONS[skill];
                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white text-[#890465] rounded-lg text-xs font-medium shadow-sm border border-[#890465]/10"
                      >
                        {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Design & Other */}
              <div className="rounded-xl bg-[#890465]/5 p-6 border border-[#890465]/10">
                <h3 className="text-sm font-bold text-[#890465] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A1FA8F]" />
                  Design & other
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Fabric.js", "Responsive Design", "Performance Optimization", "Accessibility", "SEO", "Cursor"].map((skill) => {
                    const Icon = SKILL_ICONS[skill];
                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white text-[#890465] rounded-lg text-xs font-medium shadow-sm border border-[#890465]/10"
                      >
                        {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
