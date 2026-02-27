import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";

const ROTATING_PHRASES = [
  "create intuitive UX/UI designs.",
  "build user-friendly interfaces.",
  "design accessible web experiences.",
  "craft beautiful and functional UIs.",
  "design seamless digital experiences.",
  "create pixel-perfect interfaces.",
  "build engaging user interfaces.",
  "design responsive web experiences.",
];

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % ROTATING_PHRASES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative md:flex h-auto min-h-screen overflow-auto">
      {/* Left div taking a bit more than half */}
      <div className="md:w-[85%] lg:w-[90%] bg-[#890465] flex items-center md:h-screen">
        <div className="m-12 md:m-10 mt-40 md:w-3/5 lg:pl-16">
          {/* Animated H1 */}
          <h1
            className={`text-[#A1FA8F] font-Montserrat font-bold text-4xl md:text-5xl transition-all duration-1000 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            Frontend
          </h1>

          <h1
            className={`text-[#A1FA8F] font-bold text-4xl md:text-5xl transition-all duration-1000 ease-out transform delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            Developer
          </h1>

          <h3
            className={`text-white mt-4 transition-opacity duration-1000 ease-out delay-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            I focus on user experience and{" "}
            <span className="inline-block min-w-[280px] md:min-w-[320px] text-left align-bottom">
              <span
                key={phraseIndex}
                className="inline-block animate-fadeIn text-[#A1FA8F]"
              >
                {ROTATING_PHRASES[phraseIndex]}
              </span>
            </span>
          </h3>

          <div
            className={`flex flex-wrap gap-6 mt-6 transition-all duration-1000 ease-out delay-450 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A1FA8F] flex-shrink-0" />
              <span className="text-white/90 text-sm">User-first design</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A1FA8F] flex-shrink-0" />
              <span className="text-white/90 text-sm">Clean, modern code</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A1FA8F] flex-shrink-0" />
              <span className="text-white/90 text-sm">Responsive & accessible</span>
            </div>
          </div>

          <div className="flex justify-between mt-10">
            <div
              className={`text-[#A1FA8F] text-sm md:w-[45%] mr-6 transition-all duration-1000 ease-out delay-600 transform ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h4>
              Passionate about crafting intuitive and engaging user experiences, I specialize in building modern, responsive web applications with clean, efficient code and a user-centric design approach.
              </h4>
            </div>

            <div
              className={`text-[#A1FA8F] text-sm md:w-[45%] transition-all duration-1000 ease-out delay-800 transform ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h4>
              I’m driven by curiosity and a constant desire to learn, continuously working to sharpen my skills and take on new challenges. Personal and professional growth are core to my mindset.
              </h4>
            </div>
            
          </div>
          <div
            className={`flex flex-wrap gap-3 mt-6 transition-all duration-1000 ease-out delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="https://github.com/RaphaGil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#A1FA8F] text-[#890465] font-semibold rounded-lg hover:bg-white hover:text-[#890465] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A1FA8F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#890465]"
            >
              <Github size={20} />
              GitHub Profile
            </a>
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border-2 border-[#A1FA8F] text-[#A1FA8F] font-semibold rounded-lg hover:bg-[#A1FA8F] hover:text-[#890465] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A1FA8F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#890465]"
            >
              <Mail size={20} />
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Right div taking the remaining width */}
      <div className="bg-[#A1FA8F] md:w-[40%] lg:w-[50%] flex justify-center items-center h-auto min-h-[50vh] md:h-screen relative">
        {/* Social Media Icons */}
        <div className="hidden md:flex flex-col gap-4 absolute right-4 lg:right-6 top-1/2 -translate-y-1/2">
          <a
            href="https://github.com/RaphaGil"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[#890465] hover:bg-white/50 hover:scale-110 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={28} strokeWidth={0.5} />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[#890465] hover:bg-white/50 hover:scale-110 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} strokeWidth={0.5} />
          </a>
          <a
            href="mailto:raphaela.gil@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[#890465] hover:bg-white/50 hover:scale-110 transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={28} strokeWidth={0.5} />
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/RaphaelaGil_FrontendEngineer.pdf`}
            download
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[#890465] hover:bg-white/50 hover:scale-110 transition-all duration-200"
            aria-label="Download CV"
          >
            <FileText size={28} strokeWidth={0.5} />
          </a>
        </div>

        {/* Mobile Image */}
        <img
          src={`${process.env.PUBLIC_URL}/images/profilemobile.png`}
          alt="Profile"
          className={`block md:hidden w-[70%] max-w-[400px] absolute transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        />
      </div>

      {/* Scroll indicator - bottom of left section */}
      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-[45%] p-2 rounded-full text-[#A1FA8F]/70 hover:text-[#A1FA8F] hover:bg-white/5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A1FA8F] z-10"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </button>

      {/* Desktop Image */}
      <div
        className={`absolute top-1/4 md:left-[50%] lg:left-[55%] transition-all duration-1000 ease-out transform delay-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/profile.png`}
          alt="Profile"
          className="hidden md:block max-w-[500px]"
        />
      </div>
    </div>
  );
}

export default Home;
