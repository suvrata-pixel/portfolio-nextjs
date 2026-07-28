import { ExternalLink } from "lucide-react";
import { siGithub } from "simple-icons";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  liveDemo: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "PetStore MERN",
    description:
      "A full-stack MERN pet e-commerce platform featuring user authentication, product and service management, admin controls, image uploads, shopping cart, and MongoDB-powered data management.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/suvrata-pixel/petstore-mern",
    liveDemo: "https://petstore-mern-frontend.vercel.app/",
    image: "/images/projects/petstore-mern.png",
  },
  {
    title: "Subscription Tracker",
    description:
      "A subscription management application to organize and track recurring services and expenses.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "",
    liveDemo: "",
    image: "",
  },
  {
    title: "Mentor Project",
    description:
      "An upcoming full-stack project being developed as part of my mentorship program.",
    technologies: [],
    github: "",
    liveDemo: "",
    image: "",
  },
  {
    title: "Apple Website Clone",
    description:
      "A recreation of Apple's website, built from scratch with a focus on closely matching its visual design, layout, and user interface.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/suvrata-pixel/appleSite_clone",
    liveDemo: "https://suvrata-pixel.github.io/appleSite_clone/",
    image: "/images/projects/apple-clone2.png",
  },
  {
    title: "NatureNourish Landing Page",
    description:
      "A concept landing page for NatureNourish, an imaginary haircare brand, designed from scratch with a focus on visual storytelling, elegant layouts, and cohesive styling using HTML and CSS.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/suvrata-pixel/product_landing_page",
    liveDemo: "https://suvrata-pixel.github.io/product_landing_page/",
    image: "/images/projects/naturenourish.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#F4F1FF] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12">

        
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600">
            Portfolio
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Things I've Built
          </h2>

          <p className="max-w-2xl text-lg leading-8 text-gray-600">
            A selection of projects that reflect my journey through frontend
            development, full-stack applications and creative web experiences.
          </p>
        </div>

        
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col gap-6 rounded-3xl border border-white/70 bg-white/55 p-5 shadow-[0_8px_32px_rgba(76,29,149,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(76,29,149,0.12)] sm:p-8"
            >

              
              <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/60 shadow-sm">

                
                <div className="flex items-center gap-2 border-b border-gray-200/70 bg-white/70 px-3 py-2.5 sm:px-4 sm:py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
                </div>

                
                <div className="relative aspect-video overflow-hidden bg-[#EDE9FE]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-2">
                      <span className="text-sm font-semibold text-violet-600">
                        Coming Soon
                      </span>

                      <span className="text-xs text-gray-500">
                        Project in progress
                      </span>
                    </div>
                  )}
                </div>
              </div>

              
              <div className="flex flex-col gap-4">

                
                <h3 className="text-xl font-semibold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-violet-700 sm:text-2xl">
                  {project.title}
                </h3>

                
                <p className="leading-7 text-gray-600">
                  {project.description}
                </p>

                
                {project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                
                {(project.github || project.liveDemo) && (
                  <div className="flex flex-wrap gap-3 pt-2">

                    
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:text-violet-600"
                      >
                        <svg
                          role="img"
                          aria-label="GitHub"
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                        >
                          <path
                            d={siGithub.path}
                            fill={`#${siGithub.hex}`}
                          />
                        </svg>

                        Source Code
                      </a>
                    )}

                    
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700 hover:shadow-md"
                      >
                        Live Demo

                        <ExternalLink
                          size={16}
                          strokeWidth={2}
                        />
                      </a>
                    )}

                  </div>
                )}

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}