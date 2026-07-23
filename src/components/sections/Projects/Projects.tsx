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
      "A full-stack pet adoption platform built with the MERN stack, featuring authentication, CRUD operations and responsive design.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "",
    liveDemo: "",
    image: "",
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
      "A responsive clone inspired by Apple's website, focusing on clean layouts and modern UI design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "",
    liveDemo: "",
    image: "",
  },
  {
    title: "NatureNourish Landing Page",
    description:
      "A custom-designed landing page for NatureNourish, a fictional hair care brand created from my own concept. The project features original layouts, mock products, customer reviews and a fully responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "",
    liveDemo: "",
    image: "",
  },
];




export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20 flex flex-col gap-8 bg-[#FFF8F2]">
      <h2 className="text-4xl font-bold"> Things I've Built... </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
  <div
    key={project.title}
    className="border rounded-xl p-6 flex flex-col gap-4"
  >
    <h3 className="text-2xl font-semibold">
      {project.title}
    </h3>

    <p>
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className="border rounded-full px-3 py-1 text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
))}
      </div>

    </section>
  );
}