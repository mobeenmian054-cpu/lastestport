import React, { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white text-xl fixed w-full z-50 shadow-md">
      <div className="h-16 flex items-center px-6 max-w-7xl mx-auto justify-between">
        {/* Logo */}
        <p className="font-bold">Mobeen Shahid</p>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center gap-8 flex-1">
          <a href="#Hero" className="hover:text-yellow-400">Hero</a>
          <a href="#Skills" className="hover:text-yellow-400">Skills</a>
          <a href="#Education" className="hover:text-yellow-400">Education</a>
          <a href="#Project" className="hover:text-yellow-400">Project</a>
          <a href="#Contact" className="hover:text-yellow-400">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 flex flex-col px-6 py-4 gap-4">
          <a href="#Hero" onClick={() => setOpen(false)}>Hero</a>
          <a href="#Skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#Education" onClick={() => setOpen(false)}>Education</a>
          <a href="#Project" onClick={() => setOpen(false)}>Project</a>
          <a href="#Contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};
