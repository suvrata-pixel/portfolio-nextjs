export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#FAF9FF] px-6 pt-32 pb-20"
    >
      
      <div className="absolute left-1/2 top-1/3 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-200/40 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-5xl flex-col justify-center gap-8">
        <div className="flex flex-col gap-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Suvrata G A
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-gray-600 sm:text-2xl">
            Full Stack Developer | Physics Graduate | Continuous Explorer
          </p>

          <p className="max-w-2xl text-lg leading-8 text-gray-500">
            From concept to deployment with MERN, Next.js and TypeScript.
          </p>
        </div>

        
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-violet-600 px-6 py-3 font-medium text-white shadow-lg shadow-violet-600/20 transition-all hover:-translate-y-1 hover:bg-violet-700"
          >
            View Projects
          </a>

          <a
            href="/resume/Suvrata-Resume.pdf"
            className="rounded-full border border-white/70 bg-white/55 px-6 py-3 font-medium text-gray-800 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/75"
          >
            Download CV
          </a>
        </div>

        
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/suvrata-pixel"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/70 bg-white/55 px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-1 hover:text-violet-600"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/suvrata-g-a-5aa226232/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/70 bg-white/55 px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-1 hover:text-violet-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}