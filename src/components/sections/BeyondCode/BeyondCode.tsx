import Image from "next/image";

export default function BeyondCode() {
  return (
    <section
      id="beyond-code"
      className="bg-[#F9F7FC] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12">

        
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600">
            Beyond the Screen
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Beyond Code
          </h2>

          <p className="max-w-3xl text-lg leading-8 text-gray-600">
            From the universe to the smallest details, curiosity has always
            been part of my journey.
          </p>
        </div>

        
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">

          
          <div className="group overflow-hidden rounded-3xl border border-white/70 bg-white/40 p-2 shadow-[0_20px_60px_rgba(76,29,149,0.12)]">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/profile/beyond-code.jpeg"
                alt="Books, laptop, flowers and everyday objects representing my interests beyond coding."
                width={700}
                height={500}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          
          <div className="space-y-7 text-[16px] leading-7 text-gray-700 sm:text-[17px] sm:leading-8">
            <p className="font-serif italic">
              For me, curiosity doesn't end when I step away from my computer.
              It's something that naturally finds its way into many parts of my
              life. I enjoy exploring ideas across science, creativity and
              culture, whether it's understanding the universe through
              astrophysics, wondering about the mysteries of quantum mechanics,
              reading about evolution, or simply following topics that make me
              pause and think a little deeper.
            </p>

            <p className="font-serif italic">
              Outside of technology, I enjoy reading, listening to music,
              creating things through art and DIY crafts, and watching films and
              series that tell compelling stories across different genres. I
              have a special appreciation for science fiction, but I'm equally
              drawn to narratives that inspire thought, emotion and imagination.
              I also enjoy exploring literature, art and different cultures,
              which continually broaden my perspective and often become
              unexpected sources of inspiration.
            </p>

            <p className="font-serif italic">
              I believe that some of the best ideas come from connecting
              different disciplines. The same curiosity that draws me toward
              science and creativity also shapes the way I design, solve
              problems and build digital experiences. For me, learning is not
              confined to a profession—it's a way of understanding the world.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}