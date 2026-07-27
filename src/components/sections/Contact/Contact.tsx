import { Mail } from "lucide-react";
import { siGithub } from "simple-icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-20 text-center"
    >
      <div className="flex flex-col items-center gap-6">
        
        <h2 className="text-4xl font-bold">
          Let's Connect
        </h2>

        
        <p className="max-w-2xl text-gray-600 leading-7">
          Whether you're interested in working together, have a project in mind,
          or simply want to say hello, I'd love to hear from you.
        </p>

        
        <div className="flex items-center justify-center gap-5">

          
          <a
            href="mailto:suvrataga4@gmail.com"
            aria-label="Send me an email"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:text-violet-600 hover:shadow-[0_8px_25px_rgba(124,58,237,0.2)]"
          >
            <Mail size={21} strokeWidth={1.8} />
          </a>

          
          <a
            href="https://github.com/suvrata-pixel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:text-violet-600 hover:shadow-[0_8px_25px_rgba(124,58,237,0.2)]"
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
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:text-violet-600 hover:shadow-[0_8px_25px_rgba(124,58,237,0.2)]"
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