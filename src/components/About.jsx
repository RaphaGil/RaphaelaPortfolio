import React, { useState, useEffect, useRef } from "react";

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      id="about"
      ref={sectionRef} // Attach the reference
      className="w-full min-h-screen flex flex-col items-center justify-center p-6 md:p-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl">
        {/* About Me Section */}
        <div className="bg-white p-6">
          <h2
            className={`text-[#890465] text-3xl font-bold pb-4 transition-all duration-1000 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            About Me
          </h2>
          <p
            className={`mb-4 transition-all duration-1000 ease-out delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            With a strong foundation in problem-solving and communication, I have always enjoyed refining processes through innovative ideas. After earning my certification as a Frontend Web Developer through edX—and completing a year-long internship working on real-world projects—I discovered that my passion for coding began with that very first "Hello World."
          </p>
          <p
            className={`mb-4 transition-all duration-1000 ease-out delay-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            I’m excited to apply my attention to detail, creativity, and user-driven mindset to build accessible and engaging web applications. I am passionate about creating intuitive and enjoyable user experiences, always keeping the customer in mind. I thrive in collaborative environments, constantly learning, and contributing new ideas with my colleagues to enhance the development process.
          </p>
        </div>

        {/* Skills Image */}
        <div className="bg-white p-6 flex justify-center hidden md:block">
          <img
            src={`${process.env.PUBLIC_URL}/images/skillspic.png`}
            alt="Skills"
            className={`w-full max-w-xs h-auto object-cover transition-all duration-1000 ease-out transform delay-600 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          />
        </div>

        {/* About Me Image */}
        <div className="bg-white p-6 flex justify-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/aboutmepic.png`}
            alt="About Me"
            className={`hidden md:block w-full max-w-xs h-auto object-cover transition-all duration-1000 ease-out transform delay-800 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          />
        </div>

        {/* Skills Section */}
        <div className="bg-white p-6">
          <h2
            className={`text-[#890465] text-3xl font-bold pb-4 transition-all duration-1000 ease-out transform delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            Skills
          </h2>

          <ul className="flex flex-wrap  mb-10">
            {[
              " HTML |",
              " CSS |",
              " JavaScript |",
              " React |",
              "Next.js",
              " Boostrap |",
              " Tailwind |",
              " jQuery |",
              " Node.js |", 
              " Supabase |", 
              " APIs |",
              " Git |",
              " GitHub |",
              " Responsive Design |",
              " Figma |",
              " SEO |",
              " Terminal",
            ].map((skill, index) => (
              <li
                key={skill}
                className={`md:px-3 py-1 rounded-md text-sm text-black transition-all duration-1000 ease-out transform  ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                {skill}
              </li>
            ))}
          </ul>

          <a
            href={`${process.env.PUBLIC_URL}/RaphaelaGil_FrontendEngineer.pdf`}
            download
            className="mx-2 border-2 rounded-md p-2 border-[#890465] bg-[#890465] text-white hover:text-[#890465] hover:bg-white transition-all duration-1000 ease-out transform delay-1500"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(10px)",
            }}
          >
            My CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
