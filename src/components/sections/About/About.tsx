export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-24 sm:py-32"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-600">
            My Story
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            From Physics to Full Stack
          </h2>
        </div>

        <div className="flex flex-col gap-6 text-lg leading-8 text-gray-600">
          <p>
            I'm a Full Stack Developer with a background in Physics, maths and
            education, currently building modern web applications using the MERN
            stack, Next.js and TypeScript. I enjoy combining analytical thinking
            with creativity to create digital experiences that are functional,
            intuitive and thoughtfully designed.
          </p>

          <p>
            My journey into technology wasn't a conventional one. It began with
            Physics, where I developed a strong foundation in analytical thinking,
            problem solving and understanding complex systems. Teaching
            mathematics came next, giving me valuable experience in communication,
            simplifying challenging concepts and approaching problems with
            patience and clarity. Today, I bring those experiences into software
            development — building full-stack applications with the same
            curiosity, structure and attention to detail that shaped my earlier
            journey.
          </p>

          <p>
            Curiosity has been a constant throughout my journey. I enjoy exploring
            new ideas, learning new technologies and finding better ways to build
            and create. That same curiosity continues to shape the way I approach
            development and problem solving.
          </p>
        </div>
      </div>
    </section>
  );
}