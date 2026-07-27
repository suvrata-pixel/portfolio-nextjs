import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siBootstrap,
  siNodedotjs,
  siExpress,
  siMongodb,
  siMongoose,
  siGit,
  siGithub,
  siPostman,
  siVscodium,
  siVercel,
  siRender,
} from "simple-icons";

type Skill = {
  name: string;
  icon: typeof siHtml5;
};

const techStack: Skill[] = [
  { name: "HTML5", icon: siHtml5 },
  { name: "CSS3", icon: siCss },
  { name: "JavaScript", icon: siJavascript },
  { name: "TypeScript", icon: siTypescript },
  { name: "React", icon: siReact },
  { name: "Next.js", icon: siNextdotjs },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "Bootstrap", icon: siBootstrap },
  { name: "Node.js", icon: siNodedotjs },
  { name: "Express.js", icon: siExpress },
  { name: "MongoDB", icon: siMongodb },
  { name: "Mongoose", icon: siMongoose },
  { name: "Git", icon: siGit },
  { name: "GitHub", icon: siGithub },
  { name: "Postman", icon: siPostman },
  { name: "VS Code", icon: siVscodium },
  { name: "Vercel", icon: siVercel },
  { name: "Render", icon: siRender },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white px-6 py-24 sm:py-32"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600">
            Technologies
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Tech Stack
          </h2>

          <p className="max-w-2xl text-lg leading-8 text-gray-600">
            Technologies and tools I use to build, develop and bring ideas to
            life.
          </p>
        </div>

        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {techStack.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-white/70 bg-white/55 p-5 shadow-[0_8px_32px_rgba(76,29,149,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-200 hover:bg-white/75 hover:shadow-[0_16px_32px_rgba(76,29,149,0.1)]"
              >
              <svg
                  role="img"
                  aria-label={skill.name}
                  viewBox="0 0 24 24"
                  className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
                >
                <path
                  d={Icon.path}
                  fill={`#${Icon.hex}`}
                />
              </svg>

                <span className="text-center text-sm font-medium text-gray-700">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}