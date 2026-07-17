export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 min-h-screen flex flex-col justify-center gap-6 bg-[#F5F0FF]">
      <h1 className="text-5xl font-bold"> I'm Suvrata G A </h1>

      <p className="text-lg">
        Full Stack Developer | Physics Graduate | Continuous Explorer 
      </p>

      <p className="text-lg">
        From concept to deployment with MERN, Next.js and TypeScript.
      </p>

      <div className="flex gap-4">
        <button className="border px-4 py-2 rounded-lg">View Projects</button>
        <button className="border px-4 py-2 rounded-lg">Download CV</button>
      </div>

      <div className="flex gap-4">
        <button className="border px-3 py-1 rounded-md">GitHub</button>
        <button className="border px-3 py-1 rounded-md">LinkedIn</button>
      </div>
    </section>
  );
}




