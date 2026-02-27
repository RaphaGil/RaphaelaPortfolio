import React, { useState, useRef, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  return (
    <div
      id="contact"
      ref={sectionRef}
      className="relative min-h-[500px] flex flex-col items-center justify-center p-8 md:p-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="w-full max-w-2xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl font-bold text-[#890465] mb-4 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          Get in Touch
        </h2>
        <div
          className={`w-16 h-1 bg-[#A1FA8F] rounded-full mx-auto mb-8 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />
        <p
          className={`text-gray-600 text-lg leading-relaxed mb-10 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Got a question, proposal, or just want to say hello? I'd love to hear from you.
        </p>

        <a
          href="mailto:raphaela.gil@yahoo.com"
          className={`inline-flex items-center gap-3 px-6 py-4 bg-[#890465] text-white font-semibold rounded-xl hover:bg-[#6b0350] hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#890465] focus-visible:ring-offset-2 mb-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <Mail size={24} />
          raphaela.gil@yahoo.com
        </a>

        <div
          className={`flex justify-center gap-6 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="https://github.com/RaphaGil"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-[#890465] hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#890465] focus-visible:ring-offset-2"
            aria-label="GitHub"
          >
            <Github size={28} strokeWidth={0.5} />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-[#890465] hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#890465] focus-visible:ring-offset-2"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} strokeWidth={0.5} />
          </a>
          <a
            href="mailto:raphaela.gil@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-[#890465] hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#890465] focus-visible:ring-offset-2"
            aria-label="Email"
          >
            <Mail size={28} strokeWidth={0.5} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
