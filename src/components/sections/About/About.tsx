export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-24 sm:py-32"
    >

      
      <div className="pointer-events-none absolute -right-40 top-16 h-72 w-72 rotate-12 rounded-[48%_52%_63%_37%/42%_38%_62%_58%] bg-violet-200/40 blur-2xl sm:-right-32 sm:top-20 sm:h-[28rem] sm:w-[28rem]" />
      <div className="pointer-events-none absolute -right-20 top-32 h-56 w-56 -rotate-12 rounded-[63%_37%_45%_55%/52%_48%_52%_48%] bg-purple-300/25 blur-xl sm:-right-10 sm:top-40 sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute right-10 top-24 h-32 w-32 rotate-45 rounded-[40%_60%_55%_45%/60%_40%_60%_40%] bg-fuchsia-200/25 blur-2xl sm:right-40 sm:top-28 sm:h-40 sm:w-40" />


      <div className="pointer-events-none absolute -bottom-0 -left-40 h-72 w-72 -rotate-12 rounded-[52%_48%_37%_63%/38%_42%_58%_62%] bg-violet-200/35 blur-2xl sm:-left-32 sm:h-[28rem] sm:w-[28rem]" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rotate-12 rounded-[37%_63%_55%_45%/48%_52%_48%_52%] bg-purple-300/20 blur-xl sm:bottom-20 sm:left-10 sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute bottom-32 left-20 h-32 w-32 -rotate-45 rounded-[55%_45%_40%_60%/45%_55%_40%_60%] bg-fuchsia-200/20 blur-2xl sm:bottom-40 sm:left-40 sm:h-40 sm:w-40" />


      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

        
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-600">
            My Story
          </p>

          <h2 className="max-w-md text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            From Physics to Full Stack
          </h2>
        </div>

        
        <div className="flex flex-col gap-8 text-lg leading-8 text-gray-600">

          <p className="text-xl leading-9 text-gray-700 sm:text-2xl sm:leading-10">
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