import React from 'react'
import { Github, Linkedin, Mail } from "lucide-react"; // Import icons

function Contact() {
  return (
    <div className="relative h-[400px] text-center flex flex-col items-center p-12 gap-10">
      <div> 
      <img src="/aboutmepic.png" alt="Skills" className="absolute inset-0  w-2/3 h-2/3 object-contain -z-10" />
      <h2 className="text-3xl font-bold text-[#890465] mb-8">Contact</h2>
    <p className='font-thin'>Got a question or proposal, or just want to say hello? Go ahead. Send me an email or contact me on social media.</p>
    </div>


    <div className="flex justify-center items-center ">
          {/* Group of Social Media Buttons */}
          <a
            href="https://github.com/RaphaGil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-[#890465] mx-2"
          >
            <Github size={30} strokeWidth={0.4} /> {/* Thinner icon */}
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-[#890465] mx-2"
          >
            <Linkedin size={30} strokeWidth={0.4} /> {/* Thinner icon */}
          </a>
          <a
            href="mailto:raphaela.gil@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-[#890465] mx-2"
          >
            <Mail size={30} strokeWidth={0.4} /> {/* Thinner icon */}
          </a>
        </div>
    </div>
  )
}

export default Contact
