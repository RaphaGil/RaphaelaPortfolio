import React from "react";

function About() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl">
        {/* About Me Section */}
        <div className="bg-white p-6 ">
          <h2 className="text-[#890465] text-3xl font-bold pb-4">About Me</h2>
          <p className="mb-4">
            With a strong foundation in problem-solving and communication, I
            have always enjoyed refining processes through innovative ideas.
            After earning my certification as a Frontend Web Developer through
            edX—and completing a year-long internship working on real-world
            projects—I discovered that my passion for coding began with that
            very first "Hello World."
          </p>
          <p className="mb-4">
            Now, living in London, I’m excited to apply my attention to detail,
            creativity, and user-driven mindset to build accessible and engaging
            web applications. I am passionate about creating intuitive and
            enjoyable user experiences, always keeping the customer in mind. I
            thrive in collaborative environments, constantly learning, and
            contributing new ideas with my colleagues to enhance the development
            process.
          </p>
        </div>

        {/* Skills Image */}
        <div className="bg-white p-6  flex justify-center hidden md:block">
          <img
            src={`${process.env.PUBLIC_URL}/images/skillspic.png`}
            alt="Skills"
            className="w-full max-w-xs h-auto object-cover"
          />
        </div>

        {/* About Me Image */}
        <div className="bg-white p-6  flex justify-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/aboutmepic.png`}
            alt="About Me"
            className="hidden md:block w-full max-w-xs h-auto object-cover"
          />
        </div>

        {/* Skills Section */}
        <div className="bg-white p-6  ">
          <h2 className="text-[#890465] text-3xl font-bold pb-4">Skills</h2>

          <ul className="flex flex-wrap gap-2 mb-10">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Git",
              "GitHub",
              "Responsive Design",
              "SEO",
              "Terminal",
            ].map((skill) => (
              <li
                key={skill}
                className=" md:px-3 py-1 rounded-md text-sm text-black"
              >
                {skill}
              </li>
            ))}
          </ul>
          <a
            href="/RaphaelaGil_FrontendWebDeveloper.pdf" // Replace with your actual CV file path
            target="_blank"
            rel="noopener noreferrer"
            className=" mx-2 border-2 rounded-md p-2 round-2 border-[#890465]  bg-[#890465] text-white hover:text-[#890465] hover:bg-white"
          >
            {" "}
            My CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
