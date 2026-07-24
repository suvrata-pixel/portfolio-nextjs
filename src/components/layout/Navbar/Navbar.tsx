export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/60 bg-white/55 px-6 py-4 shadow-[0_8px_32px_rgba(76,29,149,0.08)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-semibold tracking-tight text-gray-900"
        >
          Suvrata
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#hero"
            className="text-sm text-gray-700 transition-colors hover:text-violet-600"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm text-gray-700 transition-colors hover:text-violet-600"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-sm text-gray-700 transition-colors hover:text-violet-600"
          >
            Portfolio
          </a>

          <a
            href="/resume/Suvrata-Resume.pdf"
            className="text-sm text-gray-700 transition-colors hover:text-violet-600"
          >
            Resume
          </a>

          <a
            href="#journey"
            className="text-sm text-gray-700 transition-colors hover:text-violet-600"
          >
            Journey
          </a>

          <a
            href="#contact"
            className="text-sm text-gray-700 transition-colors hover:text-violet-600"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}