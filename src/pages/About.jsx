import React from "react";

function About() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl">
        {/* About Me Section */}
        <div className="bg-white p-6 ">
          <h2 className="text-[#890465] text-3xl font-bold pb-4">About Me</h2>
          <p className="text-black">
            I'm probably not the typical designer positioned behind an
            Illustrator artboard adjusting pixels, but I design. Immersed in
            stylesheets tweaking font sizes and contemplating layouts is where
            you'll find me (~_^). I'm committed to creating fluent user
            experiences while staying fashionable.
          </p>
        </div>

        {/* Skills Image */}
        <div className="bg-white p-6  flex justify-center hidden md:block">
          <img src="/skillspic.png" alt="Skills" className="w-full max-w-xs h-auto object-cover" />
        </div>

        {/* About Me Image */}
        <div className="bg-white p-6  flex justify-center">
          <img src="/aboutmepic.png" alt="About Me" className="hidden md:block w-full max-w-xs h-auto object-cover" />
        </div>

        {/* Skills Section */}
        <div className="bg-white p-6  ">
          <h2 className="text-[#890465] text-3xl font-bold pb-4">Skills</h2>
       
          <ul className="flex flex-wrap gap-2 mb-10">
            {["HTML", "CSS", "JavaScript", "React", "Git", "GitHub", "Responsive Design", "SEO", "Terminal"].map((skill) => (
              <li key={skill} className=" px-3 py-1 rounded-md text-sm text-black">
                {skill}
              </li>
            ))}
          </ul>
          <a
  href="/RaphaelaGil_FrontendWebDeveloper.pdf" // Replace with your actual CV file path
  target="_blank"
  rel="noopener noreferrer"
  className=" mx-2 border-2 p-2 round-2 border-[#890465]  bg-[#890465] text-white hover:text-[#890465] hover:bg-white"
> My CV
</a>
          
        </div>

      </div>
    </div>
  );
}

export default About;

