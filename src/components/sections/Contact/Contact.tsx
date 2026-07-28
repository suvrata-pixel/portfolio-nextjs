import { Mail } from "lucide-react";
import { siGithub } from "simple-icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F8F5FF] px-6 py-24 sm:py-32"
    >
      
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-violet-200/35 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600">
            Get in Touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Let's Connect
          </h2>
        </div>

        
        <p className="max-w-2xl text-lg leading-8 text-gray-600">
          Whether you're interested in working together, have a project in mind,
          or simply want to say hello, I'd love to hear from you.
        </p>

        
        <div className="flex items-center justify-center gap-5 pt-2">
          
          <a
            href="mailto:suvrataga4@gmail.com"
            aria-label="Send me an email"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white/60 text-gray-700 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:text-violet-600 hover:shadow-[0_8px_25px_rgba(124,58,237,0.2)]"
          >
            <Mail size={21} strokeWidth={1.8} />
          </a>

          
          <a
            href="https://github.com/suvrata-pixel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white/60 text-gray-700 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:text-violet-600 hover:shadow-[0_8px_25px_rgba(124,58,237,0.2)]"
          >
            <svg
              role="img"
              aria-label="GitHub"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <path
                d={siGithub.path}
                fill="currentColor"
              />
            </svg>
          </a>

          
          <a
            href="https://www.linkedin.com/in/suvrata-g-a-5aa226232/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white/60 text-gray-700 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:text-violet-600 hover:shadow-[0_8px_25px_rgba(124,58,237,0.2)]"
          >
            <span className="text-sm font-bold">
              in
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}