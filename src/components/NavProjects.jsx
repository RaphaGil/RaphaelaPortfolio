import React from 'react';
import { Link } from 'react-router-dom';
import { FileDown } from 'lucide-react';

function NavProjects() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/logoprojects.png`}
            className="h-10 md:h-12 w-auto"
            alt="Raphaela Gil - Logo"
          />
        </Link>
        <div className="flex items-center gap-4">
          <a
            href={`${process.env.PUBLIC_URL}/RaphaelaGil_FrontendEngineer.pdf`}
            download
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#890465] border border-[#890465] rounded-lg hover:bg-[#890465] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#890465] focus-visible:ring-offset-2"
          >
            <FileDown size={18} />
            Download my CV
          </a>
          <Link
            to="/"
            className="text-[#890465] font-medium text-sm hover:text-[#A1FA8F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#890465] focus-visible:ring-offset-2 rounded px-2 py-1"
            aria-label="Back to home page"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </header>
  );
}

export default NavProjects;

