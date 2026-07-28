"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/70 bg-white/60 px-6 py-3 shadow-[0_10px_40px_rgba(76,29,149,0.10)] backdrop-blur-xl">
      <div className="flex items-center justify-between">

        
        <a
          href="#hero"
          onClick={() => setIsOpen(false)}
          className="text-xl font-semibold tracking-tight text-gray-900 transition-colors hover:text-violet-600"
        >
          Suvrata
        </a>

        
        <div className="hidden items-center gap-7 md:flex">
          <a
            href="#hero"
            className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-violet-600"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-violet-600"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-violet-600"
          >
            Portfolio
          </a>

          <a
            href="/resume/Suvrata-Resume.pdf"
            className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-violet-600"
          >
            Resume
          </a>

          <a
            href="#journey"
            className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-violet-600"
          >
            Journey
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-violet-600"
          >
            Contact
          </a>
        </div>

        
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/60 text-gray-700 transition-colors hover:text-violet-600 md:hidden"
        >
          <span className="text-xl">
            {isOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      
      {isOpen && (
        <div className="mt-4 flex flex-col gap-2 border-t border-gray-200/60 pt-4 md:hidden">
          <a
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-violet-50 hover:text-violet-600"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-violet-50 hover:text-violet-600"
          >
            About
          </a>

          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-violet-50 hover:text-violet-600"
          >
            Portfolio
          </a>

          <a
            href="/resume/Suvrata-Resume.pdf"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-violet-50 hover:text-violet-600"
          >
            Resume
          </a>

          <a
            href="#journey"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-violet-50 hover:text-violet-600"
          >
            Journey
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-violet-50 hover:text-violet-600"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}