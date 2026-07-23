type Skill = {
  name: string;
};

const techStack: Skill[] = [
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "Bootstrap" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "MongoDB" },
  { name: "Mongoose" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "Postman" },
  { name: "VS Code" },
  { name: "Vercel" },
  { name: "Render" },
];


export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-20 flex flex-col gap-8 bg-[#F4F7FF]">
      <h2 className="text-4xl font-bold">
      Tech Stack
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {techStack.map((skill) => (
      <div
        key={skill.name}
        className="border rounded-xl p-6 text-center"
      >
      {skill.name}
      </div>
      ))}
    </div>

    </section>
  );
}
